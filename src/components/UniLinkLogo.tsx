import React from 'react';

interface UniLinkLogoProps {
  className?: string;
  size?: 'sm' | 'md' | 'lg' | 'xl';
  showText?: boolean;
  theme?: 'dark' | 'light' | 'badge';
}

export const UniLinkLogo: React.FC<UniLinkLogoProps> = ({
  className = '',
  size = 'md',
  showText = true,
  theme = 'badge',
}) => {
  const sizeMap = {
    sm: { box: 'w-8 h-8', svg: 32, text: 'text-xs tracking-widest' },
    md: { box: 'w-12 h-12', svg: 48, text: 'text-base tracking-[0.25em]' },
    lg: { box: 'w-16 h-16', svg: 64, text: 'text-xl tracking-[0.28em]' },
    xl: { box: 'w-24 h-24', svg: 96, text: 'text-2xl tracking-[0.3em]' },
  };

  const currentSize = sizeMap[size];

  return (
    <div className={`inline-flex items-center gap-3 ${className}`}>
      {/* Icon Squircle Badge */}
      <div
        className={`${currentSize.box} ${
          theme === 'badge'
            ? 'bg-white rounded-2xl shadow-lg p-1.5 flex items-center justify-center border border-slate-200/80'
            : theme === 'dark'
            ? 'bg-[#101828] rounded-2xl p-1.5 flex items-center justify-center border border-blue-900/50 shadow-md'
            : 'flex items-center justify-center'
        }`}
      >
        <svg
          viewBox="0 0 120 120"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
        >
          {/* Grocery items inside cart */}
          {/* 1. Red tomato / bowl item (left) */}
          <path
            d="M50 28 C50 28 59 28 59 34 C59 40 50 42 45 37 C41 33 44 28 50 28 Z"
            fill="#EF4444"
          />
          {/* 2. Orange citrus dome (center) */}
          <path
            d="M60 40 C60 28 76 28 76 40 Z"
            fill="#F97316"
          />
          {/* 3. Green fresh produce / leaf shape (right) */}
          <path
            d="M77 28 C85 27 90 30 90 38 C90 41 81 41 78 40 C76 37 76 31 77 28 Z"
            fill="#22C55E"
          />

          {/* Speed motion lines on left */}
          <path
            d="M22 47 H40"
            stroke="#16284F"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M26 61 H43"
            stroke="#16284F"
            strokeWidth="7"
            strokeLinecap="round"
          />
          <path
            d="M34 75 H45"
            stroke="#16284F"
            strokeWidth="7"
            strokeLinecap="round"
          />

          {/* Cart Frame & Handle */}
          {/* Top handle and back curve */}
          <path
            d="M31 35 H42 C45 35 48 37 49 41 L55 74 C56 78 59 81 63 81 H85 C89 81 92 78 93 74 L97 45 C97 44 96 43 95 43 H50"
            stroke="#16284F"
            strokeWidth="7"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Basket internal grid mesh */}
          <path
            d="M53 58 H93"
            stroke="#16284F"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M65 58 V77"
            stroke="#16284F"
            strokeWidth="6"
            strokeLinecap="round"
          />
          <path
            d="M77 58 V77"
            stroke="#16284F"
            strokeWidth="6"
            strokeLinecap="round"
          />

          {/* Wheels */}
          <circle cx="55" cy="94" r="7" fill="#16284F" />
          <circle cx="81" cy="94" r="7" fill="#16284F" />
        </svg>
      </div>

      {/* Brand Typography */}
      {showText && (
        <div className="flex flex-col">
          <span
            className={`font-['Syne',sans-serif] font-black uppercase text-white ${currentSize.text}`}
          >
            UNILINK
          </span>
          <span className="text-[10px] font-mono tracking-widest text-blue-400 uppercase -mt-0.5">
            YOUR GROCERIES. OUR LINK.
          </span>
        </div>
      )}
    </div>
  );
};
