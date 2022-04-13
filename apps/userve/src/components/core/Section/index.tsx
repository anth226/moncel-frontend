import React from 'react';

interface SectionPropTypes {
    children: JSX.Element | JSX.Element[];
    [key: string]: unknown;
}

export const Section = (props: SectionPropTypes) => {
    return <div className={`max-w-6xl m-auto px-4 py-20 ${props.className}`}>
        { props.children }
    </div>
};

export const SectionFullWidth = (props: SectionPropTypes) => {
    return <div className={`w-screen px-4 py-20 ${props.className}`}>
        { props.children }
    </div>
};

export default Section;
