'use client';

import { motion } from 'framer-motion';
import { Mail, Phone } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function ContactHero({ dictionary }: Props) {
  return (
    <section className="relative overflow-hidden py-24 md:py-32">
      {/* Background gradient */}
      <div className="absolute inset-0 -z-10">
        <div className="absolute left-1/4 top-0 h-[400px] w-[400px] rounded-full bg-primary/10 blur-[120px]" />
        <div className="absolute bottom-0 right-1/4 h-[300px] w-[300px] rounded-full bg-primary/5 blur-[100px]" />
      </div>

      <div className="mx-auto max-w-4xl px-6 text-center md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: easeOutExpo }}
        >
          <h1 className="text-hero mb-4">{dictionary.contact.title}</h1>
          <p className="text-xl text-muted-foreground md:text-2xl">
            {dictionary.contact.subtitle}
          </p>
        </motion.div>

        {/* Direct contact info */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: easeOutExpo }}
          className="mt-10 flex flex-col items-center justify-center gap-6 sm:flex-row"
        >
          <a
            href="mailto:kontakt@swiftbuild.services"
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-5 w-5 text-primary" />
            </div>
            <span>kontakt@swiftbuild.services</span>
          </a>

          <a
            href={dictionary.contact.phone_href}
            className="flex items-center gap-3 text-muted-foreground transition-colors hover:text-primary"
          >
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Phone className="h-5 w-5 text-primary" />
            </div>
            <span>{dictionary.contact.phone_number}</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
