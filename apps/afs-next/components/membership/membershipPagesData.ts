import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const membershipNavigationData: NavigationProps = {
    title: "AIFS Membership",
    links: [
      { text:'Overview', href: '/membership' },
      { text:'Membership Program', href:'/membership/membership-program' },
      { text:'Food Safety Decal', href:'/membership/food-safety-decal' },
    ],
};

export const membershipOverviewData: GridTemplateProps = {
  id: 'membership-overview-body-section',
  pathname: '/membership',
  displayPathname: 'MEMBERSHIP',
  navigation: membershipNavigationData,
  header: 'Membership',
  subheader: `As an AIFS member, you'll join thousands of Australian food workers who demonstrate to customers and Health Inspectors that they're serious about food safety.`,
  description: "Food safety is crucial to protecting your customers and reputation. AIFS Membership can help you to safeguard your customers, business and yourself from the consequences of a food safety incident and provides you with widely recognised signage to show customers you're 'Serious About Food Safety'.",
  cards: [{
    title: "Membership Program",
    description: "Learn about the AIFS Membership Program, all the great benefits, what's included and how you can become a member.",
    imageSrc: "/membership/photo_membership_program.jpg",
    href: "/membership/membership-program",
  },
  {
    title: "Food Safety Decal",
    description: "Apply your official 'Serious about Food Safety' Decal to your business door or window to attract more business.",
    imageSrc: "/membership/photo_decal.jpg",
    href: "/membership/food-safety-decal",
  }],
};
