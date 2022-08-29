import { ReactNode } from 'react';
import Link from 'next/link';
import Layout from 'components/core/layout';
import { Text } from 'components/core';
import RowsTemplate, { Section }  from 'components/templates/RowsTemplate';
import { LawsRequirementsOverviewData } from 'components/laws-requirements/lawsRequirementsPageData';
import styles from './styles.module.scss';

export const LawsRequirementsBackground = ({ children }: { children: ReactNode }) => {
  return <div className="bg-afs-light-gray w-screen">
      <div className={`hidden md:block bg-[url('/laws-requirements/banner_laws_requirements.jpg')] bg-afs-light-gray py-16 bg-no-repeat w-full`}>
          { children }
      </div>
      {/* don't show background on tablets and smaller */}
      <div className="md:hidden bg-afs-light-gray w-full">
          { children }
      </div>
  </div>;
};

const Home = () => {
  return (
    <Layout>
      <LawsRequirementsBackground><RowsTemplate {...LawsRequirementsOverviewData}>
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

const Divider = () => <div className="mb-[30px] border-b-[1px] border-afs-light-gray col-span-3" />;

type LinkType = { text: string, href: string };
const RoleSectionLinkData: Array<LinkType> = [
  { text: "For Job Seekers", href: "/laws-requirements/role/for-job-seekers" },
  { text: "For Employees", href: "/laws-requirements/role/for-employees" },
  { text: "For New Businesses", href: "/laws-requirements/role/for-new-businesses" },
  { text: "For Established Businesses", href: "/laws-requirements/role/for-established-businesses" },
  { text: "For Training Managers", href: "/laws-requirements/role/for-training-managers" },
];

const RoleSection = () => {
  return <Section 
    title="By Role"
    imageSrc="/laws-requirements/photo_newbusiness.jpg"
    className={styles["laws-requirements"]}
>
    <div className="flex flex-col pr-4">
      <Text className="pb-5">Find out more about food safety training and legislation in relation to your role in the food industry.</Text>
      <ul>
        { RoleSectionLinkData.map((link, i) => {
            return <li className="ml-4 my-1.5" key={`role-section-link-${i}`}><Link href={link.href}><a className="link">{link.text}</a></Link></li>;
        })}
      </ul>
    </div>
  </Section>;
};

const SectorSectionLinkData: Array<LinkType> = [
  { text: "Hospitality", href: "/laws-requirements/food-sectors/hospitality-sector" },
  { text: "Retail", href: "/laws-requirements/food-sectors/retail" },
  { text: "Health & Community", href: "/laws-requirements/food-sectors/health-community" },
  { text: "Food Processing", href: "/laws-requirements/food-sectors/food-processing" },
  { text: "Transport & Distribution", href: "/laws-requirements/food-sectors/transport-distribution" },
];

const SectorSection = () => {
  return <Section 
    title="By Sector"
    imageSrc="/laws-requirements/photo_hospitality.jpg"
    className={styles["laws-requirements"]}
    >
      <div className="flex flex-col pr-4">
        <Text className="pb-5">Food safety training in Australia is sector specific. To be a compliant Food Safety Supervisor you need to complete training for the correct food sector.</Text>
        <Text className="pb-5">Learn about the recognised units of competency for Food Safety Supervisor training in your sector.</Text>
        <ul>
          { SectorSectionLinkData.map((link, i) => {
              return <li className="ml-4 my-1.5" key={`role-section-link-${i}`}><Link href={link.href}><a className="link">{link.text}</a></Link></li>;
          })}
        </ul>
      </div>
  </Section>;
};

const LocationSectionLinkData: Array<LinkType> = [
  { text: "New South Wales", href: "/laws-requirements/location/new-south-wales" },
  { text: "Victoria", href: "/laws-requirements/location/victoria" },
  { text: "Queensland", href: "/laws-requirements/location/queensland" },
  { text: "Australian Capital Territory", href: "/laws-requirements/location/act" },
  { text: "SA / NT / WA / TAS", href: "/laws-requirements/location/sa-nt-wa-tas" },
];
const LocationSection = () => {
  return <Section 
    title="By Location"
    imageSrc="/laws-requirements/photo_vic.jpg"
    className={styles["laws-requirements"]}
    >
      <div className="flex flex-col pr-4">
        <Text className="pb-5">Food safety laws and requirements differ across the states and territories of Australia. It&apos;s important to understand the regulations you need to follow to be compliant.</Text>
        <Text className="pb-5">Find out more about the laws and requirements where your business operates.</Text>
        <ul>
          { LocationSectionLinkData.map((link, i) => {
              return <li className="ml-4 my-1.5" key={`role-section-link-${i}`}><Link href={link.href}><a className="link">{link.text}</a></Link></li>;
          })}
        </ul>
      </div>
  </Section>;
};

export default Home;
