import { ReactNode } from "react";
import { LinkType } from "types";
import { Courses } from "data/courses";

export interface NavigationProps {
    title: string;
    links: Array<{ text: string, href: string }>,
}

export interface CheckoutSidebarComponentProps {
    courseTitle?: string;
    price: string;
    memberPrice?: string;
    links: Array<LinkType>;
    course: Courses;
    showLogo: boolean;
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

export type NoSidebarTemplateProps = {
    id: string;
    pathname: string, // pathname as it appears in the URL bar
    displayPathname: string, // '/' separated pathnames for display on page
    header: ReactNode,
    subheader?: string,
    children: ReactNode,
}

export type RowsTemplateProps = NoSidebarTemplateProps & {
    sidebarType?: "checkout" | "navigation" | undefined; // should be a way to intersect this
    navigation?: NavigationProps;
    checkout?: CheckoutSidebarComponentProps;
}
