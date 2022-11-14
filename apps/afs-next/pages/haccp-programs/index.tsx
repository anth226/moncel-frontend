import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { haccpOverviewData } from 'components/haccp/haccpPagesData';

export const CoursesBackground = ({ children }: { children: ReactNode }) => {
  return <div className="w-full border-t-1 border-white relative lg:bg-haze -z-0">
      <div className="hidden lg:block bg-[url('/Banner_courses.jpg')] bg-no-repeat w-full bg-cover bg-center absolute h-[400px] -z-10"/>
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
    <Layout pageTitle='HACCP Food Safety Programs | AIFS' metaDescription='Learn more about HACCP Food Safety Programs. AIFS makes building a Food Safety Program quick and easy. Get the information and tools you need.'>
      <CoursesBackground><GridTemplate {...haccpOverviewData}/></CoursesBackground>
    </Layout>
  );
};

export default Home;
