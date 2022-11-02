import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { legalOverviewData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';

const Home = () => {
  return (
    <Layout pageTitle='Food Safety Courses | Online Food Safety Training and More' metaDescription="AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.">
      <LegalBackground><GridTemplate {...legalOverviewData}/></LegalBackground>
    </Layout>
  );
};

export default Home;
