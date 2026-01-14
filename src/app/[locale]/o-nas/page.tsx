import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { AboutHero } from '@/components/sections/about-hero';
import { TeamSection } from '@/components/sections/team-section';
import { ValuesSection } from '@/components/sections/values-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return {
    title: dictionary.metadata.about_title,
    description: dictionary.metadata.about_description,
  };
}

export default async function AboutPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return (
    <PageTransition>
      <AboutHero dictionary={dictionary} />
      <TeamSection dictionary={dictionary} />
      <ValuesSection dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
