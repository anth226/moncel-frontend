import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { businessOverviewData } from 'components/business/pagesData';
import { BusinessBackground } from 'components/business';

const Home = () => {
  return (
    <Layout pageTitle="'Food Safety Solutions for Businesses | AIFS'" metaDescription="Whether you're starting a local market stall or managing food safety for a national business, AIFS help you meet all legal requirements for food safety training.">
      <BusinessBackground><GridTemplate {...businessOverviewData}/></BusinessBackground>
    </Layout>
  );
};

export default Home;
