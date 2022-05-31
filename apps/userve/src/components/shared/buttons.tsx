import React from 'react';

interface PropTypes {
    children: JSX.Element | JSX.Element[] | string;
    color?: string;
    className?: string;
    onClick?: (event: React.MouseEvent) => unknown;
}
export const ButtonTransparent = (props: PropTypes) => {
    const color = props.color || "white";
    const optionalClasses = props.className || "";
    return <div className={`text-${color} border-1 border-${color} rounded-xl py-4 px-8 cursor-pointer ${optionalClasses}hover:bg-white hover:bg-opacity-10 mt-6 w-fit` } onClick={props.onClick}>
        { props.children }
    </div>;
};
