import { Popper } from '@material-ui/core';
import { ReactNode, SyntheticEvent } from 'react';
import NextImage from 'next/image';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';
import HaccpMenuGraphic from 'public/afs-menu-haccp.webp';

const ID: NavMenuIdentifier = "haccp-programs";
const HREF = "/haccp-programs";
const HACCP_LINKS = [
    { text: "What is HACCP?", href: "/haccp-programs/what-is-haccp" },
    { text: "HACCP Food Safety Plan Kit", href: "/haccp-food-safety-plan-kit" },
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
        <NextLink href={HREF}><a className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}> HACCP Programs</a></NextLink>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start">
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-2 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">HACCP Food Safety Programs</Header4>
                    <Divider />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "24px",
                    }}>
                        <div className="flex flex-col gap-4">
                            <Text className="text-sm leading-5 mb-0">A Food Safety Program is the implementation of written procedures that help prevent, reduce and eliminate food safety hazards and is a legal requirement for most Australian food businesses.</Text>
                            <Text className="text-sm leading-5 mb-0">If you need to create a Food Safety Program but {`don’t`} know what it is or where to start, AIFS can help.</Text>
                        </div>
                        <NextImage src={HaccpMenuGraphic} width={200} height={112} layout="fixed" />
                    </div>

                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">Learn more about HACCP Food Safety Programs</Header5>
                    <Divider />
                    <ul className="columns-2 gap-x-8">
                        { HACCP_LINKS.map((link, i) => <ListItem key={`nav-haccp-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>
                
            </div>
        </Popper>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] border-teal my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-teal no-underline hover:underline font-medium" href={href}>{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="m-0 p-0 border-mystic border-t-[1px] py-2 text-sm">{ children }</li>

export default MenuItem;
