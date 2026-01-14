'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Check, Globe, TrendingUp, Rocket } from 'lucide-react';
import Link from 'next/link';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function ServicesTiers({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const tiers = dictionary.services_page.tiers;

  const monthlyTiers = [
    {
      key: 'starter',
      data: tiers.starter,
      icon: Globe,
      color: 'from-slate-500 to-zinc-500',
      popular: false,
    },
    {
      key: 'growth',
      data: tiers.growth,
      icon: TrendingUp,
      color: 'from-emerald-500 to-teal-500',
      popular: true,
    },
    {
      key: 'scale',
      data: tiers.scale,
      icon: Rocket,
      color: 'from-orange-500 to-amber-500',
      popular: false,
    },
  ];

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-16 text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">{tiers.title}</h2>
          <p className="mt-4 text-xl text-muted-foreground">{tiers.subtitle}</p>
        </motion.div>

        {/* One-time: Website */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1, ease: easeOutExpo }}
          className="mb-12"
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {tiers.one_time}
            </span>
          </div>

          <div className="overflow-hidden rounded-2xl border border-primary/30 bg-card">
            <div className="grid gap-8 p-8 lg:grid-cols-[1fr,auto]">
              <div>
                <h3 className="text-2xl font-bold">{tiers.website.title}</h3>
                <p className="mt-1 text-muted-foreground">
                  {tiers.website.subtitle}
                </p>
                <p className="mt-4 text-muted-foreground">
                  {tiers.website.description}
                </p>

                <div className="mt-6 grid gap-2 sm:grid-cols-2">
                  {tiers.website.features.map((feature, i) => (
                    <div key={i} className="flex items-start gap-2">
                      <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                      <span className="text-sm text-muted-foreground">
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex flex-col items-end justify-center border-t pt-6 lg:border-l lg:border-t-0 lg:pl-8 lg:pt-0">
                <div className="text-4xl font-bold text-primary">
                  {tiers.website.price}
                </div>
                <div className="mt-2 text-muted-foreground">
                  {tiers.website.timeline}
                </div>
                <Link
                  href="/kontakt"
                  className="mt-4 rounded-lg bg-primary px-6 py-3 font-medium text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  {dictionary.cta.button}
                </Link>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Monthly tiers */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOutExpo }}
        >
          <div className="mb-4 flex items-center gap-2">
            <span className="rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
              {tiers.monthly}
            </span>
            <span className="text-sm text-muted-foreground">
              {tiers.minimum_commitment}
            </span>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {monthlyTiers.map((tier, index) => {
              const Icon = tier.icon;

              return (
                <motion.div
                  key={tier.key}
                  initial={{ opacity: 0, y: 30 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.3 + index * 0.1,
                    ease: easeOutExpo,
                  }}
                  className={`relative overflow-hidden rounded-2xl border ${
                    tier.popular
                      ? 'border-primary bg-card'
                      : 'border-border/50 bg-card/50'
                  }`}
                >
                  {tier.popular && (
                    <div className="absolute right-4 top-4">
                      <span className="rounded-full bg-primary px-3 py-1 text-xs font-medium text-primary-foreground">
                        {tiers.popular}
                      </span>
                    </div>
                  )}

                  <div className="p-6">
                    <div
                      className={`mb-4 inline-flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br ${tier.color}`}
                    >
                      <Icon className="h-6 w-6 text-white" />
                    </div>

                    <h3 className="text-xl font-bold">{tier.data.title}</h3>
                    <p className="mt-1 text-sm text-muted-foreground">
                      {tier.data.subtitle}
                    </p>

                    <div className="mt-4">
                      <span className="text-3xl font-bold">
                        {tier.data.price}
                      </span>
                      <span className="text-muted-foreground">
                        {tier.data.price_suffix}
                      </span>
                    </div>

                    <p className="mt-4 text-sm text-muted-foreground">
                      {tier.data.description}
                    </p>

                    <ul className="mt-6 space-y-2">
                      {tier.data.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-2">
                          <Check className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                          <span className="text-sm">{feature}</span>
                        </li>
                      ))}
                    </ul>

                    {'note' in tier.data && (tier.data as { note?: string }).note && (
                      <p className="mt-4 rounded-lg bg-muted/50 p-3 text-xs text-muted-foreground">
                        {(tier.data as { note?: string }).note}
                      </p>
                    )}

                    <Link
                      href="/kontakt"
                      className={`mt-6 block w-full rounded-lg py-3 text-center font-medium transition-colors ${
                        tier.popular
                          ? 'bg-primary text-primary-foreground hover:bg-primary/90'
                          : 'border border-border bg-background hover:bg-muted'
                      }`}
                    >
                      {dictionary.cta.button}
                    </Link>
                  </div>
                </motion.div>
              );
            })}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
