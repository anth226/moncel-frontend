import { useState } from 'react';
import Tabs from 'components/core/Tabs';
import { Header4, Text } from 'components/core/typography';
import { Section } from 'components/core/Section';
import { FoodSafetyCoursesTab, LawsAndRequirementsTab, AIFSMembershipTab } from './HelpTabs';

const GAP = "gap-4";
const VERTICAL_PAD = "py-11";
const tabnames = ["Food Safety Courses", "Laws & Requirements", "AIFS Membership"];

const HelpSection = () => {
    const [ activeTab, setActiveTab ] = useState(0);
    return <>
        <Section className="hidden md:block bg-afs-green">
            <Tabs tabNames={tabnames} activeTab={activeTab} handleTabClick={setActiveTab} />
        </Section>
        <Section className="px-4">
            <div className="bg-white grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-8 w-full">
                {/* Static fixed section */}
                <div className={`col-span-1 flex flex-col ${GAP} ${VERTICAL_PAD}`}>
                    <Header4 className={`text-afs-green pb-4 border-b-[1px] border-b-afs-green w-full`}>The Australian Institute of Food Safety</Header4>

                    <Text>{"AIFS is Australia's leading provider of food safety education and training."}</Text>

                    <Text>Each year we help thousands of Australian organisations protect their customers and maintain food safety compliance.</Text>

                    <Text>As a Not for Profit Organisation dedicated to the promotion of better food safety practices within Australia, the Australian Institute of Food Safety Foundation has a mandate to educate the public.</Text>

                    <Text>In addition to training, the AIFS Foundation helps to inform and educate the food industry and general public on the benefits of sound food safety practices.</Text>

                </div>

                {/* Dynamic section displays selected tab */}
                <div className={`col-span-2 flex flex-col ${GAP} ${VERTICAL_PAD}`}>
                    { (activeTab === 0) ? <FoodSafetyCoursesTab /> : null }

                    { (activeTab === 1) ? <LawsAndRequirementsTab /> : null }

                    { (activeTab === 2) ? <AIFSMembershipTab /> : null }
                </div>
            </div>
        </Section>
    </>;
};

export default HelpSection;
