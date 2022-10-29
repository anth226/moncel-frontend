import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Terms from 'components/legal/mdx/terms.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/terms-of-use",
  displayPathname: "LEGAL & POLICIES/TERMS OF USE",
  header: "Terms of Use",
  subheader: "Understand the terms of use that apply when you use the AIFS website or Learning Management System (LMS).",
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
    <Terms/>
  </SectionContainer>;
};

export default Page;
