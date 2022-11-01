import { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';

import Layout from 'components/core/layout';
import { Divider, IconCard, IntroBox } from 'components/core/templates';
import { StudentsBackground } from 'components/students';
import { navigationData } from 'components/students/pagesData';
import { Header1, Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/students/photo_food_card.jpg';

import FSCardFont from 'public/students/food-safety-card-blue-front-highlight.png';
import FSCardBack from 'public/students/food-safety-card-green-front-highlight.png';
import FHCourseIcon from 'public/icons/icon_stroke_green_fh.svg';
import FSSCourseIcon from 'public/icons/icon_stroke_green_FSS.svg';

import styles from './styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'students-page-body',
  pathname: "students/food-safety-card",
  displayPathname: "FOR STUDENTS / FOOD SAFETY CARD",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-4">Food Safety Card</Header1>
  </div>,
  subheader: "Keep your AIFS Food Safety Card in your wallet to prove to Health Inspectors that you meet all legal requirements for food safety training.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='The Official Food Safety Card | Australia | AIFS' metaDescription='Keep your AIFS Food Safety Card in your wallet to prove to Health Inspectors that you meet all legal requirements for food safety training.'>
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

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className} ${styles['students']}`} id={id}>{children}</div>;

const HeroSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">Food safety credentials when you need them</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="students-food-card-hero-graphic">
      <Text>As a food worker, you never know when Health Inspectors might conduct a surprise food audit on your workplace.</Text>
      <Text>The official AIFS Food Safety Card makes it easy to prove that you meet your legal food safety training requirements.</Text>
      <Text>{`You'll receive a complimentary card when you complete one of our nationally recognised food safety courses.`}</Text>
    </IntroBox>
  </SectionContainer>;
};

const BenefitsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Official, safe and recognised all over Australia</Header3>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_soa.svg"}
        title="Proof of your training"
      >
        <Text>Includes your Statement of Attainment - proof you have the right training to be a Food Handler or Food Safety Supervisor.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_checkmark_box_stroke_tick.svg"}
        title="Health Inspector ready"
      >
        <Text>With your convenient wallet sized card in your pocket at work, {`you'll`} always be ready for surprise food audits.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_australia.svg"}
        title="Accepted Australia-wide"
      >
        <Text>AIFS is a Registered Training Organisation which means that our Food Safety Cards are nationally recognised.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_lock.svg"}
        title="Security guaranteed"
      >
        <Text>{`Food Safety Cards can't be replicated like paper, and contain unique ID information that can be validated on demand.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
        title="Blue and green cards"
      >
        <Text>Feel confident taking an AIFS course that 100% of students would recommend to a friend.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_australia.svg"}
        title="Recognised throughout Australia"
      >
        <Text>Be sure of acceptance with a course {`that's`} recognised throughout all of Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member_card.svg"}
        title="Blue and green cards"
      >
        <Text>{`When you complete Food Handler training you'll get a Blue Card, after completing Food Safety Supervisor training you'll receive a Green Card.`}</Text>
      </IconCard>
      <IconCard
        imageSrc={"/laws-requirements/role/icon_stroke_green_trainer.svg"}
        title="No extra charge"
      >
        <Text>Food Safety Cards are sent to you at no extra charge upon completion of the AIFS Food Handler or Food Safety Supervisor course. </Text>
      </IconCard>
    </TwoCol>
  </div>;
};

const TableComparisonSection = () => {
  return <div className="col-span-3" id="course-inclusions">
    <Header3 className="pb-4">Food Safety Card Comparison</Header3>
    <table className={`${styles["comp-table"]}`}>
      <thead>
        <tr>
          <th scope="col" className="w-[400px] md:w-[20%]">&nbsp;</th>
          <th scope="col" className="w-[400px] md:w-[40%]">
            <h3>Food Handler Card</h3>
          </th>
          <th scope="col" className="w-[400px] md:w-[40%]">
            <h3>Food Safety Supervisor Card</h3>
          </th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>
            <h3>&nbsp;</h3>
          </td>
          <td><Image alt="blue food safety card" height={187} src={FSCardFont} width={287} layout="fixed" /></td>
          <td><Image alt="Green Food Safety Supervisor Card" height={187} src={FSCardBack} width={287} layout="fixed" /></td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Who is this Food Safety Card for?</h3>
          </td>
          <td>Designed for Food Handlers - anyone who prepares, handles or serves food as part of their day-to-day job.</td>
          <td>Designed for Food Safety Supervisors, who need to undertake more comprehensive food safety training than Food Handlers.</td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Legal Requirements</h3>
          </td>
          <td>All employees who prepare, handle or serve food must undertake food safety training to meet the federal requirements under Food Safety Standard 3.2.2.</td>
          <td>At least&nbsp;<strong>one Food Safety Supervisor per business i</strong>s required to meet state specific legislation (QLD, NSW, VIC, ACT).&nbsp;Recommended in other states/territories.</td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">How do I get this Card?</h3>
          </td>
          <td>You will be automatically sent this card once you successfully complete the Food Handler course.</td>
          <td>You will be automatically sent this card once you successfully complete a&nbsp;Food Safety Supervisor or NSW Recertification course.</td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Recognition</h3>
          </td>
          <td>Nationally recognised. Your Statement of Attainment is printed on the back of the card and is accepted as proof of training throughout Australia.</td>
          <td>Nationally recognised. Your Statement of Attainment is printed on the back of the card and is accepted as proof of training throughout Australia.</td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Cost</h3>
          </td>
          <td>This card comes at no additional cost upon completion of the Food Handler course.</td>
          <td>This card comes at no additional cost upon completion of a&nbsp;Food Safety Supervisor or NSW Recertification course.</td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Industries</h3>
          </td>
          <td>Applicable to Food Handlers working in any industry.</td>
          <td>
            Applicable to Food Safety Supervisors working in:
            <ul>
              <li>Retail</li>
              <li>Hospitality</li>
              <li>Health &amp; Community</li>
              <li>Food Processing</li>
              <li>Transport &amp; Distribution</li>
            </ul>
          </td>
        </tr>
        <tr>
          <td>
            <h3 className="font-semibold">Associated Course</h3>
          </td>
          <td><a href="/courses/food-handler-course" target="_blank" title="AIFS Food Handler course">Click here to learn more about the Food Handler course.</a></td>
          <td><a href="/courses/food-safety-supervisor" target="_blank" title="AIFS Food Safety Supervisor course">Click here to learn more about the Food Safety Supervisor course.</a></td>
        </tr>
      </tbody>
    </table>
  </div>;
};

const HowToGetSection = () => {
  return <SectionContainer id="how-to-get">
    <Header3 className="pb-4">How do I get a Food Safety Card?</Header3>
    <Text className="pb-4">Food Safety Cards are provided to all students who complete a nationally recognised course with AIFS including:</Text>
    <TwoCol>
    <IconCard
        imageSrc={FHCourseIcon}
        title="Food Handler Course"
      >
        <Text>A short online course to meet food worker training requirements. Suitable for anyone who will handle, prepare or store food in the workplace.</Text>
        <Text><NextLink href="/courses/food-handler-course">Learn more about this course.</NextLink></Text>
      </IconCard>
      <IconCard
        imageSrc={FSSCourseIcon}
        title="Official AIFS Food Handler Course"
      >
        <Text>An online course to meet legislation in NSW, QLD, VIC and ACT. All food businesses in these states need a qualified Food Safety Supervisor on staff.</Text>
        <Text><NextLink href="/courses/food-safety-supervisor">Learn more about this course.</NextLink></Text>
      </IconCard>
    </TwoCol>
  </SectionContainer>;
}



export default Page;
