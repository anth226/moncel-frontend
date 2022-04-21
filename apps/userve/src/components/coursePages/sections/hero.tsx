import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { CoursePageStoryblok } from "src/storyblok-component-types";
import { Text, Header1 } from 'src/components/shared/typography';
import { Section } from 'src/components/core/Section';
import { CourseData } from 'src/components/coursePages/types';

import fhGraphic from 'src/images/usx_fh_ge_hero.jpg';
import alGraphic from 'src/images/usx_al_ge_hero.jpg';
import rbsGraphic from 'src/images/usx_ca_hero.jpg';
import bassetGraphic from 'src/images/usx_al_il_hero.jpg';
import MedalIcon from 'src/images/usx_medal.svg';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => {
    return <div className={`bg-indigo-300 rounded-3xl px-4 py-2 w-fit flex flex-row items-center ${props.className}`}>
        <img src={MedalIcon} className="h-4 pr-2" />
        { props.children }
    </div>
};

export default ({content, context}: { content: CoursePageStoryblok, context: CourseData } ) => {
    let defaultGraphic = "";
    switch(true){
        case (context.type === "fh"):
            defaultGraphic = fhGraphic;
            break;
        case (context.type === "al"):
            defaultGraphic = alGraphic;
            break;
        case (context.type === "fm"):
            defaultGraphic = ``;
            break;
        case (context.type === "rbs"):
            defaultGraphic = rbsGraphic;
            break;
        case (context.type === "basset"):
            defaultGraphic = bassetGraphic;
    }

    const imageComp = content.image?.filename ? <img src={content.image?.filename} /> : <img src={defaultGraphic} alt="Course Hero Image" />
    // replace state placeholder with state name
    const title = (content.title || "").replace("$STATE", context.state)

    return <Section className="grid grid-cols-3 gap-16 grid-flow-row pt-0">
        <div className="col-start-1 col-span-1 flex flex-col gap-8">
            { content.tag ? <Tag>{content.tag}</Tag>: null}
            <Header1>{ title }</Header1>
            <Text>{ content.desc || "" }</Text>
        </div>
        <div className="col-start-2 col-span-2">
            { imageComp }
        </div>
    </Section>;
};
