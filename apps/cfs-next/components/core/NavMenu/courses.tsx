import { Popper } from '@material-ui/core';
import { ReactNode } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/Typography';
import styles from './styles.module.scss';
import CourseMenuGraphic from 'public/afs-menu-course.webp';

const ID: NavMenuIdentifier = "food-safety-courses";
const HREF = "/courses/food-handler-certification-course";
const COURSE_LINKS = [
    { text: "Food Safety Supervisor", href: "/courses/food-safety-supervisor" },
    { text: "Food Handler Course", href: "/courses/food-handler-course" },
    { text: "NSW Recertification", href: "/courses/nsw-recertification" },
    { text: "Food Safety Manager", href: "/courses/food-safety-manager" },
    { text: "Introduction to Food Safety", href: "/courses/introduction-to-food-safety-course" },
];
interface Props {
    open: NavMenuIdentifier | null;
    anchor: Element | null;
    setOpen: (id: NavMenuIdentifier | null) => unknown;
}

const MenuItem = (props: Props) => {

    const openMenu = () => {
        props.setOpen(ID);
    }
    const closeMenu = () => {
        props.setOpen(null);
    }
    return <div id={`nav-menu-${ID}`} onMouseLeave={closeMenu}>
        <NextLink href={HREF}><a className="link text-mine no-underline hover:underline font-semibold" onMouseEnter={openMenu}> {`Food Safety Courses`}</a></NextLink>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-mine no-underline hover:underline font-medium" href={href}>{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="p-0 m-0 border-mystic border-y py-2 text-sm -mb-[1px]">{ children }</li>

export default MenuItem;
