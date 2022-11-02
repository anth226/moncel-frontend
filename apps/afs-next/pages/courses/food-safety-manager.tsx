import { ReactNode } from 'react';
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
import WhatsIncludedOne from 'public/courses/food-manager/fsm-02.jpg';
import WhatsIncludedTwo from 'public/courses/food-manager/intro-show-certificate.jpg';
import WhatsIncludedThree from 'public/courses/food-manager/fsm-01.jpg';
import BinuHeadPic from 'public/courses/food-handler/testimonials/binu.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee.jpg';

import { Courses } from 'data/courses';
import styles from './styles.module.scss';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  ...coursePageOverviewData,
  pathname: "courses/food-safety-manager",
  displayPathname: "FOOD SAFETY COURSES/FOOD SAFETY MANAGER",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">Food Safety Manager Course</Header1>
  </div>,
  subheader: "For those who are ready to take their food safety skills to the next level, this is the most advanced food safety course offered by AIFS.",
  sidebarType: "checkout",
  checkout: {
    course: Courses.FoodManager,
    courseTitle: "Food Safety Manager Course",
    price: "$299.95",
    showLogo: false,
    links: [
      { text: "WHAT'S INCLUDED", href: "#course-inclusions" },
      { text: "WHAT OUR STUDENTS SAY", href: "#testimonials" },
      { text: "COURSE OUTLINE", href: "#course-outline" },
      { text: "COMMON QUESTIONS", href: "#common-questions" },
    ]
  },
};

const Page = () => {
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
  return <SectionContainer className="col-span-3" id="section-hero">
    <IntroBox imageSrc="/courses/food-manager/fsm.jpg" alt="food-manager-hero-graphic">
      <Text>This course is designed to help you understand everything you need to know about managing food safety in a food business and keeping your customers safe from food safety hazards.</Text>
      <Text>Learn how to deal with food-borne illness and allergy incidents, how to design and organise workflow to maximise food safety as well as advanced food handling and preparation skills. </Text>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <div className="col-span-3" id="section-2">
    <div className={`${styles["courses"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_laptop.svg"}
            title="100% online"
          >
            <Text>Study and complete your certification at a time and place that suits you.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_open_book.svg"}
            title="No need for practical work"
          >
            <Text>No need to demonstrate any practical skills to get your certificate.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
            title="Learn at your own pace"
          >
            <Text>Complete the course in as little as 8 hours, or take up to 12 months. The choice is yours.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_australia.svg"}
            title="Accessible anywhere"
          >
            <Text>Compatible with almost any device — all you need is an internet connection.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
            title="Trusted by the industry"
          >
            <Text>Feel confident that 99% of AIFS students would recommend our courses to a friend.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_stopwatch.svg"}
            title="Get your certificate within minutes"
          >
            <Text>Receive your certificate by email within minutes of completing the course.</Text>
          </IconCard>
        </div>

      </div>
    </div>
  </div>;
};

const CourseInclusionsSection = () => {
  return <div className="col-span-3" id="course-inclusions">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>{`What's Included`}</Header3>
      <Text className={styles["subtitle"]}>With AIFS, you get more than just a training course</Text>
    </div>
    <div className="w-full grid items-start grid-cols-1 md:grid-cols-3 gap-8">
      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="ONLINE COURSE"
            description="The course is suitable for people who have a good understanding of food safety."
            imageSrc={WhatsIncludedOne} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">{`The course is structured to allow you to complete it at a pace you're comfortable with, revisiting sections as often as required to expand your food safety knowledge.`}</Text>
        </AccordionDetails>
      </Accordion>

      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-2" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="DISPLAY CERTIFICATE"
            description="Upon completion of the course, you will receive a downloadable certificate by email."
            imageSrc={WhatsIncludedTwo} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">This is a great way to show customers that your food business is serious about food safety and cares about protecting their health.</Text>
        </AccordionDetails>
      </Accordion>
      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0' }}>
          <ImageBannerCard
            title="ACCESS TO RESOURCES"
            description="Access to hundreds of blogs and the latest news to help you continue your education."
            imageSrc={WhatsIncludedThree} />
        </AccordionSummary>
        <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
          <Text className="!text-teal">Purchase an AIFS Membership to&nbsp;gain unlimited access to our entire Resource Library of how-to guides, fact sheets, checklists and more.</Text>
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
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">100<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">pass rate for students on this food safety course</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">99<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students would recommend this course to others</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">9/10</Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">students say that this food safety course is easy to use</Text>
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
      <Text className={styles["subtitle"]}>Advanced food safety knowledge, in one course</Text>
    </div>
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol in the Food Safety Manager course, you will gain access to everything you need to improve food safety in a food business.</Text>
        <Text>With AIFS there are:</Text>
        <ul className="pb-4">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <Text className="font-semibold">Start immediately, or at your leisure</Text>
        <Text>As soon as you enrol, you gain immediate access to the course.</Text>
        <Text>It takes approximately 8 hours to complete the course, so some students sign up and complete the course on the same day.</Text>
        <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">{`COURSE & ASSESSMENT`}</Text>}
            details={<>
              <Text>The course is made up of 10 lessons designed to help you manage food safety:</Text>
              <ul className="mb-4">
                <ListItem>Lesson 1 - Understanding Food Contamination</ListItem>
                <ListItem>Lesson 2 - Food-borne Illness {`&`} Allergy Management</ListItem>
                <ListItem>Lesson 3 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
                <ListItem>Lesson 4 - Time {`&`} Temperature Control</ListItem>
                <ListItem>Lesson 5 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 6 - Maintaining Food Premises {`&`} Equipment</ListItem>
                <ListItem>Lesson 7 - Purchasing, Receiving {`&`} Storing Food Safely</ListItem>
                <ListItem>Lesson 8 - Preparing Food Safely</ListItem>
                <ListItem>Lesson 9 - Serving {`&`} Dispensing Food Safely</ListItem>
                <ListItem>Lesson 10 - Managing Your Food Safety Plan</ListItem>
              </ul>
              <Text>{`At the end of each lesson, there is a multiple choice quiz. You must score 100% to move on to the next lesson. You have unlimited attempts to pass each quiz, so if you don't pass the first time, just try again.`}</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />

          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Technical Requirements</Text>}
            details={<>
              <Text>Make sure that you have the following in order to be able to complete the Food Safety Manager course:</Text>
              <Text className="font-semibold">1. A modern web browser</Text>
              <Text>At AIFS we use some of the latest eLearning technologies to deliver the courses. You will need to have a modern web browser to view and complete the course (Google Chrome is recommended), and {`it's`} important that you have Javascript enabled.</Text>
              <Text className="font-semibold">2. An email address</Text>
              <Text>During the registration process, we will ask you for your email address. This is a mandatory requirement for you to be able to access our systems. Email addresses cannot be shared by students.</Text>
              <Text className="font-semibold">3. Adobe PDF Reader or Adobe Acrobat</Text>
              <Text>To be able to open and print your downloadable certificate issued upon completion of the course, you will need to have a PDF reader installed on your computer. <NextLink href="https://get.adobe.com/reader/"><a target="_blank">Click here to get the latest version of Adobe PDF Reader.</a></NextLink></Text>
              <Text>AIFS courses work on most computers, laptops, tablets and mobile devices.</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">COURSE PREVIEW</Text> }
            details={<>
              <Text>Click on the {`'Play'`} button below to watch a preview of the Food Safety Manager course.</Text>
              <div dangerouslySetInnerHTML={{__html: `<script src="https://fast.wistia.com/embed/medias/6fg1h2nf6l.jsonp" async></script><script src="https://fast.wistia.com/assets/external/E-v1.js" async></script><div class="wistia_responsive_padding" style="padding:75.1% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><div class="wistia_embed wistia_async_6fg1h2nf6l seo=false videoFoam=true" style="height:100%;position:relative;width:100%"><div class="wistia_swatch" style="height:100%;left:0;opacity:0;overflow:hidden;position:absolute;top:0;transition:opacity 200ms;width:100%;"><img src="https://fast.wistia.com/embed/medias/6fg1h2nf6l/swatch" style="filter:blur(5px);height:100%;object-fit:contain;width:100%;" alt="" aria-hidden="true" onload="this.parentNode.style.opacity=1;" /></div></div></div></div>`}} />
            </>}
            detailsClasses={{ root: '!p-4' }} />
        </CollapsibleCellGroup>
      </div>
    </div>
  </SectionContainer>
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
          <Text className="font-semibold">Is this the course I need for my food business licence?</Text>
          <Text>No. The training you need to complete to get a food business licence in NSW, QLD, VIC and ACT is the Food Safety Supervisor course.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>When you complete the <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor course</NextLink>, {`you're`} issued a Statement of Attainment containing details of the the units of competency {`you've`} obtained. If {`you're`} in New South Wales, you will also need to get a NSW Food Authority certificate.</Text>
          <Text>{`You will need to provide your Statement of Attainment to your local council to nominate a Food Safety Supervisor and get your food business licence.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Do I need to complete the Food Safety Supervisor course before taking the Food Safety Manager course?</Text>
          <Text>{`While this course picks up where the Food Safety Supervisor course leaves off, you are not required to take the Food Safety Supervisor course prior to taking this one. `}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>Many people choose to take this course after completing the Food Safety Supervisor course, but the course is suitable for anyone who wants to further develop their food safety knowledge and skills to improve food safety.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Does this course replace the need for Food Safety Supervisor training?</Text>
          <Text>No. Food Safety Supervisor training is a legal requirement. This is the next step up, which will help you to improve food safety in a food business. </Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>The AIFS Food Safety Manager course was developed in response to student demand for advanced food safety training that goes beyond the curriculum of the Food Safety Supervisor course. </Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">How long does the course take to complete?</Text>
          <Text>{`Most students complete the Food Safety Manager course in just 8 hours, but we give you up to 12 months to complete the course.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>{`After you finish the course, you will continue to have access to it for one year after the date of enrolment. You can go back into the course and access the materials at any time.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Is this a nationally recognised course?</Text>
          <Text>{`No. The Food Safety Manager course was developed to address an industry need for more advanced training beyond what is covered by the vocational education and training (VET) Quality Framework.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>{`Because it was not designed under the VET Quality Framework, it is not considered a nationally recognised course and no units of competency are issued upon completion of the course.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">How do I enrol in the course?</Text>
          <Text>{`Simply click on the blue 'Start Online Now' button on this page and follow the prompts. You'll be enrolled and ready to start within minutes.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text className="pb-2">All you need to do is provide some basic information (like your name and address) and your credit or debit card information.</Text>
          <Text>If you would prefer to enrol over the phone, just give us a call at <NextLink href="tel:1300 797 020"><a target="_blank">1300 797 020</a></NextLink> and {`we'll`} help you to get started.</Text>
        </div>
        }
      />
    </div>
  </SectionContainer>

};

export default Page;
