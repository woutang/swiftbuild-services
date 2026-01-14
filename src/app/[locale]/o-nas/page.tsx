import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { AboutHero } from '@/components/sections/about-hero';
import { FounderSection } from '@/components/sections/founder-section';
import { ValuesSection } from '@/components/sections/values-section';
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
    title: dictionary.metadata.about_title,
    description: dictionary.metadata.about_description,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dictionary = await getDictionary(locale);

  return (
    <PageTransition>
      <AboutHero dictionary={dictionary} />
      <FounderSection dictionary={dictionary} />
      <ValuesSection dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
