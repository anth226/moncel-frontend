import { ReactNode } from 'react';
import NextLink from 'next/link';

import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, IntroBox } from 'components/core/templates';
import { membershipNavigationData } from 'components/membership/membershipPagesData';
import { MembershipBackground } from 'components/membership';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/membership/photo_decal.jpg';
import WhereToDisplayGraphic from 'public/membership/window-decal.jpg';
import MegaphoneIcon from 'public/icons/icon_stroke_green_megaphone.svg';
import LooseChangeIcon from 'public/icons/icon_stroke_green_loose_change.svg';
import PeopleIcon from 'public/icons/icon_stroke_green_people.svg';
import SquareIconOne from 'public/icons/icon_stroke_green_square_num1.svg';
import EmployeeIcon from 'public/icons/icon_stroke_green_employee.svg';
import BoxTickIcon from 'public/icons/icon_stroke_green_checkmark_box_stroke_tick.svg';

import OneIcon from 'public/icons/icon_stroke_green_circle_num1.svg';
import TwoIcon from 'public/icons/icon_stroke_green_circle_num2.svg';


import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "membership/food-safety-decal",
  displayPathname: "MEMBERSHIP/FOOD SAFETY DECAL",
  header: "Food Safety Decal",
  subheader: "Show customers at your door that you're serious about food safety with the widely recognised AIFS Food Safety Decal.",
  navigation: membershipNavigationData,
  id: "membership-program-page-body-section"
};

const Page = () => {
  return (
    <Layout>
      <MembershipBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <WhatsIncluded />
          <Divider />
          <HowToGetSection />
          <Divider />
          <WhereToDisplaySection />
        </>
      </RowsTemplate></MembershipBackground>
    </Layout>
  );
};

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className} ${styles['courses']}`} id={id}>{children}</div>;

const HeroSection = () => {
  return <SectionContainer className="col-span-3" id="section-memberhsip-program-hero">
    <Header3 className="pb-4">Promoting food safety is good for business</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="haccp-program-graphic">
      <Text>Food safety and hygiene has a big impact on where people decide to eat or buy food:</Text>
      <ul className="mb-4">
        <ListItem>51% of Australians worry about food safety</ListItem>
        <ListItem>33% believe they have suffered with food poisoning</ListItem>
      </ul>
      <Text>The official AIFS Food Safety Decal is displayed on thousands of food business doors and windows throughout Australia. It assures customers that they’re entering a business that takes food safety seriously.</Text>
    </IntroBox>
  </SectionContainer>;
};

const WhatsIncluded = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">{`How will I benefit from a Food Safety Decal?`}</Header3>
    <TwoCol>
      <IconCard
        imageSrc={LooseChangeIcon}
        title="Attract more customers"
      >
        <Text>{`Display your Decal at the entrance to your business to encourage and attract new customers.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={SquareIconOne}
        title="Show food safety is a priority"
      >
        <Text>{`Put people's minds at ease by demonstrating that you take the health and safety of customers seriously.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={PeopleIcon}
        title="Stand out from your competition"
      >
        <Text>{`Make the choice easy for customers by showing why you're better than other similar food businesses.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={MegaphoneIcon}
        title={`Promote your expertise`}
      >
        <Text>{`Let the world know that you work hard to maintain food safety and hygiene standards.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={EmployeeIcon}
        title={`Boost your value as an employee`}
      >
        <Text>{`The Decal belongs to you, so the food business you work at can only display the Decal while you work there.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={BoxTickIcon}
        title={`Free with AIFS Membership`}
      >
        <Text>{`AIFS Membership includes a Food Safety Decal, along with hundreds of practical food safety resources.`}</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const HowToGetSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">How do I get an AIFS Food Safety Decal?</Header3>
    <TwoCol>
      <IconCard
        imageSrc={OneIcon}
        title="With a Nationally Recognised AIFS Course"
      >
        <Text>{`Complete an AIFS nationally recognized training course:`}</Text>
        <NextLink href="/courses/food-handler-course"><a className="link text-teal mb-2">Food Handler</a></NextLink>
        <NextLink href="/courses/food-safety-supervisor"><a className="link text-teal mb-2">Food Safety Supervisor</a></NextLink>
        <NextLink href="/courses/nsw-recertification"><a className="link text-teal mb-4">NSW Recertification</a></NextLink>
        <Text>{`Your graduation pack will include the 'Serious About Food Safety' Decal along with your Statement of Attainment, Food Safety Card and any other documents required.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={TwoIcon}
        title="Purchase AIFS Membership"
      >
        <Text>{`A 12-month AIFS Membership can be purchased for only $99.95.`}</Text>
        <Text>AIFS Members get unlimited access to our entire library of food safety resources, including guides, templates, checklists, fact sheets and more. </Text>
        <Text>{`You'll also receive a 'Serious About Food Safety' Decal to put on your door to attract customers and build your brand.`}</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const WhereToDisplaySection = () => {
  return <SectionContainer className="col-span-3" id="section-memberhsip-program-hero">
    <Header3 className="pb-4">{`Where should I display my Food Safety Decal?`}</Header3>
    <IntroBox imageSrc={WhereToDisplayGraphic} alt="haccp-program-graphic" layout={false}>
      <div className="flex flex-col pr-6 col-span-3 md:col-span-1 text-afs-dark-gray">
        <Text>The AIFS Food Safety Decal is a double-sided window sticker, designed to be placed on the inside of a window or a glass door.</Text>
        <Text>All you need to do is:</Text>
        <ul className="mb-4">
          <ListItem>remove the adhesive backing from the Decal</ListItem>
          <ListItem>place it where it can be seen by as many customers as possible</ListItem>
        </ul>
        <Text className="pb-2 pt-2">{`It's`} a great food safety promotional tool to attract customers to your business. </Text>
      </div>
    </IntroBox>
  </SectionContainer>;
};


export default Page;
