import { useEffect } from 'react';
import Layout from 'components/core/layout';
import Carousel from 'components/core/Carousel';
import { LogosCarousel } from 'components/core/Carousel';
import { Section, Header4 } from 'components/core';
import { HelpSection, CommunitySection, BlogSection } from 'components/Landing';

const LandingPageLogos = () => {
  return <Section className="py-11 pt-0 pb-12 md:px-0 padded-section">
    <LogosCarousel />
    <Header4 className="text-teal w-full text-center font-normal mt-6">Trusted and recommended by the Australian Food Industry</Header4>
  </Section>;
};

const Home = () => {
  return (
    <Layout pageTitle='Food Safety Courses | Online Food Safety Training and More | AIFS' metaDescription="AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.">
      <Carousel id="heroCarousel" />
      <HelpSection />
      <LandingPageLogos />
      <CommunitySection />
      <BlogSection />
    </Layout>
  );
};

export default Home;
