import React from "react";

import { Section } from 'src/components/core/Section';
import { ButtonTransparent } from "../../shared";
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage} from 'src/lib/images';

const AboutUsSection = (props: AboutUsStoryblok & StoryblokStoryProps) => {
    const localImageFileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);
    return <Section>
        <div className={`bg-${ props.bg_version } cta rounded-2xl grid grid-cols-12 grid-flow-row drop-shadow-lg`}>
            <div className="col-span-12 md:col-span-6 text-white flex flex-col justify-center p-10 md:py-14 md:pl-14 md:pr-0">
                <Header2 className="!text-white">{props.header || ""}</Header2>
                <Text className="!mb-0">{props.subheader || ""}</Text>
                <a href={props.url}>
                    <ButtonTransparent>{props.link_text || ""}</ButtonTransparent>
                </a>
            </div>
            <div className="md:col-span-6 hidden justify-center relative md:flex self-end">
                <DynamicImage fileNode={localImageFileNode} alt="About Userve" className="block absolute max-w-[400px] bottom-0" />
            </div>
        </div>
    </Section>;
};

export default AboutUsSection;
