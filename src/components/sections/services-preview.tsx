'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, TrendingUp, Smartphone, ArrowRight, Check } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

type TierKey = 'build' | 'grow' | 'app';

const tiers: ReadonlyArray<{
  key: TierKey;
  icon: typeof Globe;
  gradient: string;
  iconBg: string;
}> = [
  {
    key: 'build',
    icon: Globe,
    gradient: 'from-blue-500/20 to-cyan-500/20',
    iconBg: 'bg-blue-500/10 text-blue-500',
  },
  {
    key: 'grow',
    icon: TrendingUp,
    gradient: 'from-emerald-500/20 to-teal-500/20',
    iconBg: 'bg-emerald-500/10 text-emerald-500',
  },
  {
    key: 'app',
    icon: Smartphone,
    gradient: 'from-purple-500/20 to-pink-500/20',
    iconBg: 'bg-purple-500/10 text-purple-500',
  },
];

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function ServicesPreview({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const homeTiers = dictionary.services.home_tiers;

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {dictionary.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.services.subtitle}
          </p>
        </motion.div>

        {/* Tiers grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {tiers.map((tier, index) => {
            const Icon = tier.icon;
            const tierData = homeTiers?.[tier.key];

            if (!tierData) return null;

            return (
              <motion.div
                key={tier.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: easeOutExpo,
                }}
              >
                <Link
                  href="/uslugi"
                  className="group block h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${tier.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-xl ${tier.iconBg} transition-transform duration-300 group-hover:scale-110`}>
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold">
                        {tierData.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {tierData.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-6 space-y-2">
                        {(tierData.features ?? []).map((feature, i) => (
                          <li
                            key={`${tier.key}-feature-${i}`}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <Check className="h-4 w-4 shrink-0 text-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price and CTA */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-6">
                        <div>
                          <span className="font-semibold text-primary">
                            {tierData.price}
                          </span>
                          {'timeline' in tierData && tierData.timeline && (
                            <span className="ml-2 text-sm text-muted-foreground">
                              · {tierData.timeline}
                            </span>
                          )}
                        </div>
                        <span className="flex items-center gap-1 text-sm text-muted-foreground transition-colors group-hover:text-foreground">
                          {dictionary.services.cta}
                          <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                        </span>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
