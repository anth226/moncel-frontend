import React from 'react';
import ReactMarkdown from 'react-markdown';

import { getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import StatePicker from 'src/components/core/StatePicker';
import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { Text } from 'src/components/core/typography';

export default (props: HeroStoryblok) => {
    const fileNode = findMatchingLocalFileNode(getFilename(props.graphic?.filename || ""), props.story);
    return <Section className="grid grid-cols-12 grid-rows-1 items-center">
        <div className="order-12 md:order-1 md:col-start-1 col-span-12 md:col-span-6">
            <ReactMarkdown>{props.title || ""}</ReactMarkdown>
            <Text>{props.description || ""}</Text>
            <StatePicker />
        </div>
        <div className="order-1 md:order-12 md:col-start-7 col-span-12 md:col-span-6 mb-6 md:mb-0 flex justify-center md:pl-12">
            <DynamicImage fileNode={fileNode} alt={props.title || ""} className="max-w-[300px] md:max-w-full rounded-xl drop-shadow-xl"/>
        </div>
    </Section>
};