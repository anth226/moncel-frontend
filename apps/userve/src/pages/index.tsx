import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Card as CourseCard } from 'src/components/courses';
import StatePicker from 'src/components/core/StatePicker';

import { BenefitsSection, BusinessSection, LogosSection, BlogsSection, TestimonialsSection } from 'src/components/sections/landing';
import { SectionStoryblok, FeaturedCoursesStoryblok, BenefitsStoryblok, SeoStoryblok } from 'src/storyblok-component-types';

// styles
const pageStyles = {
  color: "#232129",
  padding: "96px 0",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

interface Slug {
  slug: string;
  full_slug: string;
  content: string
}
interface DataProps {
  allStoryblokEntry: {
    nodes: Slug[];
  }
  seo: {
    nodes: SeoStoryblok[],
  }
}

enum SLUGS {
  hero= "hero",
  courses="featured-courses",
  logos="logos",
  benefits="benefits",
  blog="featured-blog",
  business="business",
  testimonials="testimonials",
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

  const heroContent: SectionStoryblok = JSON.parse(heroSlug?.content || "");
  const coursesContent: FeaturedCoursesStoryblok = JSON.parse(coursesSlug?.content || "");
  const logosContent = JSON.parse(logosSlug?.content || "");
  const benefitsContent: BenefitsStoryblok = JSON.parse(benefitsSlug?.content || "");
  const blogsContent = JSON.parse(blogsSlug?.content || "");
  const businessContent = JSON.parse(businessSlug?.content || "");
  const testimonialsContent = JSON.parse(testimonialsSlug?.content || "");

  return (
    <div>
      <Head seo={seoContent}/>
      <Layout>
        <main style={pageStyles}>
          {/* Hero */}
          <Section className="grid grid-cols-2 grid-rows-3 items-center">
            <h1 className="col-start-1 col-span-1 row-start-1 text-5xl font-bold text-slate-700">Get your certificate in hours not days.</h1>
            <p className="col-start-1 col-span-1 row-start-2 text-lg text-slate-400">Flexible courses for alcohol servers and food handlers, with no prior experience required.</p>
            <div className="col-start-1 col-span-1 row-start-3">
              <StatePicker />
            </div>
            <div className="col-start-2 row-span-3">
              <StaticImage src="../images/usx_hero_home.png" alt="usx logo" />
            </div>
          </Section>

          {/* Featured Courses */}
          <SectionFullWidth className="bg-[url('../images/usx-home-courses.jpg')]">
            <Section className="grid grid-cols-3 grid-rows-2 gap-10 items-center">
              <h1 className="col-start-1 row-start-1 text-5xl font-bold text-white">{heroContent.Header || ""}</h1>
              <p className="col-start-1 row-start-2 text-white">{heroContent.Subheader || ""}</p>
              { coursesContent.course_cards[0] && <CourseCard className="col-start-2 col-span-1 row-start-1  row-span-3" {...coursesContent.course_cards[0]} imageSrc={coursesContent.course_cards[0].image?.filename} /> }
              { coursesContent.course_cards[0] && <CourseCard className="col-start-3 col-span-1 row-start-1 row-span-3" {...coursesContent.course_cards[1]} imageSrc={coursesContent.course_cards[1].image?.filename} /> }
            </Section>
          </SectionFullWidth>

          {/* Benefits */}
          <BenefitsSection {...benefitsContent} />

          {/* Business */}
          <BusinessSection {...businessContent} />

          {/* Logos */}
          <LogosSection {...logosContent} />

          {/* Testimonials */}
          <TestimonialsSection {...testimonialsContent}/>

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
