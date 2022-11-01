import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { studentsOverviewData } from 'components/students/pagesData';
import { StudentsBackground } from 'components/students';

const Home = () => {
  return (
    <Layout pageTitle='Student Information for Food Safety Courses | AIFS' metaDescription="We're here to help at every step of your learning journey with the very best resources, FAQs, advice and support from our team.">
      <StudentsBackground><GridTemplate {...studentsOverviewData}/></StudentsBackground>
    </Layout>
  );
};

export default Home;
