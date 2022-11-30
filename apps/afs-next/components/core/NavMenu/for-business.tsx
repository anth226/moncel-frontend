import { Popper } from '@material-ui/core';
import { ReactNode, SyntheticEvent } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';
import BusinessMenuGraphic from 'public/afs-menu-business.webp';

const ID: NavMenuIdentifier = "for-business";
const HREF="/business";
const STUDENTS_LINKS = [
    { text: "Why Food Safety", href: "/business/food-safety" },
    { text: "Small Business Solutions", href: "/business/small-business" },
    { text: "Contact Us", href: "/contact" },
    { text: "Business Accounts", href: "/business/accounts" },
    { text: "Enterprise Solutions", href: "/business/enterprise" },
    { text: "Frequently Asked Questions", href: "/faq" },
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
        <NextLink href={HREF}><a className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}>For Business</a></NextLink>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start" keepMounted>
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-2 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">For Business</Header4>
                    <Divider />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "24px",
                    }}>
                        <div className="flex flex-col gap-4">
                            <Text className="text-sm leading-5 mb-0">{`From cafes to catering companies, market stalls to supermarkets, every food business in Australia must meet all federal, state and local requirements for food safety training.`}</Text>
                            <Text className="text-sm leading-5 mb-0">{`Find out what can happen if you don't comply, and how AIFS can ensure that you do.`}</Text>
                        </div>
                        <NextImage src={BusinessMenuGraphic} width={200} height={112} layout="fixed" placeholder="blur" loading="eager" />
                    </div>

                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">Learn more about Business Solutions</Header5>
                    <Divider />
                    <ul className="columns-2 gap-x-8">
                        { STUDENTS_LINKS.map((link, i) => <ListItem key={`nav-business-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>
                
            </div>
        </Popper>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] border-teal my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-teal no-underline hover:underline font-medium" href={href}>{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="p-0 m-0 border-mystic border-y py-2 text-sm -mb-[1px]">{ children }</li>

export default MenuItem;
