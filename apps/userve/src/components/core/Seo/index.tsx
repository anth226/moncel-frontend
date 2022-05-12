import React from 'react';
import { Helmet } from 'react-helmet';

import { SeoStoryblok } from 'src/storyblok-component-types';
import { useLocation } from '@reach/router';
import { CourseData } from 'src/components/coursePages/types';

let title, desc, image;

const Seo = ({ storyblokData: { seo_description = '', og_image, lang = 'en-us', meta = [], seo_title, og_type }, coursePageContext }: { storyblokData: SeoStoryblok, coursePageContext?: CourseData }) => {

  if (coursePageContext) {
    title = seo_title.replace("$STATE", coursePageContext.state);
    desc = seo_description.replace("$STATE", coursePageContext.state);
  } else {
    title = seo_title || 'Userve';
    desc = seo_description;
  }

  if (og_image) {
    image = og_image.filename;
  } else {
    image = ''
  }

  const location = useLocation();

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title + ` | Userve`}
      defaultTitle={seo_title}
      link = {[
        { rel : `canonical`, href : location.href }
      ]}
      meta={[
        {
          name: `title`,
          content: title,
        },
        {
          name: `description`,
          content: desc,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:type`,
          content: og_type || `website`,
        },
        {
          property: `og:image`,
          content: image,
        },
        {
          property: `og:image:width`,
          content: `1200`,
        },
        {
          property: `og:image:height`,
          content: `675`,
        },
        {
          property: `og:url`,
          content: location.href,
        },
        {
          property: `og:description`,
          content: desc,
        },
        {
          property: `og:site_name`,
          content: `Userve`,
        },
        {
          property: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:site`,
          content: `@UserveInc`,
        },
        {
          property: `twitter:creator`,
          content: `@UserveInc`,
        },
        {
          property: `twitter:url`,
          content: location.href,
        },
        {
          property: `twitter:title`,
          content: title,
        },
        {
          property: `twitter:description`,
          content: desc,
        },
        {
          property: `twitter:image`,
          content: image,
        },
        {
          property: `twitter:image:alt`,
          content: title,
        },
        {
          property: `fb:app_id`,
          content: `100597588758651`,
        },
        {
          name: `author`,
          content: `Userve`,
        },
      ].concat(meta)}
    />
  );
};

export default Seo;
