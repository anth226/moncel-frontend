import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import { StudentsBackground } from 'components/students';
import { navigationData } from 'components/students/pagesData';
import { Header1, Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/students/photo_display_cert.jpg';
import DisplayCertificateProof from 'public/students/food-safety-card-green-reverse-highlight_4.jpg';

import HowToGetCol1 from 'components/students/mdx/how-to-get-col-1.mdx';
import HowToGetCol2 from 'components/students/mdx/how-to-get-col-2.mdx';
import ProofOfTraining from 'components/students/mdx/proof-of-training.mdx';

import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'students-page-body',
  pathname: "students/food-safety-display-certificate",
  displayPathname: "FOR STUDENTS / FOOD SAFETY DISPLAY CERTIFICATE",
  header: <div>
    <Header1 className="text-teal">Food Safety Display Certificate</Header1>
  </div>,
  subheader: "Put customers' minds at ease and showcase your professional food safety training by displaying an AIFS Food Safety Display Certificate in your business.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Food Safety Display Certificate' metaDescription="Put customers' minds at ease and showcase your professional food safety training by presenting an AIFS Food Safety Display Certificate in your business.">
      <StudentsBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <BenefitsSection />
          <Divider />
          <TableComparisonSection />
          <Divider />
          <HowToGetSection />
        </>
      </RowsTemplate></StudentsBackground>
    </Layout>
  );
};

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className}`} id={id}>{children}</div>;

const HeroSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">{`Show customers you're serious about food safety`}</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="students-food-card-hero-graphic">
      <Text>{`When you complete AIFS Food Safety Supervisor training you'll receive a Food Safety Display Certificate to display at work.`}</Text>
      <Text>The Display Certificate:</Text>
      <ul className="checklist">
        <ListItem>{`prominently displays the widely recognised 'Serious About Food Safety' phrase`}</ListItem>
        <ListItem>{`reassures customers they've made a good decision about where to eat`}</ListItem>
        <ListItem>{`is sent to you immediately as part of your graduation pack`}</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const BenefitsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">How will I benefit from a Food Safety Display Certificate?</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_protection.svg"}
        title="Show customers you care"
      >
        <Text>{`The 'Serious About Food Safety' Decal assures customers their well-being is as important to you as it is to them.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_square_num1.svg"}
        title="Stand out from your competition"
      >
        <Text>Demonstrating that you make food safety a priority reminds customers why they choose you over other food businesses.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_employee.svg"}
        title="Promote staff expertise"
      >
        <Text>A Display Certificate on the wall tells customers your staff are professionals, trained to Australian standards.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_mortarboard.svg"}
        title="Showcase your expertise"
      >
        <Text>Reminds your boss that you worked hard to achieve your Food Safety Supervisor qualification and provide value to the company.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_cv.svg"}
        title="Enhance your resume"
      >
        <Text>Feel confident taking an AIFS course that 100% of students would recommend to a friend.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_employee.svg"}
        title="Increase your value as an employee"
      >
        <Text>Display Certificates belong to AIFS graduates, so they can only be displayed as long as you work with the business.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const TableComparisonSection = () => {
  return <div className="col-span-3" id="course-inclusions">
    <Header3 className="pb-4">How do I get my Food Safety Display Certificate?</Header3>
    <TwoCol>
      <div className="mdx"> 
        <HowToGetCol1 />
      </div>
      <div className="mdx">
        <HowToGetCol2 />
      </div>
    </TwoCol>
  </div>;
};

const HowToGetSection = () => {
  return <SectionContainer id="how-to-get">
    <Header3 className="pb-4">Is a Display Certificate proof of training?</Header3>
    <IntroBox imageSrc={DisplayCertificateProof} alt="Is a Display Certificate proof of training?" layout={false}>
      <div className="mdx">
        <ProofOfTraining />
      </div>
    </IntroBox>
  </SectionContainer>;
}

export default Page;
