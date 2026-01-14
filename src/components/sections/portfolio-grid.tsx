'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { ArrowUpRight, Star } from 'lucide-react';
import { Link } from '@/i18n/navigation';
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

export function PortfolioGrid({ dictionary, caseStudies }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-2">
          {caseStudies.map((study, index) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: easeOutExpo,
              }}
            >
              <Link
                href={{ pathname: '/realizacje/[slug]', params: { slug: study.slug } }}
                className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30"
              >
                {/* Image container with clip-path hover effect */}
                <div className="relative aspect-[16/10] overflow-hidden bg-muted">
                  {/* Placeholder for project image */}
                  <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
                    <div className="text-center">
                      <div className="mb-2 text-5xl font-bold text-primary/20">
                        {study.title.charAt(0)}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {study.client}
                      </p>
                    </div>
                  </div>

                  {/* Hover overlay with clip-path reveal */}
                  <div className="absolute inset-0 bg-primary/90 transition-all duration-500 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]">
                    <div className="flex h-full items-center justify-center">
                      <div className="flex items-center gap-2 text-lg font-medium text-primary-foreground">
                        {dictionary.portfolio.view_project}
                        <ArrowUpRight className="h-5 w-5" />
                      </div>
                    </div>
                  </div>

                  {/* Featured badge */}
                  {study.featured && (
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      Featured
                    </div>
                  )}
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="mb-3 flex flex-wrap gap-2">
                    {study.tags.map((tag) => (
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

                  <p className="text-muted-foreground">{study.description}</p>

                  {/* Arrow indicator */}
                  <div className="mt-4 flex items-center gap-2 text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    {dictionary.portfolio.view_project}
                    <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
