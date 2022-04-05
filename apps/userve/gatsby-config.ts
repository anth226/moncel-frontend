import type { GatsbyConfig } from "gatsby";
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: `new`,
    siteUrl: `https://www.yourdomain.tld`
  },
  plugins: ["gatsby-plugin-sass", "gatsby-plugin-postcss", {
    resolve: 'gatsby-plugin-google-analytics',
    options: {
      "trackingId": "GOOGLE_ANALYTICS_TRACKING_ID"
    }
  }, "gatsby-plugin-image", "gatsby-plugin-react-head", "gatsby-plugin-sitemap", "gatsby-plugin-mdx", "gatsby-plugin-sharp", "gatsby-transformer-sharp", {
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
  }]
};

export default config;
