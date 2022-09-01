import { ReactNode } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from 'components/core/layout';
import { Header3, Header5, Text, Link } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsOverviewData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';

const Page = () => {
  return (
    <Layout>
      <LawsRequirementsBackground><RowsTemplate {...LawsRequirementsOverviewData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
          <Divider />
          <Section4 />
        </>
        </RowsTemplate></LawsRequirementsBackground>
    </Layout>
  );
};

const Divider = () => <div className="mb-[30px] border-b-[1px] border-afs-light-gray col-span-3" />;
const ListItem = ({ children }: { children: ReactNode }) => <li className="ml-4 my-1.5">{ children }</li>;

interface IconCardProps {
  imageSrc: string;
  href?: string;
  title: string;
  children: ReactNode;
  className?: string;
}
const IconCard = (props: IconCardProps) => {
  const iconComp = <Image src={props.imageSrc} alt={`for-job-seekers-icon-${props.title}`} width={32} height={32} layout="fixed" />;
  return <div className={`flex flex-row ${props.className}`}>
    <div className="w-10 mr-3">
      { props.href ? <NextLink href={props.href}>{iconComp}</NextLink> : iconComp }
    </div>
    <div className="flex flex-col">
      <Header5 className="pb-2">{props.title}</Header5>
      { props.children }
    </div>
  </div>;
};

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Start your career the food safe way</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">The food sector is an exciting and growing industry to work in whether you are at home or abroad.</Text>
        <Text className="pb-5">If you’re considering a career in the food industry, having an understanding of food safety is vital.</Text>
        <Text className="pb-5">This isn’t just the law. You must be confident that your actions {"don't"} make your customers sick — or worse.</Text>
      </div>
      <Image src="/laws-requirements/role/photo_jobseekers.jpg" alt="laws-requirements-for-job-seekers-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Food safety training is required for every food job</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">Everyone who works with food needs to complete training. This is not just a requirement for people who work in hospitality, it applies to food workers in all kinds of businesses that handle food, such as:</Text>
        <Text className="pb-5">Learn about the recognised units of competency for Food Safety Supervisor training in your sector.</Text>
        <div className={`grid grid-cols-2`}>
          <ul>
            <ListItem>Cafes, restaurants and takeaways</ListItem>
            <ListItem>Hotels and motels</ListItem>
            <ListItem>Bars, pubs and clubs</ListItem>
            <ListItem>Event and conferences centres</ListItem>
            <ListItem>Casinos and gaming venues</ListItem>
            <ListItem>Market stalls</ListItem>
            <ListItem>Convenience stores</ListItem>
            <ListItem>Supermarkets</ListItem>
            <ListItem>Service stations</ListItem>
          </ul>
          <ul>
            <ListItem>Groceries, butchers, delis and bakeries</ListItem>
            <ListItem>Food based charity organisations</ListItem>
            <ListItem>Catering businesses</ListItem>
            <ListItem>Hospitals or hospices</ListItem>
            <ListItem>Child care or aged care facilities</ListItem>
            <ListItem>School canteens or tuckshops</ListItem>
            <ListItem>Food processing facilities</ListItem>
            <ListItem>Canneries, milleries or breweries</ListItem>
            <ListItem>Food delivery or storage services</ListItem>

          </ul>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Which food safety course do I need to do?</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">The training you need will depend on the type of job you want. The two main courses to choose from are:</Text>
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
            title="Food Handler Course"
            href="/courses/food-handler-course"
            >
              <Text className="pb-3.5">This course meets federal requirements that anyone who works with food needs food safety training.</Text>
              <Text className="pb-3.5">It helps your job prospects too. Food business managers know that they don’t need to spend time and money on your food safety training.</Text>
              <NextLink href="/courses/food-handler-course"><Link className="font-semibold">Learn more about this course.</Link></NextLink>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
            title="Food Safety Supervisor"
            href="/courses/food-handler-course"
            >
              <Text className="pb-3.5">The Food Safety Supervisor Course meets specific state legislation including for NSW, QLD, VIC and ACT.</Text>
              <Text className="pb-3.5">Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff. This course greatly boosts your employability.</Text>
              <NextLink href="/courses/food-safety-supervisor"><Link className="font-semibold">Learn more about this course.</Link></NextLink>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Which food safety course do I need to do?</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">The training you need will depend on the type of job you want. The two main courses to choose from are:</Text>
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
            title="Get trained as a Food Handler"
            >
              <Text className="pb-3.5">At a minimum, complete the Food Handler training course so that you have the skills you need to work with food safely.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
            title="Get trained as a Food Safety Supervisor"
            >
              <Text className="pb-3.5">To boost your chances of finding a job, consider a Food Safety Supervisor course that offers extra skills and knowledge.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
            title="Do compliance-guaranteed training"
            >
              <Text className="pb-3.5">AIFS food safety training is approved to meet all federal, state and local government legislation.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
            title="Check your food sector"
            >
              <Text className="pb-3.5">Food Safety Supervisor training is sector-specific. Be sure to do the right course for the sector you want to work in.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_nsw.svg"}
            title="NSW Food Authority approved"
            >
              <Text className="pb-3.5">Obtain your NSW Food Authority certificate when you complete the official AIFS Food Safety Supervisor course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_member.svg"}
            title="Become an AIFS Member"
            >
              <Text className="pb-3.5">Continue to build your skills with our member-only resources. Receive a free membership with one of our nationally recognized training courses.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

export default Page;