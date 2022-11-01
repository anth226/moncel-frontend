import Layout from 'components/core/layout';
import { Header3, Text, Header4 } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationRolePageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import { LogosCarousel } from 'components/core/Carousel';
import BeAware from '../../../components/laws-requirements/shared/be-aware-food-safety-laws';
import FoodSafetyCourses from '../../../components/laws-requirements/shared/food-safety-courses';

const TemplateData = {
    ...LawsRequirementsPageData,
    pathname: "laws-requirements/role/for-training-managers",
    displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR TRAINING MANAGERS",
    header: "Food Safety Laws & Requirements for Training Managers",
    subheader: "Large organisations need to consider federal laws, state regulations, and the role and location of employees when planning food safety training.",
    navigation: navigationRolePageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`'Food Safety Laws & Requirements for Training Managers | AIFS'`} metaDescription='Need to train multiple employees? Make sure they get the proper training they need for their location and food sector.'>
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
    <Header3 className="pb-4">Food safety compliance is crucial</Header3>
    <IntroBox imageSrc="/laws-requirements/role/photo_trainingmanagers.jpg" alt="laws-requirements-for-employees-graphic" >
    <Text>Food safety training can pose many challenges to large organisations:</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <ul className="mb-4">
          <ListItem>{`It's`} a complex subject</ListItem>
          <ListItem>multiple state and federal compliance laws must be considered</ListItem>
          <ListItem>every {`employee's`} training must be valid</ListItem>
          <ListItem>many employees may need to be enrolled at different times</ListItem>
        </ul>
        <Text>And ultimately, you need to protect your customers and business reputation from food incidents.</Text>
        <Text>{`It's`} important that your food safety training meets all requirements - and is designed for large organisations to implement, manage and update on scale.</Text>
        </div>
        </div>
    </IntroBox>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">How AIFS helps your organisation comply</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
                title="Compliance-guaranteed training"
                >
                <Text>Our nationally recognised training is approved to meet all federal, state and local govt. legislation.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_laptop.svg"}
                title="A dedicated account manager"
                >
                <Text>Access to an AIFS expert to help with priority support enrolling students and any other business needs.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Industry relevant courses"
                >
                <Text>Tailored to each food sector - Hospitality, Retail, Food Processing, Health {`&`} Community, Transport {`&`} Distribution.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_magazine.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text>A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_green_employee.svg"}
                title="Easy student management"
                >
                <Text>Through our online corporate portal you can bulk enrol employees, check on their progress, review invoices and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_green_member_card.svg"}
                title="Health Inspector ready credentials"
                >
                <Text>AIFS graduates receive a Food Safety Card containing all proof of training details needed during a food audit.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_green_megaphone.svg"}
                title="Training reminders and notifications"
                >
                <Text>Ensure employees stay on top of their training with email and SMS course reminder notifications.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/icons/icon_stroke_green_invoice.svg"}
                title="Flexible billing
                "
                >
                <Text>Billing can be arranged on a per-order or monthly basis. A variety of options are available.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3" id="section-logos">
    <Header3 className="!mb-2 md:!mb-4">Partnering with {`Australia's`} largest food companies</Header3>
    <Header4 className="text-emperor !mb-8">Use our expertise to ensure your business and staff comply</Header4>
    <LogosCarousel />
</div>;
};

const Section4 = () => {
return <BeAware title="You must comply with all Food Safety Laws" />;
};

const Section5 = () => {
    return <FoodSafetyCourses title="Food safety training requirements for your staff" subtitle="AIFS offers two nationally recognised courses designed to meet all federal and state requirements:" fh1="This nationally recognised course meets federal laws that state anyone who works with food needs the appropriate food safety training for their role." fh2="It covers the most important elements of food safety including laws and regulations, personal hygiene, what causes food poisoning and how to maintain a clean workplace." fss1="This nationally recognised course is more advanced and meets specific state legislation for food safety training including in NSW, QLD, VIC and ACT." fss2="Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff, responsible for overall implementation and management of food safety."/>;
  };

export default Page;