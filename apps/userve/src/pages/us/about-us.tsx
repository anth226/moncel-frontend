import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { CardsStoryblok, HeroStoryblok } from 'src/storyblok-component-types';
import { HeroSection, Hero2Section, Hero3Section } from 'src/components/sections/about';

const pageStyles = {
    color: "#232129",
    padding: "96px 0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
    hero='about/hero',
    hero2='about/hero2',
    hero3='about/hero3',
    benefits2='about/benefits2',
    benefits3='about/benefits3'
}

export default ({ data }: PageProps<DataProps>) => {
    const slugs = data.allStoryblokEntry.nodes;
    const heroSlug = slugs.filter(slug => slug.full_slug === SLUGS.hero).shift();
    const hero2Slug = slugs.filter(slug => slug.full_slug === SLUGS.hero2).shift();
    const hero3Slug = slugs.filter(slug => slug.full_slug === SLUGS.hero3).shift();
    const benefits2Slug = slugs.filter(slug => slug.full_slug === SLUGS.benefits2).shift();
    const benefits3Slug = slugs.filter(slug => slug.full_slug === SLUGS.benefits3).shift();

    // parsing "" into JSON will error out/fail builds.
    // this is intentional and indicates an error retrieving data from storyblok
    const heroContent: HeroStoryblok = JSON.parse(heroSlug?.content || "");
    const hero2Content: HeroStoryblok = JSON.parse(hero2Slug?.content || "");
    const hero3Content: HeroStoryblok = JSON.parse(hero3Slug?.content || "");
    const benefits2Content: CardsStoryblok = JSON.parse(benefits2Slug?.content || "");
    const benefits3Content: CardsStoryblok = JSON.parse(benefits3Slug?.content || "");
    const seoContent = data.seo.nodes[0];

    return <div>
    <Head seo={seoContent} />
    <Layout>
      <main style={pageStyles}>
        <HeroSection {...heroContent} />
        <Hero2Section hero={hero2Content} benefits={benefits2Content} />
        <Hero3Section hero={hero3Content} benefits={benefits3Content} />
        {/* <CoursesSection />
        <AboutUsSection {...aboutUsContent} /> */}
      </main>
    </Layout>
  </div>;
}

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^about.*/"}}) {
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
