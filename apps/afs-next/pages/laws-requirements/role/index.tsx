import { ReactNode } from 'react';
import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { coursePageOverviewData } from 'components/courses/coursePagesData';

export const CoursesBackground = ({ children }: { children: ReactNode }) => {
  return <div className="bg-afs-light-gray w-screen">
      <div className={`hidden lg:block bg-[url('/Banner_courses.jpg')] bg-afs-light-gray py-16 bg-no-repeat w-full`}>
          { children }
      </div>
      <div className="md:hidden bg-afs-light-gray py-16 w-full">
          { children }
      </div>
  </div>;
};

const Home = () => {
  return (
    <Layout>
      <CoursesBackground><GridTemplate {...coursePageOverviewData}/></CoursesBackground>
    </Layout>
  );
};

export default Home;
