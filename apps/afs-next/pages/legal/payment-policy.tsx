import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Payment from 'components/legal/mdx/payment.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/payment-policy",
  displayPathname: "LEGAL & POLICIES/AIFS PAYMENT & REFUND POLICY",
  header: "AIFS Payment & Refund Policy",
  subheader: "Before enrolling onto an AIFS course or Membership, it's important to understand the payment and refund policy terms and conditions.",
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
    <Payment/>
  </SectionContainer>;
};

export default Page;
