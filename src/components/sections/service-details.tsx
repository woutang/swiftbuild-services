'use client';

import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import { Globe, Search, Megaphone, Check } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const services = [
  {
    id: 'website',
    icon: Globe,
    color: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'seo',
    icon: Search,
    color: 'from-emerald-500 to-teal-500',
  },
  {
    id: 'ads',
    icon: Megaphone,
    color: 'from-orange-500 to-amber-500',
  },
] as const;

export function ServiceDetails({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  const getServiceData = (id: 'website' | 'seo' | 'ads') => {
    const detailKey = `${id}_detail` as const;
    const baseKey = id === 'website' ? 'website' : id;

    return {
      detail: dictionary.services_page[`${id}_detail` as keyof typeof dictionary.services_page] as {
        title: string;
        intro: string;
        what_you_get: string;
        features: string[];
        process?: string;
        process_steps?: string[];
        timeline_note?: string;
        budget_note?: string;
      },
      base: dictionary.services[baseKey],
    };
  };

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        <div className="space-y-24">
          {services.map((service, index) => {
            const { detail, base } = getServiceData(service.id);
            const Icon = service.icon;
            const isEven = index % 2 === 1;

            return (
              <motion.div
                key={service.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: easeOutExpo,
                }}
                className={`grid gap-12 lg:grid-cols-2 lg:gap-16 ${
                  isEven ? 'lg:direction-rtl' : ''
                }`}
              >
                {/* Content */}
                <div className={isEven ? 'lg:order-2' : ''}>
                  <div
                    className={`mb-6 inline-flex h-14 w-14 items-center justify-center rounded-xl bg-gradient-to-br ${service.color}`}
                  >
                    <Icon className="h-7 w-7 text-white" />
                  </div>

                  <h2 className="text-h1 mb-4">{detail.title}</h2>
                  <p className="mb-8 text-lg text-muted-foreground">
                    {detail.intro}
                  </p>

                  {/* What you get */}
                  <div className="mb-8">
                    <h3 className="mb-4 text-lg font-semibold">
                      {detail.what_you_get}
                    </h3>
                    <ul className="space-y-3">
                      {detail.features.map((feature, i) => (
                        <li key={i} className="flex items-start gap-3">
                          <Check className="mt-0.5 h-5 w-5 shrink-0 text-primary" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Process steps (for website) */}
                  {detail.process && detail.process_steps && (
                    <div className="mb-8">
                      <h3 className="mb-4 text-lg font-semibold">
                        {detail.process}
                      </h3>
                      <ol className="space-y-2">
                        {detail.process_steps.map((step, i) => (
                          <li key={i} className="flex items-start gap-3">
                            <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-primary/10 text-sm font-medium text-primary">
                              {i + 1}
                            </span>
                            <span className="text-muted-foreground">{step}</span>
                          </li>
                        ))}
                      </ol>
                    </div>
                  )}

                  {/* Timeline/budget note */}
                  {(detail.timeline_note || detail.budget_note) && (
                    <p className="rounded-lg border border-border/50 bg-card/50 p-4 text-sm text-muted-foreground">
                      {detail.timeline_note || detail.budget_note}
                    </p>
                  )}
                </div>

                {/* Card */}
                <div className={`${isEven ? 'lg:order-1' : ''}`}>
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-8">
                    <div className="relative z-10">
                      <div className="mb-6 text-5xl font-bold text-primary">
                        {base.price}
                      </div>
                      <div className="mb-8 text-lg text-muted-foreground">
                        {base.timeline}
                      </div>

                      <div className="space-y-3">
                        {base.features.map((feature, i) => (
                          <div
                            key={i}
                            className="flex items-center gap-3 rounded-lg bg-background/50 p-3"
                          >
                            <Check className="h-5 w-5 text-primary" />
                            <span>{feature}</span>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Decorative gradient */}
                    <div
                      className={`absolute -right-20 -top-20 h-40 w-40 rounded-full bg-gradient-to-br ${service.color} opacity-10 blur-3xl`}
                    />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
