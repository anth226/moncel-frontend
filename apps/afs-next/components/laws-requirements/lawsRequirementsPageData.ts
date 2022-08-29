import { RowsTemplateProps, NavigationProps } from 'components/templates/types';

export const navigationData: NavigationProps = {
    title: "Laws & Requirements",
    links: [
      { text:'Overview', href: '/laws-requirements' },
      { text:'By Role', href:'/laws-requirements/role' },
      { text:'By Food Sector', href:'/laws-requirements/food-sectors' },
      { text:'By Location', href:'/laws-requirements/food-sectors' },
    ],
};

export const LawsRequirementsOverviewData: Omit<RowsTemplateProps, "children"> = {
  id: "laws-requirements-page-overview-body-section",
  pathname: "laws-requirements",
  displayPathname: "Laws & Requirements",
  header: "Laws & Requirements",
  subheader: "Get the latest, easy-to-understand information on food safety legal requirements and how they affect you - based on your role, sector and location.",
  navigation: navigationData,
};
