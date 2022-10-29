import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, IconCard, IntroBox, ListItem } from 'components/core/templates';
import { AboutBackground } from 'components/about';
import { aboutNavigationData } from 'components/about/aboutPagesData';
import { Blockquote, Header1, Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/about/photo_ourmission.jpg';
import MissionGraphic from 'public/about/photo_mission_education.jpg';

import { TwoCol } from 'components/core/TwoCol';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'about-page-body',
  pathname: "about/our-mission",
  displayPathname: "ABOUT US / THE MISSION OF AUSTRALIAN INSTITUTE OF FOOD SAFETY",
  header: <div>
    <Header1 className="text-teal mb-4">The Mission of Australian Institute of Food Safety</Header1>
  </div>,
  subheader: "At AIFS our mission is clear. We want to reduce food-borne illness within Australia through education, promotion and advocacy for better food safety.",
  navigation: aboutNavigationData,
};

const Page = () => {
  return (
    <Layout>
      <AboutBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <FactsSection />
          <Divider />
          <HowCanWeSolveSection />
          <Divider />
          <BenefitsSection />
        </>
      </RowsTemplate></AboutBackground>
    </Layout>
  );
};

interface SectionProps {
  id: string;
  className?: string;
  children: ReactNode;
}

const SectionContainer = ({ id, children, className }: SectionProps) => <div className={`col-span-3 ${className}`} id={id}>{children}</div>;

const HeroSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">The importance of food safety</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="students-food-card-hero-graphic">
      <Text>Every year in Australia, millions of people get sick and hundreds die as a result of poor food handling practices. Many of these incidents are easily avoidable.</Text>
      <Text>At the Australian Institute of Food Safety, we want to make a difference.</Text>
      <Text className="mb-0">The mission of each and every team member at AIFS is:</Text>
      <Blockquote className="mb-0">To reduce food-borne illness in Australia through education, promotion and advocacy for better food safety.</Blockquote>
    </IntroBox>
  </SectionContainer>;
};

const FactsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">The frightening facts about food safety in Australia</Header3>
    <Text>Food-borne illness is significant in Australia and the consequences for both consumers and food business owners can be dire. Lost productivity, impacts on lifestyle and medical expenses create a large burden for the whole country.</Text>
    <Text>Then {`there's`} the damage to food businesses that are fined, prosecuted or shut down for causing food-borne illness outbreaks.</Text>
    <Text>According to the Department of Health in Australia, there are around 4.1 million cases of food-borne illness every year. On average, this leads to:</Text>
    <ul className="mb-4">
      <ListItem>6.5 million days of lost work</ListItem>
      <ListItem>$1.25 billion annual cost to the Australian economy</ListItem>
      <ListItem>1 million doctors visits</ListItem>
      <ListItem>31,920 hospitalisations</ListItem>
      <ListItem>86 deaths</ListItem>
    </ul>
    <Text>Around one third of these food-borne illness cases are thought to be caused by food handling mistakes.</Text>
  </div>;
};

const HowCanWeSolveSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">How can we solve this problem?</Header3>
    <IntroBox imageSrc={MissionGraphic} alt="students-food-card-hero-graphic">
      <Text>The costs of food-borne illness showcase the great need to strengthen our food safety.</Text>
      <Text>There are 3 major causes of food-borne illness outbreaks in Australia:</Text>
      <ol>
        <ListItem>Issues with time and temperature control of food</ListItem>
        <ListItem>Improper cleaning and sanitising of equipment and surfaces</ListItem>
        <ListItem>Poor personal hygiene of food workers</ListItem>
      </ol>
      <Text>Understanding and preventing these causes is simple.</Text>
      <Text>In fact, it takes just a few hours to train an employee in these areas and teach them how to work with food safely.</Text>
      <Text>At AIFS, we firmly believe that food safety education is the key to achieving our mission.</Text>
    </IntroBox>
  </SectionContainer>;
};

const BenefitsSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">How are we achieving our mission?</Header3>
    <Text>To improve food safety in Australia, we want to make it as easy as possible for businesses to do the right thing. We want to protect both business owners and consumers from the consequences of food-borne illness.</Text>
    <Text className="pb-4">The AIFS team are achieving these goals through:</Text>
    <TwoCol>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_lightbulb.svg"}
        title="Advocating for improved regulation"
      >
        <Text>Food safety legislation varies widely between states and territories. We are advocates for bringing food safety up to the highest level across all of Australia.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_mortarboard.svg"}
        title="Delivering quality education"
      >
        <Text>Working with food safety experts and instructional designers our training is more than compliant - {`it's`} highly effective and impactful.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_presentation.svg"}
        title="Announcing public health information"
      >
        <Text>The AIFS Foundation is responsible for releasing public health information to help food businesses and consumers minimise food safety hazards.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_member.svg"}
        title="Providing ongoing support"
      >
        <Text>The AIFS Membership Program provides members with the latest food safety information to keep businesses and customers safe.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_handshake.svg"}
        title="Focusing on community needs"
      >
        <Text>For every person that undertakes nationally recognised food safety training with AIFS, we donate up to two meals to people in need.</Text>
      </IconCard>
      <IconCard
        imageSrc={"/icons/icon_stroke_green_people.svg"}
        title="Boosting consumer awareness"
      >
        <Text>Food safety is of great importance to consumers. AIFS food business signage is designed to give people peace of mind about where {`they're`} eating.</Text>
      </IconCard>
    </TwoCol>
  </div>;
};

export default Page;
