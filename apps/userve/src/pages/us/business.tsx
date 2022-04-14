import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { BusinessSection, LogosSection, TestimonialsSection } from 'src/components/sections/landing';
import { TwoColSection } from 'src/components/sections/shared';
import { SectionStoryblok, BenefitsStoryblok, SeoStoryblok } from 'src/storyblok-component-types';

// styles
const pageStyles = {
    color: "#232129",
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
    statistics = "statistics",
    customers = "customers",
    testimonials = "testimonials",
    features = "features",
    accounts = "accounts",
    service = "service",
    compliance = "compliance"
}

// markup
const BusinessPage = ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const seoContent = data.seo.nodes[0];
    const testimonialsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.testimonials).shift();
    const logosSlug = landingSlugs.filter(slug => slug.slug === SLUGS.customers).shift();
    const businessSlug = landingSlugs.filter(slug => slug.slug === SLUGS.statistics).shift();
    const featuresSlug = landingSlugs.filter(slug => slug.slug === SLUGS.features).shift();
    const accountsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.accounts).shift();
    const serviceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.service).shift();
    const complianceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.compliance).shift();

    const testimonialsContent = JSON.parse(testimonialsSlug?.content || "");
    const logosContent = JSON.parse(logosSlug?.content || "");
    const businessContent = JSON.parse(businessSlug?.content || "");
    const featuresContent = JSON.parse(featuresSlug?.content || "");
    const accountsContent = JSON.parse(accountsSlug?.content || "");
    const serviceContent = JSON.parse(serviceSlug?.content || "");
    const complianceContent = JSON.parse(complianceSlug?.content || "");

    return (
        <div>
            <Head seo={seoContent} />
            <Layout>
                <main style={pageStyles}>
                    {/* Hero */}
                    <Section className="grid grid-cols-2 grid-rows-2 items-center">
                        <h1 className="col-start-1 col-span-1 row-start-1 text-5xl font-bold text-slate-700">Business Training Solutions</h1>
                        <p className="col-start-1 col-span-1 row-start-2 text-lg text-slate-400">With over 10 years of experience in hospitality training, the Userve Team knows how to make managing your staff's alcohol server and food handler training as simple as possible.</p>
                        <div className="col-start-1 col-span-1 row-start-3">
                        </div>
                        <div className="col-start-2 row-span-3">
                            <StaticImage src="../images/usx_hero_home.png" alt="usx logo" />
                        </div>
                    </Section>

                    {/* Logos */}
                    <LogosSection {...logosContent} />

                    {/* Featured */}
                    <TwoColSection {...featuresContent} />

                    {/* Business */}
                    <BusinessSection {...businessContent} />
                    
                    {/* Personalization */}
                    <TwoColSection {...serviceContent} />

                    <TwoColSection {...complianceContent} />

                    {/* Testimonials */}
                    <TestimonialsSection {...testimonialsContent} />





                </main>
            </Layout>
        </div>
    )
}

export default BusinessPage;

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^business.*/"}}) {
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
