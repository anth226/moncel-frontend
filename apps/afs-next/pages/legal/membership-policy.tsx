import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Membership from 'components/legal/mdx/membership.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/membership-policy",
  displayPathname: "LEGAL & POLICIES/AIFS MEMBERSHIP POLICY",
  header: "AIFS Membership Policy",
  subheader: "This policy contains important information for all new members joining the thousands of food professionals currently enjoying the benefits of AIFS membership.",
  navigation: legalNavigationData,
  id: "legal-page-body-section"
};

const Page = () => {
  return (
    <Layout>
      <LegalBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
        </>
        </RowsTemplate></LegalBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <SectionContainer id="section-legal-content" className="mdx">
    <Membership/>
  </SectionContainer>;
};

export default Page;
