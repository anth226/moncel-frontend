import React, { ReactNode } from 'react';
import { Header5 } from 'components/core/typography';
import NextImage, { StaticImageData } from 'next/image';

interface ITab {
    index: number;
    onClick: React.Dispatch<React.SetStateAction<number>>;
    children: ReactNode;
    activeTab: number;
}
const Tab = ({ children, index, onClick, activeTab }: ITab) => {
    const _handleClick = () => {
        onClick(index);
    };
    const isActive = (activeTab == index);
    return <div className={`flex flex-col items-center justify-center cursor-pointer text-teal hover:bg-haze active:bg-mint active:text-teal border-teal border p-6 text-center`}  onClick={_handleClick}>
        {children}
    </div>;
};

export interface TabButton {
    title: string;
    icon: StaticImageData;
}

export interface ITabs {
    tabNames: Array<TabButton>;
    helpText?: string;
    activeTab: number;
    handleTabClick: React.Dispatch<React.SetStateAction<number>>;
}
  
const Tabs = (props: ITabs) => {
    return <div className="w-full grid grid-flow-row">
        <div className="grid grid-flow-row grid-cols-2 md:grid-cols-4 gap-6">            
            {props.tabNames.map((content, i) => {
                return <Tab index={i} onClick={props.handleTabClick} activeTab={props.activeTab} key={`${i}-tab`}> 
                    <Header5 className="text-[18px] font-semibold mb-4">{content.title}</Header5>
                    <NextImage src={content.icon} width={75} height={75} />
                </Tab>;
            })}

        </div>
    </div>;
};

export default Tabs;
