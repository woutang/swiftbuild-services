import type { Dictionary } from '@/types';
import { routing, type Locale } from '@/i18n/routing';

const dictionaries: Record<Locale, () => Promise<Dictionary>> = {
  pl: () => import('@/dictionaries/pl.json').then((module) => module.default),
  en: () => import('@/dictionaries/en.json').then((module) => module.default),
};

export async function getDictionary(locale: Locale): Promise<Dictionary> {
  return dictionaries[locale]();
}

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function getLocalizedPath(path: string, locale: Locale): string {
  if (locale === 'pl') {
    return path;
  }
  return `/en${path === '/' ? '' : path}`;
}
