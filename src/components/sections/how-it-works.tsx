'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { MessageSquare, Code, Rocket } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const steps = [
  { key: 'step1', icon: MessageSquare, number: '01' },
  { key: 'step2', icon: Code, number: '02' },
  { key: 'step3', icon: Rocket, number: '03' },
] as const;

export function HowItWorks({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="relative py-24 md:py-32">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/50 to-background" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {dictionary.process.title}
          </h2>
        </motion.div>

        {/* Steps */}
        <div className="relative mt-16">
          {/* Connecting line - desktop */}
          <div className="absolute left-0 right-0 top-20 hidden h-px bg-gradient-to-r from-transparent via-border to-transparent md:block" />

          <div className="grid gap-8 md:grid-cols-3 md:gap-12">
            {steps.map((step, index) => {
              const Icon = step.icon;
              const stepData =
                dictionary.process[step.key as keyof typeof dictionary.process];

              if (typeof stepData === 'string') return null;

              return (
                <motion.div
                  key={step.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.2 + index * 0.15,
                    ease: [0.22, 1, 0.36, 1],
                  }}
                  className="relative text-center"
                >
                  {/* Number badge */}
                  <div className="relative mx-auto mb-8 flex h-16 w-16 items-center justify-center">
                    <div className="absolute inset-0 rounded-full bg-primary/10" />
                    <div className="relative flex h-12 w-12 items-center justify-center rounded-full bg-background ring-4 ring-primary/20">
                      <Icon className="h-6 w-6 text-primary" />
                    </div>
                    {/* Step number */}
                    <span className="absolute -right-2 -top-2 flex h-7 w-7 items-center justify-center rounded-full bg-primary text-xs font-bold text-primary-foreground">
                      {step.number}
                    </span>
                  </div>

                  <h3 className="text-2xl font-semibold">{stepData.title}</h3>
                  <p className="mx-auto mt-4 max-w-xs text-muted-foreground">
                    {stepData.description}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
