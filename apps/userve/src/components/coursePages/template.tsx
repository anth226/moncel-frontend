import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CourseData } from 'src/components/coursePages/types';
import { CoursePageStoryblok } from "src/storyblok-component-types";
import Content from './content';

const pageStyles = {
    color: "#232129",
    padding: "96px 0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

export default ({ data, pageContext }: PageProps<DataProps, CourseData>) => {
    const stories = data.allStoryblokEntry.nodes;
    const seoContent = data.seo.nodes[0];
    const pageStory = stories.filter(slug => slug.slug === pageContext.type).shift();
    const pageContent: CoursePageStoryblok = JSON.parse(pageStory?.content || "");
    return <div>
        <Head seo={seoContent}/>
        <Layout>
            <main style={pageStyles}>
                <Content content={pageContent} context={pageContext} />

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
