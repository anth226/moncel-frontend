import { RowsTemplateProps, NavigationProps, GridTemplateProps } from 'components/templates/types';
import { LinkType } from 'types';

import JobSeekersPreview from "public/laws-requirements/role/photo_jobseekers.jpg";
import EmployeesPreview from "public/laws-requirements/role/photo_employees.jpg";
import NewBusinessPreview from "public/laws-requirements/role/photo_newbusiness.jpg";
import EstablishedBusinessPreview from "public/laws-requirements/role/photo_establishedbusiness.jpg";
import TrainingManagersPreview from "public/laws-requirements/role/photo_trainingmanagers.jpg";

export const navigationData: NavigationProps = {
    title: "Laws & Requirements",
    links: [
      { text:'Overview', href: '/laws-requirements' },
      { text:`By Role`, href:'/laws-requirements/role' },
      { text:'By Food Sector', href:'/laws-requirements/food-sectors' },
      { text:'By Location', href:'/laws-requirements/location' },
    ],
};

export const LawsRequirementsPageData: Omit<RowsTemplateProps, "children"> = {
  id: "laws-requirements-page-overview",
  pathname: "laws-requirements",
  displayPathname: "Laws & Requirements",
  header: "Laws & Requirements",
  subheader: "Get the latest, easy-to-understand information on food safety legal requirements and how they affect you - based on your role, sector and location.",
  navigation: navigationData,
};

const navigationRoleFragment: Array<LinkType> = [
  { text:'\u00A0\u00A0\u00A0\u00A0For Job Seekers', href:'/laws-requirements/role/for-job-seekers' },
  { text:'\u00A0\u00A0\u00A0\u00A0For Employees', href:'/laws-requirements/role/for-employees' },
  { text:'\u00A0\u00A0\u00A0\u00A0For New Businesses', href:'/laws-requirements/role/for-new-businesses' },
  { text:'\u00A0\u00A0\u00A0\u00A0For Established Businesses', href:'/laws-requirements/role/for-established-businesses' },
  { text:'\u00A0\u00A0\u00A0\u00A0For Training Managers', href:'/laws-requirements/role/for-training-managers' },
  
];
const navigationSectorFragment: Array<LinkType> = [
  { text:'\u00A0\u00A0\u00A0\u00A0Hospitality Sector', href:'/laws-requirements/food-sectors/hospitality-sector' },
  { text:'\u00A0\u00A0\u00A0\u00A0Retail Sector', href:'/laws-requirements/food-sectors/retail' },
  { text:'\u00A0\u00A0\u00A0\u00A0Health & Community Sector', href:'/laws-requirements/food-sectors/health-community' },
  { text:'\u00A0\u00A0\u00A0\u00A0Food Processing Sector', href:'/laws-requirements/food-sectors/food-processing' },
  { text:'\u00A0\u00A0\u00A0\u00A0Transport & Distribution Sector', href:'/laws-requirements/food-sectors/transport-distribution' },
];
  
const navigationLocationFragment: Array<LinkType> = [
  { text:'\u00A0\u00A0\u00A0\u00A0New South Wales', href:'/laws-requirements/location/new-south-wales' },
  { text:'\u00A0\u00A0\u00A0\u00A0Victoria', href:'/laws-requirements/location/victoria' },
  { text:'\u00A0\u00A0\u00A0\u00A0Queensland', href:'/laws-requirements/location/queensland' },
  { text:'\u00A0\u00A0\u00A0\u00A0Australian Capital Territory', href:'/laws-requirements/location/act' },
  { text:'\u00A0\u00A0\u00A0\u00A0SA / NT / WA / TAS', href:'/laws-requirements/location/sa-nt-wa-tas' },
];

/**
 * Add laws-requirements fragment data to base navigationData
 */

const insertFragment = (searchText: string, fragment: Array<LinkType>) => {
  const links = navigationData.links;
  const newLinks = links.reduce((newLinks, link) => {
    newLinks = newLinks.concat([link]);
    if(link.text === searchText) {
      newLinks = newLinks.concat(fragment)
    }
    return newLinks;
  }, [] as Array<LinkType>);
  return newLinks;
};

const navigationRoleLinkData = insertFragment("By Role", navigationRoleFragment);
const navigationSectorLinkData = insertFragment("By Food Sector", navigationSectorFragment);
const navigationLocationLinkData = insertFragment("By Location", navigationLocationFragment);

export const navigationRolePageData = {
  ...navigationData,
  links: navigationRoleLinkData,
};

export const navigationSectorPageData = {
  ...navigationData,
  links: navigationSectorLinkData,
};

export const navigationLocationPageData = {
  ...navigationData,
  links: navigationLocationLinkData,
};


export const LawsRequirementsRoleOverviewData: GridTemplateProps = {
  id: "laws-requirements-role-overview",
  pathname: "laws-requirements/role",
  displayPathname: "Laws & Requirements/By Role",
  header: "By Role",
  subheader: "Confused by food safety laws and how they apply to you? Whether you're new or established in the food industry these guides will set you in the right direction.",
  description: "Whether you're just starting out in the food industry, or an established professional who needs to upskill or train multiple employees, AIFS can help. Simply choose the description that applies to you - and click to learn more.",
  navigation: navigationData,
  cards: [{
    title: "Food Safety Laws & Requirements for Job Seekers",
    description: "Searching for a job in the food industry? Food safety training is required by law and boosts your job prospects.",
    imageSrc: JobSeekersPreview,
    href: "/laws-requirements/role/for-job-seekers",
  },
  {
    title: "Food Safety Laws & Requirements for Employees",
    description: "Ensure your food safety training is up-to-date and nationally recognised - while protecting your customers.",
    imageSrc: EmployeesPreview,
    href: "/laws-requirements/role/for-employees",
  },
  {
    title: "Food Safety Laws & Requirements for New Businesses",
    description: "Find out how to meet your legal requirements, get a food business licence and the proper training required.",
    imageSrc: NewBusinessPreview,
    href: "/laws-requirements/role/for-new-businesses",
  },
  {
    title: "Food Safety Laws & Requirements for Established Businesses",
    description: "As staff move and laws change, make sure you're meeting the latest state and federal compliance requirements.",
    imageSrc: EstablishedBusinessPreview,
    href: "/laws-requirements/role/for-established-businesses",
  },
  {
    title: "Food Safety Laws & Requirements for Training Managers",
    description: "Need to train multiple employees? Make sure they get the proper training they need for their location and food sector.",
    imageSrc: TrainingManagersPreview,
    href: "/laws-requirements/role/for-training-managers",
  }],
};

export const LawsRequirementsSectorOverviewData: GridTemplateProps = {
  id: "laws-requirements-sector-overview",
  pathname: "laws-requirements/food-sectors",
  displayPathname: "Laws & Requirements/By Food Sector",
  header: "By Food Sector",
  subheader: "To meet food safety laws, your food workers need to complete sector specific training. Find your correct sector and understand your training requirements here.",
  description: "There are five recognised food sectors in Australia - Hospitality, Retail, Food Processing, Health & Community, and Transport & Distribution. Select from the boxes below to discover more about your sector and compliance requirements.",
  navigation: navigationData,
  cards: [{
    title: "Food Safety Training Requirements for Hospitality",
    description: "If you have a business that prepares and serves food to customers it's classified as a hospitality business.",
    imageSrc: "/laws-requirements/food-sectors/photo_hospitality.jpg",
    href: "/laws-requirements/food-sectors/hospitality-sector",
  },
  {
    title: "Food Safety Training Requirements for Retail",
    description: "Businesses where food is sold to customers (usually to be consumed elsewhere) are in the food retail sector.",
    imageSrc: "/laws-requirements/food-sectors/photo_retail.jpg",
    href: "/laws-requirements/food-sectors/retail",
  },
  {
    title: "Food Safety Training Requirements for Health & Community",
    description: "Health organisations prepare and serve food to vulnerable people - the sick, pregnant women, the elderly, children and babies.",
    imageSrc: "/laws-requirements/food-sectors/photo_healthcommunity.jpg",
    href: "/laws-requirements/food-sectors/health-community",
  },
  {
    title: "Food Safety Training Requirements for Food Processing",
    description: "Any business where food is manufactured or processed is considered a food processing business.",
    imageSrc: "/laws-requirements/food-sectors/photo_foodprocessing.jpg",
    href: "/laws-requirements/food-sectors/food-processing",
  },
  {
    title: "Food Safety Training Requirements for Transport & Distribution",
    description: "If your business transports or stores food and drink, then it's considered a food transport and distribution business",
    imageSrc: "/laws-requirements/food-sectors/photo_transport_distribution.jpg",
    href: "/laws-requirements/food-sectors/transport-distribution",
  }],
};

export const LawsRequirementsLocationOverviewData: GridTemplateProps = {
  id: "laws-requirements-location-overview",
  pathname: "laws-requirements/location",
  displayPathname: "Laws & Requirements/By Location",
  header: "By Location",
  subheader: "Food safety laws differ across the states and territories of Australia. Ensure that you're meeting federal, state and local requirements.",
  description: "Each Australian state and territory has it's own legislation relating to food safety. Learn what your business needs to do to comply in your state.",
  navigation: navigationData,
  cards: [{
    title: "Food Safety Laws & Legislation New South Wales",
    description: "If you operate a food business in NSW, there are requirements you need to meet that don't apply in other states.",
    imageSrc: "/laws-requirements/location/photo_nsw.jpg",
    href: "/laws-requirements/location/new-south-wales",
  },
  {
    title: "Food Safety Laws & Legislation Victoria",
    description: "If you operate a food business in VIC it's crucial to understand your food business classification and which laws to follow.",
    imageSrc: "/laws-requirements/location/photo_vic.jpg",
    href: "/laws-requirements/location/victoria",
  },
  {
    title: "Food Safety Laws & Legislation Queensland",
    description: "It's required by law that most food businesses in QLD have at least one Food Safety Supervisor on staff at all times.",
    imageSrc: "/laws-requirements/location/photo_qld.jpg",
    href: "/laws-requirements/location/queensland",
  },
  {
    title: "Food Safety Laws & Legislation Australian Capital Territory",
    description: "There are strict laws around food safety training in the ACT, including the need to renew your training every 5 years.",
    imageSrc: "/laws-requirements/location/photo_act.jpg",
    href: "/laws-requirements/location/act",
  },
  {
    title: "Food Safety Laws & Legislation SA / NT / WA / TAS",
    description: "Understand your state's food safety laws around business licensing and registration and penalties that may be enforced.",
    imageSrc: "/laws-requirements/location/photo_australia.jpg",
    href: "/laws-requirements/location/sa-nt-wa-tas",
  }],
}