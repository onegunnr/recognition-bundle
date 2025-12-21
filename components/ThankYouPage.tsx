import React from 'react';
import { ArrowLeft, Heart } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ThankYouPage: React.FC = () => {
  // Matching the ocean horizon background
  const bgImage = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-black text-stone-200 relative selection:bg-[#c5a059]/30 font-sans overflow-x-hidden">
      
      {/* Background Section Logic */}
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      {/* Refined Overlay: 75% Opacity */}
      <div className="fixed inset-0 z-[1] bg-black/75 backdrop-blur-[2px]"></div>

      {/* Subtle Vignette */}
      <div className="fixed inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center min-h-screen">
        {/* Brand Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent"></div>

        <div className="w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center text-center flex-grow justify-center">
          
          {/* Icon */}
          <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-10 border border-[#c5a059]/20 shadow-[0_0_60px_rgba(197,160,89,0.15)] backdrop-blur-md">
            <Heart className="text-[#c5a059] w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-in">
            Thank You.
          </h1>
          <p className="text-stone-300 mb-14 max-w-md leading-relaxed text-lg font-light">
            Your support and presence are deeply appreciated.
          </p>

          <Link to="/" className="mt-12 text-stone-600 hover:text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Sanctuary
          </Link>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ThankYouPage;
