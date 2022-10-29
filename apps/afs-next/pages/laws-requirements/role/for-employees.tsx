import Layout from 'components/core/layout';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationRolePageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import BeAware from '../../../components/laws-requirements/shared/be-aware-food-safety-laws';
import FoodSafetyCourses from '../../../components/laws-requirements/shared/food-safety-courses';

const TemplateData = {
  ...LawsRequirementsPageData,
  pathname: "laws-requirements/role/for-employees",
  displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR EMPLOYEES",
  header: "Food Safety Laws & Requirements For Employees",
  subheader: "If you currently work with food you'll already be aware of the importance of food safety. But don't forget that it's vital you keep your skills up-to-date.",
  navigation: navigationRolePageData,
};

const Page = () => {
  return (
    <Layout>
      <LawsRequirementsBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
          <Divider />
          <Section4 />
          <Divider />
          <Section5 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Enhance your skills. Keep customers safe.</Header3>
    <IntroBox imageSrc="/laws-requirements/role/photo_employees.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
        <Text>Food safety training is crucial for two main reasons:</Text>
        <ol>
          <ListItem>It enables you to meet your legal requirements</ListItem>
          <ListItem>It helps you protect your customers lives</ListItem>
        </ol>
        <Text>{`If you're already working in the industry you've probably had some food safety training.`}</Text>
        <Text>Now may be the ideal time to boost your expertise by completing a nationally recognised food safety course.</Text>
    </IntroBox>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Why food safety should be your top priority</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text>Some of the worst food poisoning outbreaks in recent times have occurred from simple mistakes such as someone not washing their hands properly.</Text>
        <Text className="pb-4">If you cause a food-borne illness outbreak or {`don't`} follow food safety legislation the consequences can be serious. Here are just a few reasons why you need to make food safety your top priority:</Text>
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/icons/icon_stroke_green_people.svg"}
            title="It's your responsibility"
            >
              <Text>When you prepare or serve food to someone, their safety is in your hands. You have a responsibility to protect them from getting sick (or worse) from food-borne illness.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_legal_hammer.svg"}
            title="It's a legal requirement"
            >
              <Text>All food handlers must be trained in food safety. Plus, for most food businesses in Australia there needs to be one or more nominated Food Safety Supervisors. {`It's`} the law.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
            title="You need to be up-to-date"
            >
              <Text>When food safety laws change or {`there's`} a product recall, you need to know. If {`you're`} an AIFS member, {`you'll`} receive all the food safety information you need.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_team_communication.svg"}
            title="You're a role model"
            >
              <Text>If {`you've`} been at your workplace for a while, new employees will observe your actions and behave in the same way. By showing good food safety {`you'll`} be a role model for the whole business.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_employee.svg"}
            title="You'll impress your employer"
            >
              <Text>Not only will your boss be confident that {`you're`} protecting the business and {`it's`} customers, {`they'll`} be impressed with the food safety signage {`you'll`} receive after completing an AIFS course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_cv.svg"}
            title="You'll boost your career prospects"
            >
              <Text>Having a nationally recognised course on your resume is impressive. Food Safety Supervisors are in high demand and this course may allow you to move into more senior or leadership roles.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <BeAware />;
};

const Section4 = () => {
  return <FoodSafetyCourses title="Your food safety training choices" subtitle="The type of training best suited to you will depend on the job you have, your career aspirations and any legal requirements you are trying to meet. The two main courses to choose from are:" />;
};

const Section5 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">How to choose the right course for you</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/icons/icon_stroke_green_checkmark_box_stroke_tick.svg"}
            title="Do compliance-guaranteed training"
            >
              <Text>AIFS food safety training (standard and recertification) is approved to meet all federal, state and local legislation.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_factory.svg"}
            title="Check your food sector"
            >
              <Text>Food Safety Supervisor training is sector-specific. Be sure to do the right course for the sector you work in.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_nsw.svg"}
            title="NSW Food Authority approved"
            >
              <Text>Obtain your NSW Food Authority certificate when you complete the official AIFS Food Safety Supervisor course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/icons/icon_stroke_green_open_book.svg"}
            title="Choose ongoing training"
            >
              <Text>Benefits of an AIFS membership include unlimited access to food safety guides, posters, fact sheets, video, food recalls and much more.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

export default Page;