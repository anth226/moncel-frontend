import Layout from 'components/core/layout';
import NextLink from 'next/link';
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
  pathname: "laws-requirements/role/for-new-businesses",
  displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR NEW BUSINESSES",
  header: "Food Safety Laws & Requirements for New Businesses",
  subheader: "Starting a new food business is an exciting experience. However, there's some important legislation that you need to think about before you open your doors.",
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
          <Divider />
          <Section6 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">The first step to success is food safety</Header3>
    <IntroBox imageSrc="/laws-requirements/role/photo_newbusiness.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
        <Text>Every year in Australia, hundreds of businesses are fined or closed down for:</Text>
        <ul className="mb-4">
          <ListItem>not following the correct food safety procedures</ListItem>
          <ListItem>not adhering to food safety legislation</ListItem>
        </ul>
        <Text>Being serious about food safety from the start will help:</Text>
        <ul className="mb-4">
          <ListItem>protect your new food business from these problems</ListItem>
          <ListItem>protect your customers from getting sick</ListItem>
        </ul>
        <Text>In most states and territories, you need to have completed specific food safety training before you can even apply for your food business licence.</Text>
    </IntroBox>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">What is a food business?</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <Text>You may be surprised to discover that your new business is considered a food business by law. Examples of typical food businesses include:</Text>
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 md:gap-y-8`}>
          <ul className="mb-2 md:mb-0">
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
  return <div className="col-span-3">
    <Header3 className="pb-4">How to get a food business licence</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num1.svg"}
            title="Understand your classification"
            >
              <Text>Food business licences are issued depending on how your business is classed. Each state has their own classifications, usually based on food type risks and who your customers are.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num2.svg"}
            title="Complete mandatory training"
            >
              <Text>In most states and territories, at least one person who works in the business must have undertaken nationally recognised Food Safety Supervisor training before you apply for your licence.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num3.svg"}
            title="Apply to your local council"
            >
              <Text>Even though the laws around food business licensing are governed at a state and territory level, your licence application process is managed through your local council.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num4.svg"}
            title="Stay up-to-date"
            >
              <Text>In NSW and ACT, your Food Safety Supervisor must complete refresher training every five years. Even if you work elsewhere, {`it's`} good practice for the protection of your customers.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
  return <BeAware title="Understand food safety laws" subtitle="Before applying for your food business licence, you need to be sure that you understand your legal requirements. As a food business owner you need to be aware of two types of legislation:"/>;
};

const Section5 = () => {
  return <FoodSafetyCourses title="Train your staff properly" subtitle="The Australian Institute of Food Safety offers two nationally recognised courses designed to meet all state and federal requirements for food safety training:" fh1="This nationally recognised course meets federal requirements that anyone who works with food needs the appropriate food safety training for their role." fh2="It covers the most important elements of food safety including laws and regulations, personal hygiene, what causes food poisoning and how to maintain a clean workplace." fss1="This nationally recognised course is more advanced and meets specific state legislation for food safety training including for NSW, QLD, VIC and ACT." fss2="Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff, responsible for the overall implementation and management of food safety."/>;
};

const Section6 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">How to ensure your business complies</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_trainer.svg"}
            title="Train your staff"
            >
              <Text>Ensure all of your Food Handlers are trained in food safety. If {`you're`} in NSW, QLD, VIC or ACT, you also need to nominate and enrol your Food Safety Supervisor in a nationally recognised training course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_folder.svg"}
            title="Build a food safety plan"
            >
              <Text>Your food business needs a Food Safety Program based on HACCP principles. The <NextLink href="/haccp-food-safety-plan-kit">AIFS HACCP Food Safety Plan Kit</NextLink> gives you the tools and instructions you need to build a compliant Food Safety Program.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_license.svg"}
            title="Apply for your food business licence"
            >
              <Text>Once your staff are trained and your food safety plan is in place, you can start the application process for your food business licence. Be sure to check with your local council for any additional requirements.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_certificate.svg"}
            title="Display your food safety signage"
            >
              <Text>When you complete your training with AIFS, you get a Food Safety Decal and a Food Safety Display Certificate, recognised by customers nation-wide as testimony that {`you're`} serious about food safety.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_checklist_2.svg"}
            title="Prepare for a food safety inspection"
            >
              <Text>Keep your Food Safety Plan up-to-date and ensure your AIFS Food Safety Cards are in a convenient location. A Health Inspector can inspect your food business at any time without warning.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_calendar_clock.svg"}
            title="Stay up-to-date"
            >
              <Text>Everyone who registers in a nationally recognised AIFS course receives 12 months of free AIFS Membership, giving them access to food safety resources, recalls, food safety news and more. </Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

export default Page;