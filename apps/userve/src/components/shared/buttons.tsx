import React from 'react';

interface PropTypes {
    children: JSX.Element | JSX.Element[];
    color?: string;
    className?: string;
}
export const ButtonTransparent = (props: PropTypes) => {
    const color = props.color || "white";
    const optionalClasses = props.className || "";
    return <div className={`text-${color} border-1 border-${color} rounded-xl py-4 px-8 ${optionalClasses}hover:bg-white hover:bg-opacity-10 mt-6 w-fit` }>
        { props.children }
    </div>;
};
