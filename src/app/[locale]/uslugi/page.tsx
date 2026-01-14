import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { ServicesHero } from '@/components/sections/services-hero';
import { ServicesTiers } from '@/components/sections/services-tiers';
import { ServicesApps } from '@/components/sections/services-apps';
import { ServicesProcessDetailed } from '@/components/sections/services-process-detailed';
import { ServicesFaq } from '@/components/sections/services-faq';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    return { title: 'Not Found' };
  }

  const dictionary = await getDictionary(locale);

  return {
    title: dictionary.metadata.services_title,
    description: dictionary.metadata.services_description,
  };
}

export default async function ServicesPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dictionary = await getDictionary(locale);

  return (
    <PageTransition>
      <ServicesHero dictionary={dictionary} />
      <ServicesTiers dictionary={dictionary} />
      <ServicesApps dictionary={dictionary} />
      <ServicesProcessDetailed dictionary={dictionary} />
      <ServicesFaq dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
