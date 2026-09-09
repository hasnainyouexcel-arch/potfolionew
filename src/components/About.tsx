import { ElementType } from 'react';
import { Lightbulb, Palette, Sparkles, TrendingUp, Mail, MessageSquare, Terminal, ExternalLink } from 'lucide-react';
import { PERSONAL_INFO, ABOUT_PILLARS } from '../data/portfolioData';

const pillarIcons: Record<string, ElementType> = {
  Lightbulb,
  Palette,
  Sparkles,
  TrendingUp,
};

export default function About() {
  return (
    <section id="about" className="relative py-24 md:py-32 overflow-hidden">
      {/* Subtle background glow */}
      <div className="absolute top-1/2 left-0 w-80 h-80 bg-teal-500/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Identity & Vision
          </div>
          <h2 id="about-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            About Me
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            I am <strong className="text-white font-semibold">{PERSONAL_INFO.name}</strong>, a creative digital professional dedicated to engineering modern, visually impressive, and conversion-centered web experiences for forward-thinking brands and businesses.
          </p>
        </div>

        {/* Main Grid: Bio Card + Philosophy Cards */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Detailed Copy & Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-6">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden">
              <div className="absolute top-0 right-0 w-32 h-32 bg-emerald-500/10 blur-3xl pointer-events-none" />

              <h3 className="text-xl font-bold text-white mb-4 tracking-tight">
                Crafting Digital Value With Purpose
              </h3>
              <p className="text-sm text-slate-300 leading-relaxed mb-4">
                In today's crowded digital landscape, a website cannot merely exist — it must establish authority, inspire confidence, and guide visitors smoothly toward taking action.
              </p>
              <p className="text-sm text-slate-300 leading-relaxed mb-6">
                I combine contemporary aesthetic discernment with robust frontend engineering principles. Whether building a tailored business website, high-conversion landing page, or dynamic product catalog, every pixel and line of code serves your ultimate business goals.
              </p>

              {/* Quick Contact Badges */}
              <div className="flex flex-col gap-2.5 pt-4 border-t border-white/[0.08]">
                <a
                  id="about-whatsapp-link"
                  href={PERSONAL_INFO.mainOrderUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center justify-between p-3 rounded-xl bg-emerald-950/40 hover:bg-emerald-900/50 border border-emerald-500/30 text-emerald-300 hover:text-emerald-200 transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <MessageSquare className="w-4 h-4 text-emerald-400" />
                    <span className="text-xs font-medium">WhatsApp Direct:</span>
                    <span className="text-xs font-mono font-bold">{PERSONAL_INFO.whatsappNumber}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>

                <a
                  id="about-email-link"
                  href={`mailto:${PERSONAL_INFO.email}`}
                  className="flex items-center justify-between p-3 rounded-xl bg-slate-900/60 hover:bg-slate-800/80 border border-white/10 text-slate-300 hover:text-white transition-colors group"
                >
                  <div className="flex items-center gap-2.5">
                    <Mail className="w-4 h-4 text-slate-400 group-hover:text-emerald-400" />
                    <span className="text-xs font-medium">Direct Email:</span>
                    <span className="text-xs font-mono">{PERSONAL_INFO.email}</span>
                  </div>
                  <ExternalLink className="w-3.5 h-3.5 opacity-60 group-hover:opacity-100" />
                </a>
              </div>
            </div>

            {/* Technical Snapshot Card */}
            <div className="glass-panel p-5 rounded-2xl border border-white/[0.08] font-mono text-xs text-slate-300">
              <div className="flex items-center gap-2 text-slate-400 mb-3 pb-2 border-b border-white/[0.06]">
                <Terminal className="w-3.5 h-3.5 text-emerald-400" />
                <span>philosophy.config.ts</span>
              </div>
              <div className="space-y-1.5 text-slate-400 text-[11px]">
                <p><span className="text-emerald-400">const</span> designer = <span className="text-amber-300">"{PERSONAL_INFO.name}"</span>;</p>
                <p><span className="text-emerald-400">const</span> standards = [<span className="text-amber-300">"Zero Clutter"</span>, <span className="text-amber-300">"Fast Delivery"</span>, <span className="text-amber-300">"High Conversion"</span>];</p>
                <p><span className="text-emerald-400">export default</span> () =&gt; standards.execute();</p>
              </div>
            </div>
          </div>

          {/* Right Column: 4 Pillar Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {ABOUT_PILLARS.map((pillar, idx) => {
              const Icon = pillarIcons[pillar.iconName] || Sparkles;
              return (
                <div
                  key={pillar.title}
                  id={`about-pillar-card-${idx}`}
                  className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between group"
                >
                  <div>
                    <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-105 group-hover:text-emerald-300 transition-all duration-300">
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                      {pillar.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                      {pillar.description}
                    </p>
                  </div>
                  <div className="mt-6 pt-4 border-t border-white/[0.06] flex items-center justify-between text-[11px] text-slate-400 font-mono">
                    <span>Pillar 0{idx + 1}</span>
                    <span className="text-emerald-400/80">Guaranteed</span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
