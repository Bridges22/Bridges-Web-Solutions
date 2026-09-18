const nextConfig = {
  // Removed "output: export" to enable API routes on Vercel
  // Static export doesn't support serverless functions
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920],
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
