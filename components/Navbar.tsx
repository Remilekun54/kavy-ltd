
import React, { useState } from 'react';
import { ChevronDown, Menu, X } from 'lucide-react';

const Navbar: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="fixed w-full z-50 glass-nav border-b border-slate-100 transition-all duration-300">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex justify-between items-center h-24">
          <a href="#" className="flex items-center gap-3 group flex-shrink-0">
            <div className="w-10 h-12 relative flex items-center justify-center">
              <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full transform group-hover:scale-105 transition-transform duration-300">
                <path d="M28 10L36 6V55H28V10Z" stroke="#262E59" strokeWidth="3" strokeLinejoin="round" />
                <path d="M36 6L44 14V55H36V6Z" stroke="#262E59" strokeWidth="3" strokeLinejoin="round" />
                <path d="M20 20L28 16V55H20V20Z" stroke="#262E59" strokeWidth="3" strokeLinejoin="round" />
                <path d="M44 24L52 28V55H44V24Z" stroke="#262E59" strokeWidth="3" strokeLinejoin="round" />
                <path d="M10 40C10 30 25 30 36 45C47 60 62 60 62 40" stroke="#B97802" strokeWidth="3" strokeLinecap="round" />
                <path d="M10 40C10 50 25 50 36 35" stroke="#B97802" strokeWidth="3" strokeLinecap="round" />
              </svg>
            </div>
            <div className="flex flex-col justify-center">
              <span className="font-heading font-bold text-xl lg:text-2xl text-[#262E59] leading-none tracking-wide uppercase">KAVY LTD</span>
              <span className="font-body text-[0.65rem] font-bold text-[#B97802] tracking-[0.25em] leading-tight mt-1 uppercase">Innovate. Build. Evolve.</span>
            </div>
          </a>

          <div className="hidden lg:flex items-center space-x-8">
            <a href="#" className="hover:text-[#262E59] nav-item-underline transition-colors text-sm font-medium text-slate-700">Home</a>
            <a href="#about" className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors">About</a>
            
            <div className="relative group h-24 flex items-center">
              <button className="flex hover:text-[#262E59] transition-colors focus:outline-none text-sm font-medium text-slate-700 items-center">
                Services <ChevronDown className="ml-1 w-4 h-4" />
              </button>
              <div className="absolute top-20 left-0 w-64 bg-white border border-slate-100 shadow-xl rounded-b-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 p-4">
                <div className="flex flex-col space-y-3">
                  <a href="#services" className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors">Commercial Painting</a>
                  <a href="#services" className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors">Residential Painting</a>
                  <a href="#services" className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors">Interior & Exterior</a>
                  <a href="#services" className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors">Drywall Repair</a>
                  <a href="#services" className="block text-sm text-slate-600 hover:text-[#B97802] transition-colors">Carpentry & Finishing</a>
                </div>
              </div>
            </div>

            <a href="#reviews" className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors">Reviews</a>
            <a href="#contact" className="text-sm font-medium text-slate-700 hover:text-[#262E59] nav-item-underline transition-colors">Contact</a>
          </div>

          <div className="hidden lg:block">
            <a href="#estimate" className="bg-gold-gradient text-[#262E59] text-xs font-semibold uppercase tracking-wider px-6 py-3 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all">
              Free Estimate
            </a>
          </div>

          <button className="lg:hidden text-[#262E59]" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}>
            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white border-t border-slate-100 p-6 space-y-4 shadow-lg animate-[fadeIn_0.2s_ease-out]">
          <a href="#" className="block text-sm font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Home</a>
          <a href="#about" className="block text-sm font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>About</a>
          <a href="#services" className="block text-sm font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Services</a>
          <a href="#reviews" className="block text-sm font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Reviews</a>
          <a href="#contact" className="block text-sm font-medium text-slate-700" onClick={() => setIsMobileMenuOpen(false)}>Contact</a>
          <a href="#estimate" className="block bg-gold-gradient text-[#262E59] text-center text-xs font-semibold uppercase tracking-wider py-3 rounded-lg" onClick={() => setIsMobileMenuOpen(false)}>Free Estimate</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
