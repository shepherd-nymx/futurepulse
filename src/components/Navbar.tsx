import React, { useState, useEffect } from "react";
import { AnimatePresence, motion } from "motion/react";
import { Menu, X, ArrowUpRight } from "lucide-react";
interface NavbarProps {
  onOpenContact: () => void;
  activeView?: "home" | "services" | "legal";
  onNavigateToView?: (
    view: "home" | "services" | "legal",
    targetAnchor?: string,
  ) => void;
}
export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeView = "home",
  onNavigateToView,
}) => {
  const [open, setOpen] = useState(false),
    [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const update = () => setScrolled(scrollY > 24);
    update();
    window.addEventListener("scroll", update, { passive: true });
    return () => window.removeEventListener("scroll", update);
  }, []);
  const links = [
    { name: "Work", href: "#portfolio", view: "home" as const },
    { name: "Expertise", href: "#what-we-build", view: "home" as const },
    { name: "Pricing", href: "#services-pricing", view: "services" as const },
    { name: "Approach", href: "#journey", view: "home" as const },
    { name: "About", href: "#about", view: "home" as const },
  ];
  const go = (
    e: React.MouseEvent<HTMLAnchorElement>,
    href: string,
    view: "home" | "services" = "home",
  ) => {
    e.preventDefault();
    setOpen(false);
    if (onNavigateToView) onNavigateToView(view, href);
    else document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <header className={`studio-nav ${scrolled ? "is-scrolled" : ""}`}>
      <div className="nav-shell">
        <a
          className="studio-brand"
          href="#home"
          onClick={(e) => go(e, "#home")}
          aria-label="Future Pulse home"
        >
          <img
            src="/future-pulse-symbol.png"
            onError={(e) => {
              e.currentTarget.onerror = null;
              e.currentTarget.src = "/future-pulse-logo.png";
            }}
            alt=""
          />
          <span>
            future<span>pulse</span>
            <small>TECHNOLOGY WITH PURPOSE</small>
          </span>
        </a>
        <nav className="studio-desktop-nav" aria-label="Main navigation">
          {links.map((link) => (
            <a
              key={link.name}
              href={link.href}
              onClick={(e) => go(e, link.href, link.view)}
              aria-current={
                link.view === "services" && activeView === "services"
                  ? "page"
                  : undefined
              }
            >
              {link.name}
            </a>
          ))}
        </nav>
        <div className="nav-actions">
          <button
            className="studio-button nav-cta"
            onClick={() => {
              setOpen(false);
              onOpenContact();
            }}
          >
            Let’s talk <ArrowUpRight size={16} />
          </button>
          <button
            className="studio-menu-toggle"
            onClick={() => setOpen(!open)}
            aria-label="Toggle navigation menu"
            aria-expanded={open}
            aria-controls="mobile-navigation"
          >
            {open ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-navigation"
            className="studio-mobile-menu"
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.25 }}
          >
            <nav className="fp-mobile-links" aria-label="Mobile navigation">
              <a href="#home" onClick={(e) => go(e, "#home")}>
                Home <span>01</span>
              </a>
              {links.map((link, i) => (
                <a
                  key={link.name}
                  href={link.href}
                  onClick={(e) => go(e, link.href, link.view)}
                >
                  {link.name}
                  <span>0{i + 2}</span>
                </a>
              ))}
              <a href="#founder" onClick={(e) => go(e, "#founder")}>
                The founder <ArrowUpRight size={15} />
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  onOpenContact();
                }}
              >
                Start a conversation <ArrowUpRight size={16} />
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
};
