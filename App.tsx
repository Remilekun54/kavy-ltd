
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence, useScroll, useTransform } from 'framer-motion';
import { 
  Building2, Layers, Settings, HardHat, Cpu, Factory, Paintbrush, 
  ArrowUpRight, Menu, X, Phone, Hexagon, Globe, Sparkles, 
  ChevronDown, ChevronRight, Box, BarChart3, ShieldCheck, 
  Users, Target, Zap, Heart, CheckCircle2, Layout, Scan,
  Database, Briefcase, Ruler, Mail, MapPin, Linkedin, Facebook, Instagram,
  History, Eye, Shield, Award, HelpCircle, BriefcaseBusiness, TrendingDown, TrendingUp,
  Search, Workflow, Leaf, Lock, Handshake, Microscope
} from 'lucide-react';
import AIConsultant from './components/AIConsultant';

const SECTIONS = [
  { id: 'hero', label: 'Home', icon: <Box size={16} /> },
  { id: 'about-summary', label: 'Vision', icon: <Globe size={16} /> },
  { id: 'divisions', label: '7 Divisions', icon: <Layers size={16} /> },
  { id: 'portfolio', label: 'Portfolio', icon: <Hexagon size={16} /> },
  { id: 'reviews', label: 'Impact', icon: <Sparkles size={16} /> },
  { id: 'contact', label: 'Strategic Link', icon: <Phone size={16} /> }
];

const ABOUT_SUB_SECTIONS = [
  { id: 'story', label: 'Our Story', icon: <History size={14} /> },
  { id: 'vision', label: 'Vision & Mission', icon: <Eye size={14} /> },
  { id: 'values', label: 'Core Values', icon: <Target size={14} /> },
  { id: 'leadership', label: 'Leadership', icon: <Users size={14} /> },
  { id: 'advantage', label: 'Advantage', icon: <Award size={14} /> },
  { id: 'operating', label: 'Operating Model', icon: <Workflow size={14} /> }
];

const FULL_SERVICES = [
  {
    id: 'coatings',
    title: 'KAVY COATINGS',
    subtitle: 'Surface Protection Systems',
    icon: <Paintbrush size={18} />,
    desc: 'Engineering systems that maximize durability, safety, and long-term asset value.',
    images: [
      'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&w=800',
      'https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?auto=format&w=800',
      'https://images.unsplash.com/photo-1504148455328-c376907d081c?auto=format&w=800'
    ],
    subs: [
      { name: 'Architectural & Commercial', items: ['Interior surface painting', 'Exterior weather-resistant', 'Texture finishes', 'Sustainability low-VOC'] },
      { name: 'Industrial Protective', items: ['Anti-corrosion systems', 'Fire-retardant surfaces', 'Chemical-resistant tank protection'] },
      { name: 'Specialty Solutions', items: ['Antimicrobial hospital-grade', 'Anti-graffiti finishes', 'UV-stable exterior'] }
    ],
    value: 'Prolonged asset lifetime, hygiene safety, and brand alignment.'
  },
  {
    id: 'design',
    title: 'KAVY DESIGN',
    subtitle: 'AI & Simulation',
    icon: <Scan size={18} />,
    desc: 'Digital visualization meets predictive aesthetics and building performance modeling.',
    images: [
      'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&w=800',
      'https://images.unsplash.com/photo-1581291417006-03e3871f328f?auto=format&w=800'
    ],
    subs: [
      { name: 'Visualization', items: ['3D interior renderings', 'VR walkthroughs', 'Color psychology simulation'] },
      { name: 'Performance AI', items: ['Durability weathering forecast', 'Energy impact modeling', 'Lifecycle material forecasting'] }
    ],
    value: 'Realistic expectations, data-informed design, and reduced revisions.'
  },
  {
    id: 'spaces',
    title: 'KAVY SPACES',
    subtitle: 'Interior Execution',
    icon: <Layout size={18} />,
    desc: 'Integrated space finishing, custom furniture production, and full-stack turnkey fit-outs.',
    images: [
      'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800',
      'https://images.unsplash.com/photo-1505691938895-1758d7eaa511?auto=format&w=800'
    ],
    subs: [
      { name: 'Interior Finishes', items: ['Acoustic ceiling systems', 'Epoxy & luxury flooring', 'Modular partitioning'] },
      { name: 'Custom Furniture', items: ['Bespoke workspace furniture', 'Corporate identity fixtures', 'Workspace efficiency designs'] },
      { name: 'Turnkey Services', items: ['Office transformations', 'Full fit-out project management', 'Safety commissioning'] }
    ],
    value: 'Optimized human performance and rapid space transformation.'
  },
  {
    id: 'infrastructure',
    title: 'KAVY INFRASTRUCTURE',
    subtitle: 'Public & Industrial Assets',
    icon: <HardHat size={18} />,
    desc: 'Protecting and renewing nation-scale assets from bridges to airports.',
    images: [
      'https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800',
      'https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&w=800'
    ],
    subs: [
      { name: 'Surface Protection', items: ['Bridge painting', 'Highway markings', 'Marine port protection'] },
      { name: 'Asset renewal', items: ['Structural repainting', 'Crack sealing', 'Joint repair overlays'] }
    ],
    value: 'Regulatory compliance and extended lifecycle of public assets.'
  },
  {
    id: 'maintenance',
    title: 'KAVY MAINTENANCE',
    subtitle: 'Predictive Care',
    icon: <Settings size={18} />,
    desc: 'Asset management powered by predictive data and IoT sensors.',
    images: [
      'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&w=800',
      'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=800'
    ],
    subs: [
      { name: 'Preventive Programs', items: ['Inspection routines', 'Sealant moisture assessment', 'Scheduled cycles'] },
      { name: 'Predictive Engine', items: ['IoT condition monitoring', 'Asset health dashboards', 'Impending fault alerts'] }
    ],
    value: 'Predictable maintenance budgeting and reduced failure risk.'
  },
  {
    id: 'manufacturing',
    title: 'KAVY MANUFACTURING',
    subtitle: 'Vertical Integration',
    icon: <Factory size={18} />,
    desc: 'Vertical production of specialty coatings and professional application tools.',
    images: [
      'https://images.unsplash.com/photo-1530124560676-41bc1275d4d4?auto=format&w=800',
      'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&w=800'
    ],
    subs: [
      { name: 'Production Lines', items: ['Architectural paints', 'Industrial chemicals', 'Low-VOC formulations'] },
      { name: 'Equipment & Tools', items: ['Professional sprayers', 'Measurement & testing tools', 'Safety equipment'] }
    ],
    value: 'Supply chain control and local climate optimized quality.'
  },
  {
    id: 'systems',
    title: 'KAVY SYSTEMS',
    subtitle: 'Asset Intelligence',
    icon: <Cpu size={18} />,
    desc: 'The software layer driving building intelligence and field collaboration.',
    images: [
      'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800',
      'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&w=800'
    ],
    subs: [
      { name: 'Software Platforms', items: ['Asset performance registry', 'ML predictive maintenance', 'Mobile field tools'] },
      { name: 'Asset Dashboards', items: ['Historical data registry', 'Interactive alerting', 'Custom reporting'] }
    ],
    value: 'Future-ready urban resilience and transparent lifecycle reporting.'
  }
];

const KavyLogo = ({ className = "w-10 h-10" }) => (
  <div className={`${className} relative`}>
    <svg viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
      <path d="M50 5L89.4 27.5V72.5L50 95L10.6 72.5V27.5L50 5Z" stroke="currentColor" strokeWidth="6" strokeLinejoin="round" />
      <path d="M35 30V70M35 50L65 30M35 50L65 70" stroke="currentColor" strokeWidth="8" strokeLinecap="round" strokeLinejoin="round" />
      <circle cx="35" cy="50" r="4" fill="currentColor" />
      <circle cx="65" cy="30" r="4" fill="#ccff00" />
      <circle cx="65" cy="70" r="4" fill="#ccff00" />
    </svg>
  </div>
);

const App: React.FC = () => {
  const [activeSection, setActiveSection] = useState('hero');
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isMenuExpanded, setIsMenuExpanded] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [expandedDivision, setExpandedDivision] = useState<string | null>(null);
  const containerRef = useRef<HTMLDivElement>(null);

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    if (currentView !== 'home') return;
    const scrollPos = e.currentTarget.scrollTop;
    const height = window.innerHeight;
    const index = Math.round(scrollPos / height);
    const targetSection = SECTIONS[index]?.id;
    if (targetSection && targetSection !== activeSection) {
      setActiveSection(targetSection);
    }
  };

  const scrollToSection = (id: string) => {
    setCurrentView('home');
    setTimeout(() => {
      const el = document.getElementById(id);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToService = (divisionId: string) => {
    setCurrentView('services');
    setTimeout(() => {
      const el = document.getElementById(`serv-${divisionId}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToAboutSection = (sectionId: string) => {
    setCurrentView('about');
    setTimeout(() => {
      const el = document.getElementById(`about-${sectionId}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative h-screen w-full flex overflow-hidden bg-white text-[#1d1d1f]">
      {/* Brand Watermark Overlay */}
      <div className="fixed top-8 left-8 z-[100] flex flex-col pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
          <KavyLogo className="w-10 h-10 text-black" />
          <div className="hidden sm:block">
            <h1 className="font-heading font-black text-xl tracking-tighter uppercase">KAVY LTD</h1>
            <p className="text-[8px] tracking-[0.4em] text-slate-400 uppercase font-black">Building Intelligence</p>
          </div>
        </motion.div>
      </div>

      {/* Main Viewport Container */}
      <motion.div 
        layout
        className={`relative bg-white transition-all duration-700 ease-in-out ${isMenuOpen ? 'w-full lg:w-[calc(100%-280px)]' : 'w-full'} h-full overflow-hidden`}
      >
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div 
              key="home"
              initial={{ opacity: 0 }} 
              animate={{ opacity: 1 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="section-snap h-full w-full overflow-y-scroll"
              onScroll={handleScroll}
              ref={containerRef}
            >
              <HeroSection id="hero" onAction={() => setCurrentView('services')} />
              <VisionSummarySection id="about-summary" onAction={() => setCurrentView('about')} />
              <DivisionsGridSection id="divisions" onDivisionClick={(id) => navigateToService(id)} />
              <HomePortfolioSection id="portfolio" />
              <HomeReviewsSection id="reviews" />
              <ContactSection id="contact" />
              <Footer />
            </motion.div>
          ) : currentView === 'about' ? (
            <motion.div 
              key="about"
              initial={{ opacity: 0, x: -100 }} 
              animate={{ opacity: 1, x: 0 }} 
              exit={{ opacity: 0, x: 100 }}
              className="h-full w-full overflow-y-auto bg-white"
            >
              <AboutUsPage onBack={() => setCurrentView('home')} />
              <Footer />
            </motion.div>
          ) : (
            <motion.div 
              key="services"
              initial={{ opacity: 0, y: 50 }} 
              animate={{ opacity: 1, y: 0 }} 
              exit={{ opacity: 0, scale: 0.95 }}
              className="h-full w-full overflow-y-auto bg-white"
            >
              <ServicesPage onBack={() => setCurrentView('home')} />
              <Footer />
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside 
            initial={{ x: 300, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: 300, opacity: 0 }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed lg:relative top-0 right-0 h-screen w-[280px] bg-[#f5f5f7] border-l border-slate-200 z-[110] flex flex-col shadow-2xl lg:shadow-none overflow-hidden"
          >
            <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-200 mb-4">
              <span className="text-[9px] font-black uppercase tracking-[0.4em] text-slate-400">Hub Console</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 hover:text-black transition-colors lg:hidden"><X size={18} /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 space-y-4 py-4 no-scrollbar">
              
              {/* ABOUT US Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsAboutExpanded(!isAboutExpanded)}
                  className={`w-full group p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between ${isAboutExpanded ? 'bg-black text-white' : 'bg-white border-slate-200 hover:border-black'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isAboutExpanded ? 'bg-[#ccff00] text-black' : 'bg-slate-50 text-slate-400'}`}>
                      <Users size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest">ABOUT US</span>
                      <p className="text-[7px] text-slate-400 font-bold uppercase mt-1">Our DNA</p>
                    </div>
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isAboutExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isAboutExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-1 pl-4">
                      <button onClick={() => setCurrentView('about')} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2">
                         <Box size={14} /> Full Profile
                      </button>
                      {ABOUT_SUB_SECTIONS.map((sub) => (
                        <button
                          key={sub.id}
                          onClick={() => navigateToAboutSection(sub.id)}
                          className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2"
                        >
                          {sub.icon} {sub.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* SERVICES Dropdown */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsServicesExpanded(!isServicesExpanded)}
                  className={`w-full group p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between ${isServicesExpanded ? 'bg-black text-white' : 'bg-white border-slate-200 hover:border-black'}`}
                >
                  <div className="flex items-center gap-3">
                    <div className={`p-2 rounded-xl ${isServicesExpanded ? 'bg-[#ccff00] text-black' : 'bg-slate-50 text-slate-400'}`}>
                      <Briefcase size={18} />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-[10px] font-black uppercase tracking-widest">SERVICES</span>
                      <p className="text-[7px] text-slate-400 font-bold uppercase mt-1">7 Divisions</p>
                    </div>
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isServicesExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isServicesExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-1 pl-4">
                      {FULL_SERVICES.map((serv) => (
                        <button
                          key={serv.id}
                          onClick={() => navigateToService(serv.id)}
                          className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2"
                        >
                          {serv.icon} {serv.title}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>

              {/* EXPLORE KAVY (Sections) */}
              <div className="space-y-2">
                <button
                  onClick={() => setIsMenuExpanded(!isMenuExpanded)}
                  className={`w-full group p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between ${isMenuExpanded ? 'bg-[#ccff00] border-[#ccff00] text-black shadow-lg shadow-lime-200' : 'bg-white border-slate-200 hover:border-black'}`}
                >
                  <div className="flex flex-col">
                    <span className="text-[10px] font-black uppercase tracking-widest">EXPLORE KAVY</span>
                    <p className="text-[7px] text-slate-400 font-bold uppercase mt-1">Sections</p>
                  </div>
                  <ChevronDown size={14} className={`transition-transform duration-300 ${isMenuExpanded ? 'rotate-180' : ''}`} />
                </button>

                <AnimatePresence>
                  {isMenuExpanded && (
                    <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-1 pl-4">
                      {SECTIONS.map((section) => (
                        <button
                          key={section.id}
                          onClick={() => scrollToSection(section.id)}
                          className={`flex items-center gap-3 p-3 rounded-xl text-left font-black uppercase text-[9px] tracking-widest transition-all ${activeSection === section.id && currentView === 'home' ? 'bg-black text-white' : 'text-slate-400 hover:text-black hover:bg-slate-200'}`}
                        >
                          <span className="p-1.5 bg-white rounded-lg shadow-sm text-black">{section.icon}</span>
                          {section.label}
                        </button>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>

            <div className="p-8 border-t border-slate-200 flex flex-col gap-4">
              <a href="tel:+2348144130329" className="text-[10px] font-black flex items-center gap-2 text-slate-600 hover:text-[#ccff00] transition-colors uppercase tracking-widest">
                <Phone size={14} /> Contact Executive
              </a>
            </div>
          </motion.aside>
        )}
      </AnimatePresence>

      {!isMenuOpen && (
        <button onClick={() => setIsMenuOpen(true)} className="fixed top-8 right-8 z-[120] bg-black text-white p-5 rounded-3xl shadow-2xl hover:bg-[#ccff00] hover:text-black transition-all group">
          <Menu size={20} className="group-hover:rotate-90 transition-transform" />
        </button>
      )}

      <AIConsultant />
    </div>
  );
};

// --- ABOUT US PAGE COMPONENTS ---

const AboutUsPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      {/* Intro Header */}
      <section className="bg-black text-white px-8 lg:px-24 py-40 lg:py-64 overflow-hidden relative">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          animate={{ scale: 1, opacity: 0.15 }}
          transition={{ duration: 2 }}
          className="absolute inset-0 pointer-events-none"
        >
          <img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" alt="Built Environment" />
        </motion.div>
        <div className="max-w-7xl mx-auto relative z-10">
          <motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}>
             <span className="text-[11px] font-black uppercase tracking-[0.5em] text-[#ccff00] mb-10 block">Systemic Built Environments</span>
             <h2 className="font-heading font-black text-6xl lg:text-9xl tracking-tighter leading-none mb-14 uppercase">
                INTELLIGENCE <br /> <span className="text-white/20 italic">BEYOND</span> <br /> SURFACES.
             </h2>
             <p className="text-slate-400 text-xl lg:text-4xl font-light leading-tight max-w-4xl italic">
               KAVY is not a painting company. KAVY is a built-environment systems company designed to redefine how Africa protects and maintains its physical assets.
             </p>
          </motion.div>
        </div>
      </section>

      {/* 1. Our Story - Problem & Insight (Split-Screen Animation) */}
      <section id="about-story" className="py-32 lg:py-48 px-8 lg:px-24 overflow-hidden border-b border-slate-100 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-24 items-center">
            <motion.div 
               whileInView={{ opacity: 1, x: 0 }} 
               initial={{ opacity: 0, x: -50 }}
               viewport={{ once: true }}
               transition={{ duration: 0.8 }}
               className="space-y-12"
            >
              <div className="flex items-center gap-4 text-slate-400">
                 <History size={24} /> <span className="font-black uppercase tracking-[0.3em] text-xs">The Origin</span>
              </div>
              <h3 className="font-heading text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none italic">WHY KAVY <br /> EXISTS.</h3>
              
              <div className="space-y-8">
                 <div className="p-8 bg-[#1d1d1f] text-white rounded-[50px] shadow-2xl relative overflow-hidden group">
                    <img src="https://images.unsplash.com/photo-1541913054-21199a42d530?auto=format&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-700" alt="Problem" />
                    <div className="relative z-10">
                       <h4 className="text-[#ccff00] font-black uppercase text-xs tracking-widest mb-4">The Problem</h4>
                       <p className="text-slate-300 font-light text-sm leading-relaxed">
                          Infrastructure in emerging markets deteriorates years early due to fragmented, labor-dependent, and price-driven maintenance. Traditional contractors focus on one-time jobs, not long-term outcomes.
                       </p>
                    </div>
                 </div>
                 
                 <div className="p-8 bg-slate-50 border-2 border-slate-200 rounded-[50px] relative group overflow-hidden">
                    <div className="relative z-10">
                       <h4 className="text-black font-black uppercase text-xs tracking-widest mb-4">The Insight</h4>
                       <p className="text-slate-500 font-light text-sm leading-relaxed">
                          Finishing, coatings, and maintenance are not cosmetic — they are <span className="text-black font-bold italic">engineering systems</span> determining asset lifespan, safety, and brand perception. KAVY was founded to lead the transition to preventive, data-driven systems.
                       </p>
                    </div>
                 </div>
              </div>
            </motion.div>
            
            <motion.div 
               whileInView={{ opacity: 1, scale: 1 }} 
               initial={{ opacity: 0, scale: 0.8 }}
               viewport={{ once: true }}
               transition={{ duration: 1, type: 'spring' }}
               className="relative"
            >
              <div className="relative rounded-[80px] overflow-hidden h-[700px] shadow-3xl">
                 <img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&w=1200" className="w-full h-full object-cover" alt="Built Environment Insight" />
                 <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-12">
                    <span className="text-[#ccff00] font-black uppercase text-[10px] tracking-widest mb-2">Systems Engineering</span>
                    <p className="text-white text-3xl font-heading font-black tracking-tight leading-tight uppercase">BEYOND THE <br /> COSMETIC LAYER.</p>
                 </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. Vision & Mission (Staggered Fade-Up) */}
      <section id="about-vision" className="py-32 lg:py-64 bg-slate-50 px-8 lg:px-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <motion.div 
                whileInView={{ opacity: 1, y: 0 }} 
                initial={{ opacity: 0, y: 100 }}
                viewport={{ once: true }}
                className="space-y-16"
             >
                <div className="space-y-8">
                   <div className="flex items-center gap-4 text-[#ccff00] bg-black px-6 py-3 rounded-2xl w-fit">
                      <Eye size={20} /> <span className="font-black uppercase tracking-widest text-xs">Our Vision</span>
                   </div>
                   <h3 className="font-heading text-5xl lg:text-7xl font-black uppercase italic leading-none">AFRICA'S LEADING SYSTEMS UNICORN.</h3>
                   <p className="text-slate-500 text-xl font-light leading-relaxed">
                      To become Africa’s leading built-environment systems company, delivering intelligent, durable, and sustainable solutions that sit at the intersection of infrastructure, technology, and manufacturing.
                   </p>
                </div>
                
                <div className="space-y-8 pt-12 border-t border-slate-200">
                   <div className="flex items-center gap-4 text-black border-2 border-black px-6 py-3 rounded-2xl w-fit">
                      <Target size={20} /> <span className="font-black uppercase tracking-widest text-xs">Our Mission</span>
                   </div>
                   <h3 className="font-heading text-5xl lg:text-7xl font-black uppercase leading-none">PERFORMANCE <br /> GUARANTEED.</h3>
                   <p className="text-slate-500 text-xl font-light leading-relaxed">
                      To transform how structures are protected and maintained by delivering data-driven and performance-guaranteed solutions across residential, industrial, and public infrastructure.
                   </p>
                </div>
             </motion.div>
             
             <motion.div 
               whileInView={{ scale: 1.05, opacity: 1 }}
               initial={{ scale: 0.95, opacity: 0 }}
               viewport={{ once: true }}
               transition={{ duration: 1 }}
               className="relative rounded-[80px] overflow-hidden h-[800px] shadow-3xl"
             >
                <img src="https://images.unsplash.com/photo-1449156001934-19918c217523?auto=format&w=1200" className="w-full h-full object-cover" alt="Future City" />
                <div className="absolute inset-0 bg-black/30 backdrop-blur-[2px]"></div>
                <div className="absolute inset-0 p-16 flex flex-col justify-between">
                   <Sparkles className="text-[#ccff00]" size={40} />
                   <div className="space-y-6">
                      <h4 className="text-white text-sm font-black uppercase tracking-[0.5em]">Success Blueprint</h4>
                      <ul className="space-y-4 text-white/80 font-bold uppercase text-[10px] tracking-widest">
                         <li className="flex items-center gap-4"><CheckCircle2 size={16} className="text-[#ccff00]" /> Millions of Managed SQM</li>
                         <li className="flex items-center gap-4"><CheckCircle2 size={16} className="text-[#ccff00]" /> National Infrastructure Contracts</li>
                         <li className="flex items-center gap-4"><CheckCircle2 size={16} className="text-[#ccff00]" /> Proprietary AI Platforms</li>
                      </ul>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </section>

      {/* 3. Core Values (Tilt/Float Stagger) */}
      <section id="about-values" className="py-32 lg:py-48 px-8 lg:px-24 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
             <motion.span whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-slate-400 font-black uppercase text-[10px] tracking-[0.5em] block">The Kavy Compass</motion.span>
             <motion.h3 whileInView={{ y: 0, opacity: 1 }} initial={{ y: 30, opacity: 0 }} className="font-heading text-6xl lg:text-9xl font-black uppercase tracking-tighter italic">CORE VALUES.</motion.h3>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-8">
            {[
              { icon: <Workflow />, title: "Systems Thinking", desc: "We design connected solutions, not isolated services." },
              { icon: <Award />, title: "Excellence by Design", desc: "Quality is engineered into every material and process." },
              { icon: <Shield />, title: "Accountability", desc: "Traceable, auditable, and measurable outcomes." },
              { icon: <Zap />, title: "Purposeful Tech", desc: "Solving real problems, reducing costs, and increasing ROI." },
              { icon: <Leaf />, title: "Sustainability", desc: "Environmental responsibility and workforce growth." }
            ].map((v, i) => (
              <motion.div 
                key={i} 
                whileInView={{ y: 0, opacity: 1 }} 
                initial={{ y: 50, opacity: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1, duration: 0.6 }}
                whileHover={{ y: -10 }}
                className="p-10 border-2 border-slate-100 rounded-[50px] hover:border-[#ccff00] hover:bg-black group transition-all duration-500 text-center relative overflow-hidden"
              >
                 <div className="relative z-10">
                    <div className="w-16 h-16 rounded-3xl bg-slate-50 text-black flex items-center justify-center mx-auto mb-8 group-hover:bg-[#ccff00] group-hover:scale-110 transition-all">
                      {v.icon}
                    </div>
                    <h4 className="font-black uppercase text-xs mb-4 group-hover:text-white tracking-widest">{v.title}</h4>
                    <p className="text-[11px] text-slate-400 group-hover:text-slate-500 leading-relaxed font-light">{v.desc}</p>
                 </div>
                 <div className="absolute top-0 right-0 p-8 opacity-0 group-hover:opacity-10 scale-150 text-white transition-opacity">
                    {v.icon}
                 </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Operating Model (Sequential Flow Animation) */}
      <section id="about-operating" className="py-32 lg:py-64 bg-slate-50 px-8 lg:px-24 scroll-mt-20 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
             <div className="lg:col-span-4 space-y-12">
                <h3 className="font-heading text-5xl lg:text-7xl font-black uppercase tracking-tight leading-none italic">OUR OPERATING <br /> MODEL.</h3>
                <p className="text-slate-500 text-xl font-light leading-relaxed">
                   Explains how KAVY integrates the entire asset lifecycle: from design intelligence to manufacturing and optimization.
                </p>
                <div className="relative rounded-[40px] overflow-hidden h-64 border-4 border-white">
                   <img src="https://images.unsplash.com/photo-1581094288338-2314dddb7e83?auto=format&w=800" className="w-full h-full object-cover" alt="Optimization" />
                </div>
             </div>
             
             <div className="lg:col-span-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { title: "Design", icon: <Scan />, desc: "High-fidelity simulation and building performance modeling." },
                    { title: "Materials", icon: <Microscope />, desc: "Engineering-grade specialty coatings and chemicals." },
                    { title: "Execution", icon: <HardHat />, desc: "Standardized delivery via technology-enabled field teams." },
                    { title: "Monitoring", icon: <Search />, desc: "IoT integration for real-time asset condition tracking." },
                    { title: "Maintenance", icon: <Settings />, desc: "Predictive schedules that prevent asset failure." },
                    { title: "Optimization", icon: <TrendingUp />, desc: "Data-driven insights to reduce lifecycle costs." }
                  ].map((step, i) => (
                    <motion.div 
                       key={i}
                       whileInView={{ x: 0, opacity: 1 }}
                       initial={{ x: 30, opacity: 0 }}
                       viewport={{ once: true }}
                       transition={{ delay: i * 0.1 }}
                       className="p-8 bg-white rounded-[40px] border border-slate-100 flex items-start gap-6 group hover:shadow-2xl transition-all"
                    >
                       <div className="p-4 bg-black text-[#ccff00] rounded-2xl group-hover:scale-110 transition-transform">
                          {step.icon}
                       </div>
                       <div className="space-y-2">
                          <h4 className="font-black uppercase text-sm tracking-widest">{step.title}</h4>
                          <p className="text-xs text-slate-400 font-light leading-relaxed">{step.desc}</p>
                       </div>
                    </motion.div>
                  ))}
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* 5. Leadership & Advisors (Glassmorphism Reveal) */}
      <section id="about-leadership" className="py-32 lg:py-48 px-8 lg:px-24 scroll-mt-20 relative overflow-hidden">
        <div className="absolute inset-0 bg-black pointer-events-none">
           <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&w=2000" className="w-full h-full object-cover opacity-20" alt="Leadership bg" />
        </div>
        <div className="max-w-7xl mx-auto relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-32">
           <motion.div 
             whileInView={{ opacity: 1, x: 0 }}
             initial={{ opacity: 0, x: -50 }}
             viewport={{ once: true }}
             className="space-y-12"
           >
              <h3 className="font-heading text-5xl lg:text-8xl font-black uppercase text-[#ccff00] italic leading-none">LEADERSHIP <br /> & ADVISORS.</h3>
              <p className="text-white text-xl font-light leading-relaxed opacity-60">
                 KAVY is led by a multidisciplinary team spanning engineering, technology, manufacturing, and strategy. Supported by a board of mentors with deep infrastructure expertise.
              </p>
              
              <div className="p-10 backdrop-blur-3xl bg-white/5 border border-white/10 rounded-[60px] space-y-8">
                 <h4 className="text-white font-black uppercase text-sm tracking-widest border-b border-white/10 pb-4">Governance Philosophy</h4>
                 <ul className="space-y-6">
                    <li className="flex items-center gap-4 text-white/80 uppercase font-bold text-[10px] tracking-widest">
                       <Lock size={16} className="text-[#ccff00]" /> Ethical Operations & Transparency
                    </li>
                    <li className="flex items-center gap-4 text-white/80 uppercase font-bold text-[10px] tracking-widest">
                       <TrendingUp size={16} className="text-[#ccff00]" /> Long-Term Value Over Short-Term Gains
                    </li>
                    <li className="flex items-center gap-4 text-white/80 uppercase font-bold text-[10px] tracking-widest">
                       <ShieldCheck size={16} className="text-[#ccff00]" /> Strategic Risk Discipline
                    </li>
                 </ul>
              </div>
           </motion.div>
           
           <motion.div 
             whileInView={{ opacity: 1, scale: 1 }}
             initial={{ opacity: 0, scale: 0.9 }}
             viewport={{ once: true }}
             className="grid grid-cols-1 md:grid-cols-2 gap-6"
           >
              <div className="p-8 bg-white/10 backdrop-blur-2xl rounded-[50px] border border-white/20 hover:bg-[#ccff00] hover:text-black transition-all group">
                 <h5 className="font-black uppercase text-xs mb-6 tracking-widest">Executive Bench</h5>
                 <p className="text-[10px] font-bold uppercase opacity-60 group-hover:opacity-100">Technology • Strategy • Engineering • Manufacturing</p>
              </div>
              <div className="p-8 bg-white/10 backdrop-blur-2xl rounded-[50px] border border-white/20 mt-12 hover:bg-[#ccff00] hover:text-black transition-all group">
                 <h5 className="font-black uppercase text-xs mb-6 tracking-widest">Advisory Council</h5>
                 <p className="text-[10px] font-bold uppercase opacity-60 group-hover:opacity-100">Government Policy • Public Infrastructure • Finance • Data Systems</p>
              </div>
           </motion.div>
        </div>
      </section>

      {/* 6. Why KAVY (Comparative Reveal) */}
      <section id="about-advantage" className="py-32 lg:py-64 px-8 lg:px-24 scroll-mt-20">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-6">
             <h3 className="font-heading text-6xl lg:text-9xl font-black uppercase tracking-tighter italic uppercase italic">THE KAVY ADVANTAGE.</h3>
             <p className="text-slate-400 font-black uppercase text-[10px] tracking-[0.4em]">How We Redefine the Category</p>
          </div>
          
          <motion.div 
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 50, opacity: 0 }}
            viewport={{ once: true }}
            className="overflow-x-auto no-scrollbar rounded-[60px] border-2 border-slate-100"
          >
             <table className="w-full min-w-[800px] border-collapse bg-white">
                <thead>
                   <tr className="bg-black text-white">
                      <th className="p-12 text-left font-black uppercase tracking-widest text-xs">Differentiation Parameter</th>
                      <th className="p-12 text-left font-black uppercase tracking-widest text-xs opacity-50">Traditional Contractor</th>
                      <th className="p-12 text-left font-black uppercase tracking-widest text-xs text-[#ccff00]">The KAVY Way</th>
                   </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                   {[
                     { p: "Contract Type", t: "One-off transaction", k: "Lifecycle partnership", icon: <Handshake /> },
                     { p: "Process Flow", t: "Manual labor reliance", k: "AI-enabled systems", icon: <Cpu /> },
                     { p: "Value Engine", t: "Lowest price bid", k: "Performance-guaranteed ROI", icon: <TrendingUp /> },
                     { p: "Asset Intelligence", t: "Devoid of data", k: "Full digital lifecycle tracking", icon: <Database /> },
                     { p: "Material Control", t: "Outsourced supply", k: "Vertically integrated manufacturing", icon: <Factory /> },
                   ].map((row, i) => (
                     <motion.tr 
                       key={i} 
                       whileHover={{ backgroundColor: '#f5f5f7' }}
                       className="group transition-colors"
                     >
                        <td className="p-10 font-black uppercase text-[10px] tracking-widest flex items-center gap-4 group-hover:translate-x-4 transition-transform">
                           <span className="text-slate-300">{row.icon}</span> {row.p}
                        </td>
                        <td className="p-10 text-sm text-slate-400 font-light italic">{row.t}</td>
                        <td className="p-10 text-sm font-black bg-slate-50 group-hover:bg-[#ccff00]/10 transition-all">{row.k}</td>
                     </motion.tr>
                   ))}
                </tbody>
             </table>
          </motion.div>
        </div>
      </section>

      {/* Commitment to Africa & Sustainability (Photo-Heavy Grid) */}
      <section className="py-32 lg:py-64 bg-black text-white px-8 lg:px-24">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
             <div className="space-y-16">
                <div className="space-y-8">
                   <h3 className="font-heading text-5xl lg:text-7xl font-black uppercase italic leading-none text-[#ccff00]">COMMITMENT <br /> TO AFRICA.</h3>
                   <div className="grid grid-cols-2 gap-8">
                      <div className="space-y-4">
                         <h4 className="font-black uppercase text-xs tracking-widest">Local Production</h4>
                         <p className="text-slate-500 text-xs font-light">Vertically integrating materials to ensure supply resilience.</p>
                      </div>
                      <div className="space-y-4">
                         <h4 className="font-black uppercase text-xs tracking-widest">ESG Leadership</h4>
                         <p className="text-slate-500 text-xs font-light">Low-VOC coatings and lifecycle reporting for green urban growth.</p>
                      </div>
                   </div>
                </div>
                
                <div className="p-10 bg-white/5 border border-white/10 rounded-[60px] flex items-center gap-8">
                   <div className="p-6 bg-[#ccff00] text-black rounded-3xl"><Leaf size={32} /></div>
                   <div className="space-y-2">
                      <h4 className="font-black uppercase text-sm tracking-widest">Workforce Training</h4>
                      <p className="text-slate-500 text-xs">Transforming construction from manual labor to skilled tech-teams.</p>
                   </div>
                </div>
             </div>
             
             <div className="grid grid-cols-2 gap-6 h-[700px]">
                <div className="rounded-[60px] overflow-hidden shadow-2xl">
                   <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=800" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all" alt="Scale" />
                </div>
                <div className="space-y-6">
                   <div className="h-2/3 rounded-[60px] overflow-hidden shadow-2xl">
                      <img src="https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?auto=format&w=800" className="w-full h-full object-cover" alt="Sustainability" />
                   </div>
                   <div className="h-1/3 bg-[#ccff00] rounded-[60px] flex items-center justify-center p-8">
                      <span className="text-black font-heading font-black text-5xl leading-none">100%</span>
                   </div>
                </div>
             </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-40 flex flex-col items-center gap-12 text-center bg-[#f5f5f7]">
          <h3 className="font-heading text-5xl lg:text-9xl font-black tracking-tighter uppercase italic leading-none">PARTNER WITH <br /> <span className="text-[#ccff00] bg-black px-8">THE UNICORN.</span></h3>
          <div className="flex flex-col sm:flex-row gap-8">
             <button onClick={onBack} className="px-16 py-8 bg-black text-white rounded-full font-black text-xs tracking-widest uppercase hover:bg-[#ccff00] hover:text-black transition-all shadow-2xl group flex items-center gap-4">
               Return to HQ <Menu size={16} />
             </button>
             <button className="px-16 py-8 border-2 border-black text-black rounded-full font-black text-xs tracking-widest uppercase hover:bg-black hover:text-[#ccff00] transition-all flex items-center gap-4">
               Brief Our Leadership <ArrowUpRight size={16} />
             </button>
          </div>
      </section>
    </div>
  );
};

// --- REST OF THE APP ---

const HeroSection = ({ id, onAction }: any) => (
  <section id={id} className="snap-item relative flex items-center justify-center p-8 lg:p-24 overflow-hidden">
    <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
      <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_50%_50%,_#ccff00_0%,_transparent_60%)]"></div>
    </div>
    <div className="relative z-10 text-center max-w-4xl">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="inline-flex px-4 py-2 bg-slate-100 rounded-full text-[9px] font-black uppercase tracking-[0.4em] text-slate-500 mb-10">
        Integrating Systems Across Africa
      </motion.div>
      <motion.h2 initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} className="font-heading font-black text-6xl md:text-9xl tracking-tighter leading-[0.85] mb-10 uppercase">
        REDEFINING <br /> <span className="lemon-gradient-text italic">INTELLIGENT</span> <br /> ENVIRONMENTS.
      </motion.h2>
      <div className="flex flex-col sm:flex-row gap-4 justify-center">
        <button onClick={onAction} className="px-10 py-5 bg-black text-white rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-[#ccff00] hover:text-black transition-all shadow-xl">
          Services Portfolio
        </button>
        <button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-5 border-2 border-slate-200 rounded-2xl font-black text-xs tracking-widest uppercase hover:bg-slate-50 transition-all">
          Strategic Link
        </button>
      </div>
    </div>
  </section>
);

const VisionSummarySection = ({ id, onAction }: any) => (
  <section id={id} className="snap-item bg-[#f5f5f7] flex items-center justify-center p-8 lg:p-24">
    <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-16 lg:gap-32 items-center">
      <div className="space-y-10">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-4 py-2 bg-black rounded-lg inline-block">The Kavy Ethos</span>
        <h3 className="font-heading text-5xl md:text-7xl font-black tracking-tight leading-none uppercase italic">BUILT-ENVIRONMENT <br /> SYSTEMS.</h3>
        <p className="text-slate-500 text-xl font-light leading-relaxed">
          KAVY is a built-environment systems company designed to redefine how Africa protects and maintains its physical assets.
        </p>
        <button onClick={onAction} className="group flex items-center gap-4 text-xs font-black uppercase tracking-widest hover:text-[#ccff00] transition-colors">
          About KAVY <ArrowUpRight size={18} />
        </button>
      </div>
      <div className="relative">
        <img src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=1200" alt="Vision" className="rounded-[40px] shadow-3xl object-cover h-[500px] w-full" />
      </div>
    </div>
  </section>
);

const DivisionsGridSection = ({ id, onDivisionClick }: any) => (
  <section id={id} className="snap-item bg-white flex flex-col justify-center p-8 lg:p-24 overflow-hidden">
    <div className="max-w-7xl w-full mx-auto">
      <div className="mb-16">
        <h3 className="font-heading text-4xl lg:text-7xl font-black tracking-tighter uppercase">7 CORE DIVISIONS</h3>
        <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest mt-2 italic underline decoration-[#ccff00] underline-offset-8">Engineering for the Asset Lifecycle</p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {FULL_SERVICES.map((serv) => (
          <motion.div 
            key={serv.id}
            whileHover={{ y: -10 }}
            onClick={() => onDivisionClick(serv.id)}
            className="group relative p-8 bg-[#f5f5f7] rounded-[40px] border border-transparent hover:border-black transition-all cursor-pointer overflow-hidden h-[300px] flex flex-col justify-between"
          >
            <div className="relative z-10 flex flex-col">
              <div className="p-4 bg-white rounded-2xl w-fit mb-4 group-hover:bg-[#ccff00] transition-colors shadow-sm">
                {serv.icon}
              </div>
              <h4 className="font-heading text-2xl font-black">{serv.title}</h4>
            </div>
            <div className="relative z-10 flex items-center gap-2 text-[8px] font-black uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
              View Specific Services <ChevronRight size={10} />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ServicesPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-[#f5f5f7] px-8 lg:px-24 py-24 lg:py-40">
        <div className="max-w-7xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }}>
             <span className="text-[10px] font-black uppercase tracking-[0.5em] text-[#ccff00] bg-black px-4 py-2 rounded-lg mb-8 inline-block uppercase italic">Service Matrix</span>
             <h2 className="font-heading font-black text-5xl lg:text-9xl tracking-tighter leading-none mb-12 uppercase">SYSTEMIC <br /> SOLUTIONS.</h2>
             <p className="text-slate-500 text-xl lg:text-3xl font-light leading-relaxed max-w-4xl">
               Engineering systems that maximize performance across the entire lifecycle of physical assets.
             </p>
          </motion.div>
        </div>
      </section>

      <div className="space-y-40 mt-40 pb-40">
        {FULL_SERVICES.map((serv, i) => (
          <section id={`serv-${serv.id}`} key={serv.id} className="px-8 lg:px-24 overflow-hidden scroll-mt-20">
            <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">
              <div className="lg:col-span-5 space-y-10">
                <div className="flex items-center gap-6">
                  <div className="p-6 bg-black text-[#ccff00] rounded-[30px] shadow-2xl scale-125">
                    {serv.icon}
                  </div>
                  <div>
                    <span className="text-[9px] font-black uppercase tracking-widest text-slate-400">Division 0{i+1}</span>
                    <h3 className="font-heading text-4xl font-black uppercase italic">{serv.title}</h3>
                  </div>
                </div>
                <p className="text-slate-500 text-xl font-light leading-relaxed">{serv.desc}</p>
                <div className="space-y-8">
                  {serv.subs.map((sub, si) => (
                    <div key={si} className="p-10 bg-[#f5f5f7] rounded-[50px] border border-transparent hover:border-black group transition-all duration-300">
                      <h4 className="font-black text-sm uppercase tracking-widest mb-6 group-hover:text-[#ccff00] transition-colors italic underline decoration-[#ccff00] underline-offset-8">{sub.name}</h4>
                      <ul className="space-y-4">
                        {sub.items.map((it, ii) => (
                          <li key={ii} className="flex items-start gap-3 text-xs text-slate-400 group-hover:text-black transition-colors">
                            <CheckCircle2 size={16} className="text-[#ccff00] flex-shrink-0" /> <span>{it}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>

              <div className="lg:col-span-7 space-y-8">
                 <div className="relative rounded-[80px] overflow-hidden shadow-3xl h-[600px] group">
                    <img src={serv.images[0]} className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-1000" alt={serv.title} />
                 </div>
                 <div className="relative overflow-hidden w-full h-40 group">
                    <div className="animate-marquee flex gap-4">
                       {[...serv.images, ...serv.images].map((img, mi) => (
                         <div key={mi} className="h-40 w-64 flex-shrink-0 rounded-3xl overflow-hidden border-4 border-slate-50">
                           <img src={img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" alt="process" />
                         </div>
                       ))}
                    </div>
                 </div>
              </div>
            </div>
          </section>
        ))}
      </div>
    </div>
  );
};

const HomePortfolioSection = ({ id }: any) => (
  <section id={id} className="snap-item bg-[#f5f5f7] flex items-center justify-center p-8 lg:p-24 overflow-hidden">
    <div className="max-w-7xl w-full">
      <h3 className="font-heading text-4xl lg:text-8xl font-black tracking-tighter mb-16 uppercase italic">PORTFOLIO <br /> OF IMPACT.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[
          { title: 'Lagos Smart City', cat: 'SPACES', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800' },
          { title: 'Lifecycle AI', cat: 'SYSTEMS', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800' },
          { title: 'Airport Protection', cat: 'COATINGS', img: 'https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800' }
        ].map((item, i) => (
          <div key={i} className="group relative h-[500px] rounded-[60px] overflow-hidden bg-white shadow-3xl">
            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent p-12 flex flex-col justify-end">
              <span className="text-[#ccff00] font-black text-[10px] uppercase tracking-widest mb-2">{item.cat}</span>
              <h4 className="text-white font-heading text-3xl font-bold">{item.title}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const HomeReviewsSection = ({ id }: any) => (
  <section id={id} className="snap-item bg-white flex items-center justify-center p-8 lg:p-24">
    <div className="max-w-7xl w-full">
      <div className="text-center mb-16 uppercase"><h3 className="font-heading text-4xl lg:text-8xl font-black tracking-tighter mb-4 italic italic">THE NETWORK.</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
        {[
          { text: "KAVY LTD redefined our logistics facility coatings. Their tech-first approach is unmatched.", author: "Dr. Adebayo", org: "Logistics Hub" },
          { text: "The KAVY SPACES division transformed our headquarters into a high-productivity environment.", author: "Sarah J.", org: "Tech Corp" },
          { text: "KAVY is the future of building intelligence in Africa.", author: "Engineer Koffi", org: "Public Works Bureau" }
        ].map((rev, i) => (
          <div key={i} className="p-12 bg-[#f5f5f7] rounded-[60px] hover:bg-black group transition-all duration-500">
            <div className="mb-6 flex gap-1">
              {[...Array(5)].map((_,s)=> <Sparkles key={s} size={14} className="text-[#ccff00]" />)}
            </div>
            <p className="text-slate-600 font-light italic text-xl leading-relaxed mb-10 group-hover:text-slate-300 transition-colors">"{rev.text}"</p>
            <div>
              <h5 className="font-black text-base group-hover:text-[#ccff00] transition-colors">{rev.author}</h5>
              <p className="text-[10px] text-slate-400 font-black uppercase tracking-widest">{rev.org}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ id }: any) => (
  <section id={id} className="snap-item bg-black text-white flex flex-col justify-center p-8 lg:p-24 overflow-hidden relative">
    <div className="max-w-6xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
      <div className="space-y-12">
        <h3 className="font-heading text-6xl lg:text-9xl font-black tracking-tighter leading-none uppercase italic">INITIATE <br /> <span className="text-[#ccff00]">STRATEGIC</span> <br /> LINK.</h3>
        <p className="text-slate-500 text-xl font-light italic">Global reach. African excellence. Brief our executives.</p>
        <div className="space-y-4">
           <div className="flex items-center gap-6 p-6 bg-white/5 rounded-[30px] border border-white/10 group hover:border-[#ccff00] transition-all">
             <div className="p-4 bg-[#ccff00] text-black rounded-2xl"><Phone size={24} /></div>
             <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">Strategic Line</p>
                <p className="text-2xl font-black">+234 814 413 0329</p>
             </div>
           </div>
        </div>
      </div>
      <div className="bg-white p-12 rounded-[60px] shadow-3xl text-black">
        <h4 className="font-heading text-3xl font-black mb-10 uppercase italic underline decoration-[#ccff00] decoration-4">Project Briefing</h4>
        <form className="space-y-6">
          <input type="text" className="w-full bg-[#f5f5f7] rounded-2xl p-6 focus:outline-none font-bold uppercase tracking-widest text-xs" placeholder="ENTITY NAME" />
          <input type="email" className="w-full bg-[#f5f5f7] rounded-2xl p-6 focus:outline-none font-bold uppercase tracking-widest text-xs" placeholder="STRATEGIC EMAIL" />
          <textarea rows={3} className="w-full bg-[#f5f5f7] rounded-2xl p-6 focus:outline-none font-bold uppercase tracking-widest text-xs" placeholder="VISION BRIEF"></textarea>
          <button className="w-full py-8 bg-[#ccff00] text-black font-black uppercase tracking-[0.4em] text-xs rounded-2xl hover:bg-black hover:text-white transition-all shadow-2xl">Transmit Proposal</button>
        </form>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-200 text-slate-600 py-24 px-8 lg:px-24 border-t border-slate-300 relative z-10">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-16">
      <div className="space-y-6 max-w-sm">
        <div className="flex items-center gap-4">
           <KavyLogo className="w-8 h-8 text-black" />
           <span className="font-heading font-black text-black text-xl tracking-tighter uppercase">KAVY LTD</span>
        </div>
        <p className="text-xs font-medium leading-relaxed uppercase tracking-widest text-slate-500 italic">Integrating spaces, surfaces, infrastructure, and technology across the African continent.</p>
        <div className="flex gap-4">
           <a href="#" className="p-3 bg-white rounded-full hover:bg-black hover:text-[#ccff00] shadow-sm transition-all"><Linkedin size={16} /></a>
           <a href="#" className="p-3 bg-white rounded-full hover:bg-black hover:text-[#ccff00] shadow-sm transition-all"><Facebook size={16} /></a>
           <a href="#" className="p-3 bg-white rounded-full hover:bg-black hover:text-[#ccff00] shadow-sm transition-all"><Instagram size={16} /></a>
        </div>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-3 gap-12 text-[10px] font-black uppercase tracking-widest">
        <div className="space-y-4 text-slate-500">
          <p className="text-black">Headquarters</p>
          <p className="flex items-center gap-2 font-bold"><MapPin size={10} className="text-black" /> Lagos, Nigeria</p>
          <p className="flex items-center gap-2 font-bold"><Phone size={10} className="text-black" /> +234 814 413 0329</p>
          <p className="flex items-center gap-2 font-bold"><Mail size={10} className="text-black" /> intel@kavy.com</p>
        </div>
        <div className="space-y-4 text-slate-500">
          <p className="text-black">Governance</p>
          <a href="#" className="block hover:text-black transition-colors">Safety Systems</a>
          <a href="#" className="block hover:text-black transition-colors">Privacy Architecture</a>
          <a href="#" className="block hover:text-black transition-colors">Ethics Panel</a>
        </div>
      </div>
    </div>
    <div className="mt-24 pt-12 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center text-[8px] font-black uppercase tracking-widest text-slate-400 gap-4">
      <p>© 2024 KAVY LTD. SYSTEMS OPERATIONAL • PAN-AFRICAN SCALE.</p>
      <div className="flex gap-8">
        <a href="#" className="hover:text-black">Security Protocol</a>
        <a href="#" className="hover:text-black">Licensing</a>
        <a href="#" className="hover:text-black">Investor Relations</a>
      </div>
    </div>
  </footer>
);

export default App;
