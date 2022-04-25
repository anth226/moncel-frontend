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
import { propTypes } from 'gatsby-plugin-image/dist/src/components/gatsby-image.server';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => <div className={`bg-indigo-300 rounded-3xl px-4 py-2 my-2 w-fit flex flex-row items-center ${props.className}`}>
    <img src={MedalIcon} className="h-4 pr-2" />
    { props.children }
</div>;

const MoneyBackGuarantee = () => <div className="bg-green-100 text-green-700 rounded-xl px-8 py-4 my-2 flex flex-row items-center">
    <img src={DollarIcon} className="h-4 pr-2" />
    100% Money Back Guarantee
</div>;

const EnrollButton = ({ children }: { children: React.ReactNode}) => {
    // basset needs a modal

    return <div className="py-4 px-8 bg-navy rounded-lg text-white text-center font-bold cursor-pointer hover:opacity-90 ">
        { children }
    </div>
};

const Features = ({ features }: { features: IconCardStoryblok[] }) => {
    return <div className="flex flex-col gap-10">
        { features.map( feature => {
            return <div className="flex flex-row gap-4 items-center">
                <img src={feature.Icon?.filename || ""} width={20} height={20} />
                <Text className="mb-0">{feature.Title || ""}</Text>
            </div>
        } )}
    </div>
}

const Benefits = ({ benefits }: { benefits: IconCardStoryblok[] }) => {
    return <div className="flex flex-col gap-10">
        { benefits.map( benefits => {
            return <div className="flex flex-row gap-4 items-center">
                <img src={benefits.Icon?.filename || ""} width={20} height={20} />
                <Header5>{benefits.Title || ""}</Header5>
                <Text>{benefits.Description || ""}</Text>
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

    const imageComp = content.image?.filename ? <img src={content.image?.filename} /> : <img src={defaultGraphic} alt="Course Hero Image" />
    // replace state placeholder with state name
    if(!content.price) throw Error(`Price was not found for page ${context.url}`);
    const title = (content.title || "").replace("$STATE", context.state);

    return <Section className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-16 grid-flow-col md:grid-flow-row pt-0">
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 row-span-2">
            { imageComp }
        </div>
        <div className="col-start-1 col-span-1 md:row-start-1 row-span-3 flex flex-col gap-4 h-full">
            { content.tag ? <Tag>{content.tag}</Tag>: null}
            <Header1 className="mt-0">{ title }</Header1>
            <Text className="text-xl">{ content.desc || "" }</Text>
            <Header1 className="my-0">{ content.price }</Header1>
            <EnrollButton>
                <a className="text-inherit" href={context.enroll} >Enroll Now</a>
            </EnrollButton>
            <MoneyBackGuarantee />
            <Features features={content.features || []}/>
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-3">
            <Header2>{`We make it easier to get your ${context.title.toLowerCase()}.`}</Header2>
            <Benefits benefits={content.benefits || []} />
        </div>
    </Section>;
};
