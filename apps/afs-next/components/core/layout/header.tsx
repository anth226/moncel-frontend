import React from 'react';
import Image from 'next/image';
import { useAppDispatch, useAppSelector, AppActions } from 'store';

const { toggleMobileMenu } = AppActions;
const MOBILE_MENU_ACCORDION_ID = "mobilemenu-accordion";
const MOBILE_MENU_COLLAPSE_ID = "mobilemenu-collapse";

type Link = {
    href: string,
    text: string
};

const HEADER_NAVIGATION_DATA: Array<Link> = [
    { href: "/about", text: "About Us" },
    { href: "/blog", text: "Blog" }, // netlify redirect
    { href: "/news", text: "News" },
    { href: "/faq", text: "FAQ" },
    { href: "/", text: "Home" },
];

const HEADER_BANNER_NAVIGATION_DATA: Array<Link> = [
    { href: "/", text: "Home" },
    { href: "/laws-requirements", text: "Laws & Requirements" },
    { href: "/courses", text: "Food Safety Courses" },
    { href: "", text: "HACCP Programs"},
    { href: "", text: "Membership"},
    { href: "", text: "For Students"},
    { href: "", text: "For Business"},
    { href: "", text: "Resource Library"},
];

const ADDITIONAL_MOBILE_NAVIGATION_DATA: Array<Link> = [
    { href: "/contact", text: "Contact Us" },
    { href: "/contact", text: "Course Login" },
    { href: "/contact", text: "Member Login" },
];

const MobileHeader = () => {

    return <div className="flex flex-col w-full" id="section-header-mobile">
        {/* COVID banner + hamburger menu button */}
        <div className="lg:hidden accordion accordion-flush grid grid-flow-row grid-cols-3 w-screen bg-afs-blue text-white" id={MOBILE_MENU_ACCORDION_ID}>
            <div />
            <div className="flex justify-center items-center">COVID NOTICE</div>
            <MobileMenuHamburgerButton />

        </div>

        {/* Logo row */}
        <div className="lg:hidden bg-afs-green w-full p-4">
            <Image src={`/afs-logo-full-width-white.svg`} alt="Australian Institute of Food Safety Logo" priority width={254} height={34} />
        </div>

        {/* Collapsible mobile menu */}
        <MobileMenuCollapse navigationData={[...HEADER_NAVIGATION_DATA, ...ADDITIONAL_MOBILE_NAVIGATION_DATA]}/>
    </div>;
};

const MobileMenuHamburgerButton = () => {
    const dispatch = useAppDispatch();
    const isMobileMenuOpen = useAppSelector(state => state.mobileMenu.isMobileMenuOpen);
    return <div className="flex flex-row justify-end items-center p-2"><button className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false" aria-label="mobile menu hamburger icon" onClick={() => dispatch(toggleMobileMenu())} data-bs-toggle="collapse" data-bs-target={`#${MOBILE_MENU_COLLAPSE_ID}`}>
        {isMobileMenuOpen ? <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#ffffff" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
    </button></div>;
};

const MobileMenuCollapse = ({ navigationData }: { navigationData: Array<Link> }) => {
    const linkElements = navigationData.reduce((elements, link) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="mx-2 py-2.5 text-white no-underline font-bold border-afs-green-light border-t-[1px]" key={`banner-navigation-link-${link.text}`}>{link.text}</a>);
        return elements;
    }, [] as React.ReactNode[]);
    linkElements.pop();
    return <div id={MOBILE_MENU_COLLAPSE_ID} className="padded-section bg-afs-green flex flex-col lg:hidden w-full accordion-collapse collapse" data-bs-parent={MOBILE_MENU_ACCORDION_ID}>
        { linkElements }
    </div>;
};

const DesktopBannerNavigation = ({ navigationData }: { navigationData: Array<Link>}) => {
    if(!navigationData) return null;
    const linkElements = navigationData.reduce((elements, link, i) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="text-white no-underline font-semibold text-sm whitespace-nowrap" key={`banner-navigation-link-${link.text}`}>{link.text}</a>);
        elements.push(<p className="mx-2" key={`banner-navigation-divider-${i}`}>/</p>);
        return elements;
    }, [] as React.ReactNode[]);
    linkElements.pop();
    return <div className="bg-afs-green text-white w-screen py-2 ">
        <nav className="flex flex-row padded-section items-center">
            { linkElements }
        </nav>
    </div>;
};

const DesktopHeader = () => {
    // Create an array of links with dividers then pop the last divider
    const linkElements = HEADER_NAVIGATION_DATA.reduce((elements, link, i) => {
        if(!link) return elements;
        elements.push(<a href={link.href} className="mx-1 text-afs-green text-xs" key={`header-navigation-link-${link.text}`}>{link.text}</a>);
        elements.push(<p className="mx-1 text-xs text-slate-400" key={`header-navigation-divider-${i}`}>/</p>);
        return elements;
    }, [] as React.ReactNode[]) || [];
    linkElements.pop();
    return <div className="hidden lg:flex flex-col w-full items-apart" id="section-header-desktop">
        <div className="padded-section flex flex-row justify-between bg-white">
            {/* column 1 */}
            <div className="flex flex-row flex-auto justify-start">
                <Image src="/afs-logo-full-width-green.svg" alt="Australian Institute of Food Safety Logo" priority width={375} height={48} />
            </div>

            {/* column 2 */}
            <div className="flex flex-col flex-auto justify-end py-4 gap-3">
                {/* Navigation menu */}
                <nav className="flex flex-row justify-end items-center" >
                    { linkElements }
                    <label htmlFor="keyword search"></label>
                    <input id="keyword search" name="keyword search" type="text" className="shadow border-gray border-solid border-slate-200 border-2" />
                    <span className="px-2 bg-afs-green">🔍</span>
                </nav>
                <div className="flex flex-row justify-end items-center gap-5">
                    {/* TODO: account login modal */}
                    <div className="bg-afs-blue py-2 px-6 text-white flex items-center rounded"><span className="mr-2 mt-[2px]"><Image src="/btn-img-lock.png" alt="Account login icon" width={12} height={14} /> </span> Account Login</div>
                    <div className="bg-afs-green py-2 px-6 text-white flex items-center rounded"><span className="mr-2 mt-[2px]"><Image src="/btn-img-phone.png" alt="Account login icon" width={12} height={14} /> </span> Contact Us</div>
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
