import React from 'react';
import { StaticImage } from 'gatsby-plugin-image';

import { CoursePageStoryblok, IconCardStoryblok } from "src/storyblok-component-types";
import { Text, Header1, Header2, Header5 } from 'src/components/shared/typography';
import { Section } from 'src/components/core/Section';
import { CourseData } from 'src/components/coursePages/types';

// images
import fhGraphic from 'src/images/usx_fh_ge_hero.jpg';
import alGraphic from 'src/images/usx_al_ge_hero.jpg';
import rbsGraphic from 'src/images/usx_ca_hero.jpg';
import bassetGraphic from 'src/images/usx_al_il_hero.jpg';
import MedalIcon from 'src/images/usx_medal.svg';
import DollarIcon from 'src/images/usx_dollar.svg';
import InfoIcon from 'src/images/usx_i.svg';
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => <div className={`bg-melrose rounded-3xl text-sm px-4 py-[6px] mb-6 w-fit flex flex-row items-center ${props.className}`}>
    <img src={MedalIcon} className="h-4 pr-2" />
    { props.children }
</div>;

const MoneyBackGuarantee = () => <div className="bg-green-100 text-green-700 rounded-xl p-2 my-6 flex flex-row items-center justify-center text-sm text-center">
    <img src={DollarIcon} className="h-4 pr-2" />
    100% Money Back Guarantee
    <img src={InfoIcon} className="h-4 pl-2" />
</div>;

const EnrollButton = ({ children }: { children: React.ReactNode}) => {
    // basset needs a modal

    return <div className="btn btn-primary">
        { children }
    </div>
};

const Features = ({ features }: { features: IconCardStoryblok[] }) => {
    return <div className="flex flex-col gap-4"> 
        { features.map( feature => {
            return <div className="flex flex-row gap-4 items-start">
                <img src={feature.Icon?.filename || ""} width={20} height={20} alt={feature.Title}/>
                <Text className="!mb-0">{feature.Title || ""}</Text>
            </div>
        } )}
    </div>
}

const Benefits = ({ benefits }: { benefits: IconCardStoryblok[] }) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        { benefits.map( benefits => {
            return <div className="flex flex-col gap-4 items-start">
                <img src={benefits.Icon?.filename || ""} width={60} height={60} className="block max-w-none h-16 mb-4" alt={benefits.Title}/>
                <Header5 className="!mb-0">{benefits.Title || ""}</Header5>
                <Text className="!mb-0">{benefits.Description || ""}</Text>
            </div>
        } )}
    </div>
}

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
    
    const title = (content.title || "").replace("$STATE", context.state);
    const imageComp = content.image?.filename ? <img src={content.image?.filename} alt={content.title} className="rounded-md"/> : <img src={defaultGraphic} alt={title} className="rounded-md"/>
    // replace state placeholder with state name
    if(!content.price) throw Error(`Price was not found for page ${context.url}`);
    

    return <Section className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-10 grid-flow-col md:grid-flow-row">
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 row-span-2">
            { imageComp }
        </div>
        <div className="col-start-1 col-span-1 md:row-start-1 row-span-3 flex flex-col h-full">
            { content.tag ? <Tag>{content.tag}</Tag>: null}
            <Header1 className="mb-0 leading-8 !text-3xl md:!text-4xl">{ title }</Header1>
            <Text>{ content.desc || "" }</Text>
            <div className="mb-6 text-4xl font-extrabold">{ content.price }</div>
            <EnrollButton>
                <a className="text-inherit" href={context.enroll} >Enroll Now</a>
            </EnrollButton>
            <MoneyBackGuarantee />
            <Features features={content.features || []}/>
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-3">
            <Header2 className="!text-2xl">{`We make it easier to get your ${context.title.toLowerCase()}.`}</Header2>
            <Benefits benefits={content.benefits || []} />
        </div>
    </Section>;
};
