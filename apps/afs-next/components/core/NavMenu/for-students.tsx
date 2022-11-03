import { Popper } from '@material-ui/core';
import { ReactNode, SyntheticEvent } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';
import StudentsMenuGraphic from 'public/afs-menu-students.webp';

const ID: NavMenuIdentifier = "for-students";
const HREF = "/students";
const STUDENTS_LINKS = [
    { text: "Display Certificate", href: "/students/food-safety-display-certificate" },
    { text: "Food Safety Card", href: "/students/food-safety-card" },
    { text: "Participant Handbook", href: "/students/participant-handbook" },
    { text: "Student Forms", href: "/forms" },
    { text: "Frequently Asked Questions", href: "/faq" },
    { text: "Student Support", href: "/contact" },
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
        <NextLink href={HREF}><a className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}>For Students</a></NextLink>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start">
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-2 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">For Students</Header4>
                    <Divider />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "24px",
                    }}>
                        <div className="flex flex-col gap-4">
                            <Text className="text-sm leading-5 mb-0">{`If you’re enrolled in an AIFS course and need some help, or want information about studying with us, this section is a great place to start.`}</Text>
                            <Text className="text-sm leading-5 mb-0">{`Take a look through our FAQs and other student resources — if you can’t find what you’re looking for, don’t hesitate to contact our support team.`}</Text>
                        </div>
                        <NextImage src={StudentsMenuGraphic} width={200} height={112} layout="fixed" />
                    </div>

                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">Learn more about Student Support</Header5>
                    <Divider />
                    <ul className="columns-2 gap-x-8">
                        { STUDENTS_LINKS.map((link, i) => <ListItem key={`nav-students-link-i`}><Link {...link}/></ListItem>)}
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
