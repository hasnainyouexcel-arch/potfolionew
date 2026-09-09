import { ElementType } from 'react';
import {
  Sparkles,
  Smartphone,
  CheckCircle2,
  MessageSquare,
  Target,
  Sliders,
  Eye,
  PhoneCall,
} from 'lucide-react';
import { WHY_CHOOSE_ITEMS } from '../data/portfolioData';

const whyIcons: Record<string, ElementType> = {
  Sparkles,
  Smartphone,
  CheckCircle2,
  MessageSquare,
  Target,
  Sliders,
  Eye,
  PhoneCall,
};

export default function WhyChooseMe() {
  return (
    <section id="why-choose" className="relative py-24 md:py-32 bg-slate-950/50 border-y border-white/[0.06]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            The Value Equation
          </div>
          <h2 id="why-choose-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Why Work With Me?
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            Direct collaboration, senior-level attention to detail, and modern technical standards designed to provide peace of mind throughout your project.
          </p>
        </div>

        {/* 8 Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {WHY_CHOOSE_ITEMS.map((item, idx) => {
            const Icon = whyIcons[item.iconName] || Sparkles;
            return (
              <div
                key={item.title}
                id={`why-card-${idx}`}
                className="p-6 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between group"
              >
                <div>
                  <div className="w-11 h-11 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400 mb-5 group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h3 className="text-base font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                    {item.description}
                  </p>
                </div>
                <div className="mt-6 pt-4 border-t border-white/[0.05] text-[10px] font-mono text-slate-400 uppercase tracking-wider">
                  Standard 0{idx + 1}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
