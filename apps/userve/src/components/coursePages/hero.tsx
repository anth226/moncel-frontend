import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Text, Header1, Header2, Header5 } from 'src/components/core/typography';
import { Section } from 'src/components/core/Section';
import { CourseData, CourseType, CourseTypeData } from 'src/components/coursePages/types';
import { courseLang } from 'src/lib/courseLang';
import { Slug } from 'src/lib/storyblokSourceTypes';
import { IconCardStoryblok, CoursePageStoryblok, BassetPurchaseModalStoryblok } from "src/storyblok-component-types";
import { Tooltip } from './tooltip';

// images
import fhGraphic from 'src/images/usx_fh_ge_hero.jpg';
import alGraphic from 'src/images/usx_al_ge_hero.jpg';
import rbsGraphic from 'src/images/usx_ca_hero.jpg';
import rbsesGraphic from 'src/images/usx_al_ca_es_hero.jpg';
import bassetGraphic from 'src/images/usx_al_il_hero.jpg';
import MedalIcon from 'src/images/usx_medal.svg';
import DollarIcon from 'src/images/usx_dollar.svg';
import InfoIcon from 'src/images/usx_i.svg';
import PurchaseButton from './lib/purchaseFlow';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => <div className={`bg-melrose rounded-3xl text-sm px-4 py-[6px] mb-6 w-fit flex flex-row items-center ${props.className}`}>
    <img src={MedalIcon} className="h-4 pr-2" />
    {props.children}
</div>;

const MoneyBackGuarantee = ({x}:{x:CourseType}) => {
    const lang = courseLang(x);
    return <div className="bg-green-100 text-green-700 rounded-xl p-2 my-6 flex flex-row items-center justify-center text-sm text-center">
        <img src={DollarIcon} className="h-4 pr-2" />
        {lang == "lang-es" ? "Garantía de devolución de dinero" : "100% Money Back Guarantee"}
        <Tooltip message={lang == "lang-es" ? "¡Estamos seguros de que te van a encantar nuestros cursos! Si no es así, te haremos un reembolso completo de acuerdo con nuestra política de devoluciones." : "We're confident you'll love our courses! If not, we provide full refunds subject to our refund policy."}><img src={InfoIcon} className="h-4 pl-2" /></Tooltip>
    </div>;
};

const EnrollButton = ({ children, courseType }: { children: React.ReactNode, courseType: CourseTypeData }) => {
    // basset needs a modal
    return <PurchaseButton courseType={courseType}>
        <div className="btn btn-primary w-full">
            { children }
        </div>
    </PurchaseButton>
};

const Features = ({ features }: { features: IconCardStoryblok[] }) => {
    return <div className="flex flex-col gap-4">
        {features.map((feature, i) => {
            return <div className="flex flex-row gap-4 items-start" key={`feature-${i}`}>
                <img src={feature.Icon?.filename || ""} width={20} height={20} alt={feature.Title} />
                <ReactMarkdown>{feature.Title || ""}</ReactMarkdown>
            </div>
        })}
    </div>
}

const Benefits = ({ benefits }: { benefits: IconCardStoryblok[] }) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefits, i) => {
            return <div className="flex flex-col gap-4 items-start" key={`benefits-${i}`}>
                <img src={benefits.Icon?.filename || ""} width={60} height={60} className="block max-w-none h-16 mb-4" alt={benefits.Title} />
                <Header5 className="!mb-0">{benefits.Title || ""}</Header5>
                <Text className="!mb-0">{benefits.Description || ""}</Text>
            </div>
        })}
    </div>
}

export default ({ content, modalStories, context }: { content: CoursePageStoryblok, context: CourseData, modalStories: Slug[] }) => {
    const modalContent = modalStories.map(slug => {
        return JSON.parse(slug.content || "");
    });
    let defaultGraphic = "";

    switch (true) {
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
        case (context.type === "rbses"):
            defaultGraphic = rbsesGraphic;
            break;
        case (context.type === "basset"):
            defaultGraphic = bassetGraphic;
    }

    const title = (content.title || "").replace("$STATE", context.state);
    const lang = courseLang(context.type);

    const imageComp = content.image?.filename ? <img src={content.image?.filename} alt={content.title} className="rounded-md" /> : <img src={defaultGraphic} alt={title} className="rounded-md" />
    // replace state placeholder with state name
    if (!content.price) throw Error(`Price was not found for page ${context.url}`);

    return <Section className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-10 grid-flow-col md:grid-flow-row">
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 row-span-2">
            {imageComp}
        </div>
        <div className="col-start-1 col-span-1 md:row-start-1 row-span-3 flex flex-col h-full">
            {content.tag ? <Tag>{content.tag}</Tag> : null}
            <Header1 className="leading-8 !text-3xl md:!text-4xl">{title}</Header1>
            <Text>{content.desc || ""}</Text>
            <div className="mb-6 text-4xl font-extrabold">{content.price}</div>
            <EnrollButton courseType={{ type: context.type, enroll: context.enroll }}>
                <a className="text-inherit" href={context.enroll}>{lang == "lang-es" ? "Regístrate" : "Enroll Now"}</a>
            </EnrollButton>
            <MoneyBackGuarantee x={context.type} />
            <Features features={content.features || []} />
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-3">
            <Header2 className="!text-2xl">{content.subtitle || ""}</Header2>
            <Benefits benefits={content.benefits || []} />
        </div>
    </Section>;
};
