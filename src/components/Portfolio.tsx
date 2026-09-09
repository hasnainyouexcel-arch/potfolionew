import { useState } from 'react';
import { ArrowUpRight, Eye, Sparkles } from 'lucide-react';
import { PROJECTS, getWhatsAppProjectUrl } from '../data/portfolioData';
import { Project } from '../types';
import ProjectModal from './ProjectModal';

type FilterCategory = 'All' | 'Web Design' | 'UI/UX' | 'Business' | 'E-Commerce' | 'Landing Pages';

const FILTERS: FilterCategory[] = [
  'All',
  'Web Design',
  'UI/UX',
  'Business',
  'E-Commerce',
  'Landing Pages',
];

export default function Portfolio() {
  const [activeFilter, setActiveFilter] = useState<FilterCategory>('All');
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);

  const filteredProjects = activeFilter === 'All'
    ? PROJECTS
    : PROJECTS.filter((p) => p.category === activeFilter);

  return (
    <section id="portfolio" className="relative py-24 md:py-32 overflow-hidden">
      {/* Glow effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-emerald-600/5 blur-[160px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-xs font-mono uppercase tracking-wider mb-4">
              Curated Showcase
            </div>
            <h2 id="portfolio-heading" className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-4">
              Selected Work
            </h2>
            <p className="text-base sm:text-lg text-slate-300 leading-relaxed">
              Explore high-fidelity digital solutions across diverse industries. Each project is engineered with modern aesthetics, fast interactions, and deliberate conversion focus.
            </p>
          </div>

          <div className="px-3.5 py-2 rounded-xl glass-panel border border-white/10 text-xs text-slate-300 flex items-center gap-2 self-start md:self-auto font-mono">
            <Sparkles className="w-4 h-4 text-emerald-400" />
            <span>Clearly labeled: <strong>Demo Concept</strong></span>
          </div>
        </div>

        {/* Filter Tabs */}
        <div
          id="portfolio-filters-container"
          className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 no-scrollbar"
        >
          {FILTERS.map((filter) => {
            const isActive = activeFilter === filter;
            return (
              <button
                key={filter}
                id={`filter-btn-${filter.toLowerCase().replace(/\s+/g, '-')}`}
                onClick={() => setActiveFilter(filter)}
                type="button"
                className={`px-4 py-2 rounded-full text-xs font-semibold whitespace-nowrap transition-all duration-200 cursor-pointer ${
                  isActive
                    ? 'bg-emerald-500 text-slate-950 shadow-md shadow-emerald-500/25 font-bold'
                    : 'bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-white/[0.08]'
                }`}
              >
                {filter}
              </button>
            );
          })}
        </div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredProjects.map((project) => (
            <article
              key={project.id}
              id={`portfolio-card-${project.id}`}
              className="group rounded-2xl glass-panel glass-panel-hover border border-white/[0.08] overflow-hidden flex flex-col justify-between transition-all duration-300 hover:-translate-y-1.5"
            >
              <div>
                {/* Visual Preview */}
                <div
                  className="relative aspect-video w-full overflow-hidden bg-slate-950 cursor-pointer"
                  onClick={() => setSelectedProject(project)}
                >
                  <img
                    src={project.image}
                    alt={`${project.title} - ${project.label}`}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover object-top transform group-hover:scale-105 transition-transform duration-700 ease-out"
                    loading="lazy"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-transparent opacity-60 group-hover:opacity-40 transition-opacity" />

                  {/* Top Demo Concept Badge */}
                  <div className="absolute top-3 left-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-950/80 backdrop-blur-md border border-emerald-500/40 text-[11px] font-mono font-medium text-emerald-300 shadow-sm">
                      {project.label}
                    </span>
                  </div>

                  {/* Category Pill */}
                  <div className="absolute top-3 right-3">
                    <span className="px-2.5 py-1 rounded-md bg-slate-900/80 backdrop-blur-md border border-white/10 text-[11px] font-medium text-slate-300">
                      {project.category}
                    </span>
                  </div>

                  {/* Hover Overlay Button */}
                  <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/40 backdrop-blur-[2px]">
                    <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white text-slate-950 font-bold text-xs shadow-xl">
                      <Eye className="w-3.5 h-3.5" />
                      View Deep Dive
                    </span>
                  </div>
                </div>

                {/* Card Content */}
                <div className="p-6">
                  <h3
                    onClick={() => setSelectedProject(project)}
                    className="text-lg font-bold text-white mb-2 tracking-tight group-hover:text-emerald-300 transition-colors cursor-pointer"
                  >
                    {project.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-slate-300 leading-relaxed mb-4 line-clamp-2">
                    {project.shortDescription}
                  </p>

                  {/* Technology Tags */}
                  <div className="flex flex-wrap gap-1.5 mb-2">
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span
                        key={tech}
                        className="px-2 py-0.5 text-[10px] font-mono text-slate-400 bg-white/[0.04] border border-white/[0.06] rounded"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="px-2 py-0.5 text-[10px] font-mono text-slate-500 bg-white/[0.02] rounded">
                        +{project.technologies.length - 3}
                      </span>
                    )}
                  </div>
                </div>
              </div>

              {/* Card Footer Actions */}
              <div className="px-6 pb-6 pt-2 flex items-center justify-between border-t border-white/[0.06]">
                <button
                  id={`project-view-btn-${project.id}`}
                  onClick={() => setSelectedProject(project)}
                  type="button"
                  className="text-xs font-semibold text-slate-300 hover:text-white inline-flex items-center gap-1 transition-colors cursor-pointer"
                >
                  <span>Project Overview</span>
                  <ArrowUpRight className="w-3.5 h-3.5 text-slate-400 group-hover:text-emerald-400" />
                </button>

                <a
                  id={`project-order-link-${project.id}`}
                  href={getWhatsAppProjectUrl(project.title)}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-3 py-1.5 rounded-lg bg-emerald-950/60 hover:bg-emerald-900/80 border border-emerald-500/30 text-emerald-300 text-xs font-semibold transition-colors"
                >
                  Order on WhatsApp
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>

      {/* Project Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </section>
  );
}
