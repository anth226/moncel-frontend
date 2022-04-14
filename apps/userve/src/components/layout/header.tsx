import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import { Link } from "src/components/core";
import Phone from "src/components/icons/phone";

const Header = () => {
    return <nav className="flex justify-between max-w-6xl m-auto py-6 lg:py-8 border-b-2 border-slate-200">
        {/* Desktop+ menu */}
        <div className="hidden lg:flex items-center">
            <Link to="/us">
                <StaticImage src="../../images/usx-logo-solid.svg" alt="usx logo" width={200} />
            </Link>
            <div className="flex gap-8 ml-8 text-slate-700 font-semibold text-xl">
                <Link to="/us/courses">Courses</Link>
                <Link to="/us/business">Business</Link>
                <Link to="/us/resources">Resources</Link>
                <Link to="/us/about-us">About Us</Link>
                <Link to="/us/knowledge">Help Center</Link>
            </div>
        </div>

        <Phone />
    </nav>;
}

export default Header;

const HamburgerMenu = () => <div className="inline-flex items-center justify-center p2 rounded-md" aria-controls="mobile-menu" aria-expanded="false">
    <svg className="block h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
        <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
    </svg>


</div>;

const DropdownMenu = () => null;

