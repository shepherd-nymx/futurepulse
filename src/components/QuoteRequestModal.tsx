import React, { useState, useEffect } from 'react';
import { X, MessageSquare, Mail, Copy, Check, Sparkles, AlertCircle } from 'lucide-react';
import { PricingItem, QuoteRequestData } from '../types';
import { SERVICES_PRICING_ITEMS } from '../data/servicesPricingData';
import { COMPANY_INFO } from '../data/companyData';
import { supabase } from '../lib/supabase';

interface QuoteRequestModalProps {
  isOpen: boolean;
  onClose: () => void;
  preSelectedService?: PricingItem | null;
}

export const QuoteRequestModal: React.FC<QuoteRequestModalProps> = ({
  isOpen,
  onClose,
  preSelectedService,
}) => {
  const [formData, setFormData] = useState<QuoteRequestData>({
    clientName: '',
    email: '',
    phoneOrWhatsapp: '',
    companyOrOrganization: '',
    selectedServices: [],
    budgetRange: '$300 - $800',
    timeline: 'Standard (2-4 weeks)',
    projectDescription: '',
  });

  const [copied, setCopied] = useState(false);
  const [errorMessage, setErrorMessage] = useState<string | null>(null);

  // Sync pre-selected service when modal opens
  useEffect(() => {
    if (preSelectedService) {
      setFormData((prev) => ({
        ...prev,
        selectedServices: [preSelectedService.id],
      }));
    } else {
      setFormData((prev) => ({
        ...prev,
        selectedServices: prev.selectedServices.length > 0 ? prev.selectedServices : ['web-starter'],
      }));
    }
    setErrorMessage(null);
  }, [preSelectedService, isOpen]);

  if (!isOpen) return null;

  const toggleService = (serviceId: string) => {
    setFormData((prev) => {
      const exists = prev.selectedServices.includes(serviceId);
      if (exists) {
        if (prev.selectedServices.length === 1) return prev; // Keep at least one
        return {
          ...prev,
          selectedServices: prev.selectedServices.filter((id) => id !== serviceId),
        };
      } else {
        return {
          ...prev,
          selectedServices: [...prev.selectedServices, serviceId],
        };
      }
    });
  };

  const getSelectedServiceTitles = () => {
    return formData.selectedServices
      .map((id) => SERVICES_PRICING_ITEMS.find((s) => s.id === id)?.title)
      .filter(Boolean)
      .join(', ');
  };

  const validateForm = () => {
    if (!formData.clientName.trim()) {
      setErrorMessage('Please provide your name.');
      return false;
    }
    if (!formData.phoneOrWhatsapp.trim() && !formData.email.trim()) {
      setErrorMessage('Please provide either a WhatsApp/Phone number or an Email address.');
      return false;
    }
    setErrorMessage(null);
    return true;
  };

  const generateMessageBody = () => {
    const servicesList = getSelectedServiceTitles();
    return `*FUTURE PULSE INVESTMENTS — QUOTATION INQUIRY*
━━━━━━━━━━━━━━━━━━━━━
👤 *Client Name:* ${formData.clientName}
🏢 *Company / Org:* ${formData.companyOrOrganization || 'Not specified'}
📱 *WhatsApp/Phone:* ${formData.phoneOrWhatsapp || 'Not provided'}
✉️ *Email:* ${formData.email || 'Not provided'}

🛠️ *Requested Service(s):*
${servicesList}

💰 *Estimated Budget:* ${formData.budgetRange}
⏱️ *Desired Timeline:* ${formData.timeline}

📝 *Project Overview & Requirements:*
${formData.projectDescription.trim() || 'No additional notes provided. Please contact me to discuss full technical requirements.'}
━━━━━━━━━━━━━━━━━━━━━
_Sent via Future Pulse Investments Services & Pricing Portal_`;
  };

  const handleSendAndSave = async (send: () => void) => {
    if (!validateForm()) return;
    const { error } = await supabase.from('quote_requests').insert({
      client_name: formData.clientName.trim(),
      email: formData.email.trim() || null,
      phone_or_whatsapp: formData.phoneOrWhatsapp.trim() || null,
      company_or_organization: formData.companyOrOrganization.trim() || null,
      selected_services: formData.selectedServices,
      budget_range: formData.budgetRange,
      timeline: formData.timeline,
      project_description: formData.projectDescription.trim() || null,
    });
    if (error) {
      console.error('Failed to save quote request:', error);
    }
    send();
  };

  const handleWhatsAppSend = () => {
    handleSendAndSave(() => {
      const cleanNumber = COMPANY_INFO.founder.whatsapp.replace(/[^0-9]/g, '');
      const text = encodeURIComponent(generateMessageBody());
      const waUrl = `https://wa.me/${cleanNumber}?text=${text}`;
      window.open(waUrl, '_blank', 'noopener,noreferrer');
    });
  };

  const handleEmailSend = () => {
    handleSendAndSave(() => {
      const subject = encodeURIComponent(
        `Quotation Request: ${formData.companyOrOrganization ? formData.companyOrOrganization + ' - ' : ''}${formData.clientName}`
      );
      const body = encodeURIComponent(generateMessageBody());
      const mailtoUrl = `mailto:${COMPANY_INFO.founder.email}?subject=${subject}&body=${body}`;
      window.location.href = mailtoUrl;
    });
  };

  const handleCopy = () => {
    if (!validateForm()) return;
    navigator.clipboard.writeText(generateMessageBody());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/80 backdrop-blur-sm transition-opacity"
        onClick={onClose}
      />

      {/* Modal Dialog */}
      <div className="relative w-full max-w-2xl bg-[#090D16] border border-white/10 rounded-2xl shadow-2xl shadow-black/80 z-10 my-8 overflow-hidden text-slate-100 flex flex-col max-h-[90vh]">
        {/* Header */}
        <div className="p-5 sm:p-6 border-b border-white/10 flex items-start justify-between bg-white/[0.02]">
          <div>
            <div className="flex items-center gap-2 text-xs font-mono text-blue-400 uppercase tracking-widest mb-1">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Future Pulse Investments · Quotation Request</span>
            </div>
            <h2 className="font-['Syne',sans-serif] text-xl sm:text-2xl font-bold tracking-tight text-white">
              Request a Project Quotation
            </h2>
            <p className="text-xs sm:text-sm text-slate-400 mt-1">
              Fill in your details below. We deliver fast, transparent quotations directly via WhatsApp and Email.
            </p>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
            aria-label="Close quote modal"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Scrollable Form Body */}
        <div className="p-5 sm:p-6 space-y-5 overflow-y-auto flex-1 text-sm">
          {errorMessage && (
            <div className="p-3 bg-red-950/50 border border-red-500/40 rounded-xl text-xs text-red-300 flex items-center gap-2">
              <AlertCircle className="w-4 h-4 text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Contact Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Your Full Name <span className="text-blue-400">*</span>
              </label>
              <input
                type="text"
                required
                placeholder="e.g. Shepherd Mutevedzi"
                value={formData.clientName}
                onChange={(e) => setFormData({ ...formData, clientName: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Company / Organization
              </label>
              <input
                type="text"
                placeholder="e.g. Apex Logistics / University"
                value={formData.companyOrOrganization}
                onChange={(e) => setFormData({ ...formData, companyOrOrganization: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                WhatsApp / Phone Number <span className="text-blue-400">*</span>
              </label>
              <input
                type="tel"
                placeholder="+263 78 000 0000"
                value={formData.phoneOrWhatsapp}
                onChange={(e) => setFormData({ ...formData, phoneOrWhatsapp: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Email Address
              </label>
              <input
                type="email"
                placeholder="client@example.com"
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm"
              />
            </div>
          </div>

          {/* Service Selection Checklist */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-2">
              Select Required Services (Click to toggle)
            </label>
            <div className="flex flex-wrap gap-2 max-h-40 overflow-y-auto p-1.5 rounded-xl bg-slate-950/60 border border-white/5">
              {SERVICES_PRICING_ITEMS.map((service) => {
                const isSelected = formData.selectedServices.includes(service.id);
                return (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => toggleService(service.id)}
                    className={`px-3 py-1.5 rounded-lg text-xs font-medium transition-all flex items-center gap-1.5 cursor-pointer whitespace-nowrap ${
                      isSelected
                        ? 'bg-blue-600 text-white shadow-sm shadow-blue-500/25 border border-blue-400/50'
                        : 'bg-slate-900 text-slate-400 hover:text-slate-200 border border-white/10 hover:border-white/20'
                    }`}
                  >
                    <span>{service.title}</span>
                    <span className="font-mono text-[10px] opacity-80">({service.priceDisplay})</span>
                    {isSelected && <Check className="w-3 h-3 ml-0.5" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Budget & Timeline Selectors */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Estimated Budget Bracket (USD)
              </label>
              <select
                value={formData.budgetRange}
                onChange={(e) => setFormData({ ...formData, budgetRange: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm font-mono"
              >
                <option value="Under $300">Under $300 USD</option>
                <option value="$300 - $800">$300 - $800 USD</option>
                <option value="$800 - $1,500">$800 - $1,500 USD</option>
                <option value="$1,500 - $3,000">$1,500 - $3,000 USD</option>
                <option value="$3,000+">$3,000+ USD</option>
                <option value="Not sure / Need assessment">Not sure / Need assessment</option>
              </select>
            </div>

            <div>
              <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
                Desired Timeline
              </label>
              <select
                value={formData.timeline}
                onChange={(e) => setFormData({ ...formData, timeline: e.target.value })}
                className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white focus:outline-none focus:border-blue-500 transition-colors text-sm font-mono"
              >
                <option value="Urgent (1-2 weeks)">Urgent (1 - 2 weeks)</option>
                <option value="Standard (2-4 weeks)">Standard (2 - 4 weeks)</option>
                <option value="Flexible (1-2 months)">Flexible (1 - 2 months)</option>
                <option value="Ongoing Maintenance / Retainer">Ongoing SLA / Maintenance</option>
              </select>
            </div>
          </div>

          {/* Project Scope Description */}
          <div>
            <label className="block text-xs font-mono uppercase tracking-wider text-slate-300 mb-1.5">
              Project Description & Requirements
            </label>
            <textarea
              rows={3}
              placeholder="Tell us about your project goals, key features, reference websites, or hardware constraints..."
              value={formData.projectDescription}
              onChange={(e) => setFormData({ ...formData, projectDescription: e.target.value })}
              className="w-full px-3.5 py-2.5 rounded-xl bg-slate-900/90 border border-white/10 text-white placeholder-slate-500 focus:outline-none focus:border-blue-500 transition-colors text-sm leading-relaxed"
            />
          </div>

          {/* Transparency Micro-Notice */}
          <div className="p-3 rounded-xl bg-slate-950 border border-white/5 text-[11px] font-mono text-slate-400 leading-normal">
            ℹ️ <span className="text-slate-300 font-semibold">Note:</span> Listed prices are starting estimates in USD. Hosting, domain registrations, store accounts, and IoT components are charged separately.
          </div>
        </div>

        {/* Footer Actions */}
        <div className="p-4 sm:p-5 border-t border-white/10 bg-slate-950/80 flex flex-col sm:flex-row items-center justify-between gap-3">
          <button
            type="button"
            onClick={handleCopy}
            className="w-full sm:w-auto px-4 py-2.5 text-xs font-medium text-slate-300 hover:text-white bg-slate-900 hover:bg-slate-800 border border-white/10 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
          >
            {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
            <span>{copied ? 'Copied Details!' : 'Copy Summary'}</span>
          </button>

          <div className="flex items-center gap-2.5 w-full sm:w-auto">
            <button
              type="button"
              onClick={handleEmailSend}
              className="flex-1 sm:flex-none px-4 py-2.5 text-xs font-semibold text-white bg-slate-800 hover:bg-slate-700 border border-white/15 rounded-xl transition-colors flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap"
            >
              <Mail className="w-4 h-4 text-blue-400" />
              <span>Email Draft</span>
            </button>

            <button
              type="button"
              onClick={handleWhatsAppSend}
              className="flex-1 sm:flex-none px-5 py-2.5 text-xs font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl transition-all shadow-md shadow-emerald-600/20 flex items-center justify-center gap-1.5 cursor-pointer whitespace-nowrap active:scale-[0.98]"
            >
              <MessageSquare className="w-4 h-4" />
              <span>Send via WhatsApp</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
