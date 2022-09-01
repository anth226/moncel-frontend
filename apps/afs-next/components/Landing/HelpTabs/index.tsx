
import { ReactNode } from 'react';
import Link from 'next/link';

import HelpSectionTabNavigationMenuData from './HelpSectionTabNavigationData';
import FoodSafetyCoursesMd from './FoodSafetyCourses.mdx';
import AIFSMembershipMd from './AIFSMembership.mdx';
import styles from './HelpSection.module.scss';

interface NavMenuProps {
    title: string;
    links: Array<{ text: string, href: string }>;
    tabname: string;
}

const NavMenu = (props: NavMenuProps) => {
    return <div className="flex flex-col row-start-2 col-span-12 md:col-span-4">
        <p className={`text-slate-500 py-3 border-b-[1px] border-slate-200`}>{props.title}</p>
        { props.links.map((link, i) => {
            return <Link href={link.href} key={`help-section-${props.tabname}-link-${i}`}><a className="text-md text-afs-green py-3 border-b-[1px] border-slate-200 hover:underline">{link.text}</a></Link>;
        } )}
    </div>;
};

interface DynamicTabProps {
    children: ReactNode;
}

const DynamicTab = (props: DynamicTabProps) => {
    return <div className="grid grid-flow-row grid-cols-12">{ props.children }</div>;
};

export const FoodSafetyCoursesTab = () => {
    const { title, tabname, links} = HelpSectionTabNavigationMenuData["Food Safety Courses"];
    return <DynamicTab>
        <h4 className="col-span-12 row-start-1 text-2xl font-bold text-afs-green pb-4 border-b-[1px] border-b-afs-green w-full">Nationally Recognised Training</h4>
        <NavMenu 
            title={title}
            tabname={tabname}
            links={links} />
        <div className={`${styles["markdown-container"]} md:row-start-2 col-span-12 mt-7 md:mt-0 md:col-span-8 p-3`}>
            <FoodSafetyCoursesMd />
        </div>
    </DynamicTab>;
};

export const LawsAndRequirementsTab = () => {
    const byRole = HelpSectionTabNavigationMenuData["Laws & Requirements by Role"];
    const bySector = HelpSectionTabNavigationMenuData["Laws & Requirements by Industry Sector"];
    const byLocation = HelpSectionTabNavigationMenuData["Laws & Requirements by Industry Location"];
    

    return <DynamicTab>
        <h4 className="col-span-3 text-2xl font-bold text-afs-green pb-4 border-b-[1px] border-b-afs-green w-full">Food Safety Laws and Requirements</h4>
        <NavMenu title={byRole.title} tabname={byRole.tabname} links={byRole.links} />
        <NavMenu title={bySector.title} tabname={bySector.tabname} links={bySector.links} />
        <NavMenu title={byLocation.title} tabname={byLocation.tabname} links={byLocation.links} />

    </DynamicTab>;
};

export const AIFSMembershipTab = () => {
    const { title, tabname, links} = HelpSectionTabNavigationMenuData["AIFS Membership"];
    return <DynamicTab>
        <h4 className="col-span-12 text-2xl font-bold text-afs-green pb-4 border-b-[1px] border-b-afs-green w-full">AIFS Membership</h4>
        <NavMenu 
            title={title}
            tabname={tabname}
            links={links} />
        <div className={`${styles["markdown-container"]} row-start-2 col-span-8 p-3`}>
            <AIFSMembershipMd />
        </div>
    </DynamicTab>;
};