import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { LawsRequirementsLocationOverviewData, navigationLocationPageData } from 'components/laws-requirements/lawsRequirementsPageData';

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
  const pageData = LawsRequirementsLocationOverviewData;
  pageData.navigation = navigationLocationPageData;
  return (
    <Layout pageTitle={`Food Safety Laws & Legislation for Australian States & Territories | AIFS`} metaDescription="Food safety laws differ across the states and territories of Australia. It's important to ensure that you're meeting federal, state and local requirements.">
      <LawsBackground><GridTemplate {...LawsRequirementsLocationOverviewData}/></LawsBackground>
    </Layout>
  );
};

export default Home;
