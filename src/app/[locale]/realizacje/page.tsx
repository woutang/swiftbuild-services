import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { PortfolioHero } from '@/components/sections/portfolio-hero';
import { PortfolioGrid } from '@/components/sections/portfolio-grid';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';
import { getLocalizedAllCaseStudies } from '@/data/case-studies';

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
    title: dictionary.metadata.portfolio_title,
    description: dictionary.metadata.portfolio_description,
  };
}

export default async function PortfolioPage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dictionary = await getDictionary(locale);
  const caseStudies = getLocalizedAllCaseStudies(locale);

  return (
    <PageTransition>
      <PortfolioHero dictionary={dictionary} />
      <PortfolioGrid dictionary={dictionary} caseStudies={caseStudies} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
