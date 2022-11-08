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
    pathname: "laws-requirements/location/queensland",
    displayPathname: "LAWS & REQUIREMENTS/BY LOCATION /FOOD SAFETY LAWS & LEGISLATION QUEENSLAND",
    header: "Food Safety Laws & Legislation Queensland",
    subheader: "Learn about all the laws governing businesses in QLD that sell and produce food, how to comply with these laws, and the serious consequences if you don't.",
    navigation: navigationLocationPageData,
};

const Page = () => {
  return (
    <Layout metaDescription="Learn about all the laws governing businesses in QLD that sell and produce food, how to comply with these laws, and the serious consequences if you don't." pageTitle={`'Food Safety Laws & Legislation Queensland | AIFS'`}>
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
  return <FoodSafetyLeg title="QLD food safety legislation" pt2="QLD government food safety laws" imageSrc="/laws-requirements/location/photo_qld.jpg" alt="QLD food safety legislation" />;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Queensland state laws and requirements</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
        <div>
          <Text className="font-semibold">QLD Legislation</Text>
          <Text>In Queensland, food safety requirements are set by the Food Act 2006 (QLD).</Text>
          <Text>This Act requires that food sold in QLD is safe and suitable for human consumption and meets all standards set out in the Food Standards Code.</Text>
          <Text>Food Safety in Queensland is a joint responsibility of QLD Health and local government.</Text>
          <Text className="font-semibold">Regulating & monitoring food safety in QLD</Text>
          <Text>QLD Health is responsible for regulating and monitoring food safety across the entire Queensland food industry. This includes:</Text>
          <ul className="checklist">
            <ListItem>Food business licensing</ListItem>
            <ListItem>Conducting food business inspections (in partnership with local councils)</ListItem>
            <ListItem>Specifying food safety training requirements</ListItem>
          </ul>
        </div>
        <div>
          <Text className="font-semibold">Food safety training requirements</Text>
            <Text>One of the key requirements in Queensland relates to food safety training.</Text>
            <Text>In Queensland, every food business must have at least one designated Food Safety Supervisor on staff at all times.</Text>
            <Text>This person is responsible for overseeing the day to day implementation of food safety in the workplace and must be trained in the right way.</Text>
            <Text className="font-semibold">Food Safety Supervisor training</Text>
            <Text>QLD Health advise that the Food Safety Supervisor for a business may be:</Text>
            <ul className="pb-4">
              <ListItem>the licensee</ListItem>
              <ListItem>proprietor</ListItem>
              <ListItem>an employee</ListItem>
            </ul>
            <Text>They recommend there may be more than one Food Safety Supervisor for a business.</Text>
            <Text>Food Safety Supervisors must have completed specific nationally recognised Food Safety Supervisor training.</Text>
            <Text>AIFS has been approved to deliver Food Safety Supervisor training in Queensland.</Text>
          </div>
        </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments. In Queensland, this is Queensland Health." state="QLD" />;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V1" p3="For serious breaches of legislation, QLD Health may prosecute proprietors, managers and/or individual company directors." p4="Certain QLD councils publish a 'Name & Shame' list every year, with details of food businesses that have breached food safety legislation."/>;
};
export default Page;