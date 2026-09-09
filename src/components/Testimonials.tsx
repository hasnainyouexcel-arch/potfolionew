import { ElementType } from 'react';
import { MessageCircle, Workflow, ShieldCheck, Layout, CheckCheck, Sparkles, Shield } from 'lucide-react';
import { EXPERIENCE_PILLARS } from '../data/portfolioData';

const expIcons: Record<string, ElementType> = {
  MessageCircle,
  Workflow,
  ShieldCheck,
  Layout,
  CheckCheck,
};

export default function Testimonials() {
  return (
    <section id="experience" className="relative py-24 md:py-32 bg-slate-950/40 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Service Standard & Guarantee
          </div>
          <h2 id="experience-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            What Clients Will Experience
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I prioritize clarity, integrity, and predictable execution above all else. Here is the standard of collaboration you can rely upon from our very first conversation.
          </p>
        </div>

        {/* Experience Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 mb-12">
          {EXPERIENCE_PILLARS.map((pillar, idx) => {
            const Icon = expIcons[pillar.iconName] || Sparkles;
            return (
              <div
                key={pillar.title}
                id={`experience-card-${idx}`}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-emerald-500/15 border border-emerald-500/25 flex items-center justify-center text-emerald-400 mb-4 group-hover:scale-105 transition-transform">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight">
                    {pillar.title}
                  </h3>
                  <p className="text-xs text-slate-300 leading-relaxed">
                    {pillar.description}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-white/[0.05] text-[10px] font-mono text-emerald-400/70">
                  Standard #{idx + 1}
                </div>
              </div>
            );
          })}
        </div>

        {/* Designer Commitment Quote Banner */}
        <div className="p-6 sm:p-8 rounded-2xl glass-panel border border-white/[0.08] flex flex-col sm:flex-row items-center gap-6">
          <div className="w-12 h-12 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-300 shrink-0">
            <Shield className="w-6 h-6" />
          </div>
          <div>
            <p className="text-sm sm:text-base text-slate-200 font-medium italic mb-2">
              "No generic AI templates. Every project is individually planned, structured, and styled with high-fidelity frontend code to make sure your brand stands out and converts."
            </p>
            <div className="flex items-center gap-3 text-xs text-slate-400">
              <span className="text-white font-semibold font-mono">Syed M Hasnain Raza Taqvior</span>
              <span>•</span>
              <span className="text-emerald-400">Direct WhatsApp Project Lead</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
