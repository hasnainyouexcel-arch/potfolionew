import { Code, Layout, Smartphone, MessageCircleHeart } from 'lucide-react';
import { QUALITATIVE_STATS } from '../data/portfolioData';

const statIcons = [Code, Layout, Smartphone, MessageCircleHeart];

export default function Stats() {
  return (
    <section id="trust-stats" className="relative py-12 border-y border-white/[0.06] bg-slate-950/60 backdrop-blur-md">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
          {QUALITATIVE_STATS.map((stat, idx) => {
            const Icon = statIcons[idx % statIcons.length];
            return (
              <div
                key={stat.title}
                id={`stat-card-${idx}`}
                className="relative p-5 rounded-xl glass-panel border border-white/[0.06] hover:border-emerald-500/30 transition-all duration-300 group"
              >
                <div className="flex items-center gap-3 mb-3">
                  <div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-[11px] font-mono uppercase tracking-wider text-emerald-400/90 font-medium">
                    {stat.highlight}
                  </span>
                </div>
                <h3 className="text-base font-bold text-white mb-1 tracking-tight group-hover:text-emerald-300 transition-colors">
                  {stat.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed">
                  {stat.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
