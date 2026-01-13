import { defineRouting } from 'next-intl/routing';

export const routing = defineRouting({
  locales: ['pl', 'en'],
  defaultLocale: 'pl',
  localePrefix: 'as-needed',
  pathnames: {
    '/': '/',
    '/uslugi': {
      pl: '/uslugi',
      en: '/services',
    },
    '/realizacje': {
      pl: '/realizacje',
      en: '/portfolio',
    },
    '/realizacje/[slug]': {
      pl: '/realizacje/[slug]',
      en: '/portfolio/[slug]',
    },
    '/o-nas': {
      pl: '/o-nas',
      en: '/about',
    },
    '/kontakt': {
      pl: '/kontakt',
      en: '/contact',
    },
    '/polityka-prywatnosci': {
      pl: '/polityka-prywatnosci',
      en: '/privacy-policy',
    },
  },
});

export type Pathnames = keyof typeof routing.pathnames;
export type Locale = (typeof routing.locales)[number];
