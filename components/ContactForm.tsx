
import React, { useState } from 'react';
import { MapPin, Phone, Mail, ChevronDown } from 'lucide-react';

const ContactForm: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 1500);
  };

  return (
    <section className="overflow-hidden bg-[#262E59] pt-24 pb-24 relative" id="estimate">
      <div className="absolute top-0 right-0 w-1/2 h-full bg-[#1e2445] skew-x-12 opacity-50 pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
          <div className="text-white">
            <h2 className="font-heading font-semibold text-xl sm:text-2xl lg:text-3xl tracking-tight mb-6 leading-tight">Ready to Improve Your Property?</h2>
            <p className="text-slate-300 text-lg mb-8 font-light">
              Contact KAVY LTD today. No pressure, just honest pricing and quality work for your next project in Indianapolis.
            </p>
            
            <div className="space-y-6">
              {[
                { icon: <MapPin className="text-[#F4CF6F]" size={20} />, label: "Service Area", val: "Indianapolis, Carmel, Fishers, Zionsville, and surrounding areas." },
                { icon: <Phone className="text-[#F4CF6F]" size={20} />, label: "Call Us", val: "(317) 658-2703" },
                { icon: <Mail className="text-[#F4CF6F]" size={20} />, label: "Email", val: "daru.solutions@outlook.com" }
              ].map((item, idx) => (
                <div key={idx} className="flex items-start">
                  <div className="mt-1">{item.icon}</div>
                  <div className="ml-4">
                    <h4 className="font-semibold text-white">{item.label}</h4>
                    <p className="text-slate-400 text-sm">{item.val}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-white rounded-2xl p-8 shadow-2xl">
            {isSubmitted ? (
              <div className="h-full flex flex-col items-center justify-center text-center py-12">
                <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                  <ChevronDown className="rotate-180" size={32} />
                </div>
                <h3 className="text-2xl font-heading font-bold text-[#262E59] mb-2">Request Received!</h3>
                <p className="text-slate-500">Our team will reach out to you within 24 hours to schedule your free estimate.</p>
                <button onClick={() => setIsSubmitted(false)} className="mt-6 text-[#B97802] font-semibold text-sm underline">Send another request</button>
              </div>
            ) : (
              <>
                <h3 className="font-heading font-semibold text-2xl text-[#262E59] mb-6">Request a Free Estimate</h3>
                <form className="space-y-4" onSubmit={handleSubmit}>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Name</label>
                      <input required type="text" className="focus:outline-none focus:border-[#B97802] transition-colors text-sm bg-slate-50 w-full border-slate-200 border rounded-lg p-3" placeholder="John Doe" />
                    </div>
                    <div>
                      <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Phone</label>
                      <input required type="tel" className="focus:outline-none focus:border-[#B97802] transition-colors text-sm bg-slate-50 w-full border-slate-200 border rounded-lg p-3" placeholder="(317) 555-0123" />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Email</label>
                    <input required type="email" className="focus:outline-none focus:border-[#B97802] transition-colors text-sm bg-slate-50 w-full border-slate-200 border rounded-lg p-3" placeholder="john@example.com" />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Service Type</label>
                    <div className="relative">
                      <select required className="focus:outline-none focus:border-[#B97802] transition-colors appearance-none text-sm text-slate-600 bg-slate-50 w-full border-slate-200 border rounded-lg p-3 pr-10">
                        <option>Commercial Painting</option>
                        <option>Residential Interior</option>
                        <option>Residential Exterior</option>
                        <option>Drywall Repair</option>
                        <option>Other</option>
                      </select>
                      <ChevronDown className="absolute right-3 top-3.5 text-slate-400 pointer-events-none" size={16} />
                    </div>
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-slate-500 uppercase mb-1">Project Details</label>
                    <textarea required rows={4} className="focus:outline-none focus:border-[#B97802] transition-colors text-sm bg-slate-50 w-full border-slate-200 border rounded-lg p-3" placeholder="Tell us about your project (approx. size, current condition, etc.)"></textarea>
                  </div>
                  <button type="submit" disabled={isSubmitting} className="w-full bg-gold-gradient text-[#262E59] font-semibold uppercase tracking-wider py-4 rounded-lg shadow-md hover:shadow-lg transform hover:-translate-y-0.5 transition-all disabled:opacity-50">
                    {isSubmitting ? "Sending..." : "Submit Request"}
                  </button>
                </form>
              </>
            )}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
