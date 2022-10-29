import { ReactNode } from 'react';
import NextLink from 'next/link';

import Layout from 'components/core/layout';
import { IntroBox } from 'components/core/templates';
import { AboutBackground } from 'components/about';
import { aboutNavigationData } from 'components/about/aboutPagesData';
import { Header1, Text } from 'components/core';
import { RowsTemplate } from 'components/templates';
import { RowsTemplateProps } from 'components/templates/types';

import HeroGraphic from 'public/about/photo_thankyou.jpg';

const TemplateData: Omit<RowsTemplateProps, "children"> = {
  id: 'hidden-confirmation',
  pathname: "confirmation",
  displayPathname: "Australian Institute of Food Safety",
  header: <div>
    <Header1 className="text-teal">Thank You For Your Enquiry</Header1>
  </div>,
  navigation: aboutNavigationData,
};

const Page = () => {
  return (
    <Layout>
      <AboutBackground><RowsTemplate {...TemplateData}>
        <>
          <HeroSection />
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
    <IntroBox imageSrc={HeroGraphic} alt="Thank you for purchasing 12 months of AIFS Membership.">
      <Text>Your enquiry has been received and a customer support representative will be in touch with you shortly.</Text>
      <Text>In the meantime why not take a look at our <NextLink href="/faq">frequently asked questions</NextLink>, checkout our <NextLink href="https://blog.foodsafety.com.au/blog"><a target="_blank">blog</a></NextLink>, <NextLink href="https://blog.foodsafety.com.au/news"><a target="_blank">news</a></NextLink> or return to the <NextLink href="/">homepage</NextLink>.</Text>
    </IntroBox>
  </SectionContainer>;
};

export default Page;
