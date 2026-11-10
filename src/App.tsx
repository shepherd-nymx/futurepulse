/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React, { useState, useEffect } from 'react';
import { MotionConfig } from 'motion/react';
import { MotionScene, ReadingProgress } from './components/MotionScene';
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
import { LegalComplianceView } from './components/LegalComplianceView';
import { AdminQuoteGeneratorModal } from './components/AdminQuoteGeneratorModal';
import { CookieComplianceBanner } from './components/CookieComplianceBanner';
import { ProjectsPortfolioSection } from './components/ProjectsPortfolioSection';
import { LEGAL_POLICIES } from './data/legalPoliciesData';

export default function App() {
  const getInitialViewAndPolicy = (): {
    view: 'home' | 'services' | 'legal';
    policyId: string;
  } => {
    const hash = window.location.hash.replace('#', '');
    if (hash === 'services-pricing') {
      return { view: 'services', policyId: 'privacy-policy' };
    }

    const matchedPolicy = LEGAL_POLICIES.find(
      (p) => p.slug === hash || p.id === hash
    );
    if (matchedPolicy || hash === 'legal' || hash === 'legal-compliance') {
      return {
        view: 'legal',
        policyId: matchedPolicy ? matchedPolicy.id : 'privacy-policy',
      };
    }

    return { view: 'home', policyId: 'privacy-policy' };
  };

  const [activeView, setActiveView] = useState<'home' | 'services' | 'legal'>(
    () => getInitialViewAndPolicy().view
  );
  const [activeLegalPolicy, setActiveLegalPolicy] = useState<string>(
    () => getInitialViewAndPolicy().policyId
  );

  const [adminModalOpen, setAdminModalOpen] = useState(false);

  // Sync state with URL hash on forward/back navigation
  useEffect(() => {
    const handleHashChange = () => {
      const parsed = getInitialViewAndPolicy();
      setActiveView(parsed.view);
      setActiveLegalPolicy(parsed.policyId);
      if (parsed.view === 'services' || parsed.view === 'legal') {
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    };

    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    }
  };

  const handleNavigateToView = (
    view: 'home' | 'services' | 'legal',
    targetAnchor?: string
  ) => {
    if (view === 'services') {
      setActiveView('services');
      window.location.hash = '#services-pricing';
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } else if (view === 'legal') {
      setActiveView('legal');
      const slug = targetAnchor ? targetAnchor.replace('#', '') : 'privacy-policy';
      setActiveLegalPolicy(slug);
      window.location.hash = `#${slug}`;
      window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
    } else {
      setActiveView('home');
      if (targetAnchor && targetAnchor !== '#services-pricing' && targetAnchor !== '#legal') {
        window.location.hash = targetAnchor;
        setTimeout(() => {
          scrollTo(targetAnchor);
        }, 50);
      } else {
        window.location.hash = '#home';
        window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
      }
    }
  };

  const handleOpenLegalPolicy = (policySlug: string) => {
    setActiveView('legal');
    setActiveLegalPolicy(policySlug);
    window.location.hash = `#${policySlug}`;
    window.scrollTo({ top: 0, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'auto' : 'smooth' });
  };

  return (
    <MotionConfig reducedMotion="user">
    <div className="min-h-screen bg-[#05070B] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white relative overflow-x-hidden w-full">
      {/* Global Animated Tech Background */}
      <GlobalTechBackground />

      <ReadingProgress />

      {/* Sticky Top Navigation */}
      <Navbar
        activeView={activeView}
        onNavigateToView={handleNavigateToView}
        onOpenContact={() => handleNavigateToView('home', '#contact')}
      />

      {/* Main Content View Switcher */}
      <main className="flex-1 w-full overflow-x-hidden">
        <MotionScene key={activeView} view={activeView}>
        {activeView === 'services' ? (
          /* Dedicated Services & Pricing Page */
          <ServicesPricingView
            onBackToHome={() => handleNavigateToView('home', '#home')}
            onOpenContact={() => handleNavigateToView('home', '#contact')}
          />
        ) : activeView === 'legal' ? (
          /* Dedicated Legal & Regulatory Compliance Page */
          <LegalComplianceView
            initialPolicyId={activeLegalPolicy}
            onBackToHome={() => handleNavigateToView('home', '#home')}
            onNavigateToServices={() => handleNavigateToView('services')}
          />
        ) : (
          /* Core Corporate Overview View */
          <>
            {/* Hero Section */}
            <Hero
              onExploreWork={() => scrollTo('#portfolio')}
              onAboutClick={() => scrollTo('#about')}
              onViewPricing={() => handleNavigateToView('services')}
            />

            {/* About Section */}
            <AboutSection />

            {/* What We Build: 4 Core Pillars Bento Grid */}
            <WhatWeBuildSection />

            {/* Our Work: UniLink Showcase & Product Ecosystem */}
            <OurWorkSection />

            {/* Projects Portfolio: Categorized Portfolio (Web, Mobile, Software) */}
            <ProjectsPortfolioSection />

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
        </MotionScene>
      </main>

      {/* Footer with Legal & Compliance Policy Links */}
      <Footer
        onNavClick={(href, view) => handleNavigateToView(view || 'home', href)}
        onOpenAdminCalc={() => setAdminModalOpen(true)}
        onOpenLegal={handleOpenLegalPolicy}
      />

      {/* Cookie & Regulatory Compliance Banner */}
      <CookieComplianceBanner onOpenPolicy={handleOpenLegalPolicy} />

      {/* Global Admin Quotation Generator Modal */}
      <AdminQuoteGeneratorModal
        isOpen={adminModalOpen}
        onClose={() => setAdminModalOpen(false)}
      />
    </div>
    </MotionConfig>
  );
}
