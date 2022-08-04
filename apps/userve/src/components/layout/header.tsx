import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
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
import { DynamicImage } from 'src/lib';

const NAVBAR_ID = "navbar";
const MOBILE_DROPDOWN_ID = "mobile-dropdown";

export interface HeaderProps {
    highlightPathname?: string;
};

const Header = ({ highlightPathname }: HeaderProps) => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    const imageData = useStaticQuery(imageQuery);
    return <nav className={`${isMobileMenuOpen ? "fixed z-10 accordion mx-0 w-full" : "flex md:mx-4 w-max-6xl"} justify-between md:justify-center md:w-auto xl:max-w-6xl lg:mx-4 xl:m-auto md:py-4 lg:py-0 border-b-1 lg:border-b-0 border-mischka lg:border-transparent `} id={NAVBAR_ID}>

        {/* Desktop+ menu */}
        <div className="hidden lg:flex justify-between lg:w-[1140px] max-w-6xl lg:py-4 border-b-0 lg:border-b-1 lg:border-mischka">
            <div className="hidden lg:flex items-center content-start">
                <Link to="/">
                    <DynamicImage fileNode={imageData.logo.nodes[0]} alt="Userve" width={100} height={33} loading="lazy"/>
                </Link>
                <div className="flex gap-8 ml-6 text-bluewood font-medium text-base">
                    <HeaderLink to="/us/courses" highlightPathname={highlightPathname}>Courses</HeaderLink>
                    <HeaderLink to="/us/business/accounts" highlightPathname={highlightPathname}>Business</HeaderLink>
                    <HeaderLink to="https://blog.userve.com/us" highlightPathname={highlightPathname}>Blog</HeaderLink>
                    <HeaderLink to="/us/about/about-us" highlightPathname={highlightPathname}>About Us</HeaderLink>
                    <HeaderLink to="https://help.userve.com" target="_blank" highlightPathname={highlightPathname}>Help Center</HeaderLink>
                    <HeaderLink to="/us/about/contact-us" highlightPathname={highlightPathname}>Contact</HeaderLink>
                </div>
            </div>
            <div className="hidden lg:flex flex-row items-center text-bluewood font-medium">
                <Phone className="px-3 py-2 rounded" />
                <a href="https://my.userve.com/customer/account/login" className="ml-6">Login</a>
            </div>
        </div>

        {/* mobile-tablet */}
        <div className={`lg:hidden w-full ${isMobileMenuOpen ? "h-screen" : "h-auto"} flex flex-col`}>
            <div className={`flex justify-between w-full ${isMobileMenuOpen ? "px-4 py-4 md:py-0" : "p-4 md:p-0"}`}>
                <Logo />
                <HamburgerMenu />
            </div>
            <div className="w-screen h-mobile">
                <MobileMenu />
            </div>
        </div>

    </nav>;
}

const HeaderLink = ({ to, children, highlightPathname, ...rest }: { to: string, highlightPathname?: string, children: JSX.Element | JSX.Element[] | string, target?: string }) => {
    const location = useLocation();
    const className = (to === location.pathname || to === highlightPathname) ? "border-navy py-2 " : "border-transparent py-2";
    return <Link to={to} className={`border-b-1 ${className}`} target={target}>{children}</Link>
};

const HamburgerMenu = () => {
    const dispatch = useAppDispatch();
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    return <button className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false" aria-label="mobile header hamburger menu" onClick={() => dispatch(toggleNavbarOpen())}>
        {isMobileMenuOpen ? <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000b8f" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" /></svg> : <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="#000b8f" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" /></svg>}
    </button>;
};

const MobileMenu = () => {
    const isMobileMenuOpen = useAppSelector(state => state.navbar.isMobileMenuOpen);
    return <div id={MOBILE_DROPDOWN_ID} className={`accordion-collapse collapse ${isMobileMenuOpen ? "show" : ""} w-full h-full`}>
        <div className="accordion-body w-full h-full" data-bs-parent={`#${NAVBAR_ID}`}>
            <div className="flex flex-col w-full h-full bg-white">
                <div className="flex flex-col">
                    <MobileLink displayName="Courses" href="/us/courses" icon={CoursesIcon} />
                    <MobileLink displayName="Business" href="/us/business/accounts" icon={BusinessIcon} />
                    <MobileLink displayName="Blog" href="https://blog.userve.com/us" icon={ResourcesIcon} />
                    <MobileLink displayName="About Us" href="/us/about/about-us" icon={AboutIcon} />
                    <MobileLink displayName="Help Center" href="https://help.userve.com" icon={HelpIcon} target="_blank"/>
                    <MobileLink displayName="Contact" href="/us/about/contact-us" icon={MailIcon} />
                </div>
                <div className="flex flex-col gap-4 grow items-center justify-end text-bluewood font-medium w-full p-4">
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
    target?: string
}

const MobileLink = ({ displayName, href, icon, ...rest }: MobileLinkProps) => {
    const dispatch = useAppDispatch();
    const location = useLocation();

    const handleClick = () => {
        if(location.pathname === href) {
            dispatch(toggleNavbarOpen(false));
        }
    }
    return <Link to={href} className="w-full active:bg-lilac" onClick={handleClick} {...rest}>
        <div className="w-screen">
            <div className="flex justify-between border-b-1 border-mischka mx-4 py-4">
                <div className="flex items-center gap-4">
                    <img src={icon} alt={displayName} height={20} width={20}/>
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

const imageQuery = graphql`
    query {
        logo:allFile(filter: { name: { eq: "usx-logo-solid" }}) {
            nodes {
                name
                publicURL
                childImageSharp {
                    gatsbyImageData
                  }
            }
        }
    }
`;