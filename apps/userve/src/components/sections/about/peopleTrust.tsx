import React from 'react';

import { Section } from 'src/components/core/Section';
import { TitleDescriptionStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/core/typography';

import "./about.scss";

export default ({ peopleData, trustData }: { peopleData: TitleDescriptionStoryblok, trustData: TitleDescriptionStoryblok }) => {
    return <Section className="grid grid-cols-12 grid-rows-1 items-center !pb-0 pt-0 md:pt-6">
        <div className="highlight-bold order-12 md:order-1 col-span-12 md:col-span-5 pb-12 md:pb-0">
            <Header2>{peopleData.title || ""}</Header2>
            <Text className="!mb-0">{peopleData.description || ""}</Text>
        </div>
        <div className="highlight-bold order-12 md:order-1 md:col-start-7 col-span-12 md:col-span-5">
            <Header2>{trustData.title || ""}</Header2>
            <Text className="!mb-0">{trustData.description || ""}</Text>
        </div>
    </Section>
};
