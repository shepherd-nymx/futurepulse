import React, { useState } from 'react';
import {
  X,
  Lock,
  Unlock,
  Plus,
  Trash2,
  Copy,
  Check,
  Printer,
  FileText,
  Calculator,
  AlertCircle,
} from 'lucide-react';
import { AdminQuoteLineItem } from '../types';
import { SERVICES_PRICING_ITEMS } from '../data/servicesPricingData';
import { COMPANY_INFO } from '../data/companyData';

interface AdminQuoteGeneratorModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const DEFAULT_PIN = '2026';

export const AdminQuoteGeneratorModal: React.FC<AdminQuoteGeneratorModalProps> = ({
  isOpen,
  onClose,
}) => {
  const [pinInput, setPinInput] = useState('');
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [pinError, setPinError] = useState(false);

  // Proposal State
  const [clientName, setClientName] = useState('Acme Enterprise');
  const [projectTitle, setProjectTitle] = useState('Full-Stack Web Platform & SEO Implementation');
  const [clientContact, setClientContact] = useState('');
  const [notes, setNotes] = useState(
    'Hosting, domain registration, and third-party API subscriptions are billed separately unless specified.'
  );

  const [lineItems, setLineItems] = useState<AdminQuoteLineItem[]>([
    {
      id: 'item-1',
      serviceId: 'web-business',
      name: 'Business Website (Up to 6 pages)',
      category: 'Website Development',
      unitPrice: 300,
      quantity: 1,
    },
    {
      id: 'item-2',
      serviceId: 'seo-professional',
      name: 'Professional SEO Setup & GSC',
      category: 'SEO Services',
      unitPrice: 120,
      quantity: 1,
    },
  ]);

  const [hardwareBOMCost, setHardwareBOMCost] = useState<number>(0);
  const [discountPercent, setDiscountPercent] = useState<number>(0);
  const [copied, setCopied] = useState(false);

  if (!isOpen) return null;

  const handlePinSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (pinInput.trim() === DEFAULT_PIN) {
      setIsAuthenticated(true);
      setPinError(false);
    } else {
      setPinError(true);
    }
  };

  const addPresetService = (serviceId: string) => {
    const service = SERVICES_PRICING_ITEMS.find((s) => s.id === serviceId);
    if (!service) return;

    const newItem: AdminQuoteLineItem = {
      id: `item-${Date.now()}-${Math.random().toString(36).substr(2, 4)}`,
      serviceId: service.id,
      name: `${service.title}${service.subtitle ? ` (${service.subtitle})` : ''}`,
      category: service.categoryLabel,
      unitPrice: service.startingPrice || 500,
      quantity: 1,
    };
    setLineItems((prev) => [...prev, newItem]);
  };

  const addCustomItem = () => {
    const newItem: AdminQuoteLineItem = {
      id: `custom-${Date.now()}`,
      name: 'Custom Technical Deliverable',
      category: 'Custom Engineering',
      unitPrice: 100,
      quantity: 1,
    };
    setLineItems((prev) => [...prev, newItem]);
  };

  const updateItem = (id: string, field: keyof AdminQuoteLineItem, value: any) => {
    setLineItems((prev) =>
      prev.map((item) => (item.id === id ? { ...item, [field]: value } : item))
    );
  };

  const removeItem = (id: string) => {
    setLineItems((prev) => prev.filter((item) => item.id !== id));
  };

  // Calculations
  const servicesSubtotal = lineItems.reduce(
    (sum, item) => sum + (Number(item.unitPrice) || 0) * (Number(item.quantity) || 1),
    0
  );

  const discountAmount = (servicesSubtotal * (Number(discountPercent) || 0)) / 100;
  const grandTotal = servicesSubtotal - discountAmount + (Number(hardwareBOMCost) || 0);

  const generateProposalText = () => {
    const itemsFormatted = lineItems
      .map(
        (it, idx) =>
          `${idx + 1}. ${it.name} [${it.quantity}x @ $${it.unitPrice}] = $${it.unitPrice * it.quantity}`
      )
      .join('\n');

    return `═════════════════════════════════════════════
FUTURE PULSE INVESTMENTS
Official Engineering Quotation
═════════════════════════════════════════════
Quotation Ref: FP-${new Date().getFullYear()}-${Math.floor(1000 + Math.random() * 9000)}
Date: ${new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
Prepared For: ${clientName}
Project: ${projectTitle}
${clientContact ? `Contact: ${clientContact}` : ''}

ITEMIZED DELIVERABLES:
─────────────────────────────────────────────
${itemsFormatted}
─────────────────────────────────────────────
Services Subtotal: $${servicesSubtotal.toFixed(2)} USD
${discountPercent > 0 ? `Discount (${discountPercent}%): -$${discountAmount.toFixed(2)} USD\n` : ''}${hardwareBOMCost > 0 ? `Hardware / IoT Components (BOM): +$${hardwareBOMCost.toFixed(2)} USD\n` : ''}TOTAL ESTIMATED AMOUNT: $${grandTotal.toFixed(2)} USD

TERMS & CONDITIONS:
• Payment Terms: 50% deposit prior to development kick-off, 50% upon milestone completion and client acceptance.
• Third-party expenses (domain registration, cloud hosting, app store fees, SMS/API quotas) are billed separately.
• Validity: This quotation is valid for 30 days from date of issuance.
• Notice: ${notes}

ENGINEERING LEAD:
Shepherd Mutevedzi
Founder, Future Pulse Investments
WhatsApp: ${COMPANY_INFO.founder.whatsapp}
Email: ${COMPANY_INFO.founder.email}
Harare, Zimbabwe
═════════════════════════════════════════════`;
  };

  const handleCopyProposal = () => {
    navigator.clipboard.writeText(generateProposalText());
    setCopied(true);
    setTimeout(() => setCopied(false), 2500);
  };

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-4 overflow-y-auto">
      {/* Backdrop */}
      <div
        className="fixed inset-0 bg-black/85 backdrop-blur-md transition-opacity"
        onClick={onClose}
      />

      {/* Main Container */}
      <div className="relative w-full max-w-4xl bg-[#080C14] border border-white/10 rounded-2xl shadow-2xl shadow-black/90 z-10 my-8 overflow-hidden text-slate-100 flex flex-col max-h-[92vh]">
        {/* Modal Header */}
        <div className="p-4 sm:p-6 border-b border-white/10 flex items-center justify-between bg-white/[0.02]">
          <div className="flex items-center gap-3">
            <div className="w-9 h-9 rounded-xl bg-blue-950/80 border border-blue-500/40 flex items-center justify-center text-blue-400 shrink-0">
              {isAuthenticated ? <Unlock className="w-4 h-4 text-emerald-400" /> : <Lock className="w-4 h-4" />}
            </div>
            <div>
              <div className="text-[10px] font-mono tracking-widest text-blue-400 uppercase">
                Admin Control Room
              </div>
              <h2 className="font-['Syne',sans-serif] text-lg sm:text-xl font-bold text-white">
                Future Pulse Quotation Generator
              </h2>
            </div>
          </div>

          <div className="flex items-center gap-2">
            {isAuthenticated && (
              <button
                onClick={() => {
                  setIsAuthenticated(false);
                  setPinInput('');
                }}
                className="px-3 py-1 text-xs font-mono text-slate-400 hover:text-white bg-slate-900 border border-white/10 rounded-lg hover:bg-slate-800 transition-colors"
              >
                Lock Session
              </button>
            )}
            <button
              onClick={onClose}
              className="p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-white/5 transition-colors"
              aria-label="Close admin modal"
            >
              <X className="w-5 h-5" />
            </button>
          </div>
        </div>

        {/* PIN Authentication Gate */}
        {!isAuthenticated ? (
          <div className="p-8 sm:p-12 text-center max-w-md mx-auto space-y-6">
            <div className="w-16 h-16 rounded-2xl bg-blue-900/20 border border-blue-500/30 flex items-center justify-center mx-auto text-blue-400">
              <Lock className="w-8 h-8" />
            </div>

            <div className="space-y-2">
              <h3 className="font-['Syne',sans-serif] text-xl font-bold text-white">
                Admin Access Verification
              </h3>
              <p className="text-xs text-slate-400 leading-relaxed">
                This internal quotation builder allows Future Pulse management to dynamically adjust rates, line items, and generate formal client proposals.
              </p>
            </div>

            <form onSubmit={handlePinSubmit} className="space-y-4">
              <div>
                <input
                  type="password"
                  placeholder="Enter 4-digit PIN (default: 2026)"
                  value={pinInput}
                  onChange={(e) => {
                    setPinInput(e.target.value);
                    setPinError(false);
                  }}
                  className="w-full px-4 py-3 rounded-xl bg-slate-900/90 border border-white/15 text-center text-lg font-mono tracking-widest text-white placeholder-slate-500 focus:outline-none focus:border-blue-500"
                  autoFocus
                />
                {pinError && (
                  <p className="text-xs text-red-400 mt-2 font-mono flex items-center justify-center gap-1.5">
                    <AlertCircle className="w-3.5 h-3.5" />
                    <span>Incorrect PIN. Please try again.</span>
                  </p>
                )}
              </div>

              <button
                type="submit"
                className="w-full py-3 px-4 bg-blue-600 hover:bg-blue-500 text-white font-semibold rounded-xl text-sm transition-all shadow-md shadow-blue-500/20 active:scale-[0.98] cursor-pointer"
              >
                Authenticate &amp; Open Generator
              </button>

              <div className="text-[11px] font-mono text-slate-500">
                Hint: Future Pulse founding year (2026)
              </div>
            </form>
          </div>
        ) : (
          /* Authenticated Quote Generator Body */
          <div className="p-5 sm:p-6 overflow-y-auto space-y-6 text-sm flex-1">
            {/* Top Metadata Strip */}
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 p-4 bg-slate-950/70 border border-white/5 rounded-xl">
              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Client / Company Name
                </label>
                <input
                  type="text"
                  value={clientName}
                  onChange={(e) => setClientName(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-medium focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Project Title
                </label>
                <input
                  type="text"
                  value={projectTitle}
                  onChange={(e) => setProjectTitle(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-medium focus:outline-none focus:border-blue-400"
                />
              </div>

              <div>
                <label className="block text-[11px] font-mono uppercase tracking-wider text-slate-400 mb-1">
                  Client Phone / Email
                </label>
                <input
                  type="text"
                  placeholder="+263 78... or email"
                  value={clientContact}
                  onChange={(e) => setClientContact(e.target.value)}
                  className="w-full px-3 py-1.5 rounded-lg bg-slate-900 border border-white/10 text-white text-xs font-medium focus:outline-none focus:border-blue-400"
                />
              </div>
            </div>

            {/* Quick Preset Services Adder */}
            <div className="space-y-2">
              <div className="flex items-center justify-between">
                <span className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Quick Add Deliverable from Catalog
                </span>
                <button
                  type="button"
                  onClick={addCustomItem}
                  className="px-2.5 py-1 text-xs text-blue-400 hover:text-white bg-blue-950/60 border border-blue-500/30 rounded-lg hover:bg-blue-900/60 transition-colors flex items-center gap-1 cursor-pointer"
                >
                  <Plus className="w-3.5 h-3.5" />
                  <span>Custom Line Item</span>
                </button>
              </div>

              <div className="flex flex-wrap gap-1.5 max-h-28 overflow-y-auto p-2 bg-slate-950 border border-white/5 rounded-xl">
                {SERVICES_PRICING_ITEMS.map((service) => (
                  <button
                    key={service.id}
                    type="button"
                    onClick={() => addPresetService(service.id)}
                    className="px-2.5 py-1 text-[11px] font-medium bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 rounded-md transition-colors flex items-center gap-1 cursor-pointer whitespace-nowrap"
                  >
                    <Plus className="w-3 h-3 text-blue-400" />
                    <span>{service.title}</span>
                    <span className="font-mono text-slate-400 text-[10px]">
                      ({service.priceDisplay})
                    </span>
                  </button>
                ))}
              </div>
            </div>

            {/* Interactive Quotation Table */}
            <div className="border border-white/10 rounded-xl overflow-hidden bg-slate-950/50">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs">
                  <thead>
                    <tr className="border-b border-white/10 bg-white/[0.03] text-slate-400 font-mono uppercase tracking-wider">
                      <th className="p-3 w-1/2">Deliverable / Scope</th>
                      <th className="p-3 text-center w-20">Qty</th>
                      <th className="p-3 text-right w-28">Rate (USD)</th>
                      <th className="p-3 text-right w-28">Total</th>
                      <th className="p-3 text-center w-12">Action</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-white/5">
                    {lineItems.length === 0 ? (
                      <tr>
                        <td colSpan={5} className="p-6 text-center text-slate-500 font-mono">
                          No items added yet. Click an item above or add a custom line item.
                        </td>
                      </tr>
                    ) : (
                      lineItems.map((item) => (
                        <tr key={item.id} className="hover:bg-white/[0.01] transition-colors">
                          <td className="p-3">
                            <input
                              type="text"
                              value={item.name}
                              onChange={(e) => updateItem(item.id, 'name', e.target.value)}
                              className="w-full px-2.5 py-1 bg-slate-900 border border-white/10 rounded text-slate-200 text-xs focus:outline-none focus:border-blue-400"
                            />
                            <div className="text-[10px] font-mono text-slate-500 mt-1">
                              Category: {item.category}
                            </div>
                          </td>
                          <td className="p-3 text-center">
                            <input
                              type="number"
                              min="1"
                              value={item.quantity}
                              onChange={(e) =>
                                updateItem(item.id, 'quantity', Math.max(1, parseInt(e.target.value) || 1))
                              }
                              className="w-16 px-2 py-1 bg-slate-900 border border-white/10 rounded text-center text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-400"
                            />
                          </td>
                          <td className="p-3 text-right">
                            <div className="inline-flex items-center gap-1">
                              <span className="text-slate-500 font-mono">$</span>
                              <input
                                type="number"
                                min="0"
                                value={item.unitPrice}
                                onChange={(e) =>
                                  updateItem(item.id, 'unitPrice', Math.max(0, parseFloat(e.target.value) || 0))
                                }
                                className="w-20 px-2 py-1 bg-slate-900 border border-white/10 rounded text-right text-slate-200 font-mono text-xs focus:outline-none focus:border-blue-400"
                              />
                            </div>
                          </td>
                          <td className="p-3 text-right font-mono font-semibold text-slate-200 tabular-nums">
                            ${(item.unitPrice * item.quantity).toLocaleString()}
                          </td>
                          <td className="p-3 text-center">
                            <button
                              type="button"
                              onClick={() => removeItem(item.id)}
                              className="p-1.5 text-slate-500 hover:text-red-400 rounded hover:bg-red-950/30 transition-colors"
                              title="Delete row"
                            >
                              <Trash2 className="w-3.5 h-3.5" />
                            </button>
                          </td>
                        </tr>
                      ))
                    )}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Calculations & Adjustments Strip */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              {/* Additional Adjustments */}
              <div className="p-4 bg-slate-950/70 border border-white/5 rounded-xl space-y-3">
                <div className="text-xs font-mono uppercase tracking-wider text-slate-300">
                  Hardware &amp; Commercial Adjustments
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="text-xs text-slate-400">
                    IoT Hardware / Electronics BOM ($ USD):
                  </label>
                  <input
                    type="number"
                    min="0"
                    value={hardwareBOMCost}
                    onChange={(e) => setHardwareBOMCost(Math.max(0, parseFloat(e.target.value) || 0))}
                    className="w-28 px-2.5 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-right font-mono text-xs text-white"
                  />
                </div>

                <div className="flex items-center justify-between gap-4">
                  <label className="text-xs text-slate-400">Client Discount (%):</label>
                  <input
                    type="number"
                    min="0"
                    max="100"
                    value={discountPercent}
                    onChange={(e) =>
                      setDiscountPercent(Math.min(100, Math.max(0, parseFloat(e.target.value) || 0)))
                    }
                    className="w-28 px-2.5 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-right font-mono text-xs text-white"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-mono text-slate-400 mb-1">
                    Special Terms / Scope Note:
                  </label>
                  <textarea
                    rows={2}
                    value={notes}
                    onChange={(e) => setNotes(e.target.value)}
                    className="w-full px-2.5 py-1.5 bg-slate-900 border border-white/10 rounded-lg text-xs text-slate-300 focus:outline-none"
                  />
                </div>
              </div>

              {/* Real-time Summary Card */}
              <div className="p-5 bg-gradient-to-br from-blue-950/40 via-slate-950 to-slate-950 border border-blue-500/30 rounded-xl flex flex-col justify-between">
                <div className="space-y-2 text-xs font-mono">
                  <div className="flex items-center justify-between text-slate-400">
                    <span>Services Subtotal:</span>
                    <span className="tabular-nums font-semibold text-slate-200">
                      ${servicesSubtotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>

                  {discountPercent > 0 && (
                    <div className="flex items-center justify-between text-emerald-400">
                      <span>Discount ({discountPercent}%):</span>
                      <span className="tabular-nums font-semibold">
                        -${discountAmount.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}

                  {hardwareBOMCost > 0 && (
                    <div className="flex items-center justify-between text-cyan-400">
                      <span>IoT Hardware Components:</span>
                      <span className="tabular-nums font-semibold">
                        +${hardwareBOMCost.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                      </span>
                    </div>
                  )}

                  <div className="pt-3 border-t border-white/10 flex items-baseline justify-between">
                    <div>
                      <span className="text-sm font-['Syne',sans-serif] font-bold text-white uppercase block">
                        Total Estimate
                      </span>
                      <span className="text-[10px] text-slate-500 font-mono">All prices in USD</span>
                    </div>
                    <span className="text-2xl font-bold font-mono text-emerald-400 tabular-nums">
                      ${grandTotal.toLocaleString(undefined, { minimumFractionDigits: 2 })}
                    </span>
                  </div>
                </div>

                <div className="pt-4 flex items-center gap-2">
                  <button
                    type="button"
                    onClick={handleCopyProposal}
                    className="flex-1 py-2.5 px-3 bg-blue-600 hover:bg-blue-500 text-white rounded-lg font-semibold text-xs transition-all shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 cursor-pointer"
                  >
                    {copied ? <Check className="w-3.5 h-3.5" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Quotation Copied!' : 'Copy Proposal Text'}</span>
                  </button>

                  <button
                    type="button"
                    onClick={handlePrint}
                    className="py-2.5 px-3 bg-slate-900 hover:bg-slate-800 text-slate-300 hover:text-white border border-white/10 rounded-lg text-xs transition-colors flex items-center justify-center gap-1.5 cursor-pointer"
                    title="Print formal sheet"
                  >
                    <Printer className="w-3.5 h-3.5" />
                    <span className="hidden sm:inline">Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Footer info */}
        <div className="p-3 sm:p-4 border-t border-white/10 bg-slate-950 flex items-center justify-between text-xs font-mono text-slate-500">
          <span>Future Pulse Investments · Internal Tooling</span>
          <span>Harare, Zimbabwe</span>
        </div>
      </div>
    </div>
  );
};
