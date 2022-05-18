import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from 'src/components/layout';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Header1, Header3, Header5, Text } from 'src/components/core/typography';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { PageNotFoundStoryblok } from 'src/storyblok-component-types';

import ArrowRight from "../images/usx_arrow_right.svg";
// styles
const pageStyles = {
  fontFamily: "Inter, sans-serif"
}

interface HelpfulLinkProps {
  title: string,
  description?: string,
  link: string,
}
const HelpfulLink = ({ title, description, link }: HelpfulLinkProps) => {
  return <div className="bg-white col-span-12 md:col-span-6 lg:col-span-4 rounded-xl shadow-xl flex flex-col justify-between p-6 mb-6 md:mb-0">
    <div>
      <Header5>{title}</Header5>
      <Text>{description || ""}</Text>
    </div>
    <Link to={link} className="text-navy font-bold flex gap-2 items-center hover:underline">Access <img src={ArrowRight} width={12} height={12} /></Link>
  </div>
}

const NotFoundPage = ({ data }: PageProps<DataProps>) => {
  const slugs = data.allStoryblokEntry.nodes[0];
  const content: PageNotFoundStoryblok = JSON.parse(slugs?.content || "");

  return (
    <Layout>
      <main style={pageStyles}>
        <title>Error 404 | Page not found</title>
        <SectionFullWidth className="bg-[url('../images/usx_404_bg.jpg')] bg-cover bg-center px-4 py-40 flex flex-col md:flex-row">
          <Section className="w-full grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-4 mb-6 md:mb-0">
              <Header1 className="!mb-0">{content.title || ""}</Header1>
              <Header3>{content.subtitle || ""}</Header3>
              <Text className="!mb-0">{content.desc || ""}</Text>
            </div>
            <div className="col-span-12 md:col-span-8">
              <div className="grid grid-cols-12 md:gap-10">
                {(content.helpful_links || []).map((link, i) => {
                  return <HelpfulLink key={`link-${i}`} {...link} />
                })}
              </div>
            </div>
          </Section>
        </SectionFullWidth>


      </main>
    </Layout>
  )
}

export default NotFoundPage;

export const pageQuery = graphql`
  query {
    allStoryblokEntry(filter: {full_slug: {regex: "/^404/"}}) {
      nodes {
        content
        slug
        full_slug
      }
    }
}`;
