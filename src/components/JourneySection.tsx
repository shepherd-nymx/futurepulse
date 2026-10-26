import React, { useState } from 'react';
import { Check, ChevronRight } from 'lucide-react';
import { JOURNEY_STEPS } from '../data/companyData';
import { TechBackgroundDecor } from './TechBackgroundDecor';

export const JourneySection: React.FC = () => {
  const [activeStepIndex, setActiveStepIndex] = useState<number>(5); // Default to 'Company' (where Future Pulse is now)

  return (
    <section id="journey" className="py-16 sm:py-28 md:py-32 bg-[#05070B]/55 border-t border-white/[0.06] relative overflow-hidden">
      {/* High-Tech Telemetry & Timeline Decor */}
      <TechBackgroundDecor
        variant="telemetry"
        glowColor="indigo"
        glowPosition="center"
        telemetryLabel="FP-EVOLUTION // TIMELINE-01"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>04</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Evolutionary Process</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            THE JOURNEY
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Great technology rarely starts as a finished product. It starts as an idea, gets tested,
            fails, improves and eventually becomes something people can use.
          </p>
        </div>

        {/* Stepped Interactive Timeline */}
        <div className="bg-[#090d15] border border-slate-800/80 rounded-2xl p-4 sm:p-8 lg:p-10 shadow-2xl relative overflow-hidden">
          {/* Subtle pulse line running along the timeline */}
          <div className="hidden lg:block absolute top-[72px] left-12 right-12 h-[2px] bg-slate-800 pointer-events-none">
            <div
              className="h-full bg-gradient-to-r from-blue-600 via-blue-400 to-sky-300 transition-all duration-500 relative"
              style={{ width: `${((activeStepIndex + 1) / JOURNEY_STEPS.length) * 100}%` }}
            >
              <div className="absolute right-0 top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-white shadow-[0_0_10px_#38bdf8]" />
            </div>
          </div>

          {/* Steps Horizontal / Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-7 gap-3 sm:gap-4 relative z-10 mb-10">
            {JOURNEY_STEPS.map((item, index) => {
              const isPassed = index <= activeStepIndex;
              const isCurrent = index === activeStepIndex;

              return (
                <button
                  key={item.step}
                  onClick={() => setActiveStepIndex(index)}
                  className={`text-left p-3.5 sm:p-4 rounded-xl border transition-all duration-200 cursor-pointer flex flex-col justify-between ${
                    isCurrent
                      ? 'bg-blue-950/40 border-blue-500 shadow-lg shadow-blue-950/50 scale-[1.02]'
                      : isPassed
                      ? 'bg-slate-900/60 border-slate-700/80 hover:border-slate-600'
                      : 'bg-slate-950/40 border-slate-850 opacity-60 hover:opacity-100 hover:border-slate-700'
                  }`}
                >
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[11px] font-mono text-slate-400">{item.step}</span>
                    <div
                      className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] ${
                        isCurrent
                          ? 'bg-blue-500 text-white font-bold animate-pulse'
                          : isPassed
                          ? 'bg-blue-950 text-blue-400 border border-blue-500/40'
                          : 'bg-slate-800 text-slate-500'
                      }`}
                    >
                      {isPassed ? <Check className="w-3 h-3" /> : index + 1}
                    </div>
                  </div>

                  <div>
                    <h3 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold text-white tracking-tight">
                      {item.title}
                    </h3>
                    {index === 5 && (
                      <span className="inline-block mt-1 text-[10px] font-mono text-blue-400 uppercase">
                        Current
                      </span>
                    )}
                  </div>
                </button>
              );
            })}
          </div>

          {/* Active Step Deep-Dive Showcase */}
          <div className="bg-[#0c121d] border border-blue-500/20 rounded-xl p-6 sm:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
            <div className="space-y-2 max-w-2xl">
              <div className="flex items-center gap-3">
                <span className="text-xs font-mono text-blue-400 uppercase tracking-wider">
                  Step {JOURNEY_STEPS[activeStepIndex].step}
                </span>
                <span className="text-slate-600" aria-hidden="true">·</span>
                <span className="text-xs font-mono text-slate-400">
                  Engineering Evolution
                </span>
              </div>
              <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                {JOURNEY_STEPS[activeStepIndex].title}
              </h3>
              <p className="text-sm sm:text-base text-slate-200 leading-relaxed">
                {JOURNEY_STEPS[activeStepIndex].description}
              </p>
              <p className="text-xs sm:text-sm text-slate-400 italic pt-1">
                {JOURNEY_STEPS[activeStepIndex].milestoneDetail}
              </p>
            </div>

            <div className="flex items-center gap-2 shrink-0 self-stretch md:self-auto justify-end">
              {activeStepIndex > 0 && (
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.max(0, prev - 1))}
                  className="px-3 py-2 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 rounded-lg border border-slate-700 transition-colors cursor-pointer"
                >
                  ← Previous
                </button>
              )}
              {activeStepIndex < JOURNEY_STEPS.length - 1 && (
                <button
                  onClick={() => setActiveStepIndex((prev) => Math.min(JOURNEY_STEPS.length - 1, prev + 1))}
                  className="px-3.5 py-2 text-xs font-mono text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <span>Next Step</span>
                  <ChevronRight className="w-3.5 h-3.5" />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
