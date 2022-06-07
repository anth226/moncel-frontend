import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { gql } from "@apollo/client";

import { getStoryblokStories } from 'lib';
import { StoryBlokHeader, StoryBlokFooter, StoryBlokHomePricingContent } from 'moncel-one-sdk/cms/types';

import Head from 'components/Head';
import { Header, Footer } from 'components/layout';
import HeroSection from 'components/landing/hero';
import StepsSection from 'components/landing/steps';
import PricingSection from 'components/landing/pricing';
import FAQSection from 'components/landing/faq';
import CTASection from 'components/landing/cta';
import { client } from "lib/strapi/graphql";
import { LandingPage } from "generated/strapi-types";

import icxstyles from '../styles/icx.module.scss';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
  const faqs = jsonata('content.body[component="section_faqs"]').evaluate(props.home);
  const pricing: StoryBlokHomePricingContent = jsonata('content.body[component="section_benefits_and_price"]').evaluate(props.home);
  const footer: StoryBlokFooter = layout.footer?.[0];
  const header: StoryBlokHeader = layout.header?.[0];
  // const heroPrimary: StoryBlokCertificateHeroContent = jsonata('body[component="section_hero"]').evaluate(props.home?.content);
  
  const strapiData:LandingPage = props.strapiData.landingPage.data.attributes;

  return (
    <div>
      <Head />
      <Header header={header} />
      <main className={icxstyles.page}>
        <div className="bg-dark hero-bg">
          <HeroSection hero={strapiData.HeroSection} />
        </div>
        <div className="container">
          <StepsSection />
        </div>
        <div className="bg-light">
          <div className="container">
            <PricingSection pricing={pricing} />
          </div>
        </div>
        <div className="container">
          <FAQSection faqs={faqs} />
        </div>
        <div className="bg-dark">
          <CTASection />
        </div>
        <Footer footer={footer} />
      </main>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const stories = { stories: await getStoryblokStories() };
  const layout = jsonata("stories[slug='layout']").evaluate(stories);
  const home = jsonata("stories[name='Home']").evaluate(stories);

  const { data } = await client.query({
    query: gql`
      query {
        landingPage {
          data {
            id
            attributes {
              HeroSection {
                title
                Button {
                  text
                  href
                }
                HeroImage {
                  data {
                    attributes {
                      url
                      previewUrl
                    }
                  }
                }
              }
            }
          }
        }
      }
    `
  });
  return { props: {
    layout,
    home,
    strapiData: data
  } };
};
