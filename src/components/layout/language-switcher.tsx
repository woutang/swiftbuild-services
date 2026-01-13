'use client';

import { useLocale } from 'next-intl';
import { usePathname, useRouter } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import type { Pathnames } from '@/i18n/routing';

export function LanguageSwitcher() {
  const locale = useLocale();
  const pathname = usePathname() as Pathnames;
  const router = useRouter();

  const toggleLocale = () => {
    const newLocale = locale === 'pl' ? 'en' : 'pl';
    router.replace(
      { pathname: pathname as '/' },
      { locale: newLocale }
    );
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
