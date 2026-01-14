import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { LanguageSwitcher } from './language-switcher';
import { mockDictionaryPL, mockDictionaryEN } from '@/test/mocks/dictionary';

// Mock router
const mockReplace = vi.fn();

vi.mock('next/navigation', () => ({
  useRouter: () => ({
    replace: mockReplace,
    push: vi.fn(),
    prefetch: vi.fn(),
    back: vi.fn(),
  }),
  usePathname: () => '/',
}));

// Reset locale mock for each test
let mockLocale = 'pl';
vi.mock('next-intl', () => ({
  useLocale: () => mockLocale,
}));

describe('LanguageSwitcher', () => {
  beforeEach(() => {
    mockReplace.mockReset();
    mockLocale = 'pl';
  });

  describe('Rendering', () => {
    it('renders PL and EN options', () => {
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      expect(screen.getByText('PL')).toBeInTheDocument();
      expect(screen.getByText('EN')).toBeInTheDocument();
    });

    it('renders as a button', () => {
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('button')).toBeInTheDocument();
    });

    it('has correct aria-label from dictionary', () => {
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      expect(screen.getByRole('button')).toHaveAttribute(
        'aria-label',
        mockDictionaryPL.accessibility.switch_language
      );
    });

    it('highlights current locale (PL)', () => {
      mockLocale = 'pl';
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      const plSpan = screen.getByText('PL');
      expect(plSpan).toHaveClass('text-foreground');
    });
  });

  describe('Path mapping - PL to EN', () => {
    beforeEach(() => {
      mockLocale = 'pl';
    });

    it('switches from PL homepage to EN homepage', async () => {
      const user = userEvent.setup();

      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);
      await user.click(screen.getByRole('button'));

      // The path mapping adds a trailing slash for homepage
      expect(mockReplace).toHaveBeenCalledWith('/en/');
    });
  });

  describe('Accessibility', () => {
    it('is keyboard accessible', async () => {
      const user = userEvent.setup();
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      await user.tab();
      expect(screen.getByRole('button')).toHaveFocus();

      await user.keyboard('{Enter}');
      expect(mockReplace).toHaveBeenCalled();
    });

    it('can be activated with Space key', async () => {
      const user = userEvent.setup();
      render(<LanguageSwitcher dictionary={mockDictionaryPL} />);

      await user.tab();
      await user.keyboard(' ');

      expect(mockReplace).toHaveBeenCalled();
    });
  });
});
