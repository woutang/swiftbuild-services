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

  // Separate featured and regular projects
  const featuredStudies = caseStudies.filter((s) => s.featured);
  const regularStudies = caseStudies.filter((s) => !s.featured);

  return (
    <section ref={ref} className="pb-24 md:pb-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Featured projects - larger cards */}
        {featuredStudies.length > 0 && (
          <div className="mb-8 grid gap-8 md:grid-cols-1 lg:grid-cols-2">
            {featuredStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.15,
                  ease: easeOutExpo,
                }}
                className={index === 0 ? 'lg:col-span-2' : ''}
              >
                <Link
                  href={{ pathname: '/realizacje/[slug]', params: { slug: study.slug } }}
                  data-cursor="view"
                  className="group relative block overflow-hidden rounded-2xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30"
                >
                  {/* Image container with clip-path hover effect */}
                  <div className={`relative overflow-hidden bg-muted ${index === 0 ? 'aspect-[21/9]' : 'aspect-[16/10]'}`}>
                    {/* Placeholder for project image */}
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
                      <div className="text-center">
                        <div className={`mb-2 font-bold text-primary/20 ${index === 0 ? 'text-7xl md:text-9xl' : 'text-5xl'}`}>
                          {study.title.charAt(0)}
                        </div>
                        <p className={`text-muted-foreground ${index === 0 ? 'text-lg' : 'text-sm'}`}>
                          {study.client}
                        </p>
                      </div>
                    </div>

                    {/* Hover overlay with clip-path reveal */}
                    <div className="absolute inset-0 bg-primary/90 transition-all duration-500 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]">
                      <div className="flex h-full items-center justify-center">
                        <div className={`flex items-center gap-2 font-medium text-primary-foreground ${index === 0 ? 'text-2xl' : 'text-lg'}`}>
                          {dictionary.portfolio.view_project}
                          <ArrowUpRight className={index === 0 ? 'h-7 w-7' : 'h-5 w-5'} />
                        </div>
                      </div>
                    </div>

                    {/* Featured badge */}
                    <div className="absolute left-4 top-4 flex items-center gap-1.5 rounded-full bg-background/90 px-3 py-1.5 text-xs font-medium backdrop-blur-sm">
                      <Star className="h-3.5 w-3.5 fill-primary text-primary" />
                      {dictionary.portfolio.featured_badge}
                    </div>
                  </div>

                  {/* Content */}
                  <div className={index === 0 ? 'p-8' : 'p-6'}>
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

                    <h3 className={`mb-2 font-semibold transition-colors group-hover:text-primary ${index === 0 ? 'text-3xl md:text-4xl' : 'text-2xl'}`}>
                      {study.title}
                    </h3>

                    <p className={`text-muted-foreground ${index === 0 ? 'text-lg' : ''}`}>{study.description}</p>

                    {/* Arrow indicator */}
                    <div className={`mt-4 flex items-center gap-2 font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100 ${index === 0 ? 'text-base' : 'text-sm'}`}>
                      {dictionary.portfolio.view_project}
                      <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}

        {/* Regular projects - smaller grid */}
        {regularStudies.length > 0 && (
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {regularStudies.map((study, index) => (
              <motion.div
                key={study.slug}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: (featuredStudies.length + index) * 0.1,
                  ease: easeOutExpo,
                }}
              >
                <Link
                  href={{ pathname: '/realizacje/[slug]', params: { slug: study.slug } }}
                  data-cursor="view"
                  className="group relative block overflow-hidden rounded-xl border border-border/50 bg-card transition-all duration-500 hover:border-primary/30"
                >
                  {/* Image container */}
                  <div className="relative aspect-[4/3] overflow-hidden bg-muted">
                    <div className="absolute inset-0 flex items-center justify-center bg-gradient-to-br from-card to-muted">
                      <div className="text-center">
                        <div className="mb-1 text-4xl font-bold text-primary/20">
                          {study.title.charAt(0)}
                        </div>
                        <p className="text-xs text-muted-foreground">
                          {study.client}
                        </p>
                      </div>
                    </div>

                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-primary/90 transition-all duration-500 [clip-path:circle(0%_at_50%_50%)] group-hover:[clip-path:circle(100%_at_50%_50%)]">
                      <div className="flex h-full items-center justify-center">
                        <div className="flex items-center gap-2 text-sm font-medium text-primary-foreground">
                          {dictionary.portfolio.view_project}
                          <ArrowUpRight className="h-4 w-4" />
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="p-4">
                    <div className="mb-2 flex flex-wrap gap-1.5">
                      {study.tags.slice(0, 2).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-muted px-2 py-0.5 text-[10px] text-muted-foreground"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>

                    <h3 className="mb-1 text-lg font-semibold transition-colors group-hover:text-primary">
                      {study.title}
                    </h3>

                    <p className="line-clamp-2 text-sm text-muted-foreground">{study.description}</p>
                  </div>
                </Link>
              </motion.div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
