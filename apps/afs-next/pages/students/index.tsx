import Layout from 'components/core/layout';
import { GridTemplate } from 'components/templates';
import { studentsOverviewData } from 'components/students/pagesData';
import { StudentsBackground } from 'components/students';

const Home = () => {
  return (
    <Layout>
      <StudentsBackground><GridTemplate {...studentsOverviewData}/></StudentsBackground>
    </Layout>
  );
};

export default Home;
