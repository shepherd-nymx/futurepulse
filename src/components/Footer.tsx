import React from "react";
import { ArrowUpRight, ArrowUp, Lock } from "lucide-react";
import { COMPANY_INFO } from "../data/companyData";
import { LEGAL_POLICIES } from "../data/legalPoliciesData";
interface FooterProps {
  onNavClick: (href: string, view?: "home" | "services") => void;
  onOpenAdminCalc?: () => void;
  onOpenLegal?: (slug: string) => void;
}
export const Footer: React.FC<FooterProps> = ({
  onNavClick,
  onOpenAdminCalc,
  onOpenLegal,
}) => (
  <footer className="studio-footer">
    <div className="studio-container">
      <div className="footer-main">
        <a
          href="#home"
          className="studio-brand"
          onClick={(e) => {
            e.preventDefault();
            onNavClick("#home");
          }}
        >
          <img src="/future-pulse-logo.png" alt="" />
          <span>
            future<span>pulse</span>
            <small>TECHNOLOGY WITH PURPOSE</small>
          </span>
        </a>
        <p>
          Thoughtfully engineered.
          <br />
          Built for the everyday.
        </p>
        <div className="footer-links">
          {[
            { name: "Our work", href: "#portfolio" },
            { name: "Expertise", href: "#what-we-build" },
            {
              name: "Pricing",
              href: "#services-pricing",
              view: "services" as const,
            },
            { name: "Our approach", href: "#journey" },
            { name: "The founder", href: "#founder" },
            { name: "Contact", href: "#contact" },
          ].map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => {
                e.preventDefault();
                onNavClick(link.href, link.view);
              }}
            >
              {link.name}
              <ArrowUpRight size={12} />
            </a>
          ))}
          <a
            href={COMPANY_INFO.socialPlaceholders.instagram}
            target="_blank"
            rel="noopener noreferrer"
          >
            Instagram <ArrowUpRight size={12} />
          </a>
          <a
            href={COMPANY_INFO.socialPlaceholders.tiktok}
            target="_blank"
            rel="noopener noreferrer"
          >
            TikTok <ArrowUpRight size={12} />
          </a>
        </div>
      </div>
      <div className="footer-wordmark" aria-hidden="true">
        future<span>pulse</span>
        <span className="wordmark-dot">.</span>
      </div>
      <div className="footer-bottom">
        <span>
          © {new Date().getFullYear()} {COMPANY_INFO.legalName} · Zimbabwe
        </span>
        <div>
          <button onClick={() => onOpenLegal?.("privacy-policy")}>
            Privacy
          </button>
          <button onClick={() => onOpenLegal?.("terms")}>Terms</button>
          <details className="footer-legal">
            <summary>All policies</summary>
            <div>
              {LEGAL_POLICIES.map((p) => (
                <button key={p.id} onClick={() => onOpenLegal?.(p.slug)}>
                  {p.title}
                </button>
              ))}
            </div>
          </details>
          <button
            onClick={onOpenAdminCalc}
            title="Internal quotation builder"
            aria-label="Open admin quotation calculator"
          >
            <Lock size={12} />
          </button>
          <button
            onClick={() =>
              window.scrollTo({
                top: 0,
                behavior: window.matchMedia("(prefers-reduced-motion: reduce)")
                  .matches
                  ? "auto"
                  : "smooth",
              })
            }
            aria-label="Back to top"
          >
            <ArrowUp size={15} />
          </button>
        </div>
      </div>
    </div>
  </footer>
);
