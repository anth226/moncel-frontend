import React from 'react';
import ReactMarkdown from 'react-markdown';

import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { Header1, Header3 } from 'src/components/core/typography';

import "./about.scss";

export default (props: HeroStoryblok & StoryblokStoryProps) => {
    const fileNode = findMatchingLocalFileNode(getFilename(props.graphic?.filename || ""), props.story);
    return <Section className="grid grid-cols-12 grid-rows-1 items-center !pb-0">
        <div className="highlight-bold order-12 md:order-1 md:col-start-1 col-span-12 md:col-span-10">
            <Header1><ReactMarkdown>{props.title || ""}</ReactMarkdown></Header1>
            <Header3 className="!mb-0"><ReactMarkdown className="!text-bluewood">{props.description || ""}</ReactMarkdown></Header3>
        </div>
        <div className="order-1 md:order-12 md:col-start-8 col-span-12 md:col-span-5 mb-6 md:mb-0 flex justify-center">
            <DynamicImage fileNode={fileNode} alt={props.title || ""} className="max-w-[300px] md:max-w-full"/>
        </div>
    </Section>
};
