import { ReactNode, useState, } from 'react';

import { useAppDispatch, AppActions } from 'store';
import { Text, Header5 } from 'components/core/Typography';
import PROVINCES, { PROVINCE } from 'data/provinces';

const PRODUCT_IDS: Partial<Record<PROVINCE | "DEFAULT", number>> = {
    DEFAULT:7,
    "Manitoba":8,
};

interface ITab {
    index: number;
    onClick: React.Dispatch<React.SetStateAction<number>>;
    children: ReactNode;
    activeTab: number;
    tabCount: number;
}
const Tab = ({ children, index, onClick, activeTab, tabCount }: ITab) => {
    const _handleClick = () => {
        onClick(index);
    };

    const isActive = (activeTab == index);
    const bgColor = isActive ? "white" : "monza";
    const textColor = isActive ? "text-monza" : "text-white";
    const activeBgColor = isActive ? "white" : "afs-green-light";
    let shadowClass = "";

    if(!isActive){
        // first
        if(index == 0) shadowClass = "shadow-[-15px_0_15px_-15px_inset_rgb(0,0,0)]";
        // last
        else if(index == tabCount - 1) shadowClass = "shadow-[15px_0_15px_-15px_inset_rgb(0,0,0)]";
        else {
            shadowClass = "before:shadow-lg after:shadow-lg";
        }
    }

    return <div className={`flex flex-col items-center justify-center cursor-pointer py-2 px-6 ${textColor} bg-${bgColor} hover:bg-${activeBgColor} active:bg-white active:text-monza  ${shadowClass}`}  onClick={_handleClick}>
        <Header5 className="leading-4 font-semibold">{ children }</Header5>
    </div>;
};

interface ITabs {
    tabNames: Array<string>;
    helpText?: string;
    activeTab: number;
    handleTabClick: React.Dispatch<React.SetStateAction<number>>;
}

const Tabs = (props: ITabs) => {
    return <div className="w-full grid grid-flow-row bg-monza text-white h-16 padded-section">
        <div className="col-span-2 grid grid-flow-row grid-cols-3">
            {props.tabNames.map((tabname, i, tabNames) => {
                return <Tab index={i} onClick={props.handleTabClick} activeTab={props.activeTab} key={`${tabname}-tab`} tabCount={tabNames.length}>{tabname}</Tab>;
            })}
        </div>
    </div>;
};

const CourseCheckoutModal = () => {
    const [ selectedTab, setSelectedTab ] = useState<number>(0);
    const [selectedProvince, setSelectedProvince] = useState<PROVINCE | null>(null);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const closeModal = () => {
        dispatch(toggleModal(null));
    }

    const checkout = () => {
        let productId = PRODUCT_IDS.DEFAULT;
        if(!selectedProvince) throw Error("No province selected");
        if(selectedProvince && selectedProvince in PRODUCT_IDS){
            productId = PRODUCT_IDS[selectedProvince];
        }

        if(window) {
            window.open(`https://my.foodsafety.ca/urlcheckout/add?product=8&qty=${productId}`);
        }
    }

    const submitBusinessEnquiry = () => {
    }

    return <div>
        <Tabs tabNames={["For Individuals", "For Business"]} activeTab={selectedTab} handleTabClick={setSelectedTab} />
    </div>
};

export default CourseCheckoutModal;