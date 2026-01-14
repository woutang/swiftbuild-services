import '@testing-library/jest-dom/vitest';
import { cleanup } from '@testing-library/react';
import { afterEach, vi } from 'vitest';
import React from 'react';

// Cleanup after each test
afterEach(() => {
  cleanup();
});

// Mock next/navigation
vi.mock('next/navigation', () => ({
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
  useSearchParams: () => new URLSearchParams(),
}));

// Mock next-intl
vi.mock('next-intl', () => ({
  useLocale: () => 'pl',
  useTranslations: () => (key: string) => key,
}));

// Mock @/i18n/navigation
vi.mock('@/i18n/navigation', () => ({
  Link: ({ children, href, ...props }: { children: React.ReactNode; href: string | { pathname: string; hash?: string } }) => {
    const hrefString = typeof href === 'object' ? `${href.pathname}#${href.hash || ''}` : href;
    return React.createElement('a', { href: hrefString, ...props }, children);
  },
  usePathname: () => '/',
  useRouter: () => ({
    push: vi.fn(),
    replace: vi.fn(),
  }),
}));

// Mock framer-motion to avoid animation issues in tests
vi.mock('framer-motion', () => ({
  motion: {
    div: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, whileHover, whileTap, layoutId, ...rest } = props as Record<string, unknown>;
      return React.createElement('div', rest, children);
    },
    header: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, whileHover, whileTap, layoutId, ...rest } = props as Record<string, unknown>;
      return React.createElement('header', rest, children);
    },
    section: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, whileHover, whileTap, layoutId, ...rest } = props as Record<string, unknown>;
      return React.createElement('section', rest, children);
    },
    p: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, ...rest } = props as Record<string, unknown>;
      return React.createElement('p', rest, children);
    },
    h1: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, ...rest } = props as Record<string, unknown>;
      return React.createElement('h1', rest, children);
    },
    form: ({ children, ...props }: { children: React.ReactNode }) => {
      const { initial, animate, exit, variants, transition, ...rest } = props as Record<string, unknown>;
      return React.createElement('form', rest, children);
    },
  },
  AnimatePresence: ({ children }: { children: React.ReactNode }) => children,
  useInView: () => true,
}));

// Mock @radix-ui/react-label
vi.mock('@radix-ui/react-label', () => ({
  Root: ({ children, ...props }: { children: React.ReactNode }) => {
    return React.createElement('label', props, children);
  },
}));

// Mock window.matchMedia
Object.defineProperty(window, 'matchMedia', {
  writable: true,
  value: vi.fn().mockImplementation((query: string) => ({
    matches: false,
    media: query,
    onchange: null,
    addListener: vi.fn(),
    removeListener: vi.fn(),
    addEventListener: vi.fn(),
    removeEventListener: vi.fn(),
    dispatchEvent: vi.fn(),
  })),
});
