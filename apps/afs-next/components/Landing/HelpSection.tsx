import { useState } from 'react';
import Tabs from 'components/core/HomeTabs';
import { Header2, Text } from 'components/core/typography';
import { Section } from 'components/core/Section';
import { FoodSafetyCoursesTab, LawsAndRequirementsTab, AIFSMembershipTab } from './HelpTabs';
import NextImage from 'next/image';

const GAP = "";
const VERTICAL_PAD = "";
const tabnames = ["Food Safety Courses", "Laws & Requirements", "AIFS Membership"];

const HelpSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    return <>
        <Section className="hidden md:block bg-teal p-0">
            <Tabs tabNames={tabnames} activeTab={activeTab} handleTabClick={setActiveTab} />
        </Section>
        <Section className="section-vertical-padding">
            <div className="padded-section bg-white grid grid-cols-1 md:grid-cols-3 grid-flow-row md:gap-8 w-full ">
                {/* Static fixed section */}
                <div className={`col-span-1 mb-8 md:mb-0 `}>
                    <Header2 className={`text-teal pb-4 border-b-[1px] border-b-teal w-full !text-xl mb-4`}>The Australian Institute of Food Safety</Header2>
                    <div className="float-right ml-4">
                        <NextImage src="/afs-logo-vertical-stack-green.svg" width="45" height="62" layout="fixed" />
                    </div>
                    <Text>{"AIFS is Australia's leading provider of food safety education and training."}</Text>
                    <Text>Each year we help thousands of Australian organisations protect their customers and maintain food safety compliance.</Text>
                    <Text>As a Not for Profit Organisation dedicated to the promotion of better food safety practices within Australia, the Australian Institute of Food Safety Foundation has a mandate to educate the public.</Text>
                    <Text>In addition to training, the AIFS Foundation helps to inform and educate the food industry and general public on the benefits of sound food safety practices.</Text>
                </div>

                {/* Dynamic section displays selected tab */}
                <div className={`col-span-2 flex flex-col ${GAP} ${VERTICAL_PAD}`}>
                    {(activeTab === 0) ? <FoodSafetyCoursesTab /> : null}

                    {(activeTab === 1) ? <LawsAndRequirementsTab /> : null}

                    {(activeTab === 2) ? <AIFSMembershipTab /> : null}
                </div>
            </div>
        </Section>
    </>;
};

export default HelpSection;
