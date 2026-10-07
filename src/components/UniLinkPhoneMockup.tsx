import React, { useState } from 'react';
import {
  Moon,
  Sun,
  ShoppingCart,
  UserPlus,
  Truck,
  Store,
  ArrowRight,
  ChevronDown,
  ExternalLink,
  Zap,
  MapPin,
  Clock,
  ShieldCheck,
  CheckCircle2,
} from 'lucide-react';

export const UniLinkPhoneMockup: React.FC = () => {
  const [isDarkMode, setIsDarkMode] = useState(false);
  const [activeTab, setActiveTab] = useState<'welcome' | 'howItWorks'>('welcome');
  const [clickedRole, setClickedRole] = useState<string | null>(null);

  const handleRoleClick = (role: string) => {
    setClickedRole(role);
    setTimeout(() => setClickedRole(null), 3000);
  };

  return (
    <div className="relative mx-auto max-w-[340px] sm:max-w-[360px] select-none">
      {/* 45-Minute Delivery Badge */}
      <div className="absolute -top-4 -right-4 z-20 bg-[#16284F] text-white p-3 rounded-2xl border-2 border-blue-400 shadow-xl flex items-center gap-2.5">
        <div className="w-8 h-8 rounded-full bg-blue-500/20 border border-blue-400/40 flex items-center justify-center text-blue-300">
          <Clock className="w-4 h-4" />
        </div>
        <div className="text-left">
          <span className="text-[10px] uppercase font-mono tracking-wider block text-slate-300">
            Delivery in
          </span>
          <span className="font-['Syne',sans-serif] text-sm font-extrabold text-white">
            As Little As 45 Mins!
          </span>
        </div>
      </div>

      {/* Smartphone Chassis */}
      <div className="relative bg-black rounded-[46px] p-3 shadow-2xl border-4 border-slate-700/80 ring-1 ring-white/20">
        {/* Dynamic Island & Screen */}
        <div
          className={`relative rounded-[36px] overflow-hidden flex flex-col h-[670px] shadow-inner transition-colors duration-300 ${
            isDarkMode ? 'bg-[#0b111e] text-white' : 'bg-[#F8FAFC] text-slate-900'
          }`}
        >
          {/* Status Bar */}
          <div className="px-6 pt-3 pb-1 flex items-center justify-between text-[11px] font-mono text-slate-400">
            <span className="font-semibold text-slate-700 dark:text-slate-200">9:41</span>
            {/* Dynamic island pill */}
            <div className="w-20 h-4 bg-black rounded-full mx-auto" />
            <div className="flex items-center gap-1.5 text-xs text-slate-700 dark:text-slate-200">
              <span>5G</span>
              <div className="w-4 h-2 border border-current rounded-xs p-0.5 flex items-center">
                <div className="w-full h-full bg-emerald-500 rounded-2xs" />
              </div>
            </div>
          </div>

          {/* Top Bar with Moon theme toggle (exact match to live screenshot) */}
          <div className="px-5 py-2 flex items-center justify-between">
            <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400">
              unilinkbase.com
            </div>
            <button
              onClick={() => setIsDarkMode(!isDarkMode)}
              className="w-9 h-9 rounded-2xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 shadow-sm flex items-center justify-center text-slate-700 dark:text-slate-300 hover:scale-105 transition-all cursor-pointer"
              aria-label="Toggle theme"
            >
              {isDarkMode ? <Sun className="w-4 h-4 text-amber-400" /> : <Moon className="w-4 h-4" />}
            </button>
          </div>

          {/* Screen Content - Replicating WhatsApp Image 2026-10-07 at 20.32.24.jpeg */}
          <div className="flex-1 overflow-y-auto px-5 py-2 flex flex-col justify-between scrollbar-none">
            {activeTab === 'welcome' ? (
              <div className="flex flex-col items-center text-center my-auto">
                {/* Circular Blue Shopping Cart Logo Emblem */}
                <div className="w-24 h-24 rounded-full bg-blue-50 dark:bg-blue-950/60 border-2 border-blue-200 dark:border-blue-500/30 flex items-center justify-center p-3 mb-4 shadow-sm relative">
                  <div className="w-18 h-18 rounded-full bg-blue-100/70 dark:bg-blue-900/40 flex items-center justify-center">
                    <svg
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#0062FF"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="w-10 h-10"
                    >
                      <circle cx="9" cy="21" r="1" fill="#0062FF" />
                      <circle cx="20" cy="21" r="1" fill="#0062FF" />
                      <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
                    </svg>
                  </div>
                </div>

                {/* Typography Lockup */}
                <span className="text-[11px] font-mono font-semibold uppercase tracking-[0.22em] text-slate-500 dark:text-slate-400 mb-1">
                  WELCOME TO
                </span>

                <h3 className="font-['Syne',sans-serif] text-3xl font-extrabold tracking-tight mb-2">
                  <span className={isDarkMode ? 'text-white' : 'text-[#0b172a]'}>UNI</span>
                  <span className="text-[#0062FF]">LINK</span>
                </h3>

                {/* Subtitle with Lightning Bolt */}
                <div className="flex items-center gap-2 text-[#0062FF] font-semibold text-xs tracking-wider uppercase mb-1.5">
                  <span className="w-6 h-[1px] bg-[#0062FF]/40" />
                  <Zap className="w-3.5 h-3.5 fill-current" />
                  <span>FAST GROCERY DELIVERY</span>
                  <span className="w-6 h-[1px] bg-[#0062FF]/40" />
                </div>

                <p className="text-xs text-slate-600 dark:text-slate-300 max-w-[240px] leading-relaxed mb-6 font-medium">
                  Order from your favourite stores and get it delivered to your door
                </p>

                {/* Role Buttons - Exact Replica from Live unilinkbase.com Screen */}
                <div className="w-full space-y-3 mb-4">
                  {/* 1. Sign In Shopper (Deep Blue) */}
                  <a
                    href="https://www.unilinkbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleRoleClick('Shopper Sign In')}
                    className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#0055ff] to-[#0042cc] text-white flex items-center justify-between shadow-md shadow-blue-500/20 hover:scale-[1.01] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <ShoppingCart className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] uppercase font-mono tracking-wider opacity-80 block">
                          SIGN IN
                        </span>
                        <span className="text-sm font-bold block leading-tight">Shopper</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-90 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* 2. Register as Shopper (Electric Blue) */}
                  <a
                    href="https://www.unilinkbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleRoleClick('Shopper Registration')}
                    className="w-full p-3.5 rounded-2xl bg-[#0066FF] text-white flex items-center justify-between shadow-md shadow-blue-600/20 hover:scale-[1.01] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <UserPlus className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] uppercase font-mono tracking-wider opacity-80 block">
                          NEW ACCOUNT
                        </span>
                        <span className="text-sm font-bold block leading-tight">
                          Register as Shopper
                        </span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-90 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* 3. Sign In Messenger (Vibrant Green) */}
                  <a
                    href="https://www.unilinkbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleRoleClick('Messenger Portal')}
                    className="w-full p-3.5 rounded-2xl bg-gradient-to-r from-[#00b377] to-[#009966] text-white flex items-center justify-between shadow-md shadow-emerald-600/20 hover:scale-[1.01] transition-all cursor-pointer group"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/15 flex items-center justify-center">
                        <Truck className="w-4 h-4 text-white" />
                      </div>
                      <div className="text-left">
                        <span className="text-[9px] uppercase font-mono tracking-wider opacity-80 block">
                          SIGN IN
                        </span>
                        <span className="text-sm font-bold block leading-tight">Messenger</span>
                      </div>
                    </div>
                    <ArrowRight className="w-4 h-4 opacity-90 group-hover:translate-x-1 transition-transform" />
                  </a>

                  {/* 4. Shop Owner (White Card) */}
                  <a
                    href="https://www.unilinkbase.com"
                    target="_blank"
                    rel="noopener noreferrer"
                    onClick={() => handleRoleClick('Shop Owner Portal')}
                    className="w-full py-2.5 px-4 rounded-xl bg-white dark:bg-slate-800 border border-slate-200 dark:border-slate-700 text-slate-800 dark:text-slate-200 flex items-center justify-center gap-2 shadow-xs hover:bg-slate-50 dark:hover:bg-slate-750 transition-colors text-xs font-semibold cursor-pointer"
                  >
                    <Store className="w-3.5 h-3.5 text-slate-600 dark:text-slate-400" />
                    <span>Shop Owner</span>
                  </a>
                </div>

                {/* Role Click Notice Feedback */}
                {clickedRole && (
                  <div className="text-[11px] font-mono text-emerald-500 flex items-center gap-1.5 animate-in fade-in mb-2">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Opening {clickedRole} on unilinkbase.com...</span>
                  </div>
                )}

                {/* Bottom Toggle: "HOW IT WORKS" */}
                <button
                  onClick={() => setActiveTab('howItWorks')}
                  className="mt-2 text-[11px] font-mono font-bold tracking-widest text-slate-500 dark:text-slate-400 uppercase flex items-center gap-1 hover:text-[#0062FF] transition-colors cursor-pointer py-1"
                >
                  <span>HOW IT WORKS</span>
                  <ChevronDown className="w-3.5 h-3.5" />
                </button>
              </div>
            ) : (
              <div className="py-2 space-y-3">
                <div className="flex items-center justify-between pb-2 border-b border-slate-200 dark:border-slate-800">
                  <span className="text-xs font-bold text-slate-800 dark:text-white uppercase font-mono">
                    How UniLink Works
                  </span>
                  <button
                    onClick={() => setActiveTab('welcome')}
                    className="text-[11px] text-blue-600 dark:text-blue-400 font-mono underline"
                  >
                    ← Back to Sign In
                  </button>
                </div>

                <div className="space-y-2 text-left">
                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      1. Register & Browse
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      Create your shopper profile in seconds. Choose from local grocery and pantry items.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      2. Dedicated Messenger Shops
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      A trusted messenger visits the store on your behalf, selecting fresh items.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      3. Live Order Tracking
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      Follow dispatch updates directly on your mobile device as the delivery approaches.
                    </div>
                  </div>

                  <div className="p-2.5 rounded-xl bg-blue-50 dark:bg-slate-800/60 border border-blue-200 dark:border-slate-700">
                    <div className="text-xs font-bold text-blue-600 dark:text-blue-400 mb-0.5">
                      4. Fast Doorstep Delivery
                    </div>
                    <div className="text-[11px] text-slate-600 dark:text-slate-300">
                      Delivered in as little as 45 minutes to your room, dorm, home, or workplace.
                    </div>
                  </div>
                </div>

                <a
                  href="https://www.unilinkbase.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-2.5 bg-[#0066FF] text-white text-xs font-semibold rounded-xl flex items-center justify-center gap-1.5 shadow-sm mt-3"
                >
                  <span>Launch Live UniLink Platform</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Live Website Tagline Footer */}
      <div className="mt-3 text-center">
        <a
          href="https://www.unilinkbase.com"
          target="_blank"
          rel="noopener noreferrer"
          className="text-[11px] font-mono text-slate-400 hover:text-blue-400 transition-colors inline-flex items-center gap-1"
        >
          <span>Live at</span>
          <span className="text-blue-400 font-bold underline">unilinkbase.com</span>
          <ExternalLink className="w-3 h-3" />
        </a>
      </div>
    </div>
  );
};
