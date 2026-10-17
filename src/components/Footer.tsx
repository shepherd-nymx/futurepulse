import React, { useState } from 'react';
import { ArrowUp, Check, Lock, Scale, ShieldCheck, FileText } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';
import { LEGAL_POLICIES } from '../data/legalPoliciesData';

interface FooterProps {
  onNavClick: (href: string, view?: 'home' | 'services') => void;
  onOpenAdminCalc?: () => void;
  onOpenLegal?: (policySlug: string) => void;
}

export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenAdminCalc,
  onOpenLegal,
}) => {
  const [socialNotice, setSocialNotice] = useState<string | null>(null);

  const handleSocialClick = (e: React.MouseEvent, platform: string) => {
    e.preventDefault();
    setSocialNotice(`Future Pulse ${platform} handle registered. Official profile links will be activated as channels go live.`);
    setTimeout(() => setSocialNotice(null), 3000);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const navLinks = [
    { name: 'Home', href: '#home', view: 'home' as const },
    { name: 'Services & Pricing', href: '#services-pricing', view: 'services' as const },
    { name: 'About', href: '#about', view: 'home' as const },
    { name: 'What We Build', href: '#what-we-build', view: 'home' as const },
    { name: 'Portfolio', href: '#portfolio', view: 'home' as const },
    { name: 'Vision', href: '#vision', view: 'home' as const },
    { name: 'Founder', href: '#founder', view: 'home' as const },
    { name: 'Contact', href: '#contact', view: 'home' as const },
  ];

  return (
    <footer className="bg-[#05070B]/90 backdrop-blur-[2px] border-t border-white/10 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 sm:gap-12 mb-10 sm:mb-16">
          {/* Brand & Mission Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-blue-500/40 flex items-center justify-center overflow-hidden shadow-md shadow-blue-500/10 shrink-0">
                <img
                  src="/future-pulse-logo.png"
                  alt="Future Pulse Investments Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div>
                <span className="font-['Syne',sans-serif] text-xl font-bold tracking-tight text-white uppercase block leading-none">
                  {COMPANY_INFO.name}
                </span>
                <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase block mt-1">
                  Investments
                </span>
              </div>
            </div>

            <p className="font-['Syne',sans-serif] text-base font-semibold text-slate-200">
              "{COMPANY_INFO.tagline}"
            </p>

            <p className="text-xs sm:text-sm text-slate-400 leading-relaxed max-w-sm">
              We develop and maintain bespoke software platforms, iOS &amp; Android mobile applications,
              online autonomous AI agents, and connected electronic systems. Rooted in Zimbabwe with a long-term engineering vision.
            </p>

            <div className="pt-2 text-xs font-mono text-slate-400 space-y-1">
              <div>
                Founder: <span className="text-white">{COMPANY_INFO.founder.name}</span> · {COMPANY_INFO.headquarters}
              </div>
              <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-slate-300">
                <a
                  href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-emerald-400 transition-colors"
                >
                  WhatsApp: {COMPANY_INFO.founder.whatsapp}
                </a>
                <span className="text-slate-600">·</span>
                <a
                  href={`mailto:${COMPANY_INFO.founder.email}`}
                  className="hover:text-blue-400 transition-colors"
                >
                  {COMPANY_INFO.founder.email}
                </a>
              </div>
            </div>
          </div>

          {/* Capabilities Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Engineering Scope
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Software &amp; Web
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Mobile (iOS/Android)
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Online AI Agents
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Managed Maintenance
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • IoT &amp; Electronics
                </a>
              </li>
            </ul>

            <div className="pt-2">
              <a
                href="#services-pricing"
                onClick={(e) => { e.preventDefault(); onNavClick('#services-pricing', 'services'); }}
                className="text-xs font-mono text-emerald-400 hover:text-emerald-300 transition-colors flex items-center gap-1"
              >
                <span>View Rate Catalog ($) →</span>
              </a>
            </div>
          </div>

          {/* Quick Navigation Column (2 Cols) */}
          <div className="lg:col-span-2 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Navigation
            </div>
            <ul className="space-y-1.5 text-xs font-medium">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      onNavClick(link.href, link.view);
                    }}
                    className="hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
              {onOpenAdminCalc && (
                <li className="pt-2">
                  <button
                    onClick={onOpenAdminCalc}
                    className="text-slate-400 hover:text-blue-400 transition-colors flex items-center gap-1.5 font-mono text-[11px] cursor-pointer"
                  >
                    <Lock className="w-3 h-3 text-blue-400" />
                    <span>Admin Calculator</span>
                  </button>
                </li>
              )}
            </ul>
          </div>

          {/* Legal & Compliance Column (4 Cols) */}
          <div className="lg:col-span-4 space-y-3">
            <div className="flex items-center justify-between">
              <div className="text-xs font-mono uppercase tracking-widest text-slate-300 flex items-center gap-1.5">
                <Scale className="w-3.5 h-3.5 text-blue-400" />
                <span>Legal &amp; Compliance (Zimbabwe)</span>
              </div>
            </div>

            <p className="text-[11px] text-slate-500 leading-relaxed font-sans">
              Statutory disclosures under the Cyber and Data Protection Act [Chapter 12:07] and Consumer Protection Act [Chapter 14:14]:
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-2 gap-y-1.5 text-xs font-mono">
              {LEGAL_POLICIES.map((policy) => (
                <button
                  key={policy.id}
                  onClick={() => onOpenLegal && onOpenLegal(policy.slug)}
                  className="text-left text-slate-400 hover:text-blue-400 transition-colors py-0.5 flex items-center gap-1 cursor-pointer truncate"
                  title={`${policy.title} (${policy.applicableLaw})`}
                >
                  <span className="text-blue-500/70">·</span>
                  <span className="truncate">{policy.shortTitle}</span>
                </button>
              ))}
            </div>

            {/* Social Links Row */}
            <div className="pt-3 border-t border-white/5 space-y-2">
              <div className="text-[10px] font-mono uppercase tracking-widest text-slate-400">
                Communication Channels
              </div>
              <div className="flex flex-wrap gap-2 text-xs font-mono">
                <a
                  href={COMPANY_INFO.socialPlaceholders.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-[11px] flex items-center gap-1"
                >
                  <span>Instagram</span>
                  <span className="text-blue-400 font-semibold">{COMPANY_INFO.socialPlaceholders.instagramHandle}</span>
                </a>
                <a
                  href={COMPANY_INFO.socialPlaceholders.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 text-[11px] flex items-center gap-1"
                >
                  <span>TikTok</span>
                  <span className="text-blue-400 font-semibold">{COMPANY_INFO.socialPlaceholders.tiktokHandle}</span>
                </a>
                {['LinkedIn', 'X'].map((platform) => (
                  <button
                    key={platform}
                    onClick={(e) => handleSocialClick(e, platform)}
                    className="px-2.5 py-1 rounded-md bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-white/10 text-[11px] cursor-pointer"
                  >
                    {platform}
                  </button>
                ))}
              </div>
            </div>

            {socialNotice && (
              <div className="p-2.5 bg-blue-950/60 border border-blue-500/30 rounded-lg text-xs font-mono text-blue-300 flex items-start gap-2 animate-in fade-in">
                <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                <span>{socialNotice}</span>
              </div>
            )}
          </div>
        </div>

        {/* Regulatory Safeguards Notice Strip */}
        <div className="pt-6 pb-6 border-t border-white/10 text-[11px] font-mono text-slate-400 leading-relaxed bg-white/[0.01] px-4 rounded-xl border border-white/5 mb-8">
          <div className="flex items-start gap-2">
            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
            <div>
              <span className="text-slate-300 font-semibold">Statutory Governance &amp; Regulatory Notice: </span>
              Future Pulse Investments is governed by the laws of the Republic of Zimbabwe. Data protection practices align with the Cyber and Data Protection Act [Chapter 12:07] under the supervisory mandate of POTRAZ. Consumer rights are preserved under the Consumer Protection Act [Chapter 14:14]. Corporate entity records and DPO notifications are in process of formal regulatory recording.
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-4 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
          <div>
            © 2026 {COMPANY_INFO.legalName || 'Future Pulse Investments'}. All rights reserved.
          </div>

          <div className="flex items-center gap-4">
            <span>{COMPANY_INFO.headquarters}</span>
            <span className="text-slate-700" aria-hidden="true">·</span>
            <span>Early Stage Foundation</span>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-md hover:bg-slate-800 text-slate-400 hover:text-white transition-colors ml-2"
              aria-label="Scroll back to top"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
