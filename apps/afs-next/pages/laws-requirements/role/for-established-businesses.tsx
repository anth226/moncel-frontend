import Layout from 'components/core/layout';
import { Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { LawsRequirementsPageData, navigationRolePageData } from 'components/laws-requirements/lawsRequirementsPageData';
import { LawsRequirementsBackground } from 'pages/laws-requirements';
import styles from '../styles.module.scss';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import FoodSafetyCourses from '../../../components/laws-requirements/shared/food-safety-courses';
import BeAware from '../../../components/laws-requirements/shared/be-aware-food-safety-laws';

const TemplateData = {
    ...LawsRequirementsPageData,
    pathname: "laws-requirements/role/for-established-businesses",
    displayPathname: "LAWS & REQUIREMENTS/BY ROLE/ FOOD SAFETY LAWS & REQUIREMENTS FOR ESTABLISHED BUSINESSES",
    header: "Food Safety Laws & Requirements for Established Businesses",
    subheader: "If you're not managing food safety properly the consequences can be serious. Ensure that you're following the law and protecting both your customers and your business.",
    navigation: navigationRolePageData,
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

const Section1 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Comply with all laws. All the time.</Header3>
    <IntroBox imageSrc="/laws-requirements/role/photo_establishedbusiness.jpg" alt="laws-requirements-for-employees-graphic" className={`${styles["laws-requirements"]}`}>
    <Text>If you manage an established food business,{`you've`} probably got a food safety plan in place and have your most senior staff trained in food safety.</Text>
        <Text>But as things change you need to be sure {`you're`} always meeting your state and federal compliance requirements. For example:</Text>
        <ul className="mb-4">
          <ListItem>Does your nominated Food Safety Supervisor still work with you?</ListItem>
          <ListItem>Is their certificate still valid?</ListItem>
          <ListItem>Do all employees meet federal requirements for Food Handler training?</ListItem>
        </ul>
        <Text>{`It's`} not just the law you need to think about.</Text>
        <Text>Your customers may be suffering as unsafe food practices creep in to everyday business activities.</Text>
    </IntroBox>
  </div>;
};

const Section2 = () => {
  return <BeAware title="Know your Food Safety Laws" />
};

const Section3 = () => {
  return <div className="col-span-3">
    <Header3 className="pb-4">Be aware of non-compliance penalties</Header3>
    <Text>Some of the worst food poisoning outbreaks in recent times have occurred from simple mistakes, such as someone not washing their hands properly.</Text>
    <Text className="pb-4">If your business causes a food-borne illness outbreak or is found to not be following food safety legislation the consequences can be dire.</Text>
    <div className={`${styles["laws-requirements"]} col-span-3`}>
      <div className="flex flex-col">
        <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
          <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_invoice.svg"}
            title="Heavy fines"
            >
              <Text>Fines for failing to comply can cost you hundreds of thousands of dollars. Some businesses have multiple charges raised against them at once.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_judge.svg"}
            title="Prosecution"
            >
              <Text>Depending on how your food business is structured, you may be held personally liable for a food safety incident and be liable for prosecution.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_licence.svg"}
            title="Licence Issues"
            >
              <Text>Based on the seriousness of the food safety offence you may be issued with a Show Cause Notice, have your licence suspended, or even worse, cancelled.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_closed_sign.svg"}
            title="Business closure"
            >
              <Text>If your food business is deemed a serious health risk to the general public, a Health Inspector has the power to close it down immediately.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_thumbsdown.svg"}
            title="Damaged reputation"
            >
              <Text>The media frequently report food safety scandals. It can be difficult for a food business or manager to recover their reputation after a food safety incident.</Text>
            </IconCard>
            <IconCard
            imageSrc={"/laws-requirements/role/icon_stroke_green_thought_bubble.svg"}
            title="Remorse"
            >
              <Text>Sadly, one lingering effect of a food-borne illness outbreak is the feeling of remorse felt by business managers if customers fall seriously ill or lose their lives.</Text>
            </IconCard>
        </div>
      </div>
    </div>
  </div>;
};

const Section4 = () => {
return <FoodSafetyCourses title="Food safety training requirements for your staff" subtitle="All employees in your food business must be trained in food safety. AIFS offers two nationally recognised courses designed to meet state and federal requirements:" fh1="This nationally recognised course meets federal laws that state anyone who works with food needs the appropriate food safety training for their role." fh2="It covers the most important elements of food safety including laws and regulations, personal hygiene, what causes food poisoning, and how to maintain a clean workplace." fss1="This nationally recognised course is more advanced and meets specific state legislation for food safety training including in NSW, QLD, VIC and ACT." fss2="Every food business in these states needs at least one nationally recognised Food Safety Supervisor on staff, responsible for overall implementation and management of food safety."/>;
};

const Section5 = () => {
    return <div className="col-span-3">
      <Header3 className="pb-4">Food Safety Compliance Checklist</Header3>
      <div className={`${styles["laws-requirements"]} col-span-3`}>
        <div className="flex flex-col">
          <div className={`grid grid-cols-1 md:grid-cols-2 grid-flow-row gap-x-12 gap-y-8`}>
            <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_fh.svg"}
              title="Train all Food Handlers"
              >
                <Text>Ensure that all employees who handle food are trained in food safety.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_FSS.svg"}
              title="Nominate a Food Safety Supervisor"
              >
                <Text>Most food businesses in Australia must employ a qualified Food Safety Supervisor on their team.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_checkmark_box_stroke_tick.svg"}
              title="Do compliance-guaranteed training"
              >
                <Text>AIFS food safety training is approved to meet all federal, state and local government legislation.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_factory.svg"}
              title="Confirm your food sector"
              >
                <Text>Confirm that your Food Safety Supervisor is doing the right course for your industry sector.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/laws-requirements/icon_stroke_green_nsw.svg"}
              title="NSW Food Authority approved"
              >
                <Text>Obtain your NSW Food Authority certificate when you complete the official AIFS Food Safety Supervisor course.</Text>
              </IconCard>
              <IconCard
              imageSrc={"/icons/icon_stroke_green_calendar_clock.svg"}
              title="Plan refresher training"
              >
                <Text>Refresher training is mandatory in some states, and ensures that food safety stays top of mind for employees.</Text>
              </IconCard>
          </div>
        </div>
      </div>
    </div>;
  };

export default Page;