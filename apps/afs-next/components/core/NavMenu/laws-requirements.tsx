import { Popper } from '@material-ui/core';
import { ReactNode } from 'react';
import NextLink from 'next/link';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';

const ID: NavMenuIdentifier = "laws-and-requirements";
const HREF = "/laws-requirements";
const BY_ROLE_LINKS = [
    { text: "For Job Seekers", href: "/laws-requirements/role/for-job-seekers" },
    { text: "For Employees", href: "/laws-requirements/role/for-employees" },
    { text: "For New Businesses", href: "/laws-requirements/role/for-new-businesses" },
    { text: "For Established Businesses", href: "/laws-requirements/role/for-established-businesses" },
    { text: "For Training Managers", href: "/laws-requirements/role/for-training-managers" },
];
const BY_SECTOR_LINKS = [
    { text: "Hospitality Sector", href: "/laws-requirements/food-sectors/hospitality-sector" },
    { text: "Food Retail Sector", href: "/laws-requirements/food-sectors/retail" },
    { text: "Health & Community Sector", href: "/laws-requirements/food-sectors/health-community" },
    { text: "Food Processing Sector", href: "/laws-requirements/food-sectors/food-processing" },
    { text: "Transport & Distribution Sector", href: "/laws-requirements/food-sectors/transport-distribution" },
];

const BY_LOCATION_LINKS = [
    { text: "New South Wales", href: "/laws-requirements/location/new-south-wales" },
    { text: "Victoria", href: "/laws-requirements/location/victoria" },
    { text: "Queensland", href: "/laws-requirements/location/queensland" },
    { text: "Australian Capital Territory", href: "/laws-requirements/location/act" },
    { text: "SA / NT / WA / TAS", href: "/laws-requirements/location/sa-nt-wa-tas" },
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
        <NextLink href={HREF}><a className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}> {`Laws & Requirements`}</a></NextLink>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start" >
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-4 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">{`Laws & Requirements`}</Header4>
                    <Divider />
                    <Text className="text-sm leading-5">Laws and requirements around food safety training in Australia can be complex and confusing.</Text>
                    <Text className="text-sm leading-5 mb-0">Get all the information you need in simple language to understand your responsibilities and to help you make the right food safety decisions.</Text>
                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">By Role</Header5>
                    <Divider />
                    <ul className="border-b border-mystic">
                        { BY_ROLE_LINKS.map((link, i) => <ListItem key={`nav-role-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>
                
                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">By Food Sector</Header5>
                    <Divider />
                    <ul className="border-b border-mystic">
                        { BY_SECTOR_LINKS.map((link, i) => <ListItem key={`nav-sector-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">By Location</Header5>
                    <Divider />
                    <ul className="border-b border-mystic">
                        { BY_LOCATION_LINKS.map((link, i) => <ListItem key={`nav-location-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>
            </div>
        </Popper>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] border-teal my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-teal no-underline hover:underline font-medium" href={href}>{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="p-0 m-0 border-mystic border-t-[1px] py-2 text-sm">{ children }</li>

export default MenuItem;

