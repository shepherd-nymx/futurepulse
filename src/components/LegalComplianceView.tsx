import React, { useState, useEffect } from 'react';
import {
  ArrowLeft,
  ShieldCheck,
  FileText,
  AlertCircle,
  Printer,
  Search,
  Scale,
  Lock,
  ExternalLink,
  ChevronRight,
  Mail,
  MessageSquare,
} from 'lucide-react';
import { LEGAL_POLICIES, LegalPolicy } from '../data/legalPoliciesData';
import { COMPANY_INFO } from '../data/companyData';
import { SectionTechBackdrop } from './SectionTechBackdrop';

interface LegalComplianceViewProps {
  initialPolicyId?: string;
  onBackToHome: () => void;
  onNavigateToServices?: () => void;
}

export const LegalComplianceView: React.FC<LegalComplianceViewProps> = ({
  initialPolicyId = 'privacy-policy',
  onBackToHome,
  onNavigateToServices,
}) => {
  const [activePolicyId, setActivePolicyId] = useState<string>(initialPolicyId);
  const [searchQuery, setSearchQuery] = useState('');

  // Sync state if initialPolicyId prop changes
  useEffect(() => {
    if (initialPolicyId) {
      const exists = LEGAL_POLICIES.some((p) => p.id === initialPolicyId || p.slug === initialPolicyId);
      if (exists) {
        const found = LEGAL_POLICIES.find((p) => p.id === initialPolicyId || p.slug === initialPolicyId);
        if (found) {
          setActivePolicyId(found.id);
        }
      }
    }
  }, [initialPolicyId]);

  const activePolicy: LegalPolicy =
    LEGAL_POLICIES.find((p) => p.id === activePolicyId) || LEGAL_POLICIES[0];

  const handleSelectPolicy = (id: string, slug: string) => {
    setActivePolicyId(id);
    window.location.hash = `#${slug}`;
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handlePrint = () => {
    window.print();
  };

  // Helper to visually render placeholders with high contrast caution tag
  const renderTextWithPlaceholders = (text: string) => {
    // Matches text inside square brackets [ ... ]
    const parts = text.split(/(\[[^\]]+\])/g);
    return parts.map((part, index) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span
            key={index}
            className="inline-block my-0.5 px-2 py-0.5 rounded font-mono text-[11px] sm:text-xs text-amber-300 bg-amber-950/60 border border-amber-500/40 font-medium"
            title="Verified company registry placeholder pending formal documentation"
          >
            {part}
          </span>
        );
      }
      return part;
    });
  };

  return (
    <div className="studio-legal relative w-full min-h-screen text-slate-100 pb-20 pt-20 sm:pt-24 overflow-hidden bg-[#05070B]">
      {/* High-Impact Security & Legal Architecture Panoramic Backdrop */}
      <SectionTechBackdrop
        imageSrc="/assets/images/quantum_cyber_circuit_bg_1793119308617.jpg"
        alt="Cryptographic circuitry and systems integrity architecture"
        objectPosition="center 30%"
        brightness="brightness-[0.76] sm:brightness-[0.82] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/72"
      />
      {/* Top Breadcrumb Navigation */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <div className="flex flex-wrap items-center gap-3">
            <button
              onClick={onBackToHome}
              className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer"
            >
              <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
              <span>Return Home</span>
            </button>
            {onNavigateToServices && (
              <>
                <span className="text-slate-600">/</span>
                <button
                  onClick={onNavigateToServices}
                  className="text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-blue-400 transition-colors cursor-pointer"
                >
                  Services &amp; Pricing
                </button>
              </>
            )}
          </div>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-mono text-emerald-400">
              Laws of Zimbabwe · Cyber &amp; Consumer Protection
            </span>

            <button
              onClick={handlePrint}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer shadow-sm"
              title="Print active policy documentation"
            >
              <Printer className="w-3.5 h-3.5 text-blue-400" />
              <span className="hidden xs:inline">Print Document</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 studio-page-intro text-center mb-10 sm:mb-14">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
          <Scale className="w-4 h-4" />
          <span>Future Pulse Investments · Compliance Center</span>
        </div>

        <h1 className="font-['Syne',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-[1.15] [text-wrap:balance]">
          Clarity, in writing.
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-base md:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
          Statutory compliance disclosures, customer rights guarantees, and data protection terms formulated under the laws of Zimbabwe, including the Cyber and Data Protection Act [Chapter 12:07] and the Consumer Protection Act [Chapter 14:14].
        </p>

        {/* Global Key Notice Badges */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-xs font-mono text-slate-400">
          <span>Republic of Zimbabwe</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>CDPA [Chapter 12:07]</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>CPA [Chapter 14:14]</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>POTRAZ Regulatory Notices</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Zero Blanket Waivers</span>
        </div>
      </div>

      {/* Main Two-Column Layout */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Policy Navigation Sidebar (Desktop 4 Cols, Mobile Top 12) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="p-4 sm:p-5 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md sticky top-24">
              <div className="flex items-center justify-between pb-3 mb-3 border-b border-white/10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400">
                  Select Policy Document
                </span>
                <span className="text-[10px] font-mono text-blue-400">
                  {LEGAL_POLICIES.length} Available
                </span>
              </div>

              {/* Policy Buttons List */}
              <nav className="flex flex-col gap-1.5" aria-label="Legal policies navigation">
                {LEGAL_POLICIES.map((policy) => {
                  const isActive = policy.id === activePolicy.id;
                  return (
                    <button
                      key={policy.id}
                      onClick={() => handleSelectPolicy(policy.id, policy.slug)}
                      className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between cursor-pointer group ${
                        isActive
                          ? 'bg-blue-600 text-white font-semibold shadow-md shadow-blue-600/30 border border-blue-400/40'
                          : 'bg-slate-900/60 hover:bg-slate-900 text-slate-300 hover:text-white border border-white/5 hover:border-white/15'
                      }`}
                    >
                      <div className="min-w-0 pr-2">
                        <div className="text-xs sm:text-sm font-medium truncate">
                          {policy.shortTitle}
                        </div>
                        <div
                          className={`text-[10px] font-mono truncate mt-0.5 ${
                            isActive ? 'text-blue-100' : 'text-slate-500 group-hover:text-slate-400'
                          }`}
                        >
                          {policy.applicableLaw}
                        </div>
                      </div>
                      <ChevronRight
                        className={`w-4 h-4 shrink-0 transition-transform ${
                          isActive
                            ? 'text-white translate-x-0.5'
                            : 'text-slate-600 group-hover:text-slate-400'
                        }`}
                      />
                    </button>
                  );
                })}
              </nav>

              {/* Regulatory Disclosure Box in Sidebar */}
              <div className="mt-5 p-3.5 rounded-xl bg-amber-950/30 border border-amber-500/30 text-xs font-mono text-amber-200/90 leading-relaxed">
                <div className="flex items-center gap-1.5 font-bold uppercase tracking-wider text-amber-400 mb-1">
                  <AlertCircle className="w-3.5 h-3.5 shrink-0" />
                  <span>Statutory Notice</span>
                </div>
                Placeholders marked with <span className="bg-amber-950 px-1 py-0.2 rounded border border-amber-500/40 text-amber-300">[brackets]</span> designate corporate records awaiting formal registrar stamping.
              </div>
            </div>
          </div>

          {/* Active Policy Content Container (Desktop 8 Cols) */}
          <div className="lg:col-span-8">
            <article key={activePolicy.id} data-reveal className="rounded-3xl bg-slate-950/90 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-md shadow-2xl relative">
              {/* Document Header */}
              <header className="pb-8 border-b border-white/10 space-y-4">
                <div className="flex flex-wrap items-center justify-between gap-2">
                  <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-md bg-blue-950/60 border border-blue-500/30 text-xs font-mono text-blue-400">
                    <ShieldCheck className="w-3.5 h-3.5" />
                    <span>{activePolicy.statusBadge}</span>
                  </div>
                  <div className="text-xs font-mono text-slate-400">
                    Governing Law: <span className="text-white">{activePolicy.applicableLaw}</span>
                  </div>
                </div>

                <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-bold text-white tracking-tight leading-tight">
                  {activePolicy.title}
                </h2>

                <div className="flex flex-wrap items-center gap-4 text-xs font-mono text-slate-400">
                  <span>Last Updated: {activePolicy.lastUpdated}</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Jurisdiction: Harare, Republic of Zimbabwe</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Future Pulse Investments</span>
                </div>
              </header>

              {/* Verification & Regulatory Notice Box */}
              <div className="my-6 p-4 sm:p-5 rounded-2xl bg-blue-950/30 border border-blue-500/30 flex items-start gap-3">
                <AlertCircle className="w-5 h-5 text-blue-400 shrink-0 mt-0.5" />
                <div className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
                  {renderTextWithPlaceholders(activePolicy.verificationNotice)}
                </div>
              </div>

              {/* Policy Overview */}
              <div className="py-4 text-sm sm:text-base text-slate-300 leading-relaxed font-sans border-b border-white/5">
                <p>{renderTextWithPlaceholders(activePolicy.overview)}</p>
              </div>

              {/* Table of Contents within the Active Policy */}
              <div className="my-6 p-4 rounded-xl bg-white/[0.02] border border-white/5">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Table of Contents
                </div>
                <div className="flex flex-wrap gap-2">
                  {activePolicy.sections.map((section, idx) => (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className="text-xs font-mono text-slate-400 hover:text-blue-400 px-2.5 py-1 rounded-md bg-slate-900 border border-white/5 hover:border-white/10 transition-colors"
                    >
                      {section.title.split('.')[0] || `Section ${idx + 1}`}
                    </a>
                  ))}
                </div>
              </div>

              {/* Policy Sections */}
              <div className="space-y-10 pt-4">
                {activePolicy.sections.map((section) => (
                  <section
                    key={section.id}
                    id={section.id}
                    className="scroll-mt-28 space-y-4 pt-4 border-t border-white/5"
                  >
                    <h3 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white tracking-tight flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-400 shrink-0" />
                      <span>{section.title}</span>
                    </h3>

                    {section.paragraphs.map((para, pIdx) => (
                      <p
                        key={pIdx}
                        className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans"
                      >
                        {renderTextWithPlaceholders(para)}
                      </p>
                    ))}

                    {/* Bullet Points */}
                    {section.bulletPoints && section.bulletPoints.length > 0 && (
                      <ul className="space-y-2.5 pl-2 pt-1 text-xs sm:text-sm text-slate-300">
                        {section.bulletPoints.map((item, bIdx) => (
                          <li key={bIdx} className="flex items-start gap-2.5">
                            <span className="w-1.5 h-1.5 rounded-full bg-blue-500/80 shrink-0 mt-2" />
                            <span className="leading-relaxed">
                              {renderTextWithPlaceholders(item)}
                            </span>
                          </li>
                        ))}
                      </ul>
                    )}

                    {/* Subsections */}
                    {section.subsections && section.subsections.length > 0 && (
                      <div className="space-y-4 pt-2 pl-2 sm:pl-4 border-l border-white/10">
                        {section.subsections.map((sub, sIdx) => (
                          <div key={sIdx} className="space-y-1.5">
                            <h4 className="font-['Syne',sans-serif] text-xs sm:text-sm font-bold text-slate-200">
                              {sub.subtitle}
                            </h4>
                            {sub.text.map((subP, spIdx) => (
                              <p
                                key={spIdx}
                                className="text-xs text-slate-400 leading-relaxed font-sans"
                              >
                                {renderTextWithPlaceholders(subP)}
                              </p>
                            ))}
                          </div>
                        ))}
                      </div>
                    )}
                  </section>
                ))}
              </div>

              {/* Bottom Inquiries Card */}
              <div className="mt-12 pt-8 border-t border-white/10 rounded-2xl bg-slate-900/40 p-5 sm:p-6 border border-white/5 space-y-4">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <h4 className="font-['Syne',sans-serif] text-sm sm:text-base font-bold text-white">
                      Legal &amp; Compliance Inquiries
                    </h4>
                    <p className="text-xs text-slate-400">
                      Submit statutory data access requests, dispute notices, or policy queries directly to our compliance desk.
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap items-center gap-3 pt-1">
                  <a
                    href="mailto:unilinkbase@gmail.com?subject=Legal%20Compliance%20Inquiry"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-white bg-blue-600 hover:bg-blue-500 transition-colors flex items-center gap-1.5"
                  >
                    <Mail className="w-3.5 h-3.5" />
                    <span>Email unilinkbase@gmail.com</span>
                  </a>

                  <a
                    href="https://wa.me/263782627990?text=Hello%20Future%20Pulse%2C%20I%20have%20a%20legal%20or%20compliance%20inquiry."
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-4 py-2 rounded-xl text-xs font-semibold text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors flex items-center gap-1.5"
                  >
                    <MessageSquare className="w-3.5 h-3.5 text-emerald-400" />
                    <span>WhatsApp Compliance Desk (+263 78 262 7990)</span>
                  </a>
                </div>

                <div className="text-[11px] font-mono text-slate-500">
                  Future Pulse Investments · Harare, Zimbabwe · Governing Law: Laws of Zimbabwe
                </div>
              </div>
            </article>
          </div>
        </div>
      </div>
    </div>
  );
};
