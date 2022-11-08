import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const aboutNavigationData: NavigationProps = {
    title: "About Us",
    links: [
      { text:'Overview', href: '/about' },
      { text:'Our Mission', href:'/about/our-mission' },
      { text:'Media Centre', href:'https://blog.foodsafety.com.au/media' },
      { text:'AIFS in the Community', href:'/about/community' },
      { text:'Employment', href:'/about/employment' },
      { text:'Contact Us', href:'/contact' },
    ],
};

export const aboutOverviewData: GridTemplateProps = {
  id: 'about-overview-body-section',
  pathname: '/about',
  displayPathname: 'ABOUT US',
  navigation: aboutNavigationData,
  header: 'About Us',
  subheader: "At AIFS, we have a mission to reduce food-borne illness in Australia. To do this, we help food workers gain the food safety skills they need to protect their customers.",
  description: `The Australian Institute of Food Safety provides quality food safety education and resources to thousands of food businesses and the general public.

Our team is passionate about helping to reduce food-borne illness in Australia and tackling other food issues, such as food waste and hunger. 
  
We believe the first step to achieving these goals is quality education. We also donate much needed time and funds to our partner charities.`,
  cards: [{
    title: "Our Mission",
    description: "Our mission is to reduce food-borne illness in Australia through education, promotion and advocacy for better food safety.",
    imageSrc: "/about/photo_ourmission.jpg",
    href: "/about/our-mission",
  },
  {
    title: "Media Centre",
    description: "Writing an article or need comments on a food safety story? We'd love to talk with you and provide the information you need.",
    imageSrc: "/about/photo_media.jpg",
    href: "https://blog.foodsafety.com.au/media",
  },
  {
    title: "In The Community",
    description: "See how the AIFS team take a hands on approach to tackling food issues including food safety, food waste and hunger.",
    imageSrc: "/about/photo_ozharvest.jpg",
    href: "/about/community",
  },
  {
    title: "Employment",
    description: "Like to join a smart, professional team that's making a real difference? Discover what it's like to work with AIFS.",
    imageSrc: "/about/photo_employment.jpg",
    href: "/about/employment",
  },
  {
    title: "Contact Us",
    description: "We'd love to hear your questions or comments. Please get in touch by any of our contact means and we'll be happy to help.",
    imageSrc: "/about/photo_contactus.jpg",
    href: "/contact",
  }],
};
