import React from 'react';
import ReactMarkdown from 'react-markdown';

import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import { Section } from 'src/components/core/Section';
import { ThreeByTwoStoryblok } from 'src/storyblok-component-types';
import { Header1, Header4, Text } from 'src/components/core/typography';

import "./about.scss";

export default (props: ThreeByTwoStoryblok & StoryblokStoryProps) => {
    const fileNode = findMatchingLocalFileNode(getFilename(props.Image?.filename || ""), props.story);
    return <Section className="grid grid-cols-12 grid-rows-1 items-center border-b-[2px] border-slate-200">
        <div className="highlight-bold order-12 md:order-1 md:col-start-1 col-span-12 md:col-span-6">
            <Header1>{props.Title || ""}</Header1>
            <Header4>{props.Subtitle || ""}</Header4>
            <Text>{props.Content || ""}</Text>
        </div>
        <div className="order-1 md:order-12 md:col-start-8 col-span-12 md:col-span-6 mb-8 md:mb-0 flex justify-center">
            <DynamicImage fileNode={fileNode} alt="mission section graphic" className="max-w-[300px] md:max-w-full"/>
        </div>
    </Section>
};
