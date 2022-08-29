import { ReactNode } from "react";

export interface NavigationProps {
    title: string;
    links: Array<{ text: string, href: string }>,
}

export interface GridTemplateCard {
    title: string;
    description: string;
    imageSrc: string;
    buttonText?: string;
    href: string;
}

export interface GridTemplateProps {
    id: string;
    pathname: string, // pathname as it appears in the URL bar
    displayPathname: string, // '/' separated pathnames for display on page
    navigation: NavigationProps,
    header: ReactNode,
    subheader: string,
    description: string,
    rows?: number,
    cols?: number,
    cards: Array<GridTemplateCard>
}

export interface RowsTemplateProps {
    id: string;
    pathname: string, // pathname as it appears in the URL bar
    displayPathname: string, // '/' separated pathnames for display on page
    navigation: NavigationProps,
    header: ReactNode,
    subheader: string,
    children: ReactNode,
}
