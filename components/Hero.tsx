
import React from 'react';

const Hero: React.FC = () => {
  return (
    <header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?ixlib=rb-4.0.3&auto=format&fit=crop&w=2070&q=80" 
          alt="Professional Painters Indianapolis" 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-[#262E59]/80 mix-blend-multiply"></div>
        <div className="bg-gradient-to-t from-[#262E59] via-transparent to-transparent opacity-90 absolute inset-0"></div>
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 text-center pt-20">
        <span className="inline-block py-1 px-3 rounded-full bg-white/10 border border-white/20 backdrop-blur-sm text-white/90 text-xs font-semibold tracking-widest uppercase mb-6">
          Serving Indianapolis & Surrounding Areas
        </span>
        <h1 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl text-white tracking-tight mb-6 leading-tight">
          Professional Painting & <br className="hidden lg:block" /> Property Solutions
        </h1>
        <p className="font-body text-base sm:text-lg text-slate-200 mb-10 max-w-2xl mx-auto font-light leading-relaxed">
          Reliable commercial and residential services delivered with precision, care, and professionalism. Elevate your property with Daru Solutions.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a href="#estimate" className="w-full sm:w-auto bg-gold-gradient text-[#262E59] text-sm font-semibold uppercase tracking-wider px-8 py-4 rounded-lg shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 transition-all">
            Get a Free Estimate
          </a>
          <a href="#services" className="w-full sm:w-auto uppercase hover:bg-white hover:text-[#262E59] transition-all text-sm font-semibold text-white tracking-wider border-white/30 border rounded-lg py-4 px-8">
            View Our Services
          </a>
        </div>
      </div>
    </header>
  );
};

export default Hero;
