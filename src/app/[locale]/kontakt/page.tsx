import { setRequestLocale } from 'next-intl/server';
import type { Metadata } from 'next';
import { getDictionary } from '@/lib/i18n';
import { ContactHero } from '@/components/sections/contact-hero';
import { ContactForm } from '@/components/forms/contact-form';
import { PageTransition } from '@/components/providers/page-transition';

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return {
    title: dictionary.metadata.contact_title,
    description: dictionary.metadata.contact_description,
  };
}

export default async function ContactPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  const dictionary = await getDictionary(locale as 'pl' | 'en');

  return (
    <PageTransition>
      <ContactHero dictionary={dictionary} />
      <section className="pb-24 md:pb-32">
        <div className="mx-auto max-w-2xl px-6 md:px-12">
          <ContactForm dictionary={dictionary} />
        </div>
      </section>
    </PageTransition>
  );
}
