import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return {
    title: dictionary.metadata.privacy_title,
    description: dictionary.metadata.privacy_description,
  };
}

export default async function PrivacyPolicyPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dictionary = await getDictionary(locale as 'pl' | 'en');
  const { privacy } = dictionary;
  const sections = Object.values(privacy.sections);

  return (
    <PageTransition>
      <section className="py-24 md:py-32">
        <div className="mx-auto max-w-3xl px-6 md:px-12">
          {/* Header */}
          <div className="mb-12">
            <h1 className="mb-4 text-4xl font-bold md:text-5xl">
              {privacy.title}
            </h1>
            <p className="text-muted-foreground">
              {privacy.last_updated}: {new Date().toLocaleDateString(locale === 'pl' ? 'pl-PL' : 'en-US', {
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>

          {/* Intro */}
          <div className="prose prose-lg prose-invert mb-12 max-w-none">
            <p className="text-lg text-muted-foreground">{privacy.intro}</p>
          </div>

          {/* Sections */}
          <div className="space-y-10">
            {sections.map((section, index) => (
              <div key={index}>
                <h2 className="mb-4 text-xl font-semibold">{section.title}</h2>
                <p className="text-muted-foreground">{section.content}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </PageTransition>
  );
}
