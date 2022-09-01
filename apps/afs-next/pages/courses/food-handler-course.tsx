import Accordion from '@mui/material/Accordion';
import AccordionDetails from '@mui/material/AccordionDetails';
import AccordionSummary from '@mui/material/AccordionSummary';
import Statistic from 'components/core/Statistic';
import Image from 'next/image';
import Layout from 'components/core/layout';
import { CoursesBackground, coursePageOverviewData } from 'components/courses';
import { Header3, Header4, Text } from 'components/core';
import { Divider, ListItem, IconCard, ImageBannerCard } from 'components/core/templates';
import { RowsTemplate } from 'components/templates';
import { LogosCarousel } from 'components/core/Carousel';
import AIFSMembershipGraphic from 'public/courses/food-handler/fh-aifs-membership.jpg';
import FoodSafetyCardGraphic from 'public/courses/food-handler/fh-food-safety-card.jpg';
import FHRecallAlerts from 'public/courses/food-handler/fh-recall-alerts.jpg';


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
          <LogosCarousel className="col-span-3" />
        </>
        </RowsTemplate></CoursesBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <div className="col-span-3 grid grid-cols-3" id="section-1">
    <div className={`${styles["courses"]} col-span-3`}>
      <div className="flex flex-col pr-4 col-span-3 md:col-span-1">
        <Text className="pb-5">In Australia, the Food Standards Code requires anyone who works with food to be trained in food safety.</Text>
        <Text className="pb-5">When you study online with AIFS you will:</Text>
        <ol>
          <ListItem>attain a nationally recognised skillset</ListItem>
          <ListItem>complete your course faster</ListItem>
          <ListItem>enjoy the many benefits of AIFS Membership</ListItem>

        </ol>
      </div>
      <Image src="/courses/fh-food-handler.jpg" alt="laws-requirements-for-employees-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="text-afs-green font-semibold pb-6">Food safety training is required for every food job</Header3>
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

export default Page;