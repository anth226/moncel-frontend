import React from 'react';
import { useLocation } from '@reach/router';
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "src/components/core";

import { debounce } from "lodash";
import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
const { toggleNavbarOpen } = AppActions;

import Phone from "src/components/icons/phone";
import CoursesIcon from '../../images/usx_menu_presentation.svg';
import BusinessIcon from '../../images/usx_menu_backpack.svg';
import ResourcesIcon from '../../images/usx_menu_news.svg';
import AboutIcon from '../../images/usx_menu_profile.svg';
import HelpIcon from '../../images/usx_menu_question.svg';
import MailIcon from '../../images/usx_menu_mail.svg';

import ArrowIcon from '../../images/usx_menu_arrow.svg';

const NAVBAR_ID = "navbar";
const MOBILE_DROPDOWN_ID = "mobile-dropdown";

const Header = () => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    return <nav className={`${isMobileMenuOpen ? "fixed z-10 accordion mx-0" : "flex md:mx-4"} justify-between w-full md:w-auto xl:max-w-6xl lg:mx-4 xl:m-auto md:py-4 border-b-1 border-mischka`} id={NAVBAR_ID}>

        {/* Desktop+ menu */}
        <div className="hidden lg:flex items-center">
            <Link to="/">
                <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} />
            </Link>
            <div className="flex gap-6 ml-6 text-bluewood font-medium text-base">
                <HeaderLink to="/us/courses">Courses</HeaderLink>
                <HeaderLink to="/us/business/accounts">Business</HeaderLink>
                <HeaderLink to="/us/resources/blog">Resources</HeaderLink>
                <HeaderLink to="/us/about/about-us">About Us</HeaderLink>
                <HeaderLink to="https://help.userve.com/knowledge">Help Center</HeaderLink>
                <HeaderLink to="/us/about/contact-us">Contact</HeaderLink>
            </div>
        </div>
        <div className="hidden lg:flex flex-row items-center text-bluewood font-medium">
            <Phone className="px-3 py-2 bg-lilac rounded" />
            <a href="https://my.userve.com/customer/account/login" className="ml-6">Login</a>
        </div>

        {/* mobile-tablet */}
        <div className={`lg:hidden w-full ${isMobileMenuOpen ? "h-screen" : "h-auto"} flex flex-col`}>
            <div className={`flex justify-between w-full ${isMobileMenuOpen ? "px-4 py-4 md:py-0" : "p-4 md:p-0"}`}>
                <Logo />
                <HamburgerMenu />
            </div>
            <div className="w-screen h-full">
                <MobileMenu />
            </div>
        </div>

    </nav>;
}

const HeaderLink = ({ to, children }: { to: string, children: JSX.Element | JSX.Element[] | string }) => {
    const location = useLocation();
    const className = (to === location.pathname) ? "text-navy" : ""
    return <Link to={to} className={className}>{children}</Link>
};

const HamburgerMenu = () => {
    const dispatch = useAppDispatch();
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    return <button className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false" onClick={() => dispatch(toggleNavbarOpen())}>
        {isMobileMenuOpen ? <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000b8f" aria-hidden="true"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000b8f" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
    </button>
};

const MobileMenu = () => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    return <div id={MOBILE_DROPDOWN_ID} className={`accordion-collapse collapse ${isMobileMenuOpen ? "show" : ""} w-full h-full`}>
        <div className="accordion-body w-full h-full" data-bs-parent={`#${NAVBAR_ID}`}>
            <div className="flex flex-col w-full h-full bg-white">
                <div className="flex flex-col">
                    <MobileLink displayName="Courses" href="/us/courses" icon={CoursesIcon} />
                    <MobileLink displayName="Business" href="/us/business/accounts" icon={BusinessIcon} />
                    <MobileLink displayName="Resources" href="/us/resources/blog" icon={ResourcesIcon} />
                    <MobileLink displayName="About Us" href="/us/about/about-us" icon={AboutIcon} />
                    <MobileLink displayName="Help Center" href="https://help.userve.com/knowledge" icon={HelpIcon} />
                    <MobileLink displayName="Contact" href="/us/about/contact-us" icon={MailIcon} />
                </div>
                <div className="flex flex-col gap-4 grow items-center justify-end text-bluewood font-medium w-full p-4 mb-8">
                    <Phone className="px-3 py-3 rounded-md flex items-center justify-center border-navy border-1 w-full" />
                    <a href="https://my.userve.com/customer/account/login" className="flex items-center justify-center rounded-md py-3 w-full text-white bg-navy">Login</a>
                </div>
            </div>
        </div>
    </div>
};

interface MobileLinkProps {
    displayName: string,
    href: string,
    icon: typeof CoursesIcon,
}

const MobileLink = ({ displayName, href, icon }: MobileLinkProps) => {
    const dispatch = useAppDispatch();

    const handleClick = debounce(() => {
        dispatch(toggleNavbarOpen(false));
    }, 500);

    return <Link to={href} className="w-full" onClick={handleClick}>
        <div className="w-screen">
            <div className="flex justify-between border-b-1 border-mischka mx-4 py-4">
                <div className="flex items-center gap-4">
                    <img src={icon} alt={displayName} />
                    <div className="!mb-0 text-navy font-sans font-medium w-full">{displayName}</div>
                </div>
                <img src={ArrowIcon} alt="Arrow" />
            </div>
        </div>

    </Link>
};

const Logo = () => {
    return <Link to="/">
        <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} />
    </Link>
};

export default Header;
