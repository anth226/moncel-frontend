import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "src/components/core";
import Phone from "src/components/icons/phone";

const Header = () => {
    return <nav className="flex justify-between w-screen xl:max-w-6xl mx-4 xl:m-auto py-6 lg:py-4 border-b-1 border-mischka">
        {/* Desktop+ menu */}
        <div className="hidden lg:flex items-center">
            <Link to="/">
                <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} />
            </Link>
            <div className="flex gap-6 ml-6 text-bluewood font-medium text-base">
                <Link to="/us/courses">Courses</Link>
                <Link to="/us/business/accounts">Business</Link>
                <a href="/us/resources/blog">Resources</a>
                <Link to="/us/about/about-us">About Us</Link>
                <a href="https://help.userve.com/knowledge" target="_blank">Help Center</a>
                <Link to="/us/about/contact-us">Contact</Link>
            </div>
        </div>
        <div className="hidden lg:flex flex-row items-center text-bluewood font-medium">
            <Phone className="px-3 py-2 bg-lilac rounded"/>
            <a href="https://my.userve.com/customer/account/login" className="ml-6">Login</a>
        </div>

        {/* mobile-tablet */}
        <div className="lg:hidden flex justify-between w-full px-4">
            <Logo />
            <HamburgerMenu />
        </div>

    </nav>;
}

export default Header;

const HamburgerMenu = () => <div className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false">
    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>


</div>;

const DropdownMenu = () => null;

const Logo = () => {
    return <Link to="/">
        <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} />
    </Link>
};
