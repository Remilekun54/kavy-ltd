
import React, { useState, useRef, useEffect } from 'react';
import { X, Send, Sparkles, Cpu } from 'lucide-react';
import { getAIResponse } from '../services/geminiService';

const AIConsultant: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<{ role: 'user' | 'ai'; text: string }[]>([
    { role: 'ai', text: "Strategic Advisor online. How can KAVY LTD assist your infrastructure planning?" }
  ]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || isLoading) return;
    
    const userMsg = input.trim();
    setInput('');
    setMessages(prev => [...prev, { role: 'user', text: userMsg }]);
    setIsLoading(true);

    const response = await getAIResponse(userMsg);
    setMessages(prev => [...prev, { role: 'ai', text: response || "Link instability. Retrying..." }]);
    setIsLoading(false);
  };

  return (
    <div className="fixed bottom-8 left-8 z-[130]">
      {!isOpen ? (
        <button 
          onClick={() => setIsOpen(true)}
          className="bg-black p-5 rounded-3xl shadow-2xl text-[#ccff00] hover:scale-105 transition-all flex items-center gap-3 group border-2 border-white/10"
        >
          <Cpu className="group-hover:rotate-180 transition-transform duration-1000" size={20} />
          <span className="font-black text-[10px] uppercase tracking-[0.3em] hidden sm:inline">KAVY INTEL</span>
        </button>
      ) : (
        <div className="bg-white w-[320px] sm:w-[420px] h-[550px] rounded-[40px] shadow-[0_40px_80px_rgba(0,0,0,0.2)] flex flex-col overflow-hidden border border-slate-100 animate-[fadeIn_0.3s_ease-out]">
          {/* Header */}
          <div className="bg-black p-8 text-white flex justify-between items-center">
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-2xl bg-[#ccff00]/20 flex items-center justify-center border border-[#ccff00]/30">
                <Sparkles className="text-[#ccff00]" size={22} />
              </div>
              <div>
                <h4 className="font-heading font-black text-base tracking-tight uppercase">Strategic Advisor</h4>
                <div className="flex items-center gap-1.5 mt-0.5">
                   <div className="w-1.5 h-1.5 bg-[#ccff00] rounded-full animate-pulse"></div>
                   <p className="text-[9px] text-slate-400 font-bold tracking-widest uppercase">Systems Division v2.4</p>
                </div>
              </div>
            </div>
            <button onClick={() => setIsOpen(false)} className="text-slate-400 hover:text-white transition-colors p-2 bg-white/5 rounded-full">
                <X size={18} />
            </button>
          </div>
          
          {/* Messages */}
          <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-6 bg-slate-50 no-scrollbar">
            {messages.map((m, i) => (
              <div key={i} className={`flex ${m.role === 'user' ? 'justify-end' : 'justify-start'}`}>
                <div className={`max-w-[85%] p-5 rounded-[24px] text-sm leading-relaxed shadow-sm ${
                  m.role === 'user' ? 'bg-black text-white rounded-br-none' : 'bg-white text-slate-700 rounded-bl-none border border-slate-200'
                }`}>
                  {m.text}
                </div>
              </div>
            ))}
            {isLoading && (
              <div className="flex justify-start">
                <div className="bg-white p-5 rounded-[24px] border border-slate-200 shadow-sm animate-pulse flex gap-2 items-center">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-slate-300"></div>
                  <div className="w-1.5 h-1.5 rounded-full bg-[#ccff00]"></div>
                </div>
              </div>
            )}
          </div>

          {/* Input */}
          <div className="p-8 bg-white border-t border-slate-100 flex gap-4">
            <input 
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={(e) => e.key === 'Enter' && handleSend()}
              placeholder="Query strategic systems..."
              className="flex-1 text-sm bg-slate-100 rounded-2xl px-6 py-4 text-black focus:outline-none focus:ring-2 focus:ring-[#ccff00] transition-all"
            />
            <button 
              onClick={handleSend}
              className="bg-black text-white w-14 h-14 rounded-2xl hover:bg-[#ccff00] hover:text-black transition-all flex items-center justify-center shadow-lg group"
            >
              <Send size={18} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default AIConsultant;
