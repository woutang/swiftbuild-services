import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import { ServicesPreview } from './services-preview';
import { mockDictionaryPL } from '@/test/mocks/dictionary';
import type { Dictionary } from '@/types';

describe('ServicesPreview', () => {
  describe('Rendering', () => {
    it('renders section title', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.services.title)).toBeInTheDocument();
    });

    it('renders section subtitle', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.services.subtitle)).toBeInTheDocument();
    });

    it('renders all three service cards', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.services.website.title)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.seo.title)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.ads.title)).toBeInTheDocument();
    });
  });

  describe('Service cards content', () => {
    it('renders service descriptions', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.services.website.description)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.seo.description)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.ads.description)).toBeInTheDocument();
    });

    it('renders service prices', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(screen.getByText(mockDictionaryPL.services.website.price)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.seo.price)).toBeInTheDocument();
      expect(screen.getByText(mockDictionaryPL.services.ads.price)).toBeInTheDocument();
    });

    it('renders first 3 features for each service', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      // Website features (first 3)
      mockDictionaryPL.services.website.features.slice(0, 3).forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });

      // SEO features (first 3)
      mockDictionaryPL.services.seo.features.slice(0, 3).forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });

      // Ads features (first 3)
      mockDictionaryPL.services.ads.features.slice(0, 3).forEach((feature) => {
        expect(screen.getByText(feature)).toBeInTheDocument();
      });
    });

    it('renders CTA text on all cards', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const ctaElements = screen.getAllByText(mockDictionaryPL.services.cta);
      expect(ctaElements.length).toBe(3);
    });
  });

  describe('Service card links', () => {
    it('all service cards link to services page', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const links = screen.getAllByRole('link');
      // All 3 service cards should link to /uslugi (services page)
      const serviceLinks = links.filter((link) =>
        link.getAttribute('href')?.includes('/uslugi')
      );
      expect(serviceLinks.length).toBe(3);
    });

    it('service cards include hash for specific service', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const links = screen.getAllByRole('link');
      // Check that links have hash identifiers
      const linksWithHash = links.filter((link) =>
        link.getAttribute('href')?.includes('#')
      );
      expect(linksWithHash.length).toBeGreaterThanOrEqual(3);
    });
  });

  describe('Edge cases', () => {
    it('handles missing features gracefully with null check', () => {
      // Create a dictionary with missing features
      const dictionaryWithMissingFeatures = {
        ...mockDictionaryPL,
        services: {
          ...mockDictionaryPL.services,
          website: {
            ...mockDictionaryPL.services.website,
            features: undefined as unknown as string[],
          },
        },
      } as Dictionary;

      // Should not throw an error
      expect(() => {
        render(<ServicesPreview dictionary={dictionaryWithMissingFeatures} />);
      }).not.toThrow();
    });

    it('handles empty features array', () => {
      const dictionaryWithEmptyFeatures = {
        ...mockDictionaryPL,
        services: {
          ...mockDictionaryPL.services,
          website: {
            ...mockDictionaryPL.services.website,
            features: [],
          },
        },
      };

      expect(() => {
        render(<ServicesPreview dictionary={dictionaryWithEmptyFeatures} />);
      }).not.toThrow();
    });
  });

  describe('Accessibility', () => {
    it('renders as a section element', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const sections = document.querySelectorAll('section');
      expect(sections.length).toBeGreaterThan(0);
    });

    it('section title uses heading element', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const heading = screen.getByRole('heading', { name: mockDictionaryPL.services.title });
      expect(heading).toBeInTheDocument();
    });

    it('service titles use heading elements', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      expect(
        screen.getByRole('heading', { name: mockDictionaryPL.services.website.title })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: mockDictionaryPL.services.seo.title })
      ).toBeInTheDocument();
      expect(
        screen.getByRole('heading', { name: mockDictionaryPL.services.ads.title })
      ).toBeInTheDocument();
    });

    it('features are rendered as list items', () => {
      render(<ServicesPreview dictionary={mockDictionaryPL} />);

      const lists = screen.getAllByRole('list');
      expect(lists.length).toBeGreaterThanOrEqual(3);

      const listItems = screen.getAllByRole('listitem');
      expect(listItems.length).toBeGreaterThanOrEqual(9); // 3 features x 3 services
    });
  });
});
