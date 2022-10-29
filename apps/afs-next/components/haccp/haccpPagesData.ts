import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const haccpNavigationData: NavigationProps = {
    title: "HACCP Programs",
    links: [
      { text:'Overview', href: '/haccp-programs' },
      { text:'What is HACCP?', href:'/haccp-programs/what-is-haccp' },
      { text:'HACCP Food Safety Plan', href:'/haccp-food-safety-plan-kit' },
    ],
};

export const haccpOverviewData: GridTemplateProps = {
  id: 'haccp-programs-overview-body-section',
  pathname: '/haccp-programs',
  displayPathname: 'HACCP FOOD SAFETY PROGRAMS',
  navigation: haccpNavigationData,
  header: 'HACCP Food Safety Programs',
  subheader: 'AIFS makes building a Food Safety Program quick and easy. Get the information and tools you need.',
  description: "A Food Safety Plan is a legal requirement and is an essential part of Food Safety Programs to prevent food safety hazards from occurring in your food business. AIFS has everything you need to build a Food Safety Plan that is customised and HACCP compliant.",
  cards: [{
    title: "What is HACCP?",
    description: "HACCP is a globally accepted food safety system and its principles can help you to take control of the food safety risks in your business.",
    imageSrc: "/haccp/afs-haccp02.jpg",
    href: "/haccp-programs/what-is-haccp",
  },
  {
    title: "HACCP Food Safety Plan",
    description: "The HACCP Food Safety Plan Kit gives you the tools and instructions you need to create a compliant Food Safety Plan for your business.",
    imageSrc: "/haccp/afs-haccp.jpg",
    href: "/haccp-food-safety-plan-kit",
  }],
};
