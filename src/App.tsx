/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import React from 'react';
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

export default function App() {
  const scrollTo = (id: string) => {
    const el = document.querySelector(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-[#05070B] text-slate-100 flex flex-col font-sans selection:bg-blue-600/30 selection:text-white relative overflow-x-hidden w-full">
      {/* Global Animated Tech Background (Neat, Simple, Attractive & Living) */}
      <GlobalTechBackground />

      {/* Sticky Top Navigation */}
      <Navbar onOpenContact={() => scrollTo('#contact')} />

      {/* Main Content Sections */}
      <main className="flex-1 w-full overflow-x-hidden">
        {/* Hero Section */}
        <Hero
          onExploreWork={() => scrollTo('#our-work')}
          onAboutClick={() => scrollTo('#about')}
        />

        {/* About Section: Technology With Purpose & Progression */}
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
      </main>

      {/* Footer */}
      <Footer onNavClick={(href) => scrollTo(href)} />
    </div>
  );
}
