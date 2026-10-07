import React, { useState } from 'react';
import {
  Mail,
  Check,
  Phone,
  MessageSquare,
  Copy,
  GraduationCap,
  Cpu,
  Layers,
  ExternalLink,
} from 'lucide-react';
import { COMPANY_INFO } from '../data/companyData';

export const FounderSection: React.FC = () => {
  const [copiedChannel, setCopiedChannel] = useState<string | null>(null);

  const handleCopy = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedChannel(label);
    setTimeout(() => setCopiedChannel(null), 2500);
  };

  return (
    <section id="founder" className="py-24 sm:py-32 bg-[#05070B] border-t border-white/5 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>06</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Leadership & Engineering</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            THE PERSON BEHIND THE BUILD
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Future Pulse is founded and engineered by Shepherd Mutevedzi — combining electronic
            systems engineering with grounded Zimbabwean community problem-solving.
          </p>
        </div>

        {/* Founder Showcase Card (Clean Engineering Presentation, No Image) */}
        <div className="bg-[#090d15] border border-slate-800/90 rounded-3xl overflow-hidden shadow-2xl relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-0 items-stretch">
            {/* Left: Minimalist Technical Identity Card */}
            <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-between bg-gradient-to-b from-[#0a1120] to-[#070b14] border-b lg:border-b-0 lg:border-r border-slate-800/80 tech-grid-subtle">
              <div>
                {/* Tech Monogram Emblem */}
                <div className="w-20 h-20 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-500/40 flex items-center justify-center text-white shadow-xl mb-6 relative overflow-hidden group">
                  <span className="font-['Syne',sans-serif] text-3xl font-extrabold tracking-wider text-blue-300">
                    SM
                  </span>
                  <div className="absolute inset-0 bg-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>

                <div className="space-y-1 mb-6">
                  <span className="text-[11px] font-mono uppercase tracking-widest text-blue-400 block">
                    Lead Builder & Founder
                  </span>
                  <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white">
                    {COMPANY_INFO.founder.name}
                  </h3>
                  <div className="flex items-center gap-1.5 text-xs font-mono text-slate-400 pt-1">
                    <GraduationCap className="w-4 h-4 text-blue-400 shrink-0" />
                    <span>NUST Electronic Engineering</span>
                  </div>
                </div>

                {/* Academic & Technical Tags */}
                <div className="space-y-2.5 pt-4 border-t border-white/5 text-xs font-mono">
                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block uppercase text-[10px] mb-0.5">
                      Academic Institution
                    </span>
                    <span className="text-slate-200 font-medium">
                      National University of Science & Technology (NUST)
                    </span>
                  </div>

                  <div className="p-3 rounded-xl bg-slate-900/60 border border-slate-800/80">
                    <span className="text-slate-500 block uppercase text-[10px] mb-0.5">
                      Core Engineering Discipline
                    </span>
                    <span className="text-slate-200 font-medium">
                      Electronic Systems & Software Architecture
                    </span>
                  </div>
                </div>
              </div>

              {/* Status Note */}
              <div className="mt-8 pt-6 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-slate-400">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
                <span>Active in R&D and platform development</span>
              </div>
            </div>

            {/* Right: Founder Profile & Direct Contact Channels */}
            <div className="lg:col-span-7 p-8 sm:p-12 space-y-6">
              <div>
                <span className="text-xs font-mono uppercase tracking-widest text-blue-400 font-semibold">
                  Engineering Leadership
                </span>
                <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-1">
                  Shepherd Mutevedzi
                </h3>
                <div className="flex flex-wrap items-center gap-2 mt-1 text-xs font-mono text-slate-300">
                  <span>Electronic Engineering Student</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span className="text-blue-300">NUST Zimbabwe</span>
                  <span className="text-slate-600" aria-hidden="true">·</span>
                  <span>Technology Entrepreneur</span>
                </div>
              </div>

              {/* Founder description */}
              <p className="text-base sm:text-lg text-slate-200 leading-relaxed font-normal">
                {COMPANY_INFO.founder.bio}
              </p>

              {/* Founder Quote */}
              <div className="bg-slate-900/60 border-l-2 border-blue-400 p-5 rounded-r-xl">
                <p className="text-sm text-slate-300 italic leading-relaxed">
                  "{COMPANY_INFO.founder.quote}"
                </p>
              </div>

              {/* Direct Founder Contact Cards */}
              <div className="pt-2">
                <div className="text-xs font-mono text-slate-400 uppercase tracking-wider mb-3">
                  Direct Founder Contact Channels
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {/* WhatsApp Direct */}
                  <a
                    href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-950 border border-emerald-600/40 hover:border-emerald-500 transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-emerald-300 uppercase tracking-wider">
                        WhatsApp
                      </span>
                      <MessageSquare className="w-4 h-4 text-emerald-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {COMPANY_INFO.founder.whatsapp}
                      </span>
                      <span className="text-[10px] font-mono text-emerald-400 mt-0.5 block">
                        Chat directly →
                      </span>
                    </div>
                  </a>

                  {/* Phone Call Direct */}
                  <a
                    href={`tel:${COMPANY_INFO.founder.phone.replace(/[^0-9+]/g, '')}`}
                    className="p-3.5 rounded-xl bg-blue-950/60 hover:bg-blue-950 border border-blue-500/40 hover:border-blue-400 transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-blue-300 uppercase tracking-wider">
                        Phone Call
                      </span>
                      <Phone className="w-4 h-4 text-blue-400 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block">
                        {COMPANY_INFO.founder.phone}
                      </span>
                      <span className="text-[10px] font-mono text-blue-400 mt-0.5 block">
                        Direct line →
                      </span>
                    </div>
                  </a>

                  {/* Direct Email */}
                  <a
                    href={`mailto:${COMPANY_INFO.founder.email}`}
                    className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-900 border border-slate-700/80 hover:border-slate-500 transition-all text-left flex flex-col justify-between group cursor-pointer"
                  >
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                        Direct Email
                      </span>
                      <Mail className="w-4 h-4 text-slate-300 group-hover:scale-110 transition-transform" />
                    </div>
                    <div>
                      <span className="text-xs font-bold text-white block truncate">
                        {COMPANY_INFO.founder.email}
                      </span>
                      <span className="text-[10px] font-mono text-slate-400 mt-0.5 block">
                        Send message →
                      </span>
                    </div>
                  </a>
                </div>

                {/* Social Channels: Instagram (unili.ink) & TikTok (@unilinkgd) */}
                <div className="mt-4 pt-4 border-t border-white/5 flex flex-wrap items-center gap-3">
                  <span className="text-xs font-mono text-slate-500">Social Channels:</span>

                  <a
                    href={COMPANY_INFO.socialPlaceholders.instagram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>Instagram: {COMPANY_INFO.socialPlaceholders.instagramHandle}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <a
                    href={COMPANY_INFO.socialPlaceholders.tiktok}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 hover:border-slate-700 text-xs font-mono flex items-center gap-1.5 transition-colors"
                  >
                    <span>TikTok: {COMPANY_INFO.socialPlaceholders.tiktokHandle}</span>
                    <ExternalLink className="w-3 h-3 text-slate-400" />
                  </a>

                  <button
                    onClick={() =>
                      handleCopy(
                        `Shepherd Mutevedzi | Future Pulse\nPhone/WhatsApp: ${COMPANY_INFO.founder.phone}\nEmail: ${COMPANY_INFO.founder.email}\nInstagram: ${COMPANY_INFO.socialPlaceholders.instagramHandle}\nTikTok: ${COMPANY_INFO.socialPlaceholders.tiktokHandle}`,
                        'Contact Card'
                      )
                    }
                    className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-slate-800 text-xs font-mono flex items-center gap-1.5 transition-colors cursor-pointer"
                  >
                    <Copy className="w-3 h-3" />
                    <span>Copy Contact Card</span>
                  </button>

                  {copiedChannel && (
                    <span className="text-blue-400 text-xs font-mono flex items-center gap-1 animate-in fade-in">
                      <Check className="w-3.5 h-3.5" />
                      <span>{copiedChannel} copied to clipboard!</span>
                    </span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
