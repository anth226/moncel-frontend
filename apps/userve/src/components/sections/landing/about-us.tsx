import React from "react";
import { Link } from "gatsby";
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { ButtonTransparent } from "../shared";
import { AboutUsStoryblok } from 'src/storyblok-component-types';

const AboutUsSection = (props: AboutUsStoryblok) => {
    return <Section>
        <div className="bg-[url('../images/usx-cta-background.svg')] bg-[#72809d] bg-cover	rounded-2xl grid grid-cols-2 grid-flow-row px-16">
            <div className="text-white flex flex-col justify-center">
                <h1 className="text-3xl font-extrabold my-4">{props.header}</h1>
                <p className="my-4">{props.subheader}</p>
                    <ButtonTransparent className="my-4 w-fit">
                        <Link to="/us/about/about-us">{props.link_text}</Link>
                    </ButtonTransparent>
            </div>
            <div>
                <img src={props.image?.filename || ""} alt="about userve"/>
            </div>
        </div>
    </Section>;
};

export default AboutUsSection;