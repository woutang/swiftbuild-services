'use client';

import { motion } from 'framer-motion';
import { X } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function AboutHero({ dictionary }: Props) {
  const about = dictionary.about;

  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 md:px-12">
        {/* Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-8 flex justify-center"
        >
          <span className="rounded-full bg-primary/10 px-4 py-2 text-sm font-medium text-primary">
            {about.story_badge}
          </span>
        </motion.div>

        {/* Headline */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
          className="text-center"
        >
          <h1 className="text-hero mb-6">{about.story_headline}</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {about.story_intro}
          </p>
        </motion.div>

        {/* Frustrations list */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="mt-12"
        >
          <p className="mb-6 text-center text-lg font-medium">
            {about.story_frustration_title}
          </p>
          <div className="grid gap-3 sm:grid-cols-2">
            {about.story_frustrations.map((frustration, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{
                  duration: 0.5,
                  delay: 0.3 + index * 0.1,
                  ease: easeOutExpo,
                }}
                className="flex items-start gap-3 rounded-lg border border-destructive/20 bg-destructive/5 p-4"
              >
                <X className="mt-0.5 h-5 w-5 shrink-0 text-destructive" />
                <span className="text-muted-foreground">{frustration}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Feeling */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5, ease: easeOutExpo }}
          className="mx-auto mt-12 max-w-2xl text-center text-lg text-muted-foreground"
        >
          {about.story_feeling}
        </motion.p>

        {/* Mission */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.6, ease: easeOutExpo }}
          className="mt-12 rounded-2xl border border-primary/20 bg-primary/5 p-8 text-center"
        >
          <p className="mb-4 text-muted-foreground">{about.story_premise}</p>
          <p className="text-2xl font-bold text-primary md:text-3xl">
            {about.story_mission}
          </p>
          <p className="mt-4 text-muted-foreground">
            {about.story_mission_detail}
          </p>
        </motion.div>

        {/* Conclusion */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.7, ease: easeOutExpo }}
          className="mt-12 text-center text-xl font-medium md:text-2xl"
        >
          {about.story_conclusion}
        </motion.p>
      </div>
    </section>
  );
}
