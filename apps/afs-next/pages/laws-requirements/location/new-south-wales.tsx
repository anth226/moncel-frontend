import NextLink from 'next/link';
import Layout from 'components/core/layout';
import { Header3, Text, Link } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationLocationPageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, ListItem } from 'components/core/templates';
import FederalLocalLaws from '../../../components/laws-requirements/shared/federal-local-laws';
import WhatHappensDontComply from '../../../components/laws-requirements/shared/what-happens-dont-comply';
import FoodSafetyLeg from '../../../components/laws-requirements/shared/food-safety-legislation';

const TemplateData = {
  ...LawsRequirementsPageData,
  pathname: "laws-requirements/location/new-south-wales",
  displayPathname: "LAWS & REQUIREMENTS/BY LOCATION/FOOD SAFETY LAWS & LEGISLATION NEW SOUTH WALES",
  header: "Food Safety Laws & Legislation New South Wales",
  subheader: "Learn about the laws governing businesses in NSW that sell and produce food, how to comply with these laws and the serious consequences if you don't.",
  navigation: navigationLocationPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation New South Wales | AIFS`} metaDescription="Learn about the laws governing businesses in NSW that sell and produce food, how to comply with these laws and the serious consequences if you don't.">
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
  return <FoodSafetyLeg title="NSW food safety legislation" pt2="NSW government food safety laws" imageSrc="/laws-requirements/location/photo_nsw.jpg" alt="NSW food safety legislation" />;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">New South Wales state laws and requirements</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
        <div>
          <Text className="font-semibold">NSW Legislation</Text>
          <Text>In NSW, food safety requirements are set by the Food Act 2003 (NSW) and the Food Regulation 2015 (NSW).</Text>
          <Text>These Acts require that food sold in NSW is safe and suitable for human consumption and meets all standards set out in the Food Standards Code.</Text>
          <Text>Food Safety in New South Wales is governed by the NSW Food Authority which comes under the Department of Primary Industries.</Text>
          <Text>Together with NSW Health, the NSW Food Authority monitors food safety across the whole state. They make sure the food produced and sold in NSW meets all of the guidelines set out in the relevant state-based legislation.</Text>
          <Text className="font-semibold">Regulating & monitoring food safety in NSW</Text>
          <Text>The NSW Food Authority is responsible for regulating and monitoring food safety across the entire NSW food industry. This includes:</Text>
          <ul className="checklist">
            <ListItem>Food business licensing</ListItem>
            <ListItem>Conducting food business inspections (in partnership with local councils)</ListItem>
            <ListItem>Managing food labelling requirements</ListItem>
            <ListItem>Specifying food safety training requirements</ListItem>
            <ListItem>Operating the Scores on Doors scheme</ListItem>
            <ListItem>Publishing the NSW Name & Shame List</ListItem>
            <ListItem>Providing food recall information</ListItem>
          </ul>
        </div>
        <div>
          <Text className="font-semibold">Food safety training requirements</Text>
            <Text>One of the key requirements in the NSW Food Act relates to food safety training.</Text>
            <Text>Every food business must have at least one designated Food Safety Supervisor on staff at all times.</Text>
            <Text>This person is responsible for overseeing the day-to-day implementation of food safety in the workplace and must be trained in the right way.</Text>
            <Text className="font-semibold">Food Safety Supervisor training</Text>
            <Text>AIFS has been approved by the NSW Food Authority to deliver NSW specific Food Safety Supervisor training.</Text>
            <Text>This includes three key areas:</Text>
            <ol>
              <ListItem>Safe egg handling</ListItem>
              <ListItem>Allergen management</ListItem>
              <ListItem>Cleaning and sanitising practices</ListItem>
            </ol>
            <Text>When you complete training with AIFS, {`we'll`} provide you with a NSW Food Safety Supervisor Certificate on behalf of the NSW Food Authority.</Text>
            <Text>This must be displayed in the food business.</Text>
            <Text className="font-semibold">NSW Recertification</Text>
            <Text>Once you receive your Food Safety Supervisor qualification, the certificate is valid for 5 years from the date of issue.</Text>
            <Text>If your certificate is due to expire {`you'll`} need to complete the <NextLink href="/courses/nsw-recertification"><Link className="font-semibold">NSW Recertification</Link></NextLink> course to receive re-certification issued by the NSW Food Authority.</Text>
            <Text>Food businesses have 30 working days to ensure their appointed Food Safety Supervisor renews their training and obtains a new Food Safety Supervisor certification.</Text>
          </div>
        </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments. In New South Wales, this is the NSW Food Authority."/>;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V1" subtitle="If a food business fails to meet these food safety training requirements, the consequences are serious." p3="For serious breaches of legislation, the NSW Food Authority may prosecute employees, proprietors, managers and/or individual company directors." p4="In NSW, the names of food businesses that have breached food safety legislation are available to the public via a 'Name & Shame' list."/>;
};

export default Page;