
import React from 'react';

const About: React.FC = () => {
  return (
    <section id="about" className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-gradient font-semibold tracking-widest uppercase text-xs mb-2 block">About KAVY LTD</span>
            <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-6">Excellence in Every Brushstroke</h2>
            <div className="space-y-4 text-slate-500 leading-relaxed">
              <p>
                At KAVY LTD, we believe that painting is more than just applying color—it's about protecting your investment and creating environments that inspire. Based in Indianapolis, we serve both commercial and residential clients with a commitment to quality that is unmatched in the industry.
              </p>
              <p>
                Our team of skilled professionals takes pride in precision preparation and flawless execution. Whether it's a large commercial complex or a cozy family home, we treat every property with the respect it deserves, ensuring a clean workspace and a stunning finish.
              </p>
            </div>
            
            <div className="mt-8 flex items-center space-x-6">
              <div className="flex flex-col">
                <span className="font-heading font-bold text-3xl text-[#262E59]">10+</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Years Experience</span>
              </div>
              <div className="w-px h-12 bg-slate-200"></div>
              <div className="flex flex-col">
                <span className="font-heading font-bold text-3xl text-[#262E59]">100%</span>
                <span className="text-xs text-slate-500 uppercase tracking-wide mt-1">Satisfaction</span>
              </div>
            </div>
          </div>
          <div className="relative">
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-gold-gradient rounded-tl-3xl opacity-20"></div>
            <img 
              src="https://images.unsplash.com/photo-1595814433015-e6f5ce69614e?ixlib=rb-4.0.3&auto=format&fit=crop&w=1770&q=80" 
              alt="KAVY LTD Team" 
              className="rounded-lg shadow-2xl w-full object-cover h-[500px]"
            />
            <div className="absolute bottom-6 left-6 bg-white p-6 rounded-lg shadow-lg max-w-xs">
              <p className="font-heading font-medium text-[#262E59] italic text-lg">"We build long-term relationships through honesty and quality work."</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
