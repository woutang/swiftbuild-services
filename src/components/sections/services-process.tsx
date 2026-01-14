'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, PenTool, Code, CheckCircle, Rocket, BarChart } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const processSteps = [
  { icon: MessageSquare, color: 'text-blue-500' },
  { icon: PenTool, color: 'text-purple-500' },
  { icon: Code, color: 'text-cyan-500' },
  { icon: CheckCircle, color: 'text-green-500' },
  { icon: Rocket, color: 'text-orange-500' },
  { icon: BarChart, color: 'text-pink-500' },
];

export function ServicesProcess({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const steps = dictionary.services_page.website_detail.process_steps;

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {dictionary.services_page.website_detail.process}
          </h2>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical line - mobile */}
          <div className="absolute bottom-0 left-6 top-0 w-px bg-gradient-to-b from-primary/50 via-primary/20 to-transparent md:hidden" />

          {/* Horizontal line - desktop */}
          <div className="absolute left-0 right-0 top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-transparent via-primary/30 to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-5">
            {steps.map((step, index) => {
              const StepIcon = processSteps[index]?.icon || CheckCircle;
              const color = processSteps[index]?.color || 'text-primary';

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.1 + index * 0.1,
                    ease: easeOutExpo,
                  }}
                  className="relative flex gap-4 md:flex-col md:items-center md:text-center"
                >
                  {/* Icon */}
                  <div className="relative z-10 flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-card ring-4 ring-background">
                    <StepIcon className={`h-5 w-5 ${color}`} />
                  </div>

                  {/* Content */}
                  <div className="pb-8 md:pb-0 md:pt-6">
                    <div className="mb-2 text-sm font-medium text-primary">
                      {String(index + 1).padStart(2, '0')}
                    </div>
                    <p className="text-sm text-muted-foreground md:max-w-[140px]">
                      {step}
                    </p>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
