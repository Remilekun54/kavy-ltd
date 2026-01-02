
import React from 'react';
import { Star } from 'lucide-react';
import { ReviewProps } from '../types';

const TestimonialCard: React.FC<ReviewProps> = ({ name, role, initials, text }) => (
  <div className="p-8 rounded-xl border border-slate-100 bg-slate-50/50 hover:bg-white transition-colors duration-300">
    <div className="flex text-[#F4CF6F] mb-4">
      {[...Array(5)].map((_, i) => <Star key={i} size={16} fill="currentColor" />)}
    </div>
    <p className="text-slate-600 text-sm leading-relaxed mb-6 italic">"{text}"</p>
    <div className="flex items-center">
      <div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center font-bold text-[#262E59]">
        {initials}
      </div>
      <div className="ml-3">
        <p className="text-sm font-semibold text-[#262E59]">{name}</p>
        <p className="text-xs text-slate-400">{role}</p>
      </div>
    </div>
  </div>
);

const Testimonials: React.FC = () => {
  const reviews = [
    {
      name: "James D.",
      role: "Property Manager",
      initials: "JD",
      text: "KAVY LTD completely transformed our office space. Their team was professional, efficient, and finished ahead of schedule. Highly recommended for any Indianapolis business."
    },
    {
      name: "Sarah M.",
      role: "Homeowner",
      initials: "SM",
      text: "We hired them for exterior painting of our home. The attention to detail during the prep work was impressive. The house looks brand new! Absolutely flawless execution."
    },
    {
      name: "Robert T.",
      role: "Homeowner",
      initials: "RT",
      text: "Fair pricing and honest communication. No hidden fees or surprises. Just great quality work from a friendly team that arrived on time every day."
    }
  ];

  return (
    <section id="reviews" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-heading font-semibold text-3xl sm:text-4xl text-[#262E59] tracking-tight mb-4">Client Success Stories</h2>
          <p className="text-slate-500">Read what our clients have to say about their experience with KAVY LTD.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {reviews.map((r, idx) => (
            <TestimonialCard key={idx} {...r} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
