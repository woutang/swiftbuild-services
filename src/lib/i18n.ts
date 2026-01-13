import type { Dictionary, Locale } from '@/types';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export const locales: Locale[] = ['pl', 'en'];
export const defaultLocale: Locale = 'pl';

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'pl') {
    return path;
  }
  return `/en${path === '/' ? '' : path}`;
}
