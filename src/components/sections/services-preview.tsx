'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Globe, TrendingUp, Target, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const services = [
  {
    key: 'website',
    icon: Globe,
    gradient: 'from-blue-500/20 to-cyan-500/20',
  },
  {
    key: 'seo',
    icon: TrendingUp,
    gradient: 'from-green-500/20 to-emerald-500/20',
  },
  {
    key: 'ads',
    icon: Target,
    gradient: 'from-orange-500/20 to-amber-500/20',
  },
] as const;

export function ServicesPreview({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-24 md:py-32">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          className="text-center"
        >
          <h2 className="text-4xl font-bold md:text-5xl">
            {dictionary.services.title}
          </h2>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.services.subtitle}
          </p>
        </motion.div>

        {/* Services grid */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service, index) => {
            const Icon = service.icon;
            const serviceData =
              dictionary.services[service.key as keyof typeof dictionary.services];

            if (typeof serviceData === 'string') return null;

            return (
              <motion.div
                key={service.key}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{
                  duration: 0.6,
                  delay: 0.2 + index * 0.1,
                  ease: [0.22, 1, 0.36, 1],
                }}
              >
                <Link
                  href={{ pathname: '/uslugi', hash: service.key }}
                  className="group block h-full"
                >
                  <div className="relative h-full overflow-hidden rounded-2xl border border-border/50 bg-card p-8 transition-all duration-300 hover:border-primary/50 hover:bg-card/80">
                    {/* Background gradient on hover */}
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />

                    <div className="relative">
                      {/* Icon */}
                      <div className="mb-6 flex h-14 w-14 items-center justify-center rounded-xl bg-primary/10 text-primary transition-transform duration-300 group-hover:scale-110">
                        <Icon className="h-7 w-7" />
                      </div>

                      {/* Content */}
                      <h3 className="text-2xl font-semibold">
                        {serviceData.title}
                      </h3>
                      <p className="mt-3 text-muted-foreground">
                        {serviceData.description}
                      </p>

                      {/* Features */}
                      <ul className="mt-6 space-y-2">
                        {serviceData.features.slice(0, 3).map((feature, i) => (
                          <li
                            key={i}
                            className="flex items-center gap-2 text-sm text-muted-foreground"
                          >
                            <span className="h-1 w-1 rounded-full bg-primary" />
                            {feature}
                          </li>
                        ))}
                      </ul>

                      {/* Price hint */}
                      <div className="mt-6 flex items-center justify-between border-t border-border/50 pt-6">
                        <span className="font-semibold text-primary">
                          {serviceData.price}
                        </span>
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
