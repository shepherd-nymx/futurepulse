import React, { useState } from 'react';
import {
  Send,
  CheckCircle2,
  AlertCircle,
  Copy,
  Check,
  Phone,
  MessageSquare,
  Mail,
  GraduationCap,
} from 'lucide-react';
import { ContactFormData } from '../types';
import { COMPANY_INFO } from '../data/companyData';

export const ContactSection: React.FC = () => {
  const [formData, setFormData] = useState<ContactFormData>({
    name: '',
    email: '',
    organization: '',
    reason: 'Software Development & Maintenance',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<Record<keyof ContactFormData, string>>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [copiedDraft, setCopiedDraft] = useState(false);

  const reasons = [
    'Software Development & Maintenance',
    'Mobile App Development (iOS & Android)',
    'Autonomous AI Agents & Workflows',
    'System Maintenance & SLA Support',
    'IoT, Electronics & Hardware Prototyping',
    'Partnership',
    'Investment & Collaboration',
    'General enquiry',
  ];

  const validate = () => {
    const newErrors: Partial<Record<keyof ContactFormData, string>> = {};
    if (!formData.name.trim()) {
      newErrors.name = 'Full name is required.';
    }
    if (!formData.email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please provide a valid email address.';
    }
    if (!formData.message.trim() || formData.message.trim().length < 10) {
      newErrors.message = 'Please provide a message with at least 10 characters.';
    }
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    setIsSubmitting(true);
    // Simulating preparation and offering direct mailto handoff
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
    }, 500);
  };

  const handleCopyInquiry = () => {
    const text = `Inquiry for Future Pulse / Shepherd Mutevedzi\nFrom: ${formData.name} (${
      formData.email
    })${formData.organization ? `\nOrg: ${formData.organization}` : ''}\nReason: ${
      formData.reason
    }\n\nMessage:\n${formData.message}`;
    navigator.clipboard.writeText(text);
    setCopiedDraft(true);
    setTimeout(() => setCopiedDraft(false), 2500);
  };

  return (
    <section id="contact" className="py-24 sm:py-32 bg-[#05070B]/75 backdrop-blur-[2px] border-t border-white/[0.06] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Lead */}
        <div className="max-w-3xl mb-16">
          <div className="flex items-center gap-2 text-xs font-mono tracking-widest text-blue-400 uppercase mb-3">
            <span>09</span>
            <span className="text-slate-600" aria-hidden="true">/</span>
            <span>Direct Inquiries</span>
          </div>
          <h2 className="font-['Syne',sans-serif] text-3xl sm:text-4xl md:text-5xl font-bold text-white tracking-tight [text-wrap:balance]">
            LET'S BUILD &amp; MAINTAIN SOMETHING.
          </h2>
          <p className="mt-4 text-base sm:text-lg text-slate-300 leading-relaxed [text-wrap:balance]">
            Looking to develop or maintain a software platform, native iOS/Android mobile application,
            autonomous AI agent, or connected IoT system? Connect directly with founder Shepherd Mutevedzi.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Direct Founder Access Card */}
          <div className="lg:col-span-5 space-y-6">
            <div className="bg-[#090d15] border border-blue-500/30 rounded-3xl p-6 sm:p-8 space-y-6 shadow-xl relative overflow-hidden">
              {/* Subtle blue ambient halo */}
              <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 rounded-full blur-[80px] pointer-events-none" />

              {/* Founder Monogram & Company Brand Seal */}
              <div className="flex items-center justify-between gap-3 pb-6 border-b border-white/10 relative z-10">
                <div className="flex items-center gap-4">
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-blue-900/60 to-slate-900 border border-blue-500/40 flex items-center justify-center text-blue-300 font-['Syne',sans-serif] font-bold text-xl shrink-0 shadow-md">
                    SM
                  </div>
                  <div>
                    <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white">
                      {COMPANY_INFO.founder.name}
                    </h3>
                    <div className="text-xs font-mono text-blue-400 font-medium">
                      Founder · Future Pulse Investments
                    </div>
                    <div className="text-[11px] font-mono text-slate-400 flex items-center gap-1 mt-0.5">
                      <GraduationCap className="w-3 h-3 text-slate-400" />
                      <span>NUST Electronic Engineering, Zimbabwe</span>
                    </div>
                  </div>
                </div>

                <div className="w-12 h-12 rounded-xl bg-slate-950 border border-blue-500/40 overflow-hidden shadow-md shrink-0">
                  <img
                    src="/future-pulse-logo.png"
                    alt="Future Pulse Investments Logo"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>

              {/* Fast One-Click Direct Channels */}
              <div className="space-y-3 relative z-10">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-400 block">
                  Reach Shepherd Directly
                </span>

                {/* WhatsApp button */}
                <a
                  href={`https://wa.me/${COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-3.5 rounded-xl bg-emerald-950/60 hover:bg-emerald-900/60 border border-emerald-500/40 text-white flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-emerald-500/20 flex items-center justify-center text-emerald-400">
                      <MessageSquare className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">Chat on WhatsApp</span>
                      <span className="text-[11px] font-mono text-emerald-300">
                        {COMPANY_INFO.founder.whatsapp}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-emerald-400 group-hover:translate-x-1 transition-transform">
                    Message →
                  </span>
                </a>

                {/* Direct Phone Call */}
                <a
                  href={`tel:${COMPANY_INFO.founder.phone.replace(/[^0-9+]/g, '')}`}
                  className="p-3.5 rounded-xl bg-blue-950/60 hover:bg-blue-900/60 border border-blue-500/40 text-white flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-blue-500/20 flex items-center justify-center text-blue-400">
                      <Phone className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">Direct Call</span>
                      <span className="text-[11px] font-mono text-blue-300">
                        {COMPANY_INFO.founder.phone}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-blue-400 group-hover:translate-x-1 transition-transform">
                    Call →
                  </span>
                </a>

                {/* Direct Email */}
                <a
                  href={`mailto:${COMPANY_INFO.founder.email}`}
                  className="p-3.5 rounded-xl bg-slate-900/80 hover:bg-slate-850 border border-slate-700/80 text-white flex items-center justify-between transition-all group"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center text-slate-300">
                      <Mail className="w-4 h-4" />
                    </div>
                    <div>
                      <span className="text-xs font-bold block">Direct Founder Email</span>
                      <span className="text-[11px] font-mono text-slate-300 truncate max-w-[180px] sm:max-w-none block">
                        {COMPANY_INFO.founder.email}
                      </span>
                    </div>
                  </div>
                  <span className="text-xs font-mono text-slate-400 group-hover:translate-x-1 transition-transform">
                    Email →
                  </span>
                </a>
              </div>

              <div className="pt-4 border-t border-white/5 space-y-2 text-xs font-mono text-slate-400">
                <div className="flex justify-between">
                  <span className="text-slate-500">Corporate Base:</span>
                  <span className="text-slate-200">Zimbabwe</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-slate-500">Typical Response:</span>
                  <span className="text-emerald-400">Under 24 Hours</span>
                </div>
              </div>
            </div>
          </div>

          {/* Right Column: Contact Form */}
          <div className="lg:col-span-7">
            <div className="bg-[#090d15] border border-slate-800/90 rounded-3xl p-6 sm:p-10 shadow-2xl">
              {isSubmitted ? (
                <div className="py-8 text-center space-y-5 animate-in fade-in duration-300">
                  <div className="w-14 h-14 rounded-full bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 mx-auto">
                    <CheckCircle2 className="w-7 h-7" />
                  </div>
                  <h3 className="font-['Syne',sans-serif] text-2xl font-bold text-white">
                    Inquiry Summary Compiled
                  </h3>
                  <p className="text-sm text-slate-300 max-w-md mx-auto leading-relaxed">
                    Thank you, <span className="text-white font-semibold">{formData.name}</span>. Your
                    message regarding{' '}
                    <span className="text-blue-400 font-medium">{formData.reason}</span> has been
                    formatted for Shepherd Mutevedzi.
                  </p>

                  <div className="p-4 bg-slate-950 rounded-xl border border-slate-800 text-left text-xs font-mono text-slate-400 max-w-md mx-auto space-y-1">
                    <div>
                      <span className="text-slate-500">Recipient:</span> {COMPANY_INFO.founder.email}
                    </div>
                    <div>
                      <span className="text-slate-500">Sender:</span> {formData.email}
                    </div>
                    <div>
                      <span className="text-slate-500">Subject:</span> {formData.reason} Inquiry —
                      Future Pulse
                    </div>
                  </div>

                  <div className="flex flex-col sm:flex-row items-center justify-center gap-3 pt-2">
                    <a
                      href={`mailto:${COMPANY_INFO.founder.email}?subject=${encodeURIComponent(
                        formData.reason + ' Inquiry for Future Pulse'
                      )}&body=${encodeURIComponent(
                        `From: ${formData.name} (${formData.email})\nOrg: ${
                          formData.organization || 'N/A'
                        }\n\nMessage:\n${formData.message}`
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
                        onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                        placeholder="e.g. Tendai M."
                        className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${
                          errors.name ? 'border-rose-500/80' : 'border-slate-800 focus:border-blue-500/50'
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
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        placeholder="you@domain.com"
                        className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors ${
                          errors.email ? 'border-rose-500/80' : 'border-slate-800 focus:border-blue-500/50'
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
                        Organization <span className="text-slate-500 font-normal">(Optional)</span>
                      </label>
                      <input
                        id="organization"
                        type="text"
                        value={formData.organization}
                        onChange={(e) =>
                          setFormData({ ...formData, organization: e.target.value })
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
                        Reason for Contacting <span className="text-blue-400">*</span>
                      </label>
                      <select
                        id="reason"
                        value={formData.reason}
                        onChange={(e) => setFormData({ ...formData, reason: e.target.value })}
                        className="w-full px-4 py-3 bg-slate-950/70 border border-slate-800 focus:border-blue-500/50 rounded-xl text-sm text-white focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors cursor-pointer"
                      >
                        {reasons.map((r) => (
                          <option key={r} value={r} className="bg-slate-900 text-white">
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
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      placeholder="Share details regarding your inquiry, technical idea, or collaboration proposal..."
                      className={`w-full px-4 py-3 bg-slate-950/70 border rounded-xl text-sm text-white placeholder-slate-600 focus:outline-none focus:ring-1 focus:ring-blue-400 transition-colors resize-none ${
                        errors.message
                          ? 'border-rose-500/80'
                          : 'border-slate-800 focus:border-blue-500/50'
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
                          <span>Submit Message</span>
                          <Send className="w-3.5 h-3.5" />
                        </>
                      )}
                    </button>

                    <span className="text-xs font-mono text-slate-400">
                      Directly routed to{' '}
                      <span className="text-white font-medium">{COMPANY_INFO.founder.email}</span>
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
