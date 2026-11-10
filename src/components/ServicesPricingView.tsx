import React, { useState, useMemo } from "react";
import {
  ArrowLeft,
  Check,
  Lock,
  Search,
  ArrowUpRight,
  Cpu,
  Globe,
  Smartphone,
  SearchCode,
  Wrench,
  Layers,
  Info,
} from "lucide-react";
import { PricingItem, ServiceCategory } from "../types";
import {
  SERVICES_PRICING_ITEMS,
  PRICING_CATEGORIES,
  PRICING_DISCLAIMER,
} from "../data/servicesPricingData";
import { QuoteRequestModal } from "./QuoteRequestModal";
import { AdminQuoteGeneratorModal } from "./AdminQuoteGeneratorModal";
import { COMPANY_INFO } from "../data/companyData";

interface ServicesPricingViewProps {
  onBackToHome: () => void;
  onOpenContact: () => void;
}

export const ServicesPricingView: React.FC<ServicesPricingViewProps> = ({
  onBackToHome,
  onOpenContact,
}) => {
  const [selectedCategory, setSelectedCategory] =
    useState<ServiceCategory>("all");
  const [searchQuery, setSearchQuery] = useState("");
  const [quoteModalOpen, setQuoteModalOpen] = useState(false);
  const [adminModalOpen, setAdminModalOpen] = useState(false);
  const [activeServiceForQuote, setActiveServiceForQuote] =
    useState<PricingItem | null>(null);

  const filteredServices = useMemo(() => {
    return SERVICES_PRICING_ITEMS.filter((item) => {
      const matchesCategory =
        selectedCategory === "all" || item.category === selectedCategory;
      const matchesSearch =
        item.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
        item.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
        (item.subtitle &&
          item.subtitle.toLowerCase().includes(searchQuery.toLowerCase())) ||
        item.highlights.some((h) =>
          h.toLowerCase().includes(searchQuery.toLowerCase()),
        );
      return matchesCategory && matchesSearch;
    });
  }, [selectedCategory, searchQuery]);

  const handleOpenQuote = (service?: PricingItem) => {
    setActiveServiceForQuote(service || null);
    setQuoteModalOpen(true);
  };

  const getCategoryIcon = (cat: string) => {
    switch (cat) {
      case "web":
        return <Globe className="w-4 h-4 text-blue-400" />;
      case "mobile":
        return <Smartphone className="w-4 h-4 text-indigo-400" />;
      case "seo":
        return <SearchCode className="w-4 h-4 text-emerald-400" />;
      case "addons":
        return <Wrench className="w-4 h-4 text-amber-400" />;
      case "iot":
        return <Cpu className="w-4 h-4 text-purple-400" />;
      default:
        return <Layers className="w-4 h-4 text-blue-400" />;
    }
  };

  const categoryNames: Record<string, string> = {
    all: "All services",
    web: "Websites",
    mobile: "Mobile apps",
    seo: "SEO",
    addons: "Care & add-ons",
    iot: "IoT & electronics",
  };
  const categoryDescriptions: Record<string, string> = {
    web: "A thoughtful digital home, from a first website to a custom platform.",
    mobile:
      "From testing an idea to a mobile experience ready for everyday use.",
    seo: "Help search engines understand your site, and people find what they need.",
    addons:
      "Practical improvements and ongoing care for the systems you already have.",
    iot: "Connect physical devices, useful data and the software behind them.",
  };

  return (
    <div className="studio-services pricing-page">
      <div className="studio-container">
        <div className="pricing-breadcrumb">
          <button className="studio-text-link" onClick={onBackToHome}>
            <ArrowLeft size={14} /> Back to the studio
          </button>
          <button
            className="pricing-admin"
            onClick={() => setAdminModalOpen(true)}
            title="Open internal quotation builder"
          >
            <Lock size={12} /> Admin Rate Calc
          </button>
        </div>
        <header className="pricing-intro studio-section-top" data-reveal>
          <div>
            <p className="studio-eyebrow">SERVICES / STARTING RATES</p>
            <h1 className="studio-heading">
              A considered build.
              <br />
              <em>A clear starting point.</em>
            </h1>
          </div>
          <div className="pricing-intro-note">
            <p className="studio-description">
              Find the right starting point for your next idea. We’ll shape the
              final scope around what you need, then agree a quote before the
              work begins.
            </p>
            <span>
              <span className="signal-dot" /> All prices in USD · Scope agreed
              together
            </span>
          </div>
        </header>
        <div className="pricing-tools">
          <div
            className="studio-filter-row"
            role="group"
            aria-label="Filter services"
          >
            {PRICING_CATEGORIES.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id as ServiceCategory)}
                aria-pressed={selectedCategory === cat.id}
                className={selectedCategory === cat.id ? "is-active" : ""}
              >
                {categoryNames[cat.id]}
                <span>
                  {
                    SERVICES_PRICING_ITEMS.filter(
                      (item) => cat.id === "all" || item.category === cat.id,
                    ).length
                  }
                </span>
              </button>
            ))}
          </div>
          <div className="pricing-search">
            <Search size={16} aria-hidden="true" />
            <input
              aria-label="Search services"
              type="search"
              placeholder="Search services or features..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            {searchQuery && (
              <button
                aria-label="Clear search"
                onClick={() => setSearchQuery("")}
              >
                ×
              </button>
            )}
          </div>
        </div>
        <p className="pricing-results" role="status">
          {filteredServices.length}{" "}
          {filteredServices.length === 1 ? "service" : "services"}
          {searchQuery ? ` matching “${searchQuery}”` : " to explore"}
          <span>Starting rates. Scope shaped around your needs.</span>
        </p>
        {filteredServices.length === 0 ? (
          <div className="pricing-empty">
            <Info size={25} />
            <h2>No matches just yet.</h2>
            <p>Try another search, or tell us what you have in mind.</p>
            <button
              className="studio-button primary"
              onClick={() => {
                setSearchQuery("");
                setSelectedCategory("all");
              }}
            >
              Reset Filters
            </button>
          </div>
        ) : (
          PRICING_CATEGORIES.filter((cat) => cat.id !== "all").map(
            (cat, categoryIndex) => {
              const items = filteredServices.filter(
                (service) => service.category === cat.id,
              );
              if (!items.length) return null;
              return (
                <section
                  className="pricing-category"
                  aria-label={cat.label}
                  key={cat.id}
                >
                  <div className="pricing-category-heading" data-reveal>
                    <div>
                      <span className="pricing-category-index">
                        0{categoryIndex + 1}
                      </span>
                      {getCategoryIcon(cat.id)}
                      <h2>{categoryNames[cat.id]}</h2>
                    </div>
                    <p>{categoryDescriptions[cat.id]}</p>
                  </div>
                  <div className="grid pricing-card-grid">
                    {items.map((service) => (
                      <article
                        key={service.id}
                        className={`pricing-card group ${service.isPopular ? "pricing-card-featured" : ""}`}
                        data-service-id={service.id}
                      >
                        <div className="pricing-card-heading">
                          <span>{service.categoryLabel}</span>
                          {service.badge && (
                            <span className="pricing-badge">
                              {service.badge}
                            </span>
                          )}
                        </div>
                        <h3>{service.title}</h3>
                        {service.subtitle && (
                          <p className="pricing-subtitle">{service.subtitle}</p>
                        )}
                        <div className="pricing-amount">
                          <span>
                            {service.startingPrice === null
                              ? "Shaped around your project"
                              : service.billingCycle === "monthly"
                                ? "Ongoing care"
                                : "Starting at"}
                          </span>
                          <strong
                            className={
                              service.startingPrice === null
                                ? "pricing-custom-amount"
                                : ""
                            }
                          >
                            {service.priceDisplay.includes("/") ? (
                              <>
                                {service.priceDisplay.slice(
                                  0,
                                  service.priceDisplay.indexOf("/"),
                                )}
                                <small>
                                  {service.priceDisplay.slice(
                                    service.priceDisplay.indexOf("/"),
                                  )}
                                </small>
                              </>
                            ) : (
                              service.priceDisplay
                            )}
                          </strong>
                          <span>
                            {service.billingCycle === "monthly"
                              ? "USD · monthly"
                              : service.billingCycle === "per platform"
                                ? "USD · per platform"
                                : service.startingPrice === null
                                  ? "A tailored quote in USD"
                                  : "USD · one-time starting rate"}
                          </span>
                        </div>
                        <p className="pricing-description">
                          {service.description}
                        </p>
                        <div className="pricing-inclusions">
                          <h4>What’s included</h4>
                          <ul>
                            {service.highlights.slice(0, 3).map((item) => (
                              <li key={item}>
                                <Check size={14} aria-hidden="true" />
                                <span>{item}</span>
                              </li>
                            ))}
                          </ul>
                          {service.highlights.length > 3 && (
                            <details>
                              <summary
                                aria-label={`More inclusions for ${service.title}`}
                              >
                                See {service.highlights.length - 3} more
                                inclusions <span>+</span>
                              </summary>
                              <ul>
                                {service.highlights.slice(3).map((item) => (
                                  <li key={item}>
                                    <Check size={14} aria-hidden="true" />
                                    <span>{item}</span>
                                  </li>
                                ))}
                              </ul>
                            </details>
                          )}
                        </div>
                        <div className="pricing-card-footer">
                          {service.scopeNote && <p>{service.scopeNote}</p>}
                          <button
                            className="studio-button"
                            type="button"
                            onClick={() => handleOpenQuote(service)}
                          >
                            Request a Quote <ArrowUpRight size={16} />
                          </button>
                        </div>
                      </article>
                    ))}
                  </div>
                </section>
              );
            },
          )
        )}
        <section
          className="pricing-scope"
          aria-label="Pricing and scope information"
        >
          <div data-reveal>
            <p className="studio-eyebrow">THE DETAILS, UP FRONT</p>
            <h2 className="studio-heading">
              A shared understanding.
              <br />
              <em>Before we start.</em>
            </h2>
            <p>
              Every project is a little different. Here’s how we keep the scope,
              costs and expectations clear.
            </p>
          </div>
          <div>
            {PRICING_DISCLAIMER.points.map((point, index) => (
              <details key={point.title} open={index === 0}>
                <summary>
                  {point.title}
                  <span>+</span>
                </summary>
                <p>{point.text}</p>
              </details>
            ))}
          </div>
        </section>
        <section className="pricing-conversation" data-reveal>
          <div>
            <p className="studio-eyebrow">SOMETHING A LITTLE DIFFERENT?</p>
            <h2 className="studio-heading">
              Let’s start
              <br />
              <em>with your idea.</em>
            </h2>
            <p>
              Not sure which service fits? Tell us what you’re trying to do.
              We’ll help you find a sensible starting point.
            </p>
          </div>
          <div>
            <button
              className="studio-button primary"
              onClick={() => handleOpenQuote()}
            >
              Request Custom Quotation <ArrowUpRight size={17} />
            </button>
            <button className="studio-text-link" onClick={onOpenContact}>
              Talk to the founder <ArrowUpRight size={15} />
            </button>
            <a
              className="studio-text-link"
              href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, "")}?text=${encodeURIComponent("Hello Shepherd, I am viewing the Future Pulse Services & Pricing page and would like to discuss a custom project.")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Chat on WhatsApp <ArrowUpRight size={15} />
            </a>
          </div>
        </section>
      </div>
      <QuoteRequestModal
        isOpen={quoteModalOpen}
        onClose={() => setQuoteModalOpen(false)}
        preSelectedService={activeServiceForQuote}
      />
      <AdminQuoteGeneratorModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
};
