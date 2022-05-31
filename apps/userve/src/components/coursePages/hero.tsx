import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

import { Text, Header1, Header2, Header5 } from 'src/components/core/typography';
import { Section } from 'src/components/core/Section';
import { CourseData, CourseType, CourseTypeData } from 'src/components/coursePages/types';
import { courseLang } from 'src/lib/courseLang';
import { getFilename, findMatchingLocalFileNode, DynamicImage, Slug, LocalFileSource } from 'src/lib';
import { IconCardStoryblok, CoursePageStoryblok, BassetPurchaseModalStoryblok } from "src/storyblok-component-types";
import PurchaseButton from './lib/purchaseFlow';
import { Tooltip } from './tooltip';

// images - non-optimized
const IMAGE_DIR_PATH = "../../images";
const medalIconGraphicPath = `${IMAGE_DIR_PATH}/usx_medal.svg`;
const dollarIconGraphicPath = `${IMAGE_DIR_PATH}/usx_dollar.svg`;
const infoIconGraphicPath = `${IMAGE_DIR_PATH}/usx_i.svg`;

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => <div className={`bg-melrose rounded-3xl text-sm px-4 py-[6px] mb-6 w-fit flex flex-row items-center ${props.className}`}>
    <StaticImage src={medalIconGraphicPath} alt="Medallion Icon" className="mr-1" width={14} height={14}></StaticImage>
    {props.children}
</div>;

const MoneyBackGuarantee = ({x}:{x:CourseType}) => {
    const lang = courseLang(x);
    return <div className="bg-green-100 text-green-700 rounded-xl p-2 my-6 flex flex-row items-center justify-center text-sm text-center">
        <StaticImage src={dollarIconGraphicPath} alt="Dollar Icon" className="mr-2" width={20} height={13}></StaticImage>
        {lang == "lang-es" ? "Garantía de devolución de dinero" : "100% Money Back Guarantee"}
        <Tooltip message={lang == "lang-es" ? "¡Estamos seguros de que te van a encantar nuestros cursos! Si no es así, te haremos un reembolso completo de acuerdo con nuestra política de devoluciones." : "We're confident you'll love our courses! If not, we provide full refunds subject to our refund policy."}><StaticImage src={infoIconGraphicPath} alt="Info Icon" className="ml-2" width={16} height={16}></StaticImage>
        </Tooltip>
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

const Features = ({ features, heroStory }: { features: IconCardStoryblok[], heroStory: Slug }) => {
    return <div className="flex flex-col gap-4">
        {features.map((feature, i) => {
            const gatsbyImageFileNode = findMatchingLocalFileNode(getFilename(feature.Icon?.filename || ""), heroStory);
            return <div className="flex flex-row gap-3 items-baseline" key={`features-${i}`}>
                <DynamicImage fileNode={gatsbyImageFileNode} width={20} height={20} alt={feature.Title || ""} className="block max-w-none w-4" />
                <ReactMarkdown>{feature.Title || ""}</ReactMarkdown>
            </div>
        })}
    </div>
}

const Benefits = ({ benefits, heroStory }: { benefits: IconCardStoryblok[], heroStory: Slug }) => {
    return <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {benefits.map((benefit, i) => {
            const gatsbyImageFileNode = findMatchingLocalFileNode(getFilename(benefit.Icon?.filename || ""), heroStory);
            return <div className="flex flex-col gap-4 items-start" key={`benefits-${i}`}>
                <DynamicImage fileNode={gatsbyImageFileNode} width={60} height={60} className="block max-w-none h-16 mb-4" alt={benefit.Title || ""} />
                <Header5 className="!mb-0">{benefit.Title || ""}</Header5>
                <Text className="!mb-0">{benefit.Description || ""}</Text>
            </div>
        })}
    </div>
}

export default ({ content, heroStory, context }: { content: CoursePageStoryblok, context: CourseData, heroStory: Slug }) => {
    const imageData = useStaticQuery(imageQuery);
    let defaultGraphicFileNode: LocalFileSource | undefined;

    switch (true) {
        case (context.type === "fh"):
            defaultGraphicFileNode = imageData.foodHandler.nodes[0];
            break;
        case (context.type === "al"):
            defaultGraphicFileNode = imageData.alcoholServer.nodes[0];
            break;
        case (context.type === "fm"):
            defaultGraphicFileNode = undefined;
            break;
        case (context.type === "rbs"):
            defaultGraphicFileNode = imageData.rbs.nodes[0];
            break;
        case (context.type === "rbses"):
            defaultGraphicFileNode = imageData.rbses.nodes[0];
            break;
        case (context.type === "basset"):
            defaultGraphicFileNode = imageData.basset.nodes[0];
    }

    const title = (content.title || "").replace("$STATE", context.state);
    const lang = courseLang(context.type);

    const gatsbyImageFileNode = findMatchingLocalFileNode(getFilename(content.Image?.filename || ""), heroStory);
    const imageComp = <DynamicImage fileNode={gatsbyImageFileNode || defaultGraphicFileNode} alt={title || "Hero image"} className="rounded-xl" imgStyle={{borderRadius:'1rem'}}/>;
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

            <EnrollButton courseType={{ type: context.type, enroll: context.enroll || "" }}>
                <p className="text-inherit !mb-0" data-test="enroll-button">{lang == "lang-es" ? "Regístrate" : "Enroll Now"}</p>
            </EnrollButton>
            <MoneyBackGuarantee x={context.type} />
            <Features features={content.features || []} heroStory={heroStory}/>
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-3">
            <Header2 className="!text-2xl">{content.subtitle || ""}</Header2>
            <Benefits benefits={content.benefits || []} heroStory={heroStory} />
        </div>
    </Section>;
};

// optimized images
const imageQuery = graphql`
query {
    foodHandler:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    alcoholServer:allFile(filter: { name: { eq: "usx_al_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    rbs:allFile(filter: { name: { eq: "usx_ca_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    rbses:allFile(filter: { name: { eq: "usx_al_ca_es_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    basset:allFile(filter: { name: { eq: "usx_al_il_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
}
`;
