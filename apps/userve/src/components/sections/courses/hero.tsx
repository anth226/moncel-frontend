import React from 'react';
import ReactMarkdown from 'react-markdown';

import StatePicker from 'src/components/core/StatePicker';
import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { Header1, Text } from 'src/components/core/typography';

export default (props: HeroStoryblok) => {
    return <Section className="grid grid-cols-12 grid-rows-1 items-center">
        <div className="order-12 md:order-1 md:col-start-1 col-span-12 md:col-span-6">
            <Header1><ReactMarkdown className="hello">{props.title || ""}</ReactMarkdown></Header1>
            <Text>{props.description || ""}</Text>
            <StatePicker />
        </div>
        <div className="order-1 md:order-12 md:col-start-8 col-span-12 md:col-span-5 mb-6 md:mb-0 flex justify-center">
            <img src={props.graphic?.filename || ""} alt={props.title} className="max-w-[300px] md:max-w-full" />
        </div>
    </Section>
};