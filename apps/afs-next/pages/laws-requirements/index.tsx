import { ReactNode } from 'react';
import Link from 'next/link';
import Layout from 'components/core/layout';
import { Text, Header3 } from 'components/core';
import RowsTemplate from 'components/templates/RowsTemplate';
import { LawsRequirementsPageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { IntroBox, Divider } from 'components/core/templates';
import { SectionContainer } from 'components/core/SectionContainer';

import RoleGraphic from 'public/laws-requirements/photo_newbusiness.jpg';
import SectorGraphic from 'public/laws-requirements/photo_hospitality.jpg';
import LocationGraphic from 'public/laws-requirements/photo_vic.jpg';

export const LawsRequirementsBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white relative lg:bg-haze -z-0">
    <div className="hidden lg:block bg-[url('/laws-requirements/banner_laws_requirements.jpg')] bg-no-repeat w-full bg-cover bg-center absolute h-[400px] -z-10"/>
    <div className={`hidden lg:block py-16 w-full z-10`} >
      { children }
    </div>
    <div className="lg:hidden w-full">
      {children}
    </div>
  </div>;
};


const Home = () => {
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation Australia | AIFS`} metaDescription='Get the latest, easy-to-understand information on food safety legal requirements and how they affect you - based on your role, sector and location.'>
      <LawsRequirementsBackground><RowsTemplate {...LawsRequirementsPageData}>
        <>
          <RoleSection />
          <Divider />
          <SectorSection />
          <Divider />
          <LocationSection />
        </>
      </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

type LinkType = { text: string, href: string };
const RoleSectionLinkData: Array<LinkType> = [
  { text: "For Job Seekers", href: "/laws-requirements/role/for-job-seekers" },
  { text: "For Employees", href: "/laws-requirements/role/for-employees" },
  { text: "For New Businesses", href: "/laws-requirements/role/for-new-businesses" },
  { text: "For Established Businesses", href: "/laws-requirements/role/for-established-businesses" },
  { text: "For Training Managers", href: "/laws-requirements/role/for-training-managers" },
];

const RoleSection = () => {
  return <SectionContainer className="col-span-3" id="laws-requirements-by-role">
    <Header3 className="pb-4">By Role</Header3>
    <IntroBox imageSrc={RoleGraphic} alt="By Role" >
      <Text>Find out more about food safety training and legislation in relation to your role in the food industry.</Text>
      <ul>
        {RoleSectionLinkData.map((link, i) => {
          return <li className="my-1.5" key={`role-section-link-${i}`}><Link href={link.href}>{link.text}</Link></li>;
        })}
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const SectorSectionLinkData: Array<LinkType> = [
  { text: "Hospitality", href: "/laws-requirements/food-sectors/hospitality-sector" },
  { text: "Retail", href: "/laws-requirements/food-sectors/retail" },
  { text: "Health & Community", href: "/laws-requirements/food-sectors/health-community" },
  { text: "Food Processing", href: "/laws-requirements/food-sectors/food-processing" },
  { text: "Transport & Distribution", href: "/laws-requirements/food-sectors/transport-distribution" },
];

const SectorSection = () => {
  return <SectionContainer className="col-span-3" id="laws-requirements-food-sectors">
    <Header3 className="pb-4">Food Sectors</Header3>
    <IntroBox imageSrc={SectorGraphic} alt="Food Sectors">
      <Text>Food safety training in Australia is sector specific. To be a compliant Food Safety Supervisor you need to complete training for the correct food sector.</Text>
      <Text>Learn about the recognised units of competency for Food Safety Supervisor training in your sector.</Text>
      <ul>
        {SectorSectionLinkData.map((link, i) => {
          return <li className="my-1.5" key={`role-section-link-${i}`}><Link href={link.href}>{link.text}</Link></li>;
        })}
      </ul>
    </IntroBox>
  </SectionContainer>;
};

const LocationSectionLinkData: Array<LinkType> = [
  { text: "New South Wales", href: "/laws-requirements/location/new-south-wales" },
  { text: "Victoria", href: "/laws-requirements/location/victoria" },
  { text: "Queensland", href: "/laws-requirements/location/queensland" },
  { text: "Australian Capital Territory", href: "/laws-requirements/location/act" },
  { text: "SA / NT / WA / TAS", href: "/laws-requirements/location/sa-nt-wa-tas" },
];
const LocationSection = () => {
  return <SectionContainer className="col-span-3" id="laws-requirements-by-location">
    <Header3 className="pb-4">By Location</Header3>
    <IntroBox imageSrc={LocationGraphic} alt="By Location">
      <Text>Food safety laws and requirements differ across the states and territories of Australia. It&apos;s important to understand the regulations you need to follow to be compliant.</Text>
      <Text>Find out more about the laws and requirements where your business operates.</Text>
      <ul>
        {LocationSectionLinkData.map((link, i) => {
          return <li className="my-1.5" key={`role-section-link-${i}`}><Link href={link.href}>{link.text}</Link></li>;
        })}
      </ul>
    </IntroBox>
  </SectionContainer>;
};

export default Home;
