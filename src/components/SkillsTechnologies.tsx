import { Layers, Terminal, Sparkles, CheckCircle2, Code2, Wrench } from 'lucide-react';
import { SKILLS_LIST, TECHNOLOGIES_LIST } from '../data/portfolioData';

export default function SkillsTechnologies() {
  return (
    <section id="skills" className="relative py-24 md:py-32 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="max-w-2xl mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
            Capabilities & Stack
          </div>
          <h2 id="skills-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
            Skills & Modern Technologies
          </h2>
          <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
            A balanced synthesis of design sensibility, spatial logic, and modern frontend engineering tools.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">
          {/* Left Column: Core Skills Grid (8 skills) */}
          <div className="lg:col-span-7">
            <div className="flex items-center gap-2 mb-6">
              <Sparkles className="w-4 h-4 text-emerald-400" />
              <h3 className="text-lg font-bold text-white tracking-tight">
                Core Domains of Expertise
              </h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {SKILLS_LIST.map((skill, idx) => (
                <div
                  key={skill.name}
                  id={`skill-card-${idx}`}
                  className="p-5 rounded-xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between"
                >
                  <div>
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-bold text-white tracking-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-950/70 text-emerald-300 border border-emerald-500/25">
                        {skill.category}
                      </span>
                    </div>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      {skill.description}
                    </p>
                  </div>
                  <div className="mt-4 flex items-center gap-1.5 text-[11px] text-emerald-400/90 font-medium">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" />
                    <span>Production Grade</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Column: Modern Tech Stack (8 technologies) */}
          <div className="lg:col-span-5">
            <div className="glass-panel p-6 sm:p-8 rounded-2xl border border-white/[0.08] relative overflow-hidden">
              <div className="flex items-center justify-between mb-6 pb-4 border-b border-white/[0.08]">
                <div className="flex items-center gap-2.5">
                  <div className="w-8 h-8 rounded-lg bg-teal-500/20 border border-teal-500/30 flex items-center justify-center text-teal-400">
                    <Wrench className="w-4 h-4" />
                  </div>
                  <div>
                    <h3 className="text-base font-bold text-white">Production Technologies</h3>
                    <p className="text-[11px] text-slate-400">Industry-standard tools</p>
                  </div>
                </div>
                <span className="text-[11px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-1 rounded border border-emerald-500/20">
                  2026 Ready
                </span>
              </div>

              <div className="space-y-3">
                {TECHNOLOGIES_LIST.map((tech, idx) => (
                  <div
                    key={tech.name}
                    id={`tech-item-${idx}`}
                    className="p-3.5 rounded-xl bg-slate-900/70 border border-white/[0.06] hover:border-emerald-500/30 transition-colors flex items-center justify-between"
                  >
                    <div className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-emerald-400" />
                      <span className="text-sm font-semibold text-white">
                        {tech.name}
                      </span>
                    </div>
                    <span className="text-[11px] font-mono text-slate-400 bg-white/[0.03] px-2.5 py-1 rounded-md border border-white/[0.05]">
                      {tech.badge}
                    </span>
                  </div>
                ))}
              </div>

              <div className="mt-6 pt-5 border-t border-white/[0.08] text-xs text-slate-400 flex items-center justify-between">
                <span>Direct repository delivery via GitHub</span>
                <span className="text-emerald-400 font-mono">100% Clean Code</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
