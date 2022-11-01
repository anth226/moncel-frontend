import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Privacy from 'components/legal/mdx/privacy.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/privacy-policy",
  displayPathname: "LEGAL & POLICIES/PRIVACY POLICY",
  header: "Privacy Policy",
  subheader: "AIFS is committed to protecting the privacy of it's customers. This policy explains how we deal with any personal information that's received.",
  navigation: legalNavigationData,
  id: "legal-page-body-section"
};

const Page = () => {
  return (
    <Layout pageTitle='Food Safety Courses | Online Food Safety Training and More' metaDescription="AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.">
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
    <Privacy/>
  </SectionContainer>;
};

export default Page;
