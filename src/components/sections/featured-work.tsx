'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import type { Dictionary, CaseStudy } from '@/types';

type LocalizedCaseStudy = Omit<CaseStudy, 'title' | 'description'> & {
  title: string;
  description: string;
};

type Props = {
  dictionary: Dictionary;
  caseStudies: LocalizedCaseStudy[];
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function FeaturedWork({ dictionary, caseStudies }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-12 flex flex-col items-start justify-between gap-6 md:flex-row md:items-end"
        >
          <div>
            <h2 className="text-4xl font-bold md:text-5xl">
              {dictionary.featured_work.title}
            </h2>
            <p className="mt-4 max-w-lg text-muted-foreground">
              {dictionary.featured_work.subtitle}
            </p>
          </div>

          <Button asChild variant="outline">
            <Link href="/realizacje" className="group">
              {dictionary.portfolio.view_all}
              <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </Button>
        </motion.div>

        {/* Featured projects grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.slice(0, 2).map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: 0.2 + index * 0.15,
                ease: easeOutExpo,
              }}
            >
              <Link
                href={{ pathname: '/realizacje/[slug]', params: { slug: study.slug } }}
                data-cursor="view"
                className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30"
              >
                {/* Image container */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {/* Placeholder */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
                    <div className="text-center">
                      <div className="mb-2 text-6xl font-bold text-primary/20">
                        {study.title.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {study.client}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-primary/90 transition-all duration-500 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]">
                    <div className="flex h-full items-center justify-center">
                      <div className="flex items-center gap-2 text-lg font-medium text-primary-foreground">
                        {dictionary.portfolio.view_project}
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {study.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-muted px-3 py-1 text-xs text-muted-foreground"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  <h3 className="mb-2 text-2xl font-semibold transition-colors group-hover:text-primary">
                    {study.title}
                  </h3>

                  <p className="line-clamp-2 text-muted-foreground">
                    {study.description}
                  </p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
