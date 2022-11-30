import { Popper } from '@material-ui/core';
import { ReactNode } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';
import CourseMenuGraphic from 'public/afs-menu-course.webp';

const ID: NavMenuIdentifier = "food-safety-courses";
const HREF = "/courses";
const COURSE_LINKS = [
    { text: "Food Safety Supervisor", href: "/courses/food-safety-supervisor" },
    { text: "Food Handler Course", href: "/courses/food-handler-course" },
    { text: "NSW Recertification", href: "/courses/nsw-recertification" },
    { text: "Food Safety Manager", href: "/courses/food-safety-manager" },
    { text: "Introduction to Food Safety", href: "/courses/introduction-to-food-safety-course" },
    { text: "Food Allergen Management", href: "/courses/food-allergen-management" },
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
        <NextLink href={HREF}><a className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}> {`Food Safety Courses`}</a></NextLink>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start" keepMounted>
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-2 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">Food Safety Courses</Header4>
                    <Divider />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "24px",
                    }}>
                        <div className="flex flex-col gap-4">
                            <Text className="text-sm leading-5 mb-0">Whether {`you're`} a food worker, business owner or training manager, our food safety courses make it easy for you to meet your legal requirements.</Text>
                            <Text className="text-sm leading-5 mb-0">At AIFS, most of our courses are nationally recognised throughout Australia. They can be completed online in a few hours, and many students receive their certificate or Statement of Attainment on the same day that they finish their course.</Text>
                        </div>
                        <NextImage src={CourseMenuGraphic} width={200} height={112} layout="fixed" placeholder="blur" loading="eager" />
                    </div>

                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">Learn more about food safety courses</Header5>
                    <Divider />
                    <ul className="columns-2 gap-x-8">
                        { COURSE_LINKS.map((link, i) => <ListItem key={`nav-courses-link-${i}`}><Link {...link}/></ListItem>)}
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
