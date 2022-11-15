import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { ListItem, IntroBox } from 'components/core/templates';
import { StudentsBackground } from 'components/students';
import { navigationData } from 'components/students/pagesData';
import { Header1, Header3, Link, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/students/photo_handbook.jpg';

import styles from './styles.module.scss';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'students-page-body',
  pathname: "students/participant-handbook",
  displayPathname: "FOR STUDENTS / PARTICIPANT HANDBOOK FOR FOOD SAFETY COURSES",
  header: <div>
    <Header1 className="text-teal">Participant Handbook for Food Safety Courses</Header1>
  </div>,
  subheader: "Whether you're enrolled in a food safety course at AIFS or thinking about training with us, you'll find all the information you need in our Participant Handbook.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Participant Handbook for Food Safety Courses | AIFS' metaDescription='Get all the information you need about training with AIFS, our policies, fees and more in our Participant Handbook.'>
      <StudentsBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
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
    <Header3 className="pb-4">A practical guide for all students</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="A practical guide for all students">
      <Text>Want to know how AIFS training can work for you?</Text>
      <Text>The AIFS Participant Handbook contains all the information you need covering:</Text>
      <ul className="pb-6">
        <ListItem>Pre Enrolment</ListItem>
        <ListItem>Training {`&`} Assessment</ListItem>
        <ListItem>Access, Equity {`&`} Discrimination</ListItem>
        <ListItem>Training Safety</ListItem>
        <ListItem>Unique Student Identifier (USI)</ListItem>
        <ListItem>Privacy and Access to Information</ListItem>
        <ListItem>Fees {`&`} Refunds</ListItem>
        <ListItem>Participant Support Services</ListItem>
        <ListItem>Complaints {`&`} Appeals</ListItem>
        <ListItem>Ceasing to Operate</ListItem>
      </ul>
      <a href="/docs/afs-participant-handbook.pdf" download>Click here to access the Participant Handbook PDF.</a>
    </IntroBox>
  </SectionContainer>;
};


export default Page;
