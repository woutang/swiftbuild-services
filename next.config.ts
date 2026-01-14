import type { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const withNextIntl = createNextIntlPlugin('./src/i18n/request.ts');

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'swiftbuild.services',
      },
      {
        protocol: 'https',
        hostname: '*.swiftbuild.services',
      },
    ],
  },
};

export default withNextIntl(nextConfig);
