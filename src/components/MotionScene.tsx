import React, { useLayoutEffect, useRef } from 'react';
import { motion, useReducedMotion, useScroll, useSpring } from 'motion/react';

/** A presentation layer shared by home, pricing and legal; forms keep their own state. */
export function MotionScene({ view, children }: { view: string; children: React.ReactNode }) {
  const root = useRef<HTMLDivElement>(null);
  const reduced = useReducedMotion();
  useLayoutEffect(() => {
    const el = root.current;
    if (!el || reduced || !('IntersectionObserver' in window)) return;
    const seen = new WeakSet<Element>();
    const animations = new Set<Animation>();
    const reveal = new IntersectionObserver(entries => {
      let order = 0;
      entries.forEach(entry => {
        if (!entry.isIntersecting) return;
        reveal.unobserve(entry.target);
        const isHero = !!entry.target.closest('#home');
        const animation = entry.target.animate([
          { opacity: 0, transform: `translateY(${isHero ? 24 : 32}px) scale(0.985)` },
          { opacity: 1, transform: 'translateY(0) scale(1)' },
        ], { duration: isHero ? 800 : 650, delay: Math.min(order++ * 65, 260), easing: 'cubic-bezier(.16,1,.3,1)', fill: 'backwards' });
        animations.add(animation);
        animation.finished.then(() => animations.delete(animation), () => animations.delete(animation));
      });
    }, { threshold: 0.08 });
    const sections = new IntersectionObserver(entries => entries.forEach(entry => {
      (entry.target as HTMLElement).dataset.motionVisible = String(entry.isIntersecting);
    }), { rootMargin: '150px' });
    const scan = () => {
      el.querySelectorAll('[data-reveal], h1:not([data-hero-title]), h2, [data-hero-content] > :not(h1), .grid > .group, .grid > article, .grid > div[class*="rounded"], .grid > button[class*="rounded"]').forEach(node => {
        // Dialogs and fixed backdrops get their own entrance, never a transformed ancestor.
        if (seen.has(node) || node.closest('.fixed') || node.closest('[data-hero-title]') || node.parentElement?.closest('[data-reveal]')) return;
        seen.add(node);
        reveal.observe(node);
      });
      el.querySelectorAll('section').forEach(section => {
        if (section.hasAttribute('data-motion-visible')) return;
        section.dataset.motionVisible = 'false';
        sections.observe(section);
      });
    };
    scan();
    // Filters and tabs can add cards without navigating to another page.
    const mutations = new MutationObserver(scan);
    mutations.observe(el, { childList: true, subtree: true });
    const stop = () => animations.forEach(animation => animation.cancel());
    window.addEventListener('beforeprint', stop);
    return () => {
      mutations.disconnect(); reveal.disconnect(); sections.disconnect(); stop();
      el.querySelectorAll('[data-motion-visible]').forEach(section => section.removeAttribute('data-motion-visible'));
      window.removeEventListener('beforeprint', stop);
    };
  }, [view, reduced]);
  return <div ref={root} className="fp-scene" data-motion-view={view}>{children}</div>;
}

export function ReadingProgress() {
  const reduced = useReducedMotion();
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30 });
  return <motion.div aria-hidden="true" className="fp-reading-progress" style={{ scaleX: reduced ? scrollYProgress : scaleX }} />;
}
