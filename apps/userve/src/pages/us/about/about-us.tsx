import React from "react";
import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';

import { ThreeByTwoStoryblok, HeroStoryblok, TitleDescriptionStoryblok, AboutUsStoryblok } from 'src/storyblok-component-types';
import { HeroSection, MissionSection, PeopleTrustSection } from 'src/components/sections/about';
import { AboutUsSection } from 'src/components/sections/landing';

const pageStyles = {
    color: "#232129"
}

enum SLUGS {
    hero="about/hero",
    mission="about/mission",
    people="about/people",
    trust="about/trust",
    seo = "about/seo",
    cta = "about/cta",
}

export default ({ data }: PageProps<DataProps>) => {
    const slugs = data.allStoryblokEntry.nodes;
    const heroSlug = slugs.filter(slug => slug.full_slug === SLUGS.hero)[0];
    const missionSlug = slugs.filter(slug => slug.full_slug === SLUGS.mission)[0];
    const peopleSlug = slugs.filter(slug => slug.full_slug === SLUGS.people)[0];
    const trustSlug = slugs.filter(slug => slug.full_slug === SLUGS.trust)[0];
    const seoSlug = slugs.filter(slug => slug.full_slug === SLUGS.seo)[0];
    const ctaSlug = slugs.filter(slug => slug.full_slug === SLUGS.cta)[0];

    // parsing "" into JSON will error out/fail builds.
    // this is intentional and indicates an error retrieving data from storyblok
    const heroContent: HeroStoryblok = JSON.parse(heroSlug?.content || "");
    const missionContent: ThreeByTwoStoryblok = JSON.parse(missionSlug?.content || "");
    const peopleContent: TitleDescriptionStoryblok = JSON.parse(peopleSlug?.content || "");
    const trustContent: TitleDescriptionStoryblok = JSON.parse(trustSlug?.content || "");
    const seoContent = JSON.parse(seoSlug?.content || "");
    const ctaContent: AboutUsStoryblok = JSON.parse(ctaSlug?.content || "");

    return <div>
    <Head seo={seoContent} />
    <Layout>
      <main className="bg-[url('src/images/usx_about_bg.webp')] bg-cover bg-top bg-no-repeat">
        <HeroSection {...heroContent} story={heroSlug} />
        <MissionSection {...missionContent} story={missionSlug} />
        <PeopleTrustSection peopleData={peopleContent} trustData={trustContent} />
        <AboutUsSection {...ctaContent} story={ctaSlug} />
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
