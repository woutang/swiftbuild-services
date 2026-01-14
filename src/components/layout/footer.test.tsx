import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { Footer } from './footer';
import { mockDictionaryPL } from '@/test/mocks/dictionary';

describe('Footer', () => {
  describe('Rendering', () => {
    it('renders the brand name', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByText('Swift')).toBeInTheDocument();
      expect(screen.getByText('Build')).toBeInTheDocument();
    });

    it('renders the tagline', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.footer.tagline)).toBeInTheDocument();
    });

    it('renders navigation links', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.services })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.portfolio })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.about })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.team })).toBeInTheDocument();
      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.contact })).toBeInTheDocument();
    });

    it('renders copyright with current year and brand name', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      const currentYear = new Date().getFullYear();
      expect(
        screen.getByText(new RegExp(`${currentYear}.*${mockDictionaryPL.brand.name}`))
      ).toBeInTheDocument();
    });

    it('renders privacy policy link', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.footer.privacy })).toBeInTheDocument();
    });
  });

  describe('Contact information', () => {
    it('renders email link from dictionary', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      const emailLink = screen.getByRole('link', { name: mockDictionaryPL.footer.email });
      expect(emailLink).toHaveAttribute('href', `mailto:${mockDictionaryPL.footer.email}`);
    });
  });

  describe('Navigation links paths', () => {
    it('services link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.services })).toHaveAttribute(
        'href',
        '/uslugi'
      );
    });

    it('portfolio link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.portfolio })).toHaveAttribute(
        'href',
        '/realizacje'
      );
    });

    it('about link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.about })).toHaveAttribute(
        'href',
        '/o-nas'
      );
    });

    it('team link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.team })).toHaveAttribute(
        'href',
        '/zespol'
      );
    });

    it('contact link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.nav.contact })).toHaveAttribute(
        'href',
        '/kontakt'
      );
    });

    it('privacy policy link points to correct path', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('link', { name: mockDictionaryPL.footer.privacy })).toHaveAttribute(
        'href',
        '/polityka-prywatnosci'
      );
    });
  });

  describe('Accessibility', () => {
    it('renders as a footer element', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('contentinfo')).toBeInTheDocument();
    });

    it('has navigation section heading', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.footer.menu_label)).toBeInTheDocument();
    });

    it('has contact section heading', () => {
      render(<Footer dictionary={mockDictionaryPL} />);

      // Contact header in footer
      expect(screen.getAllByText(mockDictionaryPL.nav.contact).length).toBeGreaterThanOrEqual(1);
    });
  });
});
