import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { LawsRequirementsSectorOverviewData, navigationSectorPageData } from 'components/laws-requirements/lawsRequirementsPageData';

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

const Home = () => {
  const pageData = LawsRequirementsSectorOverviewData;
  pageData.navigation = navigationSectorPageData;
  return (
    <Layout>
      <LawsBackground><GridTemplate {...LawsRequirementsSectorOverviewData}/></LawsBackground>
    </Layout>
  );
};

export default Home;
