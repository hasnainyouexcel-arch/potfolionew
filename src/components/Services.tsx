import { ElementType } from 'react';
import {
  MonitorSmartphone,
  Layers,
  Rocket,
  Briefcase,
  UserCheck,
  ShoppingBag,
  RefreshCw,
  Cpu,
  ArrowRight,
  MessageCircle,
} from 'lucide-react';
import { SERVICES, getWhatsAppServiceUrl } from '../data/portfolioData';

const serviceIcons: Record<string, ElementType> = {
  MonitorSmartphone,
  Layers,
  Rocket,
  Briefcase,
  UserCheck,
  ShoppingBag,
  RefreshCw,
  Cpu,
};

export default function Services() {
  return (
    <section id="services" className="relative py-24 md:py-32 bg-slate-950/40 border-y border-white/[0.06]">
      {/* Background radial gradient */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-emerald-500/5 blur-[140px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              Comprehensive Offerings
            </div>
            <h2 id="services-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              What I Can Do For You
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Tailored web design, strategic interface architecture, and high-performance digital solutions crafted to expand your reach and accelerate customer conversion.
            </p>
          </div>

          <a
            id="services-custom-inquiry-btn"
            href={getWhatsAppServiceUrl('Custom Digital')}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-5 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 border border-slate-700/80 hover:border-emerald-500/40 text-xs font-semibold text-slate-200 hover:text-white transition-all duration-200 self-start md:self-auto group"
          >
            <MessageCircle className="w-4 h-4 text-emerald-400" />
            <span>Have custom specs? Talk to me</span>
            <ArrowRight className="w-3.5 h-3.5 text-slate-400 group-hover:translate-x-0.5 transition-transform" />
          </a>
        </div>

        {/* 8 Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {SERVICES.map((service, idx) => {
            const Icon = serviceIcons[service.iconName] || MonitorSmartphone;
            const whatsappUrl = getWhatsAppServiceUrl(service.whatsappMessage);

            return (
              <div
                key={service.id}
                id={`service-card-${service.id}`}
                className="group relative p-6 rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
              >
                <div>
                  {/* Icon & Index */}
                  <div className="flex items-center justify-between mb-5">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-emerald-500/20 to-teal-500/10 border border-emerald-500/25 flex items-center justify-center text-emerald-400 group-hover:text-emerald-300 group-hover:scale-105 transition-all duration-300">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-xs font-mono text-slate-400">
                      0{idx + 1}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-5">
                    {service.description}
                  </p>

                  {/* Service Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-6">
                    {service.tags.map((tag) => (
                      <span
                        key={tag}
                        className="px-2 py-0.5 text-[11px] font-medium text-slate-400 bg-white/[0.03] border border-white/[0.05] rounded-md"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* WhatsApp Action Link */}
                <a
                  id={`service-whatsapp-link-${service.id}`}
                  href={whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pt-4 border-t border-white/[0.06] flex items-center justify-between text-xs font-semibold text-emerald-400 hover:text-emerald-300 group/link transition-colors"
                >
                  <span>Discuss Project</span>
                  <ArrowRight className="w-4 h-4 transform group-hover/link:translate-x-1 transition-transform" />
                </a>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
