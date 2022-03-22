import type { InferGetStaticPropsType } from 'next';
import Image from 'next/image';
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryBlokHeader, StoryBlokFooter, StoryBlokHomePricingContent } from 'moncel-one-sdk/cdn/types';

import Head from 'components/Head';
import { Header, Footer } from 'components/layout';
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

        {/* hero */}
        <div className={icxstyles['hero-bg']} />
        <div className={icxstyles.hero}>
          <div>
            <h1>Get your <span className={icxstyles.highlight}>Food Handler Certificate</span> online</h1>
            <h1 className={icxstyles.clickable}>
              <a 
                href="https://my.instacert.ca/urlcheckout/add?product=7&qty=1"
                className={icxstyles.highlight}
                target="_blank"
                rel="noreferrer">Register now</a></h1>
          </div>
          <Image src="/icc-value.png" alt="icc-value-graphic" width={350} height={311} layout="fixed" />
        </div>

        <div className={icxstyles.center}>
          <StepsSection />
        </div>
        <div className={`${icxstyles['full-row']} ${icxstyles['bg-tertiary']}`}>
          <div className={icxstyles.center}>
            <PricingSection pricing={pricing} />
          </div>
        </div>
        <div className={icxstyles.center}>
          <FAQSection faqs={faqs} />
        </div>
        <div className={icxstyles['cta-bg']} />
        <div className={icxstyles['cta-center']}><CTASection /></div>
        <div className={icxstyles.center}>
          <Footer footer={footer} />
      </div>
      </main>
    </div>
  )
}

export default Home

export const getStaticProps = async () => {
  const stories = { stories: await getStoryblokStories() };
  const layout = jsonata("stories[slug='layout']").evaluate(stories);
  const home = jsonata("stories[name='Home']").evaluate(stories);
  return { props: {
    // stories, // debug
    layout,
    home,
  } };
};
