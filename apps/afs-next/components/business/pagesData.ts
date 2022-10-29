import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const navigationData: NavigationProps = {
    title: "For Business",
    links: [
      { text:'Overview', href: '/business' },
      { text:'Why Food Safety', href:'/business/food-safety' },
      { text:'Small Business Solutions', href:'/business/small-business' },
      { text: 'Enterprise Solutions', href:'/business/enterprise' },
      { text: 'Business Accounts', href:'/business/accounts' },
      { text: 'Contact Us', href:'/contact' },
    ],
};

export const businessOverviewData: GridTemplateProps = {
  id: 'business-overview-body-section',
  pathname: '/business',
  displayPathname: 'Information For Business',
  navigation: navigationData,
  header: 'Information For Business',
  subheader: `Whether you're starting a local market stall or managing food safety for a national business, AIFS help you meet all legal requirements for food safety training.`,
  description: "At AIFS we train staff in all types of businesses - from sole traders to some of the biggest companies in Australia. Our tailored solutions meet the requirements of federal, state and industry-specific legislation. Find out more about how we can help your business.",
  cards: [{
    title: "Why Food Safety?",
    description: "The consequences of a food safety incident can be serious. Learn why food safety needs to be considered a top priority for your business.",
    imageSrc: "/business/photo_whyfoodsafety.jpg",
    href: "/business/food-safety",
  },
  {
    title: "Small Business Solutions",
    description: "Small businesses need to ensure all staff who handle food are trained properly. Our food safety training and support ensures you comply.",
    imageSrc: "/business/photo_small_business.jpg",
    href: "/business/small-business",
  },
  {
    title: "Enterprise Solutions",
    description: "Food safety incidents can ruin a brand. We deliver food safety training to Australia's largest organisations to prevent that from happening.",
    imageSrc: "/business/photo_enterprise.jpg",
    href: "/business/enterprise",
  },
  {
    title: "Business Accounts",
    description: "Business accounts enable bulk enrolments, student reporting and monthly invoicing. Discover how an AIFS business account can help you.",
    imageSrc: "/business/photo_business_accounts.jpg",
    href: "/business/accounts",
  },
  {
    title: "Contact Us",
    description: "We provide quality online training options for all of our food safety courses. Discover which is the right option for your employees.",
    imageSrc: "/business/photo_inhouse.jpg",
    href: "/contact",
  },
  {
    title: "FAQs",
    description: "Our Frequently Asked Questions are a great resource for business. We recommend starting here to see if you can find the answer to your question.",
    imageSrc: "/business/photo_business_faq.jpg",
    href: "/faq",
  }],
};
