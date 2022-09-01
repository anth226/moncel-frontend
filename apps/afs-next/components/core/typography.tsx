import { ReactNode } from 'react';
interface PropTypes {
    className?:string;
    children: ReactNode;
}

export const Header1 = (props: PropTypes) => {
    return <span className="text-4xl md:text-5xl font-bold"><h1 className={props.className}>{props.children}</h1></span>;
};

export const Header2 = (props: PropTypes) => {
    return <span className="text-2xl md:text-3xl lg:text-4xl font-bold"><h2 className={props.className}>{props.children}</h2></span>;
};

export const Header3 = (props: PropTypes) => {
    return <span className="text-2xl md:text-2xl lg:text-3xl font-bold"><h3 className={props.className}>{props.children}</h3></span>;
};

export const Header4 = (props: PropTypes) => {
    return <span className="text-xl font-bold"><h4 className={props.className}>{props.children}</h4></span>;
};

export const Header5 = (props: PropTypes) => {
    return <span className="text-lg font-semibold leading-6"><h5 className={props.className}>{props.children}</h5></span>;
};

export const SubText = (props: PropTypes) => {
    return <span className="text-md text-lynch"><p className={props.className}>{props.children}</p></span>;
};

export const Text = (props: PropTypes) => {
    return <span className="text-md"><p className={props.className}>{props.children}</p></span>;
};

export const P = Text;

export const Link = (props: PropTypes) => {
    return <span className="link text-afs-green hover:underline text-md"><a className={props.className}>{props.children}</a></span>;
};

export const A = Link;
