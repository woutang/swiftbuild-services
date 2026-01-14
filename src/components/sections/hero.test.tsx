import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Hero } from './hero';
import { mockDictionaryPL, mockDictionaryEN } from '@/test/mocks/dictionary';

describe('Hero', () => {
  describe('Rendering', () => {
    it('renders headlines from dictionary', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.hero.headline_1)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.hero.headline_2)).toBeInTheDocument();
    });

    it('renders subheadline from dictionary', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.hero.subheadline)).toBeInTheDocument();
    });

    it('renders CTA buttons', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.hero.cta_primary })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: mockDictionaryPL.hero.cta_secondary })).toBeInTheDocument();
    });

    it('renders scroll indicator', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.hero.scroll)).toBeInTheDocument();
    });

    it('renders stat cards with dictionary values', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByText('2-3')).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.hero.stat_weeks)).toBeInTheDocument();
      expect(screen.getByText('1')).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.hero.stat_contact)).toBeInTheDocument();
    });
  });

  describe('CTA buttons', () => {
    it('primary CTA links to contact page', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      const primaryCTA = screen.getByRole('link', { name: mockDictionaryPL.hero.cta_primary });
      expect(primaryCTA).toHaveAttribute('href', '/kontakt');
    });

    it('secondary CTA links to portfolio page', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      const secondaryCTA = screen.getByRole('link', { name: mockDictionaryPL.hero.cta_secondary });
      expect(secondaryCTA).toHaveAttribute('href', '/realizacje');
    });
  });

  describe('Internationalization', () => {
    it('renders Polish content when given Polish dictionary', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      expect(screen.getByText('STRONA,')).toBeInTheDocument();
      expect(screen.getByText('SEO I REKLAMY.')).toBeInTheDocument();
    });

    it('renders English content when given English dictionary', () => {
      render(<Hero dictionary={mockDictionaryEN} />);

      expect(screen.getByText('WEBSITE,')).toBeInTheDocument();
      expect(screen.getByText('SEO AND ADS.')).toBeInTheDocument();
    });
  });

  describe('Accessibility', () => {
    it('renders as a section element', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      // The section should be in the document
      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('headline uses proper heading hierarchy', () => {
      render(<Hero dictionary={mockDictionaryPL} />);

      // H1 should contain the headline text
      const h1 = screen.getByRole('heading', { level: 1 });
      expect(h1).toBeInTheDocument();
    });
  });

  describe('Dev placeholder', () => {
    it('does not render emoji in placeholder', () => {
      const originalEnv = process.env.NODE_ENV;

      render(<Hero dictionary={mockDictionaryPL} />);

      // Should not contain video emoji
      expect(screen.queryByText(/🎬/)).not.toBeInTheDocument();
    });
  });
});
