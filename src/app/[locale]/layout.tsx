import type { Metadata } from 'next';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages, setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { routing, type Locale } from '@/i18n/routing';
import { getDictionary } from '@/lib/i18n';
import { Header } from '@/components/layout/header';
import { Footer } from '@/components/layout/footer';
import { SmoothScrollProvider } from '@/components/providers/smooth-scroll-provider';
import '../globals.css';

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

function isValidLocale(locale: string): locale is Locale {
  return routing.locales.includes(locale as Locale);
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  const dict = await getDictionary(locale);

  return {
    title: {
      default: dict.metadata.title,
      template: `%s | ${dict.metadata.site_name}`,
    },
    description: dict.metadata.description,
    metadataBase: new URL('https://swiftbuild.services'),
    openGraph: {
      type: 'website',
      locale: locale === 'pl' ? 'pl_PL' : 'en_US',
      siteName: dict.metadata.site_name,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const messages = await getMessages();
  const dictionary = await getDictionary(locale);

  // Structured data - Organization schema
  const organizationSchema = {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'SwiftBuild',
    url: 'https://swiftbuild.services',
    logo: 'https://swiftbuild.services/logo.png',
    description: dictionary.metadata.description,
    contactPoint: {
      '@type': 'ContactPoint',
      email: 'kontakt@swiftbuild.services',
      contactType: 'customer service',
      availableLanguage: ['Polish', 'English'],
    },
    sameAs: [],
  };

  // LocalBusiness schema
  const localBusinessSchema = {
    '@context': 'https://schema.org',
    '@type': 'ProfessionalService',
    name: 'SwiftBuild',
    url: 'https://swiftbuild.services',
    description: dictionary.metadata.description,
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      addressCountry: 'PL',
    },
    areaServed: {
      '@type': 'Country',
      name: 'Poland',
    },
    serviceType: ['Web Development', 'SEO', 'Google Ads', 'Digital Marketing'],
  };

  return (
    <html lang={locale} className="dark">
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(localBusinessSchema),
          }}
        />
      </head>
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
