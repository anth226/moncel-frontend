import { ReactNode } from 'react';
import NextLink from 'next/link';

import Layout from 'components/core/layout';
import { Divider, IconCard, IntroBox } from 'components/core/templates';
import { AboutBackground } from 'components/about';
import { aboutNavigationData } from 'components/about/aboutPagesData';
import { Header1, Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/about/photo_employment.jpg';

import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'about-page-body',
  pathname: "/about/employment",
  displayPathname: "ABOUT US / WORKING AT THE AUSTRALIAN INSTITUTE OF FOOD SAFETY",
  header: <div>
    <Header1 className="text-teal mb-4">Working at the Australian Institute of Food Safety</Header1>
  </div>,
  subheader: "Passionate. Positive. Challenging. Satisfying. Rewarding. These are some of the words used by our team to describe their careers with AIFS.",
  navigation: aboutNavigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Working at the Australian Institute of Food Safety | AIFS' metaDescription='Passionate. Positive. Challenging. Satisfying. Rewarding. These are some of the words used by our team to describe their careers with AIFS.'>
      <AboutBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <BenefitsSection />
          <Divider />
          <WorkingSection />
        </>
      </RowsTemplate></AboutBackground>
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
    <Header3 className="pb-4">{`What's`} it like to work with AIFS?</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="students-food-card-hero-graphic">
      <Text>When you join the AIFS team, {`you're`} not just working for a great organisation - {`you're`} also saving lives.</Text>
      <Text>Our mission is to reduce food-borne illness in Australia by educating, promoting and advocating for better food safety.</Text>
      <Text>{`It's`} something that everyone on the team works towards.</Text>
      <Text>So no matter what you do at AIFS, {`you'll`} be contributing to the health and wellbeing of the general public.</Text>
    </IntroBox>
  </SectionContainer>;
};


const BenefitsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Roles & Opportunities</Header3>
    <Text>As the educator, promoter and advocate for better food safety in Australia, AIFS offers a variety of roles - from food safety research to course development, communication to administration.</Text>
    <Text className="pb-4">{`Here's`} why we think the Australian Institute of Food Safety is a great place to work.</Text>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_cogs.svg"}
        title="Challenging & Interesting Work"
      >
        <Text>No two days are the same at AIFS. In a typical week our team help businesses to train their staff, send out food recall information, volunteer at community events, and develop new courses.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_folder.svg"}
        title="Professional Development"
      >
        <Text>We take our {`employees'`} professional development seriously. Working at the forefront of education, online technologies and food safety, {`there's`} always something new to get involved with.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_team_communication.svg"}
        title="Everyone Is Encouraged"
      >
        <Text>Whether {`you're`} a senior manager or a part-time intern at AIFS, everyone is encouraged to come up with ideas and suggestions for improvement, and to lend a helping hand to others in the team.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_handshake.svg"}
        title="Support For Causes"
      >
        <Text>As a team, we enjoy fundraising and volunteering at events with a focus on reducing food-borne illness, food waste, and helping vulnerable people who {`don't`} have enough to eat.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_protection.svg"}
        title="A Shared Commitment"
      >
        <Text>We celebrate achievements together and we deal with issues together. We have a real passion and determination to work together and achieve our goal of reducing food-borne illness throughout Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_employee.svg"}
        title="Individual Recognition"
      >
        <Text>We understand that a sense of achievement is a great motivator and gives a strong feeling of job satisfaction. We reward and recognise hard work, and celebrate the wins of team members.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const WorkingSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">Interested in working with AIFS?</Header3>
    <Text>{`We're`} always on the lookout for great people with enthusiasm and passion who want to pursue a career in food safety.</Text>
    <Text>If you think you have skills that we need and a personality that fits, {`we'd`} love to hear from you.</Text>
    <Text>Please <NextLink href="/contact">Contact Us</NextLink> for more information.</Text>
  </SectionContainer>;
};

export default Page;
