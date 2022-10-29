import { ReactNode } from 'react';

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
    <Header1 className="text-teal">Thank You For Your Purchase</Header1>
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
      <Text>Thank you for purchasing 12 months of AIFS Membership.</Text>
      <Text>{`You'll`} receive an email with your membership login details shortly. Keep an eye on your inbox — and thank you for joining AIFS!</Text>
    </IntroBox>
  </SectionContainer>;
};

export default Page;
