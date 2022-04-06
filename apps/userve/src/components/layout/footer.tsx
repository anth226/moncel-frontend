import React from 'react';
import { Link, ExternalLink } from "src/components/core";
import { StaticImage } from "gatsby-plugin-image";

import Phone from "src/components/icons/phone";

const Footer = () => {

    return <div className="bg-slate-100 py-12 lg:py-14 p-x-2">
        <div className="max-w-6xl m-auto grid grid-cols-3 grid-flow-row">
            <div className="col-span-1 flex-col items-start text-ink-blue text-lg">
                <Link to="/us">
                    <StaticImage src="../../images/usx-logo-solid.svg" alt="usx logo" width={200} />
                </Link>
                <Phone className="py-4" />
                <Social />
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2">
                    <div className="col-span-4">
                        <h1 className="text-slate-700 font-semibold text-xl">SOLUTIONS</h1>
                    </div>

                    <Link to="/us/courses">Courses</Link>
                    <Link to="/us/business/accounts">Businesses</Link>
                    <Link to="/us/resources/blog">Resources</Link>
                    <Link to="/us/about/about-us">About Us</Link>
                    <Link to="/knowledge">Help Center</Link>
                    <Link to="/us/about/contact-us">Contact</Link>

                </div>
            </div>
            <div className="col-start-2 col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2">
                    <div className="col-span-4">
                        <h1 className="text-slate-700 font-semibold text-xl">LEGAL</h1>
                    </div>

                    <Link to="/us/legal/cookie-policy">Cookie policy</Link>
                    <Link to="/us/legal/terms-of-use">Terms of Use</Link>
                    <Link to="/us/legal/refund-policy">Refund Policy</Link>
                    <Link to="/us/legal/privacy-policy">Privacy Policy</Link>

                </div>
            </div>
        </div>

        <div className="max-w-6xl"></div>
    </div>;
}

const Social = () => {
    return <div className="flex gap-x-2">
        <ExternalLink to="https://twitter.com/UserveInc"><StaticImage src="../../images/usx_social_tw.svg" alt="usx twitter" /></ExternalLink>
        <ExternalLink to="https://www.facebook.com/Userve-100597588758651/"><StaticImage src="../../images/usx_social_fb.svg" alt="usx facebook" /></ExternalLink>
        <ExternalLink to="https://www.linkedin.com/company/userve-inc/"><StaticImage src="../../images/usx_social_li.svg" alt="usx linkedin" /></ExternalLink>
    </div>
}

export default Footer;
