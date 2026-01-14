import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { Hero } from '@/components/sections/hero';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { ServicesPreview } from '@/components/sections/services-preview';
import { FeaturedWork } from '@/components/sections/featured-work';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';
import { getLocalizedFeaturedCaseStudies } from '@/data/case-studies';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dictionary = await getDictionary(locale);
  const featuredCaseStudies = getLocalizedFeaturedCaseStudies(locale);

  return (
    <PageTransition>
      <Hero dictionary={dictionary} />
      <ProblemSolution dictionary={dictionary} />
      <ServicesPreview dictionary={dictionary} />
      <FeaturedWork dictionary={dictionary} caseStudies={featuredCaseStudies} />
      <HowItWorks dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
