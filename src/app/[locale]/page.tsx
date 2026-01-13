import { setRequestLocale } from 'next-intl/server';
import { getDictionary } from '@/lib/i18n';
import { Hero } from '@/components/sections/hero';
import { ProblemSolution } from '@/components/sections/problem-solution';
import { ServicesPreview } from '@/components/sections/services-preview';
import { HowItWorks } from '@/components/sections/how-it-works';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return (
    <PageTransition>
      <Hero dictionary={dictionary} />
      <ProblemSolution dictionary={dictionary} />
      <ServicesPreview dictionary={dictionary} />
      <HowItWorks dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
