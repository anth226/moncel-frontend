import { Popper } from '@material-ui/core';
import { ReactNode, SyntheticEvent } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/Typography';
import styles from './styles.module.scss';
// import MembershipMenuGraphic from 'public/afs-menu-membership.webp';

const ID: NavMenuIdentifier = "membership";
const HREF = "/membership";

const MEMBERSHIP_LINKS = [
    { text: "Membership Program", href: "/membership/membership-program" },
    { text: "Food Safety Decal", href: "/membership/food-safety-decal" },
];
interface Props {
    open: NavMenuIdentifier | null;
    anchor: Element | null;
    setOpen: (id: NavMenuIdentifier | null) => unknown;
}

const MenuItem = (props: Props) => {

    const openMenu = (e: SyntheticEvent) => {
        props.setOpen(ID);
        e.stopPropagation();
    }
    const closeMenu = (e: SyntheticEvent) => {
        props.setOpen(null);
        e.stopPropagation();
    }
    return <div id={`nav-menu-${ID}`} onMouseLeave={closeMenu}>
        <NextLink href={HREF}><a className="link text-mine no-underline hover:underline font-semibold" onMouseEnter={openMenu}>Membership</a></NextLink>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] border-teal my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-mine no-underline hover:underline font-medium" href={href}>{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="p-0 m-0 border-mystic border-y py-2 text-sm -mb-[1px]">{ children }</li>

export default MenuItem;
