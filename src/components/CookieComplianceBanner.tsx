import React, { useState, useEffect } from "react";
import { ShieldCheck, X, ExternalLink } from "lucide-react";

interface CookieComplianceBannerProps {
  onOpenPolicy: (policySlug: string) => void;
}

export const CookieComplianceBanner: React.FC<CookieComplianceBannerProps> = ({
  onOpenPolicy,
}) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const consent = localStorage.getItem("fp_compliance_consent");
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
      localStorage.setItem("fp_compliance_consent", "accepted");
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  const handleDismiss = () => {
    try {
      sessionStorage.setItem("fp_compliance_banner_dismissed", "true");
    } catch {
      // Ignore storage errors
    }
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <aside
      className="studio-privacy"
      role="region"
      aria-label="Privacy and compliance notice"
    >
      <button
        className="privacy-dismiss"
        onClick={handleDismiss}
        aria-label="Dismiss compliance notice"
      >
        <X size={15} />
      </button>
      <span className="studio-eyebrow">A LITTLE NOTE ON PRIVACY</span>
      <p>Essential storage. No advertising trackers.</p>
      <div>
        <button onClick={handleAccept}>
          Got it <span>↗</span>
        </button>
        <button onClick={() => onOpenPolicy("privacy-policy")}>
          Privacy policy
        </button>
        <button onClick={() => onOpenPolicy("cookie-policy")}>
          Storage details
        </button>
      </div>
    </aside>
  );
};
