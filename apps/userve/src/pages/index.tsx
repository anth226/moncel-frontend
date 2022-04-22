import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Card as CourseCard } from 'src/components/coursePages';
import StatePicker from 'src/components/core/StatePicker';

import { BenefitsSection, BusinessSection, LogosSection, BlogsSection, TestimonialsSection, AboutUsSection } from 'src/components/sections/landing';
import { SectionStoryblok, FeaturedCoursesStoryblok, BenefitsStoryblok, SeoStoryblok } from 'src/storyblok-component-types';
import { DataProps } from 'src/lib/storyblokSourceTypes';

import { Header1, Header2, Text } from 'src/components/shared/typography';

// styles
const pageStyles = {
  color: "#232129",
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
}

// markup
const IndexPage = ({ data }: PageProps<DataProps>) => {
  const landingSlugs = data.allStoryblokEntry.nodes;
  const seoContent = data.seo.nodes[0];
  const heroSlug = landingSlugs.filter(slug => slug.slug === SLUGS.hero).shift();
  const coursesSlug = landingSlugs.filter(slug => slug.slug === SLUGS.courses).shift();
  const logosSlug = landingSlugs.filter(slug => slug.slug === SLUGS.logos).shift();
  const benefitsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.benefits).shift();
  const businessSlug = landingSlugs.filter(slug => slug.slug === SLUGS.business).shift();
  const blogsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.blog).shift();
  const testimonialsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.testimonials).shift();
  const aboutUsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.aboutUs).shift();

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

  return (
    <div>
      <Head seo={seoContent} />
      <Layout>
        <main style={pageStyles}>
          {/* Hero */}
          <Section className="grid grid-cols-2 grid-rows-1 items-center">
            <div className="col-start-1">
              <Header1>Get your certificate in hours not days.</Header1>
              <Text>Flexible courses for alcohol servers and food handlers, with no prior experience required.</Text>
              <StatePicker />
            </div>
            <div className="col-start-2">
              <StaticImage src="../images/usx_hero_home.png" alt="Get your certificate in hours not days" className="ml-12" />
            </div>
          </Section>

          {/* Featured Courses */}
          <SectionFullWidth className="bg-[url('../images/usx-home-courses.jpg')] bg-cover bg-center">
            <Section className="grid grid-cols-3 gap-10 items-start -mb-28">
              <div className="col-start-1">
                <Header2><span className="text-white">{heroContent.Header || ""}</span></Header2>
                <Text><span className="text-white">{heroContent.Subheader || ""}</span></Text>
              </div>
              {coursesContent.course_cards[0] && <CourseCard className="col-start-2" {...coursesContent.course_cards[0]} imageSrc={coursesContent.course_cards[0].image?.filename} />}
              {coursesContent.course_cards[0] && <CourseCard className="col-start-3" {...coursesContent.course_cards[1]} imageSrc={coursesContent.course_cards[1].image?.filename} />}
            </Section>
          </SectionFullWidth>

          {/* Benefits */}
          <BenefitsSection {...benefitsContent} className="pt-16" />

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
      }
    }
    seo:allStoryblokEntry(filter: {full_slug: {eq: "seo"}}) {
      nodes {
      full_slug
      }
    }
}`;
