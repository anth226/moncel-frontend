import React from 'react';
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
    to: string;
    children?: JSX.Element | JSX.Element[] | string;
    className?: string;
    target?: string;
    onClick?: () => unknown;
}

const isInternalLink = (s: string) => {
    return !!s.match(/^\/\w+/);
}

const Link = (props: LinkProps) => {
    if(isInternalLink(props.to)) {
        return <div className={`flex text-inherit`}>
            <GatsbyLink to={props.to} className={props.className} onClick={props.onClick}>{props.children}</GatsbyLink>
        </div>;
    }
    else {
        return <ExternalLink {...props} />
    }
}

export const ExternalLink = (props: LinkProps) => {
    return <div className={`flex text-inherit`}>
        <a href={props.to} className={props.className} target={props.target} onClick={props.onClick}>{props.children}</a>
    </div>
}

export default Link;
