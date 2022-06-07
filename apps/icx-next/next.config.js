/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["moncel-one-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
  env: {
    STRAPI_URL: process.env.STRAPI_URL,
  },
  images: {
    domains: ['a.storyblok.com', 'localhost', 'orca-app-834e3.ondigitalocean.app']
  }
});
