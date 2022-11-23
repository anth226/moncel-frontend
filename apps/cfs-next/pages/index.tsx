import Layout from 'components/core/Layout';
import Carousel from 'components/core/Carousel';
import { HeroSection } from 'components/Landing';
import { LogosCarousel } from 'components/core/Carousel';
import { Header4 } from 'components/core/Typography';
// import { HelpSection, CommunitySection, BlogSection } from 'components/Landing';

const LandingPageLogos = () => {
  return <div className="w-full py-11 flex flex-col gap-11 md:px-0 padded-section">
    <Header4 className="text-nepal w-full text-center font-normal mt-6">Trusted and recommended by the Canadian Food Industry</Header4>
    <LogosCarousel />
  </div>;
}

const Home = () => {
  return (
    <Layout>
       <Carousel id="heroCarousel" />
      <HeroSection />
      <LandingPageLogos />
      {/* <CommunitySection /> */}
      {/* <BlogSection /> */}
    </Layout>
  );
};

export default Home;
