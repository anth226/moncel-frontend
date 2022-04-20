import * as React from "react"
import { graphql, PageProps } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";

import Layout from 'src/components/layout';
import Head from 'src/components/head';
import { Section } from 'src/components/core/Section';

import { BusinessSection, LogosSection, TestimonialsSection } from 'src/components/sections/landing';
import { TwoColSection, ProductFormSection, FeatureBoxSection } from 'src/components/shared';
import { DataProps } from 'src/lib/storyblokSourceTypes';

// styles
const pageStyles = {
    color: "#232129",
    fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

enum SLUGS {
    statistics = "statistics",
    customers = "customers",
    testimonials = "testimonials",
    features = "features",
    service = "service",
    compliance = "compliance",
    product = "product",
    accounts = "accounts"
}

// markup
const BusinessPage = ({ data }: PageProps<DataProps>) => {
    const landingSlugs = data.allStoryblokEntry.nodes;
    const seoContent = data.seo.nodes[0];
    const testimonialsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.testimonials).shift();
    const logosSlug = landingSlugs.filter(slug => slug.slug === SLUGS.customers).shift();
    const businessSlug = landingSlugs.filter(slug => slug.slug === SLUGS.statistics).shift();
    const featuresSlug = landingSlugs.filter(slug => slug.slug === SLUGS.features).shift();
    const serviceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.service).shift();
    const complianceSlug = landingSlugs.filter(slug => slug.slug === SLUGS.compliance).shift();
    const productSlug = landingSlugs.filter(slug => slug.slug === SLUGS.product).shift();
    const accountsSlug = landingSlugs.filter(slug => slug.slug === SLUGS.accounts).shift();

    const testimonialsContent = JSON.parse(testimonialsSlug?.content || "");
    const logosContent = JSON.parse(logosSlug?.content || "");
    const businessContent = JSON.parse(businessSlug?.content || "");
    const featuresContent = JSON.parse(featuresSlug?.content || "");
    const serviceContent = JSON.parse(serviceSlug?.content || "");
    const complianceContent = JSON.parse(complianceSlug?.content || "");
    const productContent = JSON.parse(productSlug?.content || "");
    const accountsContent = JSON.parse(accountsSlug?.content || "");

    return (
        <div>
            <Head seo={seoContent} />
            <Layout>
                <main style={pageStyles}>
                    {/* Hero */}
                    <Section className="grid grid-cols-2 grid-rows-1 items-center">
                        <div className="col-start-1">
                            <h1 className="text-5xl font-bold mb-6">Business Training Solutions</h1>
                            <p className="text-md mb-6">With over 10 years of experience in hospitality training, the Userve Team knows how to make managing your staff's alcohol server and food handler training as simple as possible.</p>
                            <div>
                                <a className="btn btn-primary md:mr-4 mb-2 md:mb-0" href="#buslmform" rel="noopener">
                                    Get in Touch
                                </a>
                                <a className="btn btn-invert" href="https://hello.userve.com/schedule" target="_blank" rel="noopener">
                                    Schedule a Call
                                </a>
                            </div>
                        </div>
                        <div className="col-start-2">
                            <StaticImage src="../../images/usx_business_hero.png" alt="usx logo" />
                        </div>
                    </Section>

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
