import pl from '@/dictionaries/pl.json';

export type Dictionary = typeof pl;

export type Locale = 'pl' | 'en';

export type CaseStudy = {
  slug: string;
  title: string;
  description: string;
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
    about: string;
    challenge: string;
    solution: string;
    tasks: string[];
  };
};
