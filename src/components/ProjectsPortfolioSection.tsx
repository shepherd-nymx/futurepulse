import React, { useState, useMemo } from 'react';
import {
  ExternalLink,
  ArrowUpRight,
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
} from 'lucide-react';
import {
  PROJECTS_LIST,
  PROJECT_CATEGORIES,
  ProjectCategory,
  ProjectItem,
} from '../data/projectsData';
import { ImageWithFallback } from './ImageWithFallback';
import { SectionTechBackdrop } from './SectionTechBackdrop';

export const ProjectsPortfolioSection: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('all');
  const [selectedProjectForModal, setSelectedProjectForModal] = useState<ProjectItem | null>(null);

  const filteredProjects = useMemo(() => {
    if (activeCategory === 'all') return PROJECTS_LIST;
    return PROJECTS_LIST.filter((p) => p.category === activeCategory);
  }, [activeCategory]);

  const getStatusBadge = (status: ProjectItem['status']) => {
    switch (status) {
      case 'Live Product':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-emerald-950/80 border border-emerald-500/40 text-emerald-300 shadow-sm shadow-emerald-950/50">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-400" />
            <span>Live Product</span>
          </span>
        );
      case 'In Development':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-blue-950/80 border border-blue-500/40 text-blue-300">
            <span className="w-1.5 h-1.5 rounded-full bg-blue-400" />
            <span>In Development</span>
          </span>
        );
      case 'Active Prototype':
        return (
          <span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-[11px] font-mono font-semibold bg-cyan-950/80 border border-cyan-500/40 text-cyan-300">
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400" />
            <span>Active Prototype</span>
          </span>
        );
      case 'Ready to Configure':
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
      case 'web':
        return <Globe className="w-3.5 h-3.5 text-blue-400" />;
      case 'mobile':
        return <Smartphone className="w-3.5 h-3.5 text-indigo-400" />;
      case 'software':
        return <Cpu className="w-3.5 h-3.5 text-purple-400" />;
      default:
        return <Layers className="w-3.5 h-3.5 text-blue-400" />;
    }
  };

  const handleCardClick = (project: ProjectItem) => {
    if (project.liveUrl && project.isExternal) {
      window.open(project.liveUrl, '_blank', 'noopener,noreferrer');
    } else {
      setSelectedProjectForModal(project);
    }
  };

  return (
    <section
      id="portfolio"
      className="py-16 sm:py-28 md:py-32 bg-[#05070B] border-t border-white/[0.06] relative scroll-mt-20 overflow-hidden"
    >
      {/* High-Impact Datacenter Architecture Panoramic Backdrop */}
      <SectionTechBackdrop
        imageSrc="/assets/images/cybernetic_data_datacenter_bg_1793119940367.jpg"
        alt="Futuristic cyber server datacenter infrastructure and glowing LED racks"
        objectPosition="center 35%"
        brightness="brightness-[0.78] sm:brightness-[0.84] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/70"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-10 sm:mb-14">
          <div className="max-w-3xl">
            <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
              <Layers className="w-3.5 h-3.5" />
              <span>Projects &amp; Deployments</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
              FEATURED ENGINEERING PORTFOLIO.
            </h2>
            <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
              Explore our real-world software platforms, mobile applications, and digital engineering solutions built to tackle practical challenges in Zimbabwe and beyond.
            </p>
          </div>

          <div className="text-xs font-mono text-slate-400 shrink-0">
            <span className="text-emerald-400 font-semibold">●</span> Live &amp; In-Development Deployments
          </div>
        </div>

        {/* Category Filters Bar */}
        <div className="mb-8 sm:mb-12 flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
          {PROJECT_CATEGORIES.map((cat) => {
            const isActive = activeCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id as ProjectCategory)}
                className={`px-4 py-2 rounded-xl text-xs font-medium transition-all flex items-center gap-2 cursor-pointer whitespace-nowrap ${
                  isActive
                    ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400/40'
                    : 'bg-slate-900/70 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/5'
                }`}
              >
                {getCategoryIcon(cat.id)}
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                    isActive ? 'bg-blue-700 text-white' : 'bg-slate-950 text-slate-400'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className={`rounded-2xl border transition-all duration-300 flex flex-col justify-between overflow-hidden group hover:-translate-y-1 ${
                project.isPlaceholder
                  ? 'bg-slate-950/50 border-dashed border-white/15 hover:border-amber-500/40'
                  : 'bg-slate-950/80 border-white/10 hover:border-blue-500/40 shadow-xl shadow-black/50 hover:shadow-blue-950/20'
              }`}
            >
              {/* Card Thumbnail Area */}
              <div className="relative aspect-video w-full overflow-hidden bg-slate-900 border-b border-white/10">
                <ImageWithFallback
                  src={project.thumbnail}
                  alt={project.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent pointer-events-none" />

                {/* Status Badge in Top Right */}
                <div className="absolute top-3 right-3 z-10">
                  {getStatusBadge(project.status)}
                </div>

                {/* Category in Top Left */}
                <div className="absolute top-3 left-3 z-10">
                  <span className="px-2.5 py-1 rounded-md text-[10px] font-mono uppercase tracking-wider bg-black/70 backdrop-blur-md border border-white/10 text-slate-300">
                    {project.categoryLabel}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 sm:p-6 flex-1 flex flex-col justify-between">
                <div>
                  <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white group-hover:text-blue-300 transition-colors">
                    {project.name}
                  </h3>

                  <p className="text-xs font-mono text-blue-400 mt-1 mb-3">
                    {project.tagline}
                  </p>

                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
                    {project.description}
                  </p>

                  {/* Highlights checklist if present */}
                  {project.highlights && project.highlights.length > 0 && (
                    <ul className="space-y-1.5 mb-4 text-xs text-slate-400">
                      {project.highlights.slice(0, 3).map((item, idx) => (
                        <li key={idx} className="flex items-start gap-1.5">
                          <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                          <span className="leading-snug">{item}</span>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>

                {/* Tech Stack Tags & CTA Button */}
                <div className="pt-4 border-t border-white/5 space-y-4">
                  {/* Technology Pills */}
                  <div className="flex flex-wrap gap-1.5">
                    {project.technologies.map((tech, idx) => (
                      <span
                        key={idx}
                        className="px-2 py-0.5 rounded text-[11px] font-mono text-slate-400 bg-white/[0.03] border border-white/5"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Action Link Button */}
                  {project.liveUrl ? (
                    project.isExternal ? (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 active:scale-[0.98]"
                      >
                        <span>{project.linkText || 'Visit Live Project'}</span>
                        <ExternalLink className="w-3.5 h-3.5" />
                      </a>
                    ) : (
                      <button
                        type="button"
                        onClick={() => setSelectedProjectForModal(project)}
                        className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 transition-all flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98]"
                      >
                        <span>{project.linkText || 'View Project Details'}</span>
                        <ArrowUpRight className="w-3.5 h-3.5 text-blue-400" />
                      </button>
                    )
                  ) : null}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Portfolio Custom Inquiry Strip */}
        <div className="mt-12 sm:mt-16 p-6 rounded-2xl bg-gradient-to-r from-blue-950/30 via-slate-950 to-blue-950/30 border border-blue-500/25 flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-['Syne',sans-serif] text-base font-bold text-white">
              Have an Idea for a Web Platform, Mobile App, or IoT Solution?
            </h4>
            <p className="text-xs text-slate-400">
              Future Pulse Investments engineers production-grade digital solutions tailored to your operational requirements.
            </p>
          </div>

          <a
            href="#services-pricing"
            className="px-5 py-2.5 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/25 shrink-0 whitespace-nowrap"
          >
            Request Quotation →
          </a>
        </div>
      </div>

      {/* Interactive Project Details Modal (for UniStay or other showcased prototypes) */}
      {selectedProjectForModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
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
              {selectedProjectForModal.highlights && selectedProjectForModal.highlights.length > 0 && (
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
                  {selectedProjectForModal.status === 'Live Product' && (
                    <span>This product is actively operating and serving real users in Zimbabwe.</span>
                  )}
                  {selectedProjectForModal.status === 'In Development' && (
                    <span>
                      UniStay is actively being engineered under Future Pulse’s incubation pipeline for campus student housing in Zimbabwe. Alpha testing will commence soon.
                    </span>
                  )}
                  {selectedProjectForModal.status === 'Ready to Configure' && (
                    <span>
                      This is a placeholder card in <code>src/data/projectsData.ts</code>. You can easily populate this entry with your client's project name, screenshot, and live URL.
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

              {selectedProjectForModal.liveUrl && selectedProjectForModal.isExternal ? (
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
