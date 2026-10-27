import React from 'react';
import { Target, Compass, RefreshCw, Hourglass } from 'lucide-react';
import { PRINCIPLES } from '../data/companyData';
import { SectionTechBackdrop } from './SectionTechBackdrop';

export const PrinciplesSection: React.FC = () => {
  const getIcon = (index: number) => {
    switch (index) {
      case 0:
        return Target;
      case 1:
        return Compass;
      case 2:
        return RefreshCw;
      default:
        return Hourglass;
    }
  };

  return (
    <section id="principles" className="py-16 sm:py-28 md:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden">
      {/* High-Impact Structural Quantum Architecture Backdrop */}
      <SectionTechBackdrop
        imageSrc="/assets/images/quantum_cyber_circuit_bg_1793119308617.jpg"
        alt="Engineering foundational architecture and circuit design principles"
        objectPosition="center 40%"
        brightness="brightness-[0.78] sm:brightness-[0.84] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/72"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>05</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Core Principles</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            WHY WE BUILD
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Our operating philosophy guides how we evaluate ideas, structure engineering experiments,
            and construct lasting products.
          </p>
        </div>

        {/* 4 Principles Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5 sm:gap-6 lg:gap-8">
          {PRINCIPLES.map((principle, index) => {
            const Icon = getIcon(index);

            return (
              <div
                key={principle.number}
                className="group relative bg-[#090d14] hover:bg-[#0c1320] border border-slate-800/80 hover:border-blue-500/30 rounded-2xl p-5 sm:p-8 lg:p-9 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-xs font-mono text-slate-500">
                      Principle {principle.number}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 group-hover:text-blue-400 group-hover:border-blue-500/30 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight mb-3 group-hover:text-blue-200 transition-colors">
                    {principle.title.toUpperCase()}
                  </h3>

                  <p className="text-sm sm:text-base text-slate-200 font-medium leading-relaxed mb-4">
                    "{principle.description}"
                  </p>

                  <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                    {principle.detail}
                  </p>
                </div>

                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-500 group-hover:text-slate-400 transition-colors">
                  <span>Foundational Stance</span>
                  <span className="text-blue-400/80">Future Pulse Standard</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
