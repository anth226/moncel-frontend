import React from 'react';

interface SectionPropTypes {
    children: JSX.Element | JSX.Element[];
    [key: string]: unknown;
}

export const Section = (props: SectionPropTypes) => {
    return <div className={`max-w-6xl m-auto py-20 ${props.className}`}>
        { props.children }
    </div>
};

export const SectionFullWidth = (props: SectionPropTypes) => {
    return <div className={`w-screen py-20 ${props.className}`}>
        { props.children }
    </div>
};

export default Section;
