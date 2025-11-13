const nextConfig = {
  // Removed "output: export" to enable API routes on Vercel
  // Static export doesn't support serverless functions
  images: {
    unoptimized: true,
  },
  typescript: {
    // ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
