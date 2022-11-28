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
  displayPathname: "FOOD SAFETY COURSES/FOOD ALLERGEN MANAGEMENT",
  header: <div>
    <Text className="!text-teal !mb-1 !text-2xl">The Official AIFS</Text>
    <Header1 className="text-teal mb-2">Food Allergen Management Course</Header1>
  </div>,
  subheader: `This course is designed for food handlers who wish to enhance their knowledge in the area of food allergen management.`,
  sidebarType: "checkout",
  checkout: {
    course: Courses.Allergen,
    courseTitle: "Food Allergen Management Online Course",
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
    <Layout isCoursePage={true} pageTitle='Food Allergen Management Course | Online | AIFS' metaDescription='This course is designed for food handlers who wish to enhance their knowledge in the area of food allergen management.'>
      <CoursesBackground><RowsTemplate {...TemplateData} anchor={anchor}>
        <>
          <HeroSection />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
          <LogosSection />
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
    <IntroBox imageSrc="/courses/allergen/afs-allergen-management.jpg" alt="Food Allergen Management Online Course">
      <Text>As an employee in the food industry, you need to have a good understanding of food allergies and allergens. Food allergies and intolerances now affect 1 in 10 children, and about 1 in 50 adults in Australia, which means {`it's`} more important than ever to be prepared.</Text>
      <Text>This includes knowing the most common food allergens, how to handle incidents if they arise, how to effectively clean and sanitise in order to prevent allergen cross-contamination, and the importance of personal hygiene.</Text>
    </IntroBox>
  </SectionContainer>;
};

const Section2 = () => {
  return <div className="col-span-3" id="course-inclusions">
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
            imageSrc={"/icons/icon_stroke_green_certificate.svg"}
            title="No need for practical work"
          >
            <Text>No need to demonstrate any practical skills to get your certificate.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
            title="Finish in hours, or take your time"
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
            imageSrc={"/icons/icon_stroke_green_trainer.svg"}
            title="Get the support you need"
          >
            <Text>Our qualified trainers are here to provide the support you need when you need it.</Text>
          </IconCard>
          <IconCard
            imageSrc={"/icons/icon_stroke_green_stopwatch.svg"}
            title="Receive your documents fast"
          >
            <Text>Your Certificate of Completion is available for download within minutes after you finish the course.</Text>
          </IconCard>

        </div>

      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3" id="testimonials">
    <div className="w-full flex flex-col items-center text-center">
      <Header3>AIFS is Trusted and Recommended Throughout Australia</Header3>
      <Text className={styles["subtitle"]}>Relied on by the Australian service and hospitality industries for a quality training experience</Text>
      <Header5 className="pt-4 pb-10 text-teal">Discover why our students love this course</Header5>
      <div className="w-full flex flex-col md:flex-row gap-8">
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">99<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">of students would recommend our courses to otherse</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">98<sup className="text-lg lg:text-xl lg:ml-1">%</sup></Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">	of students rate our courses as good or excellent</Text>
        </Statistic>
        <Statistic>
          <Text className="!text-teal text-3xl lg:text-4xl font-semibold mb-0">10/10</Text>
          <Text className="!text-teal !leading-4 lg:!leading-5 text-sm lg:text-base">	students say that our courses are easy to use</Text>
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

const CourseOutlineSection = () => {
  return <SectionContainer id="course-outline" className="flex flex-col">
    <div className="w-full flex flex-col items-center pb-8 text-center">
      <Header3>Course Outline</Header3>
    </div>
    <div className="w-full grid gap-8 grid-cols-1 md:grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol into this course, you have access to everything you need to understand food allergies and allergen management.</Text>
        <Text>With AIFS there are:</Text>
        <ul className="checklist">
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <Text className="font-semibold mt-4">Start immediately, or at your leisure</Text>
        <Text>As soon as you sign up, you have instant access to your course.</Text>
        <Text>As the entire training takes around one to two hours, some students sign up and complete the course on the same day.</Text>
        <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
      </div>
      <div className="flex flex-col">
        <CollapsibleCellGroup initialIndex={0}>
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">COURSE Outline {`&`} ASSESSMENT</Text>}
            details={<>
              <Text>The course is divided into six lessons:</Text>
              <ul className="checklist">
                <ListItem>Lesson 1 - Food Allergies {`&`} Intolerances</ListItem>
                <ListItem>Lesson 2 - Handling Food Allergy Incidents</ListItem>
                <ListItem>Lesson 3 - Most Common Allergens</ListItem>
                <ListItem>Lesson 4 - Preventing Food Allergy Incidents</ListItem>
                <ListItem>Lesson 5 - Personal Hygiene {`&`} Hand Washing</ListItem>
                <ListItem>Lesson 6 - Investigating {`&`} Reporting Food Allergy Incidents</ListItem>
              </ul>
              <Text className="mt-4">{`At the end of each lesson, there is a quiz. You must score 75% in each quiz to unlock the next part of the course, and you have unlimited attempts to do so.`}</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Prerequisites</Text>}
            details={<>
              <Text>There are no training prerequisites for this course - you can simply enrol and get started.</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />

          <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">TECHNICAL REQUIREMENTS</Text>}
            details={<>
              <Text>You need to make sure that you have the following, in order to be able to complete the Food Allergen Management Course:</Text>
              <Text className="font-semibold">1. A modern web browser</Text>
              <Text>{`At AIFS we use some of the latest eLearning technologies to deliver the courses. You will need to have a modern web browser to view and complete the course (Google Chrome is recommended), and it's important that you have Javascript enabled.`}</Text>
              <Text className="font-semibold">{`2. An email address`}</Text>
              <Text>{`During the registration process, we will ask you for your email address. This is a mandatory requirement for you to be able to access our systems. Email addresses cannot be shared by students.`}</Text>
              <Text>AIFS courses work on most computers, laptops, tablets and mobile devices.</Text>
            </>}
            detailsClasses={{ root: '!p-4' }} />
          {/* <CollapsibleTableCell
            summary={<Text className="!text-teal uppercase">Course Preview</Text>}
            details={<>
              <Text>Click on the {`'Play'`} button below to watch a preview of the Intro to Food Safety course.</Text>
              <div dangerouslySetInnerHTML={{ __html: `<div class="wistia_responsive_padding" style="padding:75.1% 0 0 0;position:relative;"><div class="wistia_responsive_wrapper" style="height:100%;left:0;position:absolute;top:0;width:100%;"><iframe src="https://fast.wistia.net/embed/iframe/6fg1h2nf6l?seo=false&videoFoam=true" title="Food-Allergies Video" allow="autoplay; fullscreen" allowtransparency="true" frameborder="0" scrolling="no" class="wistia_embed" name="wistia_embed" msallowfullscreen width="100%" height="100%"></iframe></div></div><script src="https://fast.wistia.net/assets/external/E-v1.js" async></script>` }} />
            </>}
            detailsClasses={{ root: '!p-4' }} /> */}
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
          <Text>Most students complete the Food Allergen Management Course in just one to two hours, although we give you up to twelve months to complete the course.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <p>Even after you finish the course, you have access to the material for one year after the date you enrolled so you can go back and check information at any time.</p>
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
          <Text>{`If you'd prefer to enrol over the phone, that's no problem. Just give us a call on 1300 797 020 and we'll help you to get started.`}</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">What resources come with the course?</Text>
          <Text>{`The Food Allergen Management Course comes with some additional resources to aid in learning and to use on the job, once you've completed the training.`}</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>Included in the course are:</Text>
          <ul className="checklist mb-4">
            <ListItem>Allergy Management Checklist</ListItem>
            <ListItem>Guide: 6-Step Process For Washing Your Hands</ListItem>
          </ul>
          <Text>Both of these resources are available for up to 12 months after the date of enrolment, and yours to keep.</Text>
        </div>
        }
      />
      <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Is there a final exam?</Text>
          <Text>No, the Food Allergen Management Course does not have a final exam. After each of the six lessons, you will find a multiple-choice quiz at the end.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>To finish the course, you simply complete each lesson and each multiple-choice quiz.</Text>
          <Text>Once you have completed everything online, you have satisfied the requirements of the course and can download your Certificate of Completion.</Text>
        </div>
        }
      />
       <ExpandibleFAQ
        summary={<div className="flex flex-col">
          <Text className="font-semibold">Where can I learn more?</Text>
          <Text>The Australian Institute of Food Safety provides comprehensive information about food safety training, as well as general food safety information.</Text>
        </div>
        }
        details={<div className="flex flex-col">
          <Text>To view our additional food safety course offerings, visit our <NextLink href="/courses">Course Page</NextLink>.</Text>
          <Text>Visit the <NextLink href="https://resources.foodsafety.com.au/">Resource Library</NextLink> to learn more about effective food hygiene practices and safe food handling principles. Our blogs, news and FAQ sections also contain useful tips and information.</Text>
          <Text>If you still {`can't`} find what you need, <NextLink href="/contact">get in touch with us</NextLink> and {`we'll`} be more than happy to help.</Text>
        </div>
        }
      />
    </div>
  </SectionContainer>

};

export default Page;
