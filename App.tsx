
import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Building2, Layers, Settings, HardHat, Cpu, Factory, Paintbrush, 
  ArrowUpRight, Menu, X, Phone, Hexagon, Globe, Sparkles, 
  ChevronDown, ChevronRight, Box, BarChart3, ShieldCheck, 
  Users, Target, Zap, Heart, CheckCircle2, Layout, Scan,
  Database, Briefcase, Ruler, Mail, MapPin, Linkedin, Facebook, Instagram,
  History, Eye, Shield, Award, HelpCircle, BriefcaseBusiness, TrendingDown, TrendingUp,
  Search, Workflow, Leaf, Lock, Handshake, Microscope, Landmark, Truck, Home,
  LineChart, Monitor, Terminal, Share2, Activity, DatabaseZap
} from 'lucide-react';
import AIConsultant from './components/AIConsultant';

const KavyLogo = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className={className}>
    <path d="M28 10L36 6V55H28V10Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M36 6L44 14V55H36V6Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M20 20L28 16V55H20V20Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M44 24L52 28V55H44V24Z" stroke="currentColor" strokeWidth="3" strokeLinejoin="round" />
    <path d="M10 40C10 30 25 30 36 45C47 60 62 60 62 40" stroke="#ccff00" strokeWidth="3" strokeLinecap="round" />
    <path d="M10 40C10 50 25 50 36 35" stroke="#ccff00" strokeWidth="3" strokeLinecap="round" />
  </svg>
);

const SECTIONS = [
  { id: 'hero', label: 'Main Portal', icon: <Box size={16} /> },
  { id: 'about-summary', label: 'Our Vision', icon: <Globe size={16} /> },
  { id: 'divisions', label: 'Core Systems', icon: <Layers size={16} /> },
  { id: 'tech-summary', label: 'Intelligence Layer', icon: <Cpu size={16} /> },
  { id: 'industries-summary', label: 'Industry Focus', icon: <Building2 size={16} /> },
  { id: 'portfolio', label: 'Impact Log', icon: <Hexagon size={16} /> },
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

const TECH_SUB_SECTIONS = [
  { id: 'platform', label: 'KAVY Systems', icon: <Terminal size={14} /> },
  { id: 'ai-design', label: 'AI Visualization', icon: <Scan size={14} /> },
  { id: 'predictive', label: 'Predictive Intel', icon: <Activity size={14} /> },
  { id: 'dashboards', label: 'Data Hubs', icon: <BarChart3 size={14} /> },
  { id: 'lifecycle', label: 'Lifecycle CMS', icon: <Database size={14} /> }
];

const INDUSTRIES_DATA = [
  {
    id: 'government',
    title: 'Government & Public Assets',
    overview: 'Governments manage vast portfolios of public assets—ministries, schools, hospitals, roads, bridges, and utilities—often under constrained budgets and public accountability pressure.',
    problems: ['Fragmented contractors', 'Rapid deterioration', 'Reactive maintenance', 'No performance data'],
    solutions: ['Lifecycle management', 'Protective coatings', 'Digital registries', 'Transparent reporting'],
    image: 'https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=1200',
    services: ['Infrastructure coatings', 'Bridge painting', 'Anti-corrosion', 'Monitoring'],
    example: 'Long-term repainting and protection of government office complexes.'
  },
  {
    id: 'corporate',
    title: 'Corporate & Commercial Buildings',
    overview: 'Corporate assets must balance aesthetics, durability, brand identity, occupant comfort, and cost efficiency. Downtime directly impacts performance.',
    problems: ['Inconsistent quality', 'Frequent repainting', 'Misaligned design', 'High operational costs'],
    solutions: ['Brand-aligned design', 'Durable solutions', 'Facility dashboards', 'Predictive scheduling'],
    image: 'https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&w=1200',
    services: ['Interior/Exterior coatings', 'Office fit-outs', 'Wall systems', 'Performance tracking'],
    example: 'Corporate headquarters full interior refresh with AI-assisted design.'
  },
  {
    id: 'residential',
    title: 'Residential & Real Estate Developers',
    overview: 'Developers require speed, consistency, buyer appeal, durability, and post-handover value protection.',
    problems: ['Quality inconsistency', 'Handover complaints', 'Market differentiation', 'Short-lived finishes'],
    solutions: ['Standardized systems', 'Climate-optimized coatings', 'Visualized designs', 'Maintenance-ready'],
    image: 'https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&w=1200',
    services: ['Interior painting', 'Decorative systems', 'Common-area coatings', 'Turnkey fit-outs'],
    example: 'Large housing estate standardized finishing solution.'
  },
  {
    id: 'industrial',
    title: 'Industrial & Manufacturing',
    overview: 'Industrial environments demand extreme durability, safety compliance, and resistance to chemicals, heat, abrasion, and corrosion.',
    problems: ['Rapid corrosion', 'Unsafe environments', 'Production downtime', 'Asset failure cost'],
    solutions: ['Industrial coatings', 'Predictive schedules', 'Compliance solutions', 'Durability forecasting'],
    image: 'https://images.unsplash.com/photo-1504328345606-18bbc8c9d7d1?auto=format&w=1200',
    services: ['Anti-corrosion', 'Industrial floors', 'Fire-retardant', 'Performance analytics'],
    example: 'Factory floor epoxy systems for heavy machinery.'
  },
  {
    id: 'transport',
    title: 'Infrastructure & Transport',
    overview: 'Transport and infrastructure assets operate in harsh environments and must meet safety, durability, and reliability standards.',
    problems: ['Environmental failure', 'Safety risks (faded markings)', 'Budget overruns', 'Limited lifecycle planning'],
    solutions: ['Long-life systems', 'High-visibility markings', 'Preventive frameworks', 'Digital tracking'],
    image: 'https://images.unsplash.com/photo-1473876637954-4b493d59fd97?auto=format&w=1200',
    services: ['Bridge/Highway coatings', 'Traffic safety', 'Marine protection', 'Facility coatings'],
    example: 'Bridge repainting with corrosion control systems.'
  },
  {
    id: 'smartcities',
    title: 'Smart Cities & Urban Development',
    overview: 'Smart cities require integrated physical and digital systems to manage assets efficiently, sustainably, and transparently at scale.',
    problems: ['Disconnected management', 'High costs', 'Lack of visibility', 'Sustainability pressure'],
    solutions: ['Lifecycle platforms', 'AI monitoring', 'Integrated design', 'Sustainability materials'],
    image: 'https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=1200',
    services: ['Smart surfaces', 'IoT monitoring', 'City dashboards', 'Predictive analytics'],
    example: 'Smart urban district maintenance platform.'
  }
];

const FULL_SERVICES = [
  { id: 'coatings', title: 'KAVY COATINGS', icon: <Paintbrush size={18} />, img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&w=800' },
  { id: 'design', title: 'KAVY DESIGN', icon: <Scan size={18} />, img: 'https://images.unsplash.com/photo-1581291417006-03e3871f328f?auto=format&w=800' },
  { id: 'spaces', title: 'KAVY SPACES', icon: <Layout size={18} />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800' },
  { id: 'infrastructure', title: 'KAVY INFRASTRUCTURE', icon: <HardHat size={18} />, img: 'https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800' },
  { id: 'maintenance', title: 'KAVY MAINTENANCE', icon: <Settings size={18} />, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&w=800' },
  { id: 'manufacturing', title: 'KAVY MANUFACTURING', icon: <Factory size={18} />, img: 'https://images.unsplash.com/photo-1530124560676-41bc1275d4d4?auto=format&w=800' },
  { id: 'systems', title: 'KAVY SYSTEMS', icon: <Cpu size={18} />, img: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&w=800' }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'industries' | 'technology'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isHomeExpanded, setIsHomeExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isTechExpanded, setIsTechExpanded] = useState(false);
  const [activeSection, setActiveSection] = useState('hero');
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

  const navigateToService = (id: string) => {
    setCurrentView('services');
    setTimeout(() => {
      document.getElementById(`serv-${id}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToIndustry = (id: string) => {
    setCurrentView('industries');
    setTimeout(() => {
      document.getElementById(`industry-${id}`)?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToAboutSection = (sectionId: string) => {
    setCurrentView('about');
    setTimeout(() => {
      const el = document.getElementById(`about-${sectionId}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  const navigateToTechSection = (sectionId: string) => {
    setCurrentView('technology');
    setTimeout(() => {
      const el = document.getElementById(`tech-${sectionId}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative h-screen w-full flex overflow-hidden bg-white text-[#1d1d1f]">
      <div className="fixed top-8 left-8 z-[100] flex flex-col pointer-events-none">
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex items-center gap-4">
          <KavyLogo className="w-10 h-10 text-black" />
          <div className="hidden sm:block">
            <h1 className="font-heading font-black text-xl tracking-tighter uppercase">KAVY LTD</h1>
            <p className="text-[8px] tracking-[0.4em] text-slate-400 uppercase font-black">Building Intelligence</p>
          </div>
        </motion.div>
      </div>

      <motion.div 
        layout
        className={`relative bg-white transition-all duration-700 ease-in-out ${isMenuOpen ? 'w-full lg:w-[calc(100%-280px)]' : 'w-full'} h-full overflow-hidden`}
      >
        <AnimatePresence mode="wait">
          {currentView === 'home' ? (
            <motion.div 
              key="home" 
              className="h-full w-full overflow-y-auto" 
              onScroll={handleScroll} 
              ref={containerRef}
            >
              <HeroSection id="hero" onAction={() => setCurrentView('services')} />
              <VisionSummarySection id="about-summary" onAction={() => setCurrentView('about')} />
              <DivisionsGridSection id="divisions" onAction={() => setCurrentView('services')} />
              <TechnologyTeaserSection id="tech-summary" onAction={() => setCurrentView('technology')} />
              <IndustriesSummarySection id="industries-summary" onAction={() => setCurrentView('industries')} />
              <HomePortfolioSection id="portfolio" />
              <HomeReviewsSection />
              <ContactSection id="contact" />
              <Footer />
            </motion.div>
          ) : currentView === 'about' ? (
            <motion.div key="about" className="h-full w-full overflow-y-auto bg-white">
              <AboutUsPage onBack={() => setCurrentView('home')} />
              <Footer />
            </motion.div>
          ) : currentView === 'technology' ? (
            <motion.div key="technology" className="h-full w-full overflow-y-auto bg-white">
              <TechnologyPage onBack={() => setCurrentView('home')} />
              <Footer />
            </motion.div>
          ) : currentView === 'industries' ? (
            <motion.div key="industries" className="h-full w-full overflow-y-auto bg-white">
              <IndustriesPage onBack={() => setCurrentView('home')} />
              <Footer />
            </motion.div>
          ) : (
            <motion.div key="services" className="h-full w-full overflow-y-auto bg-white">
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
            className="fixed lg:relative top-0 right-0 h-screen w-[280px] bg-[#f5f5f7] border-l border-slate-200 z-[110] flex flex-col shadow-2xl lg:shadow-none overflow-hidden"
          >
            <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-200 mb-4 uppercase">
              <span className="text-[9px] font-black tracking-[0.4em] text-slate-400">Hub Console</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 lg:hidden"><X size={18} /></button>
            </div>

            <div className="flex-1 overflow-y-auto px-6 space-y-4 py-4 no-scrollbar">
              <NavGroup 
                label="HOME" sub="Main Portal" icon={<Home size={18} />} 
                isOpen={isHomeExpanded} onToggle={() => {
                  setIsHomeExpanded(!isHomeExpanded);
                  setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false);
                }}
              >
                {SECTIONS.map(s => (
                  <button key={s.id} onClick={() => scrollToSection(s.id)} className={`flex items-center gap-3 w-full p-3 rounded-xl text-left font-black uppercase text-[9px] tracking-widest transition-all ${activeSection === s.id && currentView === 'home' ? 'bg-black text-white' : 'text-slate-400 hover:text-black hover:bg-slate-200'}`}>
                    <span className="p-1.5 rounded-lg shadow-sm bg-white text-black">{s.icon}</span> {s.label}
                  </button>
                ))}
              </NavGroup>

              <NavGroup 
                label="ABOUT US" sub="Company DNA" icon={<Users size={18} />} 
                isOpen={isAboutExpanded} onToggle={() => {
                  setIsAboutExpanded(!isAboutExpanded);
                  setIsHomeExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false);
                }}
              >
                <button onClick={() => setCurrentView('about')} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2 mb-2">
                  <Scan size={14} /> Full Company Profile
                </button>
                {ABOUT_SUB_SECTIONS.map(s => (
                  <button key={s.id} onClick={() => navigateToAboutSection(s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2">
                    {s.icon} {s.label}
                  </button>
                ))}
              </NavGroup>

              <NavGroup 
                label="TECHNOLOGY" sub="Intelligence Layer" icon={<Cpu size={18} />} 
                isOpen={isTechExpanded} onToggle={() => {
                  setIsTechExpanded(!isTechExpanded);
                  setIsHomeExpanded(false); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false);
                }}
              >
                <button onClick={() => setCurrentView('technology')} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2 mb-2">
                  <Activity size={14} /> KAVY Systems Overview
                </button>
                {TECH_SUB_SECTIONS.map(s => (
                  <button key={s.id} onClick={() => navigateToTechSection(s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2">
                    {s.icon} {s.label}
                  </button>
                ))}
              </NavGroup>

              <NavGroup 
                label="INDUSTRIES" sub="Asset Classes" icon={<Building2 size={18} />} 
                isOpen={isIndustriesExpanded} onToggle={() => {
                  setIsIndustriesExpanded(!isIndustriesExpanded);
                  setIsHomeExpanded(false); setIsAboutExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false);
                }}
              >
                <button onClick={() => setCurrentView('industries')} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2 mb-2">
                  <Globe size={14} /> Global Industry Outlook
                </button>
                {INDUSTRIES_DATA.map(ind => (
                  <button key={ind.id} onClick={() => navigateToIndustry(ind.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2">
                    {ind.title.split(' & ')[0]}
                  </button>
                ))}
              </NavGroup>

              <NavGroup 
                label="SERVICES" sub="7 Systems" icon={<Briefcase size={18} />} 
                isOpen={isServicesExpanded} onToggle={() => {
                  setIsServicesExpanded(!isServicesExpanded);
                  setIsHomeExpanded(false); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsTechExpanded(false);
                }}
              >
                <button onClick={() => setCurrentView('services')} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2 mb-2">
                  <Layers size={14} /> Systems Capability Matrix
                </button>
                {FULL_SERVICES.map(s => (
                  <button key={s.id} onClick={() => navigateToService(s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all flex items-center gap-2">
                    {s.icon} {s.title}
                  </button>
                ))}
              </NavGroup>
            </div>

            <div className="p-8 border-t border-slate-200">
              <button onClick={() => setIsMenuOpen(false)} className="w-full py-3 bg-black text-white rounded-xl text-[9px] font-black uppercase tracking-widest hover:bg-[#ccff00] hover:text-black transition-all">Minimize Console</button>
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

const NavGroup = ({ label, sub, icon, children, isOpen, onToggle }: any) => (
  <div className="space-y-2">
    <button onClick={onToggle} className={`w-full group p-6 rounded-2xl border transition-all duration-300 text-left flex items-center justify-between ${isOpen ? 'bg-black text-white' : 'bg-white border-slate-200 hover:border-black'}`}>
      <div className="flex items-center gap-3">
        <div className={`p-2 rounded-xl ${isOpen ? 'bg-[#ccff00] text-black' : 'bg-slate-50 text-slate-400'}`}>{icon}</div>
        <div className="flex flex-col">
          <span className="text-[10px] font-black uppercase tracking-widest">{label}</span>
          <p className="text-[7px] text-slate-400 font-bold uppercase mt-1">{sub}</p>
        </div>
      </div>
      <ChevronDown size={14} className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`} />
    </button>
    <AnimatePresence>
      {isOpen && (
        <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-1 pl-4">
          {children}
        </motion.div>
      )}
    </AnimatePresence>
  </div>
);

// --- HOME PAGE SECTIONS ---

const HeroSection = ({ id, onAction }: any) => (
  <section id={id} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-black">
    <div className="absolute inset-0 z-0">
      <motion.img 
        initial={{ scale: 1.1, opacity: 0 }}
        animate={{ scale: 1, opacity: 0.5 }}
        transition={{ duration: 2 }}
        src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" 
        className="w-full h-full object-cover" 
        alt="Built Environment" 
      />
      <div className="absolute inset-0 bg-gradient-to-br from-black via-transparent to-[#ccff00]/10"></div>
    </div>
    
    <div className="relative z-10 text-center max-w-5xl px-6">
      <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} className="inline-flex px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-12 border border-white/20">
        Integrating Intelligence Across Africa
      </motion.div>
      <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="font-heading font-black text-6xl md:text-9xl tracking-tighter leading-[0.85] mb-12 uppercase italic text-white">
        REDEFINING <br /> <span className="lemon-gradient-text italic">INTELLIGENT</span> <br /> ENVIRONMENTS.
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-400 text-lg md:text-2xl font-light italic mb-12 max-w-3xl mx-auto leading-relaxed">
        A multi-disciplinary systems company engineering the future of surfaces, spaces, and infrastructure.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onAction} className="px-12 py-6 bg-[#ccff00] text-black rounded-2xl font-black text-sm tracking-widest uppercase shadow-2xl italic hover:bg-white transition-colors">Systems Capability Matrix</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-black text-sm tracking-widest uppercase backdrop-blur-sm hover:bg-white hover:text-black transition-all italic">Initiate Briefing</motion.button>
      </div>
    </div>
  </section>
);

const VisionSummarySection = ({ id, onAction }: any) => (
  <section id={id} className="min-h-screen bg-[#f5f5f7] flex items-center justify-center py-32 md:py-48 px-6 overflow-hidden">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12 order-2 lg:order-1">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-black rounded-lg inline-block italic">About Kavy</span>
        <h3 className="font-heading text-5xl md:text-8xl font-black tracking-tight leading-none uppercase italic">BUILT-ENVIRONMENT <br /> SYSTEMS.</h3>
        <p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed italic">KAVY is not a painting company. KAVY is a built-environment systems company designed to redefine how Africa protects and maintains its physical assets.</p>
        <div className="grid grid-cols-2 gap-6">
           {['Visionary Story', 'Mission Control', 'Core Values', 'Leadership'].map(v => (
             <div key={v} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400"><CheckCircle2 size={16} className="text-[#ccff00]" /> {v}</div>
           ))}
        </div>
        <button onClick={onAction} className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] hover:text-[#ccff00] transition-colors italic border-b-2 border-black pb-2 w-fit">Access Full Company DNA <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative order-1 lg:order-2">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1200" alt="Vision" className="rounded-[60px] shadow-3xl object-cover h-[400px] md:h-[700px] w-full" />
      </motion.div>
    </div>
  </section>
);

const DivisionsGridSection = ({ id, onAction }: any) => (
  <section id={id} className="min-h-screen bg-white flex flex-col justify-center py-32 md:py-48 px-6 overflow-hidden">
    <div className="max-w-7xl w-full mx-auto">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="font-heading text-5xl lg:text-8xl font-black tracking-tighter uppercase italic">7 CORE DIVISIONS</h3>
          <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest mt-4 italic underline decoration-[#ccff00] decoration-4 underline-offset-8">Engineering for the Asset Lifecycle</p>
        </motion.div>
        <button onClick={onAction} className="px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#ccff00] hover:text-black transition-all shadow-xl italic">Capability Matrix</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FULL_SERVICES.map((serv, i) => (
          <motion.div key={serv.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group relative p-10 bg-[#f5f5f7] rounded-[50px] border border-transparent hover:border-black transition-all cursor-pointer h-[300px] md:h-[350px] flex flex-col justify-between shadow-sm overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"><img src={serv.img} className="w-full h-full object-cover" alt={serv.title} /></div>
            <div className="relative z-10 flex flex-col">
              <div className="p-5 bg-white rounded-2xl w-fit mb-6 group-hover:bg-[#ccff00] transition-colors shadow-sm">{serv.icon}</div>
              <h4 className="font-heading text-2xl font-black italic">{serv.title}</h4>
            </div>
            <div className="relative z-10 text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 flex items-center gap-2">Explore System <ChevronRight size={12}/></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologyTeaserSection = ({ id, onAction }: any) => (
  <section id={id} className="min-h-screen bg-black text-white flex items-center justify-center py-32 md:py-48 px-6 overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 pointer-events-none blur-3xl"><div className="w-[800px] h-[800px] bg-[#ccff00]/20 rounded-full absolute -top-40 -left-40 animate-pulse"></div></div>
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-white/10 rounded-lg inline-block italic">The Intel Layer</span>
        <h3 className="font-heading text-5xl md:text-8xl font-black tracking-tight leading-none uppercase italic">DIGITAL <br /> INFRASTRUCTURE <br /> <span className="text-[#ccff00]">OS.</span></h3>
        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed italic">KAVY’s technology platform transforms physical spaces into data-driven, intelligent assets via AI and IoT.</p>
        <div className="flex flex-col gap-6">
           {['AI-Assisted Visualization', 'Predictive Asset Monitoring', 'Real-time Health Dashboards'].map((t,i) => (
             <div key={i} className="flex items-center gap-4 text-[11px] font-black uppercase tracking-widest text-slate-300">
               <Zap size={16} className="text-[#ccff00]" /> {t}
             </div>
           ))}
        </div>
        <button onClick={onAction} className="px-12 py-6 bg-[#ccff00] text-black rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white transition-all shadow-xl italic">Explore Technology</button>
      </motion.div>
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative rounded-[80px] overflow-hidden h-[400px] md:h-[700px] shadow-3xl border border-white/10">
         <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=1200" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000" alt="Tech" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-12 flex flex-col justify-end">
            <h4 className="text-[#ccff00] font-heading text-4xl font-black italic">INTELLIGENCE V2.4</h4>
         </div>
      </motion.div>
    </div>
  </section>
);

const IndustriesSummarySection = ({ id, onAction }: any) => (
  <section id={id} className="min-h-screen bg-[#1d1d1f] text-white flex items-center justify-center py-32 md:py-48 px-6 overflow-hidden">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative rounded-[80px] overflow-hidden h-[400px] md:h-[750px] shadow-3xl order-2 lg:order-1">
         <img src="https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=1200" className="w-full h-full object-cover grayscale opacity-60" alt="Industries" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-16"><h4 className="text-[#ccff00] font-heading text-4xl md:text-5xl font-black italic mb-2">ASSET CLASSES</h4></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12 order-1 lg:order-2">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-white/10 rounded-lg inline-block italic border border-white/10">Strategic Verticals</span>
        <h3 className="font-heading text-5xl md:text-8xl font-black tracking-tight leading-none uppercase italic">INTELLIGENCE <br /> FOR EVERY <br /> <span className="text-[#ccff00]">SECTOR.</span></h3>
        <p className="text-slate-400 text-xl md:text-2xl font-light leading-relaxed italic">KAVY delivers end-to-end lifecycle solutions tailored to the unique requirements of each industry.</p>
        <button onClick={onAction} className="px-12 py-6 bg-[#ccff00] text-black rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white transition-all shadow-xl italic">Market Sector Insights</button>
      </motion.div>
    </div>
  </section>
);

const HomePortfolioSection = ({ id }: any) => (
  <section id={id} className="min-h-screen bg-[#f5f5f7] flex items-center justify-center py-32 md:py-48 px-6 overflow-hidden">
    <div className="max-w-7xl w-full">
      <div className="mb-24 text-center"><h3 className="font-heading text-5xl lg:text-9xl font-black tracking-tighter uppercase italic">PORTFOLIO <br /> OF IMPACT.</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
        {[
          { title: 'Lagos Smart City', cat: 'SPACES', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800' },
          { title: 'Lifecycle AI Hub', cat: 'SYSTEMS', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800' },
          { title: 'International Port', cat: 'COATINGS', img: 'https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800' }
        ].map((item, i) => (
          <motion.div key={i} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative h-[400px] md:h-[600px] rounded-[70px] overflow-hidden bg-white shadow-3xl">
            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-16 flex flex-col justify-end">
              <span className="text-[#ccff00] font-black text-[11px] uppercase tracking-widest mb-4 italic">Case Study 0{i+1}</span>
              <h4 className="text-white font-heading text-4xl font-bold italic mb-4">{item.title}</h4>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{item.cat} DIVISION</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const HomeReviewsSection = () => (
  <section className="bg-white py-32 md:py-48 px-6 overflow-hidden border-t border-slate-100">
    <div className="max-w-7xl w-full mx-auto">
      <div className="text-center mb-24 uppercase italic"><h3 className="font-heading text-5xl lg:text-9xl font-black tracking-tighter italic">THE NETWORK.</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {[
          { text: "KAVY LTD redefined our logistics facility coatings. Their tech-first approach is unmatched.", author: "Dr. Adebayo", org: "Logistics Hub" },
          { text: "The KAVY SPACES division transformed our headquarters into a high-productivity environment.", author: "Sarah J.", org: "Tech Corp" },
          { text: "KAVY is the future of building intelligence in Africa. Engineering meets software.", author: "Engineer Koffi", org: "Public Works Bureau" }
        ].map((rev, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-16 bg-[#f5f5f7] rounded-[70px] hover:bg-black group transition-all duration-500 border border-transparent hover:border-[#ccff00]/20">
            <div className="mb-10 flex gap-1.5"><Sparkles size={16} className="text-[#ccff00]" /></div>
            <p className="text-slate-600 font-light italic text-2xl leading-relaxed mb-12 group-hover:text-slate-300 transition-colors">"{rev.text}"</p>
            <div className="space-y-2"><h5 className="font-black text-lg group-hover:text-[#ccff00] transition-colors uppercase italic">{rev.author}</h5><p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{rev.org}</p></div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ id }: any) => (
  <section id={id} className="min-h-screen bg-black text-white flex flex-col justify-center py-32 md:py-48 px-6 relative overflow-hidden">
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-24 relative z-10">
      <div className="space-y-16">
        <h3 className="font-heading text-6xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] uppercase italic"><span className="text-[#ccff00]">STRATEGIC</span> <br /> BRIEFING.</h3>
        <p className="text-slate-500 text-xl md:text-3xl font-light italic max-w-xl leading-snug">Global reach. African excellence. Initiate a mission brief with our architects.</p>
        <div className="flex items-center gap-8 p-8 bg-white/5 rounded-[40px] border border-white/10 group hover:border-[#ccff00] transition-all w-fit"><div className="p-5 bg-[#ccff00] text-black rounded-2xl group-hover:scale-110 transition-transform"><Phone size={28} /></div><div><p className="text-[11px] font-black uppercase tracking-[0.3em] text-slate-500 italic mb-1">Executive Line</p><p className="text-2xl md:text-3xl font-black italic">+234 814 413 0329</p></div></div>
      </div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-12 md:p-20 rounded-[80px] shadow-3xl text-black">
        <h4 className="font-heading text-3xl md:text-5xl font-black mb-12 uppercase italic underline decoration-[#ccff00] decoration-8 underline-offset-8">Mission Portal</h4>
        <form className="space-y-8"><div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Strategic Email</label><input type="email" className="w-full bg-[#f5f5f7] rounded-[30px] p-8 focus:outline-none font-bold uppercase tracking-widest text-xs italic border-2 border-transparent focus:border-[#ccff00] transition-all" placeholder="INTEL@DOMAIN.COM" /></div><div className="space-y-2"><label className="text-[10px] font-black uppercase tracking-widest text-slate-400 ml-4">Objective Summary</label><textarea rows={3} className="w-full bg-[#f5f5f7] rounded-[30px] p-8 focus:outline-none font-bold uppercase tracking-widest text-xs italic border-2 border-transparent focus:border-[#ccff00] transition-all" placeholder="BRIEF_SYNOPSIS"></textarea></div><button className="w-full py-10 bg-[#ccff00] text-black font-black uppercase tracking-[0.5em] text-sm rounded-[30px] hover:bg-black hover:text-[#ccff00] transition-all shadow-2xl italic">Transmit Brief</button></form>
      </motion.div>
    </div>
  </section>
);

const Footer = () => (
  <footer className="bg-slate-200 text-slate-600 py-32 md:py-48 px-6 border-t border-slate-300 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start gap-24">
      <div className="space-y-8 max-w-md">
        <div className="flex items-center gap-6"><KavyLogo className="w-12 h-12 text-black" /><span className="font-heading font-black text-black text-3xl tracking-tighter uppercase italic">KAVY LTD</span></div>
        <p className="text-sm font-medium leading-relaxed uppercase tracking-[0.2em] text-slate-500 italic">Integrating spaces, infrastructure, and technology across the African continent through built-environment intelligence.</p>
        <div className="flex gap-6">{[[Linkedin, '#'], [Facebook, '#'], [Instagram, '#']].map(([Icon, link]: any, i) => (<a key={i} href={link} className="p-4 bg-white rounded-full hover:bg-black hover:text-[#ccff00] shadow-md transition-all"><Icon size={20} /></a>))}</div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-16 lg:gap-32 text-[11px] font-black uppercase tracking-widest italic">
        <div className="space-y-6 text-slate-500"><p className="text-black text-xs">Primary Operations</p><p className="flex items-center gap-3 font-bold italic"><MapPin size={14} className="text-black" /> Lagos HQ, Nigeria</p><p className="flex items-center gap-3 font-bold italic"><Phone size={14} className="text-black" /> +234 814 413 0329</p></div>
        <div className="space-y-6 text-slate-500"><p className="text-black text-xs">Strategic Governance</p><a href="#" className="block hover:text-black transition-colors italic border-b border-transparent hover:border-black w-fit pb-1">Safety Protocols</a><a href="#" className="block hover:text-black transition-colors italic border-b border-transparent hover:border-black w-fit pb-1">Privacy Architecture</a></div>
      </div>
    </div>
    <div className="max-w-7xl mx-auto mt-32 pt-16 border-t border-slate-300 flex flex-col md:flex-row justify-between items-center text-[10px] font-black uppercase tracking-[0.3em] text-slate-400 gap-8 italic">
      <p>© 2024 KAVY LTD. SYSTEMS NOMINAL • REGIONAL SCALE SECURED.</p>
    </div>
  </footer>
);

// --- FULL PAGE: ABOUT US (FULLY RESTORED) ---
const AboutUsPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white px-8 lg:px-24 py-48 lg:py-72 overflow-hidden relative">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.15 }} transition={{ duration: 2 }} className="absolute inset-0 pointer-events-none"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" alt="Built Environment" /></motion.div>
        <div className="max-w-7xl mx-auto relative z-10"><motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff00] mb-12 block italic border-l-4 border-[#ccff00] pl-6">Systemic Built Environments</span><h2 className="font-heading font-black text-6xl md:text-[14rem] tracking-tighter leading-[0.7] mb-16 uppercase">INTELLIGENCE <br /> <span className="text-white/20 italic">BEYOND</span> <br /> SURFACES.</h2><p className="text-slate-400 text-xl md:text-5xl font-light leading-tight max-w-5xl italic">KAVY is not a painting company. KAVY is a built-environment systems company designed to redefine how Africa protects and maintains its physical assets.</p></motion.div></div>
      </section>

      {/* 1. Our Story */}
      <section id="about-story" className="py-48 md:py-72 px-8 lg:px-24 overflow-hidden border-b border-slate-100 scroll-mt-24"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} viewport={{ once: true }} className="space-y-16"><div className="flex items-center gap-6 text-slate-400"><History size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">The Genesis</span></div><h3 className="font-heading text-5xl md:text-9xl font-black uppercase tracking-tight leading-none italic">WHY KAVY <br /> EXISTS.</h3><div className="p-12 bg-[#1d1d1f] text-white rounded-[70px] shadow-3xl relative overflow-hidden group"><img src="https://images.unsplash.com/photo-1541913054-21199a42d530?auto=format&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" alt="Problem" /><div className="relative z-10"><h4 className="text-[#ccff00] font-black uppercase text-xs tracking-[0.3em] mb-6">The Systemic Gap</h4><p className="text-slate-400 font-light text-lg md:text-xl leading-relaxed italic">Infrastructure deteriorates years early due to fragmented, labor-dependent maintenance. We saw an engineering problem, not a cosmetic one.</p></div></div></motion.div><motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} className="relative"><div className="relative rounded-[100px] overflow-hidden h-[600px] md:h-[900px] shadow-3xl group"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Insight" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-16"><p className="text-white text-3xl font-heading font-black tracking-tight leading-tight uppercase italic border-l-4 border-[#ccff00] pl-8">BEYOND THE <br /> COSMETIC LAYER.</p></div></div></motion.div></div></div></section>

      {/* 2. Vision & Mission */}
      <section id="about-vision" className="py-48 md:py-72 bg-slate-50 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} className="space-y-24 order-2 lg:order-1"><div className="space-y-10"><div className="flex items-center gap-6 text-[#ccff00] bg-black px-8 py-4 rounded-3xl w-fit shadow-2xl"><Eye size={24} /> <span className="font-black uppercase tracking-[0.3em] text-[11px]">The Vision</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">AFRICA'S LEADING SYSTEMS UNICORN.</h3><p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed italic">To become Africa’s leading built-environment systems company, delivering intelligent solutions across residential, industrial, and public infrastructure.</p></div></motion.div><motion.div whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} viewport={{ once: true }} className="relative rounded-[100px] overflow-hidden h-[600px] md:h-[900px] shadow-3xl order-1 lg:order-2 group"><img src="https://images.unsplash.com/photo-1449156001934-19918c217523?auto=format&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="Future City" /><div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div></motion.div></div></section>

      {/* 3. Core Values */}
      <section id="about-values" className="py-48 md:py-72 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto"><div className="text-center mb-32 space-y-10"><motion.span whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-slate-400 font-black uppercase text-[12px] tracking-[0.6em] block">The Kavy Compass</motion.span><motion.h3 whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} className="font-heading text-6xl md:text-[12rem] font-black uppercase tracking-tighter italic">CORE VALUES.</motion.h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">{[{ icon: <Workflow />, title: "Systems Thinking", desc: "We design connected solutions, not isolated services." }, { icon: <Award />, title: "Precision Engineering", desc: "Quality is engineered into every material and process." }, { icon: <Shield />, title: "Total Accountability", desc: "Traceable and measurable outcomes." }, { icon: <Zap />, title: "Purposeful Tech", desc: "Solving real problems through AI." }, { icon: <Leaf />, title: "Sustainability", desc: "Built responsibility and workforce growth." }].map((v, i) => (<motion.div key={i} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-16 border-2 border-slate-100 rounded-[80px] hover:border-black hover:bg-black group transition-all duration-700 relative overflow-hidden"><div className="relative z-10 space-y-8"><div className="w-20 h-20 rounded-3xl bg-slate-50 text-black flex items-center justify-center group-hover:bg-[#ccff00] transition-all">{v.icon}</div><h4 className="font-black uppercase text-xl group-hover:text-white tracking-widest italic">{v.title}</h4><p className="text-lg text-slate-400 font-light italic leading-relaxed">{v.desc}</p></div></motion.div>))}</div></div></section>

      {/* 4. Leadership (RESTORED) */}
      <section id="about-leadership" className="py-48 md:py-72 bg-black text-white px-8 lg:px-24 scroll-mt-24 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-32 gap-12">
            <div className="space-y-10">
              <div className="flex items-center gap-6 text-[#ccff00]"><Users size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">Board of Systems</span></div>
              <h3 className="font-heading text-5xl md:text-9xl font-black uppercase italic leading-none">THE ARCHITECTS.</h3>
            </div>
            <p className="text-slate-400 text-xl font-light leading-relaxed max-w-md italic border-l-4 border-[#ccff00] pl-8">Visionaries driving the intersection of digital and physical infrastructure.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {[
              { name: "Seyi Kavy", role: "CEO & Chief Systems Architect", bio: "Engineering the digital future of surfaces.", img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&w=800" },
              { name: "Dr. Elena Vance", role: "Head of Materials AI", bio: "Pioneering predictive coating algorithms.", img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&w=800" },
              { name: "Marcus Thorne", role: "Infrastructure Director", bio: "Master of logistics and large-scale ops.", img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&w=800" }
            ].map((leader, i) => (
              <motion.div key={i} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="group space-y-8">
                <div className="relative aspect-[4/5] rounded-[60px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-1000">
                  <img src={leader.img} className="w-full h-full object-cover group-hover:scale-105 transition-transform" alt={leader.name} />
                  <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent"></div>
                </div>
                <div className="space-y-3">
                  <h4 className="font-heading text-3xl font-black italic">{leader.name}</h4>
                  <p className="text-[#ccff00] font-black uppercase text-[10px] tracking-widest">{leader.role}</p>
                  <p className="text-slate-500 font-light italic text-sm">{leader.bio}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. Advantage (RESTORED) */}
      <section id="about-advantage" className="py-48 md:py-72 px-8 lg:px-24 scroll-mt-24 overflow-hidden border-b border-slate-100">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-32 space-y-10">
             <h3 className="font-heading text-6xl md:text-[12rem] font-black uppercase tracking-tighter italic">THE EDGE.</h3>
             <p className="text-slate-400 font-black uppercase text-[12px] tracking-[0.6em]">WHY INDUSTRY LEADERS CHOOSE KAVY</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            {[
              { icon: <TrendingUp />, title: "30% Lifecycle Savings", desc: "Predictive systems prevent premature asset failure." },
              { icon: <Monitor />, title: "Full Digital Visibility", desc: "Real-time dashboards for transparency and compliance." },
              { icon: <Handshake />, title: "Single Point Accountability", desc: "Eliminating the 'contractor handoff' gap through integration." },
              { icon: <ShieldCheck />, title: "Warranted Performance", desc: "We back our systems with multi-year performance data." }
            ].map((adv, i) => (
              <motion.div key={i} whileInView={{ x: 0, opacity: 1 }} initial={{ x: i % 2 === 0 ? -50 : 50, opacity: 0 }} viewport={{ once: true }} className="flex gap-10 items-start p-12 bg-[#f5f5f7] rounded-[70px] hover:bg-black group transition-all duration-500">
                <div className="p-6 bg-white text-black rounded-3xl group-hover:bg-[#ccff00] transition-colors">{adv.icon}</div>
                <div className="space-y-4">
                  <h4 className="font-heading text-2xl font-black italic group-hover:text-white transition-colors">{adv.title}</h4>
                  <p className="text-slate-500 font-light italic leading-relaxed text-lg group-hover:text-slate-400 transition-colors">{adv.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Operating Model */}
      <section id="about-operating" className="py-48 md:py-72 bg-slate-50 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32"><div className="lg:col-span-5 space-y-16"><h3 className="font-heading text-6xl md:text-9xl font-black uppercase tracking-tight leading-none italic">OPERATING <br /> MODEL.</h3><p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed italic">KAVY integrates the entire asset lifecycle: from digital design intelligence to vertically integrated manufacturing.</p></div><div className="lg:col-span-7 flex flex-col justify-center"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[{ title: "Strategic Design", icon: <Scan />, desc: "Simulation and performance modeling." }, { title: "Integrated Materials", icon: <Microscope />, desc: "Engineering-grade specialty coatings." }, { title: "Standard Execution", icon: <HardHat />, desc: "Tech-enabled delivery via field teams." }, { title: "Digital Monitoring", icon: <Search />, desc: "IoT integration for real-time tracking." }].map((step, i) => (<motion.div key={i} whileInView={{ x: 0, opacity: 1 }} initial={{ x: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-12 bg-white rounded-[60px] border border-slate-100 flex flex-col gap-8 group hover:shadow-3xl transition-all"><div className="p-6 bg-black text-[#ccff00] rounded-3xl w-fit group-hover:scale-110 transition-transform">{step.icon}</div><div className="space-y-4"><h4 className="font-black uppercase text-xl tracking-widest italic">{step.title}</h4><p className="text-lg text-slate-400 font-light italic leading-relaxed">{step.desc}</p></div></motion.div>))}</div></div></div></section>

      <section className="py-48 flex flex-col items-center gap-16 text-center bg-[#f5f5f7]"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7]">PAN-AFRICAN <br /> <span className="text-[#ccff00] bg-black px-12 py-4">INTELLIGENCE.</span></h3><div className="flex flex-col sm:flex-row gap-10"><button onClick={onBack} className="px-16 py-8 bg-black text-white rounded-[40px] font-black text-sm tracking-[0.3em] uppercase hover:bg-[#ccff00] transition-all italic shadow-3xl">HQ Main Portal</button></div></section>
    </div>
  );
};

// --- FULL PAGE: TECHNOLOGY (INTEGRATED) ---
const TechnologyPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white px-8 lg:px-24 py-48 lg:py-72 overflow-hidden relative">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.2 }} transition={{ duration: 2 }} className="absolute inset-0 pointer-events-none"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=2000" className="w-full h-full object-cover" alt="Data" /></motion.div>
        <div className="max-w-7xl mx-auto relative z-10"><motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff00] mb-12 block italic border-l-4 border-[#ccff00] pl-6">THE INTELLIGENCE LAYER</span><h2 className="font-heading font-black text-6xl md:text-[12rem] tracking-tighter leading-[0.7] mb-16 uppercase">DIGITIZING <br /> <span className="text-white/20 italic">EVERY</span> <br /> STRUCTURE.</h2><p className="text-slate-400 text-xl md:text-5xl font-light leading-tight max-w-5xl italic">KAVY’s technology platform transforms physical spaces and infrastructure into data-driven, intelligent assets via AI, software, and real-time sensors.</p></motion.div></div>
      </section>

      {/* 1. KAVY Systems Platform */}
      <section id="tech-platform" className="py-48 px-8 lg:px-24 border-b border-slate-100 overflow-hidden scroll-mt-24"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} viewport={{ once: true }} className="space-y-12"><div className="flex items-center gap-6 text-slate-400"><Terminal size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 01</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">KAVY SYSTEMS <br /> PLATFORM.</h3><p className="text-slate-500 text-xl font-light leading-relaxed italic">The digital OS for built environments connecting design, execution, and maintenance into one unified dashboard.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[{ t: "Asset Registry", d: "Centralized ledger." }, { t: "Performance Ops", d: "Tracking every surface." }, { t: "Automation", d: "Scheduled workflows." }, { t: "IoT Monitoring", d: "Sensor-led insights." }].map((c, i) => (<div key={i} className="p-8 bg-[#f5f5f7] rounded-[40px] border border-black/5 hover:border-[#ccff00] transition-colors"><h4 className="font-black uppercase text-xs tracking-widest mb-4 italic">{c.t}</h4><p className="text-slate-500 text-xs font-medium">{c.d}</p></div>))}</div></motion.div><motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} className="relative rounded-[100px] overflow-hidden h-[500px] md:h-[800px] shadow-3xl"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&w=1200" className="w-full h-full object-cover grayscale brightness-50" alt="Backbone" /></motion.div></div></section>

      {/* 2. AI Design & Visualization */}
      <section id="tech-ai-design" className="py-48 bg-[#f5f5f7] px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} viewport={{ once: true }} className="order-2 lg:order-1 relative rounded-[100px] overflow-hidden h-[500px] md:h-[800px] shadow-3xl"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=1200" className="w-full h-full object-cover" alt="Design AI" /></motion.div><motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-12"><div className="flex items-center gap-6 text-slate-400"><Scan size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 02</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">AI DESIGN & <br /> VISUALIZATION.</h3><ul className="space-y-6">{['AI-generated wall & surface designs', 'Real-time color & texture simulations', '3D and VR immersive walkthroughs'].map((v,i) => (<li key={i} className="flex items-center gap-6 text-black font-black uppercase text-sm tracking-widest italic border-b border-black/10 pb-4"><div className="w-2 h-2 bg-[#ccff00]"></div> {v}</li>))}</ul></motion.div></div></section>

      {/* 3. Predictive Maintenance */}
      <section id="tech-predictive" className="py-48 px-8 lg:px-24 scroll-mt-24 overflow-hidden border-b border-slate-100"><div className="max-w-7xl mx-auto"><div className="text-center mb-32 space-y-10"><motion.span whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-slate-400 font-black uppercase text-[12px] tracking-[0.6em] block">Prevention Over Repairs</motion.span><motion.h3 whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} className="font-heading text-6xl md:text-[10rem] font-black uppercase tracking-tighter italic">PREDICTIVE INTEL.</motion.h3></div><div className="grid grid-cols-1 md:grid-cols-3 gap-10">{[{ icon: <Activity />, title: "Risk Forecasting", desc: "Corrosion and moisture intrusion forecasts." }, { icon: <Zap />, title: "Auto-Alerts", desc: "Work-orders triggered before failure." }, { icon: <DatabaseZap />, title: "Digital Twins", desc: "Virtual mapping of physical assets." }].map((p, i) => (<motion.div key={i} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-16 bg-[#f5f5f7] rounded-[70px] border border-transparent hover:border-black transition-all group overflow-hidden"><div className="relative z-10 space-y-10"><div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#ccff00] transition-colors">{p.icon}</div><h4 className="font-black uppercase text-2xl italic tracking-tighter">{p.title}</h4><p className="text-slate-500 font-light italic text-lg leading-relaxed">{p.desc}</p></div></motion.div>))}</div></div></section>

      <section className="py-64 flex flex-col items-center gap-16 text-center bg-black text-white px-8 relative overflow-hidden"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7] relative z-10">THE <br /> <span className="text-[#ccff00]">FUTURE</span> <br /> IS DIGITAL.</h3><div className="flex flex-col sm:flex-row gap-10 relative z-10"><button onClick={onBack} className="px-16 py-8 bg-[#ccff00] text-black rounded-[40px] font-black text-sm tracking-[0.3em] uppercase hover:bg-white transition-all italic shadow-3xl">HQ Main Portal</button></div></section>
    </div>
  );
};

// --- FULL PAGE: INDUSTRIES (RESTORED) ---
const IndustriesPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white px-8 lg:px-24 py-48 lg:py-72 overflow-hidden relative">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.2 }} transition={{ duration: 2 }} className="absolute inset-0 pointer-events-none"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" alt="Built Environment" /></motion.div>
        <div className="max-w-7xl mx-auto relative z-10"><motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff00] mb-12 block italic border-l-4 border-[#ccff00] pl-6">ASSET CLASSES & SECTORS</span><h2 className="font-heading font-black text-6xl md:text-[12rem] tracking-tighter leading-[0.7] mb-16 uppercase">STRATEGIC <br /> <span className="text-white/20 italic">MARKET</span> <br /> VERTICALS.</h2><p className="text-slate-400 text-xl md:text-5xl font-light leading-tight max-w-5xl italic">KAVY delivers specialized built-environment intelligence across government, corporate, residential, and industrial sectors.</p></motion.div></div>
      </section>

      <div className="space-y-64 py-64 px-8 lg:px-24">
        {INDUSTRIES_DATA.map((ind, i) => (
          <section id={`industry-${ind.id}`} key={ind.id} className="max-w-7xl mx-auto scroll-mt-24">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-32 items-start">
              <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -50 }} viewport={{ once: true }} className="lg:col-span-5 space-y-12">
                <div className="flex items-center gap-6 text-slate-400"><Landmark size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">Sector Code 0{i+1}</span></div>
                <h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">{ind.title}</h3>
                <p className="text-slate-500 text-xl font-light leading-relaxed italic">{ind.overview}</p>
                <div className="space-y-12"><div className="grid grid-cols-1 md:grid-cols-2 gap-8"><div className="space-y-6"><h4 className="text-black font-black uppercase text-xs tracking-widest italic border-b-2 border-black pb-2 w-fit">The Challenges</h4><ul className="space-y-4">{ind.problems.map((p, idx) => (<li key={idx} className="flex items-start gap-3 text-slate-500 text-sm font-medium italic"><TrendingDown size={14} className="text-red-500 mt-1 flex-shrink-0" /> {p}</li>))}</ul></div><div className="space-y-6"><h4 className="text-black font-black uppercase text-xs tracking-widest italic border-b-2 border-[#ccff00] pb-2 w-fit">KAVY Systems</h4><ul className="space-y-4">{ind.solutions.map((s, idx) => (<li key={idx} className="flex items-start gap-3 text-black text-sm font-black uppercase tracking-wider italic"><TrendingUp size={14} className="text-[#ccff00] mt-1 flex-shrink-0" /> {s}</li>))}</ul></div></div></div>
              </motion.div>
              <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.9 }} viewport={{ once: true }} className="lg:col-span-7 relative"><div className="rounded-[100px] overflow-hidden h-[500px] md:h-[900px] shadow-3xl group"><img src={ind.image} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={ind.title} /></div></motion.div>
            </div>
          </section>
        ))}
      </div>

      <section className="py-64 flex flex-col items-center gap-16 text-center bg-black text-white px-8 relative overflow-hidden"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7] mb-8 relative z-10">MARKET <br /> <span className="text-[#ccff00]">INTELLIGENCE.</span></h3><div className="flex flex-col sm:flex-row gap-10 relative z-10"><button onClick={onBack} className="px-16 py-8 bg-[#ccff00] text-black rounded-[40px] font-black text-sm tracking-[0.3em] uppercase hover:bg-white transition-all italic shadow-3xl">HQ Main Portal</button></div></section>
    </div>
  );
};

// --- FULL PAGE: SERVICES ---
const ServicesPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-[#f5f5f7] px-8 lg:px-24 py-48 lg:py-72 border-b-8 border-black"><div className="max-w-7xl mx-auto"><motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }}><span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff00] bg-black px-8 py-3 rounded-2xl mb-12 inline-block uppercase italic">Capability Matrix</span><h2 className="font-heading font-black text-6xl md:text-[12rem] tracking-tighter leading-none mb-16 uppercase italic">SYSTEMIC <br /> SOLUTIONS.</h2><p className="text-slate-500 text-xl md:text-5xl font-light leading-tight max-w-5xl italic">Integrated asset lifecycle engineering, from advanced simulation to high-precision manufacturing.</p></motion.div></div></section>
    <div className="space-y-64 py-64 px-6">{FULL_SERVICES.map((serv, i) => (<section id={`serv-${serv.id}`} key={serv.id} className="max-w-7xl mx-auto scroll-mt-24"><div className="grid grid-cols-1 lg:grid-cols-12 gap-20 items-center"><div className="lg:col-span-5 space-y-12"><div className="flex items-center gap-8"><div className="p-8 bg-black text-[#ccff00] rounded-[40px] shadow-2xl scale-110">{serv.icon}</div><div><span className="text-[11px] font-black uppercase tracking-[0.4em] text-slate-400">System Code 0{i+1}</span><h3 className="font-heading text-5xl md:text-7xl font-black uppercase tracking-tight italic">{serv.title}</h3></div></div><p className="text-slate-500 text-xl font-light leading-relaxed italic">High-durability engineered solutions designed for the African context.</p></div><div className="lg:col-span-7"><div className="w-full h-[400px] md:h-[750px] rounded-[100px] overflow-hidden shadow-3xl bg-slate-100 group"><img src={serv.img} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-1000" alt={serv.title} /></div></div></div></section>))}</div>
    <section className="py-64 flex flex-col items-center gap-16 text-center bg-black text-white px-8"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7] mb-8">POWER <br /> OF <span className="text-[#ccff00]">SEVEN.</span></h3><button onClick={onBack} className="px-16 py-8 bg-white text-black rounded-[30px] font-black text-sm tracking-[0.2em] uppercase hover:bg-[#ccff00] transition-all shadow-2xl italic">Main Portal</button></section>
  </div>
);

export default App;
