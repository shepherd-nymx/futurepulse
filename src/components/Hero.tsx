import React from "react";
import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  ArrowUpRight,
  Code2,
  Cpu,
  Bot,
  Smartphone,
} from "lucide-react";
import { SignalCore } from "./SignalCore";
interface HeroProps {
  onExploreWork: () => void;
  onAboutClick: () => void;
  onViewPricing?: () => void;
  onContactClick?: () => void;
}
export const Hero: React.FC<HeroProps> = ({
  onExploreWork,
  onAboutClick,
  onViewPricing,
  onContactClick,
}) => {
  const reduced = useReducedMotion();
  return (
    <section id="home" className="studio-hero">
      <div className="studio-container hero-layout">
        <div className="hero-copy" data-hero-content>
          <div className="studio-eyebrow">
            <span className="signal-dot" /> Independent thinking. Practical
            technology.
          </div>
          <h1 data-hero-title>
            Good ideas.
            <br />
            Built into
            <br />
            <motion.span
              initial={reduced ? false : { opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                duration: 0.9,
                delay: 0.25,
                ease: [0.16, 1, 0.3, 1],
              }}
              className="hero-serif"
            >
              real impact.
            </motion.span>
          </h1>
          <p className="hero-description">
            Software, mobile apps, AI agents and connected systems.
            <br className="desktop-break" /> Thoughtfully built in Zimbabwe.
            Made for everyday life.
          </p>
          <div className="hero-actions">
            <button
              className="studio-button primary"
              onClick={onContactClick || onAboutClick}
            >
              Bring your idea to life <ArrowUpRight size={18} />
            </button>
            <button className="studio-text-link" onClick={onExploreWork}>
              Explore our work <ArrowDown size={16} />
            </button>
          </div>
          <button onClick={onViewPricing} className="hero-pricing-link">
            Have a project in mind? Explore services & pricing{" "}
            <ArrowUpRight size={13} />
          </button>
        </div>
        <div className="hero-art" data-reveal>
          <div className="art-coordinate art-coordinate-top">
            <span>FUTURE PULSE / ENGINEERING POSSIBILITIES</span>
            <span>01 — 04</span>
          </div>
          <div className="signal-sculpture">
            <div className="sculpture-glow" />
            <SignalCore />
            <span className="core-label">
              THE NEXT THING
              <br />
              <b>starts with a pulse.</b>
            </span>
            <span className="orbit-tag tag-code">
              <Code2 size={16} /> Software
            </span>
            <span className="orbit-tag tag-ai">
              <Bot size={16} /> AI & automation
            </span>
          </div>
          <div className="art-caption">
            <span className="signal-dot" />
            <span>
              Built with purpose.
              <br />
              <b>Designed to keep moving.</b>
            </span>
            <ArrowUpRight className="art-arrow" size={20} />
          </div>
        </div>
      </div>
      <div className="studio-container hero-foot">
        <span>
          HARARE, ZIMBABWE <span className="foot-line" />
        </span>
        <div>
          <span>
            <Code2 size={14} /> Software
          </span>
          <span>
            <Smartphone size={14} /> Mobile
          </span>
          <span>
            <Bot size={14} /> AI agents
          </span>
          <span>
            <Cpu size={14} /> IoT
          </span>
        </div>
        <a href="#portfolio" aria-label="Scroll to our work">
          DISCOVER <ArrowDown size={14} />
        </a>
      </div>
    </section>
  );
};
