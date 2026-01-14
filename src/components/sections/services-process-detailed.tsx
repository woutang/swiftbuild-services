'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import {
  Search,
  Eye,
  Phone,
  FileText,
  Code,
  Rocket,
  Check,
  X,
} from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const stepIcons = [Search, Eye, Phone, FileText, Code, Rocket];

export function ServicesProcessDetailed({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const process = dictionary.services_page.process;

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-card/30 via-background to-background" />

      <div className="mx-auto max-w-5xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-16 text-center"
        >
          <span className="mb-4 inline-block rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {process.badge}
          </span>
          <h2 className="text-3xl font-bold md:text-5xl">{process.title}</h2>
          <p className="mt-4 text-lg text-muted-foreground">{process.subtitle}</p>
        </motion.div>

        {/* Steps */}
        <div className="space-y-8">
          {process.steps.map((step, index) => {
            const Icon = stepIcons[index] || Check;

            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                animate={isInView ? { opacity: 1, x: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: easeOutExpo,
                }}
                className="relative"
              >
                <div className="flex gap-6">
                  {/* Step number */}
                  <div className="relative">
                    <div className="flex h-14 w-14 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br from-primary to-primary/60">
                      <Icon className="h-6 w-6 text-primary-foreground" />
                    </div>
                    {index < process.steps.length - 1 && (
                      <div className="absolute left-1/2 top-14 h-full w-px -translate-x-1/2 bg-gradient-to-b from-primary/30 to-transparent" />
                    )}
                  </div>

                  {/* Content */}
                  <div className="flex-1 pb-8">
                    <div className="rounded-2xl border border-border/50 bg-card p-6">
                      <div className="mb-1 text-sm font-medium text-primary">
                        {step.subtitle}
                      </div>
                      <h3 className="mb-3 text-xl font-bold">{step.title}</h3>
                      <p className="text-muted-foreground">{step.description}</p>

                      {/* Result */}
                      <div className="mt-4 flex items-start gap-2 rounded-lg bg-primary/5 p-3">
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                        <span className="text-sm font-medium">
                          {step.result}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Comparison table */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.7, ease: easeOutExpo }}
          className="mt-16"
        >
          <h3 className="mb-6 text-center text-2xl font-bold">
            {process.comparison.title}
          </h3>

          <div className="overflow-hidden rounded-2xl border border-border/50">
            {/* Header */}
            <div className="grid grid-cols-2 border-b border-border/50 bg-muted/30">
              <div className="p-4 text-center font-medium text-muted-foreground">
                {process.comparison.traditional}
              </div>
              <div className="border-l border-border/50 p-4 text-center font-medium text-primary">
                {process.comparison.swiftbuild}
              </div>
            </div>

            {/* Rows */}
            {process.comparison.rows.map((row, index) => (
              <div
                key={index}
                className={`grid grid-cols-2 ${
                  index < process.comparison.rows.length - 1
                    ? 'border-b border-border/50'
                    : ''
                }`}
              >
                <div className="flex items-center gap-2 p-4 text-muted-foreground">
                  <X className="h-4 w-4 shrink-0 text-destructive/50" />
                  <span className="text-sm">{row.traditional}</span>
                </div>
                <div className="flex items-center gap-2 border-l border-border/50 bg-primary/5 p-4">
                  <Check className="h-4 w-4 shrink-0 text-primary" />
                  <span className="text-sm font-medium">{row.swiftbuild}</span>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.8, ease: easeOutExpo }}
          className="mt-16 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <h3 className="text-2xl font-bold">{process.cta.title}</h3>
          <p className="mt-2 text-muted-foreground">{process.cta.description}</p>
          <Link
            href="/kontakt"
            className="mt-6 inline-block rounded-lg bg-primary px-8 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            {process.cta.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
