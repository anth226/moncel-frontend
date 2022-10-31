/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["moncel-one-sdk"]);
const withMDX = require('@next/mdx')();

const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ['localhost', '167.99.181.174', 'blog.foodsafety.com.au'],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { isServer }) => {
    if (isServer) {
      require("moncel-next-config/scripts/sitemap-generator");
    }
    return config;
  },
};

module.exports = withMDX(withTM(nextConfig));
