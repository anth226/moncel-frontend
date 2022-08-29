import React from 'react';
import NextLink from 'next/link';

interface LinkProps {
    href: string;
    children?: React.ReactNode;
    [key: string]: unknown;
}

const isInternalLink = (s: string) => {
    return !!s.match(/^\/\w+/);
};

const Link = ({ href, children, ...rest }: LinkProps) => {
    if(isInternalLink(href)) {
        return <NextLink href={href} {...rest} passHref>{children}</NextLink>;
    }
    return <ExternalLink href={href} {...rest}>{children}</ExternalLink>;
};

const ExternalLink = ({ href, children, ...rest }: LinkProps) => {
    return <a href={href} {...rest}>{ children }</a>;
};

export default Link;
