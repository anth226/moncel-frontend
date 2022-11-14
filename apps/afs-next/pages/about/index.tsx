import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { aboutOverviewData } from 'components/about/aboutPagesData';

export const AboutBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white relative lg:bg-haze -z-0">
      <div className="hidden lg:block bg-[url('/Banner_about.jpg')] bg-no-repeat w-full bg-cover bg-center absolute h-[400px] -z-10"/>
      <div className={`hidden lg:block py-16 w-full z-10`} >
        { children }
      </div>
      <div className="lg:hidden w-full">
          { children }
      </div>
  </div>;
};

const Home = () => {
  return (
    <Layout pageTitle='About Us | AIFS' metaDescription='At AIFS, our mission is to reduce food-borne illness in Australia. To do this, we help food workers gain the essential food safety skills to protect their customers.'>
      <AboutBackground><GridTemplate {...aboutOverviewData}/></AboutBackground>
    </Layout>
  );
};

export default Home;
