import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section } from 'src/components/core/Section';

import { HeroSection, CoursesSection } from 'src/components/sections/courses';
import { AboutUsSection } from 'src/components/sections/landing';
import NotifyFormSection from 'src/components/coursePages/notify';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CoursePageStoryblok, AboutUsStoryblok } from 'src/storyblok-component-types';

// styles
const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
    hero='hero',
    cta = "cta",
    coursePages="courses/course-pages"
}

// markup
const CoursePage = ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const courseSlugs = data.allStoryblokEntry?.nodes || [];
    const heroSlug = landingSlugs.filter(slug => slug.slug === SLUGS.hero)[0];
    const ctaSlug = landingSlugs.filter(slug => slug.slug === SLUGS.cta)[0];
    const coursePageStories = courseSlugs.filter(slug => slug.full_slug.match(SLUGS.coursePages));

    const heroContent = JSON.parse(heroSlug?.content || "");
    const ctaContent: AboutUsStoryblok = JSON.parse(ctaSlug?.content || "");
    const coursePageContent: CoursePageStoryblok[] = coursePageStories.reduce((coursePageStories: CoursePageStoryblok[], slug) => {
      const content = JSON.parse(slug.content || "") as CoursePageStoryblok;
      if(content.component === "CoursePage") {
        coursePageStories.push(content);
      }
      return coursePageStories;
    }, []);
    const seoContent = data.seo.nodes[0];

    return (
        <div>
            <Head seo={seoContent} />
            <Layout>
                <main style={pageStyles}>
                    {/* Hero */}
                    <HeroSection {...heroContent} />

                    <CoursesSection coursePageContent={coursePageContent} />

                    <AboutUsSection {...ctaContent} />
                </main>
            </Layout>
            <NotifyFormSection />
        </div>
    )
}

export default CoursePage;

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^courses.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    seo:allStoryblokEntry(filter: {full_slug: {eq: "seo"}}) {
      nodes {
      full_slug
      }
    }
}`;
