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
  pathname: "laws-requirements/food-sectors/food-processing",
  displayPathname: "LAWS & REQUIREMENTS/BY FOOD SECTOR/FOOD SAFETY TRAINING REQUIREMENTS FOR FOOD PROCESSING",
  header: "Food Safety Training Requirements for Food Processing",
  subheader: "Food safety training in food processing businesses - learn who requires it, how to comply and what is a properly trained Food Safety Supervisor and Food Handler.",
  navigation: navigationSectorPageData,
};

const Page = () => {
  return (
    <Layout pageTitle='Food Safety Training Requirements for Food Processing | AIFS' metaDescription='Food safety training in food processing businesses - learn who requires it and what is a properly trained Food Safety Supervisor and Food Handler.'>
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
    <Header3 className="pb-4">Food safety training for food processing</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <IntroBox imageSrc="/laws-requirements/food-sectors/photo_foodprocessing.jpg" alt="Food safety training for food processing" className={`${styles["laws-requirements"]}`}>
        <Text>If you manufacture or process foods in a factory, farm, shop or anywhere else, you and your employees need the right training to meet food safety laws.</Text>
        <Text>A food processing business is any business where food is manufactured or processed, including:</Text>
        <ul className="!mb-0">
          <ListItem>Airline caterers</ListItem>
          <ListItem>Wholesale bakers</ListItem>
          <ListItem>Breweries and wine producers</ListItem>
          <ListItem>Canneries</ListItem>
          <ListItem>Packers</ListItem>
          <ListItem>Producers of pre-prepared meals</ListItem>
          <ListItem>Small scale farm and home food producers</ListItem>
        </ul>
      </IntroBox>
    </div>
  </div>;
};

const Section2 = () => {
  return <HowToComply />;
};

const Section3 = () => {
  return <TrainingRequirements title="Training requirements for food processing businesses" version="FSS2" /> ;
};

const Section4 = () => {
  return <div className={`${styles["laws-requirements"]} col-span-3`}>
      <Header3 className="pb-4">Units of Competency</Header3>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
        <div className="flex flex-col">
          <Text>When you complete nationally recognised training, you are awarded a Statement of Attainment which lists the units of competency that you have obtained.</Text>
          <Text>When a Health Inspector inspects your premises, {`they'll`} check that your Statement of Attainment has the correct units of competency.</Text>
          <Text className="font-semibold">Food Safety Supervisor course</Text>
          <Text>After successfully completing the Food Safety Supervisor course for the food processing sector, you will be awarded the following units:</Text>
          <ul className="checklist pb-4">
            <ListItem>FBPFSY1002 Follow work procedures to maintain food safety</ListItem>
            <ListItem>FBPFSY2002 Apply food safety procedures</ListItem>
          </ul>
          <Text className="font-semibold">Food Handler course</Text>
          <Text>After successfully completing the Food Handler course for the food processing sector, you will be awarded the following unit:</Text>
          <ul className="checklist">
            <ListItem>FBPFSY2002 Apply food safety procedures</ListItem>
          </ul>
        </div>
        {/* Tablet */}
        <div className="flex flex-col">
          <CollapsibleCellGroup>
            <CollapsibleTableCell
                summary={<Text className="!text-teal ">CURRENT UNITS</Text> }
                details={<div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row font-bold">
                    <p className="text-emperor col-span-2">UNIT CODE</p>
                    <p className="text-emperor col-span-5">UNIT TITLE</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row">
                    <p className="col-span-2">FBPFSY1002</p>
                    <p className="col-span-5">Follow work procedures to maintain food safety</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row">
                    <p className="col-span-2">FBPFSY2002</p>
                    <p className="col-span-5">Apply food safety procedures</p>
                  </div>
                </div>}
                detailsClasses={{ root: "!p-0 text-sm" }}
                />
            <CollapsibleTableCell
                
                summary={<Text className="!text-teal">EXPIRED UNITS</Text> }
                details={<div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row font-bold ">
                    <p className="text-emperor col-span-2">UNIT CODE</p>
                    <p className="text-emperor col-span-5">UNIT TITLE</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FBPFSY1001</p>
                    <p className="col-span-5">Follow work procedures to maintain food safety</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FBPFSY2001</p>
                    <p className="col-span-5">Implement the food safety program and procedures</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FDFCORFSY1A</p>
                    <p className="col-span-5">Follow work procedures to maintain food safety</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FDFCORFSY2A</p>
                    <p className="col-span-5">Implement the food safety program and procedures</p>
                  </div>
                  <div className="w-full border-b-[1px] border-teal p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FDFFS1001A</p>
                    <p className="col-span-5">Follow work procedures to maintain food safety</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">FDFFS2001A</p>
                    <p className="col-span-5">Implement the food safety program and procedures</p>
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