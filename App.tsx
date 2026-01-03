
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
  { id: 'design', title: 'KAVY DESIGN', icon: <Scan size={18} />, img: 'https://images.unsplash.com/photo-1581291417006-03e3871f328f?auto=format&w=800' },
  { id: 'spaces', title: 'KAVY SPACES', icon: <Layout size={18} />, img: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&w=800' },
  { id: 'infrastructure', title: 'KAVY INFRASTRUCTURE', icon: <HardHat size={18} />, img: 'https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800' },
  { id: 'maintenance', title: 'KAVY MAINTENANCE', icon: <Settings size={18} />, img: 'https://images.unsplash.com/photo-1581092160562-40aa08e78837?auto=format&w=800' },
  { id: 'manufacturing', title: 'KAVY MANUFACTURING', icon: <Factory size={18} />, img: 'https://images.unsplash.com/photo-1530124560676-41bc1275d4d4?auto=format&w=800' },
  { id: 'systems', title: 'KAVY SYSTEMS', icon: <Cpu size={18} />, img: 'https://images.unsplash.com/photo-1551288049-bbbda5366392?auto=format&w=800' }
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
  <section id={id} className="py-24 md:py-32 bg-[#f5f5f7] px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <motion.div initial={{ opacity: 0, x: -30 }} whileInView={{ opacity: 1, x: 0 }} className="space-y-8">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-black rounded-lg inline-block italic">About Kavy</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic leading-none">SYSTEMS-LED <br /> ENVIRONMENTS.</h3>
        <p className="text-slate-500 text-lg md:text-xl font-light leading-relaxed italic">KAVY is a built-environment systems company designed to redefine asset protection across Africa.</p>
        <button onClick={onAction} className="group flex items-center gap-4 text-xs font-black uppercase tracking-[0.2em] border-b-2 border-black pb-2 italic">Access Full DNA <ArrowUpRight size={16} /></button>
      </motion.div>
      <motion.img initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?auto=format&w=800" className="rounded-[40px] shadow-2xl h-[400px] object-cover" />
    </div>
  </section>
);

const DivisionsGridSection = ({ id, onAction }: any) => (
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
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

const TechnologyTeaserSection = ({ id, onAction }: any) => (
  <section id={id} className="py-24 md:py-32 bg-black text-white px-6 overflow-hidden">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-8">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-white/10 rounded-lg inline-block italic">The Intel Layer</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic">DIGITAL INFRASTRUCTURE.</h3>
        <p className="text-slate-400 text-lg md:text-xl font-light italic">KAVY transforms physical spaces into data-driven assets via AI and IoT.</p>
        <button onClick={onAction} className="px-10 py-5 bg-[#ccff00] text-black rounded-xl font-black text-xs uppercase italic">Explore Technology</button>
      </div>
      <img src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale brightness-75 h-[400px] object-cover" />
    </div>
  </section>
);

const IndustriesSummarySection = ({ id, onAction }: any) => (
  <section id={id} className="py-24 md:py-32 bg-[#1d1d1f] text-white px-6">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <img src="https://images.unsplash.com/photo-1545143333-648de10ce35f?auto=format&w=800" className="rounded-[40px] shadow-2xl grayscale h-[400px] object-cover order-2 lg:order-1" />
      <div className="space-y-8 order-1 lg:order-2">
        <span className="text-[#ccff00] font-black text-[10px] tracking-[0.5em] uppercase px-5 py-2 bg-white/10 rounded-lg inline-block italic">Market Sectors</span>
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic">INTELLIGENT VERTICALS.</h3>
        <p className="text-slate-400 text-lg md:text-xl font-light italic">End-to-end solutions for every strategic industry across Africa.</p>
        <button onClick={onAction} className="px-10 py-5 bg-[#ccff00] text-black rounded-xl font-black text-xs uppercase italic">Sector Insights</button>
      </div>
    </div>
  </section>
);

const HomePortfolioSection = ({ id, onAction }: any) => (
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
    </div>
  </section>
);

const HomeReviewsSection = () => (
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
        ))}
      </div>
    </div>
  </section>
);

const ContactSection = ({ id }: any) => (
  <section id={id} className="py-24 md:py-32 bg-black text-white px-6 overflow-hidden border-t border-white/5">
    <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
      <div className="space-y-12">
        <h3 className="font-heading text-4xl md:text-5xl font-black uppercase italic leading-[0.8]"><span className="text-[#ccff00]">STRATEGIC</span> <br /> BRIEFING.</h3>
        <div className="p-6 bg-white/5 rounded-[30px] border border-white/10 w-fit flex items-center gap-6"><Phone size={24} className="text-[#ccff00]" /><div><p className="text-[9px] font-black tracking-widest text-slate-500 mb-1">EXEC LINE</p><p className="text-xl font-black italic">+234 814 413 0329</p></div></div>
      </div>
      <div className="bg-white p-10 rounded-[50px] text-black shadow-2xl"><h4 className="font-heading text-2xl font-black mb-8 uppercase italic underline decoration-[#ccff00] decoration-4 underline-offset-4">Mission Portal</h4><form className="space-y-6"><input type="email" placeholder="EMAIL@DOMAIN.COM" className="w-full bg-[#f5f5f7] rounded-2xl p-5 focus:outline-none font-bold text-xs italic border border-transparent focus:border-[#ccff00] transition-colors" /><textarea rows={3} placeholder="SYNOPSIS" className="w-full bg-[#f5f5f7] rounded-2xl p-5 focus:outline-none font-bold text-xs italic border border-transparent focus:border-[#ccff00] transition-colors"></textarea><button className="w-full py-6 bg-black text-white font-black uppercase text-xs rounded-2xl hover:bg-[#ccff00] hover:text-black transition-all italic shadow-lg">Transmit Brief</button></form></div>
    </div>
  </section>
);

const Footer = () => (
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
      </div>
    </div>
    
    <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-300/50 flex justify-center text-[8px] font-black uppercase tracking-[0.2em] text-slate-400 italic">
      <p>© 2024 KAVY LTD • SYSTEMS NOMINAL • ALL RIGHTS SECURED.</p>
    </div>
  </footer>
);

// --- FULL PAGES (MEDIUM HEADINGS) ---

const AboutUsPage = ({ onBack }: { onBack: () => void }) => (
  <div className="bg-white min-h-screen">
    <section className="bg-black text-white px-6 py-40 overflow-hidden relative">
      <div className="absolute inset-0 opacity-20 pointer-events-none"><img src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&w=2000" className="w-full h-full object-cover" /></div>
      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <span className="text-[10px] font-black uppercase tracking-[0.4em] text-[#ccff00] mb-8 block italic">Company DNA</span>
        <h2 className="font-heading font-black text-4xl md:text-5xl lg:text-6xl tracking-tighter leading-tight mb-12 uppercase italic">INTELLIGENCE <br /> <span className="text-white/20 italic">BEYOND</span> <br /> SURFACES.</h2>
        <p className="text-slate-400 text-lg md:text-2xl font-light italic max-w-3xl mx-auto leading-relaxed">Redefining physical asset protection and built environments across the continent through engineering excellence.</p>
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
