import pl from '@/dictionaries/pl.json';

export type Dictionary = typeof pl;

export type Locale = 'pl' | 'en';

export type LocalizedString = {
  pl: string;
  en: string;
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
  content: {
    about: LocalizedString;
    challenge: LocalizedString;
    solution: LocalizedString;
    tasks: LocalizedString[];
  };
};
