'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Zap, Users } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const values = [
  { key: 'point1', icon: Layers, color: 'text-blue-500' },
  { key: 'point2', icon: Zap, color: 'text-amber-500' },
  { key: 'point3', icon: Users, color: 'text-emerald-500' },
] as const;

export function ValuesSection({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

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
          <h2 className="text-4xl font-bold md:text-5xl">
            {dictionary.about.why_us.title}
          </h2>
        </motion.div>

        {/* Values grid */}
        <div className="grid gap-6 md:grid-cols-3 md:gap-8">
          {values.map((value, index) => {
            const valueData = dictionary.about.why_us[value.key];
            const Icon = value.icon;

            return (
              <motion.div
                key={value.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.1 + index * 0.1,
                  ease: easeOutExpo,
                }}
                className="group rounded-2xl border border-border/50 bg-card/50 p-8 transition-colors hover:border-primary/30 hover:bg-card"
              >
                <div
                  className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-background ${value.color}`}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="mb-3 text-xl font-semibold">{valueData.title}</h3>
                <p className="text-muted-foreground">{valueData.description}</p>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
