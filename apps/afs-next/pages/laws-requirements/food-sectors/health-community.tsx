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
          <Divider />
          <Section5 />
          <Divider />
          <Section6 />
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
    <Header3 className="text-afs-green font-semibold pb-6">The first step to success is food safety</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">Every year in Australia, hundreds of businesses are fined or closed down for:</Text>
        <ul>
          <ListItem>not following the correct food safety procedures</ListItem>
          <ListItem>not adhering to food safety legislation</ListItem>
        </ul>
        <Text className="pb-5">Being serious about food safety from the start will help:</Text>
        <ul>
          <ListItem>protect your new food business from these problems</ListItem>
          <ListItem>protect your customers from getting sick</ListItem>
        </ul>
        <Text className="pb-5">In most states and territories, you need to have completed specific food safety training before you can even apply for your food business licence.</Text>
      </div>
      <Image src="/laws-requirements/role/photo_newbusiness.jpg" alt="laws-requirements-for-employees-graphic" layout="fixed" width={325} height={183}/>
    </div>
  </div>;
};

const Section2 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">What is a food business?</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">You may be surprised to discover that your new business is considered a food business by law. Examples of typical food businesses include:</Text>
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
    <Header3 className="text-afs-green font-semibold pb-6">How to get a food business licence</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num1.svg"}
            title="Understand your classification"
            >
              <Text className="pb-3.5">Food business licences are issued depending on how your business is classed. Each state has their own classifications, usually based on food type risks and who your customers are.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num2.svg"}
            title="Complete mandatory training"
            >
              <Text className="pb-3.5">In most states and territories, at least one person who works in the business must have undertaken nationally recognised Food Safety Supervisor training before you apply for your licence.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num3.svg"}
            title="Apply to your local council"
            >
              <Text className="pb-3.5">Even though the laws around food business licensing are governed at a state and territory level, your licence application process is managed through your local council.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_square_num4.svg"}
            title="Stay up-to-date"
            >
              <Text className="pb-3.5">In NSW and ACT, your Food Safety Supervisor must complete refresher training every five years. Even if you work elsewhere, {`it's`} good practice for the protection of your customers.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Understand food safety laws</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <Text className="pb-5">Before applying for your food business licence, you need to be sure that you understand your legal requirements. As a food business owner you need to be aware of two types of legislation:</Text>
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_checkmark_australia.svg"}
            title="Federal Legislation"
            >
              <Text className="pb-3.5">The federal legislation is governed by Food Standards Australia New Zealand (FSANZ).</Text>
              <Text className="pb-3.5">It states that anyone who works with food must be trained in certain aspects of food safety at a level appropriate to their role.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/icon_stroke_green_checkmark_australia.svg"}
            title="State Legislation"
            >
              <Text className="pb-3.5">Each state has its own Food Safety Act that needs to be adhered to.</Text>
              <Text className="pb-3.5">Legislation is strictest in NSW, QLD, VIC and ACT where {`it's`} mandatory to have a fully trained Food Safety Supervisor at every business location.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section5 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">Train your staff properly</Header3>
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

const Section6 = () => {
  return <div className="col-span-3">
    <Header3 className="text-afs-green font-semibold pb-6">How to ensure your business complies</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col pr-4">
        <div className="grid grid-cols-2 grid-flow-row gap-7">
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_trainer.svg"}
            title="Train your staff"
            >
              <Text className="pb-3.5">Ensure all of your Food Handlers are trained in food safety. If {`you're`} in NSW, QLD, VIC or ACT, you also need to nominate and enrol your Food Safety Supervisor in a nationally recognised training course.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_folder.svg"}
            title="Build a food safety plan"
            >
              <Text className="pb-3.5">Your food business needs a Food Safety Program based on HACCP principles. The AIFS HACCP Food Safety Plan Kit gives you the tools and instructions you need to build a compliant Food Safety Program.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_license.svg"}
            title="Do compliance-guaranteed training"
            >
              <Text className="pb-3.5">Apply for your food business licence</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_certificate.svg"}
            title="Display your food safety signage"
            >
              <Text className="pb-3.5">When you complete your training with AIFS, you get a Food Safety Decal and a Food Safety Display Certificate, recognised by customers nation-wide as testimony that {`you're`} serious about food safety.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_checklist_2.svg"}
            title="Prepare for a food safety inspection"
            >
              <Text className="pb-3.5">Keep your Food Safety Plan up-to-date and ensure your AIFS Food Safety Cards are in a convenient location. A Health Inspector can inspect your food business at any time without warning.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_calendar_clock.svg"}
            title="Stay up-to-date"
            >
              <Text className="pb-3.5">Everyone who registers in a nationally recognised AIFS course receives 12 months of free AIFS Membership, giving them access to food safety resources, recalls, food safety news and more. </Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

export default Page;