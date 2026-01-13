'use client';

import { motion } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.3,
    },
  },
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const itemVariants = {
  hidden: { opacity: 0, y: 30 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.8,
      ease: easeOutExpo,
    },
  },
};

export function Hero({ dictionary }: Props) {
  return (
    <section className="relative min-h-[90vh] overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute bottom-0 left-1/4 h-[500px] w-[500px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute right-1/4 top-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="grid min-h-[90vh] items-center gap-12 lg:grid-cols-2">
          {/* Text content */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="show"
            className="pt-12 md:pt-0"
          >
            <motion.h1
              variants={itemVariants}
              className="text-hero max-w-2xl"
            >
              <span className="block">{dictionary.hero.headline_1}</span>
              <span className="block text-gradient">
                {dictionary.hero.headline_2}
              </span>
            </motion.h1>

            <motion.p
              variants={itemVariants}
              className="mt-6 text-xl text-muted-foreground md:text-2xl"
            >
              {dictionary.hero.subheadline}
            </motion.p>

            <motion.div
              variants={itemVariants}
              className="mt-10 flex flex-col gap-4 sm:flex-row"
            >
              <Button asChild size="lg" className="text-lg">
                <Link href="/kontakt">{dictionary.hero.cta_primary}</Link>
              </Button>
              <Button asChild variant="outline" size="lg" className="text-lg">
                <Link href="/realizacje">{dictionary.hero.cta_secondary}</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Video/Visual area */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
            className="relative hidden lg:block"
          >
            <div className="relative aspect-[4/3] overflow-hidden rounded-2xl border border-border/50 bg-card">
              {/* Placeholder for video - replace with actual video loop */}
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-center">
                  <div className="mb-4 text-6xl">🎬</div>
                  <p className="text-muted-foreground">
                    Video loop placeholder
                  </p>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Add screen recording of Celtic/DeluxDeco sites
                  </p>
                </div>
              </div>

              {/* Decorative elements */}
              <div className="absolute -right-4 -top-4 h-24 w-24 rounded-full border border-primary/20" />
              <div className="absolute -bottom-8 -left-8 h-32 w-32 rounded-full border border-primary/10" />
            </div>

            {/* Floating stat cards */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1, duration: 0.5 }}
              className="absolute -left-8 bottom-12 rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-primary">2-3</div>
              <div className="text-sm text-muted-foreground">tygodnie</div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 1.2, duration: 0.5 }}
              className="absolute -right-4 top-8 rounded-xl border border-border/50 bg-card/80 p-4 backdrop-blur-sm"
            >
              <div className="text-3xl font-bold text-primary">1</div>
              <div className="text-sm text-muted-foreground">kontakt</div>
            </motion.div>
          </motion.div>
        </div>

        {/* Scroll indicator */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.5, duration: 0.5 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <motion.div
            animate={{ y: [0, 8, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: 'easeInOut' }}
            className="flex flex-col items-center gap-2 text-muted-foreground"
          >
            <span className="text-xs uppercase tracking-widest">
              {dictionary.hero.scroll}
            </span>
            <ArrowDown className="h-4 w-4" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
