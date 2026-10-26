import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { TechBackgroundDecor } from './TechBackgroundDecor';

interface VisionSectionProps {
  onContactClick: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="vision"
      className="py-20 sm:py-36 md:py-44 bg-[#05070B]/55 border-t border-white/[0.06] relative overflow-hidden flex items-center justify-center text-center"
    >
      {/* High-Tech Flow & Future Horizon Decor */}
      <TechBackgroundDecor
        variant="flow"
        glowColor="cyan"
        glowPosition="center"
        telemetryLabel="FP-VISION // LONG-TERM-HORIZON"
      />
      {/* Cinematic Pulse / Circuit Backing */}
      <div className="absolute inset-0 pointer-events-none flex items-center justify-center">
        {/* Subtle circular pulse waves echoing outward */}
        <div className="w-[450px] h-[450px] sm:w-[650px] sm:h-[650px] rounded-full border border-blue-500/10 animate-ping opacity-25" style={{ animationDuration: '6s' }} />
        <div className="absolute w-[300px] h-[300px] sm:w-[480px] sm:h-[480px] rounded-full border border-sky-400/15" />
        <div className="absolute w-[180px] h-[180px] sm:w-[280px] sm:h-[280px] rounded-full border border-blue-400/20 shadow-[0_0_80px_rgba(14,165,233,0.15)]" />
        <div className="absolute w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[140px]" />
      </div>

      {/* Circuit lines */}
      <svg
        className="absolute inset-0 w-full h-full opacity-10 pointer-events-none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M0,150 L300,150 L400,250 L800,250 L900,150 L1440,150"
          stroke="url(#visionGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <path
          d="M0,450 L250,450 L350,350 L750,350 L850,450 L1440,450"
          stroke="url(#visionGrad)"
          strokeWidth="1.5"
          fill="none"
        />
        <defs>
          <linearGradient id="visionGrad" x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor="#0ea5e9" stopOpacity="0" />
            <stop offset="50%" stopColor="#38bdf8" stopOpacity="0.8" />
            <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
          </linearGradient>
        </defs>
      </svg>

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-6">
          <span>08</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>The Long Horizon</span>
        </div>

        {/* Cinematic Headline */}
        <h2 className="font-['Syne',sans-serif] text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-6 sm:mb-8 [text-wrap:balance]">
          THIS IS ONLY THE BEGINNING.
        </h2>

        {/* Narrative */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-300 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-12 [text-wrap:balance]">
          Future Pulse is being built with a long-term vision: to develop technology products that
          solve meaningful problems, create opportunities and contribute to the growth of
          Zimbabwe's technology ecosystem and Africa's digital future.
        </p>

        {/* Long-Term Pillars Quote */}
        <div className="w-full max-w-2xl border-y border-white/10 py-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-slate-400">
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Grassroots Rooting</span>
            <span>Born from Zimbabwean observation</span>
          </div>
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Physical & Digital</span>
            <span>Software meets electronics R&D</span>
          </div>
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Continental Scale</span>
            <span>Designed for Africa's digital era</span>
          </div>
        </div>

        <button
          onClick={onContactClick}
          className="px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-xl shadow-blue-600/25 hover:shadow-blue-500/40 flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
        >
          <span>Connect With Future Pulse</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
