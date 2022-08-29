import { ReactNode } from 'react';
import NextLink from 'next/link';
import Image from 'next/image';
import Layout from 'components/core/layout';
import { Header3, Header5, Text, Link } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsOverviewData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';

const TemplateData = {
    ...LawsRequirementsOverviewData,
    pathname: "laws-requirements/role/for-established-businesses",
    displayPathname: "LAWS & REQUIREMENTS/BY ROLE/FOOD SAFETY LAWS & REQUIREMENTS FOR EMPLOYEES",
    header: "Food Safety Laws & Requirements For Employees",
    subheader: "If you currently work with food you'll already be aware of the importance of food safety. But don't forget that it's vital you keep your skills up-to-date."
};

const Page = () => {
  return (
    <Layout>
      <LawsRequirementsBackground><RowsTemplate {...TemplateData}>
        <>
          <Section1 />
          <Divider />
          <Section2 />
          <Divider />
          <Section3 />
          <Divider />
          <Section4 />
          <Divider />
          <Section5 />
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
    <Header3 className="text-afs-green font-semibold pb-6">Food safety compliance is crucial</Header3>
    <Text className="pb-5">Food safety training can pose many challenges to large organisations:</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <ul>
          <ListItem>{`It's`} a complex subject</ListItem>
          <ListItem>multiple state and federal compliance laws must be considered</ListItem>
          <ListItem>every {`employee's`} training must be valid</ListItem>
          <ListItem>many employees may need to be enrolled at different times</ListItem>
        </ul>
        <Text className="pb-5">And ultimately, you need to protect your customers and business reputation from food incidents.</Text>
        <Text className="pb-5">{`It's`} important that your food safety training meets all requirements - and is designed for large organisations to implement, manage and update on scale.</Text>
      </div>
      <Image src="/laws-requirements/role/photo_trainingmanagers.jpg" alt="laws-requirements-for-employees-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">How AIFS helps your organisation comply</Header3>
    <Text className="pb-5">Food safety is governed by two sets of legislation - state and federal. Both are enforced at a local council level by Health Inspectors.</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
                title="Compliance-guaranteed training"
                >
                <Text className="pb-3.5">Our nationally recognised training is approved to meet all federal, state and local govt. legislation.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_laptop.svg"}
                title="A dedicated account manager"
                >
                <Text className="pb-3.5">Access to an AIFS expert to help with priority support enrolling students and any other business needs.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Industry relevant courses"
                >
                <Text className="pb-3.5">Tailored to each food sector - Hospitality, Retail, Food Processing, Health {`&`} Community, Transport {`&`} Distribution.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_magazine.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text className="pb-3.5">A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text className="pb-3.5">A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text className="pb-3.5">A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text className="pb-3.5">A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
            <IconCard
                imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
                title="Ongoing learning as AIFS Members"
                >
                <Text className="pb-3.5">A complimentary AIFS Membership provides students and graduates with access to food safety checklists, resources and more.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section3 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Be aware of non-compliance penalties</Header3>
    <Text className="pb-3.5">Some of the worst food poisoning outbreaks in recent times have occurred from simple mistakes, such as someone not washing their hands properly.</Text>
    <Text className="pb-3.5">If your business causes a food-borne illness outbreak or is found to not be following food safety legislation the consequences can be dire.</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_invoice.svg"}
            title="Heavy fines"
            >
              <Text className="pb-3.5">Fines for failing to comply can cost you hundreds of thousands of dollars. Some businesses have multiple charges raised against them at once.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_judge.svg"}
            title="Prosecution"
            >
              <Text className="pb-3.5">Depending on how your food business is structured, you may be held personally liable for a food safety incident and be liable for prosecution.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_licence.svg"}
            title="Licence Issues"
            >
              <Text className="pb-3.5">Based on the seriousness of the food safety offence you may be issued with a Show Cause Notice, have your licence suspended, or even worse, cancelled.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_closed_sign.svg"}
            title="Business closure"
            >
              <Text className="pb-3.5">If your food business is deemed a serious health risk to the general public, a Health Inspector has the power to close it down immediately.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_thumbsdown.svg"}
            title="Damaged reputation"
            >
              <Text className="pb-3.5">The media frequently report food safety scandals. It can be difficult for a food business or manager to recover their reputation after a food safety incident.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_thought_bubble.svg"}
            title="Remorse"
            >
              <Text className="pb-3.5">Sadly, one lingering effect of a food-borne illness outbreak is the feeling of remorse felt by business managers if customers fall seriously ill or lose their lives.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Food safety training requirements for your staff</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">The Australian Institute of Food Safety offers two nationally recognised courses designed to meet all state and federal requirements for food safety training:</Text>
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
            title="Food Handler Course"
            href="/courses/food-handler-course"
            >
              <Text className="pb-3.5">This nationally recognised course meets federal requirements that anyone who works with food needs the appropriate food safety training for their role.</Text>
              <Text className="pb-3.5">It covers the most important elements of food safety including laws and regulations, personal hygiene, what causes food poisoning and how to maintain a clean workplace.</Text>
              <NextLink href="/courses/food-handler-course"><Link className="font-semibold">Learn more about this course.</Link></NextLink>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
            title="Food Safety Supervisor"
            href="/courses/food-handler-course"
            >
              <Text className="pb-3.5">This nationally recognised course is more advanced and meets specific state legislation for food safety training including for NSW, QLD, VIC and ACT.</Text>
              <Text className="pb-3.5">Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff, responsible for the overall implementation and management of food safety.</Text>
              <NextLink href="/courses/food-safety-supervisor"><Link className="font-semibold">Learn more about this course.</Link></NextLink>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section5 = () => {
    return <div className="col-span-3">
      <Header3 className="text-afs-green font-semibold pb-6">Food Safety Compliance Checklist</Header3>
      <div className={`${styles["laws-requirements"]} col-span-3`}>
        <div className="flex flex-col pr-4">
          <div className="grid grid-cols-2 grid-flow-row gap-7">
            <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
              title="Train all Food Handlers"
              >
                <Text className="pb-3.5">Ensure that all employees who handle food are trained in food safety.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
              title="Nominate a Food Safety Supervisor"
              >
                <Text className="pb-3.5">Most food businesses in Australia must employ a qualified Food Safety Supervisor on their team.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
              title="Do compliance-guaranteed training"
              >
                <Text className="pb-3.5">AIFS food safety training is approved to meet all federal, state and local government legislation.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
              title="Confirm your food sector"
              >
                <Text className="pb-3.5">Confirm that your Food Safety Supervisor is doing the right course for your industry sector.</Text>
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