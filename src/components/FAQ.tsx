import { useState } from 'react';
import { ChevronDown, HelpCircle, MessageSquare } from 'lucide-react';
import { FAQ_ITEMS, PERSONAL_INFO } from '../data/portfolioData';

export default function FAQ() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);

  const toggle = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="faq" className="relative py-24 md:py-32 bg-slate-950/40 border-y border-white/[0.06]">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Clarity & Guidance
          </div>
          <h2 id="faq-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Frequently Asked Questions
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Straightforward answers regarding ordering, workflows, responsiveness, and direct WhatsApp communication.
          </p>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {FAQ_ITEMS.map((item, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={item.question}
                id={`faq-item-${idx}`}
                className={`rounded-2xl border transition-all duration-300 overflow-hidden ${
                  isOpen
                    ? 'glass-panel border-emerald-500/40 bg-slate-900/80 shadow-lg shadow-black/40'
                    : 'bg-slate-900/40 hover:bg-slate-900/60 border-white/[0.07]'
                }`}
              >
                <button
                  id={`faq-toggle-btn-${idx}`}
                  onClick={() => toggle(idx)}
                  type="button"
                  aria-expanded={isOpen}
                  className="w-full p-6 text-left flex items-center justify-between gap-4 cursor-pointer focus:outline-none focus-visible:ring-2 focus-visible:ring-emerald-500"
                >
                  <span className="text-base sm:text-lg font-bold text-white tracking-tight">
                    {item.question}
                  </span>
                  <div
                    className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                      isOpen
                        ? 'bg-emerald-500 text-slate-950 rotate-180'
                        : 'bg-white/[0.06] text-slate-400'
                    }`}
                  >
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div
                    id={`faq-content-${idx}`}
                    className="px-6 pb-6 pt-1 text-sm sm:text-base text-slate-300 leading-relaxed border-t border-white/[0.04] animate-in fade-in duration-200"
                  >
                    <p>{item.answer}</p>
                    {item.question.includes('contact') && (
                      <div className="mt-4 pt-3 border-t border-white/[0.08] flex items-center gap-3">
                        <a
                          id="faq-whatsapp-direct"
                          href={PERSONAL_INFO.mainOrderUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                        >
                          <MessageSquare className="w-3.5 h-3.5" />
                          <span>Message directly on WhatsApp</span>
                        </a>
                      </div>
                    )}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
