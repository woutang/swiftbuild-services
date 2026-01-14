'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

// Team member data with gradients and image paths
const teamMembers = [
  {
    id: 'karol',
    email: 'karol@swiftbuild.services',
    initials: 'KK',
    gradient: 'from-blue-500 to-cyan-500',
    image: '/images/team/karol.jpg',
    isFounder: true,
  },
  {
    id: 'tomasz',
    email: null,
    initials: 'TN',
    gradient: 'from-emerald-500 to-teal-500',
    image: '/images/team/tomasz.jpg',
    isFounder: false,
  },
  {
    id: 'anna',
    email: null,
    initials: 'AW',
    gradient: 'from-violet-500 to-purple-500',
    image: '/images/team/anna.jpg',
    isFounder: false,
  },
  {
    id: 'mateusz',
    email: null,
    initials: 'MZ',
    gradient: 'from-orange-500 to-amber-500',
    image: '/images/team/mateusz.jpg',
    isFounder: false,
  },
  {
    id: 'piotr',
    email: null,
    initials: 'PD',
    gradient: 'from-rose-500 to-pink-500',
    image: '/images/team/piotr.jpg',
    isFounder: false,
  },
] as const;

export function TeamSection({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-7xl px-6 md:px-12">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, ease: easeOutExpo }}
          className="mb-12 text-center"
        >
          <h1 className="text-4xl font-bold md:text-5xl">{dictionary.team.title}</h1>
          <p className="mx-auto mt-4 max-w-2xl text-lg text-muted-foreground">
            {dictionary.team.intro}
          </p>
        </motion.div>

        {/* Team grid */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {teamMembers.map((member, index) => {
            const memberData = dictionary.team.members[member.id as keyof typeof dictionary.team.members];

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.1,
                  ease: easeOutExpo,
                }}
                className={`group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-6 ${
                  member.isFounder ? 'sm:col-span-2 lg:col-span-1' : ''
                }`}
              >
                {/* Photo */}
                <div className="mb-5 flex items-center gap-5">
                  <div
                    className={`relative flex h-20 w-20 shrink-0 items-center justify-center overflow-hidden rounded-xl bg-gradient-to-br ${member.gradient}`}
                  >
                    {/* Initials fallback - will be replaced with AI images */}
                    <span className="text-2xl font-bold text-white">
                      {member.initials}
                    </span>
                    {/* Uncomment when images are added:
                    <Image
                      src={member.image}
                      alt={memberData.name}
                      fill
                      className="object-cover"
                      sizes="80px"
                    />
                    */}
                  </div>

                  <div>
                    <h3 className="text-xl font-bold">{memberData.name}</h3>
                    <p className="text-primary">{memberData.role}</p>
                  </div>
                </div>

                <p className="text-muted-foreground">{memberData.bio}</p>

                {/* Email for Karol only */}
                {member.email && (
                  <div className="mt-5">
                    <a
                      href={`mailto:${member.email}`}
                      className="inline-flex items-center gap-2 text-sm text-muted-foreground transition-colors hover:text-primary"
                      aria-label={`Email ${memberData.name}`}
                    >
                      <Mail className="h-4 w-4" />
                      {member.email}
                    </a>
                  </div>
                )}

                {/* Founder badge */}
                {member.isFounder && (
                  <div className="absolute right-4 top-4 rounded-full bg-primary/10 px-3 py-1 text-xs font-medium text-primary">
                    Founder
                  </div>
                )}

                {/* Decorative gradient */}
                <div
                  className={`absolute -right-12 -top-12 h-24 w-24 rounded-full bg-gradient-to-br ${member.gradient} opacity-10 blur-3xl transition-opacity group-hover:opacity-20`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
