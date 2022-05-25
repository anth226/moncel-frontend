import React, { useEffect } from 'react';
import { navigate } from '@reach/router';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { SeoStoryblok } from 'src/storyblok-component-types';

enum SLUGS {
    seo = "seo",
};

export default ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const seoSlug = landingSlugs.filter(slug => slug.slug === SLUGS.seo)[0];
    const seoContent: SeoStoryblok = JSON.parse(seoSlug?.content || "");
    useEffect(() => {
        navigate('/us', { replace: true });
    });
    return <Head seo={seoContent} />;
};

export const pageQuery = graphql`
  query {
    seo:allStoryblokEntry(filter: {full_slug: {eq: "seo"}}) {
      nodes {
        full_slug
        slug
        content
      }
    }
}`;