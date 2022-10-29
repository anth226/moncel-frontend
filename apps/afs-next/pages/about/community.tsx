import { ReactNode } from 'react';

import Layout from 'components/core/layout';
import { Divider, IntroBox, ListItem } from 'components/core/templates';
import { AboutBackground } from 'components/about';
import { aboutNavigationData } from 'components/about/aboutPagesData';
import { Header1, Header3, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';
import NextLink from 'next/link';

import HeroGraphic from 'public/about/photo_ozharvest.jpg';
import ResourcesGraphic from 'public/about/photo_community_resources.jpg';
import MealsGraphic from 'public/about/photo_community_meals.jpg';
import VolGraphic from 'public/about/photo_community_volunteering.jpg';
import MediaGraphic from 'public/about/photo_community_media.jpg';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'about-page-body',
  pathname: "about/community",
  displayPathname: "ABOUT US / AIFS IN THE COMMUNITY",
  header: <div>
    <Header1 className="text-teal mb-4">AIFS in the Community</Header1>
  </div>,
  subheader: "The AIFS Foundation exists to help tackle food-related issues in our community. Our team is dedicated to helping others and together we can make a difference.",
  navigation: aboutNavigationData,
};

const Page = () => {
  return (
    <Layout>
      <AboutBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
          <Divider />
          <SharingSection />
          <Divider />
          <OzSection />
          <Divider />
          <VolunteerSection />
          <Divider />
          <AwarenessSection />
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
    <Header3 className="pb-4">Helping Australians in need</Header3>
    <IntroBox imageSrc={HeroGraphic} alt="students-food-card-hero-graphic">
      <Text>There are a number of food-related issues in Australia that need addressing:</Text>
      <ul className="mb-4">
        <ListItem>1 in 5 Australians suffer food-borne illness each year</ListItem>
        <ListItem>30,000 are hospitalised annually due to food poisoning</ListItem>
        <ListItem>$10bn worth of food is thrown out per annum</ListItem>
        <ListItem>1 in 10 people rely on food aid</ListItem>
      </ul>
      <Text>At AIFS, we {`can't`} solve all of these problems... but we can make a difference. Our team cares deeply about providing help to those who need it most.</Text>
      <Text>Read on to learn more about some of the most popular initiatives {`we've`} put in place.</Text>
    </IntroBox>
  </SectionContainer>;
};

const SharingSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Sharing public health information and tools</Header3>
    <IntroBox imageSrc={ResourcesGraphic} alt="students-food-card-hero-graphic" layout={false}>
      <Text>Our mission is to reduce food-borne illness within Australia by educating, advocating and promoting food safety.</Text>
      <Text>We believe that food safety training and education is key.</Text>
      <Text>{`That's`} why {`we're`} always producing and releasing how-to guides, posters, templates, videos, webinars and articles free of charge to food businesses and the general public.</Text>
    </IntroBox>
  </div>;
};

const OzSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Helping to feed the vulnerable</Header3>
    <IntroBox imageSrc={MealsGraphic} alt="students-food-card-hero-graphic">
      <Text>We work closely with OzHarvest, a food rescue charity that collects quality excess food from food businesses and delivers it, direct and free of charge, to hundreds of charities.</Text>
      <Text>OzHarvest relies on donations to fund its operations — and {`that's`} where AIFS helps.</Text>
      <Text>For every student who enrols in a <NextLink href="/courses/food-safety-supervisor">Food Safety Supervisor</NextLink> course with AIFS, we donate enough funds to feed two people in need.</Text>
      <Text>For every student that enrols in a <NextLink href="/courses/food-handler-course">Food Handler</NextLink> course, we help to feed one vulnerable person in our community.</Text>
    </IntroBox>
  </div>;
};

const VolunteerSection = () => {
  return <div className="col-span-3" id="section-2">
    <Header3 className="pb-4">Volunteering to help the less fortunate</Header3>
    <IntroBox imageSrc={VolGraphic} alt="students-food-card-hero-graphic" layout={false}>
      <Text>Through our association with OzHarvest, the AIFS team volunteers regularly to help the less fortunate.</Text>
      <Text>Some of the activities {`we've`} been involved in include:</Text>
      <ul>
        <ListItem>preparing meals for homeless shelters</ListItem>
        <ListItem>participating in events to raise awareness about hunger in Australia</ListItem>
        <ListItem>collecting and delivering food to those in need</ListItem>
      </ul>
    </IntroBox>
  </div>;
};

const AwarenessSection = () => {
  return <SectionContainer className="col-span-3" id="students-hero-section">
    <Header3 className="pb-4">Raising public awareness about food safety</Header3>
    <IntroBox imageSrc={MediaGraphic} alt="students-food-card-hero-graphic">
      <Text>Food-borne illness is not often discussed by the public or reported in the media — until a scandal happens.</Text>
      <Text>Our goal is to make food safety a topic that food service workers and consumers think about before incidents occur.</Text>
      <Text>The AIFS team raises public awareness through:</Text>
      <ul className="mb-4">
        <ListItem>producing press releases and media materials</ListItem>
        <ListItem>providing comments and opinions when a problem occurs</ListItem>
        <ListItem>participating in events</ListItem>
      </ul>    
      <Text>{`You've`} probably seen or heard of us on TV, the radio, or in newspapers and magazines.</Text>
    </IntroBox>
  </SectionContainer>;
};

export default Page;
