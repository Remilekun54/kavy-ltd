
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { ProjectProps } from '../types';

const ProjectItem: React.FC<ProjectProps> = ({ title, category, imageUrl }) => (
  <div className="group relative overflow-hidden rounded-xl cursor-pointer">
    <img 
      src={imageUrl} 
      alt={title} 
      className="w-full h-72 object-cover transform group-hover:scale-105 transition-transform duration-500"
    />
    <div className="absolute inset-0 bg-[#262E59]/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col items-center justify-center text-center p-4">
      <h4 className="font-heading font-semibold text-white text-xl">{title}</h4>
      <p className="text-slate-300 text-xs mt-1 uppercase tracking-widest">{category}</p>
    </div>
  </div>
);

const Portfolio: React.FC = () => {
  const projects = [
    {
      title: "Downtown Office",
      category: "Commercial Interior",
      imageUrl: "https://images.unsplash.com/photo-1562663474-6cbb3eaa4d14?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Meridian-Kessler Home",
      category: "Exterior Refresh",
      imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    },
    {
      title: "Carmel Kitchen",
      category: "Cabinet Refinishing",
      imageUrl: "https://images.unsplash.com/photo-1556912177-f547c126e89b?ixlib=rb-4.0.3&auto=format&fit=crop&w=1000&q=80"
    }
  ];

  return (
    <section className="py-24 bg-slate-50" id="portfolio">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="font-heading font-semibold text-xl sm:text-2xl text-[#262E59] tracking-tight mb-2">Recent Projects</h2>
            <p className="text-slate-500">Transforming properties across the greater Indianapolis area.</p>
          </div>
          <a href="#contact" className="hidden md:flex items-center text-[#B97802] font-semibold text-sm hover:text-[#262E59] transition-colors mt-4 md:mt-0">
            Start Your Project <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((p, idx) => (
            <ProjectItem key={idx} {...p} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;
