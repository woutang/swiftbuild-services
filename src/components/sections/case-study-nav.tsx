'use client';

import { motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';
import { Link } from '@/i18n/navigation';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
  prevStudy: { slug: string; title: string } | null;
  nextStudy: { slug: string; title: string } | null;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

export function CaseStudyNav({ dictionary, prevStudy, nextStudy }: Props) {
  if (!prevStudy && !nextStudy) return null;

  return (
    <section className="border-t border-border/50 py-12">
      <div className="mx-auto max-w-4xl px-6 md:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="flex items-center justify-between gap-4"
        >
          {/* Previous */}
          {prevStudy ? (
            <Link
              href={{ pathname: '/realizacje/[slug]', params: { slug: prevStudy.slug } }}
              className="group flex items-center gap-3 text-muted-foreground transition-colors hover:text-foreground"
            >
              <ArrowLeft className="h-5 w-5 transition-transform group-hover:-translate-x-1" />
              <div className="text-left">
                <div className="text-xs uppercase tracking-wider opacity-60">
                  {dictionary.portfolio.prev_project}
                </div>
                <div className="font-medium">{prevStudy.title}</div>
              </div>
            </Link>
          ) : (
            <div />
          )}

          {/* Next */}
          {nextStudy ? (
            <Link
              href={{ pathname: '/realizacje/[slug]', params: { slug: nextStudy.slug } }}
              className="group flex items-center gap-3 text-right text-muted-foreground transition-colors hover:text-foreground"
            >
              <div>
                <div className="text-xs uppercase tracking-wider opacity-60">
                  {dictionary.portfolio.next_project}
                </div>
                <div className="font-medium">{nextStudy.title}</div>
              </div>
              <ArrowRight className="h-5 w-5 transition-transform group-hover:translate-x-1" />
            </Link>
          ) : (
            <div />
          )}
        </motion.div>
      </div>
    </section>
  );
}
