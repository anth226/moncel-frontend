import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, IntroBox, ListItem } from 'components/core/templates';
import { BusinessBackground } from 'components/business';
import { navigationData } from 'components/business/pagesData';
import { Header3, Link, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/business/photo_whyfoodsafety.jpg';
import StayCompliantGraphic from 'public/business/photo_stay_compliant.jpg';
import KeepCustomersSafeGraphic from 'public/business/photo_keep_customers_safe.jpg';
import ProtectYourBusinessGraphic from 'public/business/photo_protect_your_business.jpg';
import StayUpToDateGraphic from 'public/business/photo_stay_up_to_date_0.jpg';
import ShowCustomersYouCareGraphic from 'public/business/photo_show_customers_you_care.jpg';

import styles from './styles.module.scss';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'business-page-body',
  pathname: "business/food-safety",
  displayPathname: "INFORMATION FOR BUSINESS / WHY IS FOOD SAFETY IMPORTANT?",
  header: "Why is Food Safety Important?",
  subheader: "Every year in Australia, hundreds of food businesses are closed down due to food safety issues. Don't let your business become a statistic.  ",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Why Food Safety is Important for Food Businesses | AIFS' metaDescription="Every year in Australia, hundreds of food businesses are closed down due to food safety issues. Don't let your business become a statistic.">
      <BusinessBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <StayCompliantSection />
          <Divider />
          <KeepCustomersSafeSection />
          <Divider />
          <ProtectYourBusinessSection />
          <Divider />
          <StayUpToDateSection />
          <Divider />
          <ShowCustomersYouCareSection />
        </>
      </RowsTemplate></BusinessBackground>
    </Layout>
  );
};

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className} ${styles['students']}`} id={id}>{children}</div>;

const HeroSection = () => {
  return <SectionContainer className="col-span-3" id="hero-section">
    <Header3 className="pb-4">Food safety saves people and businesses</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="Food safety saves people and businesses">
      <Text>Around 1 in 5 people in Australia suffer from food-borne illness every year. Over 30,000 people are hospitalised.</Text>
      <Text>Between 80 and 90 people die.</Text>
      <Text>If your business causes a food-borne illness outbreak:</Text>
      <ul className="pb-6">
        <ListItem>Your licence may be suspended or cancelled</ListItem>
        <ListItem>You may be fined hundreds of thousands of dollars</ListItem>
        <ListItem>You could be personally prosecuted</ListItem>
        <ListItem>Your business could be closed down</ListItem>
      </ul>
      <Text>Read on to learn why you need to make food safety a priority for your business.</Text>
    </IntroBox>
  </SectionContainer>;
};

const StayCompliantSection = () => {
  return <SectionContainer className="col-span-3" id="stay-compliant-section">
    <Header3 className="pb-4">Stay compliant</Header3>
    <IntroBox imageSrc={StayCompliantGraphic} alt="Stay compliant" layout={false}>
      <Text>Keeping your business and customers protected starts with the right food safety training for your staff. Food safety training is governed by two sets of legislation:</Text>
      <ol>
        <ListItem><strong>Federal law</strong> - anyone that handles food must be trained in food safety.</ListItem>
        <ListItem><strong>State law</strong> - most food businesses in Australia must have at least one <Link href="/courses/food-safety-supervisor">Food Safety Supervisor</Link> for each premises.</ListItem>
      </ol>
    </IntroBox>
  </SectionContainer>;
};

const KeepCustomersSafeSection = () => {
  return <SectionContainer className="col-span-3" id="keep-customers-safe-section">
    <Header3 className="pb-4">Keep your customers safe</Header3>
    <IntroBox imageSrc={KeepCustomersSafeGraphic} alt="Keep your customers safe">
      <Text>Most major food-borne illness outbreaks are caused by one of the following:</Text>
      <ol>
        <ListItem>Poor personal hygiene of food handlers</ListItem>
        <ListItem>Incorrect time and temperature control of food</ListItem>
        <ListItem>Inadequate cleaning and sanitising of surfaces and equipment</ListItem>
      </ol>
      <Text>It takes just a few hours to learn the principles of food safety.</Text>
      <Text>All employees in a food business need food safety training. It takes just one food handler doing the wrong thing to cause hundreds of customers to fall ill.</Text>
    </IntroBox>
  </SectionContainer>;
};

const ProtectYourBusinessSection = () => {
  return <SectionContainer className="col-span-3" id="stay-compliant-section">
    <Header3 className="pb-4">Protect your business</Header3>
    <IntroBox imageSrc={ProtectYourBusinessGraphic} alt="Protect your business" layout={false}>
      <Text>Each year hundreds of Australian food businesses are fined, prosecuted or closed down due to food safety breaches.</Text>
      <Text>Health Inspectors can visit a food premises at any time, without warning. If serious food safety breaches are found the business can be closed down immediately.</Text>
      <Text>To avoid issues, ensure <strong>all staff</strong>:</Text>
      <ul className="checklist pb-4">
        <ListItem>are trained in food safety</ListItem>
        <ListItem>follow the Food Safety Program diligently</ListItem>
      </ul>

      <Text>How to setup and maintain a Food Safety Program based on HACCP principles is explained in the <Link href="/haccp-food-safety-plan-kit">AIFS HACCP Food Safety Plan Kit</Link>. The kit was designed to help food businesses create a Food Safety Program that is compliant and tailored to the needs of their business.</Text>
    </IntroBox>
  </SectionContainer>;
};

const StayUpToDateSection = () => {
  return <SectionContainer className="col-span-3" id="stay-up-to-date-section">
    <Header3 className="pb-4">Stay up-to-date with food safety</Header3>
    <IntroBox imageSrc={StayUpToDateGraphic} alt="Stay up-to-date with food safety">
      <Text>Running a food business often means long, busy hours, with many things to keep track of which can make food safety low on the priority list.</Text>
      <Text>To help, the Australian Institute of Food Safety offers a 12-month complimentary membership to all students who register in our <Link href="/courses">nationally recognised training courses</Link>.</Text>
      <Text>Members get access to additional food safety resources, including guides, templates, fact sheets, videos, food recalls, newsletters and more.</Text>
      <Link href="/membership/membership-program">AIFS Membership can also be purchased on its own. </Link>
    </IntroBox>
  </SectionContainer>;
};

const ShowCustomersYouCareSection = () => {
  return <SectionContainer className="col-span-3" id="show-customers-you-care-section">
    <Header3 className="pb-4">Show customers your business cares</Header3>
    <IntroBox imageSrc={ShowCustomersYouCareGraphic} alt="Show customers your business cares" layout={false}>
      <Text>With food poisoning incidents making front page news and horror stories exploding across social media, food safety is becoming increasingly important to customers.</Text>
      <Text>All students who complete a <Link href="/courses/food-safety-supervisor" className="font-semibold underline">Food Safety Supervisor</Link> course with AIFS receive an:</Text>
      <ul className="pb-4">
        <ListItem>Official Food Safety Card</ListItem>
        <ListItem>Official Food Safety Display Certificate</ListItem>
      </ul>

      <Text>{`The 'Serious About Food Safety' symbol on these items is recognised by customers throughout Australia.`}</Text>
      <Text>{`They're a great way to stand out from competitors as a business that cares.`}</Text>
    </IntroBox>
  </SectionContainer>;
};

export default Page;
