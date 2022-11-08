import { ReactNode } from 'react';
import NextImage from 'next/image';

import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, IntroBox } from 'components/core/templates';
import { BusinessBackground } from 'components/business';
import { navigationData } from 'components/business/pagesData';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/business/photo_business_accounts.jpg';
import TickIcon from 'public/icons/icon_solid_green_tick.svg';
import CrossIcon from 'public/icons/icon_solid_green_cross.svg';

import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'business-page-body',
  pathname: "business/business-accounts",
  displayPathname: "INFORMATION FOR BUSINESS / BUSINESS ACCOUNTS",
  header: "Business Accounts",
  subheader: "The smart, time-saving way for Australian businesses and organisations to manage training for multiple employees and ensure compliance with food safety laws.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Food Safety Training for Business Accounts | AIFS' metaDescription='Business accounts enable bulk enrolments, student reporting and monthly invoicing. Discover how an AIFS business account can help you.'>
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
    <Header3 className="pb-4">Manage your food safety training with ease</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="Manage your food safety training with ease">
      <Text>At AIFS, we help busy food businesses by taking the complexity and confusion out of staff food safety training.</Text>
      <Text>As a Business Account client you can quickly and easily:</Text>
      <ul className="checklist">
        <ListItem>enrol multiple employees in courses</ListItem>
        <ListItem>get priority support</ListItem>
        <ListItem>opt for monthly invoicing</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const LegalRequirementsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Benefits of an AIFS business account</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_speech_round.svg"}
        title={`Have your own account manager`}
      >
        <Text>A dedicated account manager who knows you and your staff, and understands any special needs that you have for your business.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_australia.svg"}
        title="Be compliant and food safety skilled"
      >
        <Text>Our high quality training meets all state and federal requirements and accepted by local Councils and Health Inspectors in all states of Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_classroom.svg"}
        title="Get the support you need"
      >
        <Text>Our qualified trainers are here to provide the support your employees need how and when they need it.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_laptop.svg"}
        title="Easily manage your business"
      >
        <Text>Our online portal makes it quick and easy to bulk enrol employees, review invoices and more.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_megaphone.svg"}
        title="Training reminders and notifications"
      >
        <Text>Help employees stay on track of their training with automated course reminders via email and SMS notifications.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_invoice.svg"}
        title="Opt for simple monthly billing"
      >
        <Text>AIFS provides monthly billing options for approved corporate clients - a single invoice for all employees enrolled over a 30 day period.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member.svg"}
        title="Benefit with free AIFS Membership"
      >
        <Text>A 12-month complimentary AIFS Membership, including business food safety signage, is provided with all of our nationally recognised training courses.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member_card.svg"}
        title="Health Inspector ready credentials"
      >
        <Text>Students who complete AIFS training receive a Food Safety Card with all the details needed for a food safety audit.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const ICON_SIZE = 20;
const HowWeCanHelpSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">{`Choose the account that's right for you`}</Header3>
    <Text>AIFS Business Accounts are ideal if your business or organisation needs to regularly enrol multiple students. If you only need to train one person, we recommend a regular Individual (Student) Account.</Text>
    <table className={`w-full ${styles["comp-table"]} ${styles["students"]}`}>
      <thead>
        <tr>
          <th scope="col">&nbsp;</th>
          <th scope="col">
            <h3>Business Account</h3>
          </th>
          <th scope="col">
            <h3>Individual Account</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Number of Students</td>
          <td className="text-center">Unlimited</td>
          <td className="text-center">1</td>
        </tr>
        <tr>
          <td>12 Months of Free AIFS Membership</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
        <tr>
          <td>Email and Phone Support	</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
        <tr>
          <td>Priority Support</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={CrossIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
        <tr>
          <td>Custom Student Management Reports</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={CrossIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
        <tr>
          <td>Bulk Enrol Multiple Employees</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={CrossIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
        <tr>
          <td>Monthly Billing</td>
          <td className="text-center"><NextImage src={TickIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
          <td className="text-center"><NextImage src={CrossIcon} height={ICON_SIZE} width={ICON_SIZE} layout="fixed" /></td>
        </tr>
      </tbody>
    </table>
  </div>;
};

export default Page;
