'use client';

import { motion } from 'framer-motion';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function PortfolioHero({ dictionary }: Props) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/3 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/3 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center"
        >
          <h1 className="text-hero">{dictionary.portfolio.title}</h1>
          <p className="mx-auto mt-6 max-w-2xl text-xl text-muted-foreground md:text-2xl">
            {dictionary.portfolio.subtitle}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
