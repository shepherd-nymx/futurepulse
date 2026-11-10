import React from 'react';
import { ShieldCheck, Plus, CheckCircle, FileText } from 'lucide-react';
import { SectionTechBackdrop } from './SectionTechBackdrop';

export const MilestoneSection: React.FC = () => {
  return (
    <section id="milestones" className="py-16 sm:py-28 md:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden">
      {/* High-Impact Smart City Infrastructure Backdrop */}
      <SectionTechBackdrop
        imageSrc="/assets/images/futuristic_cyber_city_bg_1793119940671.jpg"
        alt="High-tech smart city infrastructure and corporate foundational milestone"
        objectPosition="center 30%"
        brightness="brightness-[0.78] sm:brightness-[0.84] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/70"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div data-reveal className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>07</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Current Stage</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            WHERE WE ARE
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            A newly registered Zimbabwean technology enterprise in its early foundational stage —
            combining clear operational discipline with long-range technical ambition.
          </p>
        </div>

        {/* Milestone Card */}
        <div className="bg-[#090d15] border border-blue-500/30 rounded-2xl p-5 sm:p-8 lg:p-12 relative overflow-hidden shadow-2xl mb-12">
          {/* Subtle pulse background halo */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-blue-600/10 rounded-full blur-[100px] pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-slate-950 border border-blue-500/40 overflow-hidden shadow-lg shadow-blue-500/20 shrink-0">
                  <img
                    src="/future-pulse-logo.png"
                    alt="Future Pulse Investments Official Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
                <div>
                  <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest">
                    <span className="w-2 h-2 rounded-full bg-blue-400" />
                    <span>Foundational Milestone · Zimbabwe</span>
                  </div>
                  <div className="text-[10px] sm:text-[11px] font-mono text-slate-400 uppercase tracking-wider">
                    Official Corporate Entity Seal
                  </div>
                </div>
              </div>

              <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl md:text-4xl font-extrabold text-white tracking-tight">
                2026 — FUTURE PULSE INVESTMENTS REGISTERED
              </h3>

              <p className="text-base sm:text-lg text-slate-200 leading-relaxed max-w-2xl">
                What began as ideas, experiments and projects has now grown into the foundation of a
                registered technology enterprise.
              </p>

              <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-2xl pt-2">
                We actively develop and maintain custom software platforms, mobile applications,
                online autonomous AI agents, and connected hardware systems with disciplined engineering rigor.
              </p>
            </div>

            <div className="lg:col-span-4 flex flex-col gap-3">
              <div className="p-4 rounded-xl bg-slate-900/80 border border-blue-500/30 text-xs font-mono shadow-md">
                <span className="text-slate-500 block uppercase mb-1">Company Status</span>
                <div className="flex items-center gap-2 text-white font-semibold text-sm">
                  <CheckCircle className="w-4 h-4 text-blue-400 shrink-0" />
                  <span>Future Pulse Investments (Pvt) Ltd</span>
                </div>
                <div className="text-[11px] text-blue-300 font-mono mt-1">
                  Officially Registered Entity (2026)
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
                <span className="text-slate-500 block uppercase mb-1">Jurisdiction</span>
                <span className="text-white font-semibold text-sm">Zimbabwe</span>
              </div>

              <div className="p-4 rounded-xl bg-slate-900/80 border border-slate-800 text-xs font-mono">
                <span className="text-slate-500 block uppercase mb-1">Operations</span>
                <span className="text-blue-300 font-semibold text-sm">Software · Mobile · Online AI · Maintenance</span>
              </div>
            </div>
          </div>
        </div>

        {/* Scalable Placeholder Area for Upcoming Milestones and Corporate Archive */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-6 rounded-xl bg-slate-950/40 border border-dashed border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-500">Upcoming Milestone</span>
                <FileText className="w-4 h-4 text-slate-600" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-slate-300 mb-1">
                UniLink Closed Beta Pilot
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Initial closed-group deployment of the UniLink errand coordination protocol in select test zones.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-mono text-slate-600">
              Future Pulse Archive · Status: In Preparation
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/40 border border-dashed border-slate-800 flex flex-col justify-between">
            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-mono text-slate-500">Upcoming Milestone</span>
                <ShieldCheck className="w-4 h-4 text-slate-600" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-slate-300 mb-1">
                Hardware Sensor Testbed
              </h4>
              <p className="text-xs text-slate-500 leading-relaxed">
                Field validation of low-power microcontroller monitoring nodes under real power conditions.
              </p>
            </div>
            <div className="mt-6 text-[11px] font-mono text-slate-600">
              Future Pulse Archive · Status: In Preparation
            </div>
          </div>

          <div className="p-6 rounded-xl bg-slate-950/40 border border-dashed border-slate-800 flex flex-col justify-between items-center text-center p-8">
            <div className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-600 mb-3">
              <Plus className="w-5 h-5" />
            </div>
            <h4 className="font-['Syne',sans-serif] text-base font-bold text-slate-400 mb-1">
              Future Milestones
            </h4>
            <p className="text-xs text-slate-500 leading-relaxed">
              New product launches, field deployments, and technical publications will be documented here.
            </p>
            <div className="mt-4 text-[11px] font-mono text-slate-600">
              Continuous Long-Term Build
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
