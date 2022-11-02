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
    pathname: "laws-requirements/food-sectors/retail",
    displayPathname: "LAWS & REQUIREMENTS/BY FOOD SECTOR/FOOD SAFETY TRAINING REQUIREMENTS FOR RETAIL",
    header: "Food Safety Training Requirements for Retail",
    subheader: "Food safety training in retail businesses - find out who requires it, how to comply and what is a properly trained Food Safety Supervisor and Food Handler.",
    navigation: navigationSectorPageData,
};

const Page = () => {
  return (
    <Layout metaDescription='Food safety training in retail businesses - find out who requires it, how to comply and what is a properly trained Food Safety Supervisor and Food Handler.' pageTitle='Food Safety Training Requirements for Food Retail | AIFS'>
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
    <Header3 className="pb-4">Food safety training for retail</Header3>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <IntroBox imageSrc="/laws-requirements/food-sectors/photo_retail.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
        <Text>Whether you run a market stall or supermarket, you and your employees need the right training to meet food safety laws.</Text>
        <Text>A retail business is any business where food is sold to customers (usually to be consumed elsewhere), including:</Text>
        <ul className="!mb-0">
          <ListItem>supermarkets</ListItem>
          <ListItem>grocers, butchers, bakers and delis</ListItem>
          <ListItem>convenience stores</ListItem>
          <ListItem>service stations</ListItem>
          <ListItem>food takeaways</ListItem>
          <ListItem>market stalls</ListItem>
          <ListItem>caterers</ListItem>
        </ul>
      </IntroBox>
    </div>
  </div>;
};

const Section2 = () => {
  return <HowToComply />;
};

const Section3 = () => {
  return <TrainingRequirements title="Training requirements for food retail businesses" version="FSS1" /> ;
};

const Section4 = () => {
  return <div className={`${styles["laws-requirements"]} col-span-3`}>
      <Header3 className="pb-4">Units of Competency</Header3>
      <div className="grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8">
        <div className="flex flex-col">
          <Text>When you complete nationally recognised training, you are awarded a Statement of Attainment. This lists the units of competency that you have obtained.</Text>
          <Text>When a Health Inspector visits your premises, they may ask to see that your Statement of Attainment has the correct units of competency.</Text>
          <Text className="font-semibold">Food Safety Supervisor course</Text>
          <Text>After successfully completing the Food Safety Supervisor course for the retail sector, you will be awarded the following unit:</Text>
          <ul className="checklist pb-4">
            <ListItem>SIRRFSA001 Handle food safely in a retail environment</ListItem>
          </ul>
          <Text className="font-semibold">Food Handler course</Text>
          <Text>Food Handler training is not industry specific. After successfully completing the Food Handler course you will be awarded the following unit:</Text>
          <ul className="checklist">
            <ListItem>SITXFSA001 Use hygienic practices for food safety</ListItem>
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
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">SIRRFSA001</p>
                    <p className="col-span-5">Handle food safely in a retail environment</p>
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
                    <p className="col-span-2">SIRRFSA001A</p>
                    <p className="col-span-5">Apply retail food safety practices</p>
                  </div>
                  <div className="w-full p-3 grid grid-cols-7 grid-flow-row ">
                    <p className="col-span-2">WRRLP6C</p>
                    <p className="col-span-5">Apply retail food safety practices</p>
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