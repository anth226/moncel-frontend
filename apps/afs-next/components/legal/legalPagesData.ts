import { NavigationProps, GridTemplateProps } from 'components/templates/types';

export const legalNavigationData: NavigationProps = {
    title: "Legal Programs",
    links: [
      { text:'Overview', href: '/legal' },
      { text:'Terms of Use', href:'/legal/terms-of-use' },
      { text:'Privacy Policy', href:'/legal/privacy-policy' },
      { text:'Security Policy', href:'/legal/security-policy' },
      { text:'Membership Policy', href:'/legal/membership-policy' },
      { text:'Enrolment Policy', href:'/legal/enrolment-policy' },
      { text:'Payment & Refund Policy', href:'/legal/payment-policy' },
    ],
};

export const legalOverviewData: GridTemplateProps = {
  id: 'legal-programs-overview-body-section',
  pathname: '/legal',
  displayPathname: 'LEGAL & POLICIES',
  navigation: legalNavigationData,
  header: 'Legal & Policies',
  subheader: "In this section, you'll learn more about our terms of use, as well as the AIFS policies for privacy, security, membership, enrolment, payments and refunds.",
  description: "The Australian Institute of Food Safety is pleased to provide you it's products and services, and welcomes new members to the AIFS Membership Program. Before getting started, it's important to familiarise yourself with our terms of use and any policies that may affect your use of our website or learning management systems.",
  cards: [{
    title: "Privacy Policy",
    description: "AIFS is committed to protecting the privacy of it's customers. This policy outlines how we'll protect your information and the type of information to be collected.",
    imageSrc: "/legal/photo_legal_privacy.jpg",
    href: "/legal/privacy-policy",
  },
  {
    title: "AIFS Payment & Refund Policy",
    description: "The Payment & Refund Policy explains when to pay for your course, how to pay for your course and the terms that apply when requesting a refund.",
    imageSrc: "/legal/photo_legal_payment.jpg",
    href: "/legal/payment-policy",
  },
  {
    title: "Security Policy",
    description: "At AIFS, we take all reasonable steps to preserve the security of cookie and personal information. This Security Policy provides further details.",
    imageSrc: "/legal/photo_legal_security.jpg",
    href: "/legal/security-policy",
  },
  {
    title: "Enrolment Policy for Food Safety Courses",
    description: "Prospective students should read this policy to understand the terms by which they enrol into the course, and the type of data that will be collected.",
    imageSrc: "/legal/photo_legal_enrol.jpg",
    href: "/legal/enrolment-policy",
  },
  {
    title: "Terms of Use",
    description: "your use of the website and other AIFS systems. By accessing these systems, you are signifying that you agree to the terms.",
    imageSrc: "/legal/photo_legal_terms.jpg",
    href: "/legal/terms-of-use",
  },
  {
    title: "AIFS Membership Policy",
    description: "This policy provides information to AIFS members about the terms of membership, benefits of membership, and how to renew membership once expired.",
    imageSrc: "/legal/photo_legal_member.jpg",
    href: "/legal/membership-policy",
  }],
};
