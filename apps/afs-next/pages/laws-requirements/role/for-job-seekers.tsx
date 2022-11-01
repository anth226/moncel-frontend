import Layout from 'components/core/layout';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationRolePageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import FoodSafetyCourses from '../../../components/laws-requirements/shared/food-safety-courses';

const TemplateData = {
  ...LawsRequirementsPageData,
  pathname: "laws-requirements/role/for-job-seekers",
  displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR Job Seekers",
  header: "Food Safety Laws & Requirements For Job Seekers",
  subheader: "Working with food is rewarding, whether you’re a part-time pizza maker or a head chef. Whatever your role, don't forget that food safety is crucial to your career.",
  navigation: navigationRolePageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Requirements for Job Seekers | AIFS`} metaDescription="Working with food is rewarding, whether you’re a part-time pizza maker or a head chef. Whatever your role, don't forget that food safety is crucial to your career."> 
      <LawsRequirementsBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
          <Divider />
          <Section4 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Start your career the food safe way</Header3>
    <IntroBox imageSrc="/laws-requirements/role/photo_jobseekers.jpg" alt="laws-requirements-for-job-seekers-graphic">
        <Text>The food sector is an exciting and growing industry to work in whether you are at home or abroad.</Text>
        <Text>If you’re considering a career in the food industry, having an understanding of food safety is vital.</Text>
        <Text>This isn’t just the law. You must be confident that your actions {"don't"} make your customers sick — or worse.</Text>
    </IntroBox>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Food safety training is required for every food job</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text>Everyone who works with food needs to complete training. This is not just a requirement for people who work in hospitality, it applies to food workers in all kinds of businesses that handle food, such as:</Text>
        <Text>Learn about the recognised units of competency for Food Safety Supervisor training in your sector.</Text>
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 md:gap-y-8`}>
          <ul className="!mb-2 md:!mb-0">
            <ListItem>Cafes, restaurants and takeaways</ListItem>
            <ListItem>Hotels and motels</ListItem>
            <ListItem>Bars, pubs and clubs</ListItem>
            <ListItem>Event and conferences centres</ListItem>
            <ListItem>Casinos and gaming venues</ListItem>
            <ListItem>Market stalls</ListItem>
            <ListItem>Convenience stores</ListItem>
            <ListItem>Supermarkets</ListItem>
            <ListItem>Service stations</ListItem>
          </ul>
          <ul>
            <ListItem>Groceries, butchers, delis and bakeries</ListItem>
            <ListItem>Food based charity organisations</ListItem>
            <ListItem>Catering businesses</ListItem>
            <ListItem>Hospitals or hospices</ListItem>
            <ListItem>Child care or aged care facilities</ListItem>
            <ListItem>School canteens or tuckshops</ListItem>
            <ListItem>Food processing facilities</ListItem>
            <ListItem>Canneries, milleries or breweries</ListItem>
            <ListItem>Food delivery or storage services</ListItem>
          </ul>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <FoodSafetyCourses title="Which food safety course do I need to do?" subtitle="The training you need will depend on the type of job you want. The two main courses to choose from are:" fh2="It helps your job prospects too. Food business managers know that they don’t need to spend time and money on your food safety training." fss2="Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff. This course greatly boosts your employability."/>;
};

const Section4 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Be job ready for your food career</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
            title="Get trained as a Food Handler"
            >
              <Text>At a minimum, complete the Food Handler training course so that you have the skills you need to work with food safely.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
            title="Get trained as a Food Safety Supervisor"
            >
              <Text>To boost your chances of finding a job, consider a Food Safety Supervisor course that offers extra skills and knowledge.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
            title="Do compliance-guaranteed training"
            >
              <Text>AIFS food safety training is approved to meet all federal, state and local government legislation.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
            title="Check your food sector"
            >
              <Text>Food Safety Supervisor training is sector-specific. Be sure to do the right course for the sector you want to work in.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_nsw.svg"}
            title="NSW Food Authority approved"
            >
              <Text>Obtain your NSW Food Authority certificate when you complete the official AIFS Food Safety Supervisor course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_member.svg"}
            title="Become an AIFS Member"
            >
              <Text>Continue to build your skills with our member-only resources. Receive a free membership with one of our nationally recognized training courses.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

export default Page;