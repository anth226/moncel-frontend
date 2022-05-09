import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { LegalPageStoryblok } from "src/storyblok-component-types";
import { TextSection } from 'src/components/legal';

const pageStyles = {
    fontFamily: "Inter,sans-serif",
}

interface PageContext {
  content: LegalPageStoryblok,
};

export default ({ data, pageContext }: PageProps<DataProps, PageContext>) => {
    const seoContent = data.seo.nodes[0];

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
      }
    }
}`;
