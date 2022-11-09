import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, IntroBox } from 'components/core/templates';
import { BusinessBackground } from 'components/business';
import { navigationData } from 'components/business/pagesData';
import { Header3, Link, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/business/photo_small_business.jpg';

import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'business-page-body',
  pathname: "business/small-business",
  displayPathname: "INFORMATION FOR BUSINESS / SMALL BUSINESS SOLUTIONS",
  header: "Small Business Solutions",
  subheader: "Confused about food safety requirements? Get expert training and help from AIFS, the trusted food safety partner to thousands of Australian small businesses.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Food Safety Solutions and Courses for Small Businesses | AIFS' metaDescription='Confused about food safety requirements? Get expert training and help from AIFS, the trusted food safety partner to thousands of Australian small businesses.'>
      <BusinessBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <LegalRequirementsSection />
          <Divider />
          <HowWeCanHelpSection />
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
    <Header3 className="pb-4">Be compliant, food safe and successful</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="Be compliant, food safe and successful">
      <Text>Finding time to understand complex food safety training requirements and laws can be hard when you’re busy running or setting up a small food business.</Text>
      <Text>At AIFS, we provide you and your staff with the training, support and tools you need to quickly:</Text>
      <ul className="checklist">
        <ListItem>comply with state and federal requirements</ListItem>
        <ListItem>protect your customers and livelihood</ListItem>
        <ListItem>attract more business through the door</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const LegalRequirementsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Food safety legal requirements you need to know</Header3>
    <Text className="pb-4">When you operate a business that creates or sells food, you need to adhere to two sets of legislation. Both are enforced at a local council level by Health Inspectors.</Text>
    <TwoCol>
      <IconCard
        imageSrc={"/laws-requirements/icon_stroke_green_checkmark_australia.svg"}
        title={`Federal laws & Requirements`}
      >
        <Text>Governed by Food Standards Australia New Zealand (FSANZ).</Text>
        <Text>Federal law states that anyone who works with food must be trained in certain aspects of food safety at a level appropriate to their role.</Text>
        <Text>The official AIFS Food Handler Course meets these requirements.</Text>
        <Link href="/courses/food-handler-course">Learn more about this course here</Link>
      </IconCard>
      <IconCard
        imageSrc={"/laws-requirements/icon_stroke_green_checkmark_australia.svg"}
        title="State legislation and requirements"
      >
        <Text>{`Each state has it's own Food Safety Act that you need to adhere to.`}</Text>
        <Text>{`Legislation is strictest in NSW, QLD, VIC and ACT where it's mandatory to have a fully trained Food Safety Supervisor at every business location.`}</Text>
        <Text>The official AIFS Food Safety Supervisor Course meets these requirements.</Text>
        <Link href="/courses/food-safety-supervisor">Learn more about this course here</Link>
      </IconCard>
    </TwoCol>
  </div>;
};

const HowWeCanHelpSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">How the AIFS team can help you</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_australia.svg"}
        title="Official Govt approved training"
      >
        <Text>High quality staff training accepted by local Councils and Health Inspectors in all states of Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_laptop.svg"}
        title="Easy online management access"
      >
        <Text>Our online business portal makes it quick and easy to bulk enrol employees and review past invoices.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member.svg"}
        title="Free membership benefits"
      >
        <Text>A 12-month complimentary AIFS Membership, including business food safety signage, is provided with all of our nationally recognised training courses.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member_card.svg"}
        title="Health Inspector ready credentials"
      >
        <Text>Students who complete AIFS training receive a Food Safety Card with all the details needed for a food safety audit.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_telephone.svg"}
        title="Priority support and advice"
      >
        <Text>Our team of food safety trainers are passionate about simplifying food safety compliance for your food business and staff.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_megaphone.svg"}
        title="Training reminders and notifications"
      >
        <Text>Help employees stay on track of their training with automated course reminder notifications via email and SMS.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

export default Page;
