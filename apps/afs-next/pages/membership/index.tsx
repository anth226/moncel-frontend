import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { membershipOverviewData } from 'components/membership/membershipPagesData';
import { MembershipBackground } from 'components/membership';

const Home = () => {
  return (
    <Layout pageTitle='Australian Institute of Food Safety Membership | AIFS' metaDescription="As an AIFS member, you'll join thousands of Australian food workers who show to customers and local health authorities that they're serious about food safety.">
      <MembershipBackground><GridTemplate {...membershipOverviewData}/></MembershipBackground>
    </Layout>
  );
};

export default Home;
