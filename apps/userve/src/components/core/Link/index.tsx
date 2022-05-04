import React from 'react';
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
    to: string;
    children?: JSX.Element | JSX.Element[] | string;
    className?: string
}

const Link = (props: LinkProps) => {
    return <div className={`flex text-inherit ${props.className}`}>
        <GatsbyLink to={props.to} className={props.className}>{props.children}</GatsbyLink>
    </div>
}

export const ExternalLink = (props: LinkProps) => {
    return <div className="flex text-inherit">
        <a href={props.to}>{props.children}</a>
    </div>
}

export default Link;
