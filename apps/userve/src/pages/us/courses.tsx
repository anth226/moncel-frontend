import * as React from "react"
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { AboutUsSection } from 'src/components/sections/landing';
import { HeroSection, CoursesSection } from 'src/components/sections/courses'
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CoursePageStoryblok } from 'src/storyblok-component-types';

const pageStyles = {
  color: "#232129",
  padding: "96px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
  aboutUs="landing/about-us",
  coursePages="courses/course-pages"
}

export default ({ data }: PageProps<DataProps>) => {
  const landingSlugs = data.landing?.nodes || [];
  const courseSlugs = data.allStoryblokEntry?.nodes || [];
  const aboutUsSlug = landingSlugs.filter(slug => slug.full_slug === SLUGS.aboutUs).shift();
  const coursePageStories = courseSlugs.filter(slug => slug.full_slug.match(SLUGS.coursePages));

  // parsing "" into JSON will error out/fail builds.
  // this is intentional and indicates an error retrieving data from storyblok
  const aboutUsContent = JSON.parse(aboutUsSlug?.content || "");
  const coursePageContent: CoursePageStoryblok[] = coursePageStories.map(story => {
    return JSON.parse(story.content || "") as CoursePageStoryblok;
  })
  const seoContent = data.seo.nodes[0];

  return <div>
    <Head seo={seoContent} />
    <Layout>
      <main style={pageStyles}>
        <HeroSection />
        <CoursesSection />
        <AboutUsSection {...aboutUsContent} />
      </main>
    </Layout>
  </div>;
}

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^courses.*/"}}) {
      nodes {
        content
        slug
        full_slug
      }
    }
    landing:allStoryblokEntry(filter: {full_slug: {regex: "/^landing.*/"}}) {
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
