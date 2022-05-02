import React from 'react';
import { Link } from 'gatsby';

import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';

const FALLBACK_IMAGE_HOST = "https://www.userve.com/hs-fs";
// Course Data from json to be supplemented with data from storyblok
interface ReactProps {
    className?: string;
    isAvailable?: boolean;
    tag?: string;
    storyblokDefaultImg?: string; // if datasource is courses.json 
}

const Card = (props: (CourseData | CourseCardStoryblok) & ReactProps) => {
    // const { url, title, desc, image } = props;
    let url, title, desc, image, tag;

    console.log(props)
    if("component" in props) {
        // Component has been passed a CourseCardStoryblok as props
        url = props.link;
        title = props.title;
        desc = props.description;
        tag = props.tag;
        image = props.image?.filename;
    }
    else {
        // Component has been passed CourseData from json
        url = props.url;
        title = props.title;
        desc = props.desc;
        tag = props.tag;
        image = `${FALLBACK_IMAGE_HOST}${props.image}`;
    }
    return <div className={`card flex flex-col rounded-2xl overflow-hidden bg-white drop-shadow-xl ${props.className}`}>
        
        <div className={`card-image z-0 relative hover:md:transform-none ${tag == "coming-soon" ? "coming-soon" : ""}`}>
            <Link className="cursor-pointer" to={url || ""}>
                <img src={image} alt={`${title}-course-image`} />
            </Link>
        </div>
        <div className="card-body z-10 p-6 bg-white relative hover:md:transform-none">
            <Link className="text-bluewood text-lg font-semibold cursor-pointer" to={url || ""}>{title || ""}</Link>
            <p className="text-lynch mt-4">{desc}</p>
        </div>
        <div className="card-button z-20 px-6 pb-6 absolute w-full bg-white">
            <Link to={url || ""}><button className="btn btn-primary w-full cursor-pointer">Learn More</button></Link>
        </div>

    </div>
};

export default Card;
