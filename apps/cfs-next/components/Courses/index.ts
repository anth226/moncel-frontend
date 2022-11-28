import { GridTemplateProps, NavigationProps } from 'components/Templates/types';

export const navigationData: NavigationProps = {
    title: "Food Safety Courses",
    links: [
      { text:'Overview', href: '/courses' },
      { text:'Food Safety Supervisor', href:'/courses/food-safety-supervisor' },
      { text:'Food Handler Course', href:'/courses/food-handler-course' },
      { text: 'NSW Recertification', href: '/courses/nsw-recertification' },
      { text: 'Food Safety Manager', href: '/courses/food-safety-manager' },
      { text: 'Introduction to Food Safety', href: 'courses/introduction-to-food-safety-course' }
    ],
};

export const coursePageOverviewData: GridTemplateProps = {
  id: 'course-page-overview-body-section',
  pathname: '/courses',
  displayPathname: 'Food Safety Courses',
  navigation: navigationData,
  header: 'Food Safety Courses',
  subheader: 'Get the food safety training you need to meet compliance requirements and boost your career skills with a nationally recognised AIFS Food Safety Course.',
  description: "Whether you need to complete mandatory compliance training or you're just looking for a basic food safety course, AIFS has your needs covered.",
  cards: [{
    title: "Food Safety Supervisor",
    description: "The nationally recognised Food Safety Supervisor course is approved to meet all state legislative requirements including for NSW, QLD, VIC and ACT.",
    imageSrc: "/courses/food-safety-supervisor.jpg",
    href: "/courses/food-safety-supervisor",
  },
  {
    title: "Food Handler Course",
    description: "The Food Handler course is recommended for all food workers and is designed to meet federal requirements for food safety training.",
    imageSrc: "/courses/food-handler.jpg",
    href: "/courses/food-handler-course",
  },
  {
    title: "NSW Recertification",
    description: "Approved by the NSW Food Authority, this course is for food workers required to renew their Food Safety Supervisor training.",
    imageSrc: "/courses/nsw-recertification.jpg",
    href: "/courses/nsw-recertification",
  },
  {
    title: "Food Safety Manager",
    description: "This in-depth course is designed to help food business managers ensure that food safety standards are met across their entire business.",
    imageSrc: "/courses/fsm.jpg",
    href: "/courses/food-safety-manager",
  },
  {
    title: "Intro to Food Safety",
    description: "The Introduction to Food Safety course is an entry level course designed to teach the basic skills and knowledge needed to handle food safely.",
    imageSrc: "/courses/intro-food-worker.jpg",
    href: "/courses/introduction-to-food-safety-course",
  }]
};

export const haccpNavigationData: NavigationProps = {
    title: "HACCP Programs",
    links: [
      { text:'Overview', href: '/haccp-programs' },
      { text:'What is HACCP?', href:'/haccp-programs/what-is-haccp' },
      { text:'HACCP Food Safety Plan', href:'/haccp-programs/haccp-food-safety-plan-kit' },
    ],
};
