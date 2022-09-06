import NextLink from 'next/link';
import Image from 'next/image';
import Layout from 'components/core/layout';
import { Header3, Header5, Text, Link } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsOverviewData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';

import { Divider, ListItem, IconCard } from 'components/core/templates';
import styles from '../styles.module.scss';

const TemplateData = {
    ...LawsRequirementsOverviewData,
    pathname: "laws-requirements/role/for-established-businesses",
    displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR EMPLOYEES",
    header: "Food Safety Laws & Requirements For Employees",
    subheader: "If you currently work with food you'll already be aware of the importance of food safety. But don't forget that it's vital you keep your skills up-to-date."
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
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Transport {`&`} distribution food safety training</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">If your business stores or transports food, you and your employees need the right training to meet food safety laws.</Text>
        <ul>
          <ListItem>Bulk food carriers</ListItem>
          <ListItem>Food delivery services</ListItem>
          <ListItem>Warehouses that store food or food products</ListItem>
          <ListItem>Water carriers</ListItem>
        </ul>
      </div>
      <Image src="/laws-requirements/food-sectors/photo_transport_distribution.jpg" alt="laws-requirements-for-employees-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">How to comply with food safety laws</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_square_num1.svg"}
                title="Train your Food Safety Supervisor"
                >
                <Text className="pb-3.5">Most transport and distribution businesses must have at least one properly trained Food Safety Supervisor.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_square_num2.svg"}
                title="Apply for your business licence"
                >
                <Text className="pb-3.5">See your local council to apply for your business licence to start your transport or distribution business.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_square_num3.svg"}
                title="Train your Food Handlers"
                >
                <Text className="pb-3.5">Not just kitchen staff, but any employee who serves, moves, delivers or cleans food or food equipment.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_square_num4.svg"}
                title="Be food audit ready"
                >
                <Text className="pb-3.5">Keep your proof of nationally recognised food safety training nearby for food safety inspections.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Training requirements for transport {`&`} distribution businesses</Header3>
    <Text className="pb-3.5">Some of the worst food poisoning outbreaks in recent times have occurred from simple mistakes, such as someone not washing their hands properly.</Text>
    <Text className="pb-3.5">If your business causes a food-borne illness outbreak or is found to not be following food safety legislation the consequences can be dire.</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <div>
            <Header5 className="pb-3.5">Food Safety Supervisor requirements</Header5>
            <Text className="pb-3.5">In NSW, VIC, QLD and ACT, {`it's`} a mandatory requirement that transport and distribution businesses have at least one Food Safety Supervisor on their staff at all times.</Text>
            <Text className="pb-3.5">This means at least one person must have:</Text>
            <ul className={styles["checklist"]}>
              <ListItem>undergone nationally recognised training</ListItem>
              <ListItem>obtained the required units of competency to be recognised as a Food Safety Supervisor</ListItem>
            </ul>

            <Header5 className="pb-3.5">Additional NSW requirements</Header5>
            <Text>If you are in NSW:</Text>
            <ul>
              <ListItem>training must be delivered by a NSW Food Authority approved provider - such as AIFS</ListItem>
              <ListItem>you will receive your regular Statement of Attainment when you complete your Food Safety Supervisor training with AIFS</ListItem>
              <ListItem>you will also receive a certificate issued by the NSW Food Authority</ListItem>
            </ul>
            <Text className="pb-3.5">If {`you're`} applying for a new food business licence, {`you'll`} be asked for the certificate number from this document.</Text>
            <NextLink href="/courses/food-safety-supervisor"><Link className="font-semibold underline">Click here to learn more about this course.</Link></NextLink>
          </div>
          <div>
            <Header5 className="pb-3.5">Food Handler requirements</Header5>
            <Text className="pb-3.5">Federal legislation (governed by FSANZ) states that all Food Handlers must be trained in food safety.</Text>
            <Text className="pb-3.5">Many people are surprised to learn that Food Handlers {`aren't`} just those employees who work in the kitchen.</Text>
            <Text className="pb-3.5">A Food Handler can also be someone who:</Text>
            <ul>
              <ListItem>Serves food to customers</ListItem>
              <ListItem>Moves food into storage</ListItem>
              <ListItem>Delivers food</ListItem>
              <ListItem>Cleans equipment and utensils</ListItem>
            </ul>
            <Text className="pb-3.5">Simply put, anyone that comes into contact with food or food equipment in a food business is a {`'Food Handler'`}.</Text>
            <Text className="pb-3.5">All Food Handlers require the necessary food safety training to perform this role.</Text>
            <Text className="pb-3.5">The Food Handler Course offered by AIFS has been designed to meet this requirement.</Text>
            <NextLink href="/courses/food-handler-course"><Link className="font-semibold underline">Click here to learn more about this course.</Link></NextLink>
          </div>

          <div>

          </div>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Units of Competency</Header3>
    <div className="grid grid-cols-2 grid-flow-row gap-7">
      <Text className="pb-3.5">When you complete nationally recognised training, you are awarded a Statement of Attainment. This lists the units of competency that you have obtained.</Text>
      <Text className="pb-3.5">When a Health Inspector visits your premises, they may ask to see that your Statement of Attainment has the correct units of competency.</Text>
      <Header5 className="pb-3.5">Food Safety Supervisor course</Header5>
      <Text className="pb-3.5">After successfully completing the Food Safety Supervisor course for the transport and distribution sector, you will be awarded the following units:</Text>
      <ul className={styles["checklist"]}>
        <ListItem>SITXFSA001 Use hygienic practices for food safety</ListItem>
        <ListItem>SITXFSA002 Participate in safe food handling practices</ListItem>
      </ul>
      <Text className="pb-3.5">You may notice these are the same units as awarded for the hospitality sector. The Industry Skills Council for the transport and distribution sector has determined that the training requirements are the same.</Text>
      <Header5 className="pb-3.5">Food Handler course</Header5>
      <Text className="pb-3.5">After successfully completing the Food Handler course you will be awarded the following unit:</Text>\
      <ul className={styles["checklist"]}>
        <ListItem>SITXFSA001 Use hygienic practices for food safety</ListItem>
      </ul>
      <Header5 className="pb-3.5">Bridging Course</Header5>
      <Text>SITXFSA001 is one of the two units required to qualify as a Food Safety Supervisor. The Australian Institute of Food Safety allows students who have completed this unit to complete a bridging course, at a later date, in order to upgrade to become a qualified Food Safety Supervisor.</Text>
      <NextLink href="/contact"><Link className="font-semibold underline">Contact our support team if {`you'd`} like more information about this course.</Link></NextLink>
    </div>
  </div>;
};

export default Page;