# Next.js Internationalization (i18n) Skill

## Overview
Patterns for building multilingual Next.js 14 sites using next-intl.

## Setup

### Install
```bash
npm install next-intl
```

### Project Structure
```
src/
├── app/
│   └── [locale]/
│       ├── layout.tsx       # Locale-aware layout
│       ├── page.tsx         # Homepage
│       └── kontakt/
│           └── page.tsx     # Contact (Polish route)
├── dictionaries/
│   ├── pl.json              # Polish translations
│   └── en.json              # English translations
├── lib/
│   └── i18n.ts              # Dictionary loader
├── middleware.ts            # Locale detection & routing
└── i18n.config.ts           # i18n configuration
```

## Configuration

### i18n.config.ts
```typescript
export const locales = ['pl', 'en'] as const;
export const defaultLocale = 'pl' as const;

export type Locale = (typeof locales)[number];
```

### middleware.ts
```typescript
import createMiddleware from 'next-intl/middleware';
import { locales, defaultLocale } from './i18n.config';

export default createMiddleware({
  locales,
  defaultLocale,
  localePrefix: 'as-needed' // Don't show /pl for default
});

export const config = {
  matcher: ['/((?!api|_next|.*\\..*).*)']
};
```

### Dictionary Loader (lib/i18n.ts)
```typescript
import type { Locale } from '@/i18n.config';

const dictionaries = {
  pl: () => import('@/dictionaries/pl.json').then((m) => m.default),
  en: () => import('@/dictionaries/en.json').then((m) => m.default),
};

export async function getDictionary(locale: Locale) {
  return dictionaries[locale]();
}

export type Dictionary = Awaited<ReturnType<typeof getDictionary>>;
```

## Dictionary Structure

### dictionaries/pl.json
```json
{
  "metadata": {
    "title": "SwiftBuild - Strony internetowe, SEO, Google Ads",
    "description": "Nowoczesne strony internetowe w 2-3 tygodnie."
  },
  "nav": {
    "services": "Usługi",
    "portfolio": "Realizacje",
    "about": "O nas",
    "contact": "Kontakt"
  },
  "hero": {
    "headline": "Strona, SEO i reklamy.",
    "subheadline": "Jedna firma, jeden cel.",
    "cta_primary": "Bezpłatna wycena",
    "cta_secondary": "Zobacz realizacje"
  },
  "contact": {
    "title": "Porozmawiajmy",
    "form": {
      "name": "Imię",
      "company": "Firma",
      "email": "Email",
      "phone": "Telefon",
      "message": "Wiadomość",
      "submit": "Wyślij wiadomość"
    },
    "success": "Dziękujemy! Odezwiemy się wkrótce."
  }
}
```

### dictionaries/en.json
```json
{
  "metadata": {
    "title": "SwiftBuild - Websites, SEO, Google Ads",
    "description": "Modern websites in 2-3 weeks."
  },
  "nav": {
    "services": "Services",
    "portfolio": "Portfolio",
    "about": "About",
    "contact": "Contact"
  },
  "hero": {
    "headline": "Website, SEO and ads.",
    "subheadline": "One team, one goal.",
    "cta_primary": "Get a free quote",
    "cta_secondary": "See our work"
  },
  "contact": {
    "title": "Let's talk",
    "form": {
      "name": "Name",
      "company": "Company",
      "email": "Email",
      "phone": "Phone",
      "message": "Message",
      "submit": "Send message"
    },
    "success": "Thanks! We'll be in touch soon."
  }
}
```

## Page Patterns

### Layout with Locale
```typescript
// app/[locale]/layout.tsx
import { notFound } from 'next/navigation';
import { locales, type Locale } from '@/i18n.config';
import { getDictionary } from '@/lib/i18n';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';

type Props = {
  children: React.ReactNode;
  params: { locale: Locale };
};

export default async function LocaleLayout({ children, params }: Props) {
  if (!locales.includes(params.locale)) notFound();
  
  const dict = await getDictionary(params.locale);
  
  return (
    <html lang={params.locale}>
      <body>
        <Header dictionary={dict} locale={params.locale} />
        <main>{children}</main>
        <Footer dictionary={dict} />
      </body>
    </html>
  );
}
```

### Page with Dictionary
```typescript
// app/[locale]/page.tsx
import { getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/sections/hero';
import type { Locale } from '@/i18n.config';

type Props = {
  params: { locale: Locale };
};

export default async function HomePage({ params }: Props) {
  const dict = await getDictionary(params.locale);
  
  return (
    <>
      <Hero dictionary={dict} />
      {/* More sections */}
    </>
  );
}
```

### Generate Metadata
```typescript
// app/[locale]/page.tsx
import type { Metadata } from 'next';

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.locale);
  
  return {
    title: dict.metadata.title,
    description: dict.metadata.description,
  };
}
```

## Component Patterns

### Component with Dictionary Prop
```typescript
// components/sections/hero.tsx
import type { Dictionary } from '@/lib/i18n';

type Props = {
  dictionary: Dictionary;
};

export function Hero({ dictionary }: Props) {
  const { hero } = dictionary;
  
  return (
    <section className="py-20">
      <h1 className="text-5xl font-bold">{hero.headline}</h1>
      <p className="text-xl text-muted">{hero.subheadline}</p>
      <button>{hero.cta_primary}</button>
    </section>
  );
}
```

### Language Switcher
```typescript
// components/layout/language-switcher.tsx
'use client';

import { usePathname, useRouter } from 'next/navigation';
import { locales, type Locale } from '@/i18n.config';

type Props = {
  currentLocale: Locale;
};

export function LanguageSwitcher({ currentLocale }: Props) {
  const pathname = usePathname();
  const router = useRouter();
  
  function switchLocale(newLocale: Locale) {
    // Remove current locale from path
    const segments = pathname.split('/');
    if (locales.includes(segments[1] as Locale)) {
      segments.splice(1, 1);
    }
    
    // Add new locale (except default)
    const newPath = newLocale === 'pl' 
      ? segments.join('/') || '/'
      : `/${newLocale}${segments.join('/')}`;
    
    router.push(newPath);
  }
  
  return (
    <div className="flex gap-2">
      {locales.map((locale) => (
        <button
          key={locale}
          onClick={() => switchLocale(locale)}
          className={locale === currentLocale ? 'font-bold' : ''}
        >
          {locale.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
```

## Localized Routes

For different route names per language:

### Polish-specific routes
```
/uslugi          → Services page
/realizacje      → Portfolio
/o-nas           → About
/kontakt         → Contact
```

### English routes
```
/en/services     → Services page
/en/portfolio    → Portfolio
/en/about        → About
/en/contact      → Contact
```

### Implementation
Create separate route folders or use rewrites in next.config.js.

**Simple approach:** Use Polish routes for both, English users won't notice/care.

## SEO for Multilingual Sites

### Hreflang Tags
```typescript
// app/[locale]/layout.tsx
export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const baseUrl = 'https://swiftbuild.services';
  
  return {
    alternates: {
      canonical: params.locale === 'pl' ? baseUrl : `${baseUrl}/en`,
      languages: {
        'pl': baseUrl,
        'en': `${baseUrl}/en`,
      },
    },
  };
}
```

### Sitemap with Locales
```typescript
// app/sitemap.ts
import { locales } from '@/i18n.config';

export default function sitemap() {
  const baseUrl = 'https://swiftbuild.services';
  const pages = ['', '/uslugi', '/realizacje', '/o-nas', '/kontakt'];
  
  const entries = locales.flatMap((locale) =>
    pages.map((page) => ({
      url: locale === 'pl' ? `${baseUrl}${page}` : `${baseUrl}/${locale}${page}`,
      lastModified: new Date(),
    }))
  );
  
  return entries;
}
```

## Common Mistakes

1. **Hardcoding strings** - All user-facing text must be in dictionaries
2. **Missing translations** - Both dictionaries must have same keys
3. **Forgetting metadata** - Each page needs localized title/description
4. **No language switcher** - Users must be able to switch
5. **Wrong lang attribute** - `<html lang={locale}>` must match
6. **Inconsistent routes** - Pick a pattern and stick with it

## Testing Checklist

- [ ] Default locale (PL) works without prefix
- [ ] English locale works with /en prefix
- [ ] Language switcher preserves current page
- [ ] All pages have localized metadata
- [ ] No hardcoded strings in components
- [ ] Hreflang tags present in HTML
- [ ] Forms work in both languages
