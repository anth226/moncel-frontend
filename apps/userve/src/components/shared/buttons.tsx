import React from 'react';

interface PropTypes {
    children: JSX.Element | JSX.Element[] | string;
    className?: string;
    onClick?: (event: React.MouseEvent) => unknown;
}
export const ButtonTransparent = (props: PropTypes) => {
    const optionalClasses = props.className || "";

    return <div className={`text-center font-medium border-1 rounded-lg py-4 px-8 hover:bg-opacity-10 transition-all cursor-pointer ${optionalClasses}` } onClick={props.onClick}>
        { props.children }
    </div>;
};
