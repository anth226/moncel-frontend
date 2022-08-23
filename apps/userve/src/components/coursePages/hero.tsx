import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import ReactMarkdown from 'react-markdown';

import { Text, Header1, Header2, Header5 } from 'src/components/core/typography';
import { Section } from 'src/components/core/Section';
import { CourseData, CourseType, CourseTypeData } from 'src/components/coursePages/types';
import { courseLang } from 'src/lib/courseLang';
import { getFilename, findMatchingLocalFileNode, DynamicImage, Slug, LocalFileSource } from 'src/lib';
import { IconCardStoryblok, CoursePageStoryblok, BassetPurchaseModalStoryblok } from "src/storyblok-component-types";
import PurchaseButton from './lib/purchaseFlow';
import { Tooltip } from './tooltip';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => {
    const imageData = useStaticQuery(imageQuery);
    return <div className={`bg-melrose rounded-xl text-sm px-4 py-[6px] mb-6 text-center w-fit content-start ${props.className || ""}`}>
        <DynamicImage fileNode={imageData.medal.nodes[0]} alt="Medallion Icon" width={15} height={15} className="mr-1 -mt-1 inline" loading="lazy"/>
        {props.children}
    </div>;
}

const Alert = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => {
    const imageData = useStaticQuery(imageQuery);
    return <div className="bg-cinderella text-milano rounded-xl p-2 mb-2 flex flex-row items-center justify-center text-[12.8px] text-center">
        <DynamicImage fileNode={imageData.alert.nodes[0]} alt="Alert Icon" width={12} height={12} className="hidden lg:block mr-2" loading="lazy"/>
        {props.children}
    </div>;
};

const MoneyBackGuarantee = ({x}:{x:CourseType}) => {
    const lang = courseLang(x);
    const imageData = useStaticQuery(imageQuery);
    return <div className="bg-hint-green text-green-700 rounded-xl p-2 mb-6 flex flex-row items-center justify-center text-[12.8px] text-center">
        <DynamicImage fileNode={imageData.dollar.nodes[0]} alt="Dollar Icon" width={15} height={15} className="hidden lg:block mr-2" loading="lazy"/>
        {lang == "lang-es" ? "Garantía de devolución de dinero" : "100% Money-Back Guarantee"}
        <Tooltip message={lang == "lang-es" ? "¡Estamos seguros de que te van a encantar nuestros cursos! Si no es así, te haremos un reembolso completo de acuerdo con nuestra política de devoluciones." : "We're confident you'll love our courses! If not, we provide full refunds subject to our refund policy."}>
        <DynamicImage fileNode={imageData.info.nodes[0]} alt="Info Icon" width={14} height={14} className="ml-2" loading="lazy"/>
        </Tooltip>
    </div>;
};

const EnrollButton = ({ children, courseType, id }: { children: React.ReactNode, courseType: CourseTypeData, id:string }) => {
    // basset needs a modal
    return <PurchaseButton courseType={courseType}>
        <div id={id} className="btn btn-primary w-full">
            { children }
        </div>
    </PurchaseButton>
};

const BusinessButton = ({x}:{x:CourseType}) => {
    const lang = courseLang(x);
    return <div className="mb-6">
        <div className="hidden md:block w-full border border-navy p-4 rounded-lg mt-4 text-center">
            <h3 className="text-bluewood text-sm leading-5 font-semibold">{lang == "lang-es" ? "Necesito Una Cuenta Comercial?" : "Need a Business Account?"}</h3>
            <a href="https://hello.userve.com/schedule" target="_blank" className="text-dark-blue font-normal text-xs leading-4 hover:underline">{lang == "lang-es" ? "Hablar Con Un Asesor" : "Speak With An Advisor"}</a>
        </div>
        <a href="https://hello.userve.com/schedule" target="_blank" className="md:hidden btn btn-invert border-2 border-melrose text-dark-blue mt-4">{lang == "lang-es" ? "Necesito Una Cuenta Comercial?" : "Need a Business Account?"}</a>
    </div>
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
                <DynamicImage fileNode={gatsbyImageFileNode} width={60} height={60} className="block max-w-none h-16" alt={benefit.Title || ""} />
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
        case (context.type === "fh_ansi_az"):
            defaultGraphicFileNode = imageData.fh_ansi_az.nodes[0];
            break;
        case (context.type === "fh_ansi_ca"):
            defaultGraphicFileNode = imageData.fh_ansi_ca.nodes[0];
            break;
        case (context.type === "fh_ansi_hi"):
            defaultGraphicFileNode = imageData.fh_ansi_hi.nodes[0];
            break;
        case (context.type === "fh_ansi_il"):
            defaultGraphicFileNode = imageData.fh_ansi_il.nodes[0];
            break;
        case (context.type === "fh_ansi_nm"):
            defaultGraphicFileNode = imageData.fh_ansi_nm.nodes[0];
            break;
        case (context.type === "fh_ansi_tx"):
            defaultGraphicFileNode = imageData.fh_ansi_tx.nodes[0];
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

    return <Section id="course-page-product-hero" className="flex flex-col md:grid grid-cols-1 md:grid-cols-3 gap-10 grid-flow-col md:grid-flow-row">
        <div className="md:col-start-2 md:col-span-2 md:row-start-1 row-span-2">
            {imageComp}
        </div>
        <div className="col-start-1 col-span-1 md:row-start-1 row-span-3 flex flex-col h-full lg:mr-16">
            {content.tag ? <Tag>{content.tag}</Tag> : null}
            <Header1 className="leading-8 !text-3xl md:!text-[2.25rem]">{title}</Header1>
            <Text className="!mb-4">{content.desc || ""}</Text>
            <div className="mb-4 text-4xl font-extrabold">{content.price}</div>

            <EnrollButton id="course-page-enroll-button" courseType={{ type: context.type, enroll: context.enroll || "" }}>
                <p className="text-inherit !mb-0" data-test="enroll-button">{lang == "lang-es" ? "Regístrate" : "Enroll Now"}</p>
            </EnrollButton>
            <BusinessButton x={context.type}/>
            { content.alert ? <Alert>{content.alert}</Alert> : null}    
            <MoneyBackGuarantee x={context.type} />
            <Features features={content.features || []} heroStory={heroStory}/>
            {content.disclaimer ? <p className="text-sm mt-4">{ content.disclaimer }</p> : null}
        </div>
        <div className="md:col-start-2 col-span-2 md:row-start-3 lg:mt-6">
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
    fh_ansi_az:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    fh_ansi_ca:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    fh_ansi_hi:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    fh_ansi_il:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    fh_ansi_nm:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
        nodes {
            name
            extension
            childImageSharp {
                gatsbyImageData
            }
            publicURL
        }
    }
    fh_ansi_tx:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
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
    medal:allFile(filter: { name: { eq: "usx_medal" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    dollar:allFile(filter: { name: { eq: "usx_dollar" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    info:allFile(filter: { name: { eq: "usx_info" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    alert:allFile(filter: { name: { eq: "usx_alert" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
}
`;