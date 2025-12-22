import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mail, Headphones, Smartphone, FileText, ArrowRight, ShieldCheck } from 'lucide-react';
import Footer from './Footer';

const LandingPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const navigate = useNavigate();

  // Serene ocean horizon
  const bgImage = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop";

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');

    try {
      const response = await fetch('https://kit-subscribe.onegunnr.workers.dev', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || 'Subscription failed');
      }

      // Success - navigate to thank you page
      navigate('/thank-you');
    } catch (err) {
      console.error('Subscription error:', err);
      setError('Something went wrong. Please try again.');
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-black text-stone-200 selection:bg-[#c5a059]/30 relative font-sans overflow-x-hidden">
      
      {/* Background Section */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed transition-transform duration-[10s] scale-105"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* 75% Overlay */}
      <div className="fixed inset-0 z-[1] bg-black/75 backdrop-blur-[2px]"></div>

      {/* Vignette */}
      <div className="fixed inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center">
        
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/20 to-transparent"></div>

        <div className="w-full max-w-2xl px-6 py-12 md:py-24 flex flex-col items-center text-center">
          
          <div className="mb-14 opacity-90 animate-fade-in">
              <h2 className="font-serif text-xs tracking-[0.5em] text-[#c5a059] uppercase border-b border-[#c5a059]/10 pb-4 inline-block">
                  Ancient Truth, Modern Freedom
              </h2>
          </div>

          <h1 className="text-4xl md:text-5xl lg:text-7xl font-serif text-white mb-8 leading-tight tracking-tight">
            Return to the<br />
            <span className="text-[#c5a059] italic">Essential Self.</span>
          </h1>

          <p className="text-lg md:text-xl text-stone-400 mb-14 max-w-lg leading-relaxed font-light">
            Access the <strong>Recognition Bundle</strong>: A 10-minute guided meditation, 
            exclusive backgrounds, and our foundational spiritual starter guide.
          </p>

          <div className="w-full max-w-md bg-stone-900/40 border border-white/10 p-6 md:p-10 rounded-[2rem] shadow-2xl backdrop-blur-2xl relative overflow-hidden ring-1 ring-white/5">
            
            <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-[#c5a059]/10 blur-[60px] rounded-full"></div>

            <form 
              onSubmit={handleSubmit}
              className="flex flex-col gap-6 text-left relative z-10"
            >
              <div className="space-y-3">
                <label htmlFor="email_address" className="text-[10px] font-bold tracking-[0.3em] text-[#c5a059] uppercase ml-1 opacity-80">Digital Delivery Address</label>
                <div className="relative">
                  <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-stone-600 w-5 h-5" />
                  <input
                    type="email"
                    id="email_address"
                    name="email_address"
                    required
                    placeholder="Enter your best email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    disabled={isSubmitting}
                    className="w-full bg-black/60 border border-white/5 text-stone-100 pl-12 pr-4 py-4 rounded-2xl focus:outline-none focus:ring-2 focus:ring-[#c5a059]/30 focus:border-[#c5a059]/40 transition-all placeholder:text-stone-700 disabled:opacity-50"
                  />
                </div>
              </div>

              {error && (
                <p className="text-red-400 text-sm text-center">{error}</p>
              )}

              <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-[#c5a059] hover:bg-[#d4b471] text-stone-950 font-bold py-5 px-6 rounded-2xl transition-all duration-500 transform hover:scale-[1.01] flex items-center justify-center gap-3 shadow-[0_15px_40px_rgba(197,160,89,0.1)] group disabled:opacity-70 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                <span className="text-lg">
                  {isSubmitting ? 'Sending...' : 'Unlock The Bundle'}
                </span>
                {!isSubmitting && <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />}
              </button>

              <div className="flex items-center justify-center gap-2 text-[9px] text-stone-600 uppercase tracking-[0.2em]">
                <ShieldCheck className="w-3 h-3" />
                <span>Privacy First • Infinite Freedom</span>
              </div>
            </form>
          </div>

          <div className="mt-24 grid gap-16 text-left md:grid-cols-3 w-full max-w-5xl">
            {[
              { 
                icon: <Headphones className="w-6 h-6 text-[#c5a059]/80" />, 
                title: "Deep Recognition", 
                desc: "10 minutes of guided presence to ground your modern experience in ancient silence." 
              },
              { 
                icon: <Smartphone className="w-6 h-6 text-[#c5a059]/80" />, 
                title: "Horizon Visuals", 
                desc: "High-resolution device backgrounds curated for clarity and spaciousness." 
              },
              { 
                icon: <FileText className="w-6 h-6 text-[#c5a059]/80" />, 
                title: "The Core Framework", 
                desc: "A simplified PDF guide to navigating the path between truth and daily life." 
              },
            ].map((benefit, idx) => (
              <div key={idx} className="flex flex-col items-center text-center px-6 group">
                <div className="mb-6 p-5 bg-white/[0.02] rounded-full border border-white/5 transition-colors group-hover:bg-white/[0.05]">{benefit.icon}</div>
                <h3 className="text-stone-100 font-medium text-lg mb-3 tracking-wide">{benefit.title}</h3>
                <p className="text-sm text-stone-500 leading-relaxed font-light">{benefit.desc}</p>
              </div>
            ))}
          </div>

          <div className="mt-32 w-full pt-16 border-t border-white/[0.03]">
            <div className="flex flex-wrap justify-center gap-12 md:gap-20 opacity-20 hover:opacity-50 transition-opacity duration-1000">
               {[
                 { step: "I", label: "Intent" },
                 { step: "II", label: "Verify" },
                 { step: "III", label: "Embody" },
               ].map((item, i) => (
                 <div key={i} className="flex flex-col items-center gap-3">
                   <span className="text-3xl font-serif text-[#c5a059] italic">{item.step}</span>
                   <span className="text-[9px] uppercase tracking-[0.4em] font-bold">{item.label}</span>
                 </div>
               ))}
            </div>
          </div>

        </div>
        
        <Footer />
      </div>
    </div>
  );
};
export default LandingPage;