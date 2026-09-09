import {
  Project,
  Service,
  ProcessStep,
  WhyChooseItem,
  FAQItem,
  ExperiencePillar,
  SkillItem,
  TechnologyItem,
} from '../types';

import heroVisualImg from '../assets/images/hero_workspace_visual_1788945879004.jpg';
import luxuryImg from '../assets/images/luxury_brand_ui_1788945892344.jpg';
import saasImg from '../assets/images/saas_dashboard_ui_1788945910313.jpg';
import ecommerceImg from '../assets/images/ecommerce_store_ui_1788945928806.jpg';
import agencyImg from '../assets/images/agency_studio_ui_1788945944823.jpg';
import gourmetImg from '../assets/images/gourmet_dining_ui_1788945960296.jpg';

export const ASSETS = {
  heroVisual: heroVisualImg,
  luxury: luxuryImg,
  saas: saasImg,
  ecommerce: ecommerceImg,
  agency: agencyImg,
  gourmet: gourmetImg,
};

export const PERSONAL_INFO = {
  name: 'Syed Muhammad Hasnain Raza Taqvi',
  shortName: 'SMHR Taqvi',
  role: 'Senior UI/UX Designer & Frontend Developer',
  headline: 'Creative Digital Solutions That Turn Ideas Into Powerful Experiences',
  supportingText:
    'I create modern websites, digital experiences and creative solutions designed to help businesses, brands and individuals build a strong online presence.',
  whatsappNumber: '+92 315 7633693',
  whatsappDigits: '923157633693',
  email: 'razqa469@gmail.com',
  baseWhatsappUrl: 'https://wa.me/923157633693',
  mainOrderUrl:
    'https://wa.me/923157633693?text=Hello%20Syed%20Muhammad%20Hasnain%20Raza%20Taqvi%2C%20I%20want%20to%20discuss%20a%20website%20project.',
};

export function getWhatsAppServiceUrl(serviceName: string): string {
  const message = `Hello Syed Muhammad Hasnain Raza Taqvi, I am interested in a ${serviceName} project.`;
  return `https://wa.me/923157633693?text=${encodeURIComponent(message)}`;
}

export function getWhatsAppProjectUrl(projectTitle: string): string {
  const message = `Hello Syed Muhammad Hasnain Raza Taqvi, I saw your "${projectTitle}" demo concept and want to build something similar for my business.`;
  return `https://wa.me/923157633693?text=${encodeURIComponent(message)}`;
}

export const QUALITATIVE_STATS = [
  {
    title: 'Creative Digital Work',
    highlight: 'Purpose-Driven',
    description: 'Custom UI craftsmanship tailored to exact brand identity and user needs.',
  },
  {
    title: 'Modern UI/UX',
    highlight: 'Conversion-Focused',
    description: 'Intuitive layouts, seamless navigation hierarchies, and aesthetic micro-interactions.',
  },
  {
    title: 'Responsive Websites',
    highlight: 'Universal Fidelity',
    description: 'Flawless visual balance and swift interaction across 320px mobile to 4K displays.',
  },
  {
    title: 'Client-Focused Solutions',
    highlight: 'Direct Collaboration',
    description: 'Transparent communication via WhatsApp with dedicated revision cycles.',
  },
];

export const ABOUT_PILLARS = [
  {
    title: 'Creative Thinking',
    description: 'Turning ideas into practical digital experiences with structured strategy and high-fidelity vision.',
    iconName: 'Lightbulb',
  },
  {
    title: 'Modern Design',
    description: 'Clean, intuitive and visually engaging interfaces built with contemporary 2026 aesthetics.',
    iconName: 'Palette',
  },
  {
    title: 'User Experience',
    description: 'Designing user journeys that eliminate friction, ensuring experiences are simple and pleasant to use.',
    iconName: 'Sparkles',
  },
  {
    title: 'Business Focus',
    description: 'Creating websites and solutions with measurable conversion and long-term brand equity in mind.',
    iconName: 'TrendingUp',
  },
];

export const SERVICES: Service[] = [
  {
    id: 'web-dev',
    title: 'Website Design & Development',
    description: 'Modern, responsive and professional websites for businesses, brands and individuals.',
    iconName: 'MonitorSmartphone',
    tags: ['Next-Gen UI', 'Full Responsiveness', 'Clean Code'],
    whatsappMessage: 'Website Design & Development',
  },
  {
    id: 'ui-ux',
    title: 'UI/UX Design',
    description: 'Beautiful and user-friendly interfaces focused on clarity, accessibility, and conversion.',
    iconName: 'Layers',
    tags: ['Figma Mastery', 'Design Systems', 'Micro-Interactions'],
    whatsappMessage: 'UI/UX Design',
  },
  {
    id: 'landing-pages',
    title: 'Landing Pages',
    description: 'High-converting landing pages engineered around a single clear business goal and strong CTA flow.',
    iconName: 'Rocket',
    tags: ['Conversion Rate Optimization', 'A/B Ready', 'Fast Load'],
    whatsappMessage: 'Landing Page',
  },
  {
    id: 'business-sites',
    title: 'Business Websites',
    description: 'Professional online presence for startups, enterprises, and local corporate businesses.',
    iconName: 'Briefcase',
    tags: ['Corporate Identity', 'Client Trust', 'Lead Generation'],
    whatsappMessage: 'Business Website',
  },
  {
    id: 'portfolios',
    title: 'Portfolio Websites',
    description: 'Premium personal and professional portfolios highlighting your unique talents, projects, and credibility.',
    iconName: 'UserCheck',
    tags: ['Personal Branding', 'Interactive Showcase', 'WhatsApp Direct'],
    whatsappMessage: 'Portfolio Website',
  },
  {
    id: 'ecommerce',
    title: 'E-Commerce Websites',
    description: 'Modern online stores with product-focused user experiences, smooth catalogs, and frictionless checkout.',
    iconName: 'ShoppingBag',
    tags: ['Product Showcase', 'Cart Workflows', 'Mobile Shopping'],
    whatsappMessage: 'E-Commerce Website',
  },
  {
    id: 'redesign',
    title: 'Website Redesign',
    description: 'Transform outdated websites into modern, responsive, high-performing digital experiences.',
    iconName: 'RefreshCw',
    tags: ['Modernization', 'Speed Boost', 'UX Overhaul'],
    whatsappMessage: 'Website Redesign',
  },
  {
    id: 'custom-solutions',
    title: 'Custom Digital Solutions',
    description: 'Tailored digital experiences and interactive tools based on specific, unique project requirements.',
    iconName: 'Cpu',
    tags: ['Tailored Architecture', 'Scalable Logic', 'Custom Interfaces'],
    whatsappMessage: 'Custom Digital Solution',
  },
];

export const PROJECTS: Project[] = [
  {
    id: 'luxury-business',
    title: 'Luxury Business Website',
    category: 'Business',
    shortDescription: 'Editorial architecture and real estate portal with minimalist dark aesthetics and champagne accents.',
    fullOverview:
      'A bespoke digital experience designed for an ultra-luxury architectural consultancy and premium estate developer. Features expansive hero typography, immersive property showcase, and high-converting inquiry triggers.',
    designConcept:
      'Dark prestige minimalism combining 70-character line lengths, warm champagne accents, and quiet micro-interactions to evoke trust and exclusivity.',
    keyFeatures: [
      'Editorial full-viewport hero section',
      'Filterable residential portfolio catalog',
      'Interactive appointment & private consultation booking',
      'High-contrast luxury typography pairing',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma', 'Framer Motion'],
    image: ASSETS.luxury,
    label: 'Demo Concept',
    statsHighlight: 'Ultra-High Contrast Architecture Showcase',
  },
  {
    id: 'modern-ecommerce',
    title: 'Modern E-Commerce Store',
    category: 'E-Commerce',
    shortDescription: 'Next-gen streetwear & minimalist lifestyle brand store with streamlined visual product hierarchy.',
    fullOverview:
      'A sleek, high-energy digital storefront prioritizing instant visual engagement, rapid product exploration, quick cart drawer states, and mobile-optimized thumb-zone navigation.',
    designConcept:
      'Monochromatic slate backdrops with vibrant emerald highlight points that direct the shopper’s eye straight toward action buttons and key specs.',
    keyFeatures: [
      'Interactive product carousel with zoom states',
      'Quick-view modal with variant selection',
      'Slide-over shopping bag with real-time tally',
      'Sub-second mobile interaction response',
    ],
    technologies: ['React', 'Tailwind CSS', 'TypeScript', 'State Management'],
    image: ASSETS.ecommerce,
    label: 'Demo Concept',
    statsHighlight: 'Frictionless Mobile-First Shopping UI',
  },
  {
    id: 'creative-agency',
    title: 'Creative Agency Website',
    category: 'Landing Pages',
    shortDescription: 'Experimental design studio landing experience featuring kinetic typography and bold card physics.',
    fullOverview:
      'An avant-garde portfolio engineered for a multidisciplinary creative agency. Built to communicate boldness, design authority, and technical prowess to Fortune 500 brand directors.',
    designConcept:
      'Brutalist-meets-luxury dark canvas with floating glass panels, asymmetric grid divisions, and fluid spring animations on every scroll breakpoint.',
    keyFeatures: [
      'Kinetic typography headline transitions',
      'Interactive case study cards with deep dive view',
      'Sticky project inquiry status ticker',
      'Dark ambient glassmorphism with zero visual clutter',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image: ASSETS.agency,
    label: 'Demo Concept',
    statsHighlight: 'Award-Winning Studio Aesthetic',
  },
  {
    id: 'personal-portfolio',
    title: 'Personal Portfolio',
    category: 'Web Design',
    shortDescription: 'Modern digital identity and project showcase for visionary creators and executive innovators.',
    fullOverview:
      'A premium personal brand hub built to highlight multi-disciplinary achievements, speaking engagements, written case studies, and direct messaging channels.',
    designConcept:
      'Restrained editorial layout with high readability scores, subtle luminous borders, and structured timeline milestones.',
    keyFeatures: [
      'Custom hero status indicators & quick contact bar',
      'Interactive skills radar & technology pill stack',
      'Direct WhatsApp inquiry deep linking',
      'Integrated project spotlight drawer',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma'],
    image: ASSETS.heroVisual,
    label: 'Demo Concept',
    statsHighlight: 'High-Impact Personal Branding',
  },
  {
    id: 'saas-dashboard',
    title: 'SaaS Dashboard',
    category: 'UI/UX',
    shortDescription: 'Enterprise analytics and intelligence platform featuring multi-series telemetry and real-time cards.',
    fullOverview:
      'A complex data dashboard crafted with maximum visual clarity. Allows SaaS operators to monitor MRR, churn rates, user cohort retention, and team performance at a single glance.',
    designConcept:
      'Calculated 8px spatial grid with balanced density, muted neutral dark slate backgrounds, and neon data-point gradients.',
    keyFeatures: [
      'Real-time metrics visualizers with trend badges',
      'Multi-tier navigational sidebar with quick toggles',
      'Data filtering by custom date ranges and cohorts',
      'WCAG AA accessible contrast for all charts',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Figma Design System'],
    image: ASSETS.saas,
    label: 'Demo Concept',
    statsHighlight: 'Dense Data Hierarchy & Clean UI',
  },
  {
    id: 'gourmet-restaurant',
    title: 'Restaurant / Food Brand Website',
    category: 'Business',
    shortDescription: 'Fine dining culinary showcase with artisan tasting menus and interactive table reservation.',
    fullOverview:
      'A warm, sensory digital home for an upscale dining establishment. Showcases signature gastronomy, chef philosophies, wine pairings, and a seamless reservation system.',
    designConcept:
      'Deep charcoal canvas with warm candlelit amber accents and high-definition food photography framing.',
    keyFeatures: [
      'Dynamic multi-course seasonal tasting menu',
      'Seamless reservation date & seating selector',
      'Virtual ambiance & private events brochure',
      'One-tap Google Maps and WhatsApp concierge support',
    ],
    technologies: ['React', 'TypeScript', 'Tailwind CSS', 'Motion'],
    image: ASSETS.gourmet,
    label: 'Demo Concept',
    statsHighlight: 'Sensory Ambiance & Direct Bookings',
  },
];

export const WHY_CHOOSE_ITEMS: WhyChooseItem[] = [
  {
    title: 'Modern & Professional Design',
    description: 'Every interface is engineered according to modern design standards, avoiding outdated templates.',
    iconName: 'Sparkles',
  },
  {
    title: 'Mobile Responsive',
    description: 'Pixel-perfect responsiveness rigorously tested from 320px mobile screens to large desktop monitors.',
    iconName: 'Smartphone',
  },
  {
    title: 'User-Friendly Experience',
    description: 'Intuitive navigation paths, clear calls-to-action, and friction-free user journeys.',
    iconName: 'CheckCircle2',
  },
  {
    title: 'Clear Communication',
    description: 'Fast, polite, and direct communication throughout every phase of the project lifecycle.',
    iconName: 'MessageSquare',
  },
  {
    title: 'Business-Focused Approach',
    description: 'Design and code built to support your actual commercial objectives, conversions, and branding.',
    iconName: 'Target',
  },
  {
    title: 'Custom Solutions',
    description: 'No cookie-cutter shortcuts. Every solution is individually shaped around your unique vision.',
    iconName: 'Sliders',
  },
  {
    title: 'Attention to Detail',
    description: 'Precise typographic rhythms, consistent border radii, smooth hover transitions, and clean code.',
    iconName: 'Eye',
  },
  {
    title: 'Direct WhatsApp Support',
    description: 'Quick responses and direct updates on WhatsApp without cumbersome support ticketing hurdles.',
    iconName: 'PhoneCall',
  },
];

export const WORK_PROCESS_STEPS: ProcessStep[] = [
  {
    number: '01',
    title: 'Discuss',
    description: 'We discuss your idea, requirements, target audience, and business goals directly via WhatsApp.',
    deliverables: ['Goal Definition', 'Scope Outline', 'Feature Checklist'],
  },
  {
    number: '02',
    title: 'Plan',
    description: 'The project structure, content hierarchy, sitemap, and visual direction are carefully planned.',
    deliverables: ['Information Architecture', 'Wireframe Flow', 'Tech Selection'],
  },
  {
    number: '03',
    title: 'Design',
    description: 'A modern, professional interface is created in Figma with premium visual polish and design consistency.',
    deliverables: ['High-Fidelity Mockups', 'Component System', 'Mobile Previews'],
  },
  {
    number: '04',
    title: 'Develop',
    description: 'The website is built with clean, responsive, fast-loading code using React, TypeScript, and modern CSS.',
    deliverables: ['Interactive Codebase', 'Speed Optimization', 'Cross-Browser Test'],
  },
  {
    number: '05',
    title: 'Review',
    description: 'The project is thoroughly reviewed and refined together based on your direct feedback and testing.',
    deliverables: ['Client Feedback Cycle', 'Visual Refinement', 'QA Checks'],
  },
  {
    number: '06',
    title: 'Launch',
    description: 'The final website is prepared, verified, and deployed for the world to experience.',
    deliverables: ['Production Deployment', 'Domain Linking Support', 'Handover Files'],
  },
];

export const EXPERIENCE_PILLARS: ExperiencePillar[] = [
  {
    title: 'Clear Communication',
    description: 'You will always know what stage the project is at, with swift direct answers to your inquiries.',
    iconName: 'MessageCircle',
  },
  {
    title: 'Professional Workflow',
    description: 'A structured, predictable 6-phase process that prevents misunderstandings and unnecessary delays.',
    iconName: 'Workflow',
  },
  {
    title: 'Transparent Project Discussion',
    description: 'Honest recommendations regarding scope, feasibility, and technology best suited for your budget.',
    iconName: 'ShieldCheck',
  },
  {
    title: 'Responsive Design',
    description: 'A website that looks equally refined on an iPhone, an Android tablet, a laptop, and a wide monitor.',
    iconName: 'Layout',
  },
  {
    title: 'Attention to Requirements',
    description: 'Every detail of your brief is studied, noted, and reflected faithfully in the final build.',
    iconName: 'CheckCheck',
  },
];

export const SKILLS_LIST: SkillItem[] = [
  { name: 'UI/UX Design', category: 'Design', description: 'Design systems, high-fidelity prototypes, user journey mapping.' },
  { name: 'Web Design', category: 'Design', description: 'Modern aesthetics, typography pairing, spatial balance, visual storytelling.' },
  { name: 'Responsive Design', category: 'Development', description: 'Fluid breakpoints from 320px mobile to ultra-wide displays.' },
  { name: 'Frontend Development', category: 'Development', description: 'Clean, modular, and maintainable React & TypeScript code.' },
  { name: 'Landing Pages', category: 'Design', description: 'High-converting layouts with persuasive hierarchy and clear CTAs.' },
  { name: 'E-Commerce', category: 'Development', description: 'Product displays, category browsing, and intuitive checkout flows.' },
  { name: 'Website Redesign', category: 'Strategy', description: 'Upgrading legacy sites into contemporary, high-speed web apps.' },
  { name: 'Creative Digital Solutions', category: 'Strategy', description: 'Tailored digital solutions solving real business problems.' },
];

export const TECHNOLOGIES_LIST: TechnologyItem[] = [
  { name: 'React', category: 'Frontend', badge: 'Component Architecture' },
  { name: 'TypeScript', category: 'Language', badge: 'Type Safety & Stability' },
  { name: 'Tailwind CSS', category: 'Styling', badge: 'Modern Responsive Styling' },
  { name: 'HTML5', category: 'Foundation', badge: 'Semantic Structure & SEO' },
  { name: 'CSS3 / Modern CSS', category: 'Styling', badge: 'Glassmorphism & Gradients' },
  { name: 'JavaScript (ESNext)', category: 'Language', badge: 'Dynamic Interactivity' },
  { name: 'Figma', category: 'UI/UX Tool', badge: 'Design System Prototyping' },
  { name: 'Git & GitHub', category: 'DevOps', badge: 'Version Control & Deployment' },
];

export const FAQ_ITEMS: FAQItem[] = [
  {
    question: 'How can I order a website?',
    answer:
      'Contact me directly through WhatsApp and tell me about your project idea. We will discuss your requirements, suggest the best visual and technical approach, and agree on a timeline to get started right away.',
  },
  {
    question: 'Do you create responsive websites?',
    answer:
      'Yes, absolutely. Every project is meticulously crafted and tested to perform smoothly and look balanced across mobile devices (320px+), tablets, laptops, and ultra-wide desktop monitors.',
  },
  {
    question: 'Can you redesign my existing website?',
    answer:
      'Yes, website redesign can be tailored according to your specific requirements. We can overhaul outdated visuals, improve mobile responsiveness, speed up load times, and optimize conversion flows.',
  },
  {
    question: 'How do we discuss the project?',
    answer:
      'The easiest and fastest option is direct WhatsApp communication at +92 315 7633693. You can share voice notes, reference links, project briefs, and receive direct updates in real time. We can also communicate via email at razqa469@gmail.com.',
  },
  {
    question: 'Can I request a custom website?',
    answer:
      'Yes. Whether you need a bespoke portfolio, high-converting landing page, corporate business site, or e-commerce showcase, custom requirements can be thoroughly planned before starting the build.',
  },
  {
    question: 'How do I contact you?',
    answer:
      'You can reach me directly on WhatsApp at +92 315 7633693 (or click any WhatsApp button on this site) or send an email to razqa469@gmail.com.',
  },
];
