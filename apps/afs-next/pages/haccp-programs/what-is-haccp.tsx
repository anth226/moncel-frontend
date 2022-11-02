import Layout from 'components/core/layout';
import { Divider, IconStepComponent, IntroBox } from 'components/core/templates';
import { haccpNavigationData } from 'components/haccp/haccpPagesData';
import { CoursesBackground } from 'components/courses';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { SectionContainer } from 'components/core/SectionContainer';

import HaccpProgramGraphic from 'public/haccp/afs-haccp02.jpg';
import WhatIsHaccpGraphic from 'public/haccp/afs-haccp03.jpg';
import ProtectGraphic from 'public/haccp/afs-haccp04.jpg';
import Icon1 from 'public/icons/icon_stroke_green_circle_num1.svg';
import Icon2 from 'public/icons/icon_stroke_green_circle_num2.svg';
import Icon3 from 'public/icons/icon_stroke_green_circle_num3.svg';
import Icon4 from 'public/icons/icon_stroke_green_circle_num4.svg';
import Icon5 from 'public/icons/icon_stroke_green_circle_num5.svg';
import Icon6 from 'public/icons/icon_stroke_green_circle_num6.svg';
import Icon7 from 'public/icons/icon_stroke_green_circle_num7.svg';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "haccp-programs/what-is-haccp",
  displayPathname: "HACCP FOOD SAFETY PROGRAMS/WHAT IS HACCP?",
  header: "What is HACCP?",
  subheader: "Learn more about the 7 principles of HACCP and how they can help you to take control of the food safety risks in your business.",
  navigation: haccpNavigationData,
  id: "haccp-page-body-section"
};

const Page = () => {
  return (
    <Layout pageTitle='What is HACCP? | Is It Required for Food Safety Programs? | AIFS' metaDescription='Learn more about the 7 principles of HACCP and how they can help you to take control of the food safety risks in your business.'>
      <CoursesBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <WhatIsSection />
          <Divider />
          <ProtectSection />
        </>
        </RowsTemplate></CoursesBackground>
    </Layout>
  );
};


const Section1 = () => {
  return <SectionContainer id="section-haccp-hero">
    <IntroBox imageSrc={HaccpProgramGraphic}  alt="haccp-program-graphic">
      <Text>{`‘HACCP’ stands for Hazard Analysis Critical Control Points, and is a food safety and risk assessment plan that was initially developed in the 1960s by NASA and a group of food safety specialists. These two groups came together to solve two critical problems facing NASA's crewed space missions: crumbs and disease-producing microorganisms (e.g. bacteria, viruses) or toxins.`}</Text>
      <Text>{`Today, HACCP principles form the basis of Food Safety Programs that are accepted worldwide. HACCP principles can be applied to processes throughout every stage of the food supply chain, including production, preparation, packaging and distribution, and are used to manage food safety across many different types of food businesses.`}</Text>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <SectionContainer id="section-haccp-principles">
      <div className="flex flex-col">
        <Header3>What are the 7 principles of HACCP?</Header3>
        <Text className="pb-4">HACCP outlines seven principles that are key to ensuring the safety of food. They are:</Text>
        <IconStepComponent 
            src={Icon1}
            header="Conduct a Hazard Analysis"
            subheader="The initial process of identifying potential hazards that could occur in a food business" 
            />
        <IconStepComponent 
            src={Icon2}
            header="Identify Critical Control Points"
            subheader="A Critical Control Point (CCP) is a point in the food preparation process where hazards can be reduced, eliminated or prevented." 
            />

        <IconStepComponent 
            src={Icon3}
            header="Establish Critical Limits"
            subheader="A critical limit is the maximum or minimum value to which a food safety hazard (biological, chemical or physical) must be controlled. Often critical limit guidelines are set by government regulators." 
            />

        <IconStepComponent 
            src={Icon4}
            header="Monitor Critical Control Points"
            subheader="Monitoring each CCP is essential to make sure that hazards don’t go beyond the critical limits set. Generally, monitoring can be broken down into four different categories: observation, sensory, chemical and physical." 
            />

        <IconStepComponent 
            src={Icon5}
            header="Establish Corrective Actions"
            subheader="If a hazard exceeds its critical limit, a corrective action must be taken. Corrective actions are either immediate or preventative." 
            />

        <IconStepComponent 
            src={Icon6}
            header="Establish Record Keeping"
            subheader="Comprehensive and up-to-date records must be kept of any hazard along with details of any corrective actions. These records are kept together in a living document called a Food Safety Plan which forms part of a Food Safety Program."
            />

        <IconStepComponent 
            src={Icon7}
            header="Establish Verification Procedures"
            subheader="Verification procedures can help determine if your HACCP Food Safety Program actually works to prevent the hazards identified. It is important to perform an audit of your Food Safety Program at least once a year to ensure that everything is working." 
            />

        <Text>{`Need to create a HACCP Food Safety Plan but don't know where to start? Learn more about the 7 principles of HACCP and how to create your Food Safety Plan with the `}<a className="link font-semibold underline" href="/haccp-food-safety-plan-kit">AIFS HACCP Food Safety Plan Kit.</a></Text>

      </div>
  </SectionContainer>;
};

const WhatIsSection = () => {
    return <SectionContainer id="haccp-legal-requirement">
      <Header3 className="pb-4">A HACCP Food Safety Program is a legal requirement</Header3>
      <IntroBox imageSrc={WhatIsHaccpGraphic} alt="food-handler-course-hero-image" layout={false}>
          <Text>For most food businesses in Australia, having a Food Safety Program based on the 7 principles of HACCP is a legal requirement. <a href="https://www.legislation.gov.au/Details/F2011C00551" target="_blank" rel="noreferrer">Standard 3.2.1 of the Food Standards Code</a> (‘the Code’) enables:</Text>
          <Text className="italic">“States and Territories to require food businesses to implement a food safety program based upon the HACCP concepts. The food safety program is to be implemented and reviewed by the food business, and is subject to periodic audit by a suitably qualified food safety auditor.”</Text>
          <Text>{`It's important that food businesses have a Food Safety Plan as part of their Food Safety Program. This includes documented evidence that all food preparation steps and activities have been identified. When an Environmental Health Officer (EHO) audits your food business, they will review your Food Safety Program and its records.`}</Text>
      </IntroBox>
    </SectionContainer>;
};

const ProtectSection = () => {
    return <SectionContainer id="haccp-protect-customers">
      <Header3 className="pb-4">Protect your customers and your brand</Header3>
      <IntroBox imageSrc={ProtectGraphic} alt="food-handler-course-hero-image">
              <Text>With food poisoning incidents making front page news and horror stories exploding across social media, food safety is becoming increasingly more important. Not only is a HACCP Food Safety Program a legal requirement, but it can also protect your business from being the cause of a food-borne illness outbreak or causing severe allergic reactions from food allergens.</Text>
              <Text>Protect your customers and your business from a food safety incident and ensure your Food Safety Program is compliant with the <a href="/haccp-food-safety-plan-kit">AIFS HACCP Food Safety Plan Kit.</a></Text>
      </IntroBox>
  </SectionContainer>;
};

export default Page;
