import React from "react";
import { Link } from "gatsby";
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { ButtonTransparent } from "../../shared";
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/shared/typography';

const AboutUsSection = (props: AboutUsStoryblok) => {
    return <Section>
        <div className="bg-[url('../images/usx-cta-background.svg')] bg-[#72809d] bg-cover	rounded-2xl grid grid-cols-2 grid-flow-row">
            <div className="text-white flex flex-col justify-center p-16">
                <Header2><span className="text-white">{props.header}</span></Header2>
                <Text>{props.subheader}</Text>
                <ButtonTransparent className="mt-4 w-fit">
                    <Link to="/us/about/about-us">{props.link_text}</Link>
                </ButtonTransparent>
            </div>
            <div className="justify-center relative flex self-end">
                <img src={props.image?.filename || ""} alt="About Userve" className="block absolute max-w-[450px] bottom-0"/>
            </div>
        </div>
    </Section>;
};

export default AboutUsSection;