import { ArrowRight, MessageSquare, CheckCircle2 } from 'lucide-react';
import { WORK_PROCESS_STEPS, PERSONAL_INFO } from '../data/portfolioData';

export default function Process() {
  return (
    <section id="process" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Structured Execution
          </div>
          <h2 id="process-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            How We Bring Your Vision To Life
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A transparent, organized 6-step workflow that ensures clarity, adherence to schedule, and continuous feedback at every phase.
          </p>
        </div>

        {/* 6 Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {WORK_PROCESS_STEPS.map((step) => (
            <div
              key={step.number}
              id={`process-step-${step.number}`}
              className="relative p-6 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between group"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <span className="text-3xl font-extrabold font-mono text-emerald-400/80 group-hover:text-emerald-300 transition-colors">
                    {step.number}
                  </span>
                  <span className="text-[11px] font-mono uppercase tracking-wider px-2.5 py-1 rounded bg-white/[0.04] text-slate-400 border border-white/[0.06]">
                    Phase {step.number}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-white mb-2 tracking-tight">
                  {step.title}
                </h3>
                <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-6">
                  {step.description}
                </p>
              </div>

              {/* Deliverables Checklist */}
              <div className="pt-4 border-t border-white/[0.06] space-y-1.5">
                <div className="text-[10px] font-mono uppercase tracking-wider text-slate-400 mb-2">
                  Key Deliverables
                </div>
                {step.deliverables.map((item, dIdx) => (
                  <div key={dIdx} className="flex items-center gap-2 text-xs text-slate-300">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400 shrink-0" />
                    <span>{item}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* After Process CTA Banner */}
        <div className="relative rounded-2xl p-8 sm:p-10 bg-gradient-to-r from-emerald-950/60 via-slate-900 to-teal-950/40 border border-emerald-500/25 shadow-xl flex flex-col sm:flex-row items-center justify-between gap-6">
          <div className="max-w-xl text-center sm:text-left">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-2">
              Ready to Kick Off Step 01?
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Drop me a quick message on WhatsApp. We can discuss your idea with zero obligation.
            </p>
          </div>

          <a
            id="process-whatsapp-cta-btn"
            href={PERSONAL_INFO.mainOrderUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2.5 px-6 py-3.5 rounded-xl bg-gradient-to-r from-emerald-600 to-teal-600 hover:from-emerald-500 hover:to-teal-500 text-sm font-bold text-white shadow-lg shadow-emerald-600/30 transition-all duration-200 hover:-translate-y-0.5 shrink-0"
          >
            <MessageSquare className="w-4 h-4" />
            <span>Discuss on WhatsApp</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
