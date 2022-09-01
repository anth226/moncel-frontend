import Layout from 'components/core/layout';
import Carousel from 'components/core/Carousel';
import { HelpSection, CommunitySection, BlogSection } from 'components/Landing';


const Home = () => {
  return (
    <Layout>
      <Carousel id="heroCarousel" />
      <HelpSection />
      <CommunitySection />
      <BlogSection />
    </Layout>
  );
};

export default Home;
