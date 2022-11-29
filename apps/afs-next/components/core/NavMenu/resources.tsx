import { Popper } from '@material-ui/core';
import { ReactNode, SyntheticEvent } from 'react';
import NextImage from 'next/image';

import { NavMenuIdentifier } from '.';
import { Header4, Header5, Text } from 'components/core/typography';
import styles from './styles.module.scss';
import ResourceMenuGraphic from 'public/afs-menu-resources.webp';

const ID: NavMenuIdentifier = "resources";
const HREF = "https://resources.foodsafety.com.au";
const RESOURCE_LINKS = [
    { text: "Guides", href: "https://resources.foodsafety.com.au/guides" },
    { text: "Posters", href: "https://resources.foodsafety.com.au/posters" },
    { text: "Templates", href: "https://resources.foodsafety.com.au/templates" },
    { text: "Fact Sheets", href: "https://resources.foodsafety.com.au/fact-sheets" },
    { text: "Videos", href: "https://resources.foodsafety.com.au/videos" },
    { text: "Food Recalls", href: "https://resources.foodsafety.com.au/food-recalls" },
    { text: "Food Safety Blog", href: "https://blog.foodsafety.com.au/blog" },
    { text: "Food Safety News", href: "https://blog.foodsafety.com.au/news" },
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
        <a href={HREF} className="link text-white no-underline hover:underline font-semibold" onMouseEnter={openMenu}>Resource Library</a>
        <Popper id={ID} open={props.open === ID} anchorEl={props.anchor} placement="bottom-start">
            {/* actual menu */}
            <div className="padded-section bg-white px-7 py-8 grid grid-cols-2 gap-x-8 gap-y-0 grid-flow-row mt-3">
                <Column>
                    <Header4 className="text-teal leading-6">Resource Library</Header4>
                    <Divider />
                    <div style={{
                        display: "grid",
                        gridTemplateColumns: "1fr auto",
                        gap: "24px",
                    }}>
                        <div className="flex flex-col gap-4">
                            <Text className="text-sm leading-5 mb-0">{`The AIFS Resource Library is a collection of food safety resources including templates, posters, guides, videos, fact sheets and more. You can also find the latest food safety news, blog and product recalls.`}</Text>
                            <Text className="text-sm leading-5 mb-0">{`Explore the collection and check back frequently for all the latest news in food safety.`}</Text>
                        </div>
                        <NextImage src={ResourceMenuGraphic} width={200} height={112} layout="fixed" placeholder="blur" />
                    </div>

                </Column>

                <Column>
                    <Header5 className="text-emperor leading-6 text-base font-medium">Learn more about Food Safety</Header5>
                    <Divider />
                    <ul className="columns-2 gap-x-8">
                        { RESOURCE_LINKS.map((link, i) => <ListItem key={`nav-resource-link-${i}`}><Link {...link}/></ListItem>)}
                    </ul>
                </Column>
                
            </div>
        </Popper>
    </div>;
};

const Column = ({ children }: { children: ReactNode, className?: string }) => <div className={`${styles["quicklist"]} flex flex-col`}>{ children }</div>
const Divider = () => <div className="w-full border-b-[1px] border-teal my-4" />;
const Link = ({ text, href }: { text: string, href: string }) => <a className="link text-teal no-underline hover:underline font-medium" href={href} target="_blank" rel="noreferrer">{text}</a>
const ListItem = ({ children }: { children: ReactNode }) => <li className="p-0 m-0 border-mystic border-y py-2 text-sm -mb-[1px]">{ children }</li>

export default MenuItem;
