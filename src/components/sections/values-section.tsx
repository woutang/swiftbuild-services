'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Sparkles, Brain, Target } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const differentiators = [
  { key: 'speed', icon: Zap, color: 'text-amber-500', bg: 'bg-amber-500/10' },
  { key: 'design', icon: Sparkles, color: 'text-purple-500', bg: 'bg-purple-500/10' },
  { key: 'understanding', icon: Brain, color: 'text-blue-500', bg: 'bg-blue-500/10' },
  { key: 'conversion', icon: Target, color: 'text-emerald-500', bg: 'bg-emerald-500/10' },
] as const;

export function ValuesSection({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const diff = dictionary.about.differentiators;

  return (
    <section ref={ref} className="relative py-16 md:py-24">
      {/* Background */}
      <div className="absolute inset-0 -z-10 bg-gradient-to-b from-background via-card/30 to-background" />

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">{diff.title}</h2>
        </motion.div>

        {/* Differentiators grid */}
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {differentiators.map((item, index) => {
            const data = diff[item.key];
            const Icon = item.icon;

            return (
              <motion.div
                key={item.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: easeOutExpo,
                }}
                className="group rounded-2xl border border-border/50 bg-card/50 p-6 transition-colors hover:border-primary/30 hover:bg-card"
              >
                <div
                  className={`mb-4 flex h-12 w-12 items-center justify-center rounded-xl ${item.bg} ${item.color}`}
                >
                  <Icon className="h-6 w-6" />
                </div>

                <h3 className="mb-2 text-lg font-semibold">{data.title}</h3>
                <p className="text-sm text-muted-foreground">
                  {data.description}
                </p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
