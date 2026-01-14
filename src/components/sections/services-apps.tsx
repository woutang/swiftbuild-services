'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Layers, Smartphone, Building } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function ServicesApps({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const apps = dictionary.services_page.apps;

  const offerings = [
    {
      key: 'prototype',
      data: apps.prototype,
      icon: Layers,
      color: 'from-purple-500 to-violet-500',
    },
    {
      key: 'mvp',
      data: apps.mvp,
      icon: Smartphone,
      color: 'from-blue-500 to-cyan-500',
    },
    {
      key: 'full',
      data: apps.full,
      icon: Building,
      color: 'from-emerald-500 to-teal-500',
    },
  ];

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
          className="mb-12 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">{apps.title}</h2>
          <p className="mt-4 text-xl text-muted-foreground">{apps.subtitle}</p>
        </motion.div>

        {/* Offerings grid */}
        <div className="grid gap-6 md:grid-cols-3">
          {offerings.map((offering, index) => {
            const Icon = offering.icon;

            return (
              <motion.div
                key={offering.key}
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
                  className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${offering.color}`}
                >
                  <Icon className="h-6 w-6 text-white" />
                </div>

                <h3 className="text-xl font-bold">{offering.data.title}</h3>
                <p className="mt-2 text-sm text-muted-foreground">
                  {offering.data.description}
                </p>

                <div className="mt-4 text-2xl font-bold text-primary">
                  {offering.data.price}
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Maintenance note */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4, ease: easeOutExpo }}
          className="mt-8 text-center text-muted-foreground"
        >
          {apps.maintenance_note}
        </motion.p>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.5, ease: easeOutExpo }}
          className="mt-8 text-center"
        >
          <Link
            href="/kontakt"
            className="inline-block rounded-lg border border-border px-6 py-3 font-medium transition-colors hover:bg-muted"
          >
            {dictionary.cta.button}
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
