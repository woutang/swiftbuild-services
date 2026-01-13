import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing } from '@/i18n/routing';
import { getDictionary } from '@/lib/i18n';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dict = await getDictionary(locale as 'pl' | 'en');

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | SwiftBuild`,
    },
    description: dict.metadata.description,
    metadataBase: new URL('https://swiftbuild.services'),
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      siteName: 'SwiftBuild',
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!routing.locales.includes(locale as 'pl' | 'en')) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return (
    <html lang={locale} className="dark">
      <body>
        <NextIntlClientProvider messages={messages}>
          <SmoothScrollProvider>
            <Header dictionary={dictionary} />
            <main className="min-h-screen pt-24">{children}</main>
            <Footer dictionary={dictionary} />
          </SmoothScrollProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
