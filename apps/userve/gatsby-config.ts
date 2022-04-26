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
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "GOOGLE_ANALYTICS_TRACKING_ID"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-head", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", "gatsby-transformer-json", {
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
      },
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
  }]
};

export default config;
