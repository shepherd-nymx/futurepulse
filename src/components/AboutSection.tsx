import React, { useState } from 'react';
import { ArrowRight, Lightbulb, Wrench, PackageCheck, Globe2 } from 'lucide-react';
import { ImageWithFallback } from './ImageWithFallback';

export const AboutSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const progressionSteps = [
    {
      label: 'Idea',
      icon: Lightbulb,
      tag: 'Phase 01',
      summary: 'Observing Real Frictions',
      description:
        'Identifying structural and everyday challenges in Zimbabwe where technology can tangibly improve efficiency and quality of life.',
    },
    {
      label: 'Prototype',
      icon: Wrench,
      tag: 'Phase 02',
      summary: 'Hands-On Engineering',
      description:
        'Building physical circuit boards, wiring microcontrollers, and coding software prototypes in the lab to test feasibility.',
    },
    {
      label: 'Product',
      icon: PackageCheck,
      tag: 'Phase 03',
      summary: 'Refined Implementation',
      description:
        'Hardening prototypes into dependable, intuitive systems built to endure local operating realities and network conditions.',
    },
    {
      label: 'Impact',
      icon: Globe2,
      tag: 'Phase 04',
      summary: 'Scalable Value',
      description:
        'Deploying solutions that solve immediate needs in Zimbabwe with architectural design primed to scale across regional markets.',
    },
  ];

  return (
    <section id="about" className="py-24 sm:py-32 bg-[#06090e] border-t border-white/5 relative overflow-hidden">
      {/* Background ambient lighting */}
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-blue-600/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>01</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>About Future Pulse</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight leading-tight [text-wrap:balance]">
            TECHNOLOGY WITH PURPOSE.
          </h2>
          <p className="mt-6 text-base sm:text-lg text-slate-300 leading-relaxed">
            Future Pulse is a technology company focused on turning ideas into practical products and
            systems. We work across software, electronics, IoT and automation to develop solutions
            around real problems.
          </p>
        </div>

        {/* Narrative Grid: Two-column layout with engineering workbench photo and mission statement */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center mb-20">
          <div className="lg:col-span-6 space-y-6 text-slate-300 text-base leading-relaxed">
            <p>
              Founded and built in Zimbabwe, Future Pulse operates on a straightforward principle:
              meaningful innovation begins where genuine bottlenecks exist. Rather than duplicating
              generic software formulas, we tackle both the digital and the physical — engineering
              smart devices, automation logic, and high-utility applications designed for real-world
              durability.
            </p>
            <p>
              While our roots, experiments, and first products are grounded in Zimbabwean communities,
              our engineering rigor and long-term ambition are designed to scale beyond national borders.
              We are building a multi-product technology ecosystem from the ground up — grounded,
              transparent, and focused on lasting value.
            </p>

            <div className="pt-4 border-t border-white/5 grid grid-cols-2 gap-4 text-xs font-mono text-slate-400">
              <div>
                <span className="text-slate-500 block uppercase">Origination</span>
                <span className="text-slate-200 text-sm font-semibold">Harare, Zimbabwe</span>
              </div>
              <div>
                <span className="text-slate-500 block uppercase">Operational Model</span>
                <span className="text-slate-200 text-sm font-semibold">Multi-Product Tech Parent</span>
              </div>
            </div>
          </div>

          <div className="lg:col-span-6">
            <div className="relative rounded-2xl overflow-hidden border border-slate-800/80 bg-slate-900/60 shadow-2xl group">
              <ImageWithFallback
                src="/src/assets/images/engineering_circuit_lab_1791396523562.jpg"
                alt="Future Pulse hardware and electronic prototyping workbench"
                aspectRatio="aspect-[16/10]"
                fallbackTitle="Future Pulse Prototyping Laboratory"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-[#06090e] via-transparent to-transparent opacity-80" />
              <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between text-xs font-mono text-slate-300 backdrop-blur-md bg-black/40 px-3.5 py-2 rounded-lg border border-white/10">
                <span className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-blue-400 animate-pulse" />
                  Hardware & Systems R&D
                </span>
                <span className="text-slate-400">Harare Workbench</span>
              </div>
            </div>
          </div>
        </div>

        {/* Visual Progression: IDEA -> PROTOTYPE -> PRODUCT -> IMPACT */}
        <div className="mt-12 bg-slate-950/60 border border-slate-800/80 rounded-2xl p-6 sm:p-10 tech-grid-subtle">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
            <div>
              <span className="text-xs font-mono uppercase tracking-wider text-blue-400">
                Development Lifecycle
              </span>
              <h3 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold text-white mt-1">
                From Conceptual Spark to Real-World Impact
              </h3>
            </div>
            <p className="text-xs text-slate-400 font-mono">
              Click a phase to explore our methodology
            </p>
          </div>

          {/* Stepper Flow */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {progressionSteps.map((step, idx) => {
              const Icon = step.icon;
              const isSelected = activeStep === idx;
              return (
                <button
                  key={step.label}
                  onClick={() => setActiveStep(idx)}
                  className={`text-left p-5 rounded-xl border transition-all duration-300 cursor-pointer relative overflow-hidden group ${
                    isSelected
                      ? 'bg-blue-950/30 border-blue-500/50 shadow-lg shadow-blue-900/20'
                      : 'bg-slate-900/40 border-slate-800 hover:border-slate-700 hover:bg-slate-900/70'
                  }`}
                >
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-xs font-mono text-slate-400">{step.tag}</span>
                    <div
                      className={`w-8 h-8 rounded-lg flex items-center justify-center transition-colors ${
                        isSelected
                          ? 'bg-blue-500 text-white'
                          : 'bg-slate-800 text-slate-400 group-hover:text-blue-400'
                      }`}
                    >
                      <Icon className="w-4 h-4" />
                    </div>
                  </div>

                  <div className="flex items-center gap-2 mb-1">
                    <h4 className="font-['Syne',sans-serif] text-lg font-bold text-white">
                      {step.label}
                    </h4>
                    {idx < progressionSteps.length - 1 && (
                      <ArrowRight className="w-3.5 h-3.5 text-slate-600 hidden lg:block ml-auto" />
                    )}
                  </div>

                  <p className="text-xs font-semibold text-blue-300 mb-2">{step.summary}</p>
                  <p className="text-xs text-slate-400 leading-relaxed">{step.description}</p>

                  {/* Active indicator bar */}
                  {isSelected && (
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 bg-blue-500" />
                  )}
                </button>
              );
            })}
          </div>

          {/* Progression Summary Banner */}
          <div className="mt-8 pt-6 border-t border-slate-800/80 flex flex-col sm:flex-row sm:items-center justify-between text-xs text-slate-400 font-mono gap-4">
            <div className="flex items-center gap-2">
              <span className="text-blue-400">Selected Discipline:</span>
              <span className="text-white font-semibold">{progressionSteps[activeStep].label}</span>
              <span>— {progressionSteps[activeStep].summary}</span>
            </div>
            <div className="text-slate-500">
              Iterative engineering · Zero speculative inflation
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
