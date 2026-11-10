import React, { useState } from "react";
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
} from "lucide-react";
import { WHAT_WE_BUILD } from "../data/companyData";
import { PillarDetail } from "../types";
import { SectionTechBackdrop } from "./SectionTechBackdrop";

export const WhatWeBuildSection: React.FC = () => {
  const [selectedPillar, setSelectedPillar] = useState<PillarDetail | null>(
    null,
  );
  const [activeFilter, setActiveFilter] = useState<string>("all");

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case "Code2":
        return Code2;
      case "Smartphone":
        return Smartphone;
      case "Bot":
        return Bot;
      case "RefreshCw":
        return RefreshCw;
      case "Cpu":
        return Cpu;
      case "Workflow":
        return Workflow;
      default:
        return Layers;
    }
  };

  const categories = [
    { id: "all", label: "All Capabilities" },
    { id: "Software", label: "Softwares" },
    { id: "Mobile Apps", label: "Mobile Apps" },
    { id: "AI Agents", label: "AI Agents" },
    { id: "Maintenance", label: "Maintenance" },
    { id: "IoT & Hardware", label: "IoT & Electronics" },
  ];

  const filteredPillars =
    activeFilter === "all"
      ? WHAT_WE_BUILD
      : WHAT_WE_BUILD.filter((p) => p.category === activeFilter);

  const handleInquire = (pillarTitle: string) => {
    setSelectedPillar(null);
    const contactEl = document.querySelector("#contact");
    if (contactEl) {
      contactEl.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section id="what-we-build" className="studio-section studio-expertise">
      <div className="studio-container">
        <div className="studio-section-top" data-reveal>
          <div>
            <p className="studio-eyebrow">02 / OUR EXPERTISE</p>
            <h2 className="studio-heading">
              The right technology.
              <br />
              <em>For the real problem.</em>
            </h2>
          </div>
          <p className="studio-description">
            From the interface people touch to the systems working behind it. We
            connect the pieces — and keep them working.
          </p>
        </div>
        <div
          className="studio-filter-row"
          role="group"
          aria-label="Filter capabilities"
        >
          {categories.map((cat) => (
            <button
              key={cat.id}
              aria-pressed={activeFilter === cat.id}
              className={activeFilter === cat.id ? "is-active" : ""}
              onClick={() => setActiveFilter(cat.id)}
            >
              {cat.label === "Softwares" ? "Software" : cat.label}
            </button>
          ))}
        </div>
        <div className="grid expertise-grid">
          {filteredPillars.map((pillar, index) => {
            const Icon = getIcon(pillar.iconName);
            return (
              <button
                key={pillar.id}
                className="expertise-card group"
                onClick={() => setSelectedPillar(pillar)}
              >
                <div className="expertise-card-top">
                  <Icon size={26} strokeWidth={1.4} />
                  <span>0{index + 1}</span>
                </div>
                <h3>
                  {pillar.title
                    .replace(" Development & Maintenance", "")
                    .replace(" & Maintenance", "")}
                </h3>
                <p>{pillar.tagline}</p>
                <span className="expertise-card-link">
                  Explore capability <ArrowUpRight size={17} />
                </span>
              </button>
            );
          })}
        </div>
        {/* Modal for detailed capability & maintenance inspection */}
        {selectedPillar && (
          <div
            className="fp-dialog fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md animate-in fade-in duration-200 overflow-y-auto"
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
                  {React.createElement(getIcon(selectedPillar.iconName), {
                    className: "w-6 h-6",
                  })}
                </div>
                <div>
                  <div className="flex items-center gap-2">
                    <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                      {selectedPillar.title}
                    </h3>
                  </div>
                  <p className="text-xs font-mono text-blue-400">
                    {selectedPillar.tagline}
                  </p>
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
                    <div
                      key={area}
                      className="flex items-start gap-2.5 text-xs text-slate-200 bg-slate-950/50 p-2.5 rounded-lg border border-slate-800/80"
                    >
                      <CheckCircle2 className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                      <span>{area}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Maintenance & Support Protocol */}
              {selectedPillar.maintenanceScope &&
                selectedPillar.maintenanceScope.length > 0 && (
                  <div className="mb-6 bg-emerald-950/20 border border-emerald-500/30 rounded-xl p-4.5">
                    <div className="flex items-center gap-2 text-xs font-mono text-emerald-400 uppercase tracking-wider mb-3">
                      <ShieldCheck className="w-4 h-4" />
                      <span>Ongoing Maintenance &amp; Support Scope</span>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {selectedPillar.maintenanceScope.map((scope) => (
                        <div
                          key={scope}
                          className="flex items-start gap-2 text-xs text-emerald-200/90"
                        >
                          <span className="text-emerald-400 font-bold shrink-0">
                            ✓
                          </span>
                          <span>{scope}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                )}

              {/* Technologies */}
              {selectedPillar.technologies &&
                selectedPillar.technologies.length > 0 && (
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
                <span className="text-slate-400">
                  Future Pulse Investments · Harare, Zimbabwe
                </span>
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
