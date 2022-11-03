import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const aboutNavigationData: NavigationProps = {
    title: "About Us",
    links: [
      { text:'Overview', href: '/about' },
      { text:'Our Mission', href:'/about/our-mission' },
      { text:'Media Centre', href:'/about/media' },
      { text:'AIFS in the Community', href:'/about/community' },
      { text:'Employment', href:'/about/employment' },
      { text:'Contact Us', href:'/contact' },
    ],
};

export const aboutOverviewData: GridTemplateProps = {
  id: 'about-overview-body-section',
  pathname: '/page-not-found',
  displayPathname: 'Australian Institute of Food Safety',
  navigation: aboutNavigationData,
  header: '404: Page Not Found',
  subheader: "The page you are looking for was removed or does not exist. Try one of these helpful links instead.",
  description: "The Australian Institute of Food Safety provides quality food safety education and resources to thousands of food businesses and the general public.",
  cards: [{
    title: "Home",
    description: "AIFS is Australia's leading provider of Food Safety Supervisor and Food Handler training. Courses are Nationally Recognised and accepted by local health authorities.",
    imageSrc: "/about/photo_ourmission.jpg",
    href: "/",
  },
  {
    title: "Courses",
    description: "Get the food safety training you need to meet compliance requirements and boost your career skills with a nationally recognised AIFS Food Safety Course.",
    imageSrc: "/about/photo_thankyou.jpg",
    href: "/courses",
  },
  {
    title: "Contact Us",
    description: "We'd love to hear your questions or comments. Please get in touch by any of our contact means and we'll be happy to help.",
    imageSrc: "/about/photo_contactus.jpg",
    href: "/contact",
  }],
};
