import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CourseData } from 'src/components/coursePages/types';
import { CoursePageStoryblok, CoursePageInfoSectionStoryblok, BenefitsStoryblok } from "src/storyblok-component-types";
import HeroSection from './hero';
import CourseInfoSection from './courseInfo';
import BenefitsSection from './benefits';

const pageStyles = {
    color: "#232129",
    fontFamily: "Inter,sans-serif",
}

export default ({ data, pageContext }: PageProps<DataProps, CourseData>) => {
    const seoContent = data.seo.nodes[0];

    // Retrieve storyblok data by section
    const heroStories = data.hero?.nodes || [];
    const courseInfoStories = data.courseInfo?.nodes || [];
    const benefitsStories = data.benefits?.nodes || [];

    // Filter storyblok data by the course type for this page
    const pageStory = heroStories.filter(slug => slug.slug === pageContext.type)[0];
    const courseInfoStory = courseInfoStories.filter(slug => slug.slug === pageContext.type)[0];
    const benefitsStory = benefitsStories.filter(slug => slug.slug === pageContext.type)[0];

    // Parse content strings to json
    // Parsing empty strings will error; this is intentional as it indicates an error fetching data
    // TODO: try/catch is there to handle errors while course pages are still under construction in storyblok but should be removed once that data is populated
    let pageContent: CoursePageStoryblok, courseInfoContent: CoursePageInfoSectionStoryblok, benefitsContent: BenefitsStoryblok;
    try {
      pageContent = JSON.parse(pageStory?.content || "");
      courseInfoContent = JSON.parse(courseInfoStory?.content || "")
      benefitsContent = JSON.parse(benefitsStory?.content || "")
    }
    catch (e){
      console.error(`Error fetching data for page ${pageContext.url}`)
    }
    if(!pageContent || !courseInfoContent || !benefitsContent) return null;

    return <div>
        <Head seo={seoContent}/>
        <Layout>
            <main style={pageStyles}>
                <HeroSection content={pageContent} context={pageContext} />
                <CourseInfoSection {...courseInfoContent} />
                <BenefitsSection {...benefitsContent} />
            </main>
        </Layout>
    </div>

}


{/* const query = ``; // query default copy, then query copy for this url */}
export const pageQuery = graphql`
  query {
    hero:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/hero.*/"}}) {
      nodes {
        content
        slug
        full_slug
      }
    }
    courseInfo:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/course-info.*/"}}) {
      nodes {
        content
        slug
        full_slug
      }
    }
    benefits:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/benefits.*/"}}) {
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
