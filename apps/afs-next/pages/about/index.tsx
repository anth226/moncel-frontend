import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { aboutOverviewData } from 'components/about/aboutPagesData';

export const AboutBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white">
      <div className={`hidden lg:block bg-haze py-16 bg-[url('/Banner_about.jpg')] bg-no-repeat w-full bg-[length:100%_400px]`}>
          { children }
      </div>
      <div className="lg:hidden w-full">
          { children }
      </div>
  </div>;
};

const Home = () => {
  return (
    <Layout>
      <AboutBackground><GridTemplate {...aboutOverviewData}/></AboutBackground>
    </Layout>
  );
};

export default Home;
