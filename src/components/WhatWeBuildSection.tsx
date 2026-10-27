import React, { useState } from 'react';
import {
  Code2,
  Smartphone,
  Bot,
  RefreshCw,
  Cpu,
  Workflow,
  ChevronRight,
  CheckCircle2,
  X,
  ShieldCheck,
  Layers,
  ArrowUpRight,
  Terminal,
} from 'lucide-react';
import { WHAT_WE_BUILD } from '../data/companyData';
import { PillarDetail } from '../types';
import { SectionTechBackdrop } from './SectionTechBackdrop';

export const WhatWeBuildSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(null);
  const [activeFilter, setActiveFilter] = useState<string>('all');

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Code2':
        return Code2;
      case 'Smartphone':
        return Smartphone;
      case 'Bot':
        return Bot;
      case 'RefreshCw':
        return RefreshCw;
      case 'Cpu':
        return Cpu;
      case 'Workflow':
        return Workflow;
      default:
        return Layers;
    }
  };

  const categories = [
    { id: 'all', label: 'All Capabilities' },
    { id: 'Software', label: 'Softwares' },
    { id: 'Mobile Apps', label: 'Mobile Apps' },
    { id: 'AI Agents', label: 'AI Agents' },
    { id: 'Maintenance', label: 'Maintenance' },
    { id: 'IoT & Hardware', label: 'IoT & Electronics' },
  ];

  const filteredPillars =
    activeFilter === 'all'
      ? WHAT_WE_BUILD
      : WHAT_WE_BUILD.filter((p) => p.category === activeFilter);

  const handleInquire = (pillarTitle: string) => {
    setSelectedPillar(null);
    const contactEl = document.querySelector('#contact');
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section
      id="what-we-build"
      className="py-16 sm:py-28 md:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden"
    >
      {/* High-Impact Quantum Cyber Circuit Panoramic Backdrop (Slow Fade like the Mountain) */}
      <SectionTechBackdrop
        imageSrc="/assets/images/quantum_cyber_circuit_bg_1793119308617.jpg"
        alt="Quantum computing processor architecture and glowing circuit tracks"
        objectPosition="center 30%"
        brightness="brightness-[0.80] sm:brightness-[0.85] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/68"
        driftVariant="drift-2"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="max-w-3xl mb-8 sm:mb-12">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>02</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Engineering &amp; Core Capabilities</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            WHAT WE DEVELOP &amp; MAINTAIN
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed max-w-2xl">
            Future Pulse engineers and continuously maintains mission-critical software platforms,
            native and cross-platform mobile apps, online autonomous AI agents, and connected IoT electronics.
            We provide full lifecycle technical stewardship — from prototype to 24/7 production maintenance.
          </p>
        </div>

        {/* Filter Navigation Bar */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 sm:mb-10 no-scrollbar text-xs font-mono">
          {categories.map((cat) => {
            const isActive = activeFilter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveFilter(cat.id)}
                className={`px-3 sm:px-3.5 py-1.5 sm:py-2 rounded-lg whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-lg shadow-blue-600/20'
                    : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/80'
                }`}
              >
                {cat.label}
              </button>
            );
          })}
        </div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6 lg:gap-8">
          {filteredPillars.map((pillar, index) => {
            const Icon = getIcon(pillar.iconName);
            return (
              <div
                key={pillar.id}
                onClick={() => setSelectedPillar(pillar)}
                className="group relative bg-[#090d14] hover:bg-[#0c121d] border border-slate-800/80 hover:border-blue-500/40 rounded-2xl p-5 sm:p-7 transition-all duration-300 cursor-pointer flex flex-col justify-between hover:shadow-2xl hover:shadow-blue-950/30"
              >
                {/* Glow accent element */}
                <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-2xl group-hover:bg-blue-500/10 transition-colors pointer-events-none" />

                <div>
                  {/* Top Bar inside card: Category & Icon */}
                  <div className="flex items-center justify-between mb-6">
                    <span className="text-[11px] font-mono px-2 py-0.5 rounded bg-blue-950/60 border border-blue-500/30 text-blue-300 uppercase tracking-wider">
                      {pillar.category || 'Capability'}
                    </span>
                    <div className="w-10 h-10 rounded-xl bg-slate-900 border border-slate-800 group-hover:border-blue-500/30 group-hover:bg-blue-950/30 flex items-center justify-center text-slate-400 group-hover:text-blue-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Tagline */}
                  <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white tracking-tight mb-1.5 group-hover:text-blue-300 transition-colors">
                    {pillar.title}
                  </h3>
                  <p className="text-xs font-mono text-blue-400/90 mb-4">{pillar.tagline}</p>

                  {/* Description */}
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                    {pillar.description}
                  </p>

                  {/* Focus Areas */}
                  <div className="pt-4 border-t border-white/5 space-y-3">
                    <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                      Development &amp; Engineering Focus
                    </div>
                    <ul className="space-y-1.5 text-xs text-slate-300">
                      {pillar.focusAreas.slice(0, 3).map((item) => (
                        <li key={item} className="flex items-start gap-2">
                          <span className="text-blue-400 font-bold shrink-0">›</span>
                          <span>{item}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Maintenance Guarantee badge */}
                  {pillar.maintenanceScope && pillar.maintenanceScope.length > 0 && (
                    <div className="mt-4 pt-3 border-t border-white/5 flex items-center gap-2 text-[11px] font-mono text-emerald-400">
                      <ShieldCheck className="w-3.5 h-3.5 shrink-0" />
                      <span className="truncate">Active Maintenance &amp; SLA Support Included</span>
                    </div>
                  )}
                </div>

                {/* Bottom Card Affordance */}
                <div className="mt-6 pt-4 border-t border-white/5 flex items-center justify-between text-xs font-mono text-slate-400 group-hover:text-blue-400 transition-colors">
                  <span>Explore Engineering &amp; Maintenance</span>
                  <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>
            );
          })}
        </div>

        {/* Modal for detailed capability & maintenance inspection */}
        {selectedPillar && (
          <div
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
            onClick={() => setSelectedPillar(null)}
          >
            <div
              className="bg-[#0b1019] border border-blue-500/30 rounded-2xl max-w-2xl w-full p-6 sm:p-8 relative shadow-2xl my-8 max-h-[90vh] overflow-y-auto"
              onClick={(e) => e.stopPropagation()}
            >
              <button
                onClick={() => setSelectedPillar(null)}
                className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors cursor-pointer"
                aria-label="Close dialog"
              >
                <X className="w-5 h-5" />
              </button>

              <div className="flex items-center gap-3.5 mb-5">
                <div className="w-12 h-12 rounded-xl bg-blue-950/60 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                  {React.createElement(getIcon(selectedPillar.iconName), { className: 'w-6 h-6' })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                      {selectedPillar.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-blue-400">{selectedPillar.tagline}</p>
                </div>
              </div>

              <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-6">
                {selectedPillar.description}
              </p>

              {/* Engineering Approach */}
              <div className="bg-slate-900/60 rounded-xl p-4 border border-slate-800 mb-6">
                <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-wider mb-2">
                  <Terminal className="w-4 h-4" />
                  <span>Engineering Architecture</span>
                </div>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedPillar.engineeringApproach}
                </p>
              </div>

              {/* Development Deliverables */}
              <div className="mb-6">
                <h4 className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Key Development Deliverables
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {selectedPillar.focusAreas.map((area) => (
                    <div key={area} className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80">
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance & Support Protocol */}
              {selectedPillar.maintenanceScope && selectedPillar.maintenanceScope.length > 0 && (
                <div className="mb-6 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4.5">
                  <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                    <ShieldCheck className="w-4 h-4" />
                    <span>Ongoing Maintenance &amp; Support Scope</span>
                  </div>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                    {selectedPillar.maintenanceScope.map((scope) => (
                      <div key={scope} className="flex items-start gap-2 text-xs text-emerald-200/90">
                        <span className="text-emerald-400 font-bold shrink-0">✓</span>
                        <span>{scope}</span>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Technologies */}
              {selectedPillar.technologies && selectedPillar.technologies.length > 0 && (
                <div className="mb-6 pt-4 border-t border-white/10">
                  <div className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mb-2">
                    Technology Stack &amp; Tools
                  </div>
                  <div className="flex flex-wrap gap-1.5">
                    {selectedPillar.technologies.map((tech) => (
                      <span
                        key={tech}
                        className="px-2.5 py-1 rounded-md bg-slate-900 border border-slate-800 text-[11px] font-mono text-slate-300"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              )}

              {/* Modal Footer CTAs */}
              <div className="pt-5 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-3 text-xs font-mono">
                <span className="text-slate-400">Future Pulse Investments · Harare, Zimbabwe</span>
                <div className="flex items-center gap-3 w-full sm:w-auto justify-end">
                  <button
                    onClick={() => setSelectedPillar(null)}
                    className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => handleInquire(selectedPillar.title)}
                    className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-lg transition-colors flex items-center gap-1.5 cursor-pointer shadow-md shadow-blue-600/20"
                  >
                    <span>Inquire About This Service</span>
                    <ArrowUpRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};
