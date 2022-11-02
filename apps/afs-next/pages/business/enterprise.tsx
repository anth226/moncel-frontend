import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, IntroBox } from 'components/core/templates';
import { BusinessBackground } from 'components/business';
import { navigationData } from 'components/business/pagesData';
import { Header3, Link, Text } from 'components/core';
import { LogosCarousel } from 'components/core/Carousel';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/business/photo_enterprise.jpg';

import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'business-page-body',
  pathname: "business/enterprise",
  displayPathname: "INFORMATION FOR BUSINESS / ENTERPRISE SOLUTIONS",
  header: "Enterprise Solutions",
  subheader: "Protect your customers, brand and bottom line. Get fully compliant food safety training from the experts trusted by Australia's largest food companies.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout metaDescription="Protect your customers, brand and bottom line. Get fully compliant food safety training from the experts trusted by Australia's largest food companies." pageTitle='Food Safety Solutions for Enterprise Businesses | AIFS'>
      <BusinessBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <LogosSection />
          <Divider />
          <LegalRequirementsSection />
          <Divider />
          <ComplianceSection />
          <Divider />
          <RiskSection />
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
    <Header3 className="pb-4">You {`can't`} afford to risk food safety</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="business-food-safety-hero-graphic" >
      <Text>A food safety incident can have a crippling impact on a business. Just one employee not washing their hands properly can poison thousands of customers.</Text>
      <Text>With an expert team of food safety professionals, the Australian Institute of Food Safety can deliver:</Text>
      <ul className="checklist">
        <ListItem>compliance with all food safety training laws</ListItem>
        <ListItem>exceptional staff training</ListItem>
        <ListItem>ongoing support and development</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const LogosSection = () => {
  return <div className="col-span-3" id="section-logos">
    <Header3 className="pb-4">Trusted and recommended throughout Australia</Header3>
    <Text>Discover some of the companies that rely on AIFS to deliver their food safety training...</Text>
    <LogosCarousel />
  </div>
};

const LegalRequirementsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Food safety legal requirements you need to know</Header3>
    <Text className="pb-4">Food Safety is governed by two sets of legislation enforced at a local council level by Health Inspectors.</Text>
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

const ComplianceSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">What can happen if we {`don't`} comply with food safety laws?</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_closed_sign.svg"}
        title="Suspended or cancelled licence"
      >
        <Text>For serious offences, your food business licence may be suspended or cancelled, effectively closing your business.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_invoice.svg"}
        title="Significant fines"
      >
        <Text>Fines (penalty notices) may be issued for each offence committed. These can run into tens of thousands of dollars.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_legal_hammer.svg"}
        title="Prosecution"
      >
        <Text>For serious breaches, your employees, proprietors, managers and company directors could be charged, even jailed.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_speech_oval.svg"}
        title={`Added to a Name & Shame list`}
      >
        <Text>In some states, your business name will be included on a food safety {`'Name & Shame'`} list available to the public.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_licence.svg"}
        title="Prohibition or seizure orders"
      >
        <Text>When public health is at risk, your business may be forbidden to handle food and you may have food seized from your premises and destroyed.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_thumbsdown.svg"}
        title={`Brand & reputation damage`}
      >
        <Text>If a serious food safety incident occurs and is widely reported in the media, your business could struggle to recover its reputation.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const RiskSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">How AIFS helps you manage food safety risks?</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_checklist.svg"}
        title="Compliance-based training"
      >
        <Text>Our nationally recognised food safety training is approved to meet all federal, state and local government legislation in Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_factory.svg"}
        title="Industry relevant courses"
      >
        <Text>Tailored to specific food sectors: Hospitality, Retail, Food Processing, Health {`& Community, and Transport &`} Distribution.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_australia.svg"}
        title="Nationally Recognised Training"
      >
        <Text>Study once, work anywhere with training {`that's`} nationally recognised throughout Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_laptop.svg"}
        title={`Easy student management access`}
      >
        <Text>Through our online corporate portal you can bulk enrol employees, review invoices and more.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_member.svg"}
        title="Ongoing learning as AIFS members"
      >
        <Text>An AIFS Membership gives students unlimited access to food safety tools, resources and much more.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_thumbsdown.svg"}
        title={`Health Inspector ready credentials`}
      >
        <Text>Graduates will receive a Food Safety Card containing proof of training required during a food audit.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_megaphone.svg"}
        title="Training reminders and notifications"
      >
        <Text>Help employees stay on track of their training with automated course reminder notifications via email or SMS.</Text>
      </IconCard>

      <IconCard
        imageSrc={"/icons/icon_stroke_green_telephone.svg"}
        title={`Priority support and advice`}
      >
        <Text>Our team of food safety trainers are here to help simplify food safety compliance for your food business and staff.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

export default Page;
