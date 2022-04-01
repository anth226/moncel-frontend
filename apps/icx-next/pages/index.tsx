import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cms';
import { StoryBlokHeader, StoryBlokFooter, StoryBlokHomePricingContent } from 'moncel-one-sdk/cms/types';

import Head from 'components/Head';
import { Header, Footer } from 'components/layout';
import HeroSection from 'components/landing/hero';
import StepsSection from 'components/landing/steps';
import PricingSection from 'components/landing/pricing';
import FAQSection from 'components/landing/faq';
import CTASection from 'components/landing/cta';

import icxstyles from '../styles/icx.module.scss';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
  const faqs = jsonata('content.body[component="section_faqs"]').evaluate(props.home)
  const pricing: StoryBlokHomePricingContent = jsonata('content.body[component="section_benefits_and_price"]').evaluate(props.home)
  const footer: StoryBlokFooter = layout.footer?.[0];
  const header: StoryBlokHeader = layout.header?.[0];

  return (
    <div>
      <Head />
      <Header header={header} />
      <main className={icxstyles.page}>
        <div className="bg-dark hero-bg">
          <HeroSection />
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
        <div className="footer">
          <Footer footer={footer} />
        </div>
      </main>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {
  const stories = { stories: await getStoryblokStories() };
  const layout = jsonata("stories[slug='layout']").evaluate(stories);
  const home = jsonata("stories[name='Home']").evaluate(stories);
  return { props: {
    layout,
    home,
  } };
};
