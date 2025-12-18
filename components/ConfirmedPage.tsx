import React from 'react';
import { Download, Headphones, Image as ImageIcon, FileText, ArrowLeft, Bookmark, Check } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ConfirmedPage: React.FC = () => {
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

      <div className="relative z-10 flex flex-col items-center">
        {/* Brand Divider */}
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent"></div>

        <div className="w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center text-center flex-grow">
          
          {/* Success Indicator */}
          <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-10 border border-[#c5a059]/20 shadow-[0_0_60px_rgba(197,160,89,0.15)] backdrop-blur-md">
            <Check className="text-[#c5a059] w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 animate-fade-in">
            Welcome Home.
          </h1>
          <p className="text-stone-300 mb-14 max-w-md leading-relaxed text-lg font-light">
            Your presence is confirmed. The Recognition Bundle is yours to keep.
          </p>

          {/* Downloads Container */}
          <div className="w-full space-y-6">
            
            {/* Download 1: Meditation */}
            <div className="bg-stone-900/40 border border-white/10 backdrop-blur-3xl rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-[#c5a059]/40 transition-all duration-700 ring-1 ring-white/5 shadow-2xl">
              <div className="text-left flex items-start gap-5">
                <div className="p-4 bg-black/60 rounded-2xl text-[#c5a059] border border-white/5 group-hover:scale-105 transition-transform duration-500">
                  <Headphones className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-white mb-1">Guided Meditation</h3>
                  <p className="text-sm text-stone-500 font-light italic">10-Minute Guided Inquiry (MP3)</p>
                </div>
              </div>
              <a 
                href="/downloads/Recognition Meeting Your True Nature.mp3" 
                className="w-full sm:w-auto bg-[#c5a059] hover:bg-[#d4b471] text-stone-950 px-8 py-4 rounded-2xl font-bold flex items-center justify-center gap-3 transition-all hover:-translate-y-1 shadow-lg"
              >
                <Download className="w-5 h-5" />
                <span>Download</span>
              </a>
            </div>

            {/* Download 2: Wallpapers */}
            <div className="bg-white/[0.02] border border-white/5 backdrop-blur-md rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-[#c5a059]/30 transition-all duration-700 ring-1 ring-white/5">
              <div className="text-left flex items-start gap-5">
                <div className="p-4 bg-black/40 rounded-2xl text-[#c5a059] border border-white/5 group-hover:scale-105 transition-transform duration-500">
                  <ImageIcon className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-300 mb-1">Horizon Pack</h3>
                  <p className="text-sm text-stone-500 font-light italic">3 High-Resolution Wallpapers</p>
                </div>
              </div>
              <a 
                href="/downloads/wallpapers.zip" 
                className="w-full sm:w-auto bg-stone-800/60 hover:bg-stone-700 text-stone-100 px-8 py-4 rounded-2xl font-medium flex items-center justify-center gap-3 transition-all border border-white/10 shadow-xl"
              >
                <Download className="w-5 h-5" />
                <span>Get Pack</span>
              </a>
            </div>

            {/* Download 3: PDF Guide */}
            <div className="bg-white/[0.01] border border-white/5 backdrop-blur-sm rounded-[2rem] p-6 md:p-8 flex flex-col sm:flex-row items-center justify-between gap-6 group hover:border-[#c5a059]/20 transition-all duration-700">
              <div className="text-left flex items-start gap-5">
                <div className="p-4 bg-black/20 rounded-2xl text-[#c5a059] border border-white/5 group-hover:scale-105 transition-transform duration-500">
                  <FileText className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-medium text-stone-400 mb-1">The Starter Guide</h3>
                  <p className="text-sm text-stone-600 font-light italic">Essential PDF Framework</p>
                </div>
              </div>
              <a 
                href="/downloads/Mini-Spiritual-Starter-Guide.pdf" 
                className="w-full sm:w-auto text-stone-500 hover:text-[#c5a059] font-medium flex items-center justify-center gap-2 transition-colors group-hover:underline underline-offset-8 decoration-[#c5a059]/40"
              >
                <Download className="w-5 h-5" />
                <span>Download Guide</span>
              </a>
            </div>

          </div>

          {/* Bookmark Notice */}
          <div className="mt-20 bg-[#c5a059]/5 border border-[#c5a059]/10 backdrop-blur-xl rounded-2xl p-6 text-sm text-stone-400 max-w-lg flex gap-5 items-start text-left">
            <Bookmark className="w-6 h-6 text-[#c5a059] flex-shrink-0 mt-1 opacity-60" />
            <div className="space-y-1">
              <p className="font-bold text-[#c5a059] uppercase tracking-[0.3em] text-[10px]">Private Link</p>
              <p className="leading-relaxed font-light">
                We recommend <strong>bookmarking this sanctuary</strong>. Your access link is unique and grants you permanent access to these resources.
              </p>
            </div>
          </div>

          <Link to="/" className="mt-24 text-stone-600 hover:text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 transition-all group">
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Return to Sanctuary
          </Link>

        </div>
        <Footer />
      </div>
    </div>
  );
};

export default ConfirmedPage;