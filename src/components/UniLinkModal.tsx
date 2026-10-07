import React from 'react';
import {
  X,
  Clock,
  ExternalLink,
  PhoneCall,
  GraduationCap,
  Briefcase,
  Users,
  Building2,
  Hospital,
  HeartHandshake,
  Check,
  Mail,
  Store,
} from 'lucide-react';
import { UNILINK_PRODUCT, COMPANY_INFO } from '../data/companyData';
import { UniLinkLogo } from './UniLinkLogo';

interface UniLinkModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export const UniLinkModal: React.FC<UniLinkModalProps> = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  const targetAudiences = [
    { title: 'Students', desc: 'NUST Main Campus & student accommodation', icon: GraduationCap },
    { title: 'Busy Professionals', desc: 'Saving hours of errand travel', icon: Briefcase },
    { title: 'Families', desc: 'Fresh groceries & household supplies', icon: Users },
    { title: 'Offices & Teams', desc: 'Snacks, beverages & essential provisions', icon: Building2 },
    { title: 'Hospitals', desc: 'Staff refreshments & patient provisions', icon: Hospital },
    { title: 'Care Homes', desc: 'Direct, dependable doorstep errand delivery', icon: HeartHandshake },
  ];

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 bg-black/85 backdrop-blur-md overflow-y-auto animate-in fade-in duration-200"
      onClick={onClose}
    >
      <div
        className="bg-[#080d17] border border-blue-500/30 rounded-3xl max-w-5xl w-full my-8 p-6 sm:p-10 relative shadow-2xl text-slate-100 max-h-[92vh] overflow-y-auto"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-5 right-5 p-2 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors z-10"
          aria-label="Close modal"
        >
          <X className="w-5 h-5" />
        </button>

        {/* Hierarchy Breadcrumb */}
        <div className="flex items-center gap-2 text-xs font-mono text-slate-400 mb-6">
          <span className="text-white font-medium">Future Pulse</span>
          <span className="text-slate-600">/</span>
          <span>Products</span>
          <span className="text-slate-600">/</span>
          <span className="text-blue-400 font-semibold">UniLink</span>
          <span className="text-slate-600">·</span>
          <span className="text-emerald-400">Live Web App at unilinkbase.com</span>
        </div>

        {/* Brand Header Banner with authentic Logo & Flyer Details */}
        <div className="bg-gradient-to-r from-[#0d1627] via-[#101b33] to-[#0f172a] rounded-2xl p-6 sm:p-8 border border-blue-900/40 mb-8 relative overflow-hidden">
          <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 relative z-10">
            <div>
              <UniLinkLogo size="xl" showText={true} theme="badge" className="mb-4" />
              <h2 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight mt-2">
                {UNILINK_PRODUCT.slogan}
              </h2>
              <p className="font-mono text-xs text-blue-300 uppercase tracking-widest mt-1">
                "{UNILINK_PRODUCT.tagline}"
              </p>
              <p className="mt-3 text-sm text-slate-300 max-w-xl leading-relaxed">
                {UNILINK_PRODUCT.description} Order groceries, snacks, toiletries and more from your
                favourite local shops and get them delivered to your door in as little as 45 minutes.
              </p>
            </div>

            {/* Delivery badge & direct link */}
            <div className="flex flex-col gap-3 shrink-0 self-start md:self-auto">
              <div className="bg-[#16284F] border border-blue-400/40 p-4 rounded-xl text-center">
                <span className="text-[10px] uppercase font-mono tracking-wider text-blue-200 block">
                  Delivery Speed
                </span>
                <span className="font-['Syne',sans-serif] text-xl font-black text-white block">
                  In As Little As 45 Mins!
                </span>
              </div>

              <a
                href={UNILINK_PRODUCT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors shadow-md flex items-center justify-center gap-2 text-center"
              >
                <span>Visit unilinkbase.com</span>
                <ExternalLink className="w-3.5 h-3.5" />
              </a>
            </div>
          </div>
        </div>

        {/* 5-Step Process: "HOW UNILINK WORKS" */}
        <div className="mb-10">
          <div className="flex items-center justify-between mb-4">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Operational Protocol
              </span>
              <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white">
                HOW UNILINK WORKS
              </h3>
            </div>
            <span className="text-xs font-mono text-slate-400">5-Stage Link</span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {UNILINK_PRODUCT.stepsDetailed.map((step) => (
              <div
                key={step.stepNumber}
                className="p-4 rounded-xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="w-6 h-6 rounded-full bg-blue-600 text-white font-mono text-xs flex items-center justify-center font-bold">
                      {parseInt(step.stepNumber, 10)}
                    </span>
                    <span className="text-[10px] font-mono text-slate-500 uppercase">
                      Step {step.stepNumber}
                    </span>
                  </div>
                  <h4 className="font-['Syne',sans-serif] text-sm font-bold text-white mb-1 uppercase">
                    {step.title}
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed">{step.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Two-Column Deep Dive: Earn As A Messenger & Local Store Scope */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">
          {/* Earn As A Messenger Track */}
          <div className="p-6 rounded-2xl bg-gradient-to-br from-[#0c1626] to-[#09101d] border border-blue-900/40">
            <span className="text-xs font-mono uppercase tracking-wider text-emerald-400 font-semibold block mb-1">
              Courier Opportunity
            </span>
            <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-3">
              EARN AS A MESSENGER
            </h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4">
              UniLink creates micro-earning opportunities for youth and student messengers with
              bicycles, motorcycles, or on foot who facilitate shopping and reliable delivery.
            </p>

            <div className="space-y-2.5 mb-6">
              {UNILINK_PRODUCT.messengerProgram.benefits.map((benefit) => (
                <div key={benefit} className="flex items-center gap-2 text-xs text-slate-200">
                  <Check className="w-4 h-4 text-emerald-400 shrink-0" />
                  <span>{benefit}</span>
                </div>
              ))}
            </div>

            <div className="p-3 bg-slate-950/70 rounded-xl border border-slate-800 text-xs font-mono flex items-center justify-between">
              <span className="text-slate-400">Join as a Messenger:</span>
              <a
                href={UNILINK_PRODUCT.websiteUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-400 hover:text-blue-300 underline font-semibold"
              >
                Register at unilinkbase.com →
              </a>
            </div>
          </div>

          {/* Payment Options & Local Store Model */}
          <div className="p-6 rounded-2xl bg-slate-900/60 border border-slate-800 flex flex-col justify-between">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
                Local Commerce Rails
              </span>
              <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-3">
                PAY YOUR WAY & LOCAL STORES
              </h3>

              <div className="mb-4">
                <span className="text-xs font-mono text-slate-400 block mb-1.5 uppercase">
                  Payment Channels (Zimbabwe)
                </span>
                <div className="flex items-center gap-2">
                  <span className="px-3 py-1.5 rounded-lg bg-emerald-950 text-emerald-300 border border-emerald-500/40 text-xs font-bold font-mono">
                    EcoCash (Mobile Money)
                  </span>
                  <span className="px-3 py-1.5 rounded-lg bg-slate-800 text-slate-200 border border-slate-700 text-xs font-bold font-mono">
                    Cash On Delivery
                  </span>
                </div>
              </div>

              <div>
                <span className="text-xs font-mono text-slate-400 block mb-1.5 uppercase">
                  Shopping Coverage
                </span>
                <div className="flex flex-wrap items-center gap-2 text-xs">
                  {UNILINK_PRODUCT.localStores.map((store) => (
                    <span
                      key={store}
                      className="px-2.5 py-1 rounded-md bg-slate-950 border border-slate-800 text-slate-300 font-medium"
                    >
                      {store}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-white/5 text-xs font-mono text-slate-400 flex flex-wrap items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <a
                  href={COMPANY_INFO.socialPlaceholders.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>IG: <strong className="text-blue-400">unili.ink</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
                <span className="text-slate-700">·</span>
                <a
                  href={COMPANY_INFO.socialPlaceholders.tiktok}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-300 hover:text-white flex items-center gap-1"
                >
                  <span>TikTok: <strong className="text-blue-400">@unilinkgd</strong></span>
                  <ExternalLink className="w-3 h-3 text-slate-500" />
                </a>
              </div>

              <div className="flex items-center gap-1">
                <span>WhatsApp:</span>
                <a
                  href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-emerald-400 font-semibold hover:underline flex items-center gap-1"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>{COMPANY_INFO.founder.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Target Audience: "UNILINK IS PERFECT FOR" */}
        <div className="mb-8">
          <span className="text-xs font-mono uppercase tracking-wider text-blue-400 block mb-1">
            Community Coverage
          </span>
          <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white mb-4">
            UNILINK IS PERFECT FOR
          </h3>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-2.5">
            {targetAudiences.map((aud) => {
              const Icon = aud.icon;
              return (
                <div
                  key={aud.title}
                  className="p-3 bg-slate-950/70 border border-slate-800/80 rounded-xl text-center flex flex-col items-center justify-center"
                >
                  <Icon className="w-5 h-5 text-blue-400 mb-1.5" />
                  <span className="text-xs font-bold text-white block">{aud.title}</span>
                  <span className="text-[10px] text-slate-400 font-mono leading-tight mt-0.5">
                    {aud.desc}
                  </span>
                </div>
              );
            })}
          </div>
        </div>

        {/* Corporate Parenting Statement & Contact */}
        <div className="pt-6 border-t border-white/10 flex flex-col sm:flex-row sm:items-center justify-between gap-4 text-xs font-mono text-slate-400">
          <div>
            Parent Entity: <span className="text-white font-semibold">Future Pulse</span> · Founder:{' '}
            <span className="text-slate-200">{COMPANY_INFO.founder.name}</span>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`mailto:${COMPANY_INFO.founder.email}`}
              className="px-3.5 py-2 bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Mail className="w-3.5 h-3.5 text-blue-400" />
              <span>{COMPANY_INFO.founder.email}</span>
            </a>
            <a
              href={UNILINK_PRODUCT.websiteUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white rounded-lg transition-colors flex items-center gap-1.5 font-semibold"
            >
              <span>Visit unilinkbase.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors cursor-pointer"
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
