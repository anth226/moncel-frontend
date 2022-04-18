import React from 'react';
interface PropTypes {
    className?:string;
    children: JSX.Element | JSX.Element[] | string;
}
export const Header1 = (props: PropTypes) => {
    return <h1 className={`text-5xl text-slate-800 font-extrabold ${props.className || ""}`}>{props.children}</h1>
}

export const Header2 = (props: PropTypes) => {
    return <h1 className={`text-4xl text-slate-800 font-extrabold ${props.className || ""}`}>{props.children}</h1>
}