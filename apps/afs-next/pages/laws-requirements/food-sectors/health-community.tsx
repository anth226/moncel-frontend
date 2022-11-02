import Layout from 'components/core/layout';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationSectorPageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IntroBox, ListItem, CollapsibleTableCell, CollapsibleCellGroup } from 'components/core/templates';
import HowToComply from '../../../components/laws-requirements/shared/how-to-comply';
import TrainingRequirements from '../../../components/laws-requirements/shared/training-requirements';

const TemplateData = {
  ...LawsRequirementsPageData,
  pathname: "laws-requirements/food-sectors/health-community",
  displayPathname: "LAWS & REQUIREMENTS/BY FOOD SECTOR/FOOD SAFETY TRAINING REQUIREMENTS FOR HEALTH & COMMUNITY",
  header: "Food Safety Training Requirements for Health & Community",
  subheader: "Food safety training in the health sector - learn who requires it, how to comply and what's a properly trained Food Safety Supervisor and Food Handler.",
  navigation: navigationSectorPageData,
};

const Page = () => {
  return (
    <Layout pageTitle={`Food Safety Training Requirements for Health & Community | AIFS`} metaDescription="Food safety training in the health sector - learn who requires it, how to comply and what's a properly trained Food Safety Supervisor and Food Handler.">
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
    <Header3 className="pb-4">Food safety training for health & community</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <IntroBox imageSrc="/laws-requirements/food-sectors/photo_healthcommunity.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
        <Text>If you work in the health and community sector preparing and/or serving food to vulnerable people, you need the right training to meet food safety laws.</Text>
        <Text>Vulnerable people include the sick, pregnant women, the elderly, children and babies.</Text>
        <Text>Typical health and community organisations include:</Text>
        <ul>
          <ListItem>Hospitals and medical facilities</ListItem>
          <ListItem>Childcare facilities</ListItem>
          <ListItem>Aged care facilities</ListItem>
          <ListItem>School canteens and tuckshops</ListItem>
          <ListItem>Other community groups</ListItem>
        </ul>
      </IntroBox>
    </div>
  </div>;
};

const Section2 = () => {
  return <HowToComply />;
};

const Section3 = () => {
  return <TrainingRequirements title="Training requirements for health & community businesses" version="FSS2" /> ;
};

const Section4 = () => {
  return <div className={`${styles["laws-requirements"]} col-span-3`}>
      <Header3 className="pb-4">Units of Competency</Header3>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
        <div className="flex flex-col">
          <Text>When you complete nationally recognised training, you are awarded a Statement of Attainment which lists the units of competency that you have obtained.</Text>
          <Text>When a Health Inspector inspects your premises, {`they'll`} check that your Statement of Attainment has the correct units of competency.</Text>
          <Text className="font-semibold">Food Safety Supervisor course</Text>
          <Text>After successfully completing the Food Safety Supervisor course for the health and community sector, you will be awarded the following units:</Text>
          <ul className="checklist pb-4">
            <ListItem>HLTFSE001 Follow basic food safety practices</ListItem>
            <ListItem>HLTFSE005 Apply and monitor food safety requirements</ListItem>
            <ListItem>HLTFSE007 Oversee the day-to-day implementation of food safety in the workplace</ListItem>
          </ul>
          <Text className="font-semibold">Food Handler course</Text>
          <Text>After successfully completing the Food Handler course for the health and community sector, you will be awarded the following unit:</Text>
          <ul className="checklist">
            <ListItem>HLTFSE001 Follow basic food safety practices</ListItem>
          </ul>
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
                    <p className="col-span-2">HLTFSE001</p>
                    <p className="col-span-5">Follow basic food safety practices</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFSE005</p>
                    <p className="col-span-5">Apply and monitor food safety requirements</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFSE007</p>
                    <p className="col-span-5">Oversee the day-to-day implementation of food safety in the workplace</p>
                  </div>
                </div>}
                detailsClasses={{ root: "!p-0 text-sm" }}
                />
            <CollapsibleTableCell
                summary={<Text className="!text-teal">EXPIRED UNITS</Text> }
                details={<div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row font-bold ">
                    <p className="text-afs-gray col-span-2">UNIT CODE</p>
                    <p className="text-afs-gray col-span-5">UNIT TITLE</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS207C</p>
                    <p className="col-span-5">Follow basic food safety practices</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS309C</p>
                    <p className="col-span-5">Oversee the day-to-day implementation of food safety in the workplace</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS310C</p>
                    <p className="col-span-5">Apply and monitor food safety requirements</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS7A</p>
                    <p className="col-span-5">Follow basic food safety practices</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS9A</p>
                    <p className="col-span-5">Oversee the day-to-day implementation of food safety in the workplace</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">HLTFS10A</p>
                    <p className="col-span-5">Apply and monitor food safety requirements</p>
                  </div>
                </div>}
                detailsClasses={{ root: "!p-0 text-sm" }}
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