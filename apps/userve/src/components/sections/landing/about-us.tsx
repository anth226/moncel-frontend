import React from "react";
import { Link } from "gatsby";
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { ButtonTransparent } from "../../shared";
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/shared/typography';

const AboutUsSection = (props: AboutUsStoryblok) => {
    return <Section>
        <div className="bg-[url('../images/usx-cta-background.svg')] bg-[#72809d] bg-cover	rounded-2xl grid grid-cols-12 grid-flow-row drop-shadow-lg">
            <div className="col-span-12 md:col-span-6 text-white flex flex-col justify-center p-10 md:p-14">
                <Header2 className="!text-white">{props.header}</Header2>
                <Text className="!mb-0">{props.subheader}</Text>
                <a href={props.url.url}>
                    <ButtonTransparent>{props.link_text}</ButtonTransparent>
                </a>
            </div>
            <div className="md:col-span-6 hidden justify-center relative md:flex self-end">
                <img src={props.image?.filename || ""} alt="About Userve" className="block absolute max-w-[400px] bottom-0" />
            </div>
        </div>
    </Section>;
};

export default AboutUsSection;