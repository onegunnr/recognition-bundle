import React from 'react';
import { Mail, Inbox, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';
import Footer from './Footer';

const ThankYouPage: React.FC = () => {
  const bgImage = "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2000&auto=format&fit=crop";

  return (
    <div className="min-h-screen bg-black text-stone-200 relative selection:bg-[#c5a059]/30 font-sans overflow-x-hidden">
      
      <div 
        className="fixed inset-0 z-0 bg-cover bg-center bg-fixed"
        style={{ backgroundImage: `url('${bgImage}')` }}
      />
      
      <div className="fixed inset-0 z-[1] bg-black/75 backdrop-blur-[2px]"></div>
      <div className="fixed inset-0 z-[2] bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.6)_100%)] pointer-events-none"></div>

      <div className="relative z-10 flex flex-col items-center min-h-screen">
        <div className="w-full h-px bg-gradient-to-r from-transparent via-[#c5a059]/30 to-transparent"></div>

        <div className="w-full max-w-2xl px-6 py-16 md:py-24 flex flex-col items-center text-center flex-grow justify-center">
          
          {/* Animated Mail Icon */}
          <div className="w-20 h-20 bg-[#c5a059]/10 rounded-full flex items-center justify-center mb-10 border border-[#c5a059]/20 shadow-[0_0_60px_rgba(197,160,89,0.15)] backdrop-blur-md animate-pulse">
            <Mail className="text-[#c5a059] w-10 h-10" />
          </div>

          <h1 className="text-4xl md:text-5xl font-serif text-white mb-6 leading-tight">
            Almost There...
          </h1>
          
          <div className="mb-8">
            <p className="text-2xl font-serif text-[#c5a859] mb-2">Check Your Inbox</p>
            <p className="text-stone-400 text-lg font-light">to confirm and unlock your bundle</p>
          </div>

          <div className="bg-stone-900/40 border border-white/10 rounded-2xl p-8 max-w-lg mb-8 backdrop-blur-xl">
            <p className="text-stone-300 leading-relaxed mb-4">
              We just sent a confirmation email to your inbox.
            </p>
            <p className="text-stone-400 text-sm leading-relaxed">
              Click the link inside to verify your email and unlock instant access to the Recognition Bundle.
            </p>
          </div>

          {/* What You'll Get */}
          <div className="bg-[#c5a859]/5 border border-[#c5a859]/10 rounded-2xl p-6 max-w-lg mb-12">
            <div className="flex items-center gap-2 mb-4">
              <Inbox className="w-5 h-5 text-[#c5a859]" />
              <p className="text-[10px] uppercase tracking-[0.3em] text-[#c5a859] font-bold">What's Inside</p>
            </div>
            <div className="space-y-2 text-left text-sm text-stone-400">
              <p>🎧 Recognition Meditation (10-minute audio)</p>
              <p>📱 6 Sacred Background Images</p>
              <p>📖 Essential Self Starter Guide</p>
            </div>
          </div>

          {/* Troubleshooting */}
          <div className="max-w-lg text-sm text-stone-500 space-y-3 mb-12">
            <p className="font-medium text-stone-400">Don't see the email?</p>
            <ul className="space-y-2 text-left pl-6 list-disc">
              <li>Check your spam/junk folder</li>
              <li>Search for emails from "Ancient Truth Modern Freedom"</li>
              <li>Wait a few minutes - emails can take up to 5 minutes to arrive</li>
            </ul>
          </div>

          <Link to="/" className="text-stone-600 hover:text-[#c5a059] text-[10px] font-bold uppercase tracking-[0.4em] flex items-center gap-4 transition-all group">
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