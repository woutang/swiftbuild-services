'use client';

import { useLocale } from 'next-intl';
import { useRouter, usePathname } from 'next/navigation';
import { Button } from '@/components/ui/button';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const toggleLocale = () => {
    // Get current pathname and convert to new locale
    let newPath = pathname;

    if (locale === 'pl') {
      // Going from PL to EN: add /en prefix and translate path
      const pathMap: Record<string, string> = {
        '/uslugi': '/en/services',
        '/realizacje': '/en/portfolio',
        '/o-nas': '/en/about',
        '/kontakt': '/en/contact',
        '/polityka-prywatnosci': '/en/privacy-policy',
      };
      // Handle dynamic case study routes
      if (pathname.startsWith('/realizacje/')) {
        const slug = pathname.replace('/realizacje/', '');
        newPath = `/en/portfolio/${slug}`;
      } else {
        newPath = pathMap[pathname] ?? `/en${pathname}`;
      }
    } else {
      // Going from EN to PL: remove /en prefix and translate path
      const pathMap: Record<string, string> = {
        '/en/services': '/uslugi',
        '/en/portfolio': '/realizacje',
        '/en/about': '/o-nas',
        '/en/contact': '/kontakt',
        '/en/privacy-policy': '/polityka-prywatnosci',
        '/en': '/',
      };
      // Handle dynamic case study routes
      if (pathname.startsWith('/en/portfolio/')) {
        const slug = pathname.replace('/en/portfolio/', '');
        newPath = `/realizacje/${slug}`;
      } else {
        newPath = pathMap[pathname] ?? (pathname.replace('/en', '') || '/');
      }
    }

    router.replace(newPath);
  };

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={toggleLocale}
      className="font-medium text-muted-foreground hover:text-foreground"
    >
      <span className={locale === 'pl' ? 'text-foreground' : ''}>PL</span>
      <span className="mx-1 text-border">/</span>
      <span className={locale === 'en' ? 'text-foreground' : ''}>EN</span>
    </Button>
  );
}
