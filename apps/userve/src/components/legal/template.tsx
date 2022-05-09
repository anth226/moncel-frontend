import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { LegalData } from 'src/components/legal/types';
import { TextStoryblok } from "src/storyblok-component-types";
import { TextSection } from 'src/components/legal';

const pageStyles = {
    fontFamily: "Inter,sans-serif",
}

export default ({ data, pageContext }: PageProps<DataProps, LegalData>) => {
    const seoContent = data.seo.nodes[0];

    // Retrieve storyblok data by section
    const legalStories = data.content?.nodes || [];

    // Filter storyblok data by the course type for this page
    const legalStory = legalStories.filter(slug => slug.slug === pageContext.type)[0];

    // Parse content strings to json
    // Parsing empty strings will error; this is intentional as it indicates an error fetching data
    // TODO: try/catch is there to handle errors while course pages are still under construction in storyblok but should be removed once that data is populated
    let legalContent: TextStoryblok;
    try {
      legalContent = JSON.parse(legalStory?.content || "")
    }
    catch (e){
      console.error(`Error fetching data for page ${pageContext.url}`)
    }
    if(!legalContent) return null;

    return <div>
        <Head seo={seoContent}/>
        <Layout>
            <main style={pageStyles}>    
              <TextSection {...legalContent} />
            </main>
        </Layout>
    </div>

}


{/* const query = ``; // query default copy, then query copy for this url */}
export const pageQuery = graphql`
  query {
    content:allStoryblokEntry(filter: {full_slug: {regex: "/^legal/content.*/"}}) {
      nodes {
        content
        slug
        full_slug
      }
    }
    seo:allStoryblokEntry(filter: {full_slug: {eq: "seo"}}) {
      nodes {
      full_slug
      }
    }
}`;
