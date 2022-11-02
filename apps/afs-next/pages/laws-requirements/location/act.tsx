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
  pathname: "laws-requirements/location/act",
  displayPathname: "LAWS & REQUIREMENTS/ BY LOCATION /FOOD SAFETY LAWS & LEGISLATION AUSTRALIAN CAPITAL TERRITORY",
  header: "Food Safety Laws & Legislation Australian Capital Territory",
  subheader: "Learn about all the laws governing businesses in the ACT that sell and produce food, how to comply with these laws, and the serious consequences if you don't.",
  navigation: navigationLocationPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation Australian Capital Territory | AIFS`} metaDescription="Learn about all the laws governing businesses in the ACT that sell and produce food, how to comply with these laws, and the serious consequences if you don't.">
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
  return <FoodSafetyLeg title="ACT food safety legislation" pt2="ACT government food safety laws" imageSrc="/laws-requirements/location/photo_act.jpg" alt="laws-requirements-for-employees-graphic" />;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">ACT territory laws and requirements</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
        <div>
          <Text className="font-semibold">ACT Legislation</Text>
          <Text>In the Australian Capital Territory, food safety requirements are set by the Food Act 2001.</Text>
          <Text>This Act requires that food sold in the ACT is safe and suitable for human consumption and meets all standards set out in the Food Standards Code.</Text>
          <Text>Food Safety in ACT is governed by the ACT Health Protection Service.</Text>
          <Text className="font-semibold">Regulating & monitoring food safety in ACT</Text>
          <Text>The ACT Health Protection Service is responsible for regulating and monitoring food safety across the entire ACT food industry. This includes:</Text>
          <ul className="checklist">
            <ListItem>Food business registration</ListItem>
            <ListItem>Conducting food business inspections</ListItem>
            <ListItem>Providing food safety resources</ListItem>
            <ListItem>Specifying food safety training requirements</ListItem>
            <ListItem>Publishing the Register of Food Offences</ListItem>
            <ListItem>Managing kilojoule display legislation</ListItem>
          </ul>
        </div>
        <div>
          <Text className="font-semibold">Food safety training requirements</Text>
            <Text>One of the key requirements in the Food Act relates to food safety training.</Text>
            <Text>Every food business must have at least one designated Food Safety Supervisor on staff at all times.</Text>
            <Text className="font-semibold">Food Safety Supervisor training</Text>
            <Text>Food Safety Supervisors must oversee all staff and work practices to reduce the risks of foodborne illnesses in their workplaces.</Text>
            <Text>Anyone associated with the handling of food in a food business may become the nominated Food Safety Supervisor, from business owners to kitchen hands.</Text>
            <Text>AIFS has been authorised to deliver Food Safety Supervisor training that meets all legal requirements in the ACT.</Text>
            <Text className="font-semibold">Refresher training</Text>
            <Text>Food Safety Supervisor training must be completed at least once every five years in the ACT.</Text>
            <Text>If your certificate has expired you will need to complete a Food Safety Supervisor course with AIFS to receive re-certification.</Text>
            <Text>Food businesses have 30 working days from the date of expiry to ensure the appointed Food Safety Supervisor renews their training and obtains new Food Safety Supervisor certification.</Text>
          </div>
        </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments. In the ACT this is the ACT Health Protection Agency."/>;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V1" subtitle="The consequences of not complying with the relevant food safety legislation can be serious." p3="For serious breaches of legislation, the ACT Health Protection Agency may prosecute employees, proprietors, managers and/or individual company directors." p4="In the ACT, the names of food businesses that have breached food safety legislation are available to the public via the Register of Food Offences." p4_title="Register of food offences"/>;
};

export default Page;