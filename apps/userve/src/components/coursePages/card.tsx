import React from 'react';
import { Link } from 'gatsby';

import { courseLang } from 'src/lib/courseLang';
import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';
import CardButton from 'src/components/coursePages/button';

const FALLBACK_IMAGE_HOST = "https://www.userve.com/hs-fs";
// Course Data from json to be supplemented with data from storyblok
interface ReactProps {
    className?: string;
    isAvailable?: boolean;
    tag?: string | null;
    storyblokDefaultImg?: string; // if datasource is courses.json 
}

const Card = (props: (CourseData | CourseCardStoryblok) & ReactProps) => {
    // const { url, title, desc, image } = props;
    let url, title, desc, image, type, courseTitle, tag;
    const lang = courseLang(props.type);

    if ("component" in props) {
        // Component has been passed a CourseCardStoryblok as props
        url = props.link;
        title = props.title;
        desc = props.description;
        image = props.image?.filename;
        type = props.type;
        tag = props.tag;
    }
    else {
        // Component has been passed CourseData from json
        url = props.url;
        title = props.title;
        desc = props.desc;
        type = props.type;
        image = `${FALLBACK_IMAGE_HOST}${props.image}`;
        tag = props.tag;
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

    return <div className={`card flex flex-col rounded-2xl overflow-hidden bg-white drop-shadow-xl ${props.className}`} data-test={`course-card-${encodeURIComponent(courseTitle || "")}`}>
        <div>
            <div className={`card-image ${tag == "coming-soon" ? "coming-soon" : ""}`}>
                { tag == "coming-soon" ? <a className="cursor-pointer" data-bs-toggle="modal" data-bs-target={url}><img src={image} alt={`${title}`} /></a> : <a className="cursor-pointer" href={url}><img src={image} alt={`${title}`} /></a>}
            </div>
            <div className="card-body">
                { tag == "coming-soon" ? <a className="text-bluewood text-lg font-semibold cursor-pointer" data-bs-toggle="modal" data-bs-target={url}>{courseTitle}</a> : <a className="text-bluewood text-lg font-semibold cursor-pointer" href={url}>{courseTitle}</a>}
                <p className="text-lynch mt-4">{desc}</p>
            </div>
        </div>
        <div className="card-button">
            <CardButton lang={lang} tag={tag || ""} url={url || ""}/>
        </div>
    </div>
};

export default Card;
