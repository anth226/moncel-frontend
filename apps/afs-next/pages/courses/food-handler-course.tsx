import { ReactNode } from 'react';
import Image from 'next/image';
import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';

import Layout from 'components/core/layout';
import Statistic from 'components/core/Statistic';
import { Divider, ListItem, IconCard, ImageBannerCard, CollapsibleTableCell } from 'components/core/templates';
import { CoursesBackground, coursePageOverviewData } from 'components/courses';
import { Header3, Header4, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LogosCarousel } from 'components/core/Carousel';
import Testimonial from 'components/core/Testimonial';
import AIFSMembershipGraphic from 'public/courses/food-handler/fh-aifs-membership.jpg';
import FoodSafetyCardGraphic from 'public/courses/food-handler/fh-food-safety-card.jpg';
import FHRecallAlerts from 'public/courses/food-handler/fh-recall-alerts.jpg';
import BinuHeadPic from 'public/courses/food-handler/testimonials/binu_j_1.jpg';
import MichaelHeadPic from 'public/courses/food-handler/testimonials/michael_o_1.jpg';
import JaymeeHeadPic from 'public/courses/food-handler/testimonials/jaymee_e_1.jpg';

import styles from './styles.module.scss';

const TemplateData = {
  ...coursePageOverviewData,
  pathname: "laws-requirements/role/for-employees",
  displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR EMPLOYEES",
  header: "Food Safety Laws & Requirements For Employees",
  subheader: "If you currently work with food you'll already be aware of the importance of food safety. But don't forget that it's vital you keep your skills up-to-date."
};

const Page = () => {
  return (
    <Layout>
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
          <CourseOutlineSection />
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

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className} ${styles['courses']}`}>{ children }</div>;

const Section1 = () => {
  return <SectionContainer className="col-span-3" id="section-1">
    <div className={`${styles["left-large"]} grid grid-cols-3`}>
      <div className="flex flex-col pr-4 col-span-3 md:col-span-1 text-sm text-afs-dark-gray">
        <Text className="pb-5">In Australia, the Food Standards Code requires anyone who works with food to be trained in food safety.</Text>
        <Text className="pb-5">When you study online with AIFS you will:</Text>
        <ul className={styles["checklist"]}>
          <ListItem>attain a nationally recognised skillset</ListItem>
          <ListItem>complete your course faster</ListItem>
          <ListItem>enjoy the many benefits of AIFS Membership</ListItem>

        </ul>
      </div>
      <Image src="/courses/fh-food-handler.jpg" alt="laws-requirements-for-employees-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </SectionContainer>;
};

const Section2 = () => {
  return <div className="col-span-3" id="section-2">
    <div className={`${styles["courses"]} col-span-3`}>
      <div className="flex flex-col pr-4">
      <div className="grid grid-cols-2 grid-flow-row gap-7">
        <IconCard
          imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
          title="Official AIFS Food Handler Course"
          >
          <Text className="pb-3.5">Accepted as meeting all requirements of the Food Standards Code for Food Handlers.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/laws-requirements/role/icon_stroke_green_calendar_clock.svg"}
          title="Finish in a few hours, or take your time"
          >
          <Text className="pb-3.5">Complete your food safety training in just a few hours, or take up to 12 months.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/laws-requirements/icon_stroke_green_laptop.svg"}
          title="Study online, whenever you want"
          >
          <Text className="pb-3.5">Enjoy the convenience of doing your training anywhere, at any time of the day or night.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/icons/icon_stroke_green_stopwatch.svg"}
          title="Receive your documents fast"
          >
          <Text className="pb-3.5">Receive your documents within 48 hours of course completion. If you need them faster, just get in touch!</Text>
        </IconCard>
        <IconCard
          imageSrc={"/icons/icon_stroke_green_thumbsup.svg"}
          title="100% recommended rating"
          >
          <Text className="pb-3.5">Feel confident taking an AIFS course that 100% of students would recommend to a friend.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/icons/icon_stroke_green_australia.svg"}
          title="Recognised throughout Australia"
          >
          <Text className="pb-3.5">Be sure of acceptance with a course {`that's`} recognised throughout all of Australia.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/icons/icon_stroke_green_member.svg"}
          title="Get 12 months of free AIFS Membership"
          >
          <Text className="pb-3.5">Receive updates, tools, resources and more to promote and boost your food handling knowledge.</Text>
        </IconCard>
        <IconCard
          imageSrc={"/laws-requirements/role/icon_stroke_green_trainer.svg"}
          title="Get the support you need"
          >
          <Text className="pb-3.5">Our qualified trainers are here to provide the support you need when you need it.</Text>
        </IconCard>

      </div>
        
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3" id="section-3">
    <div className="w-full flex flex-col items-center mb-4">
        <Header3 className="text-afs-green font-medium">With AIFS, You Get More than Just a Training Course</Header3>
        <Header4 className="text-[#999] font-medium">Discover the complimentary member benefits for you and your food business</Header4>
    </div>
    <div className="w-full grid items-start grid-cols-1 md:grid-cols-3 gap-7">
      <Accordion >
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full" classes={{ root: 'p-0'}}>
          <ImageBannerCard
            title="AIFS Membership"
            description="A complimentary 12-month AIFS Membership is included with all AIFS nationally recognised accredited training courses."
            imageSrc={AIFSMembershipGraphic} />
        </AccordionSummary>
        <AccordionDetails>
          <Text className="text-afs-green p-4">Your membership includes food safety tools, resources and updates that benefit you, your business and your customers.</Text>
        </AccordionDetails>
      </Accordion>

      <Accordion >
        <AccordionSummary id="food-handler-course-benefits-card-2" className="w-full" classes={{ root: 'p-0'}}>
          <ImageBannerCard
            title="Food Safety Card"
            description="You'll receive a handy wallet-sized blue Food Safety Card that contains official proof of your food safety training."
            imageSrc={FoodSafetyCardGraphic} />
        </AccordionSummary>
        <AccordionDetails>
          <Text className="text-afs-green p-4">Just keep your card in your pocket at work, so {`you're`} always ready to show Health Inspectors during surprise food audits.</Text>
        </AccordionDetails>
      </Accordion>
      <Accordion >
        <AccordionSummary id="food-handler-course-benefits-card-1" className="w-full" classes={{ root: 'p-0'}}>
          <ImageBannerCard
            title="Food Safety Updates"
            description="As an AIFS member you'll have access to the latest food safety news that may affect the food business where you work."
            imageSrc={FHRecallAlerts} />
        </AccordionSummary>
        <AccordionDetails>
          <Text className="text-afs-green p-4">With these tools, be confident that {`you're`} protecting your customers in every way possible.</Text>
        </AccordionDetails>
      </Accordion>
    </div>
  </div>;
};

const Section4 = () => {
  return <div className="col-span-3" id="section-4">
        <div className="w-full flex flex-col items-center mb-4">
        <Header3 className="text-afs-green font-medium">Trusted and Recommended Throughout Australia</Header3>
        <Header4 className="text-[#999] font-medium">Relied on by the Australian food industry for a quality training experience</Header4>
        <Text className="py-8 text-afs-green">Discover why Food Handlers love this course</Text>
        <div className="w-full flex flex-col md:flex-row gap-8">
          <Statistic>
            <Header3 className="text-afs-green">100<sup>%</sup></Header3>
            <Text className="text-afs-green">of students would recommend this course to others</Text>
          </Statistic>
          <Statistic>
            <Header3 className="text-afs-green">98<sup>%</sup></Header3>
            <Text className="text-afs-green">of students rate this course assessment as good or excellent</Text>
          </Statistic>
          <Statistic>
            <Header3 className="text-afs-green">10/10</Header3>
            <Text className="text-afs-green">of students say that this food safety course is easy to use</Text>
          </Statistic>
        </div>
        <Text className="py-8 text-afs-green">Trusted by thousands of companies</Text>
    </div>
  </div>;
};

const LogosSection = () => {
  return <div className="col-span-3 border-y-[1px] border-afs-light-green py-2" id="section-logos">
    <LogosCarousel />
  </div>
};

const Section5 = () => {
  return <div className="col-span-3" id="section-5">
    <Text className="py-8 text-afs-green w-full text-center">Trusted by thousands of companies</Text>
    <div className="flex flex-row gap-8">
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
  return <SectionContainer id="section-course-outline" className="flex flex-col">
    <div className="w-full py-8 flex flex-col items-center">
      <Header3 className="text-afs-green font-normal">Course Outline</Header3>
      <Header4 className="text-afs-gray font-normal">Develop a solid understanding of food safety in the workplace</Header4>
    </div>
    <div className="w-full grid gap-7 grid-cols-2">
      <div className="flex flex-col">
        <Text>When you enrol in the official AIFS Food Handler course, you have access to everything you need to gain a solid understanding of the basics of food safety. With AIFS there are</Text>
        <ul className={`${styles["checklist"]}`}>
          <ListItem>no hidden prerequisites</ListItem>
          <ListItem>no hidden assessment requirements</ListItem>
          <ListItem>no hidden fees or charges</ListItem>
        </ul>
        <Text className="font-semibold">Immediate Start</Text>
        <Text>As soon as you sign up, you have instant access to your course.</Text>
        <Text>As the entire training takes around 3 - 4 hours, some students sign up and complete the course on the same day.</Text>
        <Text>If you prefer to take your time, we allow 12 months to complete the course and you can start and stop as often as you like.</Text>
      </div>
      <div className="flex flex-col">
        <Accordion classes={{ root: "shadow-none p-0 border-[1px] border-afs-green m-0", expanded: "m-0" }}>
          <AccordionSummary className="bg-afs-light-gray w-full" classes={{ root: 'p-3 border-[1px] border-afs-green', content: 'p-0 m-0'}} expandIcon="+">
            <Text className="text-afs-green">Course Outline</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Text className="font-semibold">Hospitality Sector and Health {`&`} Community Sector</Text>
            <Text>The course is split into five lessons, one case study, a reading activity and an observer report.</Text>
            <Text>The lessons in the course are:</Text>
            <ul>
              <ListItem>Lesson 1 - Food Safety Laws {`&`} Responsibilities</ListItem>
              <ListItem>Lesson 2 - Understanding Food Safety</ListItem>
              <ListItem>Lesson 3 - Maintaining a Clean Workplace</ListItem>
              <ListItem>Lesson 4 - Personal Hygiene</ListItem>
              <ListItem>Lesson 5 - Food Safety Programs</ListItem>
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
          </AccordionDetails>
        </Accordion>
        <Accordion classes={{ root: "shadow-none p-0 border-[1px] border-afs-green" }}>
          <AccordionSummary className="bg-afs-light-gray w-full" classes={{ root: 'p-3 border-[1px] border-afs-green', content: 'p-0 m-0'}} expandIcon="+">
            <Text className="text-afs-green">Assessment Process</Text>
          </AccordionSummary>
          <AccordionDetails>
            <Text className="text-afs-green">Quizzes</Text>
            <Text>At the end of each lesson, {`there's`} a multiple choice quiz. You have 5 attempts at each quiz and must score 100% to move onto the next lesson. If you {`don't`} pass the quiz after 5 attempts, simply get in touch and {`we'll`} help you progress to the next section.</Text>
            <Text className="text-afs-green">Case Study</Text>
            <Text>After {`you've`} completed all the lessons, {`there's`} a short case study. To complete this, {`you'll`} read a short scenario and then answer a multiple choice quiz, which is similar to the quizzes {`you've`} already completed at the end of the lessons.</Text>
            <Text className="text-afs-green">Reading Activity</Text>
            <Text>If you selected the hospitality sector for your training, you will complete a reading activity about Food Safety Plans and HACCP (Hazard Analysis Critical Control Points).</Text>
            <Text>If you selected the Health {`&`} Community sector, you will complete a reading activity that covers appropriate workwear / footwear in the workplace.</Text>
            <Text>Simply download the PDF from the course page and then complete the multiple choice quiz.</Text>
            <Text className="text-afs-green">Observer Report</Text>
            <Text>There are some things we {`can't`} see you doing through your computer — such as washing your hands or wearing the correct clothes for work. In order to comply with the government requirements for Food Handler training, you do need to demonstrate that you can perform such tasks correctly.</Text>
            <Text>To make this as easy as possible for you, we allow you to be observed by a co-worker or supervisor. Simply provide the name and contact information for your nominated observer when {`you're`} filling out your student registration.</Text>
            <Text>Once you complete your registration, your nominated observer will receive an email with options to print the form or complete it online.</Text>
            <Text className="text-afs-green">Quality Assurance Process</Text>
            <Text>As part of our quality assurance process, we reserve the right to contact you or your nominated observer to conduct a competency conversation or verification of assessment prior to awarding certification. </Text>

          </AccordionDetails>
        </Accordion>

        <CollapsibleTableCell
            summary={<Text className="text-afs-green">Prerequisites</Text> }
            details={<>
              <Text className="pb-2">There are no training prerequisites for this course - you can simply enrol and get started.</Text>
              <Text className="text-afs-green">Language, Literacy and Numeracy</Text>
              <Text>Whilst there are no training prerequisites, there are some requirements around language, literacy and numeracy. In order to complete this course you should be able to perform everyday tasks such as:</Text>
              <ul className="py-2">
                <ListItem>Using an instant messenger tool</ListItem>
                <ListItem>Sending SMS text messages</ListItem>
                <ListItem>Responding to customer complaints</ListItem>
                <ListItem>Reading weights on a digital scale</ListItem>
              </ul>
              <Text>If you have any concerns about the skills required to participate in this course, please contact us and {`we'll`} be happy to discuss your situation.</Text>
            </>}
          />
          <CollapsibleTableCell
            summary={<Text className="text-afs-green">Course Preview</Text> }
            details={<>
              <Text className="pb-2">Click on the {`'Play'`} button below to watch a preview of the Food Handler course.</Text>
              {/* TODO: WISTIA */}
            </>}
        />
      </div>
    </div>
  </SectionContainer>
}

export default Page;