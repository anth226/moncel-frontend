import React from 'react';

import { Section, SectionFullWidth } from 'src/components/core/Section';
import { Header1, Text } from 'src/components/core/typography';
import StatePicker from 'src/components/core/StatePicker';

import { SectionStoryblok } from 'src/storyblok-component-types';
import DefaultHeroImage from 'src/images/usx_hero_home.png';
import { getFilename, findMatchingLocalFileNode, DynamicImage, Slug } from 'src/lib';


interface PropTypes {
    content: SectionStoryblok;
    slug: Slug;
}

const HeroSection = ({ content, slug }: PropTypes) => {
    const heroImageLocalFileNode = findMatchingLocalFileNode(getFilename(content.Image?.filename || ""), slug);
    return <Section className="grid grid-cols-12 items-center ">
        <div className="col-span-12 md:col-span-7 lg:col-span-6 order-12 md:order-1">
            <Header1>{ content.Header || "Get your certificate in hours not days." }</Header1>
            <Text>{ content.Subheader || "Flexible courses for alcohol servers and food handlers, with no prior experience required." }</Text>
            <StatePicker />
        </div>
        <div className="col-span-12 md:col-span-5 lg:col-span-6 order-1 md:order-12 mb-6 md:mb-0 flex justify-center">
            <DynamicImage fileNode={heroImageLocalFileNode} alt="Hero image" className="md:ml-12 max-w-[300px] md:max-w-full" />
        </div>
    </Section>
}

export default HeroSection;
