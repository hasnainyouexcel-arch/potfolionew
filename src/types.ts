export interface Project {
  id: string;
  title: string;
  category: 'Web Design' | 'UI/UX' | 'Business' | 'E-Commerce' | 'Landing Pages';
  shortDescription: string;
  fullOverview: string;
  designConcept: string;
  keyFeatures: string[];
  technologies: string[];
  image: string;
  label: 'Demo Concept';
  statsHighlight?: string;
}

export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  tags: string[];
  whatsappMessage: string;
}

export interface ProcessStep {
  number: string;
  title: string;
  description: string;
  deliverables: string[];
}

export interface WhyChooseItem {
  title: string;
  description: string;
  iconName: string;
}

export interface FAQItem {
  question: string;
  answer: string;
}

export interface ExperiencePillar {
  title: string;
  description: string;
  iconName: string;
}

export interface SkillItem {
  name: string;
  category: 'Design' | 'Development' | 'Strategy';
  description: string;
}

export interface TechnologyItem {
  name: string;
  category: string;
  badge: string;
}
