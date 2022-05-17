import * as React from "react"
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Card as CourseCard } from 'src/components/coursePages';
import StatePicker from 'src/components/core/StatePicker';

import { BenefitsSection, BusinessSection, LogosSection, BlogsSection, TestimonialsSection, AboutUsSection, HeroSection } from 'src/components/sections/landing';
import { SectionStoryblok, FeaturedCoursesStoryblok, BenefitsStoryblok, SeoStoryblok } from 'src/storyblok-component-types';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib';

import { Header1, Header2, Text } from 'src/components/core/typography';

// styles
const pageStyles = {
  fontFamily: "Inter,sans-serif",
}

enum SLUGS {
  hero = "hero",
  courses = "featured-courses",
  logos = "logos",
  benefits = "benefits",
  blog = "featured-blog",
  business = "business",
  testimonials = "testimonials",
  aboutUs = "about-us",
  seo = "seo",
}

// markup
const IndexPage = ({ data }: PageProps<DataProps>) => {
  const landingSlugs = data.allStoryblokEntry.nodes;
  const seoSlug = landingSlugs.filter(slug => slug.slug === SLUGS.seo)[0];
  const heroSlug = landingSlugs.filter(slug => slug.slug === SLUGS.hero)[0];
  const coursesSlug = landingSlugs.filter(slug => slug.slug === SLUGS.courses)[0];
  const logosSlug = landingSlugs.filter(slug => slug.slug === SLUGS.logos)[0];
  const benefitsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.benefits)[0];
  const businessSlug = landingSlugs.filter(slug => slug.slug === SLUGS.business)[0];
  const blogsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.blog)[0];
  const testimonialsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.testimonials)[0];
  const aboutUsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.aboutUs)[0];

  // parsing "" into JSON will error out/fail builds.
  // this is intentional and indicates an error retrieving data from storyblok
  const heroContent: SectionStoryblok = JSON.parse(heroSlug?.content || "");
  const coursesContent: FeaturedCoursesStoryblok = JSON.parse(coursesSlug?.content || "");
  const logosContent = JSON.parse(logosSlug?.content || "");
  const benefitsContent: BenefitsStoryblok = JSON.parse(benefitsSlug?.content || "");
  const blogsContent = JSON.parse(blogsSlug?.content || "");
  const businessContent = JSON.parse(businessSlug?.content || "");
  const testimonialsContent = JSON.parse(testimonialsSlug?.content || "");
  const aboutUsContent = JSON.parse(aboutUsSlug?.content || "");
  const seoContent = JSON.parse(seoSlug?.content || "");

  return (
    <div>
      <Head seo={seoContent} />
      <Layout>
        <main style={pageStyles}>
          {/* Hero */}
          <HeroSection content={heroContent} slug={heroSlug} />

          {/* Featured Courses */}
          <SectionFullWidth className="bg-[url('../images/usx-home-courses.jpg')] bg-cover bg-center">
            <Section className="flex flex-col md:grid md:grid-cols-3 gap-10 items-stretch -mb-36">
              <div className="col-start-1">
                <Header2><span className="text-white">{coursesContent.title || ""}</span></Header2>
                <Text><span className="text-white">{coursesContent.description || ""}</span></Text>
              </div>
              {coursesContent.course_cards[0] && <CourseCard className="col-start-2" {...coursesContent.course_cards[0]} storyblokDefaultImg={coursesContent.course_cards[0].image?.filename} />}
              {coursesContent.course_cards[0] && <CourseCard className="col-start-3" {...coursesContent.course_cards[1]} storyblokDefaultImg={coursesContent.course_cards[1].image?.filename} />}
            </Section>
          </SectionFullWidth>

          {/* Benefits */}
          <BenefitsSection {...benefitsContent} className="pt-28 md:pt-16 bg-gradient-to-b from-hawkes to-white" />

          {/* Business */}
          <BusinessSection {...businessContent} />

          {/* Logos */}
          <LogosSection {...logosContent} />

          {/* Testimonials */}
          <TestimonialsSection {...testimonialsContent} />

          {/* About us */}
          <AboutUsSection {...aboutUsContent} />

          {/* Blog */}
          <BlogsSection {...blogsContent} />

        </main>
      </Layout>
    </div>
  )
}

export default IndexPage;

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^landing.*/"}}) {
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
        slug
        content
      }
    }
}`;
