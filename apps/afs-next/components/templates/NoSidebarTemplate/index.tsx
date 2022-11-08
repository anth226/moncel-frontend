import { ReactNode } from 'react';
import NextImage from 'next/image';
import { Header2, Header3, Text } from 'components/core/typography';
import { NoSidebarTemplateProps } from '../types';
import { PathnameComponent } from 'components/templates';

const Template = (props: NoSidebarTemplateProps) => {
    const HeaderComponent = (typeof props.header === "string") ? <Header2 className="text-teal font-semibold">{props.header}</Header2> : props.header;

    return <div id={props.id} className="padded-section grid grid-cols-12 bg-white lg:rounded-[3px] lg:border border-[#0badad33] py-8 lg:p-8 w-full">
        <div className="row-start-1 col-span-12 gap-4 border-solid border-b-[1px] border-teal pb-8 mb-8">
            <PathnameComponent {...props} />
            { HeaderComponent }
            <Text className="!text-teal text-[18px] font-medium leading-4">{props.subheader}</Text>
        </div>
        <div className="row-start-2 col-span-12">
            <div className="grid grid-cols-1 lg:grid-cols-12 grid-flow-row lg:gap-10">
                { props.children }
            </div>
        </div>
    </div>;
};

interface SectionProps {
    title: string;
    imageSrc: string;
    className?: string;
    children: ReactNode;
}
export const Section = (props: SectionProps) => {
    return <>
        <div className="col-span-3 hidden lg:block">
            <Header3 className="font-semibold pb-6">{props.title}</Header3>
            <div className={`${props.className} col-span-3`}>
                { props.children }
                <NextImage src={props.imageSrc} layout="fixed" width={325} height={183}/>
            </div>
        </div>

        <div className="col-span-3 flex flex-col gap-7 lg:hidden">
            <Header3 className="font-semibold pb-6">{props.title}</Header3>
            <NextImage src={props.imageSrc} layout="fixed" width={325} height={183}/>
            <div className={`${props.className} col-span-3`}>
                { props.children }
            </div>
        </div>
    </>;
  };

export default Template;
