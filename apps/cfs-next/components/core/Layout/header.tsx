import React, { useState } from 'react';
import { useAppDispatch, useAppSelector, AppActions } from 'store';
import Button from '../Button';
import { useRouter } from 'next/router';
import NextLink from 'next/link';

import NavMenu from 'components/core/NavMenu';
import { Text } from 'components/core/Typography';
import Image from 'components/core/Image';
import Link from 'next/link';

const { toggleMobileMenu, toggleModal } = AppActions;
const MOBILE_MENU_ACCORDION_ID = "mobilemenu-accordion";
const MOBILE_MENU_COLLAPSE_ID = "mobilemenu-collapse";

type Link = {
    href: string,
    text: string,
};

const HEADER_NAVIGATION_DATA: Array<Link> = [
    { href: "/about", text: "About Us" },
    { href: "https://blog.foodsafety.com.au/blog", text: "Blog" }, // netlify redirect
    { href: "https://blog.foodsafety.com.au/news", text: "News" },
    { href: "/faq", text: "FAQ" },
    { href: "https://my.foodsafety.com.au/customer/account/login/", text: "My Courses" },
];

const HEADER_BANNER_NAVIGATION_DATA: Array<Link> = [
    { href: "/", text: "Home" },
    { href: "/laws-requirements", text: "Laws & Requirements" },
    { href: "/courses", text: "Food Safety Courses" },
    { href: "/haccp-programs", text: "HACCP Programs"},
    { href: "/membership", text: "Membership"},
    { href: "/students", text: "For Students"},
    { href: "/business", text: "For Business"},
    { href: "https://resources.foodsafety.com.au/", text: "Resource Library"},
];

const ADDITIONAL_MOBILE_NAVIGATION_DATA: Array<Link> = [
    { href: "/contact", text: "Contact Us" },
    { href: "/contact", text: "Course Login" },
    { href: "/contact", text: "Member Login" },
];

const SiteNoticeContent = <div className="flex gap-2 md:gap-3 items-start text-left md:text-center md:m-auto"><Image src={`/exclamation.svg`} alt="Important" priority width={20} height={20} /><Text className="!text-white uppercase leading-[1rem] md:leading-6 text-sm md:text-base">Covid-19 resources now included with <Link href="/courses"><a className="underline hover:no-underline text-white">all courses</a></Link></Text></div>

const SiteNotice = () => {
    return <div className="bg-shakespeare w-full p-[10.5px] md:text-center text-white flex justify-center">
        { SiteNoticeContent }
    </div>
};

const MobileHeader = () => {
    return <div className="flex flex-col w-full" id="section-header-mobile">
        {/* COVID banner + hamburger menu button */}
        <div className="lg:hidden w-full bg-shakespeare">
            <div className="padded-section accordion accordion-flush flex justify-between items-center py-3 md:py-2 text-white text-center" id={MOBILE_MENU_ACCORDION_ID}>
                { SiteNoticeContent }
                {/* <MobileMenuHamburgerButton /> */}
            </div>
        </div>

        {/* Logo row */}
        <div className="lg:hidden bg-teal w-full py-2">
            <div className="padded-section flex">
                <NextLink href="/"><Image src="/cifs-logo-stacked-wide.svg" alt="Australian Institute of Food Safety Logo" priority width={252} height={33} className="m-0 p-0" /></NextLink>
            </div>
        </div>

        {/* Collapsible mobile menu */}
        <MobileMenuCollapse navigationData={[...HEADER_BANNER_NAVIGATION_DATA, ...ADDITIONAL_MOBILE_NAVIGATION_DATA]}/>
    </div>;
};


const MobileMenuHamburgerButton = () => {
    // const dispatch = useAppDispatch();
    // const isMobileMenuOpen = useAppSelector(state => state.mobileMenu.isMobileMenuOpen);
    // return <div className="flex flex-row justify-end items-center"><button className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false" aria-label="mobile menu hamburger icon" onClick={() => dispatch(toggleMobileMenu())} data-bs-toggle="collapse" data-bs-target={`#${MOBILE_MENU_COLLAPSE_ID}`}>
    //     {isMobileMenuOpen ? <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="block h-8 w-8" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
    // </button></div>;
};

const MobileMenuCollapse = ({ navigationData }: { navigationData: Array<Link> }) => {
    const linkElements = navigationData.reduce((elements, link) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="py-2.5 text-white text-sm no-underline font-semibold border-afs-green-light border-t-[1px]" key={`banner-navigation-link-${link.text}`}>{link.text}</a>);
        return elements;
    }, [] as React.ReactNode[]);
    linkElements.pop();
    return <div id={MOBILE_MENU_COLLAPSE_ID} className="bg-teal  accordion-collapse collapse" data-bs-parent={MOBILE_MENU_ACCORDION_ID}>
        <div className="flex flex-col padded-section">{ linkElements }</div>
                
    </div>;
};

const DesktopBannerNavigation = ({ navigationData }: { navigationData: Array<Link>}) => {
    if(!navigationData) return null;
    const linkElements = navigationData.reduce((elements, link, i) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="text-white no-underline font-semibold text-base whitespace-nowrap hover:underline" key={`banner-navigation-link-${link.text}`}>{link.text}</a>);
        elements.push(<p className="mx-3 text-pasture" key={`banner-navigation-divider-${i}`}>|</p>);
        return elements;
    }, [] as React.ReactNode[]);
    linkElements.pop();
    return <NavMenu />
};

const DesktopHeader = () => {
    const [ search, setSearch ] = useState("");
    const router = useRouter();
    const dispatch = useAppDispatch();
    // Create an array of links with dividers then pop the last divider
    const linkElements = HEADER_NAVIGATION_DATA.reduce((elements, link, i) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="mx-1 text-teal text-xs uppercase font-semibold no-underline hover:underline" key={`header-navigation-link-${link.text}`}>{link.text}</a>);
        elements.push(<p className="mx-1 text-xs text-slate-400" key={`header-navigation-divider-${i}`}>/</p>);
        return elements;
    }, [] as React.ReactNode[]) || [];
    linkElements.pop();
    const toggleLogin = () => {
        dispatch(toggleModal("Login"))
    }

    const handleSearchChange = (e: React.FormEvent<HTMLInputElement>) => {
        setSearch(e.currentTarget.value);
    }
    const searchRedirect = (e: React.KeyboardEvent) => {
        if (e.key === "Enter") {
            const keys= search.replaceAll(" ", "+")
            router.push(`/search?keys=${keys}`)
        }
    }
    return <div className="hidden lg:flex flex-col w-full items-apart" id="section-header-desktop">
        <SiteNotice />
        <div className="padded-section w-full flex flex-row justify-between p-0">
            {/* column 1 */}
            <div className="flex flex-row flex-auto">
                <NextLink href="/"><Image src="/cifs-logo-stacked-wide.svg" alt="Australian Institute of Food Safety Logo" priority width={375} height={48} className="hover:cursor-pointer"/></NextLink>
            </div>

            {/* column 2 */}
            <div className="flex flex-col flex-auto justify-end py-3 gap-2">
                {/* Navigation menu */}
                <nav className="flex flex-row justify-end items-center" >
                    { linkElements }
                    <label htmlFor="keyword search"></label>
                    <input id="keyword search" name="keyword search" type="text" placeholder="Search" className="px-2 py-1 border-silver border-1 rounded-l ml-3 text-sm leading-2 outline-none" value={search} onChange={handleSearchChange} onKeyDown={searchRedirect} />
                    <Button id="button-keyword-search" variant="primary" className="!px-[6px] !py-[6px] rounded-none rounded-r"><Image src="/icon_search.svg" alt="search icon" width={14} height={14} /></Button>
                </nav>
                <div className="flex flex-row justify-end items-center gap-5">
                    <Button id="button-account-login" variant="secondary" className="py-1 px-5 capitalize" onClick={toggleLogin}><div className="mr-2 mt-[3px]"><Image src="/btn-img-lock.png" alt="Account login icon" width={12} height={14} /></div><div>Account Login</div></Button>
                    <Button id="button-contact" variant="primary" className="py-1 px-5 capitalize" onClick={() => router.push("/contact")}><span className="mr-2 mt-[3px]"><Image src="/btn-img-phone.png" alt="Contact us icon" width={12} height={14} /></span>Contact Us</Button>
                </div>
            </div>

        </div>

        <DesktopBannerNavigation navigationData={HEADER_BANNER_NAVIGATION_DATA} />
    </div>;
};

const Header = () => {
    return <>
        <DesktopHeader />
        <MobileHeader />
    </>;
};

export default Header;
