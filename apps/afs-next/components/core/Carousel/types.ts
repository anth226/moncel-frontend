import { StaticImageData } from 'next/image';

export interface CarouselProps {
    id?: string;
}

type Orientation = "left" | "right";
export interface CarouselSlideProps {
    background: StaticImageData;
    title: string;
    description: string | Array<string>;
    linkText?: string;
    link: string;
    images?: Array<string>;
    orientation: Orientation;
    colourPrimaryClass?: string;
    colourSecondaryClass?: string;
}

export interface SlideControlProps {
    active?: boolean;
    ariaLabel: string;
    [ key: string ]: unknown;
}
