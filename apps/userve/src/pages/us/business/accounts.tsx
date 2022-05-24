import React from "react"
import { graphql, PageProps } from "gatsby";
import loadable from '@loadable/component'


import Layout from 'src/components/layout';
import Head from 'src/components/head';

import { LogosSection } from 'src/components/sections/landing';
import { HeroSection } from 'src/components/sections/business';
import { FeatureBoxSection } from 'src/components/shared';
import { DataProps } from 'src/lib/storyblokSourceTypes';

// defer loading these components
const TestimonialsSection  = loadable(() => import('src/components/sections/landing/testimonials'), { fallback: undefined });
const TwoColSection = loadable( () => import('src/components/shared/two_col'), { fallback: undefined });
const ProductFormSection = loadable( () => import('src/components/sections/business/product'), { fallback: undefined } );
const BusinessSection = loadable(() => import('src/components/sections/landing/business'), { fallback: undefined } );

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
    const businessSlugs = data.allStoryblokEntry.nodes;
    const seoSlug = businessSlugs.filter(slug => slug.slug === SLUGS.seo)[0];
    const testimonialsSlug = businessSlugs.filter(slug => slug.slug === SLUGS.testimonials)[0];
    const logosSlug = businessSlugs.filter(slug => slug.slug === SLUGS.customers)[0];
    const businessSlug = businessSlugs.filter(slug => slug.slug === SLUGS.statistics)[0];
    const featuresSlug = businessSlugs.filter(slug => slug.slug === SLUGS.features)[0];
    const serviceSlug = businessSlugs.filter(slug => slug.slug === SLUGS.service)[0];
    const complianceSlug = businessSlugs.filter(slug => slug.slug === SLUGS.compliance)[0];
    const productSlug = businessSlugs.filter(slug => slug.slug === SLUGS.product)[0];
    const accountsSlug = businessSlugs.filter(slug => slug.slug === SLUGS.accounts)[0];
    const heroSlug = businessSlugs.filter(slug => slug.slug === SLUGS.hero)[0];

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
                    <HeroSection {...heroContent} story={heroSlug}/>

                    {/* Logos */}
                    <LogosSection {...logosContent} story={logosSlug} />

                    <FeatureBoxSection {...accountsContent} />

                    {/* Featured */}
                    <TwoColSection {...featuresContent} story={featuresSlug}/>

                    {/* Business */}
                    <BusinessSection {...businessContent} />

                    <TwoColSection {...complianceContent} story={complianceSlug}/>

                    {/* Personalization */}
                    <TwoColSection {...serviceContent} story={serviceSlug}/>

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
