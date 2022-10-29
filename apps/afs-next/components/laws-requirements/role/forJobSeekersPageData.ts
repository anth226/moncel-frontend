import { RowsTemplateProps, NavigationProps } from 'components/templates/types';

// TODO: Add submenu
export const navigationData: NavigationProps = {
    title: "Laws & Requirements",
    links: [
      { text:'Overview', href: '/laws-requirements' },
      { text:'By Role', href:'/laws-requirements/role' },
      { text:'By Food Sector', href:'/laws-requirements/food-sectors' },
      { text:'By Location', href:'/laws-requirements/food-sectors' },
    ],
};

export const LawsRequirementsPageData: Omit<RowsTemplateProps, "children"> = {
  id: "laws-requirements-page-overview-body-section",
  pathname: "/laws-requirements/role/for-job-seekers",
  displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS/FOR JOB SEEKERS",
  header: "Food Safety Laws & Requirements for Job Seekers",
  subheader: "Working with food is rewarding, whether you’re a part-time pizza maker or a head chef. Whatever your role, don't forget that food safety is crucial to your career.",
  navigation: navigationData,
};
