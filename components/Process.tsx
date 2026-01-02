
import React from 'react';

const Process: React.FC = () => {
  const steps = [
    {
      num: "1",
      title: "Free Consultation",
      text: "We meet to discuss your vision, assess the property, and provide a transparent, detailed estimate."
    },
    {
      num: "2",
      title: "Prep & Planning",
      text: "We protect furniture, repair surfaces, and prepare the area to ensure a durable, lasting finish."
    },
    {
      num: "3",
      title: "Execution",
      text: "Our pros apply premium paints with expert techniques, maintaining a tidy workspace throughout."
    },
    {
      num: "4",
      title: "Final Walkthrough",
      text: "We review the work with you to ensure total satisfaction before considering the job done."
    }
  ];

  return (
    <section className="py-24 bg-[#262E59] text-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <span className="text-[#F4CF6F] font-semibold tracking-widest uppercase text-xs mb-2 block">How We Work</span>
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl tracking-tight">Our Professional Process</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {steps.map((step, idx) => (
            <div key={idx} className="relative group">
              <div className="mb-6 flex items-center">
                <span className="flex items-center justify-center w-12 h-12 rounded-full border border-[#F4CF6F]/30 bg-[#F4CF6F]/10 text-[#F4CF6F] font-heading font-bold text-xl">
                  {step.num}
                </span>
                {idx < 3 && <div className="hidden md:block h-px bg-[#F4CF6F]/20 flex-1 ml-4"></div>}
              </div>
              <h3 className="font-heading font-semibold text-xl mb-3">{step.title}</h3>
              <p className="text-slate-300 text-sm leading-relaxed">{step.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Process;
