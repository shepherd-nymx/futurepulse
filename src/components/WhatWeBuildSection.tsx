import React, { useState } from 'react';
import { Code2, Cpu, Workflow, Sparkles, ChevronRight, CheckCircle2, X } from 'lucide-react';
import { WHAT_WE_BUILD } from '../data/companyData';
import { PillarDetail } from '../types';

export const WhatWeBuildSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Cpu':
        return Cpu;
      case 'Workflow':
        return Workflow;
      default:
        return Sparkles;
    }
  };

  return (
    <section
      id="what-we-build"
      className="py-24 sm:py-32 bg-[#05070B]/75 backdrop-blur-[2px] border-t border-white/[0.06] relative"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>02</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Technology Pillars</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            WHAT WE BUILD
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Future Pulse engineers solutions across four foundational pillars — combining
            digital code with physical hardware to solve concrete problems.
          </p>
        </div>

        {/* 4 Cards Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
          {WHAT_WE_BUILD.map((pillar, index) => {
            const Icon = getIcon(pillar.iconName);
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className="group relative bg-[#090d14] hover:bg-[#0c121d] border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-7 sm:p-9 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-950/30"
              >
                {/* Glow accent element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar inside card: Clean human index + Icon */}
                  <div className="flex items-center justify-between mb-8">
                    <span className="text-xs font-mono text-slate-500">
                      0{index + 1}. Pillar
                    </span>
                    <div className="w-11 h-11 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 group-hover:bg-blue-950/30 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white tracking-tight mb-2 group-hover:text-blue-300 transition-colors">
                    {pillar.title.toUpperCase()}
                  </h3>
                  <p className="text-xs font-mono text-blue-400/90 mb-4">{pillar.tagline}</p>

                  {/* Description */}
                  <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Focus Areas: Zero-pill discipline (clean text with typographic bullet separators) */}
                  <div className="pt-4 border-t border-white/5">
                    <div className="text-xs font-mono text-slate-400 mb-2 uppercase">Focus Areas</div>
                    <div className="flex flex-wrap items-center gap-x-2 gap-y-1 text-xs text-slate-400">
                      {pillar.focusAreas.map((item, i) => (
                        <React.Fragment key={item}>
                          <span className="text-slate-300">{item}</span>
                          {i < pillar.focusAreas.length - 1 && (
                            <span className="text-slate-600" aria-hidden="true">·</span>
                          )}
                        </React.Fragment>
                      ))}
                    </div>
                  </div>
                </div>

                {/* Bottom Card Affordance */}
                <div className="mt-8 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Explore Engineering Details</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed pillar inspection */}
        {selectedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="bg-[#0b1019] border border-blue-500/30 rounded-2xl max-w-xl w-full p-6 sm:p-8 relative shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-lg bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400">
                  {React.createElement(getIcon(selectedPillar.iconName), { className: 'w-5 h-5' })}
                </div>
                <div>
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                    {selectedPillar.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-400">{selectedPillar.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-2">
                  Engineering Approach
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedPillar.engineeringApproach}
                </p>
              </div>

              <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                Key Development Capabilities
              </h4>
              <div className="space-y-2 mb-6">
                {selectedPillar.focusAreas.map((area) => (
                  <div key={area} className="flex items-center gap-2.5 text-xs sm:text-sm text-slate-200">
                    <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>{area}</span>
                  </div>
                ))}
              </div>

              <div className="pt-4 border-t border-white/10 flex justify-between items-center text-xs text-slate-400 font-mono">
                <span>Parent: Future Pulse R&D</span>
                <button
                  onClick={() => setSelectedPillar(null)}
                  className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer"
                >
                  Close
                </button>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
