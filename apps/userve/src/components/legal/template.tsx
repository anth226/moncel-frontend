import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { LegalPageStoryblok, SeoStoryblok } from "src/storyblok-component-types";
import { TextSection } from 'src/components/legal';

const pageStyles = {
     fontFamily: "Inter,sans-serif",
}

export default ({ pageContext }: PageProps<DataProps, LegalPageStoryblok, SeoStoryblok>) => {
 
  let seoContent; 

  if (pageContext.content.SEO) {
    seoContent = pageContext.content.SEO[0] || '';
  } else {
    seoContent = '';
  }

  return <div>
      <Head seo={seoContent}/>
      <Layout>
          <main style={pageStyles}>    
            <TextSection {...pageContext.content} />
          </main>
      </Layout>
  </div>

}

{/* const query = ``; // query default copy, then query copy for this url */}
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
