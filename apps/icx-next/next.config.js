/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["moncel-one-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com', '167.99.181.174']
  },
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
  webpack: (config) => {
    config.resolve.fallback = { fs: false };

    return config;
  },
});
