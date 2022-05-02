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
    return <Section className="flex flex-col-reverse md:flex-row items-center">
        <div className="lg:col-start-1">
            <Header1>{ content.Header || "Get your certificate in hours not days." }</Header1>
            <Text>{ content.Subheader || "Flexible courses for alcohol servers and food handlers, with no prior experience required." }</Text>
            <StatePicker />
        </div>
        <div className="lg:col-start-2">
            <DynamicImage fileNode={heroImageLocalFileNode} alt="Hero image" className="ml-12" />
        </div>
    </Section>
}

export default HeroSection;
