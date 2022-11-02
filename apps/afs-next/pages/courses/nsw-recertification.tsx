import { ReactNode } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Layout from 'components/core/layout';
import Statistic from 'components/core/Statistic';
import { Divider, ListItem, IconCard, ImageBannerCard, CollapsibleTableCell, CollapsibleCellGroup, ExpandibleFAQ, IntroBox } from 'components/core/templates';
import { CoursesBackground, coursePageOverviewData } from 'components/courses';
import { Header1, Header3, Header5, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import { LogosCarousel } from 'components/core/Carousel';
import Testimonial from 'components/core/Testimonial';

import AIFSMembershipGraphic from 'public/courses/food-handler/fh-aifs-membership.jpg';
import FoodSafetyCardGraphic from 'public/courses/food-handler/fh-food-safety-card.jpg';
import BusinessOwnerGraphic from 'public/courses/nsw-recertification/business-owner.jpg';
import BinuHeadPic from 'public/courses/food-handler/testimonials/binu.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee.jpg';
import HospitalityGraphic from 'public/courses/food-safety-supervisor/hospitality-business.jpg';
import RetailGraphic from 'public/courses/food-safety-supervisor/retail-sector.jpg';

import { Courses } from 'data/courses';
import styles from './styles.module.scss';
import Community from 'components/courses/community';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  ...coursePageOverviewData,
  pathname: "courses/food-safety-supervisor",
  displayPathname: "FOOD SAFETY COURSES/FOOD SAFETY SUPERVISOR COURSE",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">Food Safety Supervisor</Text>
    <Header1 className="text-teal mb-2">NSW Recertification</Header1>
  </div>,
  subheader: `Renew your NSW Food Authority certificate quickly and easily with the Australian Institute of Food Safety.`,
  sidebarType: "checkout",
  checkout: {
    course: Courses.NSWRecertification,
    courseTitle: "NSW Recertification",
    price: "$199.95",
    memberPrice: "FREE",
    showLogo: true,
    links: [
      { text: "WHAT'S INCLUDED", href: "#course-inclusions" },
      { text: "WHAT OUR STUDENTS SAY", href: "#testimonials" },
      { text: "HELPING THE COMMUNITY", href: "#community" },
      { text: "COURSE OUTLINE", href: "#course-outline" },
      { text: "INDUSTRY SECTORS", href: "#industry-sectors" },
      { text: "COMMON QUESTIONS", href: "#common-questions" },
    ]
  },
};

const Page = () => {
  return (
    <Layout isCoursePage={true}>
      <CoursesBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <Section2 />
          <Divider />
          <CourseInclusionsSection />
          <Divider />
          <Section4 />
          <LogosSection />
          <Section5 />
          <Divider />
          <CommunitySection />
          <Divider />
          <CourseOutlineSection />
          <Divider />
          <IndustrySectorSection />
          <Divider />
          <CommonQuestionsSection />
        </>
      </RowsTemplate></CoursesBackground>
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
  return <SectionContainer className="col-span-3" id="hero-section">
    <IntroBox imageSrc="/courses/nsw-recertification/nsw-recertification.jpg" alt="courses-nsw-recertification-hero-graphic">
      <Text>Food safety regulations in NSW require food businesses in the hospitality and retail food service sector to appoint at least one trained Food Safety Supervisor. </Text>
      <Text>A Food Safety Supervisor is a person who:</Text>
      <ul className="pb-4">
        <ListItem>is trained to recognise and prevent risks associated with food handling in a retail food business</ListItem>
        <ListItem>holds a current NSW Food Authority certificate <strong>(no more than five years old)</strong></ListItem>
      </ul>

      <Text className="font-semibold">NSW Food Authority certificates expire after five years </Text>
      <Text>NSW Food Authority certificates expire five years from the date of issue. To be issued with a new certificate, you are required to renew your Food Safety Supervisor training. </Text>
      <Text className="font-semibold">Penalties for noncompliance </Text>
      <Text>The penalties for not holding a valid and compliant NSW Food Authority Certificate can be serious. If you do not renew, your food business may be in breach of NSW Food Safety regulations and subject to penalties and/or fines. </Text>

      <Text className="font-semibold">How to renew your NSW Food Authority certificate</Text>
      <Text>The renewal process is simple and can be completed quickly. The Australian Institute of Food Safety offers a recertification course that is approved by the NSW Food Authority and meets all the requirements for Food Safety Supervisor recertification in New South Wales.</Text>
      <Text>The renewal process is simple and can be completed quickly. The Australian Institute of Food Safety offers a recertification course that is approved by the NSW Food Authority and meets all the requirements for Food Safety Supervisor recertification in New South Wales.</Text>
      <Text>When you renew online with AIFS you will:</Text>
      <ul className="checklist">
        <ListItem>meet compliance requirements of all NSW councils</ListItem>
        <ListItem>be valid in NSW for five years</ListItem>
        <ListItem>complete your recertification faster</ListItem>
        <ListItem>enjoy the many benefits of AIFS Membership</ListItem>
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <div className="col-span-3" id="section-2">
    <div className={`${styles["courses"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
            title="Official NSW approved course"
          >
            <Text>Approved and accepted by local councils and Health Inspectors in New South Wales.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
            title="Finish in a few hours, or take your time"
          >
            <Text>Complete your Food Safety Supervisor recertification in just a few hours, or take your time.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_laptop.svg"}
            title="Study online, whenever you want"
          >
            <Text>Enjoy the convenience of doing your training anywhere, at any time of the day or night.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_stopwatch.svg"}
            title="Receive your documents fast"
          >
            <Text>{`We'll send your documents a few hours after course completion, or even faster if needed urgently.`}</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
            title="98% recommendation rate"
          >
            <Text>Feel confident taking an official AIFS course that 98% of students would recommend to a friend.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_australia.svg"}
            title="Nationally recognised"
          >
            <Text>Be sure of acceptance with a course {`that's`} recognised in NSW and throughout all of Australia.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_member.svg"}
            title="Get 12 months of free AIFS Membership"
          >
            <Text>Receive updates, tools, resources and more to promote and boost your food handling knowledge.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_trainer.svg"}
            title="Get the support you need"
          >
            <Text>Our qualified trainers are here to provide the support you need when you need it.</Text>
          </IconCard>

        </div>

      </div>
    </div>
  </div>;
};

const CourseInclusionsSection = () => {
  return <div className="col-span-3" id="course-inclusions">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>With AIFS, You Get More than Just a Training Course</Header3>
      <Text className={styles["subtitle"]}>Discover the complimentary member benefits for you and your food business</Text>
    </div>
    <div className="w-full grid items-start grid-cols-1 md:grid-cols-3 gap-8">
      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="AIFS Membership"
            description="A complimentary 12-month AIFS Membership is included with all AIFS nationally recognised accredited training courses."
            imageSrc={AIFSMembershipGraphic} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">Your membership includes food safety tools, resources and updates that benefit you, your business and your customers.</Text>
        </AccordionDetails>
      </Accordion>

      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-2" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="Food Safety Card"
            description="You'll receive a handy wallet-sized blue Food Safety Card that contains official proof of your food safety training."
            imageSrc={FoodSafetyCardGraphic} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">Just keep your card in your pocket at work, so {`you're`} always ready to show Health Inspectors during surprise food audits.</Text>
        </AccordionDetails>
      </Accordion>
      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="Business Signage"
            description="Receive the widely recognised 'Serious About Food Safety' window decal and display certificate."
            imageSrc={BusinessOwnerGraphic} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">{`Show customers that you take their health and safety seriously, and have the high level of training to do so.`}</Text>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>;
};

const Section4 = () => {
  return <div className="col-span-3" id="section-4">
    <div className="w-full flex flex-col items-center text-center">
      <Header3>Trusted and Recommended Throughout Australia</Header3>
      <Text className={styles["subtitle"]}>Relied on by the Australian food industry for a quality training experience</Text>
      <Header5 className="pt-4 pb-10 text-teal">Discover why our students love this course</Header5>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">98<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students would recommend this course to others</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">96<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students rate this course as good or excellent</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">10/10</Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students say that this food safety course is easy to use</Text>
        </Statistic>
      </div>
      <Header5 className="pt-10 text-teal leading-4">Trusted by thousands of companies</Header5>
    </div>
  </div>;
};

const LogosSection = () => {
  return <div className="col-span-3 border-y-[1px] border-mint py-4" id="section-logos">
    <LogosCarousel />
  </div>
};

const Section5 = () => {
  return <div className="col-span-3" id="testimonials">
    <Header5 className="pb-10 !text-teal w-full text-center">Trusted by thousands of food workers</Header5>
    <div className="flex flex-col md:flex-row gap-8">
      <Testimonial
        imageSrc={BinuHeadPic}
        author="Binu J"
        authorIntro="Melbourne VIC"
      >
        {`"It was simple to learn online. I found the assessment easy and the course very useful for food handling."`}
      </Testimonial>
      <Testimonial
        imageSrc={MichaelHeadPic}
        author="Michael O"
        authorIntro="Mudgee NSW"
      >
        {`"I liked the simplicity of the course, but most notable was the speed and help from the support team."`}
      </Testimonial>
      <Testimonial
        imageSrc={JaymeeHeadPic}
        author="Jaymee O"
        authorIntro="Scarsdale VI"
      >
        {`"I liked that the course was very well written and that the assessment was easy to follow."`}
      </Testimonial>
    </div>
  </div>
};

const CommunitySection = () => {
  return <div className="col-span-3" id="community">
    <Community />
  </div>
};


const CourseOutlineSection = () => {
  return <SectionContainer id="course-outline" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>Course Outline</Header3>
      <Text className={styles["subtitle"]}>Everything you need to renew your Food Safety Supervisor training, all in one course.</Text>
    </div>
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol in the NSW Recertification course, you have access to everything you need to be recognised as a qualified Food Safety Supervisor in New South Wales.</Text>
        <Text>With AIFS, there are:</Text>
        <ul className="checklist pb-4">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="font-semibold">NSW Food Authority Requirements</Text>
            <Text>To be nominated Food Safety Supervisor for a food premise in NSW, you must complete an NSW Food Authority approved Food Safety Supervisor course once every five years.</Text>
            <Text>AIFS is approved to deliver Food Safety Supervisor training and NSW Food Authority certificates on behalf of the NSW Food Authority.</Text>
            <Text>When your NSW Food Authority certificate is due to expire, you have 90 days to ensure you have completed your recertification.</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text>If your NSW Food Authority certificate has been expired for longer than 90 days, you will need to complete a full <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor</NextLink> course again.</Text>
            <Text>Ensuring your Food Safety Supervisor training is current is important to avoid potential fines or penalties. For that reason, as soon as you enrol, you have instant access to the course.</Text>
            <Text>As the training takes around 6 - 8 hours, some students sign up and complete the course on the same day.</Text>
            <Text className="font-semibold">Nationally Recognised Training</Text>
            <Text>AIFS is a Registered Training Organisation {`that's`} approved to deliver Food Safety Supervisor training across all food sectors throughout all of Australia.</Text>
            <Text>{`We're`} also:</Text>
            <ul className="mb-4">
              <ListItem>accepted by local councils Australia-wide</ListItem>
              <ListItem>recommended by Health Inspectors</ListItem>
            </ul>
            <Text>So you can feel secure in knowing your AIFS qualification is compliant and recognised.</Text>
          </div>
          }
        />

      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Outline</Text>}
            details={<>
              <Text>The course is split into 19 lessons, five case studies, one reading activity and an observer report. There are also two additional course resources for your information and reference. </Text>
              <Text>The lessons in the course are:</Text>
              <ul className="mb-4">
                <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
                <ListItem>Lesson 2 - Food Contamination {`&`} High-Risk Groups</ListItem>
                <ListItem>Lesson 3 - Biological Contamination</ListItem>
                <ListItem>Lesson 4 - Other Types of Contamination</ListItem>
                <ListItem>Lesson 5 - Allergen Management</ListItem>
                <ListItem>Lesson 6 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 7 - Maintaining Food Premises</ListItem>
                <ListItem>Lesson 8 - Hand Washing</ListItem>
                <ListItem>Lesson 9 - Personal Hygiene & Workplace Behaviour</ListItem>
                <ListItem>Lesson 10 - Illness {`&`} Onsite Injuries</ListItem>
                <ListItem>Lesson 11 - Time {`&`} Temperature Control</ListItem>
                <ListItem>Lesson 12 - Receiving {`&`} Storing Food</ListItem>
                <ListItem>Lesson 13 - Working with Food Safely</ListItem>
                <ListItem>Lesson 14 - Serving Food Safely</ListItem>
                <ListItem>Lesson 15 - Food Safety Programs</ListItem>
                <ListItem>Lesson 16 - Identifying Food Safety Hazards</ListItem>
                <ListItem>Lesson 17 - Monitoring, Controlling {`&`} Correcting Food Safety Hazards</ListItem>
                <ListItem>Lesson 18 - Reporting, Investigating {`&`} Recording Food Safety Breaches</ListItem>
                <ListItem>Lesson 19 - Food Safety Management</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Assessment Process</Text>}
            details={<>
              <Text className="font-semibold">Quizzes</Text>
              <Text>At the end of each lesson, {`there's`} a multiple choice quiz. You have 5 attempts at each quiz and must score 100% to move onto the next lesson. If you {`don't`} pass the quiz after 5 attempts, simply get in touch and {`we'll`} help you progress to the next section.</Text>
              <Text className="font-semibold">Case Studies</Text>
              <Text>There are five case studies in the course, including three key focus areas identified by the NSW Food Authority of safe egg handling, allergen management, and cleaning and sanitising practices. For each case study, {`you'll`} read a short scenario and then answer a multiple choice quiz, which is similar to the quizzes {`you've`} already completed at the end of the lessons.</Text>

              <Text className="font-semibold">Reading Activity</Text>
              <Text>There is a reading activity on Potentially Hazardous Foods. Simply download the PDF from the course page and then complete the multiple choice quiz. </Text>

              <Text className="font-semibold">NSW Certification</Text>
              <Text>In 2015, the NSW Food Authority announced some additional requirements for Food Safety Supervisor training. Three key focus areas were determined by the Food Authority - safe egg handling, allergen management and cleaning and sanitising practices.</Text>
              <Text>If you are in NSW, there is an additional case study for each of these focus areas.</Text>

              <Text className="font-semibold">Observer Report</Text>
              <Text>There are some things we {`can't`} see you doing through your computer - such as washing your hands or wearing the correct clothes for work. In order to comply with the government requirements for Food Safety Supervisor training, you do need to demonstrate that you can perform such tasks correctly. </Text>
              <Text>To make this as easy as possible for you, we allow you to be observed by a co-worker or supervisor. Simply follow the instructions on the course page and ask someone in your workplace (past or present) to complete the form.</Text>
              <Text className="font-semibold">Quality Assurance Process</Text>
              <Text>As part of our quality assurance process, we reserve the right to contact you or your nominated observer to conduct a competency conversation or verification of assessment prior to awarding certification. </Text>
            </>
            }
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Prerequisites</Text>}
            details={<>
              <Text>If you have a current or recently expired NSW Food Authority certificate you can simply enrol and get started.</Text>
              <Text className="font-semibold">NSW Food Authority Requirements</Text>
              <Text>To complete the recertification process as quickly as possible you must provide us a copy of your NSW Food Authority certificate and previous Statement of Attainment. </Text>
              <Text>Units of Competency that are accepted are SITXFSA005 - Use hygienic practices for food safety, {`‘SITXFSA101 – Use Hygienic Practices for Food Safety’ or ‘SITXFSA001 – Use Hygienic Practices for Food Safety’`}. The Statement of Attainment must also be less than 5 years old to be accepted.</Text>
              <Text>If you are unable to provide these documents, please contact us and {`we'll`} be happy to discuss your situation.</Text>
              <Text>You also have 90 days from the date your NSW Food Authority certificate expires to complete your recertification. If your certificate has been expired for longer than 90 days, simply enrol into our standard <NextLink href="/courses/food-safety-supervisor"><a className="link text-teal font-semibold underline">Food Safety Supervisor</a></NextLink> course.</Text>
              <Text>In the unlikely scenario you are unable to complete your recertification in time, please contact our support team for more information.</Text>

              <Text className="font-semibold">Language, Literacy and Numeracy</Text>
              <Text>Whilst there are no training prerequisites, there are some requirements around language, literacy and numeracy. In order to complete this course you should be able to perform everyday tasks such as:</Text>
              <ul className="pb-4">
                <ListItem>Using an instant messenger tool</ListItem>
                <ListItem>Using email at work</ListItem>
                <ListItem>Responding to customer complaints</ListItem>
                <ListItem>Following a recipe</ListItem>
              </ul>
              <Text>If you have any concerns about the skills required to participate in this course, please contact us and {`we'll`} be happy to discuss your situation.</Text>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Technical Requirements</Text>}
            details={<>
              <Text>You need to make sure that you have the following in order to be able to complete the Food Safety Supervisor course:</Text>
              <Text className="font-semibold">1. A modern web browser</Text>
              <Text>At AIFS we use some of the latest eLearning technologies to deliver the courses. You will need to have a modern web browser to view and complete the course (Google Chrome is recommended), and {`it's`} important that you have Javascript enabled.</Text>
              <Text className="font-semibold">2. An email address</Text>
              <Text>During the registration process, we will ask you for your email address. This is a mandatory requirement for you to be able to access our systems. Email addresses cannot be shared by students.</Text>
              <Text className="font-semibold">3. Adobe PDF Reader or Adobe Acrobat</Text>
              <Text>Some of the forms that you need to complete (such as the Observer Report) are in PDF format. Ensure that you have the <NextLink href="https://get.adobe.com/reader/"><a target="_blank">latest version of Adobe PDF Reader.</a></NextLink></Text>
              <Text>AIFS courses work on most computers, laptops, tablets and mobile devices.</Text>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Preview</Text>}
            details={<>
              <Text>Click on the {`'Play'`} button below to watch a preview of the Food Handler course.</Text>
              <div dangerouslySetInnerHTML={{ __html: `<script src="https://fast.wistia.com/embed/medias/6fg1h2nf6l.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:75.1% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_6fg1h2nf6l seo=false videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/6fg1h2nf6l/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>` }} />
            </>}
            detailsClasses={{ root: 'p-4' }} />
        </CollapsibleCellGroup>
      </div>
    </div>
  </SectionContainer>
};

const IndustrySectorSection = () => {
  return <SectionContainer id="industry-sectors" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>Be Trained for Your Food Industry Sector</Header3>
      <Text className={styles["subtitle"]}>Develop expert skills with sector-specific Food Safety Supervisor training</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Hospitality Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Hospitality businesses prepare and serve food for customers to consume in house.</Text>
              <Image className="float-right col-span-1" src={HospitalityGraphic} width={150} height={84} layout="fixed" alt="industry-sector-hospitality-graphic" />
            </div>
              <Text>The unit of competency awarded for this course is:</Text>
              <ul className="pb-4">
                <ListItem>SITXFSA006 Participate in safe food handling practices</ListItem>
              </ul>
              <Text className="italic">Note: You will also be awarded credit transfer for {`'SITXFSA005 - Use hygienic practices for food safety'`} from your previous Statement of Attainment in order to meet national requirements for Food Safety Supervisor training.</Text>
            </>
            }
            accordionProps={{ expanded: true }}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Retail Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="pb-3 flex-none flex-0 col-span-1">Food retail businesses prepare and sell food to customers for consumption elsewhere.</Text>
              <Image className="float-right col-span-1" src={RetailGraphic} width={150} height={84} layout="fixed" alt="industry-sector-retail-graphic" />
            </div>
              <Text>The unit of competency awarded for Retail is:</Text>
              <ul>
                <ListItem>SIRRFSA001 Handle food safely in a retail environment</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: 'p-4' }} />
        </CollapsibleCellGroup>
      </div>
      <div className="flex flex-col">

        <ExpandibleFAQ
          summary={<>
            <Text className="font-semibold">Training for food sectors</Text>
            <Text>Food Safety Supervisor training differs from sector to sector.</Text>
            <Text>When you complete your NSW Recertification course, {`you'll`} receive both a NSW Food Authority certificate and Statement of Attainment.</Text>
            <Text>The Statement of Attainment lists the units of competency {`you've`} attained. Different food sectors have different units.</Text>
          </>}
          details={<>
            <Text className="font-semibold">How do I select my food sector?</Text>
            <Text>Simply enrol in the Food Safety Supervisor course and complete your student registration. </Text>
            <Text>{`During registration, you'll provide contact information for a nominated observer and select your food sector from a dropdown menu.`}</Text>
            <Text>{`The New South Wales Food Authority recognises the Hospitality & Retail sectors only. When completing your registration, you will only have the option to choose one of these sectors. `}</Text>
            <Text>{`The sector you choose determines which Observer Report will be issued and the units of competency that will be displayed on your Statement of Attainment upon completion of your course. `}</Text>
            <Text className="italic">If you are unsure which food sector you need to be recognised in, please contact your local council to confirm prior to completing your student registration.</Text>
          </>} />
      </div>
    </div>
  </SectionContainer>;
};

const CommonQuestionsSection = () => {
  return <SectionContainer id="common-questions" className="flex flex-col">
    <div className="w-full pb-8 flex flex-col items-center">
      <Header3>Common Questions</Header3>
      <Text className={styles["subtitle"]}>Learn more about what our students ask about this course</Text>
    </div>
    <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-8 gap-y-4">
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">How long does the course take to complete?</Text>
          <Text>The online lessons, multiple choice quizzes and case studies take most people an average of six to eight hours to complete.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>With the Observer Report and other forms that may need to be completed, the total time for the course is typically a couple of hours more.</Text>
          <Text>However, everyone learns at a different pace. As this is a refresher course, {`it's`} likely {`you'll`} already be familiar with much of the course content.</Text>
          <Text>Some AIFS students enrol, complete the course, and receive their Statement of Attainment all on the same day.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">How do I enrol in the course?</Text>
          <Text>{`That's easy! Simply click on the blue 'Start Online Now' button on this page and follow the prompts. You'll be enrolled and ready to start in just a few minutes.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>All you need to do is supply some basic details (like your name and address) and your credit/debit card information. You will also need a current or expired (less than 90 days) NSW Food Authority certificate. </Text>
          <Text>If {`you'd`} prefer to enrol over the phone, {`that's`} no problem. Just give us a call on 1300 797 020 and {`we'll`} help you to get started.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Is this course accepted as recertification in NSW?</Text>
          <Text>Yes, this is the course you need to complete to renew your Food Safety Supervisor training if your NSW Food Authority certificate is due to expire.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>When you complete the course, {`we'll`} issue you with a Statement of Attainment containing details of the the units of competency {`you've`} obtained. You will also get an NSW Food Authority certificate valid for five years. </Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Can AIFS issue NSW Food Authority certificates?</Text>
          <Text>Yes, the Australian Institute of Food Safety is approved to deliver Food Safety Supervisor training and certificates on behalf of the NSW Food Authority.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>This means that when you complete the course, {`we'll`} issue you with the NSW Food Authority certificate, allowing you to practise as a Food Safety Supervisor within NSW.</Text>
          <Text>The NSW Food Authority certificate is valid for five years. </Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">When will I get my new certificate?</Text>
          <Text>Our assessors work full-time Monday to Friday and often process Statement of Attainments and NSW Food Authority certificate within a few hours of students successfully completing the course.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>That means that many of our students receive their electronic version of their Statement of Attainment via email on the day that they sucessfully complete their course, and paper copies of their Statement of Attainment and NSW Food Authority certificate via post a few days later.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">What if my certificate has expired?</Text>
          <Text>The NSW Food Authority requires that you complete your NSW Food Safety Supervisor recertification course within 90 days of your previous {`certificate's`} expiry.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>If your certificate expired more than 90 days ago, this means you will need to complete the full <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor</NextLink> course for NSW again. Please contact our support team for more information.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Do I need to go somewhere for an exam?</Text>
          <Text>No, you {`don't`} need to go anywhere. You can complete the entire course within the comfort of your own home and workplace, at a time that suits you.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>You simply complete online multiple choice quizzes at the end of each lesson, and also request someone {`you've`} worked with (past or present) to complete an Observer Report about tasks that{` they've`} already seen you doing.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Where can I learn more?</Text>
          <Text>The Australian Institute of Food Safety provides comprehensive information about nationally recognised food safety training, as well as general food safety information, in our blog, news and FAQ sections. </Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>If you still {`can't`} find what you need then get in touch via email or phone and {`we'll`} be happy to help.</Text>
        </div>
        }
      />
    </div>
  </SectionContainer>
};



export default Page;
