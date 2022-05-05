import * as React from "react"
import { Link, graphql, PageProps } from "gatsby"

import Layout from 'src/components/layout';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Header1, Header2, Header5, Text } from 'src/components/core/typography';
import { DataProps } from 'src/lib/storyblokSourceTypes';
import { PageNotFoundStoryblok } from 'src/storyblok-component-types';

import ArrowRight from "../images/usx_arrow_right.svg";
// styles
const pageStyles = {
  color: "#232129",
  fontFamily: "-apple-system, Roboto, sans-serif, serif",
}

interface HelpfulLinkProps {
  title: string,
  description?: string,
  link: string,
}
const HelpfulLink = ({ title, description, link }: HelpfulLinkProps) => {

  return <div className="bg-white w-full max-w-[200px] rounded-xl shadow-xl flex flex-col p-4 gap-2">
    <Header5>{title}</Header5>
    <Text>{description || ""}</Text>
    <Link to={link} className="text-navy font-bold flex gap-2 items-center">Access <img src={ArrowRight} width={12} height={12}/></Link>
  </div>
}

const NotFoundPage = ({ data }: PageProps<DataProps>) => {
  const slugs = data.allStoryblokEntry.nodes[0];
  const content: PageNotFoundStoryblok = JSON.parse(slugs?.content || "");

  return (
    <Layout>
        <main style={pageStyles}>
          <title>Not found</title>
          <SectionFullWidth className="bg-[url('../images/usx_404_bg.jpg')] bg-cover bg-center px-4 py-40 flex flex-col md:flex-row gap-4">
            <Section className="w-full lg:flex lg:justify-between">
              <div className="max-w-[400px]">
                <Header1>{content.title || ""}</Header1>
                <Header2>{content.subtitle || ""}</Header2>
                <Text>{content.desc || ""}</Text>
              </div>

              <div className="flex flex-col md:flex-row gap-4">
                { (content.helpful_links || []).map((link, i) => {
                  return <HelpfulLink key={`link-${i}`} {...link} />
                })}
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
