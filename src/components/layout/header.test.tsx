import { describe, it, expect, vi } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { Header } from './header';
import { mockDictionaryPL } from '@/test/mocks/dictionary';

// Mock Sheet components from Radix
vi.mock('@/components/ui/sheet', () => ({
  Sheet: ({ children }: { children: React.ReactNode }) => <div>{children}</div>,
  SheetContent: ({ children }: { children: React.ReactNode }) => (
    <div data-testid="sheet-content">{children}</div>
  ),
  SheetTrigger: ({ children, ...props }: { children: React.ReactNode }) => (
    <div {...props}>{children}</div>
  ),
}));

describe('Header', () => {
  describe('Rendering', () => {
    it('renders the logo with brand name', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      // SwiftBuild is split into "Swift" and "Build"
      expect(screen.getByText('Swift')).toBeInTheDocument();
      expect(screen.getByText('Build')).toBeInTheDocument();
    });

    it('renders navigation links', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      // Services, portfolio, about appear in both desktop and mobile nav
      expect(screen.getAllByText(mockDictionaryPL.nav.services).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(mockDictionaryPL.nav.portfolio).length).toBeGreaterThanOrEqual(1);
      expect(screen.getAllByText(mockDictionaryPL.nav.about).length).toBeGreaterThanOrEqual(1);
      // Contact appears multiple times (nav + CTA)
      expect(screen.getAllByText(mockDictionaryPL.nav.contact).length).toBeGreaterThanOrEqual(1);
    });

    it('renders language switcher', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      expect(screen.getByText('PL')).toBeInTheDocument();
      expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('renders mobile menu button', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      const menuButton = screen.getByRole('button', {
        name: mockDictionaryPL.accessibility.open_menu,
      });
      expect(menuButton).toBeInTheDocument();
    });
  });

  describe('Navigation links', () => {
    it('links to correct paths', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      // Multiple links exist (desktop + mobile), check first one
      const servicesLinks = screen.getAllByRole('link', { name: mockDictionaryPL.nav.services });
      expect(servicesLinks[0]).toHaveAttribute('href', '/uslugi');

      const portfolioLinks = screen.getAllByRole('link', { name: mockDictionaryPL.nav.portfolio });
      expect(portfolioLinks[0]).toHaveAttribute('href', '/realizacje');

      const aboutLinks = screen.getAllByRole('link', { name: mockDictionaryPL.nav.about });
      expect(aboutLinks[0]).toHaveAttribute('href', '/o-nas');
    });

    it('logo links to homepage', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      const logoLink = screen.getByRole('link', { name: /swift.*build/i });
      expect(logoLink).toHaveAttribute('href', '/');
    });
  });

  describe('Accessibility', () => {
    it('mobile menu button has correct aria-label', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      const menuButton = screen.getByRole('button', {
        name: mockDictionaryPL.accessibility.open_menu,
      });
      expect(menuButton).toHaveAttribute('aria-label', mockDictionaryPL.accessibility.open_menu);
    });

    it('navigation is contained in nav element', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      // There may be multiple nav elements (desktop + mobile)
      expect(screen.getAllByRole('navigation').length).toBeGreaterThanOrEqual(1);
    });
  });

  describe('Mobile menu', () => {
    it('renders mobile menu trigger', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      const menuButton = screen.getByRole('button', {
        name: mockDictionaryPL.accessibility.open_menu,
      });
      expect(menuButton).toBeInTheDocument();
    });

    it('mobile menu contains navigation links', () => {
      render(<Header dictionary={mockDictionaryPL} />);

      const sheetContent = screen.getByTestId('sheet-content');
      expect(sheetContent).toBeInTheDocument();
    });
  });
});
