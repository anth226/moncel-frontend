import React from 'react';

interface SectionPropTypes {
    children: JSX.Element | JSX.Element[];
    id?:string;
    [key: string]: unknown;
}

export const Section = (props: SectionPropTypes) => {
    return <div id={props.id} className={`section max-w-full xl:max-w-6xl m-auto py-12 lg:py-20 ${props.className}`}>
        { props.children }
    </div>
};

export const SectionFullWidth = (props: SectionPropTypes) => {
    return <div id={props.id} className={`w-full ${props.className}`}>
        { props.children }
    </div>
};

export default Section;
