import React from 'react';

export const GlobalTechBackground: React.FC = () => {
  return (
    <div
      className="fixed inset-0 pointer-events-none z-0 overflow-hidden bg-[#05070B]"
      aria-hidden="true"
    >
      {/* 1. Deep, luminous atmospheric ambient lighting (ultra-smooth floating gradients) */}
      <div className="absolute top-[8%] left-[18%] w-[650px] h-[650px] rounded-full bg-blue-600/12 blur-[160px] animate-ambient-1 pointer-events-none" />
      <div className="absolute bottom-[18%] right-[12%] w-[580px] h-[580px] rounded-full bg-sky-500/10 blur-[150px] animate-ambient-2 pointer-events-none" />
      <div className="absolute top-[52%] left-[8%] w-[520px] h-[520px] rounded-full bg-indigo-600/8 blur-[170px] animate-ambient-3 pointer-events-none" />
      <div className="absolute top-[80%] right-[30%] w-[480px] h-[480px] rounded-full bg-blue-500/8 blur-[150px] animate-ambient-1 pointer-events-none" />
      <div className="absolute top-[32%] right-[6%] w-[400px] h-[400px] rounded-full bg-cyan-500/6 blur-[140px] animate-ambient-2 pointer-events-none" />

      {/* 2. Crisp, architectural coordinate line grid with subtle radial vignette mask */}
      <div className="absolute inset-0 tech-grid-neat opacity-80 pointer-events-none" />
    </div>
  );
};
