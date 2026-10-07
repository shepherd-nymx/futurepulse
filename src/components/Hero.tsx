import React from 'react';
import { ArrowDown, ArrowRight } from 'lucide-react';
import { PulseCanvas } from './PulseCanvas';

interface HeroProps {
  onExploreWork: () => void;
  onAboutClick: () => void;
}

export const Hero: React.FC<HeroProps> = ({ onExploreWork, onAboutClick }) => {
  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center justify-center pt-24 pb-16 overflow-hidden bg-transparent"
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

      <div className="relative z-10 max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 text-center flex flex-col items-center">
        {/* Subtle Brand & Regional Origin Lead-in (unboxed text, no pills) */}
        <div className="flex items-center gap-2.5 text-xs sm:text-sm font-mono tracking-widest text-slate-400 mb-6 uppercase">
          <span className="inline-block w-2 h-2 rounded-full bg-blue-400 shadow-[0_0_8px_#38bdf8]" />
          <span className="font-semibold text-slate-300">Future Pulse</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Zimbabwe</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span className="text-slate-400">Engineering & Technology</span>
        </div>

        {/* Primary Headline with deliberate typography and balance */}
        <h1 className="font-['Syne',sans-serif] text-4xl sm:text-6xl md:text-7xl font-extrabold tracking-tight text-white leading-[1.08] mb-8 max-w-4xl [text-wrap:balance]">
          BUILDING TECHNOLOGY.
          <br />
          <span className="bg-gradient-to-r from-white via-slate-100 to-slate-400 bg-clip-text text-transparent">
            SOLVING REAL PROBLEMS.
          </span>
        </h1>

        {/* Supporting Narrative */}
        <p className="text-base sm:text-xl text-slate-300 font-normal leading-relaxed max-w-2xl mb-10 [text-wrap:balance]">
          Future Pulse is a Zimbabwean technology company building practical software, electronics,
          IoT and automation solutions for real-world problems.
        </p>

        {/* Action CTAs */}
        <div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
          <button
            onClick={onExploreWork}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-semibold tracking-wide text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-lg shadow-blue-600/20 hover:shadow-blue-500/35 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
          >
            <span>Explore Our Work</span>
            <ArrowRight className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
          </button>

          <button
            onClick={onAboutClick}
            className="w-full sm:w-auto px-7 py-3.5 text-sm font-medium tracking-wide text-slate-200 hover:text-white bg-slate-900/80 hover:bg-slate-800/90 border border-slate-700/60 rounded-lg transition-all duration-200 flex items-center justify-center cursor-pointer active:scale-[0.98]"
          >
            About Future Pulse
          </button>
        </div>

        {/* Stage Transparency Note (Quiet Editorial Index) */}
        <div className="mt-16 pt-8 border-t border-white/5 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs text-slate-500 font-mono">
          <span>Parent Technology Entity</span>
          <span className="text-slate-700" aria-hidden="true">/</span>
          <span>Hardware & Software R&D</span>
          <span className="text-slate-700" aria-hidden="true">/</span>
          <span>Founded 2026</span>
        </div>

        {/* Scroll cue */}
        <a
          href="#about"
          className="mt-12 text-slate-500 hover:text-blue-400 transition-colors flex flex-col items-center gap-1.5 text-xs font-mono group"
          aria-label="Scroll to about section"
        >
          <span className="tracking-wider">SCROLL</span>
          <ArrowDown className="w-4 h-4 animate-bounce text-slate-500 group-hover:text-blue-400 transition-colors" />
        </a>
      </div>
    </section>
  );
};
