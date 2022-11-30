import { ReactNode, useState, FormEvent } from 'react';
import Image from 'components/core/Image';
import FormControl from '@mui/material/FormControl';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import MenuItem from '@mui/material/MenuItem';

import { useAppDispatch, AppActions } from 'store';
import { Text, Header5 } from 'components/core/Typography';
import Button from 'components/core/Button';
import PROVINCES, { PROVINCE } from 'data/provinces';

const PRODUCT_IDS: Partial<Record<PROVINCE | "DEFAULT", number>> = {
    DEFAULT:7,
    "Manitoba":8,
};

const PROVINCE_FIELDNAME = "area-of-operation";

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
    const [ selectedProvince, setSelectedProvince ] = useState<PROVINCE | undefined>(undefined);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    const handleProvinceChange = (event: FormEvent<HTMLSelectElement>) => {
        setSelectedProvince(event.currentTarget.value as PROVINCE);
      };

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

    const CourseTab = <div className="md:w-[600px] lg:w-[900px]" id="course-modal">
        <Tabs tabNames={["For Individuals", "For Business"]} activeTab={selectedTab} handleTabClick={setSelectedTab} />
        <div className="p-6 bg-lilac grid grid-cols-3">
            <div className="p-4 border-[1px] border-black col-span-3 md:col-span-2 flex flex-col gap-4">
                <p className="font-medium">CIFS Food Handler Certification is valid across Canada. To receive the most relevant information for your workplace, please select your province / territory below.</p>
                <label htmlFor={PROVINCE_FIELDNAME} className="font-bold">SELECT YOUR PROVINCE / TERRITORY <span className="text-red-600">*</span></label>
                <select
                className="border border-gallery rounded px-2 py-1"
                value={selectedProvince}
                onChange={handleProvinceChange}
                id={PROVINCE_FIELDNAME}>
                    <option value="">
                        <em>Select your Province / Territory</em>
                    </option>
                    { PROVINCES.map( province => {
                        return <option value={province} key={province}>{province}</option>
                    })}
                </select>

                <div className="w-full grid grid-cols-12 mb-6">
                    {/* table headers */}
                    <div className="col-span-5 flex flex-col gap-1">
                        <strong>Course:</strong>
                        <strong>Price:</strong>
                        <strong>Prerequisites:</strong>
                        <strong>Nationally Recognised:</strong>
                        <strong>Certificate Validity:</strong>
                        <strong>CIFS Membership:</strong>
                        <strong>Course Access:</strong>
                    </div>
                    {/* table cells */}
                    <div className="col-span-7 flex flex-col gap-1">
                        <p>Food Handler Certification Handler</p>
                        <p>$99.95 + GST / HST</p>
                        <p>None</p>
                        <p>Yes</p>
                        <p>5 years</p>
                        <p>12 months free (a $74.95 value)</p>
                        <p>30 days</p>
                    </div>
                    
                </div>
                <div className="w-full flex justify-end">
                    <Button id="course-modal-checkout-button" className="w-[200px] !normal-case py-3.5" disabled={!selectedProvince}>
                        Proceed to Checkout
                    </Button>
                </div>

            </div>

            <div className="col-span-3 md:col-span-1 bg-catskill flex flex-col items-center p-6 gap-2">
                <strong>Are You Enrolling Your Staff?</strong>
                <Image src="/icons/icon_stroke_people_new.svg" layout="fixed" width={75} height={75} />
                <strong>Start a Business Account</strong>
                <ul className="checklist">
                    <li>bulk enrol employees</li>
                    <li>monitor student progress</li>
                    <li>get compliance advice</li>
                    <li>receive priority support</li>
                    <li>opt for monthly invoicing</li>
                </ul>
            </div>
        </div>
    </div>;

    if(selectedTab == 0) return CourseTab;
    if(selectedTab == 1) return null;
};

export default CourseCheckoutModal;