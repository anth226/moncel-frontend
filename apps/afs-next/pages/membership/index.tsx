import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { membershipOverviewData } from 'components/membership/membershipPagesData';
import { MembershipBackground } from 'components/membership';

const Home = () => {
  return (
    <Layout>
      <MembershipBackground><GridTemplate {...membershipOverviewData}/></MembershipBackground>
    </Layout>
  );
};

export default Home;
