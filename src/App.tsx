/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { GlobalTechBackground } from './components/GlobalTechBackground';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { AboutSection } from './components/AboutSection';
import { WhatWeBuildSection } from './components/WhatWeBuildSection';
import { OurWorkSection } from './components/OurWorkSection';
import { JourneySection } from './components/JourneySection';
import { PrinciplesSection } from './components/PrinciplesSection';
import { FounderSection } from './components/FounderSection';
import { MilestoneSection } from './components/MilestoneSection';
import { VisionSection } from './components/VisionSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ServicesPricingView } from './components/ServicesPricingView';
import { AdminQuoteGeneratorModal } from './components/AdminQuoteGeneratorModal';

export default function App() {
  const [activeView, setActiveView] = useState<'home' | 'services'>(() => {
    return window.location.hash === '#services-pricing' ? 'services' : 'home';
  });

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Sync state with URL hash
  useEffect(() => {
    const handleHashChange = () => {
      if (window.location.hash === '#services-pricing') {
        setActiveView('services');
        window.scrollTo({ top: 0, behavior: 'smooth' });
      } else {
        setActiveView('home');
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const handleNavigateToView = (view: 'home' | 'services', targetAnchor?: string) => {
    if (view === 'services') {
      setActiveView('services');
      window.location.hash = '#services-pricing';
      window.scrollTo({ top: 0, behavior: 'smooth' });
    } else {
      setActiveView('home');
      if (targetAnchor && targetAnchor !== '#services-pricing') {
        window.location.hash = targetAnchor;
        setTimeout(() => {
          scrollTo(targetAnchor);
        }, 50);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white relative overflow-x-hidden w-full">
      {/* Global Animated Tech Background */}
      <GlobalTechBackground />

      {/* Sticky Top Navigation */}
      <Navbar
        activeView={activeView}
        onNavigateToView={handleNavigateToView}
        onOpenContact={() => handleNavigateToView('home', '#contact')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 w-full overflow-x-hidden">
        {activeView === 'services' ? (
          /* Dedicated Services & Pricing Page */
          <ServicesPricingView
            onBackToHome={() => handleNavigateToView('home', '#home')}
            onOpenContact={() => handleNavigateToView('home', '#contact')}
          />
        ) : (
          /* Core Corporate Overview View */
          <>
            {/* Hero Section */}
            <Hero
              onExploreWork={() => scrollTo('#our-work')}
              onAboutClick={() => scrollTo('#about')}
              onViewPricing={() => handleNavigateToView('services')}
            />

            {/* About Section */}
            <AboutSection />

            {/* What We Build: 4 Core Pillars Bento Grid */}
            <WhatWeBuildSection />

            {/* Our Work: UniLink Showcase & More Products in Development */}
            <OurWorkSection />

            {/* The Journey: Evolution Timeline */}
            <JourneySection />

            {/* Why Future Pulse: 4 Core Principles */}
            <PrinciplesSection />

            {/* Founder Section: Shepherd Mutevedzi */}
            <FounderSection />

            {/* Where We Are: 2026 Milestone */}
            <MilestoneSection />

            {/* Vision: This Is Only The Beginning */}
            <VisionSection onContactClick={() => scrollTo('#contact')} />

            {/* Contact: Let's Build Something */}
            <ContactSection />
          </>
        )}
      </main>

      {/* Footer */}
      <Footer
        onNavClick={(href, view) => handleNavigateToView(view || 'home', href)}
        onOpenAdminCalc={() => setAdminModalOpen(true)}
      />

      {/* Global Admin Quotation Generator Modal */}
      <AdminQuoteGeneratorModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
  );
}
