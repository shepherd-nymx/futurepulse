import React from 'react';

export type TechVariant = 'circuit' | 'grid' | 'topography' | 'telemetry' | 'matrix' | 'flow';
export type GlowColor = 'blue' | 'cyan' | 'indigo' | 'emerald';
export type GlowPosition = 'top-left' | 'top-right' | 'bottom-left' | 'bottom-right' | 'center' | 'split';

interface TechBackgroundDecorProps {
  variant?: TechVariant;
  glowColor?: GlowColor;
  glowPosition?: GlowPosition;
  showCoordinates?: boolean;
  telemetryLabel?: string;
  className?: string;
}

export const TechBackgroundDecor: React.FC<TechBackgroundDecorProps> = ({
  variant = 'circuit',
  glowColor = 'blue',
  glowPosition = 'top-right',
  className = '',
}) => {
  // Atmospheric glow styles based on position and color
  const getGlowStyles = () => {
    const colorMap = {
      blue: 'bg-blue-600/10',
      cyan: 'bg-cyan-500/8',
      indigo: 'bg-indigo-600/8',
      emerald: 'bg-emerald-500/8',
    };

    const secondaryColorMap = {
      blue: 'bg-sky-500/6',
      cyan: 'bg-blue-600/6',
      indigo: 'bg-purple-600/6',
      emerald: 'bg-teal-500/6',
    };

    const primaryColor = colorMap[glowColor] || colorMap.blue;
    const secondaryColor = secondaryColorMap[glowColor] || secondaryColorMap.blue;

    switch (glowPosition) {
      case 'top-left':
        return (
          <>
            <div className={`absolute -top-24 -left-24 w-[480px] h-[480px] rounded-full ${primaryColor} blur-[140px] pointer-events-none`} />
            <div className={`absolute top-1/2 right-0 w-[340px] h-[340px] rounded-full ${secondaryColor} blur-[130px] pointer-events-none`} />
          </>
        );
      case 'bottom-right':
        return (
          <>
            <div className={`absolute -bottom-24 -right-24 w-[480px] h-[480px] rounded-full ${primaryColor} blur-[140px] pointer-events-none`} />
            <div className={`absolute top-10 left-10 w-[320px] h-[320px] rounded-full ${secondaryColor} blur-[130px] pointer-events-none`} />
          </>
        );
      case 'bottom-left':
        return (
          <>
            <div className={`absolute -bottom-20 -left-20 w-[460px] h-[460px] rounded-full ${primaryColor} blur-[140px] pointer-events-none`} />
            <div className={`absolute top-12 right-12 w-[320px] h-[320px] rounded-full ${secondaryColor} blur-[130px] pointer-events-none`} />
          </>
        );
      case 'center':
        return (
          <>
            <div className={`absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[380px] rounded-full ${primaryColor} blur-[150px] pointer-events-none`} />
          </>
        );
      case 'split':
        return (
          <>
            <div className={`absolute -top-20 -left-20 w-[420px] h-[420px] rounded-full ${primaryColor} blur-[140px] pointer-events-none`} />
            <div className={`absolute -bottom-20 -right-20 w-[420px] h-[420px] rounded-full ${secondaryColor} blur-[140px] pointer-events-none`} />
          </>
        );
      case 'top-right':
      default:
        return (
          <>
            <div className={`absolute -top-20 -right-20 w-[480px] h-[480px] rounded-full ${primaryColor} blur-[140px] pointer-events-none`} />
            <div className={`absolute bottom-0 left-0 w-[340px] h-[340px] rounded-full ${secondaryColor} blur-[130px] pointer-events-none`} />
          </>
        );
    }
  };

  return (
    <div
      className={`absolute inset-0 pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Subtle Atmospheric Ambient Glow */}
      {getGlowStyles()}

      {/* 2. Clean Architectural Line Grid (Pure lines, zero dots) */}
      <div
        className="absolute inset-0 opacity-[0.25] pointer-events-none"
        style={{
          backgroundImage: `
            linear-gradient(to right, rgba(56, 189, 248, 0.04) 1px, transparent 1px),
            linear-gradient(to bottom, rgba(56, 189, 248, 0.04) 1px, transparent 1px)
          `,
          backgroundSize: '64px 64px',
          maskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 35%, transparent 100%)',
          WebkitMaskImage: 'radial-gradient(ellipse 90% 80% at 50% 50%, black 35%, transparent 100%)',
        }}
      />

      {/* 3. Variant Specific Clean Engineering Vector Traces (Pure geometric paths, zero dots/nodes) */}
      {variant === 'circuit' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.14] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="circuitClean1" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.6" />
              <stop offset="60%" stopColor="#2563eb" stopOpacity="0.25" />
              <stop offset="100%" stopColor="#0ea5e9" stopOpacity="0" />
            </linearGradient>
          </defs>

          {/* Clean architectural routing lines */}
          <path
            d="M -20 120 L 160 120 L 220 180 L 380 180 L 420 220 L 640 220"
            fill="none"
            stroke="url(#circuitClean1)"
            strokeWidth="1"
          />
          <path
            d="M 1200 80 L 980 80 L 920 140 L 760 140 L 700 200 L 500 200"
            fill="none"
            stroke="url(#circuitClean1)"
            strokeWidth="1"
          />
          <line x1="220" y1="180" x2="220" y2="340" stroke="url(#circuitClean1)" strokeWidth="0.75" strokeDasharray="4 4" />
          <line x1="760" y1="140" x2="760" y2="320" stroke="url(#circuitClean1)" strokeWidth="0.75" strokeDasharray="4 4" />
        </svg>
      )}

      {variant === 'topography' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <defs>
            <linearGradient id="topoClean" x1="0%" y1="0%" x2="100%" y2="80%">
              <stop offset="0%" stopColor="#38bdf8" stopOpacity="0.5" />
              <stop offset="70%" stopColor="#2563eb" stopOpacity="0.18" />
              <stop offset="100%" stopColor="#1e3a8a" stopOpacity="0" />
            </linearGradient>
          </defs>
          <path
            d="M -100 240 Q 200 160 500 260 T 1100 200 T 1600 280"
            fill="none"
            stroke="url(#topoClean)"
            strokeWidth="1"
          />
          <path
            d="M -100 280 Q 220 200 520 300 T 1120 240 T 1600 320"
            fill="none"
            stroke="url(#topoClean)"
            strokeWidth="0.8"
            strokeDasharray="6 4"
          />
          <path
            d="M -100 320 Q 240 240 540 340 T 1140 280 T 1600 360"
            fill="none"
            stroke="url(#topoClean)"
            strokeWidth="1"
          />
        </svg>
      )}

      {variant === 'telemetry' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          {/* Clean framing corner reticles without blinking dots */}
          <path d="M 32 32 L 32 48 M 32 32 L 48 32" stroke="#38bdf8" strokeWidth="1" fill="none" />
          <path d="M 1248 32 L 1248 48 M 1248 32 L 1232 32" stroke="#38bdf8" strokeWidth="1" fill="none" />
          <path d="M 32 480 L 32 464 M 32 480 L 48 480" stroke="#38bdf8" strokeWidth="1" fill="none" />
        </svg>
      )}

      {variant === 'flow' && (
        <svg
          className="absolute inset-0 w-full h-full opacity-[0.12] pointer-events-none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M -50 140 C 250 80, 450 260, 750 160 C 1050 60, 1250 240, 1550 140"
            fill="none"
            stroke="#2563eb"
            strokeWidth="1"
          />
          <path
            d="M -50 200 C 250 140, 450 320, 750 220 C 1050 120, 1250 300, 1550 200"
            fill="none"
            stroke="#0ea5e9"
            strokeWidth="0.75"
            strokeDasharray="4 6"
          />
        </svg>
      )}

      {/* 4. Subtle Bottom Divider Line */}
      <div className="absolute inset-x-0 bottom-0 h-[1px] bg-gradient-to-r from-transparent via-sky-400/10 to-transparent pointer-events-none" />
    </div>
  );
};
