/** @type {import('next').NextConfig} */
const withTM = require("next-transpile-modules")(["moncel-one-sdk"]);

module.exports = withTM({
  reactStrictMode: true,
  images: {
    domains: ['a.storyblok.com']
  },
  env: {
    BASE_URL: 'https://www.instacert.ca'
  }
});
