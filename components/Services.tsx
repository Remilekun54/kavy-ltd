
import React from 'react';
import { Building2, Home, PaintRoller, Hammer, Droplets, LayoutTemplate } from 'lucide-react';
import { ServiceCardProps } from '../types';

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => (
  <a href="#estimate" className="group bg-white p-8 rounded-xl shadow-sm hover:shadow-xl border border-slate-100 transition-all duration-300 transform hover:-translate-y-1">
    <div className="w-12 h-12 rounded-lg bg-[#262E59]/5 flex items-center justify-center mb-6 group-hover:bg-[#262E59] transition-colors duration-300 text-[#262E59] group-hover:text-white">
      {icon}
    </div>
    <h3 className="font-heading font-semibold text-xl text-[#262E59] mb-3">{title}</h3>
    <p className="text-sm text-slate-500 leading-relaxed">{description}</p>
  </a>
);

const Services: React.FC = () => {
  const servicesData = [
    {
      title: "Commercial Painting",
      description: "Office buildings, retail spaces, and industrial facilities painted with minimal disruption to your business operations.",
      icon: <Building2 size={24} />
    },
    {
      title: "Residential Painting",
      description: "Transforming homes with meticulous interior and exterior painting services using high-quality materials.",
      icon: <Home size={24} />
    },
    {
      title: "Drywall Repair",
      description: "Seamless patching, texturing, and finishing for a flawless surface before the painting process begins.",
      icon: <PaintRoller size={24} />
    },
    {
      title: "Carpentry & Finishing",
      description: "Trim installation, crown molding, and essential wood repairs to complete the architectural look of your property.",
      icon: <Hammer size={24} />
    },
    {
      title: "Pressure Washing",
      description: "Deep cleaning for siding, decks, and driveways to restore curb appeal and prepare surfaces for treatment.",
      icon: <Droplets size={24} />
    },
    {
      title: "Turnkey Maintenance",
      description: "Efficient maintenance solutions for landlords and property managers to keep properties in pristine condition.",
      icon: <LayoutTemplate size={24} />
    }
  ];

  return (
    <section className="bg-slate-50 pt-24 pb-24" id="services">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-4">Our Expertise</h2>
          <p className="text-slate-500 leading-relaxed">Comprehensive painting and property maintenance solutions for commercial and residential clients across Indianapolis.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {servicesData.map((s, idx) => (
            <ServiceCard key={idx} {...s} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;
