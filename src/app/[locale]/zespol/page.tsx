import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { TeamSection } from '@/components/sections/team-section';
import { CtaBanner } from '@/components/sections/cta-banner';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return {
    title: dictionary.metadata.team_title,
    description: dictionary.metadata.team_description,
  };
}

export default async function TeamPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return (
    <PageTransition>
      <TeamSection dictionary={dictionary} />
      <CtaBanner dictionary={dictionary} />
    </PageTransition>
  );
}
