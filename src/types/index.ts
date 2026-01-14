import pl from '@/dictionaries/pl.json';

export type Dictionary = typeof pl;

// Re-export Locale from routing as the single source of truth
export type { Locale } from '@/i18n/routing';

export type LocalizedString = {
  pl: string;
  en: string;
};

export type CaseStudyMetric = {
  value: string;
  label: LocalizedString;
};

export type CaseStudyTestimonial = {
  quote: LocalizedString;
  author: string;
};

export type CaseStudyResults = {
  metrics: CaseStudyMetric[];
  testimonial?: CaseStudyTestimonial;
};

export type CaseStudy = {
  slug: string;
  title: LocalizedString;
  description: LocalizedString;
  tags: string[];
  client: string;
  url: string;
  featured: boolean;
  order: number;
  images: {
    cover: string;
    gallery: string[];
  };
  results?: CaseStudyResults;
  content: {
    about: LocalizedString;
    challenge: LocalizedString;
    solution: LocalizedString;
    tasks: LocalizedString[];
  };
};
