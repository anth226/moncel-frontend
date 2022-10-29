/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://afs-website-dev.netlify.app/',
    priority: 0.7,
    sitemapSize: 5000,
    generateRobotsTxt: true, // (optional)
    // ...other options
  }