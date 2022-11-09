import { ReactNode, useRef, useEffect } from 'react';
import Image from 'next/image';
import NextLink from 'next/link';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import useIsOnScreen from 'lib/useIsOnScreen';

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
import FHRecallAlerts from 'public/courses/nsw-recertification/business-owner.jpg';
import BinuHeadPic from 'public/courses/food-handler/testimonials/binu.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee.jpg';
import HospitalityGraphic from 'public/courses/food-safety-supervisor/hospitality-business.jpg';
import RetailGraphic from 'public/courses/food-safety-supervisor/retail-sector.jpg';
import FoodProcessingGraphic from 'public/courses/food-safety-supervisor/food-processing-sector.jpg';
import HealthCommunityGraphic from 'public/courses/food-safety-supervisor/health-community-sector.jpg';
import TransportDistributionGraphic from 'public/courses/food-safety-supervisor/transport-sector.jpg';
import WhatIsFSS from 'public/courses/food-safety-supervisor/afs-fss-hero.jpg';

import Community from 'components/courses/community';
import { Courses } from 'data/courses';
import styles from './styles.module.scss';

const ANCHOR_IDS = {
  courseInclusions: "course-inclusions",
  testimonials: "testimonials",
  courseOutline: "course-outline",
  industrySectors: "industry-sectors",
  what: "what",
  commonQuestions: "common-questions",
};

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  ...coursePageOverviewData,
  pathname: "courses/food-safety-supervisor",
  displayPathname: "FOOD SAFETY COURSES/FOOD SAFETY SUPERVISOR COURSE",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">Food Safety Supervisor Course</Header1>
  </div>,
  subheader: `Meet your legal requirements and protect your customers with the course recommended by Health Inspectors and approved by councils.`,
  sidebarType: "checkout",
  checkout: {
    course: Courses.FoodSafetySupervisor,
    courseTitle: "Food Safety Supervisor Online Course",
    price: "$199.95",
    memberPrice: "FREE",
    showLogo: true,
    links: [
      { text: "WHAT'S INCLUDED", href: `#${ANCHOR_IDS.courseInclusions}` },
      { text: "WHAT OUR STUDENTS SAY", href: `#${ANCHOR_IDS.testimonials}` },
      { text: "COURSE OUTLINE", href: `#${ANCHOR_IDS.courseOutline}` },
      { text: "INDUSTRY SECTORS", href: `#${ANCHOR_IDS.industrySectors}` },
      { text: "WHAT IS A FOOD SAFETY SUPERVISOR?", href: `#${ANCHOR_IDS.what}` },
      { text: "COMMON QUESTIONS", href: `#${ANCHOR_IDS.commonQuestions}` },
    ]
  },
};

const Page = () => {
  const courseInclusionsScrollRef = useIsOnScreen(ANCHOR_IDS.courseInclusions);
  const testimonialsScrollRef = useIsOnScreen(ANCHOR_IDS.testimonials);
  const courseOutlineScrollRef = useIsOnScreen(ANCHOR_IDS.courseOutline)
  const industrySectorsScrollRef = useIsOnScreen(ANCHOR_IDS.industrySectors)
  const whatIsSectionRef = useIsOnScreen(ANCHOR_IDS.what);
  const commonQuestionsScrollRef = useIsOnScreen(ANCHOR_IDS.commonQuestions);

  useEffect(() => {
    const newHashStr = courseInclusionsScrollRef || testimonialsScrollRef || courseOutlineScrollRef || industrySectorsScrollRef || whatIsSectionRef || commonQuestionsScrollRef;

    if(newHashStr) window.location.hash = `#${newHashStr}`;
  }, [courseInclusionsScrollRef, testimonialsScrollRef, courseOutlineScrollRef, industrySectorsScrollRef, whatIsSectionRef, commonQuestionsScrollRef]);

  return (
    <Layout isCoursePage={true} pageTitle='Food Safety Supervisor Course | Online Courses Available | AIFS' metaDescription='The Official AIFS Food Safety Supervisor Course. Nationally Recognised. Valid in all states and available for all food sectors. 100% online. Digital Statement of Attainment.'>
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
          <CourseOutlineSection />
          <Divider />
          <IndustrySectorSection />
          <Divider />
          <WhatIsSection />
          <Divider />
          <CommunitySection />
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
    <IntroBox
      imageSrc={"/courses/food-safety-staff.jpg"}
      alt="Food Safety Supervisor Course">
      <Text>By law, most Australian food businesses must employ at least one Food Safety Supervisor in each premises.</Text>
      <Text>When you study online with AIFS you will:</Text>
      <ul className="checklist">
        <ListItem>meet compliance requirements of councils throughout Australia</ListItem>
        <ListItem>complete your food safety training course faster</ListItem>
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
            title="Official AIFS Food Handler Course"
          >
            <Text>Approved and accepted by local councils and Health Inspectors in all states of Australia.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_calendar_clock.svg"}
            title="Finish in a few hours, or take your time"
          >
            <Text>Complete your Food Safety Supervisor course in just a few hours, or take up to 12 months.</Text>
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
            <Text>Receive your documents within 48 hours of course completion. If you need them faster, just get in touch!</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
            title="98% recommended rating"
          >
            <Text>Feel confident taking an AIFS course that 98% of students would recommend to a friend.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_australia.svg"}
            title="All states, all food sectors"
          >
            <Text>Be sure of acceptance with the Food Safety Supervisor course approved throughout Australia.</Text>
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
        <AccordionSummary id="food-handler-course-benefits-card-2" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 flex flex-col' }}>
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
            description="Receive the widely recognised 'Serious About Food Safety' window decal and display certificate for your business."
            imageSrc={FHRecallAlerts} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">Use them to show customers that you take their health and safety seriously, and have the high level of training to do so.</Text>
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
      <Header5 className="pt-4 pb-10 text-teal">Discover why Food Safety Supervisors love this course</Header5>
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
    <Header5 className="pb-10 !text-teal w-full text-center">Recommended by thousands of food workers</Header5>
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
        author="Jaymee E"
        authorIntro="Scarsdale VI"
      >
        {`"I liked that the course was very well written and that the assessment was easy to follow."`}
      </Testimonial>
    </div>
  </div>
};

const CourseOutlineSection = () => {
  return <SectionContainer id="course-outline" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>Course Outline</Header3>
      <Text className={styles["subtitle"]}>Everything you need to be a Food Safety Supervisor, all in one course</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol in the official AIFS Food Safety Supervisor course, you have access to everything you need to be recognised as a qualified Food Safety Supervisor in Australia.</Text>
        <Text>With AIFS there are:</Text>
        <ul className="checklist pb-4">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="font-semibold">Start immediately, or at your leisure</Text>
            <Text>As soon as you sign up, you have instant access to your course.</Text>
            <Text>As the online components of the course take around 6 - 8 hours, some students sign up and complete the course on the same day.</Text>
            <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text className="font-semibold">Nationally recognised training</Text>
            <Text>AIFS is a Registered Training Organisation {`that's`} approved to deliver Food Safety Supervisor training across all Australian food sectors. Be confident knowing that your AIFS qualification is compliant and will be recognised.</Text>
            <Text className="font-semibold">Meet NSW requirements</Text>
            <Text>AIFS is approved to deliver NSW Food Safety Supervisor certificates on behalf of the NSW Food Authority.</Text>
            <Text>If you want to work in NSW as a Food Safety Supervisor, {`you'll`} need this additional certificate.</Text>
            <Text>Simply select this option when enrolling.</Text>
            <Text>There is an extra $30 fee for this certificate - a NSW government fee we get charged to register you into their system and produce your certificate.</Text>
          </div>
          }
        />
      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup initialIndex={4}>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Outline</Text>}
            details={<>
              <Text>The course is split into 19 lessons, two case studies (five in NSW), and an observer report.</Text>
              <Text><strong>NSW only:</strong> There are two additional course resources for your information and review.</Text>
              <Text>The lessons in the course are:</Text>
              <ul  >
                <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
                <ListItem>Lesson 2 - Food Contamination {`&`} High-Risk Groups</ListItem>
                <ListItem>Lesson 3 - Biological Contamination</ListItem>
                <ListItem>Lesson 4 - Other Types of Contamination</ListItem>
                <ListItem>Lesson 5 - Allergen Management</ListItem>
                <ListItem>Lesson 6 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 7 - Maintaining Food Premises</ListItem>
                <ListItem>Lesson 8 - Hand Washing</ListItem>
                <ListItem>Lesson 9 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
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
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Assessment Process</Text>}
            details={<>
              <Text className="font-semibold">Quizzes</Text>
              <Text>At the end of each lesson, {`there's`} a multiple choice quiz. You have 5 attempts at each quiz and must score 100% to move onto the next lesson.</Text>
              <Text>If you {`don't`} pass the quiz after 5 attempts, simply get in touch and {`we'll`} help you progress to the next section.</Text>

              <Text className="font-semibold">Case Studies</Text>
              <Text>There are two case studies (five in NSW) to complete with the course. For each case study, {`you'll`} read a short scenario and then answer a multiple choice quiz, which is similar to the quizzes {`you've `}already completed at the end of the lessons.</Text>

              <Text className="font-semibold">Reading Activity</Text>
              <Text>There is a reading activity on potentially hazardous foods. Simply download the PDF from the course page and then complete the multiple choice quiz. </Text>

              <Text className="font-semibold">NSW Certification</Text>
              <Text>In 2015, the NSW Food Authority announced some additional requirements for Food Safety Supervisor training. Three key focus areas were determined by the Food Authority - safe egg handling, allergen management and cleaning and sanitising practices. If you are in NSW, there is an additional case study for each of these focus areas.</Text>

              <Text className="font-semibold">Food Safety Supervisor Observer Report</Text>
              <Text>There are some things we {`can't`} see you doing through your computer - such as washing your hands or wearing the correct clothes for work.</Text>
              <Text>In order to comply with the government requirements for Food Safety Supervisor training, you do need to demonstrate that you can perform such tasks correctly.</Text>
              <Text>To make this as easy as possible for you, we allow you to be observed by a co-worker or supervisor.</Text>
              <Text>Simply follow the instructions on the course page and ask someone in your workplace (past or present) to complete the form.</Text>

              <Text className="font-semibold">Quality Assurance Process</Text>
              <Text>As part of our quality assurance process, we reserve the right to contact you or your nominated observer to conduct a competency conversation or verification of assessment prior to awarding certification.</Text>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Prerequisites</Text>}
            details={<>
              <Text>There are no training prerequisites for this course - you can simply enrol and get started.</Text>
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
            detailsClasses={{ root: '!p-4' }} />
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
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Preview</Text>}
            details={<>
              <Text className="pb-4">Click on the {`'Play'`} button below to watch a preview of the Food Handler course.</Text>
              <div dangerouslySetInnerHTML={{ __html: `<script src="https://fast.wistia.com/embed/medias/6fg1h2nf6l.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:75.1% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_6fg1h2nf6l seo=false videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/6fg1h2nf6l/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>` }} />
            </>}
            detailsClasses={{ root: '!p-4' }} />
        </CollapsibleCellGroup>
      </div>
    </div>
  </SectionContainer>
};

const IndustrySectorSection = () => {
  return <SectionContainer id="industry-sectors" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>Be Trained for Your Food Industry Sector</Header3>
      <Text className={styles["subtitle"]}>Develop expert food handling skills with sector-specific Food Safety Supervisor training</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <CollapsibleCellGroup initialIndex={0}>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Hospitality Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Hospitality businesses prepare and serve food for customers to consume in-house.<br /><br />The units of competency awarded for Hospitality are:</Text>
              <Image className="float-right col-span-1" src={HospitalityGraphic} width={150} height={84} layout="fixed" alt="Hospitality Sector" />
            </div>
              <ul>
                <ListItem>SITXFSA005 Use hygienic practices for food safety</ListItem>
                <ListItem>SITXFSA006 Participate in safe food handling practices</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Retail Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Food retail businesses prepare and sell food to customers for consumption elsewhere.<br /><br />The unit of competency awarded for Retail is:</Text>
              <Image className="float-right col-span-1" src={RetailGraphic} width={150} height={84} layout="fixed" alt="Retail Sector" />
            </div>
              <ul>
                <ListItem>SIRRFSA001 Handle food safely in a retail environment</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Food Processing Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Food processing businesses manufacture food and have very little direct contact with consumers.<br /><br />The units of competency awarded for Food Processing are:</Text>
              <Image className="float-right col-span-1" src={FoodProcessingGraphic} width={150} height={84} layout="fixed" alt="Food Processing Sector" />
            </div>
              <ul>
                <ListItem>FBPFSY1002 Follow work procedures to maintain food safety</ListItem>
                <ListItem>FBPFSY2002 Apply food safety procedures</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Health & Community Sector</Text>}
            details={<><div className="w-full gap-4" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Organisations that serve food to vulnerable people are in the health and community sector.<br /><br />The units of competency awarded for Health {`&`} Community are:</Text>
              <Image className="float-right col-span-1" src={HealthCommunityGraphic} width={150} height={84} layout="fixed" alt="Health & Community Sector" />
            </div>
              <ul>
                <ListItem>HLTFSE001 Follow basic food safety practices</ListItem>
                <ListItem>HLTFSE005 Apply and monitor food safety requirements</ListItem>
                <ListItem>HLTFSE007 Oversee the day-to-day implementation of food safety in the workplace</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">{`Transport & Distribution Sector`}</Text>}
            details={<><div className="w-full gap-2" style={{
              display: 'grid',
              gridTemplateColumns: '1fr 150px',
              width: '100%',
            }}>
              <Text className="flex-none flex-0 col-span-1">Any business that transports or stores food is in the transport and distribution sector.<br /><br />The units of competency awarded for Transport and Distribution are:</Text>
              <Image className="float-right col-span-1" src={TransportDistributionGraphic} width={150} height={84} layout="fixed" alt="Transport & Distribution Sector" />
            </div>
              <ul>
                <ListItem>SITXFSA005 Use hygienic practices for food safety</ListItem>
                <ListItem>SITXFSA006 Participate in safe food handling practices</ListItem>
              </ul>
            </>
            }
            detailsClasses={{ root: '!p-4' }} />
        </CollapsibleCellGroup>
      </div>
      <div className="flex flex-col">
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="font-semibold">Training for food sectors</Text>
            <Text>Food Safety Supervisor training differs from sector to sector.</Text>
            <Text>When you complete your official AIFS Food Safety Supervisor course, {`you'll`} receive a Statement of Attainment.</Text>
            <Text>This lists the units of competency {`you've`} attained. Different food sectors have different units.</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text className="font-semibold">How do I select my food sector?</Text>
            <Text>Simply enrol in the Food Safety Supervisor course and complete your student registration.</Text>
            <Text>During registration, {`you'll`} provide contact information for a nominated observer and select your food sector from a dropdown menu.</Text>
            <Text>The sector you choose determines which Observer Report will be issued and the units of competency that will be displayed on your Statement of Attainment upon completion of your course. </Text>
            <Text className="font-semibold">What about if {`I'm`} in New South Wales?</Text>
            <Text>The New South Wales Food Authority recognises the Hospitality & Retail sectors only. When completing your registration, you will only have the option to choose one of these sectors.</Text>
            <Text>If you are unsure which food sector you need to be recognised in, please contact your local council to confirm prior to completing your student registration.</Text>
          </div>
          }
        />
      </div>
    </div>
  </SectionContainer>;
};

const WhatIsSection = () => {
  return <SectionContainer id="what" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>What is a Food Safety Supervisor?</Header3>
      <Text className={styles["subtitle"]}>Understand your responsibilities and legal requirements</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Image src={WhatIsFSS} alt="What is a Food Safety Supervisor?" width={350} height={197} layout="responsive" />
        <Text className="mt-8">A Food Safety Supervisor is someone who has the appropriate food safety training to supervise food safety in a business. Food Safety Supervisors are mainly responsible for:</Text>
        <ul className="checklist">
          <ListItem>supervising food handling staff</ListItem>
          <ListItem>maintaining the Food Safety Program</ListItem>
          <ListItem>ensuring safe food handling practices across the business </ListItem>
        </ul>
        <ExpandibleFAQ summary={null} details={
          <>
            <Text>Food Safety Supervisors are also required to be available to deal with any internal or external food safety matters on behalf of the food business.</Text>
            <Text>This can range from answering food safety questions from food workers to communicating with local government authorities regarding food safety incidents or during a regular inspection.</Text>
          </>
        }
        />
      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup initialIndex={4}>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">ELIGIBILITY</Text>}
            details={<>
              <Text>Anyone can enrol in the AIFS Food Safety Supervisor course. Whether you currently work in the food industry or are planning to, {`there's`} no prior knowledge or work experience required. You can simply sign up and get started.</Text>
              <Text>{`Across Australia, there are different training requirements for Food Safety Supervisors. For example, in the Australian Capital Territory and New South Wales, Food Safety Supervisors must renew their training every five years and in New South Wales only the units of competency awarded for Hospitality and Retails sectors are recognised.`}</Text>
              <Text>Learn more about <NextLink href="/laws-requirements/location"><a className="link underline font-semibold">specific state or territory requirements</a></NextLink> or <NextLink href="/contact"><a className="link underline font-semibold">contact us</a></NextLink></Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">LEVEL 1 {`&`} LEVEL 2</Text>}
            details={<>
              <Text>{`Sometimes the terms 'Level 1' and 'Level 2' are used when referring to Food Safety Supervisor training. These terms are used to signify that to become a qualified Food Safety Supervisor, training for both Level 1 and Level 2 must be completed.`}</Text>
              <Text>{`This course covers all requirements to become a Food Safety Supervisor- in other words, the AIFS Food Safety Supervisor course is a Level 1 and Level 2 course.`}</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">FOOD SAFETY LAWS</Text>}
            details={<>
              <Text>{`Food Safety Supervisor training is not only about ensuring food safety, it's the law. Food businesses in Australia must comply with federal, state and local food safety laws and requirements.`}</Text>
              <Text>The requirements for food businesses vary depending on the state or territory the business operates in. In Queensland, New South Wales, Victoria and the Australian Capital Territory, every food business must nominate at least one Food Safety Supervisor to even obtain a food business licence.</Text>
              <Text>Learn more about the laws and requirements for your state or territory:</Text>
              <ul>
                <ListItem><NextLink href="/laws-requirements/location/new-south-wales"><a className="link">New South Wales</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/victoria"><a className="link">Victoria</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/queensland"><a className="link">Queensland</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/act"><a className="link">Australian Capital Territory</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/sa-nt-wa-tas"><a className="link">South Australia</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/sa-nt-wa-tas"><a className="link">Northern Territory</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/sa-nt-wa-tas"><a className="link">Western Australia</a></NextLink></ListItem>
                <ListItem><NextLink href="/laws-requirements/location/sa-nt-wa-tas"><a className="link">Tasmania</a></NextLink></ListItem>
              </ul>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">STATEMENT OF ATTAINMENT</Text>}
            details={<>
              <Text>A Statement of Attainment is a document (like a certificate) that is issued to a student and contains the units of competency that has been completed as part of a nationally recognised training course.</Text>
              <Text>{`As a qualified Food Safety Supervisor, you will receive a valid Statement of Attainment and be trained to:`}</Text>
              <ul className="checklist">
                <ListItem>protect customers from food-borne illnesses</ListItem>
                <ListItem>manage hazards in the workplace</ListItem>
                <ListItem>train and supervise food handling staff</ListItem>
                <ListItem>devise and maintain a Food Safety Program</ListItem>
                <ListItem>build a compliant Food Safety Plan</ListItem>
                <ListItem>prepare the business for food safety emergencies</ListItem>
                <ListItem>serve as a point of contact for local government</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">NATIONALLY RECOGNISED TRAINING</Text>}
            details={<>
              <Text>As a Registered Training Organisation, the Australian Institute of Food Safety has been approved to deliver Food Safety Supervisor training for every food sector across Australia.</Text>
              <Text>{`This means that when you train with AIFS, you can feel secure knowing your qualification:`}</Text>
              <ul className="checklist">
                <ListItem>is compliant</ListItem>
                <ListItem>will be accepted by local councils Australia-wide</ListItem>
                <ListItem>is recommended by Health Inspectors</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: '!p-4' }} />
        </CollapsibleCellGroup>
      </div>
    </div>
  </SectionContainer>;
};

const CommunitySection = () => {
  return <div className="col-span-3" id="community">
    <Community />
  </div>
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
          <Text>The online lessons, multiple choice quizzes and case studies take most people around six to eight hours to complete.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>With the Observer Report and other forms that may need to be completed, the total time for the course is typically a couple of hours more.</Text>
          <Text>{`However, everyone learns at a different pace. If you've been working in the food industry for years, it's likely you'll already be familiar with much of the course content. If English is not your first language, it may take longer to work through the lessons.`}</Text>
          <Text>Some AIFS students start training, complete the course, and receive their Statement of Attainment all on the same day.</Text>
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
          <Text>All you need to do is supply some basic details (like your name and address) and your credit/debit card information.</Text>
          <Text>{`If you'd prefer to complete your registration over the phone, that's no problem. Just give us a call on 1300 797 020 and we'll help you to get started.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">When will I get my Statement of Attainment?</Text>
          <Text>Our assessors work full-time Monday to Friday and often process Statements of Attainment within a few hours of students completing the course.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>That means that many of our students receive their Statement of Attainment via email on the day that they complete their course, and via post a few days later.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Do I need to go somewhere for an exam?</Text>
          <Text>{`No, you don't need to go anywhere. You can complete the entire course within the comfort of your own home and workplace, at a time that suits you.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>{`You simply complete online multiple choice quizzes at the end of each lesson, and also request someone you've worked with (past or present) to complete an Observer Report about tasks that they've already seen you doing.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Is this the course I need for my food business licence?</Text>
          <Text>{`Yes, this is the course you need to do to get your food business licence in New South Wales, Victoria, Queensland and the Australian Capital Territory.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>{`When you complete the course, we'll issue you with a Statement of Attainment containing details of the units of competency you've obtained. If you're in New South Wales, you'll also receive a food safety certificate issued by the NSW Food Authority.`}</Text>
          <Text>These documents are what you need to present to your local council to nominate a Food Safety Supervisor and get your food business licence.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Where can I learn more?</Text>
          <Text>AIFS provides comprehensive information about nationally recognised Food Safety Supervisor training, as well as general food safety information. </Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>In our in our blog, news and FAQ sections, you should be able to find the answer to your food safety training question. Additionally, you can learn about other accredited and non-accredited <NextLink href="/courses">food safety training courses</NextLink> offered by AIFS. </Text>
          <Text>If you still {`can't`} find what you need then <NextLink href="/contact">get in touch</NextLink> via email or phone and {`we'll`} be happy to help.</Text>
        </div>
        }
      />
    </div>
  </SectionContainer>

};

export default Page;
