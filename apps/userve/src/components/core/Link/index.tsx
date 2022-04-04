import React from 'react';
import { Link as GatsbyLink } from "gatsby";

interface LinkProps {
    to: string;
    children?: JSX.Element | JSX.Element[] | string;
}

const Link = (props: LinkProps) => {
    return <div className="flex text-inherit">
        <GatsbyLink to={props.to}>{props.children}</GatsbyLink>
    </div>
}

export default Link;