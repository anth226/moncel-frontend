import React from 'react';
interface PropTypes {
    className?:string;
    children: JSX.Element | JSX.Element[] | string;
}

export const genHighlightMarkup = (s: string, highlights: string[]) => {
    const highlightClass = "text-inherit text-indigo-600"; // todo make opt

    const result = highlights.reduce((result, highlight) => {
        const pattern = new RegExp(highlight, 'ig');
        return result.replace(pattern, (match) => `<span class="${highlightClass}">${match}</span>`);
    }, s);

    return { __html: `<h1 class="text-inherit">${result}</h1>` };
};

export const Header1 = (props: PropTypes) => {
    return <h1 className={`text-5xl text-slate-800 font-extrabold ${props.className || ""}`}>{props.children}</h1>
}

export const Header2 = (props: PropTypes) => {
    return <h1 className={`text-4xl text-slate-800 font-extrabold ${props.className || ""}`}>{props.children}</h1>
}
