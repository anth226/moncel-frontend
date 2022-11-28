import { ReactNode } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { Header3 } from 'components/core/Typography';

interface IconCardProps {
    imageSrc: string;
    href?: string;
    title: string;
    children: ReactNode;
    className?: string;
};

const IconCard = (props: IconCardProps) => {
    const iconComp = <NextImage src={props.imageSrc} alt={`for-job-seekers-icon-${props.title}`} width={32} height={32} layout="fixed" />;
    return <div className={`flex flex-row ${props.className || ""}`}>
        <div className="mr-4">
            {props.href ? <NextLink href={props.href}>{iconComp}</NextLink> : iconComp}
        </div>
        <div className="flex flex-col">
            <Header3 className="!text-base !mb-2 !text-mine !font-semibold">{props.title}</Header3>
            {props.children}
        </div>
    </div>;
};

export default IconCard;
