import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { LawsRequirementsRoleOverviewData, navigationRolePageData } from 'components/laws-requirements/lawsRequirementsPageData';

export const LawsBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white">
      <div className={`hidden lg:block bg-haze py-16 bg-[url('/Banner_laws.jpg')] bg-no-repeat w-full bg-[length:100%_400px]`}>
          { children }
      </div>
      <div className="lg:hidden w-full">
          { children }
      </div>
  </div>;
};

/** Add category links to navigation data */

const Home = () => {
  const pageData = LawsRequirementsRoleOverviewData;
  pageData.navigation = navigationRolePageData;
  return (
    <Layout>
      <LawsBackground><GridTemplate {...pageData}/></LawsBackground>
    </Layout>
  );
};

export default Home;
