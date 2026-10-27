import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { SectionTechBackdrop } from './SectionTechBackdrop';

interface VisionSectionProps {
  onContactClick: () => void;
}

export const VisionSection: React.FC<VisionSectionProps> = ({ onContactClick }) => {
  return (
    <section
      id="vision"
      className="py-24 sm:py-36 md:py-48 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden flex items-center justify-center text-center"
    >
      {/* High-Impact Landing Rocket Backdrop (Slow Fade like the Mountain) */}
      <SectionTechBackdrop
        imageSrc="/assets/images/rocket_landing_tech_bg_1793119176145.jpg"
        alt="Futuristic vertical aerospace rocket performing precision propulsive landing at night"
        objectPosition="center 40%"
        brightness="brightness-[0.82] sm:brightness-[0.88] contrast-[1.14] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/66"
      />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center">
        {/* Header Indicator */}
        <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-6">
          <span>08</span>
          <span className="text-slate-600" aria-hidden="true">/</span>
          <span>The Long Horizon</span>
        </div>

        {/* Cinematic Headline */}
        <h2 className="font-['Syne',sans-serif] text-2xl xs:text-3xl sm:text-5xl md:text-6xl lg:text-7xl font-extrabold text-white tracking-tight leading-[1.12] sm:leading-[1.08] mb-6 sm:mb-8 [text-wrap:balance] drop-shadow-[0_4px_28px_rgba(0,0,0,0.92)]">
          THIS IS ONLY THE BEGINNING.
        </h2>

        {/* Narrative */}
        <p className="text-sm sm:text-lg md:text-xl text-slate-200 font-normal leading-relaxed max-w-3xl mb-8 sm:mb-12 [text-wrap:balance] drop-shadow-[0_2px_14px_rgba(0,0,0,0.85)]">
          Future Pulse is being built with a long-term vision: to develop technology products that
          solve meaningful problems, create opportunities and contribute to the growth of
          Zimbabwe's technology ecosystem and Africa's digital future.
        </p>

        {/* Long-Term Pillars Quote */}
        <div className="w-full max-w-2xl border-y border-white/10 py-6 mb-12 grid grid-cols-1 sm:grid-cols-3 gap-6 text-xs font-mono text-slate-300 backdrop-blur-xs">
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Grassroots Rooting</span>
            <span className="text-slate-400">Born from Zimbabwean observation</span>
          </div>
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Physical &amp; Digital</span>
            <span className="text-slate-400">Software meets electronics R&amp;D</span>
          </div>
          <div>
            <span className="text-blue-400 block font-semibold text-sm mb-1">Continental Scale</span>
            <span className="text-slate-400">Designed for Africa's digital era</span>
          </div>
        </div>

        <button
          onClick={onContactClick}
          className="px-8 py-4 text-sm font-semibold tracking-wider uppercase text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all duration-200 shadow-xl shadow-blue-600/30 hover:shadow-blue-500/40 flex items-center gap-2 group cursor-pointer active:scale-[0.98]"
        >
          <span>Connect With Future Pulse</span>
          <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
        </button>
      </div>
    </section>
  );
};
