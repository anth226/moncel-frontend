import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { StudentsBackground } from 'components/students';
import { navigationData } from 'components/students/pagesData';
import { Header1, Header3, Link, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import styles from 'pages/students/styles.module.scss';
import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'students-page-body',
  pathname: "forms",
  displayPathname: "FOR STUDENTS / STUDENT FORMS FOR FOOD SAFETY COURSES",
  header: <div>
    <Header1 className="text-teal mb-4">Student Forms for Food Safety Courses</Header1>
  </div>,
  subheader: "Need to complete an AIFS form? You're in the right place. Explore our full library of student forms here.",
  navigation: navigationData,
};

const Page = () => {
  return (
    <Layout pageTitle='Student Forms for Food Safety Courses | AIFS' metaDescription="Need to complete an AIFS form? You're in the right place. Explore our full library of student forms here.">
      <StudentsBackground><RowsTemplate {...TemplateData}>
        <>
          <Main />
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

interface FormInfoProps {
  header: string;
  body: string;
  formLinkRef: string;
  formLinkText: string;
}

const FormInfo = ({ header, body, formLinkRef, formLinkText }: FormInfoProps) => <div className="flex flex-col w-full gap-2">
  <Header3>{header}</Header3>
  <Text>{body}</Text>
  <Link href={formLinkRef} target="_blank">{formLinkText}</Link>
</div>;

const Main = () => {
  return <SectionContainer className="col-span-3" id="forms-main-section">
    <Text className="col-span-3 pb-4">Choose the form you wish to download from the list below:</Text>
    <TwoCol>
      <FormInfo
        header="Participant Handbook"
        body="This handbook should be used by a student to consent to AIFS disclosing their personal information (e.g. Name, Student ID, Email Address) to any representative nominated by a student."
        formLinkText="Click to download this handbook"
        formLinkRef="/docs/afs-participant-handbook.pdf"
      />
      <FormInfo
        header="Information Release Form"
        body="This form should be used by a student to consent to AIFS disclosing their personal information (e.g. Name, User ID, Email Address) to any representative nominated by a student."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f1-afs-information-release.pdf"
      />
      <FormInfo
        header="Complaints Form"
        body="This form may be used when a student wishes to submit a request for credit for units of competency and/or modules undertaken through previous study. Supporting documentation will be required to substantiate the request."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f5-afs-complaints.pdf"
      />
      <FormInfo
        header="National Recognition Application Form"
        body="This form should be used by a student who wishes for reconsideration of an unfavourable decision or finding from AIFS. Your appeal should contain all necessary information as well as any supporting evidence.            "
        formLinkText="Click to download this form"
        formLinkRef="/docs/f3-afs-national-recognition-application.pdf"
      />
      <FormInfo
        header="Appeals Form"
        body="This form should be used by a student wishing to submit a formal complaint to AIFS. Your complaint should contain all necessary information as well as any supporting evidence."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f8-afs-appeals.pdf"
      />
      <FormInfo
        header="Refund Request Form"
        body="This form should be completed and submitted by a student when requesting a refund of fees associated with a course enrolment or product purchase."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f7-afs-refund-request.pdf"
      />
      <FormInfo
        header="SOA Reissue Request"
        body="This form should be used by a student when requesting a reissue of a Statement of Attainment that has been issued by AIFS."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f16-afs-reissue-request.pdf"
      />
      <FormInfo
        header="RPL Application Form"
        body="This form should be used to submit a request for Recognition of Prior Learning (RPL) for the assessment of a learners competence. Supporting documentation may be required to substantiate the request."
        formLinkText="Click to download this form"
        formLinkRef="/docs/f9-afs-rpl-application.pdf"
      />
    </TwoCol>
  </SectionContainer>;
};


export default Page;
