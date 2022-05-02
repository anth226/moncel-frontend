import React from "react";

import { graphql, PageProps } from "gatsby";

import Layout from 'src/components/layout';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import Head from 'src/components/head';
import { DataProps } from 'src/lib/storyblokSourceTypes';

import { ContactStoryblok } from 'src/storyblok-component-types';
import { ContactSection } from 'src/components/sections/contact';

enum SLUGS {
  contact = "contact/contact"
}

export default ({ data }: PageProps<DataProps>) => {
  const slugs = data.allStoryblokEntry.nodes;
  const contactSlug = slugs.filter(slug => slug.full_slug === SLUGS.contact)[0];

  // parsing "" into JSON will error out/fail builds.
  // this is intentional and indicates an error retrieving data from storyblok
  const contactContent: ContactStoryblok = JSON.parse(contactSlug?.content || "");

  const seoContent = data.seo.nodes[0];

  return <div>
    <Head seo={seoContent} />
    <Layout>
      <main>
        <SectionFullWidth className="bg-gradient-to-b from-hawkes to-white">
          <Section className="grid grid-cols-12 md:gap-10">
            <ContactSection {...contactContent} />
          </Section>
        </SectionFullWidth>
      </main>
    </Layout>
  </div>;
}

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^contact.*/"}}) {
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