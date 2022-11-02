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
import FHRecallAlerts from 'public/courses/food-handler/fh-recall-alerts.jpg';
import BinuHeadPic from 'public/courses/food-handler/testimonials/binu.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee.jpg';
import FHCHero from 'public/courses/food-handler/afs-fhc-hero.jpg';

import Community from 'components/courses/community';
import { Courses } from 'data/courses';
import styles from './styles.module.scss';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  ...coursePageOverviewData,
  pathname: "courses/food-handler-course",
  displayPathname: "FOOD SAFETY COURSES/FOOD HANDLER COURSE",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">Food Handler Course</Header1>
  </div>,
  subheader: "Develop a strong foundation of food safety skills and stay compliant with the Food Standards Code when you train with AIFS.",
  sidebarType: "checkout",
  checkout: {
    course: Courses.FoodHandler,
    courseTitle: "Food Handler Online Course",
    price: "$99.95",
    memberPrice: "FREE",
    showLogo: true,
    links: [
      { text: "WHAT'S INCLUDED", href: "#course-inclusions" },
      { text: "WHAT OUR STUDENTS SAY", href: "#testimonials" },
      { text: "COURSE OUTLINE", href: "#course-outline" },
      { text: "INDUSTRY SECTORS", href: "#industry-sectors" },
      { text: "WHAT IS A FOOD HANDLER", href: "#what" },
      { text: "COMMON QUESTIONS", href: "#common-questions" },
    ]
  },
};

const Page = () => {
  return (<Layout isCoursePage={true} pageTitle='Food Handler Course | Online Food Safety Training | AIFS' metaDescription='The Official AIFS Food Handler Course. 100% online and Nationally Recognised. Valid in all Australian states and for all food sectors.'>
      <CoursesBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
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

const Section1 = () => {
  return <SectionContainer className="col-span-3" id="section-1">
    <IntroBox imageSrc='/courses/food-handler.jpg' alt='laws-requirements-for-employees-graphic'>
      <Text>In Australia, the Food Standards Code requires anyone who works with food to be trained in food safety.</Text>
      <Text>When you study online with AIFS you will:</Text>
      <ul className="checklist">
        <ListItem>attain a nationally recognised skillset</ListItem>
        <ListItem>complete your course faster</ListItem>
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
            <Text>Accepted as meeting all requirements of the Food Standards Code for Food Handlers.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_calendar_clock.svg"}
            title="Finish in a few hours, or take your time"
          >
            <Text>Complete your food safety training in just a few hours, or take up to 12 months.</Text>
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
            title="100% recommended rating"
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

const Section3 = () => {
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
            title="Food Safety Updates"
            description="As an AIFS member you'll have access to the latest food safety news that may affect the food business where you work."
            imageSrc={FHRecallAlerts} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">With these tools, be confident that {`you're`} protecting your customers in every way possible.</Text>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>;
};

const Section4 = () => {
  return <div className="col-span-3" id="section-4">
    <div className="w-full flex flex-col items-center mb-4">
      <Header3>Trusted and Recommended Throughout Australia</Header3>
      <Text className={styles["subtitle"]}>Relied on by the Australian food industry for a quality training experience</Text>
      <Header5 className="pt-4 pb-10 text-teal">Discover why Food Handlers love this course</Header5>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">100<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students would recommend this course to others</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">98<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students rate this course assessment as good or excellent</Text>
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
        author="Jaymee O"
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
      <Text className={styles["subtitle"]}>Develop a solid understanding of food safety in the workplace</Text>
    </div>
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol in the official AIFS Food Handler course, you have access to everything you need to gain a solid understanding of the basics of food safety. With AIFS there are</Text>
        <ul className="checklist pb-4">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="font-semibold">Immediate Start</Text>
            <Text>As soon as you sign up, you have instant access to your course.</Text>
            <Text>As the entire training takes around 3 - 4 hours, some students sign up and complete the course on the same day.</Text>
            <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text className="font-semibold">Nationally recognised training</Text>
            <Text>AIFS is a Registered Training Organisation {`that's`} approved to deliver Food Handler training across all Australian food sectors. Be confident knowing that your AIFS qualification is compliant and will be recognised.</Text>
          </div>
          }
        />

      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Outline</Text>}
            details={<>
              <Text className="font-semibold">Hospitality Sector</Text>
              <Text>The course is split into nine lessons, one case study, and an observer report.</Text>
              <Text>The lessons in the course are:</Text>
              <ul className="pb-4">
                <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
                <ListItem>Lesson 2 - Food Contamination & High-Risk Groups</ListItem>
                <ListItem>Lesson 3 - Types of Contamination</ListItem>
                <ListItem>Lesson 4 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 5 - Hand Washing</ListItem>
                <ListItem>Lesson 6 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
                <ListItem>Lesson 7 - Illness {`&`} Onsite Injuries</ListItem>
                <ListItem>Lesson 8 - Serving Food Safely</ListItem>
                <ListItem>Lesson 9 - Food Safety Programs {`&`} Reporting Responsibilities</ListItem>
              </ul>

              <Text className="font-semibold">Health {`&`} Community Sector</Text>
              <Text>The course is split into 13 lessons, one case study and an observer report.</Text>
              <Text>The lessons in the course are:</Text>
              <ul className="pb-4">
                <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
                <ListItem>Lesson 2 - Food Contamination {`&`} High-Risk Groups</ListItem>
                <ListItem>Lesson 3 - Types of Contamination</ListItem>
                <ListItem>Lesson 4 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 5 - Maintaining Food Premises</ListItem>
                <ListItem>Lesson 6 - Hand Washing</ListItem>
                <ListItem>Lesson 7 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
                <ListItem>Lesson 8 - Illness {`&`} Onsite Injuries</ListItem>
                <ListItem>Lesson 9 - Receiving {`&`} Storing Food</ListItem>
                <ListItem>Lesson 10 - Working with Food Safely</ListItem>
                <ListItem>Lesson 11 - Food Safety Programs</ListItem>
                <ListItem>Lesson 12 - Identifying Food Safety Hazards</ListItem>
                <ListItem>Lesson 13 - Controlling {`&`} Reporting on Food Safety Hazards</ListItem>
              </ul>

              <Text className="font-semibold">Food Processing Sector</Text>
              <Text>The course is split into 13 lessons, one case study and an observer report.</Text>
              <Text>The lessons in the course are:</Text>
              <ul>
                <ListItem>Lesson 1 - Food Contamination {`&`} High-Risk Groups</ListItem>
                <ListItem>Lesson 2 - Types of Contamination</ListItem>
                <ListItem>Lesson 3 - Allergen Management</ListItem>
                <ListItem>Lesson 4 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 5 - Maintaining Food Premises</ListItem>
                <ListItem>Lesson 6 - Hand Washing</ListItem>
                <ListItem>Lesson 7 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
                <ListItem>Lesson 8 - Illness {`&`} Onsite Injuries</ListItem>
                <ListItem>Lesson 9 - Receiving {`&`} Storing Food</ListItem>
                <ListItem>Lesson 10 - Working with Food Safely</ListItem>
                <ListItem>Lesson 11 - Food Safety Programs</ListItem>
                <ListItem>Lesson 12 - Identifying Food Safety Hazards</ListItem>
                <ListItem>Lesson 13 - Controlling {`&`} Reporting on Food Safety Hazards</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Assessment Process</Text>}
            details={<>
              <Text className="font-semibold">Quizzes</Text>
              <Text>At the end of each lesson, {`there's`} a multiple choice quiz. You have 5 attempts at each quiz and must score 100% to move onto the next lesson. If you {`don't`} pass the quiz after 5 attempts, simply get in touch and {`we'll`} help you progress to the next section.</Text>
              <Text className="font-semibold">Case Study</Text>
              <Text>After {`you've`} completed all the lessons, {`there's`} a short case study. To complete this, {`you'll`} read a short scenario and then answer a multiple choice quiz, which is similar to the quizzes {`you've`} already completed at the end of the lessons.</Text>
              <Text className="font-semibold">Observer Report</Text>
              <Text>There are some things we {`can't`} see you doing through your computer — such as washing your hands or wearing the correct clothes for work. In order to comply with the government requirements for Food Handler training, you do need to demonstrate that you can perform such tasks correctly.</Text>
              <Text>To make this as easy as possible for you, we allow you to be observed by a co-worker or supervisor. Simply provide the name and contact information for your nominated observer when {`you're`} filling out your student registration.</Text>
              <Text>Once you complete your registration, your nominated observer will receive an email with options to print the form or complete it online.</Text>
              <Text className="font-semibold">Quality Assurance Process</Text>
              <Text>As part of our quality assurance process, we reserve the right to contact you or your nominated observer to conduct a competency conversation or verification of assessment prior to awarding certification. </Text>
            </>}
            detailsClasses={{ root: 'p-4' }}
          />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Prerequisites</Text>}
            details={<>
              <Text>There are no training prerequisites for this course - you can simply enrol and get started.</Text>
              <Text className="font-semibold">Language, Literacy and Numeracy</Text>
              <Text>Whilst there are no training prerequisites, there are some requirements around language, literacy and numeracy. In order to complete this course you should be able to perform everyday tasks such as:</Text>
              <ul className="pb-4">
                <ListItem>Using an instant messenger tool</ListItem>
                <ListItem>Sending SMS text messages</ListItem>
                <ListItem>Responding to customer complaints</ListItem>
                <ListItem>Reading weights on a digital scale</ListItem>
              </ul>
              <Text>If you have any concerns about the skills required to participate in this course, please contact us and {`we'll`} be happy to discuss your situation.</Text>
            </>}
            detailsClasses={{ root: 'p-4' }}
          />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Technical Requirements</Text>}
            details={<>
              <Text>You need to make sure that you have the following in order to be able to complete the Food Handler course:</Text>
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
      <Text className={styles["subtitle"]}>Develop expert skills with sector-specific Food Handler training</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Hospitality Sector</Text>}
            details={<>
              <Text>Hospitality businesses prepare and serve food for customers to consume in house.</Text>
              <Text>The unit of competency awarded for the Hospitality course is:</Text>
              <ul className="mb-4">
                <ListItem>SITXFSA005 Use hygienic practices for food safety</ListItem>
              </ul>

              <Text className="italic">{`When you complete the Food Handler course for the Hospitality sector, you're halfway to becoming a Food Safety Supervisor. Contact our support team if you'd like to discuss upgrading your training to attain the full Food Safety Supervisor skill set.`}</Text>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Health {`&`} Community Sector</Text>}
            details={<>
              <Text>Organisations that serve food to vulnerable people are in the Health and Community sector.</Text>
              <Text>The unit of competency awarded for the Health and Community course is:</Text>
              <ul>
                <ListItem>HLTFSE001 Follow basic food safety practices</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Food Processing Sector</Text>}
            details={<>
              <Text>Food Processing businesses manufacture food and have very little direct contact with consumers. The unit of competency awarded for Food Processing is:</Text>
              <ul>
                <ListItem>FBPFSY1002 - Follow work procedures to maintain food safety</ListItem>
              </ul>
            </>}
          />
        </CollapsibleCellGroup>
      </div>
      <div className="flex flex-col">
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="font-semibold">Training for food sectors</Text>
            <Text>Industry-specific Food Handler training is offered for the Hospitality, Health {`&`} Community and Food Processing sectors.</Text>
            <Text>{`When you complete any AIFS Food Handler training course, you'll receive a Statement of Attainment.`}</Text>
            <Text>{`This lists the unit of competency you've attained. Different food sectors have different units.`}</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text className="font-semibold">How do I select my food sector?</Text>
            <Text>Simply click to enrol in the Food Handler course and then choose either the Hospitality, Health {`&`} Community or Food Processing sectors.</Text>
            <Text>The sector you choose during enrolment determines which unit of competency is awarded upon successful completion of the course.</Text>
            <Text>If you work or plan to work in the Food Retail or Transport {`&`} Distribution sectors, we recommend that you choose the Hospitality sector.</Text>
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
      <Header3>What is a Food Handler?</Header3>
      <Text className={styles["subtitle"]}>Understand your responsibilities and legal requirements</Text>
    </div>

    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Image src={FHCHero} alt="food-handler-course-hero-image" width={350} height={197} layout="responsive" />
        <ExpandibleFAQ
          summary={<div className="flex flex-col">
            <Text className="mt-8">{`A Food Handler is someone who's involved in a food handling activity like preparing, serving, packing, displaying and storing food.`}</Text>
            <Text>Food Handlers are required to:</Text>
            <ul className="checklist">
              <ListItem>have basic knowledge of food safety and hygiene</ListItem>
              <ListItem>be skilled in the tasks for which they are responsible for</ListItem>
              <ListItem>understand the food safety hazards specific to their job</ListItem>
            </ul>
            <Text className="mt-4">Anyone who handles food is considered a Food Handler and requires food safety training.</Text>
          </div>
          }
          details={<div className="flex flex-col">
            <Text>Sometimes the term {`'Level 1'`} is used for Food Handler training. This course is a Level 1 Food Handler course and covers the basic legal requirement for all food workers.</Text>
            <Text>Food workers who wish to learn more about food safety or be nominated as a Food Safety Supervisor should consider the <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor course</NextLink> (which is a {`'Level 1'`} and {`'Level 2'`} course).</Text>
          </div>
          }
        />

      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">ELIGIBILITY</Text>}
            details={<>
              <Text>Anyone can enrol in the AIFS Food Handler course. There are no prerequisites and no prior food handling experience or knowledge is required.</Text>
              <Text>{`Proper food safety training is critical for a wide range food handling tasks and roles in the food industry. Whether you're just starting out or are an experienced food worker, with AIFS Food Handler training you'll be able to:`}</Text>
              <ul className="checklist">
                <ListItem>meet the Food Standards Code requirement</ListItem>
                <ListItem>attain nationally recognised training</ListItem>
                <ListItem>develop safe food handling skills</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">STATEMENT OF ATTAINMENT</Text>}
            details={<>
              <Text>A Statement of Attainment is a document (like a certificate) that is issued to a student who has completed a nationally recognised training course.</Text>
              <Text>{`Once you've successfully completed the AIFS Food Handler course, you will receive a valid Statement of Attainment containing the unit of competency for the industry you've selected indicating that you're qualified to:`}</Text>
              <ul className="checklist">
                <ListItem>protect customers from food-borne illnesses</ListItem>
                <ListItem>manage hazards in the workplace</ListItem>
                <ListItem>take corrective action, when needed</ListItem>
                <ListItem>report unsafe food handling practices</ListItem>
                <ListItem>follow the Food Safety Program</ListItem>
              </ul>
              <Text className="mt-4">The training provided by AIFS is nationally recognised and accepted across Australia.</Text>
            </>}
            detailsClasses={{ root: 'p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">NATIONALLY RECOGNISED TRAINING</Text>}
            details={<>
              <Text>As a Registered Training Organisation, the Australian Institute of Food Safety has been approved to deliver Food Handler training across all food sectors across Australia.</Text>
              <Text>This means that when you train with AIFS, you can feel secure knowing your qualification:</Text>
              <ul className="checklist">
                <ListItem>is compliant</ListItem>
                <ListItem>will be accepted by local councils Australia-wide</ListItem>
                <ListItem>is recommended by Health Inspectors</ListItem>
              </ul>
            </>}
            detailsClasses={{ root: 'p-4' }} />
        </CollapsibleCellGroup>
      </div>
    </div>
  </SectionContainer >;
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
          <Text>The online lessons, multiple choice quizzes and case studies take most people around three to four hours to complete.</Text>
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
          <p>That means that many of our students receive their Statement of Attainment via email on the day that they complete their course, and via post a few days later.</p>
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
          <Text>{`No. The training you need to complete to get a food business licence in NSW, QLD, VIC and ACT is the Food Safety Supervisor course.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>When you complete the <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor course</NextLink>, {`you're`} issued with a Statement of Attainment containing details of the units of competency {`you've`} obtained. If {`you're`} in New South Wales, {`you'll`} also get a food safety certificate issued from the NSW Food Authority.</Text>
          <Text>These documents are what you need to present to your local council to nominate a Food Safety Supervisor and get your food business licence.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">How do I select my food sector?</Text>
          <Text>Simply click to enrol in the Food Handler course and then choose either the Hospitality, Health and Community or Food Processing sector.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>The sector you choose during enrolment determines which unit of competency is awarded upon successful completion of the course.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Which food sector should I choose?</Text>
          <Text>AIFS offers sector-specific Food Handler training for:</Text>
          <ul className="checklist">
            <ListItem>Hospitality</ListItem>
            <ListItem>Health {`&`} Community</ListItem>
            <ListItem>Food Processing</ListItem>
          </ul>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>Choose the industry where you work or plan to work.</Text>
          <Text>If you work (or plan to work) in the Food Retail or Transport & Distribution sectors, we recommend that you choose the Hospitality sector.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Where can I learn more?</Text>
          <Text>The Australian Institute of Food Safety provides comprehensive information about nationally recognised food safety training, as well as general food safety information. </Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>Visit the <NextLink href="https://resources.foodsafety.com.au/"><a target="_blank">Resource Library</a></NextLink> to learn more about effective food hygiene practices and safe food handling principles. Our blogs, news and FAQ sections also contain useful tips and information.</Text>
          <Text>If you still {`can't`} find what you need, <NextLink href="/contact">get in touch with us</NextLink> and {`we'll`} be more than happy to help.</Text>
        </div>
        }
      />
    </div>
  </SectionContainer>

};

export default Page;
