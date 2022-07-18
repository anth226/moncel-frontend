import React from 'react';
interface PropTypes {
    className?:string;
    children: JSX.Element | JSX.Element[] | string;
}

export const genHighlightMarkup = (s: string, highlights: string[]) => {
    const highlightClass = "text-inherit text-dodger"; // todo make opt

    const result = highlights.reduce((result, highlight) => {
        const pattern = new RegExp(highlight, 'ig');
        return result.replace(pattern, (match) => `<span class="${highlightClass}">${match}</span>`);
    }, s);

    return { __html: `<h2 class="text-4xl font-bold mb-6 text-bluewood">${result}</h2>` };
};

export const Header1 = (props: PropTypes) => {
    return <h1 className={`text-4xl lg:text-5xl font-bold mb-6 text-bluewood ${props.className || ""}`}>{props.children}</h1>
}

export const Header2 = (props: PropTypes) => {
    return <h2 className={`text-2xl md:text-3xl lg:text-4xl font-bold mb-6 text-bluewood ${props.className || ""}`}>{props.children}</h2>
}

export const Header3 = (props: PropTypes) => {
    return <h3 className={`text-2xl md:text-2xl lg:text-3xl font-bold mb-6 text-bluewood ${props.className || ""}`}>{props.children}</h3>
}

export const Header4 = (props: PropTypes) => {
    return <h4 className={`text-2xl font-bold mb-6 text-bluewood ${props.className || ""}`}>{props.children}</h4>
}

export const Header5 = (props: PropTypes) => {
    return <h5 className={`text-md font-semibold mb-4 text-bluewood leading-6 ${props.className || ""}`}>{props.children}</h5>
}

export const SubText = (props: PropTypes) => {
    return <p className={`text-md text-lynch ${props.className || ""}`}>{props.children}</p>
}

export const Text = (props: PropTypes) => {
    return <p className={`text-md text-lynch mb-6 ${props.className || ""}`}>{props.children}</p>
}
