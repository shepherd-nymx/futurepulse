import React, { useState, useEffect, useRef } from 'react';

interface SectionTechBackdropProps {
  imageSrc: string;
  alt: string;
  objectPosition?: string;
  brightness?: string;
  overlayOpacity?: string;
  driftVariant?: 'drift-1' | 'drift-2' | 'zoom' | 'none';
  enableSheen?: boolean;
  className?: string;
}

export const SectionTechBackdrop: React.FC<SectionTechBackdropProps> = ({
  imageSrc,
  alt,
  objectPosition = 'center 35%',
  brightness = 'brightness-[0.78] sm:brightness-[0.84] contrast-[1.12] saturate-[1.12]',
  overlayOpacity = 'bg-[#05070B]/70',
  driftVariant = 'drift-1',
  enableSheen = true,
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [parallax, setParallax] = useState<{ x: number; y: number }>({ x: 0, y: 0 });

  useEffect(() => {
    // Subtle mouse parallax for added 3D physical depth
    const handleMouseMove = (e: MouseEvent) => {
      const { innerWidth, innerHeight } = window;
      const xPercent = (e.clientX / innerWidth - 0.5) * 16; // Max ±8px
      const yPercent = (e.clientY / innerHeight - 0.5) * 16;
      setParallax({ x: xPercent, y: yPercent });
    };

    window.addEventListener('mousemove', handleMouseMove, { passive: true });
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const getDriftClass = () => {
    switch (driftVariant) {
      case 'drift-2':
        return 'animate-cinematic-drift-2';
      case 'zoom':
        return 'animate-cinematic-drift-zoom';
      case 'none':
        return '';
      case 'drift-1':
      default:
        return 'animate-cinematic-drift-1';
    }
  };

  return (
    <div
      ref={containerRef}
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Deep Obsidian Base */}
      <div className="absolute inset-0 bg-[#05070B]" />

      {/* 2. Living Volumetric Ambient Glow (Soft pulsing aura behind image) */}
      <div className="absolute top-[20%] left-[25%] w-[550px] h-[550px] rounded-full bg-blue-600/15 blur-[160px] animate-atmospheric-pulse pointer-events-none" />
      <div className="absolute bottom-[20%] right-[20%] w-[500px] h-[500px] rounded-full bg-sky-500/12 blur-[150px] animate-atmospheric-pulse pointer-events-none" style={{ animationDelay: '4s' }} />

      {/* 3. Animated Parallax Container with Ken Burns Drift */}
      <div
        className="absolute inset-0 w-full h-full transition-transform duration-700 ease-out"
        style={{
          transform: `translate3d(${parallax.x}px, ${parallax.y}px, 0)`,
        }}
      >
        <img
          src={imageSrc}
          alt={alt}
          style={{ objectPosition }}
          className={`w-full h-full object-cover filter ${brightness} ${getDriftClass()} ${
            loaded ? 'opacity-85 sm:opacity-90' : 'opacity-0'
          } transition-opacity duration-1000 ease-out`}
          loading="lazy"
          decoding="async"
          referrerPolicy="no-referrer"
          onLoad={() => setLoaded(true)}
        />
      </div>

      {/* 4. Balanced Contrast Scrim (Ensures text is crystal-clear) */}
      <div className={`absolute inset-0 ${overlayOpacity} pointer-events-none`} />

      {/* 5. Radial Center Vignette - Elevates foreground typography */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(5,7,11,0.28)_0%,rgba(5,7,11,0.60)_55%,rgba(5,7,11,0.92)_100%)] pointer-events-none" />

      {/* 6. Anamorphic Light Sheen Sweep (Occasional organic photon reflection across the scene) */}
      {enableSheen && (
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="w-[320px] h-full bg-gradient-to-r from-transparent via-sky-400/10 to-transparent animate-energy-sheen pointer-events-none" />
        </div>
      )}

      {/* 7. Top & Bottom Smooth Seam Dissolves */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#05070B] via-[#05070B]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent pointer-events-none" />
    </div>
  );
};
