import React from 'react';
import { Link } from 'gatsby';

import { CourseCardStoryblok } from 'src/storyblok-component-types';


interface ReactProps {
    className?: string;
    isAvailable?: boolean;
}

const Card = (props: CourseCardStoryblok & ReactProps) => {
    const { link, title, description, image } = props;
    return <div className={`flex flex-col rounded-2xl overflow-hidden bg-slate-100 ${props.className}`}>
        <Link to={link || ""}>
            <img src={image?.filename} alt={`${title}-course-image`} />
        </Link>
        <div className="p-6">
            <Link className="text-slate-900 text-3xl text-extrabold" to={link || ""}>{title || ""}</Link>
            <p className="text-slate-500 text-lg my-4">{description}</p>
        </div>

    </div>
};

export default Card;