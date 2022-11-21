import { ReactNode, useEffect, useState } from 'react';
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

import BinuHeadPic from 'public/courses/food-handler/testimonials/binu.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee.jpg';
import OnlineGraphic from 'public/courses/intro-to-food-safety/intro-online-course.jpg';
import DisplayCertificateGraphic from 'public/courses/intro-to-food-safety/intro-show-certificate.jpg';
import ReadResourcesGraphic from 'public/courses/intro-to-food-safety/intro-reading-resource.jpg';

import { Courses } from 'data/courses';
import styles from './styles.module.scss';

const ANCHOR_IDS = {
  courseInclusions: "course-inclusions",
  testimonials: "testimonials",
  courseOutline: "course-outline",
  commonQuestions: "common-questions",
};

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  ...coursePageOverviewData,
  pathname: "courses/introduction-to-food-safety-course",
  displayPathname: "FOOD SAFETY COURSES/INTRODUCTION TO FOOD SAFETY",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">Introduction to Food Safety</Header1>
  </div>,
  subheader: `For those who want to get some basic food safety skills before starting to work with food, this intro course is the perfect stepping stone to the next level.`,
  sidebarType: "checkout",
  checkout: {
    course: Courses.IntroToFoodSafety,
    courseTitle: "Intro to Food Safety Online Course",
    price: "$49.95",
    showLogo: false,
    links: [
      { text: "WHAT'S INCLUDED", href: `#${ANCHOR_IDS.courseInclusions}` },
      { text: "WHAT OUR STUDENTS SAY", href: `#${ANCHOR_IDS.testimonials}` },
      { text: "COURSE OUTLINE", href: `#${ANCHOR_IDS.courseOutline}` },
      { text: "COMMON QUESTIONS", href: `#${ANCHOR_IDS.commonQuestions}` },
    ]
  },
};

const Page = () => {
  const [ anchor, setAnchor ] = useState<string | undefined>(undefined);
  const courseInclusionsScrollRef = useIsOnScreen(ANCHOR_IDS.courseInclusions);
  const testimonialsScrollRef = useIsOnScreen(ANCHOR_IDS.testimonials);
  const courseOutlineScrollRef = useIsOnScreen(ANCHOR_IDS.courseOutline)
  const commonQuestionsScrollRef = useIsOnScreen(ANCHOR_IDS.commonQuestions);

  // handle hash scrolling
  useEffect(() => {
    const newHashStr = courseInclusionsScrollRef || testimonialsScrollRef || courseOutlineScrollRef || commonQuestionsScrollRef;

    if(newHashStr) {
      window.history.pushState({}, document.title, `#${newHashStr}`);
      setAnchor(`#${newHashStr}`);
    }
    const handleHashChange = () => {
      window.requestIdleCallback(() => setAnchor(window.location.hash));
    };
    window.addEventListener('hashchange', handleHashChange);

    return () => {
      window.removeEventListener('hashChange', handleHashChange);
    }
  }, [courseInclusionsScrollRef, testimonialsScrollRef, courseOutlineScrollRef, commonQuestionsScrollRef]);
  return (
    <Layout isCoursePage={true} pageTitle='Introduction to Food Safety | Online Training Course | AIFS' metaDescription='For those looking to learn basic food safety skills before starting to work with food, this intro course is the perfect stepping stone to the next level.'>
      <CoursesBackground><RowsTemplate {...TemplateData} anchor={anchor}>
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
  return <SectionContainer className="col-span-3" id="hero-section">
    <IntroBox imageSrc="/courses/intro-to-food-safety/intro-food-worker.jpg" alt="Introduction to Food Safety">
      <Text>Getting the basics right early is important for workers starting out in the food industry.</Text>
      <Text>This user-friendly course teaches food workers all the skills and knowledge that they need to prepare and handle food safely.</Text>
      <Text>If {`you're`} looking to get started in the industry, but {`don't`} have any experience, then this is the right course for you.</Text>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <div className="col-span-3" id="section-2">
    <div className={`${styles["courses"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/icons/icon_stroke_green_laptop.svg"}
            title="Study online, whenever you want "
          >
            <Text>Enjoy the convenience of doing your training anywhere, at any time of the day or night.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_chef_hat.svg"}
            title="No need for practical work"
          >
            <Text>No need to demonstrate any practical skills to get your certificate.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
            title="Finish in a few hours, or take your time"
          >
            <Text>Complete your course in 1 - 2 hours, or take up to 12 months.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_australia.svg"}
            title="Accessible throughout Australia"
          >
            <Text>Complete your food safety training from anywhere with an internet connection.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
            title="99% recommended rating"
          >
            <Text>Feel confident taking an AIFS course that 99% of students would recommend to a friend.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_stopwatch.svg"}
            title="Receive your documents fast"
          >
            <Text>{`We'll send your documents a few hours after course completion, or even faster if needed urgently.`}</Text>
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
        <AccordionSummary id="course-inclusions-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
          <ImageBannerCard
            title="ONLINE COURSE"
            description="This introductory course is suitable for people who are new to working with food."
            imageSrc={OnlineGraphic} />
          <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
            <Text className="!text-teal">{`The straightforward format of the course allows you to complete it step-by-step at a pace that you're comfortable with, revisiting sections as required.`}</Text>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>

      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="course-inclusions-card-2" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
          <ImageBannerCard
            title="OFFICIAL CERTIFICATE"
            description="Upon successful completion of the course, you'll receive a Certificate of Completion via email."
            imageSrc={DisplayCertificateGraphic} />
          <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
            <Text className="!text-teal">This is a great way to show customers that {`you're`} serious about food safety and protecting their health.</Text>
          </AccordionDetails>
        </AccordionSummary>
      </Accordion>
      <Accordion square disableGutters className="border border-mint !shadow-none featured">
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full m-0 p-0" classes={{ root: '!p-0 !m-0', content: '!p-0 !m-0 !flex !flex-col' }}>
          <ImageBannerCard
            title="ACCESS TO RESOURCES"
            description="Access to hundreds of blogs and the latest news to help you continue your education."
            imageSrc={ReadResourcesGraphic} />
          <AccordionDetails className="m-0 pl-4 pr-4 pb-4">
            <Text className="!text-teal">Purchase an AIFS Membership to gain unlimited access to our entire Resource Library of how-to guides, fact sheets, checklists and more. </Text>
          </AccordionDetails>
        </AccordionSummary>
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
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">	of students would recommend this course to others</Text>
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
      <Text className={styles["subtitle"]}>All the food safety basics, all in one course</Text>
    </div>
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol onto the Introduction to Food Safety course, you have access to everything you need to start working with food safely.</Text>
        <Text>With AIFS there are:</Text>
        <ul className="checklist">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <Text className="font-semibold mt-4">Start immediately, or at your leisure</Text>
        <Text>As soon as you sign up, you have instant access to your course.</Text>
        <Text>As the entire training takes around 1 - 2 hours, some students sign up and complete the course on the same day.</Text>
        <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup initialIndex={2}>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">COURSE {`&`} ASSESSMENT</Text>}
            details={<>
              <Text>The course contains nine lessons to help you understand food safety:</Text>
              <ul className="checklist">
                <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
                <ListItem>Lesson 2 - Food Contamination {`&`} High-Risk Groups</ListItem>
                <ListItem>Lesson 3 - Types of Contamination</ListItem>
                <ListItem>Lesson 4 - Cleaning {`&`} Sanitising</ListItem>
                <ListItem>Lesson 5 - Hand Washing</ListItem>
                <ListItem>Lesson 6 - Personal Hygiene {`&`} Workplace Behaviour</ListItem>
                <ListItem>Lesson 7 - Illness {`&`} Onsite Injuries</ListItem>
                <ListItem>Lesson 8 - Working with Food Safely</ListItem>
                <ListItem>Lesson 9 - Serving Food Safely</ListItem>
              </ul>
              <Text className="mt-4">{`At the end of each lesson, there's a multiple choice quiz. You have 5 attempts at each quiz and must score 100% to move onto the next lesson. If you don't pass the quiz after 5 attempts, simply get in touch and we'll help you progress to the next section.`}</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">TECHNICAL REQUIREMENTS</Text>}
            details={<>
              <Text>You need to make sure that you have the following in order to be able to complete the Introduction to Food Safety course:</Text>
              <Text className="font-semibold">1. A modern web browser</Text>
              <Text>{`At AIFS we use some of the latest eLearning technologies to deliver the courses. You will need to have a modern web browser to view and complete the course (Google Chrome is recommended), and it's important that you have Javascript enabled.`}</Text>
              <Text className="font-semibold">{`2. An email address`}</Text>
              <Text>{`During the registration process, we will ask you for your email address. This is a mandatory requirement for you to be able to access our systems. Email addresses cannot be shared by students.`}</Text>

              <Text className="font-semibold">3. Adobe PDF Reader or Adobe Acrobat</Text>
              <Text>Some of the forms that you need to complete (such as the Observer Report) are in PDF format. Ensure that you have <NextLink href="https://get.adobe.com/reader/"><a target="_blank">the latest version of Adobe PDF Reader</a></NextLink>.</Text>
              <Text>AIFS courses work on most computers, laptops, tablets and mobile devices.</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Preview</Text>}
            details={<>
              <Text>Click on the {`'Play'`} button below to watch a preview of the Intro to Food Safety course.</Text>
              <div dangerouslySetInnerHTML={{ __html: `<div class="wistia_responsive_padding" style="padding:75.1% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/6fg1h2nf6l?seo=false&videoFoam=true" title="Food-Allergies Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>` }} />
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
          <Text className="font-semibold">How long does the course take to complete?</Text>
          <Text>Most students complete the Introduction to Food Safety course in just 1 to 2 hours, although we give you up to twelve months to complete the course.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <p>Even after you finish the course you have access for one year after the date you enrolled so you can go back and check information at any time.</p>
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
          <Text className="font-semibold">Is this the course I need for my food business licence?</Text>
          <Text>{`No. The training you need to complete to get a food business licence in NSW, QLD, VIC and ACT is the Food Safety Supervisor course.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>When you complete the <NextLink href="/courses/food-safety-supervisor"><a className="link font-semibold underline">Food Safety Supervisor course</a></NextLink>, {`you're issued with a Statement of Attainment containing details of the the units of competency you've obtained. If you're in New South Wales, you'll also get a NSW Food Authority certificate.`}</Text>
          <Text>These documents are what you need to present to your local council to nominate a Food Safety Supervisor and get your food business licence.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Where can I learn more?</Text>
          <Text>The Australian Institute of Food Safety provides comprehensive information about food safety training, as well as general food safety information, in our blog, news and FAQ sections.</Text>
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
