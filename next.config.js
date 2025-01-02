/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    turbo: {
      rules: {
        // Specify custom rules for Turbopack
        '*.md': ['raw-loader'],
        '*.mdx': ['raw-loader'],
      },
    },
  },
  // Only keep necessary config
  reactStrictMode: true,
};

module.exports = nextConfig;
