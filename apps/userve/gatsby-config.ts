import type { GatsbyConfig } from "gatsby";
import path from 'path';

require("dotenv").config({
  path: `.env`,
})

const config: GatsbyConfig = {
  siteMetadata: {
    title: `Alcohol Server & Food Safety Training Online`,
    siteUrl: `https://userve.com`
  },
  trailingSlash: "never",
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "GOOGLE_ANALYTICS_TRACKING_ID"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-head", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-transformer-sharp", "gatsby-transformer-json", 
  {
    resolve: `gatsby-plugin-sharp`,
    options: {
      checkSupportedExtensions: false,
      defaults: {
        placeholder: `blurred`,
        formats: [`auto`, `webp`]
      }
    }
  },
  {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "images",
      "path": "./src/images/"
    },
    __key: "images"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "pages",
      "path": "./src/pages/"
    },
    __key: "pages"
  }, {
      resolve: 'gatsby-source-filesystem',
      options: {
        "name": "courses",
        "path": "./src/data/courses"
      },
      __key: "courses"
  }, {
    resolve: 'gatsby-source-filesystem',
    options: {
      "name": "courseTypes",
      "path": "./src/data/courseTypes"
    },
    __key: "courseTypes"
  }, {
    resolve: 'gatsby-plugin-sharp',
    options: {
      defaults: {
        formats: [`auto`, `webp`],
        placeholder: `none`,
        breakpoints: [750, 1080, 1366, 1920],
      }
    },
  }, {
    resolve: 'gatsby-plugin-root-import',
    options: {
      resolveModules: [path.join(__dirname)],
      public: [path.join(__dirname, "public")]
    }
  },
  {
    resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [],
    },
  },
  {
    resolve: 'gatsby-source-storyblok',
    options: {
      accessToken: `${process.env.USERVE_STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN}`,
      version: 'published',
      localAssets: true, // Optional parameter to download the images to use with Gatsby Image Plugin
    }
  },
  {
    resolve: 'gatsby-plugin-robots-txt',
    options: {
      host: 'https://www.userve.com',
      sitemap: 'https://www.userve.com/sitemap/sitemap-index.xml',
      policy: [{userAgent: '*', allow: '/'}]
    }
  },
  {
    resolve: 'gatsby-plugin-manifest',
    options: { icon: 'src/images/favicon.png' }
  }]
};

export default config;