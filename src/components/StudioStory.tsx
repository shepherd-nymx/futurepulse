import React, { useState } from "react";
import { ArrowUpRight, Plus, Minus, Check, Copy } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import { COMPANY_INFO, PRINCIPLES, JOURNEY_STEPS } from "../data/companyData";
const steps = [
  {
    name: "Understand",
    description:
      "We start with the people, the problem and what a useful outcome looks like.",
    detail:
      "A focused conversation shapes the scope, priorities and technical direction before development begins.",
  },
  {
    name: "Make it tangible",
    description:
      "Ideas become clear journeys, practical prototypes and thoughtful interfaces.",
    detail:
      "We work through the experience early, so the important decisions happen before they become expensive changes.",
  },
  {
    name: "Build with care",
    description:
      "Reliable engineering connects the experience to everything behind it.",
    detail:
      "Software, mobile apps, AI agents and hardware are developed around your actual requirements, with testing along the way.",
  },
  {
    name: "Launch. Learn. Maintain.",
    description:
      "We help put it into the world, then keep it useful as your needs change.",
    detail:
      "Deployment is followed by monitoring, maintenance and iterative improvements. Ongoing scope is agreed for each project.",
  },
];
export function StudioProcess() {
  const [active, setActive] = useState<number | null>(0);
  return (
    <section id="journey" className="studio-section process-section">
      <div className="studio-container process-layout">
        <div data-reveal>
          <p className="studio-eyebrow">03 / THE WAY WE WORK</p>
          <h2 className="studio-heading">
            A clear path.
            <br />
            <em>A considered build.</em>
          </h2>
          <p className="studio-description">
            One thoughtful process, from the first conversation to the next
            iteration.
          </p>
          <a href="#contact" className="studio-text-link">
            Let’s talk about your idea <ArrowUpRight size={17} />
          </a>
        </div>
        <div className="process-steps">
          {steps.map((step, i) => (
            <div
              className={`process-step ${active === i ? "is-open" : ""}`}
              key={step.name}
            >
              <button
                aria-expanded={active === i}
                aria-controls={`process-detail-${i}`}
                onClick={() => setActive(active === i ? null : i)}
              >
                <span className="step-number">0{i + 1}</span>
                <span>
                  <b>{step.name}</b>
                  <span>{step.description}</span>
                </span>
                {active === i ? <Minus size={19} /> : <Plus size={19} />}
              </button>
              <AnimatePresence initial={false}>
                {active === i && (
                  <motion.div
                    id={`process-detail-${i}`}
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="step-detail"
                  >
                    <p>{step.detail}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
export function StudioStory() {
  const [expanded, setExpanded] = useState(false);
  const [copied, setCopied] = useState(false);
  const copy = async () => {
    try {
      await navigator.clipboard.writeText(COMPANY_INFO.founder.email);
      setCopied(true);
    } catch {
      setCopied(false);
    }
  };
  return (
    <>
      <section id="about" className="studio-section studio-about">
        <div className="studio-container">
          <div className="about-top" data-reveal>
            <p className="studio-eyebrow">04 / BUILT HERE. THINKING AHEAD.</p>
            <div>
              <h2 className="studio-heading">
                Small by design.
                <br />
                <em>Ambitious by nature.</em>
              </h2>
              <p className="studio-description">
                Future Pulse is an early-stage Zimbabwean technology company. We
                turn everyday friction into useful software, mobile experiences
                and connected systems — and take responsibility for what happens
                after launch.
              </p>
              <div className="about-facts">
                <span>
                  Founded in <b>2026</b>
                </span>
                <span>
                  Rooted in <b>Zimbabwe</b>
                </span>
                <span>
                  Focused on <b>Real problems</b>
                </span>
              </div>
            </div>
          </div>
          <div id="principles" className="principles-strip">
            {PRINCIPLES.map((p) => (
              <div key={p.number} data-reveal>
                <span>{p.number}</span>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
            ))}
          </div>
          <button
            className="studio-text-link story-toggle"
            aria-expanded={expanded}
            onClick={() => setExpanded(!expanded)}
          >
            Our journey so far{" "}
            {expanded ? <Minus size={16} /> : <Plus size={16} />}
          </button>
          {expanded && (
            <div className="company-timeline">
              {JOURNEY_STEPS.map((step) => (
                <div key={step.step}>
                  <span>{step.step}</span>
                  <h3>{step.title}</h3>
                  <p>{step.description}</p>
                  <p>{step.milestoneDetail}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </section>
      <section id="founder" className="studio-section founder-section">
        <div className="studio-container founder-layout">
          <div className="founder-photo" data-reveal>
            <img
              src="/assets/images/founder_shepherd_suit_portrait_1791398850708.jpg"
              alt="Shepherd Mutevedzi, founder of Future Pulse"
              loading="lazy"
            />
            <div>
              <span>THE PERSON BEHIND THE PULSE</span>
              <b>Shepherd Mutevedzi</b>
              <span>Founder · Electronic Engineering, NUST</span>
            </div>
          </div>
          <div className="founder-copy" data-reveal>
            <p className="studio-eyebrow">
              HUMAN THINKING. HANDS-ON ENGINEERING.
            </p>
            <h2 className="studio-heading">
              Technology starts
              <br />
              <em>with understanding.</em>
            </h2>
            <p>
              I’m Shepherd, an Electronic Engineering student at NUST and the
              founder of Future Pulse. I’m interested in the gap between how
              things work today and how much better they could work.
            </p>
            <p>
              That’s where our projects begin: with a real problem, a practical
              idea, and the commitment to keep building.
            </p>
            <a className="studio-text-link" href="#contact">
              Talk to the founder <ArrowUpRight size={17} />
            </a>
            <button className="founder-email" onClick={copy}>
              {copied ? <Check size={14} /> : <Copy size={14} />}{" "}
              {copied ? "Email copied" : COMPANY_INFO.founder.email}
            </button>
          </div>
        </div>
      </section>
      <section id="vision" className="studio-vision">
        <div className="studio-container">
          <p className="studio-eyebrow">THE NEXT CHAPTER</p>
          <h2>
            Useful today.
            <br />
            <em>Ready for what’s next.</em>
          </h2>
          <a href="#contact" className="studio-button primary">
            Let’s build something that matters <ArrowUpRight size={18} />
          </a>
          <span id="milestones" className="vision-note">
            Early-stage company. Long-term thinking.
          </span>
        </div>
      </section>
    </>
  );
}
