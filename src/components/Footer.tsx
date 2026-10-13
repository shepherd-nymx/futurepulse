import React, { useState } from 'react';
import { ArrowUp, Check } from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

interface FooterProps {
  onNavClick: (href: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onNavClick }) => {
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
    { name: 'Home', href: '#home' },
    { name: 'About', href: '#about' },
    { name: 'What We Build', href: '#what-we-build' },
    { name: 'Our Work', href: '#our-work' },
    { name: 'Vision', href: '#vision' },
    { name: 'Founder', href: '#founder' },
    { name: 'Contact', href: '#contact' },
  ];

  return (
    <footer className="bg-[#05070B]/85 backdrop-blur-[2px] border-t border-white/10 text-slate-400 text-sm relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand & Mission Column */}
          <div className="md:col-span-5 space-y-4">
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
              autonomous AI agents, and connected electronic systems. Rooted in Zimbabwe with a long-term engineering vision.
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

          {/* Capabilities & What We Maintain Column */}
          <div className="md:col-span-3 space-y-3">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              We Develop &amp; Maintain
            </div>
            <ul className="space-y-1.5 text-xs text-slate-400 font-mono">
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Softwares &amp; Web Platforms
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Mobile Apps (iOS &amp; Android)
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Autonomous AI Agents
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • Ongoing System Maintenance
                </a>
              </li>
              <li>
                <a href="#what-we-build" onClick={(e) => { e.preventDefault(); onNavClick('#what-we-build'); }} className="hover:text-blue-400 transition-colors">
                  • IoT, Hardware &amp; Circuits
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Navigation Column */}
          <div className="md:col-span-2 space-y-4">
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
                      onNavClick(link.href);
                    }}
                    className="hover:text-white transition-colors py-0.5 inline-block"
                  >
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect / Socials Column */}
          <div className="md:col-span-3 space-y-4">
            <div className="text-xs font-mono uppercase tracking-widest text-slate-300">
              Social Media
            </div>
            <p className="text-xs text-slate-500 leading-relaxed">
              Official Future Pulse communication placeholders:
            </p>

            <div className="flex flex-col gap-2 text-xs font-mono">
              <a
                href={COMPANY_INFO.socialPlaceholders.instagram}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between"
              >
                <span>Instagram</span>
                <span className="text-blue-400 font-semibold">{COMPANY_INFO.socialPlaceholders.instagramHandle} ↗</span>
              </a>

              <a
                href={COMPANY_INFO.socialPlaceholders.tiktok}
                target="_blank"
                rel="noopener noreferrer"
                className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors flex items-center justify-between"
              >
                <span>TikTok</span>
                <span className="text-blue-400 font-semibold">{COMPANY_INFO.socialPlaceholders.tiktokHandle} ↗</span>
              </a>

              <div className="flex gap-2 pt-1">
                {['LinkedIn', 'X'].map((platform) => (
                  <button
                    key={platform}
                    onClick={(e) => handleSocialClick(e, platform)}
                    className="flex-1 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-400 hover:text-white border border-slate-800 hover:border-slate-700 transition-colors cursor-pointer text-center text-[11px]"
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

        {/* Bottom Bar: Copyright & Location */}
        <div className="pt-8 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono text-slate-500">
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
