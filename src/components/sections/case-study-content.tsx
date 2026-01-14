'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
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

export function CaseStudyContent({ dictionary, caseStudy }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* About */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-16"
        >
          <h2 className="mb-6 text-2xl font-bold md:text-3xl">
            {dictionary.portfolio.about_project}
          </h2>
          <p className="text-lg leading-relaxed text-muted-foreground">
            {caseStudy.content.about}
          </p>
        </motion.div>

        {/* Challenge & Solution */}
        <div className="mb-16 grid gap-12 md:grid-cols-2 md:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          >
            <div className="mb-4 inline-block rounded-lg bg-destructive/10 px-3 py-1 text-sm font-medium text-destructive">
              Challenge
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {caseStudy.content.challenge}
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
          >
            <div className="mb-4 inline-block rounded-lg bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              Solution
            </div>
            <p className="leading-relaxed text-muted-foreground">
              {caseStudy.content.solution}
            </p>
          </motion.div>
        </div>

        {/* What we did */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOutExpo }}
        >
          <h2 className="mb-8 text-2xl font-bold md:text-3xl">
            {dictionary.portfolio.what_we_did}
          </h2>

          <div className="grid gap-4 sm:grid-cols-2">
            {caseStudy.content.tasks.map((task, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.5,
                  delay: 0.4 + index * 0.1,
                  ease: easeOutExpo,
                }}
                className="flex items-start gap-3 rounded-lg border border-border/50 bg-card/50 p-4"
              >
                <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10">
                  <Check className="h-4 w-4 text-primary" />
                </div>
                <span className="text-sm">{task}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Gallery placeholder */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
          className="mt-16"
        >
          <div className="grid gap-4 md:grid-cols-3">
            {[1, 2, 3].map((i) => (
              <div
                key={i}
                className="aspect-video overflow-hidden rounded-xl border border-border/50 bg-card"
              >
                <div className="flex h-full items-center justify-center bg-gradient-to-br from-card to-muted">
                  <span className="text-sm text-muted-foreground">
                    Gallery {i}
                  </span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
