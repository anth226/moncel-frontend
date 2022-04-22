import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { BusinessStoryblok, HeroStoryblok, AboutUsStoryblok, TwoColStoryblok, BenefitsStoryblok } from 'src/storyblok-component-types';
import { HeroSection } from 'src/components/sections/about';
import { BusinessSection, AboutUsSection, BenefitsSection } from 'src/components/sections/landing';
import { TwoColSection } from 'src/components/shared';

const pageStyles = {
    color: "#232129",
}

enum SLUGS {
    hero='about/hero',
    statistics="about/statistics",
    cta = "about/cta",
    heart = "about/heart",
    personalized = "about/personalized",
    work = "about/work"
}

export default ({ data }: PageProps<DataProps>) => {
    const slugs = data.allStoryblokEntry.nodes;
    const heroSlug = slugs.filter(slug => slug.full_slug === SLUGS.hero).shift();
    const statisticsSlug = slugs.filter(slug => slug.full_slug === SLUGS.statistics).shift();
    const ctaSlug = slugs.filter(slug => slug.full_slug === SLUGS.cta).shift();
    const heartSlug = slugs.filter(slug => slug.full_slug === SLUGS.heart).shift();
    const personalizedSlug = slugs.filter(slug => slug.full_slug === SLUGS.personalized).shift();
    const workSlug = slugs.filter(slug => slug.full_slug === SLUGS.work).shift();

    // parsing "" into JSON will error out/fail builds.
    // this is intentional and indicates an error retrieving data from storyblok
    const heroContent: HeroStoryblok = JSON.parse(heroSlug?.content || "");
    const statisticsContent: BusinessStoryblok = JSON.parse(statisticsSlug?.content || "");
    const ctaContent: AboutUsStoryblok = JSON.parse(ctaSlug?.content || "");
    const heartContent: TwoColStoryblok = JSON.parse(heartSlug?.content || "");
    const personalizedContent: TwoColStoryblok = JSON.parse(personalizedSlug?.content || "");
    const workContent: BenefitsStoryblok = JSON.parse(workSlug?.content || "");

    const seoContent = data.seo.nodes[0];

    return <div>
    <Head seo={seoContent} />
    <Layout>
      <main className="bg-[url('https://www.userve.com/hubfs/web-assets/usx_about_bg.jpg')] bg-contain bg-top bg-no-repeat">
        <HeroSection {...heroContent} />

        <TwoColSection {...heartContent} />

        <TwoColSection {...personalizedContent} />

        <BenefitsSection {...workContent} />

        <BusinessSection {...statisticsContent} className="bg-gradient-to-b from-lilac to-white"/>

        <AboutUsSection {...ctaContent} />
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
