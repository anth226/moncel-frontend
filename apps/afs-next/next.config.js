/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["moncel-one-sdk"]);
const withMDX = require('@next/mdx')();

const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ['localhost', '167.99.181.174']
  },
};

module.exports = withMDX(withTM(nextConfig));
