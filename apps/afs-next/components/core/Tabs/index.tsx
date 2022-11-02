import React, { ReactNode } from 'react';
import { Text } from 'components/core/typography';

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
    return <div className={`z-10 flex flex-col items-center justify-center cursor-pointer text-teal px-4 py-3 text-center hover:border-teal ${isActive ? "bg-alabaster border-t border-x border-teal" : "bg-white border border-t-mint border-x-mint border-b-teal"}`} onClick={_handleClick}>
        {children}
    </div>;
};

export interface TabButton {
    title: string;
    code?: string;
}

export interface ITabs {
    tabNames: Array<TabButton>;
    helpText?: string;
    activeTab: number;
    handleTabClick: React.Dispatch<React.SetStateAction<number>>;
}
  
const Tabs = (props: ITabs) => {
    return <div className="w-full grid grid-flow-row">
        <div className="flex gap-1">            
            {props.tabNames.map((content, i) => {
                return <Tab index={i} onClick={props.handleTabClick} activeTab={props.activeTab} key={`${i}-tab`}> 
                    <Text className="hidden md:block uppercase !text-teal !font-semibold text-sm mb-0">{content.title}</Text>
                    <Text className="md:hidden uppercase !text-teal !font-semibold text-sm mb-0">{content.code}</Text>
                </Tab>;
            })}

        </div>
    </div>;
};

export default Tabs;
