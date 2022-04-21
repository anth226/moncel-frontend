import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { HeroSection } from '../sections';

const pageStyles = {
    color: "#232129",
    padding: "96px 0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

const CoursePageTemplate = ({ data, pageContext }: PageProps<DataProps>) => {
    const stories = data.allStoryblokEntry.nodes;
    const seoContent = data.seo.nodes[0];
    const pageStory = stories.filter(slug => slug.slug === pageContext.type).shift();
    return <div>
    <Head seo={seoContent}/>
    <Layout>
        <main style={pageStyles}>
            <HeroSection />
        </main>
    </Layout>
    </div>

}


{/* const query = ``; // query default copy, then query copy for this url */}
export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages.*/"}}) {
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
