import React from "react";

import { Section } from 'src/components/core/Section';
import { ButtonTransparent } from "../../shared";
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage} from 'src/lib/images';

const AboutUsSection = (props: AboutUsStoryblok & StoryblokStoryProps) => {
    const localImageFileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);
    return <Section>
        <div className={`bg-${ props.bg_version } cta rounded-xl grid grid-cols-12 grid-flow-row shadow-lg`}>
            <div className="col-span-12 md:col-span-6 text-white flex flex-col justify-center p-10 lg:py-14 lg:pl-14">
                <Header2 className="!text-white">{props.header || ""}</Header2>
                <Text className="!mb-8">{props.subheader || ""}</Text>
                <a href={props.url}>
                    <ButtonTransparent className="w-fit text-white border-white hover:bg-white hover:bg-opacity-10">{props.link_text || ""}</ButtonTransparent>
                </a>
            </div>
            <div className="hidden md:flex justify-center md:col-span-6 relative self-end">
                <DynamicImage fileNode={localImageFileNode} alt="About Userve" className="absolute bottom-0 max-w-[430px]" />
            </div>
        </div>
    </Section>;
};

export default AboutUsSection;
