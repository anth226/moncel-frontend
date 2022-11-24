import { ReactNode, HTMLAttributes } from 'react';
interface PropType extends HTMLAttributes<HTMLElement> {
    className?:string;
    children: ReactNode;
}

interface LinkType extends HTMLAttributes<HTMLAnchorElement> {
    className?:string;
    children: ReactNode;
    href?: string;
    target?: string;
}

export const Header1 = (props: PropType) => {
    return <span className="text-[30px] lg:text-[36px] font-medium leading-8 font-serif"><h1 className={props.className || ""}>{props.children}</h1></span>;
};

export const Header2 = (props: PropType) => {
    return <span className="text-2xl md:text-2xl lg:text-3xl font-semibold leading-6 lg:leading-4 font-serif"><h2 className={props.className}>{props.children}</h2></span>;
};

export const Header3 = (props: PropType) => {
    return <span className={`inline-block text-2xl md:text-[26px] font-medium leading-6 lg:leading-4 mb-2 text-mine ${props.className}`}><h3>{props.children}</h3></span>;
};

export const Header4 = (props: PropType) => {
    return <span className="text-xl font-medium leading-6 lg:leading-4"><h4 className={props.className}>{props.children}</h4></span>;
};

export const Header5 = (props: PropType) => {
    return <span className="text-base lg:text-lg leading-6 lg:leading-4"><h5 className={props.className}>{props.children}</h5></span>;
};

export const SubText = (props: PropType) => {
    return <span className="text-md text-lynch"><p className={props.className}>{props.children}</p></span>;
};

export const Text = (props: PropType) => {
    return <span className={`block text-md text-mine mb-4 last:mb-0 leading-6 ${props.className || ""}`}>{props.children}</span>;
};

export const TextBlock = (props: PropType) => {
    return <span className={`block text-md text-mine mb-4 last:mb-0 leading-6 whitespace-pre-wrap ${props.className || ""}`}>{props.children}</span>;
};

export const Blockquote = (props: PropType) => {
    return <span className={`block text-xl italic text-mine font-light my-6 leading-7 border-l-6 pl-6 py-2 ${props.className || ""}`}><p>{`‘`}{props.children}{`’`}</p></span>;
};

export const P = Text;

export const Link = (props: LinkType) => {
    const { className, href, children, ...rest } = props;
    return <a className={`underline hover:no-underline hover:cursor-pointer ${className || ""}`} href={href} {...rest}>{children}</a>;
};

export const A = Link;
