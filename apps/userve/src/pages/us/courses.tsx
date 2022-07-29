import * as React from "react"
import { graphql, PageProps } from "gatsby";
import loadable from '@loadable/component'

import Layout from 'src/components/layout';
import Head from 'src/components/head';

import { HeroSection } from 'src/components/sections/courses';
import NotifyFormSection from 'src/components/coursePages/notify';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CoursePageStoryblok, AboutUsStoryblok } from 'src/storyblok-component-types';

// defer loading these components
const AboutUsSection = loadable(() => import('src/components/sections/landing/about-us'), { fallback: undefined });
const CoursesSection = loadable(() => import('src/components/sections/courses/courses'), { fallback: undefined });

// styles
const pageStyles = {
    fontFamily: "Inter,sans-serif",
}

enum SLUGS {
    hero='hero',
    cta = "cta",
    coursePages="courses/course-pages",
    seo = "seo"
}

// markup
const CoursePage = ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const courseSlugs = data.allStoryblokEntry?.nodes || [];
    const heroSlug = landingSlugs.filter(slug => slug.slug === SLUGS.hero)[0];
    const ctaSlug = landingSlugs.filter(slug => slug.slug === SLUGS.cta)[0];
    const seoSlug = landingSlugs.filter(slug => slug.slug === SLUGS.seo)[0];
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
    const seoContent = JSON.parse(seoSlug?.content || "");

    return (
        <div>
            <Head seo={seoContent} />
            <Layout>
                <main style={pageStyles}>
                    {/* Hero */}
                    <HeroSection {...heroContent} story={heroSlug}/>

                    <CoursesSection coursePageContent={coursePageContent} />

                    <AboutUsSection {...ctaContent} story={ctaSlug} />
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
