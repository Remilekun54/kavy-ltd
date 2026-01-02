
import React from 'react';
import { Facebook, Instagram, Linkedin, MapPin } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="text-slate-400 bg-[#1a2040] border-white/5 border-t pt-12 pb-12">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-12 relative flex items-center justify-center">
                <svg viewBox="0 0 60 70" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-full">
                  <path d="M28 10L36 6V55H28V10Z" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeOpacity="0.9" />
                  <path d="M36 6L44 14V55H36V6Z" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeOpacity="0.9" />
                  <path d="M20 20L28 16V55H20V20Z" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeOpacity="0.9" />
                  <path d="M44 24L52 28V55H44V24Z" stroke="white" strokeWidth="3" strokeLinejoin="round" strokeOpacity="0.9" />
                  <path d="M10 40C10 30 25 30 36 45C47 60 62 60 62 40" stroke="#F4CF6F" strokeWidth="3" strokeLinecap="round" />
                  <path d="M10 40C10 50 25 50 36 35" stroke="#F4CF6F" strokeWidth="3" strokeLinecap="round" />
                </svg>
              </div>
              <div className="flex flex-col justify-center">
                <span className="font-heading font-bold text-xl text-white leading-none tracking-wide uppercase">KAVY LTD</span>
                <span className="font-body text-[0.6rem] font-bold text-[#F4CF6F] tracking-[0.25em] leading-tight mt-1 uppercase">Innovate. Build. Evolve.</span>
              </div>
            </div>
            <p className="text-sm leading-relaxed mb-6">Professional painting and property solutions delivering excellence to Indianapolis and surrounding communities.</p>
            <div className="flex space-x-4">
              <a href="#" className="text-slate-400 hover:text-[#F4CF6F] transition-colors"><Facebook size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-[#F4CF6F] transition-colors"><Instagram size={20} /></a>
              <a href="#" className="text-slate-400 hover:text-[#F4CF6F] transition-colors"><Linkedin size={20} /></a>
            </div>
          </div>
          
          <div>
            <h4 className="text-white font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#services" className="hover:text-white transition-colors">Commercial Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Residential Painting</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Drywall Repair</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Carpentry & Finishing</a></li>
              <li><a href="#services" className="hover:text-white transition-colors">Pressure Washing</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-sm">
              <li><a href="#about" className="hover:text-white transition-colors">About Us</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Our Process</a></li>
              <li><a href="#reviews" className="hover:text-white transition-colors">Reviews</a></li>
              <li><a href="#contact" className="hover:text-white transition-colors">Contact</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Privacy Policy</a></li>
            </ul>
          </div>

          <div>
            <h4 className="text-white font-semibold mb-4">Contact</h4>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center">(317) 658-2703</li>
              <li className="flex items-center">daru.solutions@outlook.com</li>
              <li className="flex items-center gap-2"><MapPin size={16} /> Indianapolis, IN</li>
            </ul>
          </div>
        </div>
        
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center text-xs">
          <p>© 2024 KAVY LTD. All rights reserved.</p>
          <div className="flex gap-4 mt-2 md:mt-0">
            <a href="#" className="hover:text-white">Terms of Service</a>
            <a href="#" className="hover:text-white">Privacy Policy</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
