import { setRequestLocale } from 'next-intl/server';
import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { getDictionary, isValidLocale } from '@/lib/i18n';
import { getCaseStudySlugs, getLocalizedCaseStudy, getAllCaseStudies } from '@/data/case-studies';
import { CaseStudyHero } from '@/components/sections/case-study-hero';
import { CaseStudyContent } from '@/components/sections/case-study-content';
import { CaseStudyNav } from '@/components/sections/case-study-nav';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string; slug: string }>;
};

export function generateStaticParams() {
  const slugs = getCaseStudySlugs();
  const locales = ['pl', 'en'];

  return locales.flatMap((locale) =>
    slugs.map((slug) => ({ locale, slug }))
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    return { title: 'Not Found' };
  }

  const caseStudy = getLocalizedCaseStudy(slug, locale);

  if (!caseStudy) {
    return {
      title: 'Not Found',
    };
  }

  return {
    title: `${caseStudy.title} | SwiftBuild`,
    description: caseStudy.description,
  };
}

export default async function CaseStudyPage({ params }: Props) {
  const { locale, slug } = await params;

  if (!isValidLocale(locale)) {
    notFound();
  }

  setRequestLocale(locale);

  const dictionary = await getDictionary(locale);
  const caseStudy = getLocalizedCaseStudy(slug, locale);

  if (!caseStudy) {
    notFound();
  }

  // Get prev/next studies for navigation
  const allStudies = getAllCaseStudies();
  const currentIndex = allStudies.findIndex((s) => s.slug === slug);
  const prevStudy = currentIndex > 0 ? allStudies[currentIndex - 1] : null;
  const nextStudy = currentIndex < allStudies.length - 1 ? allStudies[currentIndex + 1] : null;

  return (
    <PageTransition>
      <CaseStudyHero dictionary={dictionary} caseStudy={caseStudy} />
      <CaseStudyContent dictionary={dictionary} caseStudy={caseStudy} />
      <CaseStudyNav
        dictionary={dictionary}
        prevStudy={prevStudy ? { slug: prevStudy.slug, title: prevStudy.title[locale] } : null}
        nextStudy={nextStudy ? { slug: nextStudy.slug, title: nextStudy.title[locale] } : null}
      />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
