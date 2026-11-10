import React, { useState, useEffect } from 'react';
import { AnimatePresence, motion } from 'motion/react';
import { Menu, X, ArrowUpRight } from 'lucide-react';

interface NavbarProps {
  onOpenContact: () => void;
  activeView?: 'home' | 'services' | 'legal';
  onNavigateToView?: (view: 'home' | 'services' | 'legal', targetAnchor?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({
  onOpenContact,
  activeView = 'home',
  onNavigateToView,
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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

  const handleNavClick = (e: React.MouseEvent<HTMLAnchorElement>, href: string, linkView: 'home' | 'services' | 'legal') => {
    e.preventDefault();
    setMobileMenuOpen(false);

    if (onNavigateToView) {
      onNavigateToView(linkView, href);
    } else {
      const target = document.querySelector(href);
      if (target) {
        target.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  return (
    <>
      <header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#05070B]/90 backdrop-blur-md border-b border-white/10 shadow-lg shadow-black/40 py-2.5 sm:py-3.5'
            : 'bg-transparent border-b border-white/5 py-3 sm:py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">
            {/* Zone 1: Brand Wordmark with Official Future Pulse Investments Logo */}
            <a
              href="#home"
              onClick={(e) => handleNavClick(e, '#home', 'home')}
              className="group flex items-center gap-2.5 sm:gap-3 text-slate-100 hover:text-white transition-colors"
            >
              <div className="w-8 h-8 sm:w-9 sm:h-9 rounded-xl bg-slate-950 border border-blue-500/40 flex items-center justify-center relative overflow-hidden group-hover:border-blue-400 transition-all shadow-md shadow-blue-500/10 shrink-0">
                <img
                  src="/future-pulse-logo.png"
                  alt="Future Pulse Investments Logo"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform"
                />
              </div>
              <div className="flex flex-col text-left">
                <span className="font-['Syne',sans-serif] text-sm sm:text-base lg:text-lg font-bold tracking-tight text-white uppercase leading-none">
                  Future Pulse
                </span>
                <span className="text-[8px] sm:text-[9px] font-mono tracking-widest text-blue-400 uppercase leading-none mt-1">
                  Investments
                </span>
              </div>
            </a>

            {/* Zone 2: Navigation Links (Text with hover underlines, no pills) */}
            <nav className="hidden lg:flex items-center gap-6 xl:gap-7 text-sm font-medium">
              {navLinks.map((link) => {
                const isActive =
                  (link.view === 'services' && activeView === 'services') ||
                  (link.view === 'home' && activeView === 'home' && link.name === 'Home');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.view)}
                    className={`py-1 relative transition-colors whitespace-nowrap shrink-0 ${
                      isActive
                        ? 'text-white font-semibold after:w-full after:bg-blue-400'
                        : 'text-slate-300 hover:text-white after:w-0 hover:after:w-full after:bg-blue-400/80'
                    } after:content-[''] after:absolute after:bottom-0 after:left-0 after:h-0.5 after:transition-all after:duration-200`}
                  >
                    {link.name}
                  </a>
                );
              })}
            </nav>

            {/* Zone 3: Primary Action (Desktop / Tablet) */}
            <div className="hidden sm:flex items-center gap-3">
              <button
                onClick={onOpenContact}
                className="px-4 py-2 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-all shadow-sm hover:shadow-blue-500/25 flex items-center gap-1.5 whitespace-nowrap active:scale-[0.98]"
              >
                <span>Let's Build</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </button>
            </div>

            {/* Mobile Hamburger & Quick CTA */}
            <div className="flex items-center gap-2 lg:hidden">
              <button
                onClick={onOpenContact}
                className="hidden xs:inline-flex px-2.5 py-1 text-[11px] font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors items-center gap-1 shadow-sm"
              >
                <span>Let's Build</span>
                <ArrowUpRight className="w-3 h-3" />
              </button>
              <button
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                className="p-2 text-slate-300 hover:text-white hover:bg-white/5 rounded-lg transition-colors focus:outline-none focus:ring-1 focus:ring-blue-400"
                aria-label="Toggle navigation menu"
                aria-expanded={mobileMenuOpen}
              >
                {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
      {mobileMenuOpen && (
        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.2 }} className="fixed inset-0 z-40 lg:hidden">
          <div
            className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
            onClick={() => setMobileMenuOpen(false)}
          />
          <motion.div initial={{ y: -20 }} animate={{ y: 0 }} exit={{ y: -16 }} transition={{ type: 'spring', stiffness: 300, damping: 30 }} className="fixed top-16 right-0 left-0 bg-[#070a10] border-b border-white/10 px-6 py-6 shadow-2xl flex flex-col gap-4">
            {/* Mobile Brand Banner */}
            <div className="flex items-center gap-3 pb-3 border-b border-white/10">
              <div className="w-10 h-10 rounded-xl bg-slate-950 border border-blue-500/40 overflow-hidden shadow-md shrink-0">
                <img
                  src="/future-pulse-logo.png"
                  alt="Future Pulse Investments Logo"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="text-left">
                <div className="font-['Syne',sans-serif] text-base font-bold text-white uppercase leading-tight">
                  Future Pulse
                </div>
                <div className="text-[10px] font-mono text-blue-400 tracking-wider uppercase mt-0.5">
                  Investments · Zimbabwe
                </div>
              </div>
            </div>
            <nav className="fp-mobile-links flex flex-col gap-3">
              {navLinks.map((link) => {
                const isActive =
                  (link.view === 'services' && activeView === 'services') ||
                  (link.view === 'home' && activeView === 'home' && link.name === 'Home');
                return (
                  <a
                    key={link.name}
                    href={link.href}
                    onClick={(e) => handleNavClick(e, link.href, link.view)}
                    className={`text-base font-medium py-2 border-b border-white/5 flex items-center justify-between transition-colors ${
                      isActive ? 'text-blue-400 font-semibold' : 'text-slate-200 hover:text-blue-400'
                    }`}
                  >
                    <span>{link.name}</span>
                    <span className="text-xs font-mono text-slate-500">→</span>
                  </a>
                );
              })}
            </nav>
            <div className="pt-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenContact();
                }}
                className="w-full py-3 text-center text-sm font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-lg transition-colors shadow-sm"
              >
                Let's Build
              </button>
            </div>
            <div className="pt-2 text-xs text-slate-500 font-mono text-center">
              Zimbabwe · Early Stage Technology Company
            </div>
          </motion.div>
        </motion.div>
      )}
      </AnimatePresence>
    </>
  );
};
