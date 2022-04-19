import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { HeroSection } from 'src/components/sections/about';

const pageStyles = {
    color: "#232129",
    padding: "96px 0",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
    hero='about/hero',
}

export default ({ data }: PageProps<DataProps>) => {
    const slugs = data.allStoryblokEntry.nodes;
    const heroSlug = slugs.filter(slug => slug.full_slug === SLUGS.hero).shift();

    // parsing "" into JSON will error out/fail builds.
    // this is intentional and indicates an error retrieving data from storyblok
    const heroContent: HeroStoryblok = JSON.parse(heroSlug?.content || "");
    const seoContent = data.seo.nodes[0];
    debugger;

    return <div>
    <Head seo={seoContent} />
    <Layout>
      <main style={pageStyles}>
        <HeroSection {...heroContent} />
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
