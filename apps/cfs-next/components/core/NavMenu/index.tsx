import { useState, useRef } from "react";
import NextLink from 'next/link';

import LawsRequirementsMenu from './laws-requirements';
import CoursesMenu from './courses';
import HACCPMenu from './haccp';
import MembershipMenu from './membership';
import StudentsMenu from './for-students';
import BusinessMenu from './for-business';
import ResourceMenu from './resources';

export type NavMenuIdentifier = "laws-and-requirements" | "food-safety-courses" | "haccp-programs" | "membership" |  "for-students" | "for-business" | "resources";

export const NavMenu = () => {
    const [ openEl, setOpenEl ] = useState<NavMenuIdentifier | null>(null);
    const anchorRef = useRef(null);

    // clone children and pass setAnchor
    return <div className="bg-teal text-mine w-full py-3">
    <nav className="flex flex-row justify-start padded-section items-start gap-2 xl:gap-3" ref={anchorRef}>
        <LawsRequirementsMenu 
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <CoursesMenu 
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <HACCPMenu 
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <MembershipMenu 
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <StudentsMenu
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <BusinessMenu
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
        <Divider />
        <ResourceMenu
            open={openEl}
            anchor={anchorRef.current}
            setOpen={setOpenEl}
        />
    </nav>
</div>;
};

const Divider = () => <p className="text-niagara select-none">/</p>;

export default NavMenu;
