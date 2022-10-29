import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { businessOverviewData } from 'components/business/pagesData';
import { BusinessBackground } from 'components/business';

const Home = () => {
  return (
    <Layout>
      <BusinessBackground><GridTemplate {...businessOverviewData}/></BusinessBackground>
    </Layout>
  );
};

export default Home;
