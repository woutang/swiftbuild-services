'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ExternalLink } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/types';

type LocalizedCaseStudy = {
  slug: string;
  title: string;
  description: string;
  tags: string[];
  client: string;
  url: string;
  featured: boolean;
  images: {
    cover: string;
    gallery: string[];
  };
  content: {
    about: string;
    challenge: string;
    solution: string;
    tasks: string[];
  };
};

type Props = {
  dictionary: Dictionary;
  caseStudy: LocalizedCaseStudy;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function CaseStudyHero({ dictionary, caseStudy }: Props) {
  return (
    <section className="relative overflow-hidden pb-16 pt-8 md:pb-24 md:pt-12">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[150px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Back link */}
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5, ease: easeOutExpo }}
        >
          <Link
            href="/realizacje"
            className="mb-8 inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-foreground"
          >
            <ArrowLeft className="h-4 w-4" />
            {dictionary.portfolio.back}
          </Link>
        </motion.div>

        <div className="grid gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: easeOutExpo }}
          >
            {/* Tags */}
            <div className="mb-6 flex flex-wrap gap-2">
              {caseStudy.tags.map((tag) => (
                <span
                  key={tag}
                  className="rounded-full bg-primary/10 px-4 py-1.5 text-sm font-medium text-primary"
                >
                  {tag}
                </span>
              ))}
            </div>

            <h1 className="text-hero mb-4">{caseStudy.title}</h1>

            <p className="mb-8 text-xl text-muted-foreground">
              {caseStudy.description}
            </p>

            <Button asChild size="lg">
              <a
                href={caseStudy.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2"
              >
                {dictionary.portfolio.visit_site}
                <ExternalLink className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* Cover image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
            className="relative"
          >
            <div className="aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card">
              {/* Placeholder for cover image */}
              <div className="flex h-full items-center justify-center bg-gradient-to-br from-card to-muted">
                <div className="text-center">
                  <div className="mb-4 text-8xl font-bold text-primary/20">
                    {caseStudy.title.charAt(0)}
                  </div>
                  <p className="text-muted-foreground">{caseStudy.client}</p>
                </div>
              </div>
            </div>

            {/* Decorative elements */}
            <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-primary/20" />
            <div className="absolute -bottom-4 -left-4 h-16 w-16 rounded-full border border-primary/10" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
