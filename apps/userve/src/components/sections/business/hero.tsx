import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { Text } from 'src/components/core/typography';
import { DynamicImage, getFilename, findMatchingLocalFileNode, StoryblokStoryProps } from 'src/lib/images';

export default (props: HeroStoryblok & StoryblokStoryProps) => {
    const imageFileNode = findMatchingLocalFileNode(getFilename(props.graphic?.filename || ""), props.story);
    return <Section className="grid grid-cols-12 grid-rows-1 items-center">
        <div className="order-12 md:order-1 md:col-start-1 col-span-12 md:col-span-6">
            <ReactMarkdown>{props.title || ""}</ReactMarkdown>
            <Text>{props.description || ""}</Text>
            <div>
                <a className="btn btn-primary md:mr-4 mb-2 md:mb-0" href="#buslmform" rel="noopener">
                    {props.primary_btn}
                </a>
                <a className="btn btn-invert" href="https://hello.userve.com/schedule" target="_blank" rel="noopener">
                    {props.secondary_btn}
                </a>
            </div>
        </div>
        <div className="order-1 md:order-12 col-span-12 md:col-span-6 mb-6 md:mb-0 flex justify-center">
            <DynamicImage fileNode={imageFileNode} alt={props.title || "hero image"} className="max-w-[320px] md:max-w-full" />
        </div>
    </Section>
};