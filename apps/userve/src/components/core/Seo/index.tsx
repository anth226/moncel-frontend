
import React from 'react';
import { Helmet } from 'react-helmet';

import { SeoStoryblok } from 'src/storyblok-component-types';

const Seo = ({
  seo_description = '',
  og_image = '',
  lang = 'en',
  meta = [],
  seo_title,
  og_site_name,
  og_url,
  og_type,
  twitter_title,
  twitter_site,
  twitter_card,
  og_description,
  twitter_description,
  title = '',
  url,
}: SeoStoryblok) => {
  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={seo_title}
      defaultTitle={title}
      meta={[
        {
          name: `keywords`,
          content: 'food handler certification course, canada, alberta, ontario, bc, manitoba',
        },
        {
          name: `title`,
          content: seo_title,
        },
        {
          name: `description`,
          content: og_description,
        },
        {
          property: `og:site_name`,
          content: og_site_name || 'Charm',
        },
        {
          property: `og:url`,
          content: og_url || url,
        },
        {
          property: `og:title`,
          content: seo_title,
        },
        {
          property: `og:description`,
          content: og_description || seo_description,
        },
        {
          property: `og:type`,
          content: og_type || `website`,
        },
        {
          property: `og:image`,
          content: og_image,
        },
        {
          name: `twitter:site`,
          content: twitter_site,
        },
        {
          property: `twitter:card`,
          content: twitter_card || `summary_large_image`,
        },
        {
          property: `twitter:url`,
          content: url,
        },
        {
          property: `twitter:title`,
          content: twitter_title || seo_title,
        },
        {
          property: `twitter:description`,
          content: twitter_description || og_description,
        },
        {
          property: `twitter:image`,
          content: og_image,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
