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
  pathname: "laws-requirements/location/sa-nt-wa-tas",
  displayPathname: "LAWS & REQUIREMENTS/BY LOCATION/FOOD SAFETY LAWS & LEGISLATION SA / NT / WA / TAS",
  header: "Food Safety Laws & Legislation SA / NT / WA / TAS",
  subheader: "Learn about all the laws governing businesses in other states that sell and produce food, how to comply with these laws, and the serious consequences if you don't.",
  navigation: navigationLocationPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation SA / NT / WA / TAS | AIFS`} metaDescription='Learn about the laws governing food businesses in other states that sell and produce food and how to become compliant.'>
      <LawsRequirementsBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section4 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <FoodSafetyLeg imageSrc="/laws-requirements/location/photo_australia.jpg" alt="laws-requirements-for-employees-graphic" />;
};

const Section2 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments."/>;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V2"/>;
};


export default Page;
