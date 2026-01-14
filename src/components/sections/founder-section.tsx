'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function FounderSection({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const founders = dictionary.about.founders;

  const foundersList = [
    {
      key: 'wouter',
      data: founders.wouter,
      color: 'from-emerald-500 to-teal-500',
      initial: 'W',
    },
    {
      key: 'karol',
      data: founders.karol,
      color: 'from-blue-500 to-cyan-500',
      initial: 'K',
    },
  ];

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-6xl px-6 md:px-12">
        {/* Section title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">{founders.title}</h2>
        </motion.div>

        {/* Founders grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {foundersList.map((founder, index) => (
            <motion.div
              key={founder.key}
              initial={{ opacity: 0, y: 40 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
              transition={{
                duration: 0.8,
                delay: index * 0.15,
                ease: easeOutExpo,
              }}
              className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card"
            >
              <div className="p-8">
                {/* Photo placeholder */}
                <div className="mb-6">
                  <div
                    className={`relative mx-auto aspect-square w-32 overflow-hidden rounded-2xl bg-gradient-to-br ${founder.color}`}
                  >
                    <div className="flex h-full items-center justify-center">
                      <span className="text-5xl font-bold text-white/80">
                        {founder.initial}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="text-center">
                  <h3 className="text-2xl font-bold">{founder.data.name}</h3>
                  <p className="mt-1 text-primary">{founder.data.role}</p>
                  <p className="mt-2 text-sm text-muted-foreground">
                    {founder.data.background}
                  </p>

                  <p className="mt-4 text-muted-foreground">
                    {founder.data.bio}
                  </p>

                  {/* Contact */}
                  <div className="mt-6 flex justify-center gap-3">
                    <a
                      href={`mailto:${founder.key}@swiftbuild.services`}
                      className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Mail className="h-4 w-4" />
                      Email
                    </a>
                    <a
                      href="#"
                      className="inline-flex items-center gap-2 rounded-lg border border-border/50 px-4 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    >
                      <Linkedin className="h-4 w-4" />
                      LinkedIn
                    </a>
                  </div>
                </div>
              </div>

              {/* Decorative gradient */}
              <div
                className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${founder.color} opacity-10 blur-3xl`}
              />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
