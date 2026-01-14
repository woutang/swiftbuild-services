'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { Link, usePathname } from '@/i18n/navigation';
import { Button } from '@/components/ui/button';
import { Sheet, SheetContent, SheetTrigger } from '@/components/ui/sheet';
import { LanguageSwitcher } from './language-switcher';
import type { Dictionary } from '@/types';

type Props = {
  dictionary: Dictionary;
};

const navItems = [
  { href: '/uslugi', key: 'services' },
  { href: '/realizacje', key: 'portfolio' },
  { href: '/o-nas', key: 'about' },
  { href: '/kontakt', key: 'contact' },
] as const;

export function Header({ dictionary }: Props) {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
      className="fixed top-0 left-0 right-0 z-50 px-6 py-4 md:px-12 md:py-6"
    >
      <div className="mx-auto max-w-7xl">
        <nav className="flex items-center justify-between rounded-full border border-border/50 bg-background/80 px-6 py-3 backdrop-blur-md">
          {/* Logo */}
          <Link href="/" className="text-xl font-bold tracking-tight">
            Swift<span className="text-primary">Build</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.key}
                  href={item.href}
                  className={`relative text-sm font-medium transition-colors hover:text-primary ${
                    isActive ? 'text-primary' : 'text-muted-foreground'
                  }`}
                >
                  {dictionary.nav[item.key]}
                  {isActive && (
                    <motion.div
                      layoutId="activeNav"
                      className="absolute -bottom-1 left-0 right-0 h-0.5 bg-primary"
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    />
                  )}
                </Link>
              );
            })}
          </div>

          {/* Right side */}
          <div className="flex items-center gap-4">
            <LanguageSwitcher />

            {/* Desktop CTA */}
            <Button
              asChild
              className="hidden md:inline-flex"
              size="sm"
            >
              <Link href="/kontakt">{dictionary.nav.contact}</Link>
            </Button>

            {/* Mobile Menu */}
            <Sheet open={isOpen} onOpenChange={setIsOpen}>
              <SheetTrigger asChild className="md:hidden">
                <Button
                  variant="ghost"
                  size="icon"
                  aria-label={isOpen ? dictionary.accessibility.close_menu : dictionary.accessibility.open_menu}
                >
                  {isOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
                </Button>
              </SheetTrigger>
              <SheetContent
                side="right"
                className="w-full border-border/50 bg-background/95 backdrop-blur-md"
              >
                <nav className="mt-12 flex flex-col gap-6">
                  {navItems.map((item) => {
                    const isActive = pathname === item.href;
                    return (
                      <Link
                        key={item.key}
                        href={item.href}
                        onClick={() => setIsOpen(false)}
                        className={`text-2xl font-semibold transition-colors hover:text-primary ${
                          isActive ? 'text-primary' : 'text-foreground'
                        }`}
                      >
                        {dictionary.nav[item.key]}
                      </Link>
                    );
                  })}
                  <Button asChild className="mt-4 w-full" size="lg">
                    <Link href="/kontakt" onClick={() => setIsOpen(false)}>
                      {dictionary.hero.cta_primary}
                    </Link>
                  </Button>
                </nav>
              </SheetContent>
            </Sheet>
          </div>
        </nav>
      </div>
    </motion.header>
  );
}
