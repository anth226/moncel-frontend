import React from 'react';

interface PropTypes {
    children: JSX.Element | JSX.Element[];
    color?: string;
    className?: string;
}
export const ButtonTransparent = (props: PropTypes) => {
    const color = props.color || "white";
    const optionalClasses = props.className || "";
    return <span className={`text-${color} border-2 border-${color} rounded-xl py-4 px-8 ${optionalClasses}` }>
        { props.children }
    </span>;
};
