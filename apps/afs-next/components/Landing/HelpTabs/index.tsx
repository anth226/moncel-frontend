
import { ReactNode } from 'react';
import Link from 'next/link';

import HelpSectionTabNavigationMenuData from './HelpSectionTabNavigationData';
import FoodSafetyCoursesMd from './FoodSafetyCourses.mdx';
import AIFSMembershipMd from './AIFSMembership.mdx';
import LawsRequirementsMd from './LawsRequirements.mdx';
import styles from './HelpSection.module.scss';

interface NavMenuProps {
    title: string;
    links: Array<{ text: string, href: string }>;
    tabname: string;
    className?: string;
}

const NavMenu = (props: NavMenuProps) => {
    return <div className="flex flex-col row-start-2 col-span-12 md:col-span-5">
        <p className={`text-emperor first:pt-0 py-3 border-b-[1px] border-mystic font-medium`}>{props.title}</p>
        { props.links.map((link, i) => {
            return <Link href={link.href} key={`help-section-${props.tabname}-link-${i}`}><a className="text-md text-teal py-3 border-b-[1px] border-mystic no-underline hover:underline leading-4 arrowlist">{link.text}</a></Link>;
        } )}
    </div>;
};

interface DynamicTabProps {
    children: ReactNode;
}

const DynamicTab = (props: DynamicTabProps) => {
    return <div className="grid grid-flow-row grid-cols-12 gap-y-1 gap-x-8">{ props.children }</div>;
};

export const FoodSafetyCoursesTab = () => {
    const { title, tabname, links} = HelpSectionTabNavigationMenuData["Food Safety Courses"];
    return <DynamicTab>
        <h2 className="col-span-12 row-start-1 text-xl font-semibold text-teal pb-4 border-b-[1px] border-b-teal w-full mb-4">Nationally Recognised Training</h2>
        <NavMenu 
            title={title}
            tabname={tabname}
            links={links} />
        <div className={`${styles["markdown-container"]} md:row-start-2 col-span-12 mt-7 md:mt-0 md:col-span-7 checklist`}>
            <FoodSafetyCoursesMd />
        </div>
    </DynamicTab>;
};

export const LawsAndRequirementsTab = () => {
    const byRole = HelpSectionTabNavigationMenuData["Laws & Requirements by Role"];
    const bySector = HelpSectionTabNavigationMenuData["Laws & Requirements by Industry Sector"];
    const byLocation = HelpSectionTabNavigationMenuData["Laws & Requirements by Industry Location"];
    

    return <DynamicTab>
        <h2 className="col-span-12 row-start-1 text-xl font-semibold text-teal pb-4 border-b-[1px] border-b-teal w-full mb-4">Food Safety Laws and Requirements</h2>
        <div className={`${styles["markdown-container"]} row-start-2 col-span-12 mb-4`}>
            <LawsRequirementsMd />
        </div>
        <div className="col-span-12 row-start-3 grid gap-x-4 lg:gap-x-8">
            <NavMenu title={byRole.title} tabname={byRole.tabname} links={byRole.links} />
            <NavMenu title={bySector.title} tabname={bySector.tabname} links={bySector.links} />
            <NavMenu title={byLocation.title} tabname={byLocation.tabname} links={byLocation.links} />
        </div>
    </DynamicTab>;
};

export const AIFSMembershipTab = () => {
    const { title, tabname, links} = HelpSectionTabNavigationMenuData["AIFS Membership"];
    return <DynamicTab>
        <h2 className="col-span-12 row-start-1 text-xl font-semibold text-teal pb-4 border-b-[1px] border-b-teal w-full mb-4">AIFS Membership</h2>
        <NavMenu 
            title={title}
            tabname={tabname}
            links={links} />
        <div className={`${styles["markdown-container"]} row-start-2 col-span-7 checklist`}>
            <AIFSMembershipMd />
        </div>
    </DynamicTab>;
};