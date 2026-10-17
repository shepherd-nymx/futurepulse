import React, { useState, useEffect } from 'react';
import { ShieldCheck, X, ExternalLink } from 'lucide-react';

interface CookieComplianceBannerProps {
  onOpenPolicy: (policySlug: string) => void;
}

export const CookieComplianceBanner: React.FC<CookieComplianceBannerProps> = ({
  onOpenPolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem('fp_compliance_consent');
      if (!consent) {
        // Small delay so it animates in smoothly without jarring the initial hero render
        const timer = setTimeout(() => setIsVisible(true), 1200);
        return () => clearTimeout(timer);
      }
    } catch {
      // LocalStorage access may be restricted in private sandboxes
      setIsVisible(true);
    }
  }, []);

  const handleAccept = () => {
    try {
      localStorage.setItem('fp_compliance_consent', 'accepted');
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      sessionStorage.setItem('fp_compliance_banner_dismissed', 'true');
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div
      role="region"
      aria-label="Privacy and compliance notice"
      className="fixed bottom-0 left-0 right-0 z-40 p-3 sm:p-4 bg-[#070B14]/95 backdrop-blur-md border-t border-white/10 shadow-2xl shadow-black/80 text-slate-200"
    >
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-start md:items-center justify-between gap-3 sm:gap-4">
        {/* Notice Info */}
        <div className="flex items-start gap-3">
          <div className="w-8 h-8 rounded-lg bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0 mt-0.5">
            <ShieldCheck className="w-4 h-4" />
          </div>
          <div className="text-xs text-slate-300 leading-relaxed font-sans max-w-3xl">
            <span className="font-semibold text-white">Compliance &amp; Data Notice: </span>
            Future Pulse Investments operates in accordance with Zimbabwe's{' '}
            <span className="text-blue-300">Cyber and Data Protection Act [Chapter 12:07]</span> and{' '}
            <span className="text-blue-300">Consumer Protection Act [Chapter 14:14]</span>. We use essential local storage to support seamless application navigation and do not deploy cross-site advertising trackers or sell personal data.{' '}
            <button
              onClick={() => onOpenPolicy('privacy-policy')}
              className="text-blue-400 hover:text-white underline underline-offset-2 ml-1 cursor-pointer font-medium"
            >
              Privacy Policy
            </button>{' '}
            and{' '}
            <button
              onClick={() => onOpenPolicy('cookie-policy')}
              className="text-blue-400 hover:text-white underline underline-offset-2 cursor-pointer font-medium"
            >
              Cookie Policy
            </button>
            .
          </div>
        </div>

        {/* Action Controls */}
        <div className="flex items-center gap-2 self-end md:self-center shrink-0 w-full sm:w-auto justify-end">
          <button
            onClick={() => onOpenPolicy('cookie-policy')}
            className="px-3 py-1.5 rounded-lg bg-slate-900 hover:bg-slate-800 border border-white/10 text-xs font-mono text-slate-300 hover:text-white transition-colors cursor-pointer"
          >
            Preferences
          </button>

          <button
            onClick={handleAccept}
            className="px-4 py-1.5 rounded-lg bg-blue-600 hover:bg-blue-500 text-xs font-semibold text-white transition-all shadow-sm shadow-blue-500/25 cursor-pointer whitespace-nowrap active:scale-[0.98]"
          >
            Acknowledge &amp; Accept
          </button>

          <button
            onClick={handleDismiss}
            className="p-1.5 rounded-lg text-slate-400 hover:text-white hover:bg-white/5 transition-colors cursor-pointer"
            aria-label="Dismiss compliance notice"
          >
            <X className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
