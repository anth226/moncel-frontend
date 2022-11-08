import { useState } from 'react';
import Layout from 'components/core/layout';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationLocationPageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import { Divider } from 'components/core/templates';
import Tabs from 'components/core/Tabs';
import { Section } from 'components/core/Section';

import SA from 'components/laws-requirements/location/mdx/sa.mdx';
import NT from 'components/laws-requirements/location/mdx/nt.mdx';
import WA from 'components/laws-requirements/location/mdx/wa.mdx';
import TAS from 'components/laws-requirements/location/mdx/tas.mdx';

import FederalLocalLaws from '../../../components/laws-requirements/shared/federal-local-laws';
import WhatHappensDontComply from '../../../components/laws-requirements/shared/what-happens-dont-comply';
import FoodSafetyLeg from '../../../components/laws-requirements/shared/food-safety-legislation';

const TemplateData = {
  ...LawsRequirementsPageData,
  pathname: "laws-requirements/location/sa-nt-wa-tas",
  displayPathname: "LAWS & REQUIREMENTS/BY LOCATION/FOOD SAFETY LAWS & LEGISLATION SA NT WA TAS",
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
          <Section3 />
          <Divider />
          <Section4 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Section1 = () => {
  return <FoodSafetyLeg imageSrc="/laws-requirements/location/photo_australia.jpg" alt="Food Safety Laws & Legislation SA / NT / WA / TAS | AIFS" />;
};

const Section2 = () => {
  return <FederalLocalLaws governance="The Food Standards Code is governed by state and territory departments."/>;
};

const tabnames = [
  { title: "South Australia", code: "SA" }, 
  { title: "Northern Territory", code: "NT" }, 
  { title: "Western Australia", code: "WA" }, 
  { title: "Tasmania", code: "TAS" }
];

const Section3 = () => {
  const [activeTab, setActiveTab] = useState(0);
  return <div className="col-span-3">
      <Section>
          <Tabs tabNames={tabnames} activeTab={activeTab} handleTabClick={setActiveTab} />
      </Section>
      <Section>
          <div className="w-full">
              {/* Dynamic section displays selected tab */}
              <div className={`flex flex-col mdx border border-teal p-6 bg-alabaster -mt-[1px]`}>
                  {(activeTab === 0) ? <SA/> : null}

                  {(activeTab === 1) ? <NT/> : null}

                  {(activeTab === 2) ? <WA/> : null}

                  {(activeTab === 3) ? <TAS/> : null}
              </div>
          </div>
      </Section>
  </div>;
};

const Section4 = () => {
  return <WhatHappensDontComply version="V3"/>;
};


export default Page;
