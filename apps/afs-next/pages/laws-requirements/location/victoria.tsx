import Layout from 'components/core/layout';
import { Header3, Text } from 'components/core';
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
    pathname: "laws-requirements/location/victoria",
    displayPathname: "LAWS & REQUIREMENTS/BY LOCATION/FOOD SAFETY LAWS & LEGISLATION VICTORIA",
    header: "Food Safety Laws & Legislation Victoria",
    subheader: "Learn about all the laws governing businesses in Victoria that sell and produce food, how to comply with these laws and the serious consequences if you don't.",
    navigation: navigationLocationPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation Victoria | Food Safety Training | AIFS`} metaDescription="Learn about all the laws governing businesses in Victoria that sell and produce food, how to comply with these laws and the serious consequences if you don't.">
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
  return <FoodSafetyLeg title="VIC food safety legislation" pt2="VIC government food safety laws" imageSrc="/laws-requirements/location/photo_vic.jpg" alt="VIC food safety legislation" />;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Victorian state laws and requirements</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
        <div>
          <Text className="font-semibold">VIC Legislation</Text>
          <Text>The sale and production of food in Victoria is controlled by the Food Act 1984.</Text>
          <Text>This legislation is enforced by the Victorian government Department of Health & Human Services.</Text>
          <Text>The Act requires that all food sold and produced in Victoria is safe for human consumption and meets all standards set out in the Food Standards Code.</Text>
          <Text className="font-semibold">VIC classification system</Text>
          <Text>A key component of the Act is a classification system for food businesses.</Text>
          <Text>Businesses are classified between Class 1 and 4 depending on their deemed risk to consumers:</Text>
          <ul className="pb-4">
            <ListItem>Class 1 businesses - highest risk</ListItem>
            <ListItem>Class 4 businesses - lowest risk</ListItem>
          </ul>
          <Text>The classification system guides Health Inspectors when they issue infringement notices for food safety breaches.</Text>
          <Text>Health Inspectors in Victoria have the authority to close businesses where there is an immediate threat to public health.</Text>
        </div>
        <div>
          <Text className="font-semibold">Training Requirements</Text>
            <Text>One of the key requirements in the VIC Food Act is related to food safety training.</Text>
            <Text>In Victoria, every Class 1 food business and most Class 2 food businesses must have at least one designated Food Safety Supervisor on staff at all times.</Text>
            <Text className="font-semibold">Food Safety Supervisor training</Text>
            <Text>Food Safety Supervisors are responsible for:</Text>
            <ul className="pb-4">
              <ListItem>overseeing day-to-day implementation of food safety in the workplace</ListItem>
              <ListItem>supervising and training food handlers in the business</ListItem>
            </ul>
            <Text>Food Safety Supervisors must have completed specific nationally recognised Food Safety Supervisor training.</Text>
            <Text>And if your Food Safety Supervisor leaves the business, a replacement must be appointed within 30 days.</Text>
            <Text>AIFS has been approved to deliver Food Safety Supervisor training in Victoria.</Text>
          </div>
        </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments. In Victoria, this is the Department of Health & Human Services."/>;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V2"/>;
};

export default Page;