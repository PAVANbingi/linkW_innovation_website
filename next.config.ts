import { NextConfig } from 'next';
import sitemapConfig from './next-sitemap.config'; // Import your sitemap configuration

const nextConfig: NextConfig = {
  // Your other Next.js configurations here
  // Example:
  reactStrictMode: true,
  // etc.
};

// Merge the sitemap configuration with your next config
export default {
  ...nextConfig,
  ...sitemapConfig,
};
