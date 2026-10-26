import React, { useState, useMemo } from 'react';
import {
  ArrowLeft,
  Check,
  Lock,
  Search,
  ArrowUpRight,
  ShieldAlert,
  Cpu,
  Globe,
  Smartphone,
  SearchCode,
  Wrench,
  Layers,
  Info,
} from 'lucide-react';
import { PricingItem, ServiceCategory } from '../types';
import {
  SERVICES_PRICING_ITEMS,
  PRICING_CATEGORIES,
  PRICING_DISCLAIMER,
} from '../data/servicesPricingData';
import { QuoteRequestModal } from './QuoteRequestModal';
import { AdminQuoteGeneratorModal } from './AdminQuoteGeneratorModal';
import { COMPANY_INFO } from '../data/companyData';
import { TechBackgroundDecor } from './TechBackgroundDecor';

interface ServicesPricingViewProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const ServicesPricingView: React.FC<ServicesPricingViewProps> = ({
  onBackToHome,
  onOpenContact,
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ServiceCategory>('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeServiceForQuote, setActiveServiceForQuote] = useState<PricingItem | null>(null);

  const filteredServices = useMemo(() => {
    return SERVICES_PRICING_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === 'all' || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtitle && item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.highlights.some((h) => h.toLowerCase().includes(searchQuery.toLowerCase()));
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (service?: PricingItem) => {
    setActiveServiceForQuote(service || null);
    setQuoteModalOpen(true);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case 'web':
        return <Globe className="w-4 h-4 text-blue-400" />;
      case 'mobile':
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case 'seo':
        return <SearchCode className="w-4 h-4 text-emerald-400" />;
      case 'addons':
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case 'iot':
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  return (
    <div className="relative w-full min-h-screen text-slate-100 pb-20 pt-20 sm:pt-24 overflow-hidden">
      {/* High-Tech Telemetry & Services Blueprint Decor */}
      <TechBackgroundDecor
        variant="telemetry"
        glowColor="emerald"
        glowPosition="top-right"
        telemetryLabel="FP-SERVICES // PRICING-SPEC"
      />
      {/* Top Breadcrumb & Navigation Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-8 sm:mb-12">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 pb-6 border-b border-white/10">
          <button
            onClick={onBackToHome}
            className="group inline-flex items-center gap-2 text-xs font-mono uppercase tracking-widest text-slate-400 hover:text-white transition-colors cursor-pointer"
          >
            <ArrowLeft className="w-4 h-4 text-blue-400 group-hover:-translate-x-1 transition-transform" />
            <span>Return to Future Pulse Overview</span>
          </button>

          <div className="flex items-center gap-3 w-full sm:w-auto justify-between sm:justify-end">
            <span className="text-xs font-mono text-emerald-400">
              USD Pricing · Transparent Starting Rates
            </span>

            {/* Admin Rate Calculator Trigger */}
            <button
              onClick={() => setAdminModalOpen(true)}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 hover:border-white/20 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer shadow-sm"
              title="Open internal quotation builder"
            >
              <Lock className="w-3.5 h-3.5 text-blue-400" />
              <span>Admin Rate Calc</span>
            </button>
          </div>
        </div>
      </div>

      {/* Hero Header Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12 sm:mb-16">
        <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-3">
          <Layers className="w-3.5 h-3.5" />
          <span>Future Pulse Investments · Services Catalog</span>
        </div>

        <h1 className="font-['Syne',sans-serif] text-3xl sm:text-5xl lg:text-6xl font-bold tracking-tight text-white max-w-4xl mx-auto leading-tight sm:leading-[1.15] [text-wrap:balance]">
          Engineering Services &amp; Starting Rates
        </h1>

        <p className="mt-4 sm:mt-6 text-sm sm:text-lg text-slate-300 max-w-3xl mx-auto leading-relaxed [text-wrap:balance]">
          Transparent, upfront pricing in USD for websites, mobile applications, SEO optimization, ongoing digital maintenance, and connected IoT systems. Designed to give founders and enterprises absolute clarity.
        </p>

        {/* Global Key Badges (clean unboxed inline text) */}
        <div className="mt-6 flex flex-wrap items-center justify-center gap-x-6 gap-y-2 text-xs font-mono text-slate-400">
          <span>Displaying in USD ($)</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Starting Baseline Estimates</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Direct WhatsApp &amp; Email Handoff</span>
          <span className="text-slate-600" aria-hidden="true">·</span>
          <span>Rooted in Harare, Zimbabwe</span>
        </div>
      </div>

      {/* Filter Tabs & Search Bar */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-10 sm:mb-14">
        <div className="flex flex-col lg:flex-row items-stretch lg:items-center justify-between gap-4 p-2 rounded-2xl bg-slate-950/80 border border-white/10 backdrop-blur-md">
          {/* Segmented Category Buttons */}
          <div className="flex items-center gap-1.5 overflow-x-auto pb-2 lg:pb-0 scrollbar-none">
            {PRICING_CATEGORIES.map((cat) => {
              const isActive = selectedCategory === cat.id;
              return (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
                  className={`px-3.5 py-2 text-xs font-medium rounded-xl transition-all whitespace-nowrap flex items-center gap-2 cursor-pointer ${
                    isActive
                      ? 'bg-blue-600 text-white shadow-md shadow-blue-600/30 font-semibold'
                      : 'text-slate-400 hover:text-white hover:bg-white/5'
                  }`}
                >
                  {getCategoryIcon(cat.id)}
                  <span>{cat.label}</span>
                  <span
                    className={`text-[10px] font-mono px-1.5 py-0.2 rounded-md ${
                      isActive ? 'bg-blue-700 text-blue-100' : 'bg-slate-900 text-slate-500'
                    }`}
                  >
                    {cat.count}
                  </span>
                </button>
              );
            })}
          </div>

          {/* Quick Search Input */}
          <div className="relative min-w-[240px] lg:w-72">
            <Search className="w-4 h-4 text-slate-500 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search services or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-9 pr-4 py-2 rounded-xl bg-slate-900 border border-white/10 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-blue-400 transition-colors"
            />
            {searchQuery && (
              <button
                onClick={() => setSearchQuery('')}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-xs text-slate-500 hover:text-white"
              >
                ✕
              </button>
            )}
          </div>
        </div>
      </div>

      {/* Services Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        {filteredServices.length === 0 ? (
          <div className="p-12 text-center rounded-2xl bg-slate-950/60 border border-white/5">
            <Info className="w-8 h-8 text-slate-500 mx-auto mb-3" />
            <h3 className="font-['Syne',sans-serif] text-lg font-bold text-white">
              No matching services found
            </h3>
            <p className="text-xs text-slate-400 mt-1 max-w-md mx-auto">
              We couldn't find any services matching "{searchQuery}". Try clearing your search query or selecting "All Services".
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedCategory('all');
              }}
              className="mt-4 px-4 py-2 text-xs font-semibold text-blue-400 hover:text-white bg-slate-900 border border-white/10 rounded-lg transition-colors cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
            {filteredServices.map((service) => {
              const isCustom = service.startingPrice === null;
              return (
                <div
                  key={service.id}
                  className={`group rounded-2xl border transition-all duration-300 flex flex-col justify-between p-6 sm:p-7 relative overflow-hidden ${
                    service.isPopular
                      ? 'bg-gradient-to-b from-blue-950/20 via-slate-900/60 to-slate-950/90 border-blue-500/40 shadow-lg shadow-blue-950/30 hover:border-blue-400'
                      : 'bg-slate-950/70 hover:bg-slate-900/60 border-white/10 hover:border-white/20'
                  }`}
                >
                  {/* Decorative Corner Glow for Popular Cards */}
                  {service.isPopular && (
                    <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 rounded-full blur-2xl pointer-events-none" />
                  )}

                  {/* Card Content Top */}
                  <div>
                    {/* Header Row: Category Tag & Optional Popular Badge */}
                    <div className="flex items-center justify-between gap-2 text-xs text-slate-400 mb-3">
                      <div className="flex items-center gap-1.5 font-mono text-[11px] text-blue-400">
                        {getCategoryIcon(service.category)}
                        <span>{service.categoryLabel}</span>
                      </div>
                      {service.badge && (
                        <span className="text-[11px] font-mono text-emerald-400 font-medium">
                          {service.badge}
                        </span>
                      )}
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white group-hover:text-blue-300 transition-colors">
                      {service.title}
                    </h3>
                    {service.subtitle && (
                      <div className="text-xs font-mono text-slate-400 mt-1">
                        {service.subtitle}
                      </div>
                    )}

                    {/* Price Block */}
                    <div className="mt-5 mb-5 p-4 rounded-xl bg-black/40 border border-white/5 flex items-baseline justify-between">
                      <div>
                        <div className="text-[10px] font-mono uppercase tracking-wider text-slate-500">
                          {isCustom
                            ? 'Pricing Model'
                            : service.billingCycle === 'monthly'
                            ? 'Monthly SLA'
                            : service.billingCycle === 'per platform'
                            ? 'Per App Platform'
                            : 'Starting Baseline'}
                        </div>
                        <div className="text-2xl sm:text-3xl font-bold font-mono tracking-tight text-white tabular-nums mt-0.5">
                          {service.priceDisplay}
                        </div>
                      </div>
                      <div className="text-right text-[11px] font-mono text-slate-400">
                        USD Currency
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                      {service.description}
                    </p>

                    {/* Deliverables / Features Checklist */}
                    <div className="space-y-2.5 pt-2 border-t border-white/5 mb-6">
                      <div className="text-[11px] font-mono uppercase tracking-wider text-slate-400">
                        Key Features &amp; Inclusions:
                      </div>
                      <ul className="space-y-2 text-xs text-slate-300">
                        {service.highlights.map((item, idx) => (
                          <li key={idx} className="flex items-start gap-2">
                            <Check className="w-3.5 h-3.5 text-blue-400 shrink-0 mt-0.5" />
                            <span className="leading-snug">{item}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  {/* Card Bottom: Scope note and Action button */}
                  <div className="pt-4 border-t border-white/5">
                    {service.scopeNote && (
                      <div className="text-[11px] font-mono text-slate-400 leading-relaxed mb-4">
                        <span className="text-slate-500">Note: </span>
                        {service.scopeNote}
                      </div>
                    )}

                    <button
                      type="button"
                      onClick={() => handleOpenQuote(service)}
                      className="w-full py-2.5 px-4 rounded-xl text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-md shadow-blue-600/20 flex items-center justify-center gap-1.5 cursor-pointer active:scale-[0.98] whitespace-nowrap"
                    >
                      <span>Request a Quote</span>
                      <ArrowUpRight className="w-3.5 h-3.5" />
                    </button>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>

      {/* Pricing Transparency & Scope Disclaimer Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 sm:mb-24">
        <div className="rounded-3xl bg-slate-950/90 border border-white/10 p-6 sm:p-10 lg:p-12 backdrop-blur-md relative overflow-hidden">
          <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-4 pb-6 border-b border-white/10 mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-2xl bg-blue-900/30 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
                <ShieldAlert className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-mono text-blue-400 uppercase tracking-widest block">
                  Future Pulse Code of Transparency
                </span>
                <h2 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white">
                  {PRICING_DISCLAIMER.title}
                </h2>
              </div>
            </div>

            <div className="text-xs font-mono text-slate-400">
              Honest Engineering · No Hidden Clauses
            </div>
          </div>

          <p className="text-sm sm:text-base text-slate-300 leading-relaxed mb-8 max-w-3xl">
            {PRICING_DISCLAIMER.intro}
          </p>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
            {PRICING_DISCLAIMER.points.map((point, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white/[0.02] border border-white/5 space-y-2 hover:border-white/10 transition-colors"
              >
                <div className="flex items-center gap-2">
                  <span className="font-mono text-xs text-blue-400 font-bold">0{idx + 1}.</span>
                  <h3 className="font-['Syne',sans-serif] text-base font-bold text-white">
                    {point.title}
                  </h3>
                </div>
                <p className="text-xs sm:text-sm text-slate-400 leading-relaxed">
                  {point.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Custom Consultation & Quote Banner */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="rounded-3xl bg-gradient-to-r from-blue-950/40 via-slate-900 to-blue-950/40 border border-blue-500/30 p-8 sm:p-12 space-y-6">
          <div className="max-w-2xl mx-auto space-y-3">
            <span className="text-xs font-mono text-blue-400 uppercase tracking-widest">
              Need a Custom Assessment?
            </span>
            <h2 className="font-['Syne',sans-serif] text-2xl sm:text-4xl font-bold text-white [text-wrap:balance]">
              Have a Unique Project or Enterprise SLA Requirement?
            </h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Whether you need custom electronics prototyping, multi-tenant software platforms, or bespoke digital infrastructure, Shepherd Mutevedzi and the Future Pulse team are ready to analyze your requirements.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
            <button
              onClick={() => handleOpenQuote()}
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 transition-all shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
            >
              <span>Request Custom Quotation</span>
              <ArrowUpRight className="w-4 h-4" />
            </button>

            <a
              href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}?text=${encodeURIComponent(
                'Hello Shepherd, I am viewing the Future Pulse Services & Pricing page and would like to discuss a custom project.'
              )}`}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-6 py-3 rounded-xl text-xs font-bold uppercase tracking-wider text-slate-200 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 transition-colors flex items-center justify-center gap-2 cursor-pointer"
            >
              <span>Chat Directly on WhatsApp</span>
              <ArrowUpRight className="w-4 h-4 text-emerald-400" />
            </a>
          </div>

          <div className="pt-4 text-xs font-mono text-slate-400">
            Direct Founder Line: {COMPANY_INFO.founder.whatsapp} · {COMPANY_INFO.founder.email}
          </div>
        </div>
      </div>

      {/* Quote Request Modal */}
      <QuoteRequestModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedService={activeServiceForQuote}
      />

      {/* PIN-Protected Admin Quotation Generator Modal */}
      <AdminQuoteGeneratorModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
};
