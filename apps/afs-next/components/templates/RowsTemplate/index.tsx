import { ReactNode } from 'react';
import NextImage from 'next/image';
import { Header2, Header3, Header4 } from 'components/core/typography';
import { RowsTemplateProps } from '../types';
import { PathnameComponent, NavigationComponent } from 'components/templates';

const RowsTemplate = (props: RowsTemplateProps) => {

    return <div id={props.id} className="padded-section grid grid-cols-12 grid-flow-row bg-white px-7">
        <div className="col-span-12 flex flex-col gap-3 border-solid border-b-[1px] border-afs-green py-8 mb-4">
            <PathnameComponent {...props} />
            <Header2 className="text-afs-green font-semibold">{props.header}</Header2>
            <Header4 className="text-afs-green">{props.subheader}</Header4>
        </div>
        <div className="row-start-2 col-span-12 lg:col-span-3 flex flex-row py-8">
            <NavigationComponent {...props.navigation} />
        </div>
        <div className="row-start-3 lg:row-start-2 col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-5 mb-10">
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
            <Header3 className="text-afs-green font-semibold pb-6">{props.title}</Header3>
            <div className={`${props.className} col-span-3`}>
                { props.children }
                <NextImage src={props.imageSrc} layout="fixed" width={325} height={183}/>
            </div>
        </div>

        <div className="col-span-3 flex flex-col gap-7 lg:hidden">
            <Header3 className="text-afs-green font-semibold pb-6">{props.title}</Header3>
            <NextImage src={props.imageSrc} layout="fixed" width={325} height={183}/>
            <div className={`${props.className} col-span-3`}>
                { props.children }
            </div>
        </div>
    </>;
  };

export default RowsTemplate;
