import NextLink from 'next/link';
import Layout from 'components/core/layout';
import { Header3, Text, Link } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationSectorPageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IntroBox, ListItem, CollapsibleTableCell, CollapsibleCellGroup } from 'components/core/templates';
import HowToComply from '../../../components/laws-requirements/shared/how-to-comply';
import TrainingRequirements from '../../../components/laws-requirements/shared/training-requirements';

const TemplateData = {
    ...LawsRequirementsPageData,
    pathname: "laws-requirements/food-sectors/for-established-businesses",
    displayPathname: "LAWS & REQUIREMENTS/BY FOOD SECTOR/FOOD SAFETY TRAINING REQUIREMENTS FOR TRANSPORT & DISTRIBUTION",
    header: "Food Safety Training Requirements for Transport & Distribution",
    subheader: "Food safety training for transport and distribution - learn who requires it, how to comply and what is a properly trained Food Safety Supervisor and Food Handler.",
    navigation: navigationSectorPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Training Requirements for Transport & Distribution | AIFS`} metaDescription='Food safety training for transport and distribution - learn who requires it and what is a properly trained Food Safety Supervisor and Food Handler.'>
      <LawsRequirementsBackground><RowsTemplate {...TemplateData}>
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

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Transport {`&`} distribution food safety training</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <IntroBox imageSrc="/laws-requirements/food-sectors/photo_transport_distribution.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
        <Text>If your business stores or transports food, you and your employees need the right training to meet food safety laws.</Text>
        <Text>Organisations in the food transport or distribution sector include:</Text>
        <ul>
          <ListItem>Bulk food carriers</ListItem>
          <ListItem>Food delivery services</ListItem>
          <ListItem>Warehouses that store food or food products</ListItem>
          <ListItem>Water carriers</ListItem>
        </ul>
      </IntroBox>
    </div>
  </div>;
};

const Section2 = () => {
  return <HowToComply />;
};

const Section3 = () => {
  return <TrainingRequirements title={`Training requirements for transport & distribution businesses`} version="FSS1" /> ;
};

const Section4 = () => {
  return <div className={`${styles["laws-requirements"]} col-span-3`}>
      <Header3 className="pb-4">Units of Competency</Header3>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
        <div className="flex flex-col">
          <Text>When you complete nationally recognised training, you are awarded a Statement of Attainment. This lists the units of competency that you have obtained.</Text>
          <Text>When a Health Inspector visits your premises, they may ask to see that your Statement of Attainment has the correct units of competency.</Text>
          <Text className="font-semibold">Food Safety Supervisor course</Text>
          <Text>After successfully completing the Food Safety Supervisor course for the transport and distribution sector, you will be awarded the following units:</Text>
          <ul className="checklist pb-4">
            <ListItem>SITXFSA005 Use hygienic practices for food safety</ListItem>
            <ListItem>SITXFSA006 Participate in safe food handling practices</ListItem>
          </ul>
          <Text>You may notice these are the same units as awarded for the hospitality sector. The Industry Skills Council for the transport and distribution sector has determined that the training requirements are the same.</Text>
          <Text className="font-semibold">Food Handler course</Text>
          <Text>After successfully completing the Food Handler course you will be awarded the following unit:</Text>
          <ul className="checklist pb-4">
            <ListItem>SITXFSA001 Use hygienic practices for food safety</ListItem>
          </ul>
          <Text className="font-semibold">Bridging Course</Text>
          <Text>SITXFSA001 is one of the two units required to qualify as a Food Safety Supervisor. The Australian Institute of Food Safety allows students who have completed this unit to complete a bridging course, at a later date, in order to upgrade to become a qualified Food Safety Supervisor.</Text>
          <NextLink href="/contact"><Link className="font-semibold underline">Contact our support team if {`you'd`} like more information about this course.</Link></NextLink>
        </div>
        {/* Tablet */}
        <div className="flex flex-col">
          <CollapsibleCellGroup>
            <CollapsibleTableCell
                summary={<Text className="!text-teal ">CURRENT UNITS</Text> }
                details={<div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row font-bold ">
                    <p className="text-emperor col-span-2">UNIT CODE</p>
                    <p className="text-emperor col-span-5">UNIT TITLE</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA005</p>
                    <p className="col-span-5">Use hygienic practices for food safety</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA006</p>
                    <p className="col-span-5">Participate in safe food handling practices</p>
                  </div>
                </div>}
                detailsClasses={{ root: "p-0 text-sm" }}
                />
            <CollapsibleTableCell
                summary={<Text className="!text-teal">EXPIRED UNITS</Text> }
                details={<div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row font-bold ">
                    <p className="text-afs-gray col-span-2">UNIT CODE</p>
                    <p className="text-afs-gray col-span-5">UNIT TITLE</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA001</p>
                    <p className="col-span-5">Use hygienic practices for food safety</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA002</p>
                    <p className="col-span-5">Participate in safe food handling practices</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA101</p>
                    <p className="col-span-5">Use hygienic practices for food safety</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA201</p>
                    <p className="col-span-5">Participate in safe food handling practice</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXFSA001A</p>
                    <p className="col-span-5">Implement food safety procedures</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SITXOHS002A</p>
                    <p className="col-span-5">Follow workplace hygiene procedures</p>
                  </div>
                </div>}
                detailsClasses={{ root: "p-0 text-sm" }}
                />
            </CollapsibleCellGroup>
          <Text className="font-semibold mt-8 !text-teal">Important Information</Text>
          <Text>All current units replace any expired units of competency.</Text>
          <Text>The units of competency awarded by AIFS are always current, however some out-of-date websites may still refer to expired units.</Text>
        </div>
      </div>
    </div>;
};

export default Page;