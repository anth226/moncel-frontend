import React, { ReactNode } from 'react';
import { Header5, Text } from 'components/core/typography';

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
    const bgColor = isActive ? "white" : "afs-green";
    const textColor = isActive ? "afs-green" : "white";
    const activeBgColor = isActive ? "white" : "afs-green-light";

    return <div className={`flex flex-col items-center justify-center cursor-pointer bg-${bgColor} text-${textColor} hover:bg-${activeBgColor} active:bg-white active:text-afs-green border-white border-r-[1px]`}  onClick={_handleClick}>
        <Text className="white">Information on</Text>
        <Header5 className="white">{ children }</Header5>
    </div>;
};

export interface ITabs {
    tabNames: Array<string>;
    helpText?: string;
    activeTab: number;
    handleTabClick: React.Dispatch<React.SetStateAction<number>>;
}

const Tabs = (props: ITabs) => {
    return <div className="w-full grid grid-flow-row grid-cols-3 bg-afs-green text-white h-16">
        {/* Navbar */}
        <div className="col-span-1 border-r-[1px] border-white flex justify-start items-center">
            <Text>{ props.helpText || "Here to provide the help you need..." }</Text>
        </div>
        <div className="col-span-2 grid grid-flow-row grid-cols-3">
            {props.tabNames.map((tabname, i) => {
                return <Tab index={i} onClick={props.handleTabClick} activeTab={props.activeTab} key={`${tabname}-tab`}>{tabname}</Tab>;
            })}
        </div>
    </div>;
};

export default Tabs;
