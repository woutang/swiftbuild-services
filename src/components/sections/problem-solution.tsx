'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

export function ProblemSolution({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Background accent */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-0 top-1/2 h-[400px] w-1/3 -translate-y-1/2 bg-gradient-to-r from-primary/5 to-transparent" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid gap-16 lg:grid-cols-2 lg:gap-24">
          {/* Problem side */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <h2 className="text-4xl font-bold md:text-5xl">
              {dictionary.problem.title}
            </h2>

            <ul className="mt-8 space-y-6">
              {dictionary.problem.points.map((point, index) => (
                <motion.li
                  key={index}
                  initial={{ opacity: 0, x: -20 }}
                  animate={isInView ? { opacity: 1, x: 0 } : {}}
                  transition={{
                    duration: 0.5,
                    delay: 0.2 + index * 0.1,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="flex items-start gap-4"
                >
                  <span className="mt-1.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-destructive/20 text-destructive">
                    <span className="h-2 w-2 rounded-full bg-destructive" />
                  </span>
                  <span className="text-lg text-muted-foreground">{point}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Solution side */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="relative"
          >
            {/* Decorative border */}
            <div className="absolute -left-8 top-0 hidden h-full w-px bg-gradient-to-b from-transparent via-border to-transparent lg:block" />

            <div className="rounded-2xl border border-primary/20 bg-primary/5 p-8 md:p-10">
              <h3 className="text-3xl font-bold text-primary md:text-4xl">
                {dictionary.problem.solution_title}
              </h3>
              <p className="mt-6 text-xl leading-relaxed text-foreground md:text-2xl">
                {dictionary.problem.solution_text}
              </p>

              <div className="mt-8 flex items-center gap-3">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary">
                  <Check className="h-5 w-5 text-primary-foreground" />
                </div>
                <span className="text-lg font-medium">
                  Jeden zespół, pełna odpowiedzialność
                </span>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
