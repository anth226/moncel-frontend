import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { LawsRequirementsLocationOverviewData, navigationLocationPageData } from 'components/laws-requirements/lawsRequirementsPageData';

export const LawsBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white relative lg:bg-haze -z-0">
      <div className="hidden lg:block bg-[url('/Banner_laws.jpg')] bg-no-repeat w-full bg-cover bg-center absolute h-[400px] -z-10"/>
      <div className={`hidden lg:block py-16 w-full z-10`} >
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
