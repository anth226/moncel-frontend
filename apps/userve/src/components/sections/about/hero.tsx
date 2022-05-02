import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { Text } from 'src/components/core/typography';

export default (props: HeroStoryblok) => {
    return <Section className="grid grid-cols-12 grid-rows-1 items-center">
        <div className="col-start-1 col-span-6">
            <ReactMarkdown>{props.title || ""}</ReactMarkdown>
            <Text>{props.description || ""}</Text>
        </div>
        <div className="col-start-8 col-span-5">
            <img src={props.graphic?.filename || ""} alt={props.title} />
        </div>
    </Section>
};
