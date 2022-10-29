import { ReactNode } from 'react';
import NextImage, { StaticImageData }  from 'next/image';
import { Header1, Header3, Text } from 'components/core/typography';
import { RowsTemplateProps } from '../types';
import { PathnameComponent, NavigationComponent, CheckoutSidebarComponent } from 'components/templates';
import GlobalModal from 'components/core/Modal';

const RowsTemplate = (props: RowsTemplateProps) => {
    let SidebarComponent = null;
    if(!props.sidebarType || props.sidebarType === "navigation") {
        if(!props.navigation) {
            throw Error(`RowsTemplate with id ${props.id} specified navbar but did not provide required props`);
            return null; // unreachable return make typescript happy
        }
        SidebarComponent = <NavigationComponent {...props.navigation} />;
    }
    if(props.sidebarType === "checkout") {
        if(!props.checkout) {
            throw Error(`RowsTemplate with id ${props.id} specified checkout but did not provide required props`);
            return null; // unreachable return make typescript happy
        }
        SidebarComponent = <CheckoutSidebarComponent {...props.checkout} />;
    }

    const HeaderComponent = (typeof props.header === "string") ? <Header1 className="text-teal mb-2">{props.header}</Header1> : props.header;

    return <div id={props.id} className="padded-section grid grid-cols-12 bg-white lg:rounded-[3px] lg:border border-[#0badad33] py-8 lg:p-8 w-full">
        <div className="row-start-1 col-span-12 gap-4 border-solid border-b-[1px] border-teal pb-8 mb-8">
            <PathnameComponent {...props} />
            { HeaderComponent }
            { props.subheader ? <Text className="!text-teal text-[18px] font-medium leading-4 mt-2">{props.subheader}</Text> : null }
        </div>
        <div className="row-start-2 col-span-12 lg:col-span-3 flex flex-row lg:mr-8">
            { SidebarComponent }
        </div>
        <div className="row-start-3 lg:row-start-2 col-span-12 lg:col-span-9">
            <div className="grid grid-cols-1 lg:grid-cols-3 grid-flow-row gap-8">
                { props.children }
            </div>
        </div>
        <GlobalModal />
    </div>;
};

interface SectionProps {
    title: string;
    imageSrc: string | StaticImageData;
    className?: string;
    children: ReactNode;
}
export const Section = (props: SectionProps) => {
    return <>
        <div className="col-span-3 hidden lg:grid grid-cols-12 gap-3">
            <Header3 className="font-semibold col-span-12">{props.title}</Header3>
            <div className={`${props.className} col-span-7`}>
                { props.children }
            </div>
            <div className="col-span-5">
                <NextImage src={props.imageSrc} />
            </div>
        </div>

        <div className="col-span-3 flex flex-col gap-7 lg:hidden">
            <Header3 className="font-semibold">{props.title}</Header3>
            <NextImage src={props.imageSrc} />
            <div className={`${props.className} col-span-3`}>
                { props.children }
            </div>
        </div>
    </>;
  };

export default RowsTemplate;
