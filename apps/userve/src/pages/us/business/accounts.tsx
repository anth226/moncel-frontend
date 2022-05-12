import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section } from 'src/components/core/Section';

import { BusinessSection, LogosSection, TestimonialsSection } from 'src/components/sections/landing';
import { ProductFormSection, HeroSection } from 'src/components/sections/business';
import { TwoColSection, FeatureBoxSection } from 'src/components/shared';
import { DataProps } from 'src/lib/storyblokSourceTypes';

// styles
const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
    hero='hero',
    statistics = "statistics",
    customers = "customers",
    testimonials = "testimonials",
    features = "features",
    service = "service",
    compliance = "compliance",
    product = "product",
    accounts = "accounts",
    seo = "seo"
}

// markup
const BusinessPage = ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const seoSlug = landingSlugs.filter(slug => slug.slug === SLUGS.seo)[0];
    const testimonialsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.testimonials)[0];
    const logosSlug = landingSlugs.filter(slug => slug.slug === SLUGS.customers)[0];
    const businessSlug = landingSlugs.filter(slug => slug.slug === SLUGS.statistics)[0];
    const featuresSlug = landingSlugs.filter(slug => slug.slug === SLUGS.features)[0];
    const serviceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.service)[0];
    const complianceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.compliance)[0];
    const productSlug = landingSlugs.filter(slug => slug.slug === SLUGS.product)[0];
    const accountsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.accounts)[0];
    const heroSlug = landingSlugs.filter(slug => slug.slug === SLUGS.hero)[0];

    const testimonialsContent = JSON.parse(testimonialsSlug?.content || "");
    const logosContent = JSON.parse(logosSlug?.content || "");
    const businessContent = JSON.parse(businessSlug?.content || "");
    const featuresContent = JSON.parse(featuresSlug?.content || "");
    const serviceContent = JSON.parse(serviceSlug?.content || "");
    const complianceContent = JSON.parse(complianceSlug?.content || "");
    const productContent = JSON.parse(productSlug?.content || "");
    const accountsContent = JSON.parse(accountsSlug?.content || "");
    const heroContent = JSON.parse(heroSlug?.content || "");
    const seoContent = JSON.parse(seoSlug?.content || "");

    return (
        <div>
            <Head seo={seoContent} />
            <Layout>
                <main style={pageStyles}>
                    {/* Hero */}
                    <HeroSection {...heroContent} />

                    {/* Logos */}
                    <LogosSection {...logosContent} />

                    <FeatureBoxSection {...accountsContent} />

                    {/* Featured */}
                    <TwoColSection {...featuresContent} />

                    {/* Business */}
                    <BusinessSection {...businessContent} />

                    <TwoColSection {...complianceContent} />

                    {/* Personalization */}
                    <TwoColSection {...serviceContent} />

                    {/* Testimonials */}
                    <TestimonialsSection {...testimonialsContent} />

                    <ProductFormSection {...productContent} />
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
