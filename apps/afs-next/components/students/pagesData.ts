import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const navigationData: NavigationProps = {
    title: "For Students",
    links: [
      { text:'Overview', href: '/students' },
      { text:'Display Certificate', href:'/students/food-safety-display-certificate' },
      { text:'Food Safety Card', href:'/students/food-safety-card' },
      { text: 'Participant Handbook', href:'/students/participant-handbook' },
      { text: 'Student Forms', href:'/forms' },
      { text: 'FAQs', href:'/faqs' },
      { text: 'Student Support', href:'/contact' },
    ],
};

export const studentsOverviewData: GridTemplateProps = {
  id: 'students-overview-body-section',
  pathname: '/students',
  displayPathname: 'For Students',
  navigation: navigationData,
  header: 'For Students',
  subheader: `We're here to help at every step of your learning journey with the very best resources, FAQs, advice and support from our team.`,
  description: "At AIFS, we want to make your training experience with us a rewarding and enjoyable one. Here, you can get answers to many common student questions, learn what to expect in your training and access all the forms you'll ever need. If you can't find what you're looking for, our friendly support team is here to help.",
  cards: [{
    title: "Display Certificate",
    description: "Showcase your Certificate on the wall of your business to reassure customers they've chosen the right place to eat or buy food.",
    imageSrc: "/students/photo_display_cert.jpg",
    href: "/students/food-safety-display-certificate",
  },
  {
    title: "Food Safety Card",
    description: "Always be ready for food audits with your wallet-sized card containing details of your nationally recognised training.",
    imageSrc: "/students/photo_food_card.jpg",
    href: "/students/food-safety-card",
  },
  {
    title: "Participant Handbook",
    description: "Get all the information you need about training with AIFS, our policies, fees and more in our Participant Handbook.",
    imageSrc: "/students/photo_handbook.jpg",
    href: "/students/participant-handbook",
  },
  {
    title: "Student Forms",
    description: "Been asked to complete a form by one of our support team? You're in the right place. Click to explore our library of student forms.",
    imageSrc: "/students/photo_forms.jpg",
    href: "/forms",
  },
  {
    title: "FAQs",
    description: "Our Frequently Asked Questions are a great resource for students. We recommend starting here to see if you can find answers or information you need.",
    imageSrc: "/students/photo_faq.jpg",
    href: "/faq",
  },
  {
    title: "Student Support",
    description: "Got a question? Try our comprehensive list of FAQs or click here for phone and email support.",
    imageSrc: "/students/photo_student_support.jpg",
    href: "/contact",
  }],
};
