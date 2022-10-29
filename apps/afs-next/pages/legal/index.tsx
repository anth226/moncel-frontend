import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { legalOverviewData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';

const Home = () => {
  return (
    <Layout>
      <LegalBackground><GridTemplate {...legalOverviewData}/></LegalBackground>
    </Layout>
  );
};

export default Home;
