import React from 'react';
import { ArrowDown, ArrowRight, Code2, Smartphone, Bot, RefreshCw, Cpu } from 'lucide-react';
import { PulseCanvas } from './PulseCanvas';

interface HeroProps {
  onExploreWork: () => void;
  onAboutClick: () => void;
  onViewPricing?: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onAboutClick, onViewPricing }) => {
  return (
    <section
      id="home"
      className="relative min-h-[100dvh] flex items-center justify-center pt-20 sm:pt-28 pb-12 sm:pb-20 overflow-hidden bg-transparent"
    >
      {/* Dynamic Pulse Canvas background */}
      <PulseCanvas />

      {/* Atmospheric lighting gradient - restrained cool blue accent */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[350px] bg-blue-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[300px] h-[300px] bg-sky-500/5 rounded-full blur-[100px] pointer-events-none" />

      {/* Circuit track lines subtle SVG overlay */}
      <svg
        className="absolute inset-0 w-full h-full opacity-[0.04] pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <line x1="10%" y1="0" x2="10%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="90%" y1="0" x2="90%" y2="100%" stroke="white" strokeWidth="1" strokeDasharray="6 6" />
        <line x1="0" y1="40%" x2="100%" y2="40%" stroke="white" strokeWidth="1" strokeDasharray="4 8" />
      </svg>

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center w-full">
        {/* Official Entity Crest & Lead-in */}
        <div className="flex items-center gap-2.5 sm:gap-3.5 mb-5 sm:mb-7 px-3 sm:px-4 py-1.5 sm:py-2 rounded-xl sm:rounded-2xl bg-slate-950/90 border border-blue-500/30 shadow-lg shadow-blue-500/10 backdrop-blur-md max-w-full">
          <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-lg sm:rounded-xl bg-slate-950 border border-blue-400/40 overflow-hidden shadow-inner shrink-0 relative group">
            <img
              src="/future-pulse-logo.png"
              alt="Future Pulse Investments Logo"
              className="w-full h-full object-cover group-hover:scale-105 transition-transform"
            />
          </div>
          <div className="text-left font-mono min-w-0">
            <div className="text-[11px] sm:text-sm font-bold text-white tracking-wider uppercase flex items-center gap-1.5 truncate">
              <span>Future Pulse Investments</span>
              <span className="inline-block w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse shrink-0" />
            </div>
            <div className="text-[9px] sm:text-[11px] text-slate-400 tracking-wider sm:tracking-widest uppercase truncate">
              Parent Technology Company · Zimbabwe
            </div>
          </div>
        </div>

        {/* Primary Headline with fluid mobile sizing and balanced two-line layout */}
        <h1 className="font-['Syne',sans-serif] text-[1.4rem] xs:text-[1.75rem] sm:text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-[1.18] sm:leading-[1.08] mb-5 sm:mb-8 max-w-4xl px-1 sm:px-0">
          <span className="block">BUILDING TECHNOLOGY.</span>
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent block mt-1 sm:mt-2">
            SOLVING REAL PROBLEMS.
          </span>
        </h1>

        {/* Supporting Narrative highlighting Software, Mobile Apps, AI Agents & Maintenance */}
        <p className="text-xs sm:text-base md:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl sm:max-w-3xl mb-6 sm:mb-8 px-2 sm:px-0 [text-wrap:balance]">
          Future Pulse Investments develops and maintains bespoke software platforms, native iOS &amp; Android mobile
          applications, online autonomous AI agents, and connected IoT systems built to solve real-world problems.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-3 sm:gap-4 w-full sm:w-auto max-w-xs sm:max-w-none mx-auto sm:mx-0 mb-6 sm:mb-8">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          {onViewPricing && (
            <button
              onClick={onViewPricing}
              className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-semibold tracking-wide text-emerald-300 hover:text-white bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/40 hover:border-emerald-400 rounded-lg transition-all duration-200 flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
            >
              <span>Services &amp; Pricing</span>
              <span className="font-mono text-xs opacity-75">($)</span>
            </button>
          )}

          <button
            onClick={onAboutClick}
            className="w-full sm:w-auto px-6 sm:px-7 py-3 sm:py-3.5 text-xs sm:text-sm font-medium tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98]"
          >
            About Future Pulse
          </button>
        </div>

        {/* Interactive We Develop & Maintain Capabilities Strip */}
        <div className="w-full max-w-3xl pt-5 sm:pt-6 border-t border-white/10">
          <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest text-slate-400 mb-2.5 sm:mb-3 flex items-center justify-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>We Develop & Maintain</span>
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
          </div>
          <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2.5">
            {[
              { label: 'Softwares & Web Systems', icon: Code2 },
              { label: 'Mobile Apps (iOS & Android)', icon: Smartphone },
              { label: 'Online AI Agents', icon: Bot },
              { label: 'Ongoing System Maintenance', icon: RefreshCw },
              { label: 'IoT & Smart Electronics', icon: Cpu },
            ].map((cap) => {
              const Icon = cap.icon;
              return (
                <a
                  key={cap.label}
                  href="#what-we-build"
                  className="px-2.5 sm:px-3 py-1 sm:py-1.5 rounded-lg bg-slate-900/80 hover:bg-slate-800/90 border border-slate-800 hover:border-blue-500/40 text-[11px] sm:text-xs font-mono text-slate-300 hover:text-white transition-all flex items-center gap-1.5 group/item shadow-sm"
                >
                  <Icon className="w-3 h-3 sm:w-3.5 sm:h-3.5 text-blue-400 group-hover/item:text-blue-300 transition-colors" />
                  <span>{cap.label}</span>
                </a>
              );
            })}
          </div>
        </div>

        {/* Stage Transparency Note (Quiet Editorial Index) */}
        <div className="mt-8 sm:mt-12 pt-4 sm:pt-6 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-4 sm:gap-x-6 gap-y-1 sm:gap-y-2 text-[10px] sm:text-xs text-slate-500 font-mono">
          <span>Future Pulse Investments</span>
          <span className="text-slate-700 hidden xs:inline" aria-hidden="true">/</span>
          <span>Softwares · Mobile Apps · AI Agents · Maintenance</span>
          <span className="text-slate-700 hidden xs:inline" aria-hidden="true">/</span>
          <span>Harare, Zimbabwe</span>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="mt-6 sm:mt-10 text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1.5 text-xs font-mono group"
          aria-label="Scroll to about section"
        >
          <span className="tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
