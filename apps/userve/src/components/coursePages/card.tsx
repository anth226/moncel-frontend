import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { useAppDispatch, AppActions } from 'src/store';
import { courseLang } from 'src/lib/courseLang';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';
import CardButton from 'src/components/coursePages/button';
import { LocalFileSource } from 'src/lib';

import "./card.scss";

const FALLBACK_IMAGE_HOST = "https://www.userve.com/hs-fs";
// Course Data from json to be supplemented with data from storyblok
interface ReactProps {
    className?: string;
    isAvailable?: boolean;
    tag?: string | null;
    showButton?: boolean;
    storyblokDefaultImg?: string; // if datasource is courses.json 
}

const Card = (props: (CourseData | CourseCardStoryblok) & ReactProps & StoryblokStoryProps) => {
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    let url, title, desc, image, type, courseTitle, tag, fileNode, productCategoryLabel;
    const lang = courseLang(props.type);

    if ("component" in props) {
        // Component has been passed a CourseCardStoryblok as props
        url = props.link;
        title = props.title;
        desc = props.description;
        image = props.image?.filename;
        type = props.type;
        tag = props.tag;
        fileNode = findMatchingLocalFileNode(getFilename(image || ""), props.story)
    }
    else {
        // Component has been passed CourseData from json
        url = props.url;
        title = props.title;
        desc = props.desc;
        type = props.type;
        image = `${FALLBACK_IMAGE_HOST}${props.image}`;
        tag = props.tag;
        productCategoryLabel = props.productCategoryLabel;
    }

    if (lang == "lang-es") {
        courseTitle = title
    } else {
        if (props.state == undefined) {
            courseTitle = title;
        } else {
            courseTitle = props.state + " " + title;
        }
    }

    const showNotifyModal = () => {
        dispatch(toggleModal({ modalName: "courseNotifyModal", modalProps: { state: props.state, title: props.title } }));
    }

    const imageData = useStaticQuery(imageQuery);
    let defaultGraphicFileNode: LocalFileSource | undefined;

    if (props.type) {
        defaultGraphicFileNode = imageData[props.type].nodes[0];
    }

    let imageComp;

    if (fileNode) {
        imageComp = <DynamicImage fileNode={fileNode} alt={`${title} course preview image`} imgStyle={{ borderTopRightRadius: '.5rem', borderTopLeftRadius: '.5rem' }} />
    } else if (defaultGraphicFileNode) {
        imageComp = <DynamicImage fileNode={defaultGraphicFileNode} alt={`${title}`} imgStyle={{ borderTopRightRadius: '.5rem', borderTopLeftRadius: '.5rem' }} />
    } else {
        imageComp = null;
    }

    let language;
    if (lang == "lang-en") {
        language = "English"
    } else {
        language = "Spanish"
    }
    return <div className={`font-sans card flex flex-col rounded-xl overflow-hidden bg-white shadow-xl ${props.className}`} data-test={`course-card-${encodeURIComponent(courseTitle || "")}`}>
        <div>
            <div className={props.state ? `card-image ${tag == "coming-soon" ? "coming-soon" : "available"}` : "card-image"}>
                {tag == "coming-soon" ? <a className="cursor-pointer" onClick={showNotifyModal}>{imageComp}</a> : <a className="cursor-pointer" href={url}>{imageComp}</a>}
            </div>

            <div className="card-body">
                {props.state ? <div>
                    <div className="flex flex-row">
                        {/* product category */}
                        {productCategoryLabel ? <div className="mr-3 text-xs bg-cornflower text-white mb-4 px-2 py-1 rounded w-fit">{productCategoryLabel}</div> : null}
                        {/* language */}
                        {lang ? <div className="text-xs bg-gallery text-bluewood mb-4 px-2 py-1 rounded w-fit">{language}</div> : null}
                    </div>
                </div> : null}

                {tag == "coming-soon" ? <a className="text-bluewood text-lg font-semibold leading-4 cursor-pointer hover:underline" onClick={showNotifyModal}>{courseTitle}</a> : <a className="text-bluewood text-lg font-semibold leading-4 cursor-pointer hover:underline" href={url}>{courseTitle}</a>}
                <p className="text-lynch mt-4">{desc}</p>
            </div>
        </div>
        {props.showButton ?
            <div className="card-button">
                <CardButton lang={lang} tag={tag || ""} url={url || ""} modalProps={{state: props.state, title: props.title }}/>
            </div> : null
        }
    </div>
};

export default Card;

const imageQuery = graphql`
    query {
        fm:allFile(filter: { name: { eq: "usx_fm_ge_hero" } }) {
            nodes {
                name
                extension
                childImageSharp {
                    gatsbyImageData
                }
                publicURL
            }
        }
        fh:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
            nodes {
                name
                extension
                childImageSharp {
                    gatsbyImageData
                }
                publicURL
            }
        }
        fh_ansi:allFile(filter: { name: { eq: "usx_fh_ge_hero" } }) {
            nodes {
                name
                extension
                childImageSharp {
                    gatsbyImageData
                }
                publicURL
            }
        }
        al:allFile(filter: { name: { eq: "usx_al_ge_hero" } }) {
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