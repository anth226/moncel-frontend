import Layout from 'components/core/layout';
import { legalNavigationData } from 'components/legal/legalPagesData';
import { LegalBackground } from 'components/legal';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';
import Enrolment from 'components/legal/mdx/enrolment.mdx';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "legal/enrolment-policy",
  displayPathname: "LEGAL & POLICIES/ENROLMENT POLICY FOR FOOD SAFETY COURSES",
  header: "Enrolment Policy for Food Safety Courses",
  subheader: "All students who are enrolled onto an AIFS food safety course are subject to the terms and conditions laid out in this Enrolment Policy.",
  navigation: legalNavigationData,
  id: "legal-page-body-section"
};

const Page = () => {
  return (
    <Layout pageTitle='Enrolment Policy for Food Safety Courses | AIFS' metaDescription="All students who are enrolled onto an AIFS food safety course are subject to the terms and conditions laid out in this Enrolment Policy.">
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
    <Enrolment/>
  </SectionContainer>;
};

export default Page;
