import type { MetadataRoute } from 'next';
import { getCaseStudySlugs } from '@/data/case-studies';

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL || 'https://swiftbuild.services';

export default function sitemap(): MetadataRoute.Sitemap {
  const caseSlugs = getCaseStudySlugs();

  // Static pages for both locales
  const staticPages = [
    '',
    '/uslugi',
    '/realizacje',
    '/o-nas',
    '/kontakt',
    '/polityka-prywatnosci',
  ];

  const staticPagesSitemap = staticPages.flatMap((page) => [
    {
      url: `${baseUrl}${page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    },
    {
      url: `${baseUrl}/en${page === '' ? '' : page === '/uslugi' ? '/services' : page === '/realizacje' ? '/portfolio' : page === '/o-nas' ? '/about' : page === '/kontakt' ? '/contact' : page === '/polityka-prywatnosci' ? '/privacy-policy' : page}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: page === '' ? 1 : 0.8,
    },
  ]);

  // Dynamic case study pages
  const caseStudiesSitemap = caseSlugs.flatMap((slug) => [
    {
      url: `${baseUrl}/realizacje/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
    {
      url: `${baseUrl}/en/portfolio/${slug}`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.7,
    },
  ]);

  return [...staticPagesSitemap, ...caseStudiesSitemap];
}
