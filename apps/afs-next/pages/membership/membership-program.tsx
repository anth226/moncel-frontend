import { ReactNode } from 'react';
import NextLink from 'next/link';

import Layout from 'components/core/layout';
import { Divider, ListItem, IconCard, ExpandibleFAQ, IntroBox } from 'components/core/templates';
import { membershipNavigationData } from 'components/membership/membershipPagesData';
import { MembershipBackground } from 'components/membership';
import { Header3, Header4, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/membership/photo_membership_program.jpg';
import NewsLetterIcon from 'public/icons/icon_stroke_green_newsletter.svg';
import StickerIcon from 'public/icons/icon_stroke_green_sticker.svg';
import MegaphoneIcon from 'public/icons/icon_stroke_green_megaphone.svg';
import ResourceIcon from 'public/icons/icon_stroke_green_resources.svg';

import CertificateIcon from 'public/icons/icon_stroke_green_certificate.svg';
import ThumbsupIcon from 'public/icons/icon_stroke_green_thumbsup.svg';
import ProtectionIcon from 'public/icons/icon_stroke_green_protection.svg';
import ChecklistIcon from 'public/icons/icon_stroke_green_checklist.svg';
import ShieldIcon from 'public/icons/icon_stroke_green_shield.svg';
import HandshakeIcon from 'public/icons/icon_stroke_green_handshake.svg';
import LooseChangeIcon from 'public/icons/icon_stroke_green_loose_change.svg';
import PeopleIcon from 'public/icons/icon_stroke_green_people.svg';
import ThoughtBubbleIcon from 'public/icons/icon_stroke_green_thought_bubble.svg';
import SquareIconOne from 'public/icons/icon_stroke_green_square_num1.svg';
import ChecklistIcon2 from 'public/icons/icon_stroke_green_checklist_2.svg';

import Icon1 from 'public/icons/icon_stroke_green_circle_num1.svg';
import Icon2 from 'public/icons/icon_stroke_green_circle_num2.svg';

import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';
import { Courses } from 'data/courses';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  pathname: "membership/membership-program",
  displayPathname: "MEMBERSHIP/MEMBERSHIP PROGRAM",
  header: "Membership Program",
  subheader: "AIFS Membership gives you access to food safety resources, news and updates that protect and benefit you, your business and your customers.",
  navigation: membershipNavigationData,
  id: "membership-program-page-body-section",
  sidebarType: "checkout",
  checkout: {
    course: Courses.Membership,
    courseTitle: "AIFS Membership",
    price: "$99.95",
    memberPrice: "",
    showLogo: false,
    links: [
      { text: "WHAT'S INCLUDED", href: "#intro" },
      { text: "BENEFITS FOR FOOD WORKERS", href: "#workers" },
      { text: "BENEFITS FOR EMPLOYERS", href: "#employers" },
      { text: "HOW TO BECOME A MEMBER", href: "#membership" },
      { text: "COMMON QUESTIONS", href: "#common-questions" },
    ],
  },
};

const Page = () => {
  return (
    <Layout isCoursePage={true} pageTitle='AIFS Official Food Safety Membership Program | AIFS' metaDescription='AIFS membership gives you free access to food safety tools, credentials, support and updates that protect and benefit you, your business and your customers.'>
      <MembershipBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <WhatsIncluded />
          <Divider />
          <FoodWorkerBenefits />
          <Divider />
          <EmployerBenefits />
          <Divider />
          <BecomeAIFSMember />
          <Divider />
          <CommonQuestionsSection />
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
  return <SectionContainer className="col-span-3" id="section-membership-program-hero">
    <Header3 className="pb-4">Membership benefits with invaluable returns.</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="haccp-program-graphic">
      <Text>{`Ensure your business keeps food safety 'front of mind' with AIFS Membership for you and your employees.`}</Text>
      <Text>As an AIFS Member, you (and the business you work with) will be recognised by Health Inspectors and rewarded by customers for your professional approach to food safety.</Text>
      <Text>A 12-month Membership can be purchased for only $99.95/year. Or get it for free with any AIFS nationally recognised course.</Text>
    </IntroBox>
  </SectionContainer>;
};

const WhatsIncluded = () => {
  return <div className="col-span-3" id="intro">
    <Header3 className="pb-4">{`What's included in my membership?`}</Header3>
    <TwoCol>
      <IconCard
        imageSrc={NewsLetterIcon}
        title="Regular Newsletters"
      >
        <Text>{`So you're always up-to-date with the latest insights, news, events and information from the world of food safety.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={StickerIcon}
        title="Food Safety Decal"
      >
        <Text>{`Display it on the door of your business and show customers that you're 'Serious About Food Safety'.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ResourceIcon}
        title="Provide a business advantage"
      >
        <Text>{`Businesses can display the Food Safety Decal while you're employed and an active AIFS member.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={MegaphoneIcon}
        title={`Updates & Recalls`}
      >
        <Text>{`Be the first to know about changes to food safety legislation, food recalls and new compliance requirements.`}</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const FoodWorkerBenefits = () => {
  return <div className="col-span-3" id="workers">
    <Header3>Member benefits for food workers</Header3>
    <Header4 className="text-emperor pb-8">What can AIFS Membership offer me?</Header4>
    <TwoCol>
      <IconCard
        imageSrc={CertificateIcon}
        title="Advance in your career"
      >
        <Text>{`When you're the 'go-to' person for food safety in your workplace, managers notice.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ThumbsupIcon}
        title="Impress potential employers"
      >
        <Text>{`Your commitment to excellence and advancing your skills will set you apart from the competition.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ProtectionIcon}
        title="Provide a business advantage"
      >
        <Text>{`Businesses can display the Food Safety Decal while you're employed and an active AIFS member.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ChecklistIcon}
        title={`Manage food Safety with ease`}
      >
        <Text>{`Gain access to exclusive members-only resources to continually improve food safety in your workplace.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ShieldIcon}
        title={`Prevent food poisoning`}
      >
        <Text>{`By being an expert on food safety, you can protect customers from food-borne illness and other risks.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={HandshakeIcon}
        title={`Help people in need`}
      >
        <Text>{`AIFS donates meals to vulnerable people in the community by partnering with OzHarvest`}</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const EmployerBenefits = () => {
  return <div className="col-span-3" id="employers">
    <Header3>Member benefits for employers</Header3>
    <Header4 className="text-emperor pb-8">What can AIFS Membership do for my business?</Header4>
    <TwoCol>
      <IconCard
        imageSrc={LooseChangeIcon}
        title="Attract more customers"
      >
        <Text>{`Displaying our official 'Serious about Food Safety' Decal on your door gives potential customers peace of mind.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={PeopleIcon}
        title="Protect your customers"
      >
        <Text>{`Employing professional food workers with nationally recognised skillsets greatly reduces the risk of food-borne illness.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ShieldIcon}
        title="Safeguard your business"
      >
        <Text>{`With less risk of food safety incidents, you can save your business from fines, licence suspension, prosecution or closure.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ChecklistIcon2}
        title={`Be prepared for health inspections`}
      >
        <Text>{`When your employees are well-equipped to uphold high standards of hygiene and food safety, your business will always be 'inspection-ready'.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={ThoughtBubbleIcon}
        title={`Keep food safety front of mind`}
      >
        <Text>{`Use AIFS templates, checklists, posters and other resources to improve food safety in the workplace.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={SquareIconOne}
        title={`Stand out from your competition`}
      >
        <Text>{`Differentiate your business by showing customers how serious you are about your food and their safety.`}</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const BecomeAIFSMember = () => {
  return <div className="col-span-3" id="membership">
    <Header3 className="pb-4">How do I become an AIFS Member?</Header3>
    <Text className="pb-4">There are two ways to become an AIFS Member</Text>
    <TwoCol>
      <IconCard
        imageSrc={Icon1}
        title="With a Nationally Recognised Course by AIFS"
      >
        <Text>AIFS Membership is complimentary for 12 months when you register for an AIFS course:</Text>
        <ul className="checklist pb-4">
          <ListItem><NextLink href="/courses/food-handler-course">The AIFS Food Handler Course</NextLink></ListItem>
          <ListItem><NextLink href="/courses/food-safety-supervisor">The AIFS Food Safety Supervisor Course</NextLink></ListItem>
          <ListItem><NextLink href="/courses/nsw-recertification">The AIFS NSW Recertification Course</NextLink></ListItem>
        </ul>
        <Text>{`You'll`} gain access to our extensive library of members-only resources and updates, a Food Safety Decal, nationally recognised certification and a Food Safety Card.</Text>
      </IconCard>

      <IconCard
        imageSrc={Icon2}
        title="Purchase AIFS Membership"
      >
        <Text>An AIFS Membership can be purchased for only $99.95/year. </Text>
        <Text>{`You'll`} receive a {`'Serious About Food Safety Decal'`} and gain access to our entire library of food safety resources, including guides, templates, checklists, fact sheets and more. </Text>
        <Text>{`You'll`} also receive regular newsletters directly to your inbox to ensure {`you're`} always the first to know about a food safety issue that could affect your business. </Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const CommonQuestionsSection = () => {
  return <SectionContainer id="common-questions" className="flex flex-col">
    <Header3 className="pb-4">Common Questions</Header3>
    <TwoCol>
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">How long is AIFS Membership valid for?</p>
          <p>AIFS Memberships are valid for 12 months from the date membership is purchased or from the date of registration into any nationally recognised AIFS food safety course. </p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`During this time, you will have unlimited access to our entire collection of food safety resources, including ‘how-to’ guides, videos, templates, checklists and more.`}</p>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col gap-3 mb-3">
          <p className="font-semibold">What happens when my AIFS Membership expires?</p>
          <p>{`At the end of the membership period, you will be notified by email and given the option to purchase another 12 months of membership. `}</p>
        </div>
        }
        details={<div className="flex flex-col gap-3">
          <p>{`If you choose not to extend your membership, you will no longer be able to access the Resource Library.`}</p>
        </div>
        }
      />
    </TwoCol>
  </SectionContainer>

};


export default Page;
