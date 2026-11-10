import React, { useState } from 'react';
import {
  ArrowDown,
  ArrowUpRight,
  Cpu,
  Layers,
  Lightbulb,
  Workflow,
  Clock,
  ExternalLink,
  PhoneCall,
  Store,
  Users,
} from 'lucide-react';
import { UNILINK_PRODUCT, COMPANY_INFO } from '../data/companyData';
import { UniLinkModal } from './UniLinkModal';
import { UniLinkLogo } from './UniLinkLogo';
import { UniLinkPhoneMockup } from './UniLinkPhoneMockup';
import { SectionTechBackdrop } from './SectionTechBackdrop';

export const OurWorkSection: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <section id="our-work" className="py-16 sm:py-28 md:py-32 bg-[#05070B] border-t border-white/[0.06] relative overflow-hidden">
      {/* High-Impact Global Satellite Mesh Panoramic Backdrop */}
      <SectionTechBackdrop
        imageSrc="/assets/images/global_satellite_mesh_bg_1793119939637.jpg"
        alt="Global satellite communications and telecommunications network mesh"
        objectPosition="center 30%"
        brightness="brightness-[0.80] sm:brightness-[0.86] contrast-[1.12] saturate-[1.12]"
        overlayOpacity="bg-[#05070B]/68"
        driftVariant="zoom"
      />
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div data-reveal className="max-w-3xl mb-10 sm:mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>03</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Product Portfolio</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            FROM IDEAS TO PRODUCTS.
          </h2>
          <p className="mt-3 sm:mt-4 text-sm sm:text-base md:text-lg text-slate-300 leading-relaxed">
            Future Pulse develops and operates dedicated technology products built around real user
            needs. As our engineering capacity scales, our portfolio of physical and digital products
            will continue expanding.
          </p>
        </div>

        {/* Corporate to Product Hierarchy Visual */}
        <div className="mb-12 bg-slate-950/70 border border-slate-800/80 rounded-xl p-4 sm:p-5 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs font-mono">
          <div className="flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-blue-400" />
            <span className="text-white font-semibold">Future Pulse</span>
            <span className="text-slate-500">— Parent Technology Company</span>
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <ArrowDown className="w-3.5 h-3.5 text-blue-400 hidden sm:block rotate-[-90deg]" />
            <ArrowDown className="w-3.5 h-3.5 text-blue-400 sm:hidden" />
            <span className="text-slate-300">Incubating & Operating Ecosystem Product:</span>
            <a
              href="https://www.unilinkbase.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-blue-400 font-semibold underline hover:text-blue-300 flex items-center gap-1"
            >
              <span>UniLink (unilinkbase.com)</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

        {/* Prominent UniLink Showcase Card */}
        <div className="bg-[#080d17] border border-blue-900/40 rounded-3xl overflow-hidden hover:border-blue-500/40 transition-all duration-300 shadow-2xl shadow-blue-950/30 mb-16 relative">
          {/* Subtle brand color accents in the card background */}
          <div className="absolute top-0 right-1/4 w-96 h-96 bg-[#16284F]/30 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-emerald-600/5 rounded-full blur-[100px] pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center p-4 sm:p-8 lg:p-12 relative z-10">
            {/* Left Content Column */}
            <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-6">
              <div>
                {/* Official UniLink Logo & Header */}
                <div className="mb-6">
                  <UniLinkLogo size="lg" showText={true} theme="badge" />
                </div>

                {/* Slogan & Delivery badge */}
                <div className="flex flex-wrap items-center gap-3 mb-4">
                  <span className="text-xs font-mono text-emerald-400 font-semibold px-2.5 py-1 rounded-md bg-emerald-950/80 border border-emerald-500/30 flex items-center gap-1.5">
                    <Clock className="w-3.5 h-3.5" />
                    <span>In as little as 45 Minutes!</span>
                  </span>
                  <span className="text-xs font-mono text-slate-400">
                    Live at{' '}
                    <a
                      href={UNILINK_PRODUCT.websiteUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-400 underline hover:text-blue-300"
                    >
                      unilinkbase.com
                    </a>
                  </span>
                </div>

                <h3 className="font-['Syne',sans-serif] text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-2">
                  {UNILINK_PRODUCT.slogan}
                </h3>

                <p className="text-slate-300 text-sm sm:text-base leading-relaxed mb-6 max-w-2xl">
                  {UNILINK_PRODUCT.description} Connects customers with dedicated messengers who shop
                  from favorite local shops and neighborhood stores and deliver directly to your door
                  in as little as 45 minutes.
                </p>

                {/* 3 Core Roles on UniLink Platform */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-6">
                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
                    <div className="w-8 h-8 rounded-lg bg-blue-950 text-blue-400 flex items-center justify-center mb-2">
                      <Users className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white block">Shoppers</span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      Order essentials from local favorite shops with door delivery.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
                    <div className="w-8 h-8 rounded-lg bg-emerald-950 text-emerald-400 flex items-center justify-center mb-2">
                      <Clock className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white block">Messengers</span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      Earn flexible income fulfilling errand purchases.
                    </span>
                  </div>

                  <div className="p-3.5 rounded-xl bg-slate-900/70 border border-slate-800 text-left">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 text-slate-300 flex items-center justify-center mb-2">
                      <Store className="w-4 h-4" />
                    </div>
                    <span className="text-xs font-bold text-white block">Shop Owners</span>
                    <span className="text-[11px] text-slate-400 leading-tight">
                      Empower local merchants to reach students and residents.
                    </span>
                  </div>
                </div>

                {/* Local Ecosystem Coverage Note */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 mb-6 flex flex-wrap items-center justify-between gap-3 text-xs font-mono">
                  <div className="flex items-center gap-2">
                    <span className="text-slate-400">Shopping Scope:</span>
                    <span className="text-slate-200">
                      Local grocery shops, campus grocers & neighborhood stores
                    </span>
                  </div>
                  <div className="text-emerald-400 font-semibold">
                    EcoCash & Cash on Delivery
                  </div>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row flex-wrap items-stretch sm:items-center gap-3 sm:gap-4 pt-2">
                <button
                  onClick={() => setIsModalOpen(true)}
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-all duration-200 shadow-md shadow-blue-900/30 flex items-center justify-center gap-2 group cursor-pointer active:scale-[0.98]"
                >
                  <span>Explore UniLink Platform</span>
                  <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </button>

                <a
                  href={UNILINK_PRODUCT.websiteUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-5 sm:px-6 py-3 sm:py-3.5 text-xs font-semibold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-slate-700/80 rounded-xl transition-all duration-200 flex items-center justify-center gap-2 active:scale-[0.98]"
                >
                  <span>Open unilinkbase.com</span>
                  <ExternalLink className="w-3.5 h-3.5 text-blue-400" />
                </a>

                <a
                  href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto px-4 py-3 sm:py-3.5 text-xs font-mono text-emerald-400 hover:text-emerald-300 bg-emerald-950/40 hover:bg-emerald-950/70 border border-emerald-600/30 rounded-xl transition-colors flex items-center justify-center gap-1.5"
                >
                  <PhoneCall className="w-3.5 h-3.5" />
                  <span>WhatsApp Help: {COMPANY_INFO.founder.whatsapp}</span>
                </a>
              </div>
            </div>

            {/* Right Mockup Showcase Column (Exact replica of live unilinkbase.com screen) */}
            <div className="lg:col-span-5 flex justify-center">
              <UniLinkPhoneMockup />
            </div>
          </div>
        </div>

        {/* MORE PRODUCTS IN DEVELOPMENT SECTION */}
        <div className="bg-slate-950/70 border border-slate-800/80 rounded-2xl p-8 sm:p-10 tech-grid-subtle">
          <div className="max-w-2xl mb-8">
            <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
              Pipeline & R&D Tracks
            </span>
            <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white mt-1 mb-3">
              MORE PRODUCTS IN DEVELOPMENT
            </h3>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Future Pulse is continuously exploring new opportunities across software,
              electronics, IoT and automation.
            </p>
          </div>

          {/* R&D Incubation Framework */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center mb-3">
                <Layers className="w-4 h-4" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-white mb-1">
                Software Platforms
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Investigating high-utility software tooling and local marketplace mechanics.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Track: Active Prototyping
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center mb-3">
                <Cpu className="w-4 h-4" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-white mb-1">
                Sensors & IoT Telemetry
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Exploring connected sensor nodes for resource and utility monitoring.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Track: Hardware Lab
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center mb-3">
                <Workflow className="w-4 h-4" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-white mb-1">
                Workflow Automation
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Researching automation systems to simplify manual business operations.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Track: System Design
              </div>
            </div>

            <div className="p-5 rounded-xl bg-slate-900/50 border border-slate-800/80">
              <div className="w-8 h-8 rounded-lg bg-slate-800 text-blue-400 flex items-center justify-center mb-3">
                <Lightbulb className="w-4 h-4" />
              </div>
              <h4 className="font-['Syne',sans-serif] text-base font-bold text-white mb-1">
                Emerging Concepts
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed">
                Continuous experimentation on new concepts addressing upcoming challenges.
              </p>
              <div className="mt-4 pt-3 border-t border-white/5 text-[11px] font-mono text-slate-500">
                Track: Exploratory R&D
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* UniLink Detailed Showcase Modal */}
      <UniLinkModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} />
    </section>
  );
};
