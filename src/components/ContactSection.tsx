import React, { useState } from "react";
import {
  ExternalLink,
  Mail,
  Send,
  CircleCheck as CheckCircle2,
  CircleAlert as AlertCircle,
  Copy,
  Check,
  MessageSquare,
} from "lucide-react";
import { ContactFormData } from "../types";
import { COMPANY_INFO } from "../data/companyData";
import { supabase, isSupabaseConfigured } from "../lib/supabase";

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: "",
    email: "",
    organization: "",
    reason: "Software Development & Maintenance",
    message: "",
  });

  const [errors, setErrors] = useState<
    Partial<Record<keyof ContactFormData, string>>
  >({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const reasons = [
    "Software Development & Maintenance",
    "Mobile App Development (iOS & Android)",
    "Online Autonomous AI Agents",
    "System Maintenance & SLA Support",
    "IoT, Electronics & Hardware Prototyping",
    "Partnership",
    "Investment & Collaboration",
    "General enquiry",
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = "Full name is required.";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email address is required.";
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please provide a valid email address.";
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message =
        "Please provide a message with at least 10 characters.";
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    if (isSupabaseConfigured) {
      try {
        const { error } = await supabase.from("contact_messages").insert({
          name: formData.name.trim(),
          email: formData.email.trim(),
          organization: formData.organization?.trim() || null,
          reason: formData.reason,
          message: formData.message.trim(),
        });
        if (error) {
          console.error("Failed to save inquiry to Supabase:", error);
        }
      } catch (err) {
        console.warn("Supabase insert skipped or failed:", err);
      }
    }
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry for Future Pulse / Shepherd Mutevedzi\nFrom: ${formData.name} (${
      formData.email
    })${formData.organization ? `\nOrg: ${formData.organization}` : ""}\nReason: ${
      formData.reason
    }\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="studio-section studio-contact">
      <div className="studio-container">
        <div className="contact-layout">
          <div className="contact-intro" data-reveal>
            <p className="studio-eyebrow">LET’S MAKE SOMETHING USEFUL.</p>
            <h2 className="studio-heading">
              Your next idea.
              <br />
              <em>Our next conversation.</em>
            </h2>
            <p className="studio-description">
              Tell us what you’re trying to solve. We’ll help you work out what
              it needs, where to start, and what comes next.
            </p>
            <a
              className="contact-direct"
              href={`mailto:${COMPANY_INFO.founder.email}`}
            >
              {COMPANY_INFO.founder.email}
              <ExternalLink size={19} />
            </a>
            <a
              className="contact-direct"
              href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, "")}`}
              target="_blank"
              rel="noopener noreferrer"
            >
              Talk on WhatsApp <MessageSquare size={19} />
            </a>
            <div className="contact-signoff">
              <span className="signal-dot" /> Direct to Shepherd. No layers in
              between.<span>{COMPANY_INFO.headquarters}</span>
            </div>
          </div>
          {/* Right Column: Contact Form */}
          <div className="contact-form-column">
            <div className="contact-form-surface">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                    Inquiry Summary Compiled
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you,{" "}
                    <span className="text-white font-semibold">
                      {formData.name}
                    </span>
                    . Your message regarding{" "}
                    <span className="text-blue-400 font-medium">
                      {formData.reason}
                    </span>{" "}
                    has been formatted for Shepherd Mutevedzi.
                  </p>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs font-mono text-slate-400 max-w-md mx-auto space-y-1">
                    <div>
                      <span className="text-slate-500">Recipient:</span>{" "}
                      {COMPANY_INFO.founder.email}
                    </div>
                    <div>
                      <span className="text-slate-500">Sender:</span>{" "}
                      {formData.email}
                    </div>
                    <div>
                      <span className="text-slate-500">Subject:</span>{" "}
                      {formData.reason} Inquiry — Future Pulse
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.founder.email}?subject=${encodeURIComponent(
                        formData.reason + " Inquiry for Future Pulse",
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\nOrg: ${
                          formData.organization || "N/A"
                        }\n\nMessage:\n${formData.message}`,
                      )}`}
                      className="w-full sm:w-auto px-5 py-3 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 rounded-xl transition-colors flex items-center justify-center gap-2"
                    >
                      <Mail className="w-3.5 h-3.5" />
                      <span>Launch in Email Client</span>
                    </a>

                    <button
                      onClick={handleCopyInquiry}
                      className="w-full sm:w-auto px-4 py-3 text-xs font-mono text-slate-300 hover:text-white bg-slate-900 border border-slate-700 rounded-xl flex items-center justify-center gap-2 cursor-pointer transition-colors"
                    >
                      {copiedDraft ? (
                        <>
                          <Check className="w-3.5 h-3.5 text-blue-400" />
                          <span>Copied to Clipboard</span>
                        </>
                      ) : (
                        <>
                          <Copy className="w-3.5 h-3.5" />
                          <span>Copy Message Text</span>
                        </>
                      )}
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate className="space-y-5">
                  {/* Name & Email Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="name"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Your Name <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="name"
                        type="text"
                        value={formData.name}
                        onChange={(e) =>
                          setFormData({ ...formData, name: e.target.value })
                        }
                        placeholder="e.g. Tendai M."
                        className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${
                          errors.name
                            ? "border-rose-500/80"
                            : "border-slate-800 focus:border-blue-500/50"
                        }`}
                      />
                      {errors.name && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.name}</span>
                        </p>
                      )}
                    </div>

                    <div>
                      <label
                        htmlFor="email"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Email Address <span className="text-blue-400">*</span>
                      </label>
                      <input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) =>
                          setFormData({ ...formData, email: e.target.value })
                        }
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${
                          errors.email
                            ? "border-rose-500/80"
                            : "border-slate-800 focus:border-blue-500/50"
                        }`}
                      />
                      {errors.email && (
                        <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                          <AlertCircle className="w-3.5 h-3.5" />
                          <span>{errors.email}</span>
                        </p>
                      )}
                    </div>
                  </div>

                  {/* Organization & Reason Row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label
                        htmlFor="organization"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Organization{" "}
                        <span className="text-slate-500 font-normal">
                          (Optional)
                        </span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({
                            ...formData,
                            organization: e.target.value,
                          })
                        }
                        placeholder="Company, University or Group"
                        className="w-full px-4 py-3 bg-slate-950/70 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors"
                      />
                    </div>

                    <div>
                      <label
                        htmlFor="reason"
                        className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                      >
                        Reason for Contacting{" "}
                        <span className="text-blue-400">*</span>
                      </label>
                      <select
                        id="reason"
                        value={formData.reason}
                        onChange={(e) =>
                          setFormData({ ...formData, reason: e.target.value })
                        }
                        className="w-full px-4 py-3 bg-slate-950/70 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors cursor-pointer"
                      >
                        {reasons.map((r) => (
                          <option
                            key={r}
                            value={r}
                            className="bg-slate-900 text-white"
                          >
                            {r}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>

                  {/* Message Field */}
                  <div>
                    <label
                      htmlFor="message"
                      className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2"
                    >
                      Message <span className="text-blue-400">*</span>
                    </label>
                    <textarea
                      id="message"
                      rows={5}
                      value={formData.message}
                      onChange={(e) =>
                        setFormData({ ...formData, message: e.target.value })
                      }
                      placeholder="Share details regarding your inquiry, technical idea, or collaboration proposal..."
                      className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-none ${
                        errors.message
                          ? "border-rose-500/80"
                          : "border-slate-800 focus:border-blue-500/50"
                      }`}
                    />
                    {errors.message && (
                      <p className="mt-1.5 text-xs text-rose-400 flex items-center gap-1 font-mono">
                        <AlertCircle className="w-3.5 h-3.5" />
                        <span>{errors.message}</span>
                      </p>
                    )}
                  </div>

                  {/* Submit Action */}
                  <div className="pt-2 flex flex-col sm:flex-row items-center gap-4">
                    <button
                      type="submit"
                      disabled={isSubmitting}
                      className="w-full sm:w-auto px-8 py-3.5 text-xs font-semibold uppercase tracking-wider text-white bg-blue-600 hover:bg-blue-500 disabled:bg-slate-800 rounded-xl transition-all duration-200 shadow-md shadow-blue-900/30 flex items-center justify-center gap-2 cursor-pointer active:scale-[0.98]"
                    >
                      {isSubmitting ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          <span>Formatting Message...</span>
                        </>
                      ) : (
                        <>
                          <span>Prepare my inquiry</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <span className="text-xs font-mono text-slate-400">
                      Ready to send to{" "}
                      <span className="text-white font-medium">
                        {COMPANY_INFO.founder.email}
                      </span>
                    </span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
