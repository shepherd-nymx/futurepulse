import React, { useState } from 'react';

interface SectionTechBackdropProps {
  imageSrc: string;
  alt: string;
  objectPosition?: string;
  brightness?: string;
  overlayOpacity?: string;
  className?: string;
}

export const SectionTechBackdrop: React.FC<SectionTechBackdropProps> = ({
  imageSrc,
  alt,
  objectPosition = 'center 35%',
  brightness = 'brightness-[0.78] sm:brightness-[0.84] contrast-[1.12] saturate-[1.12]',
  overlayOpacity = 'bg-[#05070B]/70',
  className = '',
}) => {
  const [loaded, setLoaded] = useState(false);

  return (
    <div
      className={`absolute inset-0 w-full h-full pointer-events-none overflow-hidden select-none z-0 ${className}`}
      aria-hidden="true"
    >
      {/* 1. Base dark background */}
      <div className="absolute inset-0 bg-[#05070B]" />

      {/* 2. Full-bleed Tech Scenery Image spanning the entire section */}
      <img
        src={imageSrc}
        alt={alt}
        style={{ objectPosition }}
        className={`w-full h-full object-cover transform scale-102 transition-all duration-1000 ease-out filter ${brightness} ${
          loaded ? 'opacity-85 sm:opacity-90 scale-100' : 'opacity-0 scale-105'
        }`}
        loading="lazy"
        decoding="async"
        referrerPolicy="no-referrer"
        onLoad={() => setLoaded(true)}
      />

      {/* 3. Balanced contrast tint that keeps the tech imagery vividly visible while ensuring text is 100% readable */}
      <div className={`absolute inset-0 ${overlayOpacity} pointer-events-none`} />

      {/* 4. Radial center vignette - softens highlights directly behind the central reading line */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_50%_45%,rgba(5,7,11,0.30)_0%,rgba(5,7,11,0.62)_55%,rgba(5,7,11,0.92)_100%)] pointer-events-none" />

      {/* 5. Top & Bottom smooth seam dissolves so adjacent sections blend organically */}
      <div className="absolute inset-x-0 top-0 h-28 bg-gradient-to-b from-[#05070B] via-[#05070B]/50 to-transparent pointer-events-none" />
      <div className="absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-[#05070B] via-[#05070B]/60 to-transparent pointer-events-none" />
    </div>
  );
};
