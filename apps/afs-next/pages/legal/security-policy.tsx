import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Security from 'components/legal/mdx/security.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/security-policy",
  displayPathname: "LEGAL & POLICIES/SECURITY POLICY",
  header: "Security Policy",
  subheader: "At AIFS, we take all reasonable steps to protect the security of cookies and personal information that we receive. This Security Policy explains how.",
  navigation: legalNavigationData,
  id: "legal-page-body-section"
};

const Page = () => {
  return (
    <Layout pageTitle='Security Policy | AIFS' metaDescription="At AIFS, we take all reasonable steps to protect the security of cookies and personal information that we receive. This Security Policy explains how.">
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
    <Security/>
  </SectionContainer>;
};

export default Page;
