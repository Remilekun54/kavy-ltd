
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
  LineChart, Monitor, Terminal, Share2, Activity, DatabaseZap, ArrowRight,
  Filter, Map as MapIcon, Calendar, Maximize2, ClipboardCheck, AlertTriangle, FileText, Scale,
  MessageSquare, Clock, UserCheck, Headset
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
  }
];

const FULL_SERVICES = [
  { id: 'coatings', title: 'KAVY COATINGS', icon: <Paintbrush size={18} />, img: 'https://images.unsplash.com/photo-1589939705384-5185137a7f0f?auto=format&w=800' },
  { id: 'design', title: 'KAVY DESIGN', icon: <Scan size={18} />, img: 'https://images.unsplash.com/photo-1499951360447-b19be8fe80f5?auto=format&w=800' },
  { id: 'spaces', title: 'KAVY SPACES', icon: <Layout size={18} />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800' },
  { id: 'infrastructure', title: 'KAVY INFRASTRUCTURE', icon: <HardHat size={18} />, img: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=800' },
  { id: 'maintenance', title: 'KAVY MAINTENANCE', icon: <Settings size={18} />, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&w=800' },
  { id: 'manufacturing', title: 'KAVY MANUFACTURING', icon: <Factory size={18} />, img: 'https://images.unsplash.com/photo-1545239351-1141bd82e8a6?auto=format&w=800' },
  { id: 'systems', title: 'KAVY SYSTEMS', icon: <Cpu size={18} />, img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=800' }
];

const App: React.FC = () => {
  const [currentView, setCurrentView] = useState<'home' | 'about' | 'services' | 'industries' | 'technology' | 'portfolio' | 'compliance' | 'contact-page'>('home');
  const [isMenuOpen, setIsMenuOpen] = useState(true);
  const [isHomeExpanded, setIsHomeExpanded] = useState(false);
  const [isAboutExpanded, setIsAboutExpanded] = useState(false);
  const [isIndustriesExpanded, setIsIndustriesExpanded] = useState(false);
  const [isServicesExpanded, setIsServicesExpanded] = useState(false);
  const [isTechExpanded, setIsTechExpanded] = useState(false);
  const [isPortfolioExpanded, setIsPortfolioExpanded] = useState(false);
  const [isComplianceExpanded, setIsComplianceExpanded] = useState(false);
  const [isContactExpanded, setIsContactExpanded] = useState(false);
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

  const navigateToSubSection = (view: any, subId: string) => {
    setCurrentView(view);
    setTimeout(() => {
      const prefixMap: any = { 'about': 'about', 'technology': 'tech', 'portfolio': 'port', 'compliance': 'comp', 'contact-page': 'cont' };
      const el = document.getElementById(`${prefixMap[view]}-${subId}`);
      el?.scrollIntoView({ behavior: 'smooth' });
    }, 100);
  };

  return (
    <div className="relative h-screen w-full flex overflow-hidden bg-white text-[#1d1d1f]">
      {/* Branding */}
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
          {currentView === 'home' && (
            <motion.div key="home" className="h-full w-full overflow-y-auto" onScroll={handleScroll} ref={containerRef}>
              <HeroSection id="hero" onAction={() => setCurrentView('services')} />
              <VisionSummarySection id="about-summary" onAction={() => setCurrentView('about')} />
              <DivisionsGridSection id="divisions" onAction={() => setCurrentView('services')} />
              <TechnologyTeaserSection id="tech-summary" onAction={() => setCurrentView('technology')} />
              <IndustriesSummarySection id="industries-summary" onAction={() => setCurrentView('industries')} />
              <HomePortfolioSection id="portfolio" onAction={() => setCurrentView('portfolio')} />
              <HomeReviewsSection />
              <ContactSection id="contact" />
              <Footer />
            </motion.div>
          )}
          {currentView === 'about' && <motion.div key="about" className="h-full w-full overflow-y-auto"><AboutUsPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'technology' && <motion.div key="technology" className="h-full w-full overflow-y-auto"><TechnologyPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'industries' && <motion.div key="industries" className="h-full w-full overflow-y-auto"><IndustriesPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'portfolio' && <motion.div key="portfolio" className="h-full w-full overflow-y-auto"><FullPortfolioPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'compliance' && <motion.div key="compliance" className="h-full w-full overflow-y-auto"><CompliancePage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'contact-page' && <motion.div key="contact-page" className="h-full w-full overflow-y-auto"><ContactUsFullPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
          {currentView === 'services' && <motion.div key="services" className="h-full w-full overflow-y-auto"><ServicesPage onBack={() => setCurrentView('home')} /><Footer /></motion.div>}
        </AnimatePresence>
      </motion.div>

      {/* Sidebar Navigation */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.aside initial={{ x: 300, opacity: 0 }} animate={{ x: 0, opacity: 1 }} exit={{ x: 300, opacity: 0 }} className="fixed lg:relative top-0 right-0 h-screen w-[280px] bg-[#f5f5f7] border-l border-slate-200 z-[110] flex flex-col shadow-2xl lg:shadow-none overflow-hidden">
            <div className="p-8 pb-4 flex justify-between items-center border-b border-slate-200 mb-4 uppercase">
              <span className="text-[9px] font-black tracking-[0.4em] text-slate-400">Hub Console</span>
              <button onClick={() => setIsMenuOpen(false)} className="text-slate-500 lg:hidden"><X size={18} /></button>
            </div>
            <div className="flex-1 overflow-y-auto px-6 space-y-4 py-4 no-scrollbar">
              <NavGroup label="HOME" sub="Main Portal" icon={<Home size={18} />} isOpen={isHomeExpanded} onToggle={() => { setIsHomeExpanded(!isHomeExpanded); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false); setIsPortfolioExpanded(false); setIsComplianceExpanded(false); setIsContactExpanded(false); }}>
                {SECTIONS.map(s => (
                  <button key={s.id} onClick={() => scrollToSection(s.id)} className={`flex items-center gap-3 w-full p-3 rounded-xl text-left font-black uppercase text-[9px] tracking-widest transition-all ${activeSection === s.id && currentView === 'home' ? 'bg-black text-white' : 'text-slate-400 hover:text-black hover:bg-slate-200'}`}>
                    <span className="p-1.5 rounded-lg shadow-sm bg-white text-black">{s.icon}</span> {s.label}
                  </button>
                ))}
              </NavGroup>
              <NavGroup label="ABOUT US" sub="Company DNA" icon={<Users size={18} />} isOpen={isAboutExpanded} onToggle={() => { setIsAboutExpanded(!isAboutExpanded); setIsHomeExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false); setIsPortfolioExpanded(false); setIsComplianceExpanded(false); setIsContactExpanded(false); }}>
                {[{ id: 'story', l: 'Story' }, { id: 'vision', l: 'Vision' }, { id: 'values', l: 'Values' }, { id: 'leadership', l: 'Leadership' }].map(s => (
                  <button key={s.id} onClick={() => navigateToSubSection('about', s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all">{s.l}</button>
                ))}
              </NavGroup>
              <NavGroup label="TECHNOLOGY" sub="Intel Layer" icon={<Cpu size={18} />} isOpen={isTechExpanded} onToggle={() => { setIsTechExpanded(!isTechExpanded); setIsHomeExpanded(false); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsPortfolioExpanded(false); setIsComplianceExpanded(false); setIsContactExpanded(false); }}>
                {[{ id: 'platform', l: 'KAVY Systems' }, { id: 'ai-design', l: 'AI Visual' }, { id: 'predictive', l: 'Predictive' }].map(s => (
                  <button key={s.id} onClick={() => navigateToSubSection('technology', s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all">{s.l}</button>
                ))}
              </NavGroup>
              <NavGroup label="GOVERNANCE" sub="Trust Registry" icon={<ShieldCheck size={18} />} isOpen={isComplianceExpanded} onToggle={() => { setIsComplianceExpanded(!isComplianceExpanded); setIsHomeExpanded(false); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false); setIsPortfolioExpanded(false); setIsContactExpanded(false); }}>
                {[{ id: 'qa-framework', l: 'Quality' }, { id: 'hse-policy', l: 'Safety' }, { id: 'certifications', l: 'Certs' }].map(s => (
                  <button key={s.id} onClick={() => navigateToSubSection('compliance', s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all">{s.l}</button>
                ))}
              </NavGroup>
              <NavGroup label="CONTACT" sub="Strategic Link" icon={<Headset size={18} />} isOpen={isContactExpanded} onToggle={() => { setIsContactExpanded(!isContactExpanded); setIsHomeExpanded(false); setIsAboutExpanded(false); setIsIndustriesExpanded(false); setIsServicesExpanded(false); setIsTechExpanded(false); setIsPortfolioExpanded(false); setIsComplianceExpanded(false); }}>
                {[{ id: 'general', l: 'Contact Us' }, { id: 'quote', l: 'Quotes' }, { id: 'locations', l: 'Locations' }].map(s => (
                  <button key={s.id} onClick={() => navigateToSubSection('contact-page', s.id)} className="p-3 text-left font-black uppercase text-[9px] tracking-widest text-slate-500 hover:text-black hover:bg-slate-200 rounded-xl transition-all">{s.l}</button>
                ))}
              </NavGroup>
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
    <AnimatePresence>{isOpen && <motion.div initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }} exit={{ height: 0, opacity: 0 }} className="overflow-hidden flex flex-col gap-1 pl-4">{children}</motion.div>}</AnimatePresence>
  </div>
);

// --- SECTIONS ---

<<<<<<< HEAD
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
      <motion.h2 initial={{ opacity: 0, scale: 0.95 }} whileInView={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, ease: "easeOut" }} className="font-heading font-black text-5xl md:text-8xl tracking-tighter leading-[0.85] mb-12 uppercase italic text-white">
        REDEFINING <br /> <span className="lemon-gradient-text italic">INTELLIGENT</span> <br /> ENVIRONMENTS.
      </motion.h2>
      <motion.p initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} transition={{ delay: 0.4 }} className="text-slate-400 text-lg md:text-2xl font-light italic mb-12 max-w-3xl mx-auto leading-relaxed">
        A multi-disciplinary systems company engineering the future of surfaces, spaces, and infrastructure.
      </motion.p>
      <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={onAction} className="px-12 py-6 bg-[#ccff00] text-black rounded-2xl font-black text-sm tracking-widest uppercase shadow-2xl italic hover:bg-white transition-colors">Systems Capability Matrix</motion.button>
        <motion.button whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }} onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-12 py-6 border-2 border-white/30 text-white rounded-2xl font-black text-sm tracking-widest uppercase backdrop-blur-sm hover:bg-white hover:text-black transition-all italic">Initiate Briefing</motion.button>
=======
const HeroSection = ({ id, onAction }: any) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const slides = [
    { url: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000", label: "Infrastructure" },
    { url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=2000", label: "Industrial" },
    { url: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=2000", label: "Corporate" }
  ];
  useEffect(() => { const t = setInterval(() => setCurrentSlide(p => (p + 1) % slides.length), 5000); return () => clearInterval(t); }, []);

  return (
    <section id={id} className="relative min-h-screen flex items-center justify-center py-24 overflow-hidden bg-black">
      <div className="absolute inset-0 z-0">
        <AnimatePresence mode="wait"><motion.img key={currentSlide} initial={{ opacity: 0, scale: 1.15 }} animate={{ opacity: 0.5, scale: 1 }} exit={{ opacity: 0, scale: 0.95 }} transition={{ duration: 1.5 }} src={slides[currentSlide].url} className="w-full h-full object-cover" /></AnimatePresence>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
      </div>
      <div className="relative z-10 text-center max-w-5xl px-6">
        <motion.span className="inline-flex px-6 py-2 bg-white/10 backdrop-blur-md rounded-full text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 border border-white/20">{slides[currentSlide].label} SYSTEM NOMINAL</motion.span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter mb-8 uppercase italic text-white">REDEFINING <br /> <span className="lemon-gradient-text italic">INTELLIGENT</span> <br /> ENVIRONMENTS.</h2>
        <div className="flex flex-col sm:flex-row gap-6 justify-center"><button onClick={onAction} className="px-10 py-5 bg-[#ccff00] text-black rounded-2xl font-black text-xs tracking-widest uppercase italic shadow-2xl">Capabilities</button><button onClick={() => document.getElementById('contact')?.scrollIntoView({behavior:'smooth'})} className="px-10 py-5 border-2 border-white/30 text-white rounded-2xl font-black text-xs tracking-widest uppercase backdrop-blur-sm italic">Initiate Brief</button></div>
      </div>
    </section>
  );
};

const VisionSummarySection = ({ id, onAction }: any) => (
<<<<<<< HEAD
  <section id={id} className="min-h-screen bg-[#f5f5f7] flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12 order-2 lg:order-1">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-black rounded-lg inline-block italic">About Kavy</span>
        <h3 className="font-heading text-4xl md:text-7xl font-black tracking-tight leading-none uppercase italic">BUILT-ENVIRONMENT <br /> SYSTEMS.</h3>
        <p className="text-slate-500 text-xl md:text-1xl font-light leading-relaxed italic">KAVY is not a painting company. KAVY is a built-environment systems company designed to redefine how Africa protects and maintains its physical assets.</p>
        <div className="grid grid-cols-2 gap-6">
           {['Visionary Story', 'Mission Control', 'Core Values', 'Leadership'].map(v => (
             <div key={v} className="flex items-center gap-3 text-[11px] font-black uppercase tracking-widest text-slate-400"><CheckCircle2 size={16} className="text-[#ccff00]" /> {v}</div>
           ))}
        </div>
        <button onClick={onAction} className="group flex items-center gap-4 text-sm font-black uppercase tracking-[0.2em] hover:text-[#ccff00] transition-colors italic border-b-2 border-black pb-2 w-fit">Access Full Company DNA <ArrowUpRight size={20} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" /></button>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="relative order-1 lg:order-2">
        <img src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=1200" alt="Vision" className="rounded-[60px] shadow-3xl object-cover h-[300px] md:h-[700px] w-4/5 mx-auto" />
=======
  <section id={id} className="py-24 md:py-32 bg-[#f5f5f7] px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-black rounded-lg inline-block italic">About Kavy</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic leading-none">SYSTEMS-LED <br /> ENVIRONMENTS.</h3>
        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed italic">KAVY is a built-environment systems company designed to redefine asset protection across Africa.</p>
        <button onClick={onAction} className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 italic">Access Full DNA <ArrowUpRight size={16} /></button>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
      </motion.div>
      <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800" className="rounded-[40px] shadow-2xl h-[400px] object-cover" />
    </div>
  </section>
);

const DivisionsGridSection = ({ id, onAction }: any) => (
<<<<<<< HEAD
  <section id={id} className="min-h-screen bg-white flex flex-col justify-center py-16 md:py-24 px-6 overflow-hidden">
    <div className="max-w-7xl w-full mx-auto">
      <div className="mb-24 flex flex-col md:flex-row md:items-end justify-between gap-12">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}>
          <h3 className="font-heading text-5xl lg:text-6xl font-black tracking-tighter uppercase italic">7 CORE DIVISIONS</h3>
          <p className="text-slate-400 font-medium uppercase text-[10px] tracking-widest mt-4 italic underline decoration-[#ccff00] decoration-4 underline-offset-8">Engineering for the Asset Lifecycle</p>
        </motion.div>
        <button onClick={onAction} className="px-10 py-5 bg-black text-white text-[11px] font-black uppercase tracking-[0.2em] rounded-2xl hover:bg-[#ccff00] hover:text-black transition-all shadow-xl italic">Capability Matrix</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {FULL_SERVICES.map((serv, i) => (
          <motion.div key={serv.id} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.1 }} whileHover={{ y: -10 }} className="group relative p-10 bg-[#f5f5f7] rounded-[50px] border-2 border-[#ccff00] hover:border-black transition-all cursor-pointer h-[300px] md:h-[350px] flex flex-col justify-between shadow-sm overflow-hidden">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-20 transition-opacity"><img src={serv.img} className="w-full h-full object-cover" alt={serv.title} /></div>
            <div className="relative z-10 flex flex-col">
              <div className="p-5 bg-white rounded-2xl w-fit mb-6 group-hover:bg-[#ccff00] transition-colors shadow-sm">{serv.icon}</div>
              <h4 className="font-heading text-2xl font-black italic">{serv.title}</h4>
            </div>
            <button onClick={() => document.getElementById('services')?.scrollIntoView({behavior:'smooth'})} className="relative z-10 text-[9px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 flex items-center gap-2 bg-transparent border-none cursor-pointer hover:text-[#ccff00] transition-colors">Explore System <ChevronRight size={12}/></button>
=======
  <section id={id} className="py-24 md:py-32 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-8">
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic">7 CORE DIVISIONS</h3>
        <button onClick={onAction} className="px-8 py-4 bg-black text-white text-[10px] font-black uppercase tracking-[0.2em] rounded-xl italic">Capability Matrix</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {FULL_SERVICES.map((s, i) => (
          <motion.div key={i} whileHover={{ y: -5 }} className="group relative p-8 bg-[#f5f5f7] rounded-[40px] h-[300px] flex flex-col justify-between overflow-hidden shadow-sm">
            <div className="absolute inset-0 opacity-0 group-hover:opacity-10 transition-opacity"><img src={s.img} className="w-full h-full object-cover" /></div>
            <div className="relative z-10"><div className="p-4 bg-white rounded-xl w-fit mb-4">{s.icon}</div><h4 className="font-heading text-xl font-black italic">{s.title}</h4></div>
            <span className="relative z-10 text-[8px] font-black uppercase tracking-widest opacity-40 group-hover:opacity-100 italic">Explore System</span>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologyTeaserSection = ({ id, onAction }: any) => (
<<<<<<< HEAD
  <section id={id} className="min-h-screen bg-black text-white flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden relative">
    <div className="absolute inset-0 opacity-20 pointer-events-none blur-3xl"><div className="w-[800px] h-[800px] bg-[#ccff00]/20 rounded-full absolute -top-40 -left-40 animate-pulse"></div></div>
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
      <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-white/10 rounded-lg inline-block italic">The Intel Layer</span>
        <h3 className="font-heading text-5xl md:text-6xl font-black tracking-tight leading-none uppercase italic">DIGITAL <br /> INFRASTRUCTURE <br /> <span className="text-[#ccff00]">OS.</span></h3>
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
      <motion.div initial={{ opacity: 0, scale: 0.9, y: 50 }} whileInView={{ opacity: 1, scale: 1, y: 0 }} transition={{ delay: 0.3, duration: 0.8 }} whileHover={{ scale: 1.02 }} className="relative rounded-[80px] overflow-hidden h-[400px] md:h-[700px] shadow-3xl border border-white/10 group">
         <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=1200" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 group-hover:brightness-100 transition-all duration-1000" alt="Tech" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent p-12 flex flex-col justify-end">
            <motion.h4 initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: 0.6, duration: 0.6 }} className="text-[#ccff00] font-heading text-4xl font-black italic">INTELLIGENCE V2.4</motion.h4>
         </div>
      </motion.div>
=======
  <section id={id} className="py-24 md:py-32 bg-black text-white px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-white/10 rounded-lg inline-block italic">The Intel Layer</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic">DIGITAL INFRASTRUCTURE.</h3>
        <p className="text-slate-400 text-lg md:text-xl font-light italic">KAVY transforms physical spaces into data-driven assets via AI and IoT.</p>
        <button onClick={onAction} className="px-10 py-5 bg-[#ccff00] text-black rounded-xl font-black text-xs uppercase italic">Explore Technology</button>
      </div>
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale brightness-75 h-[400px] object-cover" />
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
    </div>
  </section>
);

const IndustriesSummarySection = ({ id, onAction }: any) => (
<<<<<<< HEAD
  <section id={id} className="min-h-screen bg-[#1d1d1f] text-white flex items-center justify-center py-16 md:py-24 px-6 overflow-hidden">
    <div className="max-w-7xl w-full grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-center relative z-10">
      <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative rounded-[80px] overflow-hidden h-[400px] md:h-[750px] shadow-3xl order-2 lg:order-1">
         <img src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&w=1400&q=80" className="w-full h-full object-cover grayscale opacity-60" alt="Industries" />
         <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent flex flex-col justify-end p-16"><h4 className="text-[#ccff00] font-heading text-4xl md:text-5xl font-black italic mb-2">ASSET CLASSES</h4></div>
      </motion.div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12 order-1 lg:order-2">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-6 py-3 bg-white/10 rounded-lg inline-block italic border border-white/10">Strategic Verticals</span>
        <h3 className="font-heading text-5xl md:text-6xl font-black tracking-tight leading-none uppercase italic">INTELLIGENCE <br /> FOR EVERY <br /> <span className="text-[#ccff00]">SECTOR.</span></h3>
        <p className="text-slate-400 text-xl md:text-1xl font-light leading-relaxed italic">KAVY delivers end-to-end lifecycle solutions tailored to the unique requirements of each industry.</p>
        <button onClick={onAction} className="px-12 py-6 bg-[#ccff00] text-black rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-white transition-all shadow-xl italic">Market Sector Insights</button>
      </motion.div>
=======
  <section id={id} className="py-24 md:py-32 bg-[#1d1d1f] text-white px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <img src="https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale h-[400px] object-cover order-2 lg:order-1" />
      <div className="space-y-8 order-1 lg:order-2">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-white/10 rounded-lg inline-block italic">Market Sectors</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic">INTELLIGENT VERTICALS.</h3>
        <p className="text-slate-400 text-lg md:text-xl font-light italic">End-to-end solutions for every strategic industry across Africa.</p>
        <button onClick={onAction} className="px-10 py-5 bg-[#ccff00] text-black rounded-xl font-black text-xs uppercase italic">Sector Insights</button>
      </div>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
    </div>
  </section>
);

const HomePortfolioSection = ({ id, onAction }: any) => (
<<<<<<< HEAD
  <section id={id} className="bg-[#f5f5f7] flex items-center justify-center py-8 md:py-12 px-6 overflow-hidden">
    <div className="max-w-7xl w-full">
      <div className="mb-6 text-center"><h3 className="font-heading text-5xl lg:text-7xl font-black tracking-tighter uppercase italic">PORTFOLIO <br /> OF IMPACT.</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {[
          { title: 'Lagos Smart City', cat: 'SPACES', img: 'https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800' },
          { title: 'Lifecycle AI Hub', cat: 'SYSTEMS', img: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&w=800' },
          { title: 'Painted House', cat: 'COATINGS', img: '/images/h3.jpeg' }
        ].map((item, i) => (
          <motion.div key={i} onClick={onAction} initial={{ opacity: 0, y: 50 }} whileInView={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.2 }} className="group relative h-[300px] md:h-[420px] rounded-[70px] overflow-hidden bg-white shadow-3xl cursor-pointer">
            <img src={item.img} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" alt={item.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/20 to-transparent p-8 flex flex-col justify-end">
              <span className="text-[#ccff00] font-black text-[11px] uppercase tracking-widest mb-4 italic">Case Study 0{i+1}</span>
              <h4 className="text-white font-heading text-4xl font-bold italic mb-4">{item.title}</h4>
              <p className="text-white/40 text-[10px] font-black uppercase tracking-[0.3em]">{item.cat} DIVISION</p>
            </div>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 text-center">
        <button onClick={onAction} className="px-12 py-6 bg-black text-white rounded-2xl font-black text-sm tracking-widest uppercase hover:bg-[#ccff00] hover:text-black transition-all italic flex items-center gap-3 mx-auto shadow-2xl">Access Full Impact Registry <ArrowRight size={18} /></button>
      </div>
=======
  <section id={id} className="py-24 md:py-32 bg-[#f5f5f7] px-6">
    <div className="max-w-7xl mx-auto">
      <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic text-center mb-16">PORTFOLIO OF IMPACT.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{ t: 'Lagos City Hub', c: 'SPACES' }, { t: 'Lifecycle AI', c: 'SYSTEMS' }, { t: 'Maritime Port', c: 'COATINGS' }].map((p, i) => (
          <div key={i} className="group relative h-[400px] rounded-[50px] overflow-hidden shadow-lg cursor-pointer" onClick={onAction}>
            <img src={`https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800&q=${i}`} className="w-full h-full object-cover transition-transform group-hover:scale-105" />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 p-10 flex flex-col justify-end"><h4 className="text-white font-heading text-2xl font-black italic mb-2">{p.t}</h4><p className="text-[#ccff00] font-black text-[9px] tracking-widest uppercase">{p.c}</p></div>
          </div>
        ))}
      </div>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
    </div>
  </section>
);

const HomeReviewsSection = () => (
<<<<<<< HEAD
  <section className="bg-white py-16 md:py-24 px-6 overflow-hidden border-t border-slate-100">
    <div className="max-w-7xl w-full mx-auto">
      <div className="text-center mb-24 uppercase italic"><h3 className="font-heading text-5xl lg:text-7xl font-black tracking-tighter italic">THE NETWORK.</h3></div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16">
        {[
          { text: "KAVY LTD redefined our logistics facility coatings. Their tech-first approach is unmatched.", author: "Dr. Adebayo", org: "Logistics Hub" },
          { text: "The KAVY SPACES division transformed our headquarters into a high-productivity environment.", author: "Sarah J.", org: "Tech Corp" },
          { text: "KAVY is the future of building intelligence in Africa. Engineering meets software.", author: "Engineer Koffi", org: "Public Works Bureau" }
        ].map((rev, i) => (
          <motion.div key={i} initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} className="p-8 bg-[#f5f5f7] rounded-[40px] hover:bg-black group transition-all duration-500 border-2 border-[#ccff00]/10 hover:border-[#ccff00]">
            <div className="mb-6 flex gap-1"><Sparkles size={16} className="text-[#ccff00]" /></div>
            <p className="text-slate-600 font-light italic text-lg leading-relaxed mb-6 group-hover:text-slate-300 transition-colors">"{rev.text}"</p>
            <div className="space-y-1"><h5 className="font-black text-lg group-hover:text-[#ccff00] transition-colors uppercase italic">{rev.author}</h5><p className="text-[10px] text-slate-400 font-black uppercase tracking-[0.2em]">{rev.org}</p></div>
          </motion.div>
=======
  <section className="py-24 md:py-32 bg-white px-6">
    <div className="max-w-7xl mx-auto">
      <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic text-center mb-16">THE NETWORK.</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {[{ a: "Dr. Adebayo", o: "Logistics Hub" }, { a: "Sarah J.", o: "Tech Corp" }, { a: "Engr. Koffi", o: "Public Works" }].map((r, i) => (
          <div key={i} className="p-10 bg-[#f5f5f7] rounded-[50px] hover:bg-black group transition-all duration-500">
            <p className="text-slate-600 italic text-lg leading-relaxed mb-8 group-hover:text-slate-300">"KAVY redefined our facility coatings. Engineering meets software excellence."</p>
            <h5 className="font-black group-hover:text-[#ccff00] uppercase italic">{r.a}</h5>
            <p className="text-[9px] text-slate-400 font-black uppercase tracking-widest">{r.o}</p>
          </div>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ id }: any) => (
<<<<<<< HEAD
  <section id={id} className="bg-black text-white flex flex-col justify-center py-8 md:py-12 px-6 relative overflow-hidden">
    <div className="max-w-7xl w-full mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 relative z-10">
      <div className="space-y-8">
        <h3 className="font-heading text-4xl lg:text-6xl font-black tracking-tighter leading-[0.8] uppercase italic"><span className="text-[#ccff00]">STRATEGIC</span> <br /> BRIEFING.</h3>
        <p className="text-slate-500 text-sm md:text-lg font-light italic max-w-xl leading-snug">Global reach. African excellence. Initiate a mission brief with our architects.</p>
        <div className="flex items-center gap-4 p-4 bg-white/5 rounded-[30px] border border-white/10 group hover:border-[#ccff00] transition-all w-fit"><div className="p-3 bg-[#ccff00] text-black rounded-2xl group-hover:scale-110 transition-transform"><Phone size={20} /></div><div><p className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 italic mb-1">Executive Line</p><p className="text-lg md:text-xl font-black italic">+234 814 413 0329</p></div></div>
      </div>
      <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} className="bg-white p-6 md:p-12 rounded-[50px] shadow-3xl text-black">
        <h4 className="font-heading text-2xl md:text-3xl font-black mb-6 uppercase italic underline decoration-[#ccff00] decoration-4 underline-offset-4">Mission Portal</h4>
        <form className="space-y-4"><div className="space-y-1"><label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Strategic Email</label><input type="email" className="w-full bg-[#f5f5f7] rounded-[20px] p-4 focus:outline-none font-bold uppercase tracking-widest text-xs italic border-2 border-transparent focus:border-[#ccff00] transition-all" placeholder="INTEL@DOMAIN.COM" /></div><div className="space-y-1"><label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Objective Summary</label><textarea rows={2} className="w-full bg-[#f5f5f7] rounded-[20px] p-4 focus:outline-none font-bold uppercase tracking-widest text-xs italic border-2 border-transparent focus:border-[#ccff00] transition-all" placeholder="BRIEF_SYNOPSIS"></textarea></div><button className="w-full py-4 bg-[#ccff00] text-black font-black uppercase tracking-[0.4em] text-xs rounded-[20px] hover:bg-black hover:text-[#ccff00] transition-all shadow-2xl italic">Transmit Brief</button></form>
      </motion.div>
=======
  <section id={id} className="py-24 md:py-32 bg-black text-white px-6 overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic leading-[0.8]"><span className="text-[#ccff00]">STRATEGIC</span> <br /> BRIEFING.</h3>
        <div className="p-6 bg-white/5 rounded-[30px] border border-white/10 w-fit flex items-center gap-6"><Phone size={24} className="text-[#ccff00]" /><div><p className="text-[9px] font-black tracking-widest text-slate-500 mb-1">EXEC LINE</p><p className="text-xl font-black italic">+234 814 413 0329</p></div></div>
      </div>
      <div className="bg-white p-10 rounded-[50px] text-black shadow-2xl"><h4 className="font-heading text-2xl font-black mb-8 uppercase italic underline decoration-[#ccff00] decoration-4 underline-offset-4">Mission Portal</h4><form className="space-y-6"><input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full bg-[#f5f5f7] rounded-2xl p-5 focus:outline-none font-bold text-xs italic border border-transparent focus:border-[#ccff00] transition-colors" /><textarea rows={3} placeholder="SYNOPSIS" className="w-full bg-[#f5f5f7] rounded-2xl p-5 focus:outline-none font-bold text-xs italic border border-transparent focus:border-[#ccff00] transition-colors"></textarea><button className="w-full py-6 bg-black text-white font-black uppercase text-xs rounded-2xl hover:bg-[#ccff00] hover:text-black transition-all italic shadow-lg">Transmit Brief</button></form></div>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
    </div>
  </section>
);

const Footer = () => (
<<<<<<< HEAD
  <footer className="bg-slate-200 text-slate-600 py-8 md:py-12 px-6 border-t border-slate-300 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12">
      <div className="space-y-4">
        <div className="flex items-center gap-3"><KavyLogo className="w-10 h-10 text-black" /><span className="font-heading font-black text-black text-2xl tracking-tighter uppercase italic">KAVY LTD</span></div>
        <p className="text-xs font-medium leading-relaxed uppercase tracking-[0.1em] text-slate-500 italic">Integrating spaces, infrastructure, and technology across Africa.</p>
=======
  <footer className="bg-slate-200 text-slate-600 py-8 md:py-10 px-6 border-t border-slate-300 relative z-10 overflow-hidden">
    <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
      <div className="flex flex-col items-center md:items-start space-y-4">
        <div className="flex items-center gap-3"><KavyLogo className="w-8 h-8 text-black" /><span className="font-heading font-black text-black text-xl tracking-tighter uppercase italic">KAVY LTD</span></div>
        <p className="text-[10px] font-bold uppercase tracking-wider text-slate-500 italic max-w-xs text-center md:text-left">Integrated Building Intelligence • Africa Scale Secured.</p>
      </div>

      <div className="flex items-center justify-center gap-6 py-2 px-8 bg-white/50 backdrop-blur-sm rounded-full shadow-sm">
        {[Linkedin, Facebook, Instagram].map((Icon, i) => (
          <a key={i} href="#" className="p-2.5 text-slate-500 hover:text-black hover:bg-white rounded-full transition-all"><Icon size={18} /></a>
        ))}
      </div>

      <div className="flex flex-col md:flex-row items-center gap-6 text-[9px] font-black uppercase tracking-widest italic text-slate-500">
        <div className="flex items-center gap-2"><MapPin size={12} className="text-black" /> Lagos HQ</div>
        <div className="flex items-center gap-2"><Phone size={12} className="text-black" /> +234 814 413 0329</div>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
      </div>
      <div className="space-y-3 text-slate-500"><p className="text-black text-xs font-black">Primary Operations</p><p className="flex items-center gap-2 font-bold italic text-xs"><MapPin size={12} className="text-black" /> Lagos HQ, Nigeria</p><p className="flex items-center gap-2 font-bold italic text-xs"><Phone size={12} className="text-black" /> +234 814 413 0329</p></div>
      <div className="space-y-3 text-slate-500"><p className="text-black text-xs font-black">Strategic Governance</p><a href="#" className="block hover:text-black transition-colors italic text-xs border-b border-transparent hover:border-black w-fit pb-1">Safety Protocols</a><a href="#" className="block hover:text-black transition-colors italic text-xs border-b border-transparent hover:border-black w-fit pb-1">Privacy Architecture</a></div>
      <div className="space-y-3"><p className="text-black text-xs font-black">Connect</p><div className="flex gap-3">{[[Linkedin, '#'], [Facebook, '#'], [Instagram, '#']].map(([Icon, link]: any, i) => (<a key={i} href={link} className="p-2 bg-white rounded-full hover:bg-black hover:text-[#ccff00] shadow-md transition-all"><Icon size={14} /></a>))}</div></div>
    </div>
<<<<<<< HEAD
    <div className="max-w-7xl mx-auto mt-8 pt-6 border-t border-slate-300 text-center text-[9px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
      <p>© 2024 KAVY LTD. SYSTEMS NOMINAL • REGIONAL SCALE SECURED.</p>
=======
    
    <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-300/50 flex justify-center text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
      <p>© 2024 KAVY LTD • SYSTEMS NOMINAL • ALL RIGHTS SECURED.</p>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
    </div>
  </footer>
);

// --- FULL PAGES (MEDIUM HEADINGS) ---

<<<<<<< HEAD
      <section id="about-story" className="py-24 md:py-32 px-8 lg:px-24 overflow-hidden border-b border-slate-100 scroll-mt-24"><div className="max-w-7xl mx-auto"><div className="grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} viewport={{ once: true }} className="space-y-16"><div className="flex items-center gap-6 text-slate-400"><History size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">The Genesis</span></div><h3 className="font-heading text-5xl md:text-9xl font-black uppercase tracking-tight leading-none italic">WHY KAVY <br /> EXISTS.</h3><div className="p-12 bg-[#1d1d1f] text-white rounded-[70px] shadow-3xl relative overflow-hidden group"><img src="https://images.unsplash.com/photo-1541913054-21199a42d530?auto=format&w=800" className="absolute inset-0 w-full h-full object-cover opacity-10 group-hover:scale-110 transition-transform duration-1000" alt="Problem" /><div className="relative z-10"><h4 className="text-[#ccff00] font-black uppercase text-xs tracking-[0.3em] mb-6">The Systemic Gap</h4><p className="text-slate-400 font-light text-lg md:text-xl leading-relaxed italic">Infrastructure deteriorates years early due to fragmented, labor-dependent maintenance. We saw an engineering problem, not a cosmetic one.</p></div></div></motion.div><motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} className="relative"><div className="relative rounded-[100px] overflow-hidden h-[600px] md:h-[900px] shadow-3xl group"><img src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?auto=format&w=1200" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" alt="Insight" /><div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent flex flex-col justify-end p-16"><p className="text-white text-3xl font-heading font-black tracking-tight leading-tight uppercase italic border-l-4 border-[#ccff00] pl-8">BEYOND THE <br /> COSMETIC LAYER.</p></div></div></motion.div></div></div></section>

      <section id="about-vision" className="py-24 md:py-32 bg-slate-50 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 100 }} viewport={{ once: true }} className="space-y-24 order-2 lg:order-1"><div className="space-y-10"><div className="flex items-center gap-6 text-[#ccff00] bg-black px-8 py-4 rounded-3xl w-fit shadow-2xl"><Eye size={24} /> <span className="font-black uppercase tracking-[0.3em] text-[11px]">The Vision</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">AFRICA'S LEADING SYSTEMS UNICORN.</h3><p className="text-slate-500 text-xl md:text-2xl font-light leading-relaxed italic">To become Africa’s leading built-environment systems company, delivering intelligent solutions across residential, industrial, and public infrastructure.</p></div></motion.div><motion.div whileInView={{ scale: 1, opacity: 1 }} initial={{ scale: 0.9, opacity: 0 }} viewport={{ once: true }} className="relative rounded-[100px] overflow-hidden h-[600px] md:h-[900px] shadow-3xl order-1 lg:order-2 group"><img src="https://images.unsplash.com/photo-1449156001934-19918c217523?auto=format&w=1200" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-1000" alt="Future City" /><div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div></motion.div></div></section>

      <section id="about-values" className="py-24 md:py-32 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto"><div className="text-center mb-32 space-y-10"><motion.span whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-slate-400 font-black uppercase text-[12px] tracking-[0.6em] block">The Kavy Compass</motion.span><motion.h3 whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} className="font-heading text-6xl md:text-[12rem] font-black uppercase tracking-tighter italic">CORE VALUES.</motion.h3></div><div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">{[{ icon: <Workflow />, title: "Systems Thinking", desc: "We design connected solutions, not isolated services." }, { icon: <Award />, title: "Precision Engineering", desc: "Quality is engineered into every material and process." }, { icon: <Shield />, title: "Total Accountability", desc: "Traceable and measurable outcomes." }, { icon: <Zap />, title: "Purposeful Tech", desc: "Solving real problems through AI." }, { icon: <Leaf />, title: "Sustainability", desc: "Built responsibility and workforce growth." }].map((v, i) => (<motion.div key={i} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-16 border-2 border-slate-100 rounded-[80px] hover:border-black hover:bg-black group transition-all duration-700 relative overflow-hidden"><div className="relative z-10 space-y-8"><div className="w-20 h-20 rounded-3xl bg-slate-50 text-black flex items-center justify-center group-hover:bg-[#ccff00] transition-all">{v.icon}</div><h4 className="font-black uppercase text-xl group-hover:text-white tracking-widest italic">{v.title}</h4><p className="text-lg text-slate-400 font-light italic leading-relaxed">{v.desc}</p></div></motion.div>))}</div></div></section>

      <section id="about-leadership" className="py-24 md:py-32 bg-black text-white px-8 lg:px-24 scroll-mt-24 overflow-hidden">
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

      <section id="about-advantage" className="py-24 md:py-32 px-8 lg:px-24 scroll-mt-24 overflow-hidden border-b border-slate-100">
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

      <section id="about-operating" className="py-24 md:py-32 bg-slate-50 px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-32"><div className="lg:col-span-5 space-y-16"><h3 className="font-heading text-6xl md:text-9xl font-black uppercase tracking-tight leading-none italic">OPERATING <br /> MODEL.</h3><p className="text-slate-500 text-xl md:text-3xl font-light leading-relaxed italic">KAVY integrates the entire asset lifecycle: from digital design intelligence to vertically integrated manufacturing.</p></div><div className="lg:col-span-7 flex flex-col justify-center"><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[{ title: "Strategic Design", icon: <Scan />, desc: "Simulation and performance modeling." }, { title: "Integrated Materials", icon: <Microscope />, desc: "Engineering-grade specialty coatings." }, { title: "Standard Execution", icon: <HardHat />, desc: "Tech-enabled delivery via field teams." }, { title: "Digital Monitoring", icon: <Search />, desc: "IoT integration for real-time tracking." }].map((step, i) => (<motion.div key={i} whileInView={{ x: 0, opacity: 1 }} initial={{ x: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-12 bg-white rounded-[60px] border border-slate-100 flex flex-col gap-8 group hover:shadow-3xl transition-all"><div className="p-6 bg-black text-[#ccff00] rounded-3xl w-fit group-hover:scale-110 transition-transform">{step.icon}</div><div className="space-y-4"><h4 className="font-black uppercase text-xl tracking-widest italic">{step.title}</h4><p className="text-lg text-slate-400 font-light italic leading-relaxed">{step.desc}</p></div></motion.div>))}</div></div></div></section>

      <section className="py-48 flex flex-col items-center gap-16 text-center bg-[#f5f5f7]"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7]">PAN-AFRICAN <br /> <span className="text-[#ccff00] bg-black px-12 py-4">INTELLIGENCE.</span></h3><div className="flex flex-col sm:flex-row gap-10"><button onClick={onBack} className="px-16 py-8 bg-black text-white rounded-[40px] font-black text-sm tracking-[0.3em] uppercase hover:bg-[#ccff00] transition-all italic shadow-3xl">HQ Main Portal</button></div></section>
    </div>
  );
};

// --- FULL PAGE: TECHNOLOGY ---
const TechnologyPage = ({ onBack }: { onBack: () => void }) => {
  return (
    <div className="bg-white min-h-screen">
      <section className="bg-black text-white px-8 lg:px-24 py-48 lg:py-72 overflow-hidden relative">
        <motion.div initial={{ scale: 1.2, opacity: 0 }} animate={{ scale: 1, opacity: 0.2 }} transition={{ duration: 2 }} className="absolute inset-0 pointer-events-none"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=2000" className="w-full h-full object-cover" alt="Data" /></motion.div>
        <div className="max-w-7xl mx-auto relative z-10"><motion.div initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 1 }}><span className="text-[12px] font-black uppercase tracking-[0.6em] text-[#ccff00] mb-12 block italic border-l-4 border-[#ccff00] pl-6">THE INTELLIGENCE LAYER</span><h2 className="font-heading font-black text-6xl md:text-[12rem] tracking-tighter leading-[0.7] mb-16 uppercase">DIGITIZING <br /> <span className="text-white/20 italic">EVERY</span> <br /> STRUCTURE.</h2><p className="text-slate-400 text-xl md:text-5xl font-light leading-tight max-w-5xl italic">KAVY’s technology platform transforms physical spaces and infrastructure into data-driven, intelligent assets via AI, software, and real-time sensors.</p></motion.div></div>
      </section>

      <section id="tech-platform" className="py-48 px-8 lg:px-24 border-b border-slate-100 overflow-hidden scroll-mt-24"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: -100 }} viewport={{ once: true }} className="space-y-12"><div className="flex items-center gap-6 text-slate-400"><Terminal size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 01</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">KAVY SYSTEMS <br /> PLATFORM.</h3><p className="text-slate-500 text-xl font-light leading-relaxed italic">The digital OS for built environments connecting design, execution, and maintenance into one unified dashboard.</p><div className="grid grid-cols-1 md:grid-cols-2 gap-8">{[{ t: "Asset Registry", d: "Centralized ledger." }, { t: "Performance Ops", d: "Tracking every surface." }, { t: "Automation", d: "Scheduled workflows." }, { t: "IoT Monitoring", d: "Sensor-led insights." }].map((c, i) => (<div key={i} className="p-8 bg-[#f5f5f7] rounded-[40px] border border-black/5 hover:border-[#ccff00] transition-colors"><h4 className="font-black uppercase text-xs tracking-widest mb-4 italic">{c.t}</h4><p className="text-slate-500 text-xs font-medium">{c.d}</p></div>))}</div></motion.div><motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} className="relative rounded-[100px] overflow-hidden h-[500px] md:h-[800px] shadow-3xl"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&w=1200" className="w-full h-full object-cover grayscale brightness-50" alt="Backbone" /></motion.div></div></section>

      <section id="tech-ai-design" className="py-48 bg-[#f5f5f7] px-8 lg:px-24 scroll-mt-24 overflow-hidden"><div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center"><motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} viewport={{ once: true }} className="order-2 lg:order-1 relative rounded-[100px] overflow-hidden h-[500px] md:h-[800px] shadow-3xl"><img src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=1200" className="w-full h-full object-cover" alt="Design AI" /></motion.div><motion.div whileInView={{ opacity: 1, y: 0 }} initial={{ opacity: 0, y: 50 }} viewport={{ once: true }} className="order-1 lg:order-2 space-y-12"><div className="flex items-center gap-6 text-slate-400"><Scan size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 02</span></div><h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">AI DESIGN & <br /> VISUALIZATION.</h3><ul className="space-y-6">{['AI-generated wall & surface designs', 'Real-time color & texture simulations', '3D and VR immersive walkthroughs'].map((v,i) => (<li key={i} className="flex items-center gap-6 text-black font-black uppercase text-sm tracking-widest italic border-b border-black/10 pb-4"><div className="w-2 h-2 bg-[#ccff00]"></div> {v}</li>))}</ul></motion.div></div></section>

      <section id="tech-predictive" className="py-48 px-8 lg:px-24 scroll-mt-24 overflow-hidden border-b border-slate-100"><div className="max-w-7xl mx-auto"><div className="text-center mb-32 space-y-10"><motion.span whileInView={{ opacity: 1 }} initial={{ opacity: 0 }} className="text-slate-400 font-black uppercase text-[12px] tracking-[0.6em] block">Prevention Over Repairs</motion.span><motion.h3 whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} className="font-heading text-6xl md:text-[10rem] font-black uppercase tracking-tighter italic">PREDICTIVE INTEL.</motion.h3></div><div className="grid grid-cols-1 md:grid-cols-3 gap-10">{[{ icon: <Activity />, title: "Risk Forecasting", desc: "Corrosion and moisture intrusion forecasts." }, { icon: <Zap />, title: "Auto-Alerts", desc: "Work-orders triggered before failure." }, { icon: <DatabaseZap />, title: "Digital Twins", desc: "Virtual mapping of physical assets." }].map((p, i) => (<motion.div key={i} whileInView={{ y: 0, opacity: 1 }} initial={{ y: 50, opacity: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-16 bg-[#f5f5f7] rounded-[70px] border border-transparent hover:border-black transition-all group overflow-hidden"><div className="relative z-10 space-y-10"><div className="w-20 h-20 bg-white rounded-3xl flex items-center justify-center text-black group-hover:bg-[#ccff00] transition-colors">{p.icon}</div><h4 className="font-black uppercase text-2xl italic tracking-tighter">{p.title}</h4><p className="text-slate-500 font-light italic text-lg leading-relaxed">{p.desc}</p></div></motion.div>))}</div></div></section>

      <section id="tech-dashboards" className="py-48 bg-black text-white px-8 lg:px-24 scroll-mt-24 overflow-hidden relative">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center relative z-10">
          <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-12">
            <div className="flex items-center gap-6 text-[#ccff00]">
               <BarChart3 size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 04</span>
            </div>
            <h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">REAL-TIME <br /> DATA HUBS.</h3>
            <p className="text-white/40 text-xl font-light leading-relaxed italic">Total visibility across every asset. Turn physical structures into measurable, reportable systems with live performance feeds.</p>
            <div className="space-y-8 border-t border-white/10 pt-12">
               {['Asset health scores', 'Lifecycle cost tracking', 'ESG compliance reporting'].map((d,i) => (
                 <div key={i} className="flex justify-between items-center group">
                    <span className="text-white/60 font-black uppercase text-[11px] tracking-widest">{d}</span>
                    <div className="flex gap-1 group-hover:gap-2 transition-all">
                       {[...Array(5)].map((_,idx) => <div key={idx} className={`w-4 h-1 ${idx < 4 ? 'bg-[#ccff00]' : 'bg-white/10'}`}></div>)}
                    </div>
                 </div>
               ))}
            </div>
          </motion.div>
          <motion.div initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} className="relative bg-[#1d1d1f] p-12 rounded-[100px] shadow-3xl border border-white/10">
             <div className="grid grid-cols-2 gap-10">
                {[
                  { l: "ASSET HEALTH", v: "98%", c: "text-[#ccff00]" },
                  { l: "DATA STREAMS", v: "LIVE", c: "text-white" },
                  { l: "TCO SAVINGS", v: "14.2M", c: "text-[#ccff00]" },
                  { l: "LIFECYCLE", v: "OPTIMIZED", c: "text-white" }
                ].map((stat, i) => (
                  <div key={i} className="space-y-4">
                     <p className="text-white/30 font-black text-[9px] tracking-widest uppercase italic">{stat.l}</p>
                     <p className={`text-5xl font-heading font-black italic tracking-tighter ${stat.c}`}>{stat.v}</p>
                  </div>
                ))}
             </div>
          </motion.div>
        </div>
      </section>

      <section id="tech-lifecycle" className="py-48 px-8 lg:px-24 scroll-mt-24 overflow-hidden bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-32 items-center">
          <motion.div whileInView={{ opacity: 1, scale: 1 }} initial={{ opacity: 0, scale: 0.8 }} viewport={{ once: true }} className="relative rounded-[100px] overflow-hidden h-[500px] md:h-[800px] shadow-3xl group">
             <img src="https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&w=1200" className="w-full h-full object-cover grayscale brightness-75 group-hover:grayscale-0 transition-all duration-1000" alt="CMS" />
             <div className="absolute inset-0 bg-gradient-to-tr from-black/60 to-transparent flex items-end p-16">
                <p className="text-white text-3xl font-heading font-black tracking-tight leading-tight uppercase italic border-l-4 border-[#ccff00] pl-8">SINGLE SOURCE <br /> OF TRUTH.</p>
             </div>
          </motion.div>
          <motion.div whileInView={{ opacity: 1, x: 0 }} initial={{ opacity: 0, x: 100 }} viewport={{ once: true }} className="space-y-12">
            <div className="flex items-center gap-6 text-slate-400">
               <Database size={32} /> <span className="font-black uppercase tracking-[0.4em] text-[11px]">System 05</span>
            </div>
            <h3 className="font-heading text-5xl md:text-8xl font-black uppercase italic leading-none">LIFECYCLE <br /> CMS.</h3>
            <p className="text-slate-500 text-xl font-light leading-relaxed italic">
              A comprehensive content management system for every square inch of your infrastructure, archiving history, and planning future interventions.
            </p>
            <div className="space-y-6">
              {[
                { t: "Asset Birth Certificate", d: "Digital recording of materials and specs at handover." },
                { t: "Maintenance Logbook", d: "Immutable records of every intervention and repair." },
                { t: "Warranty Tracker", d: "Automated alerts for expiring performance guarantees." }
              ].map((item, i) => (
                <div key={i} className="flex gap-6 items-start">
                   <div className="w-1.5 h-8 bg-[#ccff00] mt-1"></div>
                   <div>
                      <h4 className="font-black uppercase text-sm tracking-widest mb-1 italic">{item.t}</h4>
                      <p className="text-slate-400 text-sm font-medium">{item.d}</p>
                   </div>
                </div>
              ))}
            </div>
          </motion.div>
        </div>
      </section>

      <section className="py-64 flex flex-col items-center gap-16 text-center bg-black text-white px-8 relative overflow-hidden"><h3 className="font-heading text-6xl md:text-[14rem] font-black tracking-tighter uppercase italic leading-[0.7] relative z-10">THE <br /> <span className="text-[#ccff00]">FUTURE</span> <br /> IS DIGITAL.</h3><div className="flex flex-col sm:flex-row gap-10 relative z-10"><button onClick={onBack} className="px-16 py-8 bg-[#ccff00] text-black rounded-[40px] font-black text-sm tracking-[0.3em] uppercase hover:bg-white transition-all italic shadow-3xl">HQ Main Portal</button></div></section>
    </div>
  );
};

// --- FULL PAGE: INDUSTRIES ---
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
=======
const AboutUsPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" /></div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Company DNA</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">INTELLIGENCE <br /> <span className="text-white/20 italic">BEYOND</span> <br /> SURFACES.</h2>
        <p className="text-slate-400 text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">Redefining physical asset protection and built environments across the continent through engineering excellence.</p>
>>>>>>> 2f8cf365a87f19fa0df562b24042c8521db66dc3
      </div>
    </section>
    
    <section id="about-story" className="py-24 px-6 border-b border-slate-100 bg-[#f5f5f7]">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-8">WHY KAVY <br /> EXISTS.</h3>
          <p className="text-slate-500 italic text-lg leading-relaxed mb-6">Infrastructure deteriorates prematurely due to fragmented management. We saw an engineering problem, not just a cosmetic one.</p>
          <div className="p-6 border-l-4 border-black bg-white shadow-sm"><p className="text-sm font-black uppercase tracking-widest italic">"We are architects of durability."</p></div>
        </div>
        <img src="https://images.unsplash.com/photo-1541913054-21199a42d530?auto=format&w=800" className="rounded-[40px] shadow-2xl h-[450px] object-cover" />
      </div>
    </section>

    <section id="about-leadership" className="py-24 bg-black text-white px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-16 text-center">THE ARCHITECTS.</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {[{ n: "Seyi Kavy", r: "CEO & Founder", i: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d" }, 
            { n: "Dr. Elena Vance", r: "Materials Intelligence", i: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2" }, 
            { n: "Marcus Thorne", r: "Systems Infrastructure", i: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e" }].map((l, i) => (
            <motion.div key={i} whileHover={{ y: -10 }} className="space-y-6">
              <div className="rounded-[50px] overflow-hidden grayscale hover:grayscale-0 transition-all duration-700 aspect-[3/4] border border-white/10">
                <img src={l.i} className="w-full h-full object-cover" />
              </div>
              <div className="text-center">
                <h4 className="font-heading text-xl font-black italic">{l.n}</h4>
                <p className="text-[#ccff00] text-[10px] uppercase font-black tracking-widest mt-2">{l.r}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>

    <section className="py-24 flex flex-col items-center bg-white"><button onClick={onBack} className="px-12 py-6 bg-black text-white rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic shadow-2xl hover:bg-[#ccff00] hover:text-black transition-all">Back to HQ Portal</button></section>
  </div>
);

const TechnologyPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none"><img src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&w=2000" className="w-full h-full object-cover" /></div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">The Intel Layer</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">DIGITIZING <br /> <span className="text-white/20 italic">EVERY</span> <br /> STRUCTURE.</h2>
        <p className="text-slate-400 text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">KAVY Systems integrates AI, IoT, and high-fidelity 3D scanning to bridge the physical and digital gap.</p>
      </div>
    </section>
    
    <section id="tech-platform" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-8">INTELLIGENCE <br /> CORE v2.4.</h3>
          <p className="text-slate-500 text-lg leading-relaxed italic mb-8">Our proprietary platform provides real-time health monitoring for large-scale infrastructure and architectural assets.</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {['Predictive Failure Modeling', 'AI Asset Visualization', 'IoT Sensor Integration', 'lifecycle CMS'].map(f => (
              <div key={f} className="p-6 bg-[#f5f5f7] rounded-3xl border border-slate-200 font-black text-[10px] uppercase tracking-widest">{f}</div>
            ))}
          </div>
        </div>
        <div className="relative"><img src="https://images.unsplash.com/photo-1558494949-ef010cbdcc51?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale brightness-50 h-[500px] object-cover" /><div className="absolute inset-0 bg-[#ccff00]/10 mix-blend-overlay"></div></div>
      </div>
    </section>
    
    <section className="py-24 flex flex-col items-center bg-[#f5f5f7]"><button onClick={onBack} className="px-12 py-6 bg-black text-white rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic shadow-xl">Return to Portal</button></section>
  </div>
);

const IndustriesPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" /></div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Strategic Verticals</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">SECTOR <br /> <span className="text-white/20 italic">SPECIFIC</span> <br /> INTELLIGENCE.</h2>
      </div>
    </section>
    
    <div className="space-y-32 py-32 px-6">
      {INDUSTRIES_DATA.map((ind, i) => (
        <section id={`industry-${ind.id}`} key={i} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={i % 2 === 0 ? '' : 'lg:order-2'}>
            <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-8">{ind.title}</h3>
            <p className="text-slate-500 text-lg leading-relaxed italic mb-8">{ind.overview}</p>
            <div className="space-y-4">
               {ind.problems.slice(0, 3).map(p => (<div key={p} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-slate-400"><X size={14} className="text-red-500" /> {p}</div>))}
               <div className="h-px bg-slate-100 my-4"></div>
               {ind.solutions.slice(0, 3).map(s => (<div key={s} className="flex items-center gap-3 text-[9px] font-black uppercase tracking-widest text-black"><CheckCircle2 size={14} className="text-[#ccff00]" /> {s}</div>))}
            </div>
          </div>
          <img src={ind.image} className="rounded-[40px] shadow-2xl grayscale brightness-75 h-[450px] object-cover" />
        </section>
      ))}
    </div>
    
    <section className="py-24 flex flex-col items-center bg-black text-white px-8"><button onClick={onBack} className="px-12 py-6 bg-[#ccff00] text-black rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic">Return to HQ</button></section>
  </div>
);

const FullPortfolioPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Impact Registry</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">PROJECTS <br /> & <span className="text-white/20">PORTFOLIO.</span></h2>
      </div>
    </section>
    
    <div className="py-32 px-6">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
        {[1, 2, 3, 4, 5, 6].map(i => (
          <motion.div key={i} whileHover={{ scale: 1.02 }} className="relative rounded-[50px] overflow-hidden aspect-video grayscale hover:grayscale-0 transition-all duration-700 cursor-pointer shadow-xl group">
            <img src={`https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&w=800&q=${i*10}`} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-10 flex flex-col justify-end">
              <span className="text-[#ccff00] font-black text-[9px] uppercase tracking-widest mb-2 italic">Regional Engagement 0{i}</span>
              <h4 className="text-white font-heading text-2xl font-black italic uppercase">Asset Class Protection</h4>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
    
    <section className="py-24 flex flex-col items-center bg-[#f5f5f7]"><button onClick={onBack} className="px-12 py-6 bg-black text-white rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic shadow-2xl">Return to Portal</button></section>
  </div>
);

const CompliancePage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Governance</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">BUILT TO <br /> <span className="text-white/20">HIGHEST</span> <br /> STANDARDS.</h2>
      </div>
    </section>
    
    <section id="comp-qa-framework" className="py-24 px-6 bg-white border-b border-slate-100">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        <div>
          <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-8">QUALITY & <br /> GOVERNANCE.</h3>
          <p className="text-slate-500 text-lg leading-relaxed italic mb-8">Every KAVY mission is governed by a strict framework of accountability and safety protocols.</p>
          <div className="grid grid-cols-2 gap-4">
            {['ISO 9001:2015', 'ISO 45001:2018', 'ISO 14001:2015', 'NIS Certified'].map(c => (
              <div key={c} className="p-8 bg-[#f5f5f7] rounded-3xl text-center font-black italic border border-slate-200">{c}</div>
            ))}
          </div>
        </div>
        <img src="https://images.unsplash.com/photo-1503387762-592dea58ef21?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale h-[450px] object-cover" />
      </div>
    </section>

    <section className="py-24 flex flex-col items-center bg-[#f5f5f7]"><button onClick={onBack} className="px-12 py-6 bg-black text-white rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic shadow-xl">Return to Portal</button></section>
  </div>
);

const ContactUsFullPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Strategic Support</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">GLOBAL <br /> <span className="text-white/20 italic">CONNECTIONS.</span></h2>
      </div>
    </section>
    
    <section id="cont-general" className="py-24 px-6 bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-20">
        <div>
          <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-8">CONTACT HQ.</h3>
          <div className="space-y-12">
            {[ { l: "Executive Support", v: "+234 814 413 0329" }, 
               { l: "Digital Intel Hub", v: "strategic@kavy.ltd" },
               { l: "HQ Base", v: "Lagos, Nigeria" }].map((i, idx) => (
              <div key={idx} className="group cursor-pointer">
                <p className="text-[9px] font-black tracking-widest text-slate-400 mb-2 group-hover:text-black transition-colors uppercase italic">{i.l}</p>
                <p className="text-2xl font-black italic group-hover:text-[#ccff00] transition-colors">{i.v}</p>
              </div>
            ))}
          </div>
        </div>
        <div className="bg-[#f5f5f7] p-12 rounded-[50px] shadow-sm">
          <form className="space-y-8">
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Strategic Contact</label>
              <input placeholder="NAME_IDENTIFIER" className="w-full bg-white rounded-3xl p-6 text-xs font-bold italic border-2 border-transparent focus:border-[#ccff00] focus:outline-none transition-all" />
            </div>
            <div className="space-y-2">
              <label className="text-[9px] font-black uppercase tracking-widest text-slate-400 ml-4">Mission Brief</label>
              <textarea rows={4} placeholder="SYNOPSIS" className="w-full bg-white rounded-3xl p-6 text-xs font-bold italic border-2 border-transparent focus:border-[#ccff00] focus:outline-none transition-all"></textarea>
            </div>
            <button className="w-full py-8 bg-black text-white font-black uppercase text-xs rounded-3xl hover:bg-[#ccff00] hover:text-black transition-all italic shadow-2xl">Transmit Brief</button>
          </form>
        </div>
      </div>
    </section>

    <section id="cont-locations" className="py-24 bg-[#f5f5f7] px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic mb-16 text-center">OPERATIONAL HUBS.</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {[{ c: "Lagos, Nigeria", a: "Main Systems District HQ", i: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5" }, 
            { c: "Abuja Regional", a: "Federal Asset Division", i: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab" }].map((l, i) => (
            <div key={i} className="relative rounded-[50px] overflow-hidden aspect-[16/10] grayscale group hover:grayscale-0 transition-all duration-700 shadow-xl">
              <img src={l.i} className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black p-10 flex flex-col justify-end text-white">
                <h4 className="font-black italic text-2xl uppercase">{l.c}</h4>
                <p className="text-xs opacity-60 italic mt-2 uppercase tracking-widest">{l.a}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
    
    <section className="py-24 flex flex-col items-center bg-black text-white px-8"><button onClick={onBack} className="px-12 py-6 bg-[#ccff00] text-black rounded-[40px] font-black text-xs tracking-[0.2em] uppercase italic shadow-2xl">Back to HQ Portal</button></section>
  </div>
);

const ServicesPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-[#f5f5f7] px-6 py-48 border-b-8 border-black text-center">
      <h2 className="font-heading font-black text-4xl md:text-6xl tracking-tighter uppercase italic leading-none mb-8">CAPABILITY <br /> <span className="text-[#ccff00] bg-black px-8 py-2 inline-block mt-4">MATRIX.</span></h2>
      <p className="text-slate-400 text-lg uppercase font-black tracking-widest italic">7 CORE BUILT-ENVIRONMENT SYSTEMS</p>
    </section>
    
    <div className="space-y-32 py-32 px-6 bg-white">
      {FULL_SERVICES.map((s, i) => (
        <section id={`serv-${s.id}`} key={i} className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div className={i % 2 !== 0 ? 'lg:order-2' : ''}>
            <div className="flex items-center gap-6 mb-8">
              <div className="p-6 bg-black text-[#ccff00] rounded-3xl shadow-xl">{s.icon}</div>
              <h3 className="font-heading text-3xl md:text-5xl font-black uppercase italic">{s.title}</h3>
            </div>
            <p className="text-slate-500 text-lg leading-relaxed italic mb-8">Specialized systems engineering for high-durability assets across African climates.</p>
            <div className="p-6 border-l-4 border-black bg-[#f5f5f7] rounded-r-3xl"><p className="text-xs font-black uppercase tracking-widest italic">Precision Execution • System Nominal</p></div>
          </div>
          <motion.div whileHover={{ scale: 1.02 }} className="rounded-[60px] shadow-2xl overflow-hidden h-[450px] border border-slate-100">
            <img src={s.img} className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-1000" />
          </motion.div>
        </section>
      ))}
    </div>
    
    <section className="py-24 flex flex-col items-center bg-black text-white px-8"><button onClick={onBack} className="px-16 py-8 bg-white text-black rounded-[40px] font-black text-sm tracking-[0.2em] uppercase hover:bg-[#ccff00] transition-all shadow-2xl italic">Main Portal</button></section>
  </div>
);

export default App;
