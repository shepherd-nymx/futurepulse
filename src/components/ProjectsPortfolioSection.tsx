import React, { useState, useMemo } from "react";
import {
  ExternalLink,
  ArrowUpRight,
  ArrowRight,
  Layers,
  Globe,
  Smartphone,
  Cpu,
  Check,
  Info,
  Clock,
  X,
  MapPin,
  Building2,
  ShieldCheck,
} from "lucide-react";
import {
  PROJECTS_LIST,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
} from "../data/projectsData";
import { ImageWithFallback } from "./ImageWithFallback";
import { UniLinkModal } from "./UniLinkModal";
import { UniLinkPhoneMockup } from "./UniLinkPhoneMockup";

export const ProjectsPortfolioSection: React.FC = () => {
  const [showConcepts, setShowConcepts] = useState(false);
  const [uniLinkOpen, setUniLinkOpen] = useState(false);
  const [previewOpen, setPreviewOpen] = useState(false);
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>("all");
  const [selectedProjectForModal, setSelectedProjectForModal] =
    useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(
    () =>
      PROJECTS_LIST.filter(
        (p) =>
          (showConcepts || !p.isPlaceholder) &&
          (activeCategory === "all" || p.category === activeCategory),
      ),
    [activeCategory, showConcepts],
  );

  const getStatusBadge = (status: ProjectItem["status"]) => {
    switch (status) {
      case "Live Product":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-950/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Live Product</span>
          </span>
        );
      case "In Development":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-blue-950/80 border border-blue-500/40 text-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>In Development</span>
          </span>
        );
      case "Active Prototype":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Active Prototype</span>
          </span>
        );
      case "Ready to Configure":
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-amber-950/70 border border-amber-500/40 text-amber-300">
            <span className="w-1.5 h-1.5 rounded-full bg-amber-400" />
            <span>Ready to Configure</span>
          </span>
        );
    }
  };

  const getCategoryIcon = (catId: string) => {
    switch (catId) {
      case "web":
        return <Globe className="w-3.5 h-3.5 text-blue-400" />;
      case "mobile":
        return <Smartphone className="w-3.5 h-3.5 text-indigo-400" />;
      case "software":
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const handleCardClick = (project: ProjectItem) => {
    if (project.liveUrl && project.isExternal) {
      window.open(project.liveUrl, "_blank", "noopener,noreferrer");
    } else {
      setSelectedProjectForModal(project);
    }
  };

  return (
    <section id="portfolio" className="studio-section studio-work">
      <div className="studio-container">
        <div className="studio-section-top" data-reveal>
          <div>
            <p className="studio-eyebrow">01 / THINGS WE’RE BUILDING</p>
            <h2 className="studio-heading">
              From “what if”
              <br />
              <em>to out in the world.</em>
            </h2>
          </div>
          <p className="studio-description">
            Our own products are where ideas meet real life. Explore what’s
            live, what’s taking shape, and the thinking behind each build.
          </p>
        </div>
        <div
          className="studio-filter-row"
          role="group"
          aria-label="Filter projects"
        >
          {PROJECT_CATEGORIES.map((cat) => (
            <button
              aria-pressed={activeCategory === cat.id}
              className={activeCategory === cat.id ? "is-active" : ""}
              key={cat.id}
              onClick={() => setActiveCategory(cat.id as ProjectCategory)}
            >
              {cat.id === "all"
                ? "All work"
                : cat.id === "web"
                  ? "Web experiences"
                  : cat.id === "mobile"
                    ? "Mobile apps"
                    : "Software"}
              <span>
                {
                  PROJECTS_LIST.filter(
                    (p) =>
                      (showConcepts || !p.isPlaceholder) &&
                      (cat.id === "all" || p.category === cat.id),
                  ).length
                }
              </span>
            </button>
          ))}
        </div>
        <div className="grid studio-project-grid">
          {filteredProjects.map((project) =>
            project.id === "unilink" ? (
              <article className="project-feature group" key={project.id}>
                <div className="project-feature-copy">
                  <span className="project-status">
                    <i /> LIVE PRODUCT / LOCAL DELIVERY
                  </span>
                  <h3>
                    Everyday errands.
                    <br />
                    <em>A little easier.</em>
                  </h3>
                  <p>
                    UNILINK connects customers with local shops and messengers.
                    Groceries, essentials and everyday deliveries, brought
                    together in one place.
                  </p>
                  <div className="project-tags">
                    <span>Web application</span>
                    <span>Zimbabwe</span>
                  </div>
                  <div className="project-actions">
                    <a
                      className="studio-button dark"
                      href={project.liveUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Explore UNILINK <ArrowUpRight size={16} />
                    </a>
                    <button
                      className="studio-text-link"
                      onClick={() => setUniLinkOpen(true)}
                    >
                      The product story <ArrowRight size={15} />
                    </button>
                  </div>
                </div>
                <div className="project-feature-preview">
                  <div className="preview-orbit" />
                  <div className="phone-preview" inert aria-hidden="true">
                    <UniLinkPhoneMockup />
                  </div>
                  <button
                    className="preview-try"
                    onClick={() => setPreviewOpen(true)}
                  >
                    Try the interface <ArrowUpRight size={13} />
                  </button>
                  <span className="preview-caption">
                    UNILINK / INTERFACE PREVIEW
                  </span>
                </div>
              </article>
            ) : (
              <article
                className={`project-card group ${project.isPlaceholder ? "project-concept" : ""}`}
                key={project.id}
              >
                <button
                  className="project-image"
                  onClick={() => handleCardClick(project)}
                  aria-label={`Explore ${project.name}`}
                >
                  <ImageWithFallback
                    src={project.thumbnail}
                    alt={project.name}
                    className="w-full h-full object-cover"
                  />
                  <span>
                    <ArrowUpRight size={23} />
                  </span>
                </button>
                <div className="project-card-meta">
                  <span>{project.categoryLabel}</span>
                  <span
                    className={
                      project.status === "Live Product" ? "status-live" : ""
                    }
                  >
                    {project.status === "Live Product"
                      ? "Live website"
                      : project.status === "Ready to Configure"
                        ? "Concept template"
                        : project.status}
                  </span>
                </div>
                <button
                  className="project-title"
                  onClick={() => handleCardClick(project)}
                >
                  {project.name.replace("[", "").replace("]", "")}{" "}
                  <ArrowUpRight size={20} />
                </button>
                <p>{project.tagline}</p>
              </article>
            ),
          )}
        </div>
        <div className="work-bottom">
          <span>Real products. Ongoing exploration.</span>
          <button
            className="studio-text-link"
            onClick={() => setShowConcepts(!showConcepts)}
            aria-expanded={showConcepts}
          >
            {showConcepts
              ? "Hide concept templates"
              : "Explore concept templates"}{" "}
            <ArrowRight size={14} />
          </button>
        </div>
      </div>
      {previewOpen && (
        <div
          className="fp-dialog studio-product-demo fixed inset-0 flex items-center justify-center p-4 bg-black/85"
          role="dialog"
          aria-modal="true"
          aria-label="Interactive UNILINK preview"
          onClick={() => setPreviewOpen(false)}
          onKeyDown={(e) => {
            if (e.key === "Escape") setPreviewOpen(false);
          }}
        >
          <div className="demo-surface" onClick={(e) => e.stopPropagation()}>
            <div className="demo-header">
              <span>UNILINK / INTERACTIVE DEMO</span>
              <button
                autoFocus
                aria-label="Close interactive preview"
                onClick={() => setPreviewOpen(false)}
              >
                <X size={20} />
              </button>
            </div>
            <div className="demo-phone">
              <UniLinkPhoneMockup />
            </div>
            <p>Explore the interface. Open UNILINK to use the live product.</p>
          </div>
        </div>
      )}
      <UniLinkModal
        isOpen={uniLinkOpen}
        onClose={() => setUniLinkOpen(false)}
      />
      {/* Interactive Project Details Modal (for UniStay or other showcased prototypes) */}
      {selectedProjectForModal && (
        <div className="fp-dialog fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/85 backdrop-blur-sm transition-opacity"
            onClick={() => setSelectedProjectForModal(null)}
          />

          {/* Modal Container */}
          <div className="relative w-full max-w-2xl bg-[#080C14] border border-white/10 rounded-2xl shadow-2xl shadow-black/90 z-10 my-8 overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
            {/* Header */}
            <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-white/[0.02]">
              <div>
                <div className="flex items-center gap-2 mb-1.5">
                  <span className="text-[10px] font-mono uppercase tracking-widest text-blue-400">
                    {selectedProjectForModal.categoryLabel}
                  </span>
                  <span className="text-slate-600">·</span>
                  {getStatusBadge(selectedProjectForModal.status)}
                </div>
                <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white">
                  {selectedProjectForModal.name}
                </h3>
                <p className="text-xs sm:text-sm text-slate-400 mt-0.5">
                  {selectedProjectForModal.tagline}
                </p>
              </div>

              <button
                onClick={() => setSelectedProjectForModal(null)}
                className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
                aria-label="Close project modal"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            {/* Modal Body */}
            <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm">
              {/* Media Thumbnail */}
              <div className="relative aspect-video w-full rounded-xl overflow-hidden border border-white/10 bg-slate-900">
                <ImageWithFallback
                  src={selectedProjectForModal.thumbnail}
                  alt={selectedProjectForModal.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Description */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-1.5">
                  About This Project
                </h4>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                  {selectedProjectForModal.description}
                </p>
              </div>

              {/* Highlights */}
              {selectedProjectForModal.highlights &&
                selectedProjectForModal.highlights.length > 0 && (
                  <div>
                    <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                      Key Architectural Capabilities
                    </h4>
                    <ul className="space-y-2 text-xs text-slate-300">
                      {selectedProjectForModal.highlights.map((h, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                )}

              {/* Technologies */}
              <div>
                <h4 className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Technology Stack
                </h4>
                <div className="flex flex-wrap gap-2">
                  {selectedProjectForModal.technologies.map((tech, idx) => (
                    <span
                      key={idx}
                      className="px-2.5 py-1 rounded-md text-xs font-mono bg-slate-900 border border-white/10 text-slate-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Status Note */}
              <div className="p-3.5 rounded-xl bg-blue-950/30 border border-blue-500/30 text-xs font-mono text-slate-300 leading-relaxed flex items-start gap-2.5">
                <Info className="w-4 h-4 text-blue-400 shrink-0 mt-0.5" />
                <div>
                  {selectedProjectForModal.status === "Live Product" && (
                    <span>
                      This product is actively operating and serving real users
                      in Zimbabwe.
                    </span>
                  )}
                  {selectedProjectForModal.status === "In Development" && (
                    <span>
                      UniStay is actively being engineered under Future Pulse’s
                      incubation pipeline for campus student housing in
                      Zimbabwe. Alpha testing will commence soon.
                    </span>
                  )}
                  {selectedProjectForModal.status === "Ready to Configure" && (
                    <span>
                      An illustrative concept that can be adapted for a future
                      project. This is not a completed client engagement.
                    </span>
                  )}
                </div>
              </div>
            </div>

            {/* Footer */}
            <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950 flex items-center justify-between">
              <span className="text-xs font-mono text-slate-500">
                Future Pulse Investments · Harare, Zimbabwe
              </span>

              {selectedProjectForModal.liveUrl &&
              selectedProjectForModal.isExternal ? (
                <a
                  href={selectedProjectForModal.liveUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-4 py-2 text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center gap-1.5"
                >
                  <span>Open Live Project</span>
                  <ExternalLink className="w-3.5 h-3.5" />
                </a>
              ) : (
                <button
                  onClick={() => setSelectedProjectForModal(null)}
                  className="px-4 py-2 text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-colors"
                >
                  Close
                </button>
              )}
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
