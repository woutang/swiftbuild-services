'use client';

import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Mail, Linkedin } from 'lucide-react';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const easeOutExpo = [0.22, 1, 0.36, 1] as const;

const team = [
  {
    id: 'karol',
    email: 'karol@swiftbuild.services',
    linkedin: '#',
    initials: 'K',
    gradient: 'from-blue-500 to-cyan-500',
  },
  {
    id: 'wouter',
    email: 'wouter@swiftbuild.services',
    linkedin: '#',
    initials: 'W',
    gradient: 'from-purple-500 to-pink-500',
  },
] as const;

export function TeamSection({ dictionary }: Props) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-100px' });

  return (
    <section ref={ref} className="py-16 md:py-24">
      <div className="mx-auto max-w-5xl px-6 md:px-12">
        <div className="grid gap-8 md:grid-cols-2 md:gap-12">
          {team.map((member, index) => {
            const memberData = dictionary.about[member.id as keyof typeof dictionary.about] as {
              role: string;
              bio: string;
            };

            return (
              <motion.div
                key={member.id}
                initial={{ opacity: 0, y: 40 }}
                animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 40 }}
                transition={{
                  duration: 0.8,
                  delay: index * 0.2,
                  ease: easeOutExpo,
                }}
                className="group relative overflow-hidden rounded-2xl border border-border/50 bg-card p-8"
              >
                {/* Photo placeholder */}
                <div className="mb-6 flex items-center gap-6">
                  <div
                    className={`flex h-24 w-24 shrink-0 items-center justify-center rounded-2xl bg-gradient-to-br ${member.gradient}`}
                  >
                    <span className="text-4xl font-bold text-white">
                      {member.initials}
                    </span>
                  </div>

                  <div>
                    <h3 className="text-2xl font-bold capitalize">{member.id}</h3>
                    <p className="text-primary">{memberData.role}</p>
                  </div>
                </div>

                <p className="mb-6 text-muted-foreground">{memberData.bio}</p>

                {/* Social links */}
                <div className="flex gap-3">
                  <a
                    href={`mailto:${member.email}`}
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    aria-label={`Email ${member.id}`}
                  >
                    <Mail className="h-5 w-5" />
                  </a>
                  <a
                    href={member.linkedin}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex h-10 w-10 items-center justify-center rounded-lg border border-border/50 text-muted-foreground transition-colors hover:border-primary/50 hover:text-primary"
                    aria-label={`${member.id}'s LinkedIn`}
                  >
                    <Linkedin className="h-5 w-5" />
                  </a>
                </div>

                {/* Decorative gradient */}
                <div
                  className={`absolute -right-16 -top-16 h-32 w-32 rounded-full bg-gradient-to-br ${member.gradient} opacity-10 blur-3xl`}
                />
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
