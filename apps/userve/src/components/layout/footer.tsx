import React from 'react';
import { useMediaQuery } from 'react-responsive';
import { Link, ExternalLink } from "src/components/core";
import { StaticImage } from "gatsby-plugin-image";
import TWElements from 'src/components/shared/TWElements';
import { BREAKPOINTS } from 'src/lib';
import { Header5 } from 'src/components/core/typography';

import Phone from "src/components/icons/phone";

const MobileFooter = () => {
    return <div className="w-full m-auto flex flex-col px-4">
        <div className="flex justify-between">
            <Link to="/us">
                <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} className="mb-6" />
            </Link>
            <Social />
        </div>
        <Phone className="mb-6" />
        
        <Header5>Solutions</Header5>

        <div className="grid grid-cols-2 grid-flow-row gap-2 w-full text-md text-lynch">
            <Link to="/us/courses">Courses</Link>
            <Link to="/us/business/accounts">Business</Link>
            <Link to="/us/resources/blog">Resources</Link>
            <Link to="/us/about/about-us">About Us</Link>
            <ExternalLink to="https://help.userve.com/knowledge">Help Center</ExternalLink>
            <Link to="/us/about/contact-us">Contact</Link>
        </div>

        <Header5 className="mt-6">Legal</Header5>

        <div className="grid grid-cols-2 grid-flow-row gap-2 w-full text-md text-lynch">
            <Link to="/us/legal/cookie-policy">Cookie Policy</Link>
            <Link to="/us/legal/terms-of-use">Terms of Use</Link>
            <Link to="/us/legal/refund-policy">Refund Policy</Link>
            <Link to="/us/legal/privacy-policy">Privacy Policy</Link>
        </div>

        <div className="w-full mx-auto text-center my-6 text-lynch border-t-1 pt-6 border-mischka text-xs" >Copyright {(new Date().getFullYear())} © Userve Inc. All rights reserved.</div>
        <TWElements/>
    </div>
};

const Footer = () => {

    const isMobile = useMediaQuery({ query: `(max-width: ${BREAKPOINTS.md}px)` });
    if(isMobile) {
        return <MobileFooter />
    }
    return <div className="footer bg-athens py-12 lg:py-16 px-4">
        <div className="lg:max-w-6xl lg:mx-auto grid grid-cols-3 grid-flow-row border-b-1 border-mischka pb-8 mb-8">
            <div className="col-span-1 flex-col items-start text-navy font-normal">
                <Link to="/us">
                    <StaticImage src="../../images/usx-logo-solid.svg" alt="Userve" width={100} className="mb-6" />
                </Link>
                <Phone className="mb-6" />
                <Social />
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2 text-md text-lynch">
                    <div className="col-span-4">
                        <h5 className="text-bluewood font-semibold text-md">SOLUTIONS</h5>
                    </div>
                    <Link to="/us/courses">Courses</Link>
                    <Link to="/us/business/accounts">Business</Link>
                    <Link to="/us/resources/blog">Resources</Link>
                    <Link to="/us/about/about-us">About Us</Link>
                    <ExternalLink to="https://help.userve.com/knowledge">Help Center</ExternalLink>
                    <Link to="/us/about/contact-us">Contact</Link>
                    
                </div>
            </div>
            <div className="col-start-2 col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2 text-md text-lynch">
                    <div className="col-span-4">
                        <h5 className="text-bluewood font-semibold text-md">LEGAL</h5>
                    </div>
                    <Link to="/us/legal/cookie-policy">Cookie Policy</Link>
                    <Link to="/us/legal/terms-of-use">Terms of Use</Link>
                    <Link to="/us/legal/refund-policy">Refund Policy</Link>
                    <Link to="/us/legal/privacy-policy">Privacy Policy</Link>
                </div>
            </div>
        </div>
        <div className="max-w-6xl m-auto text-center text-lynch">Copyright {(new Date().getFullYear())} © Userve Inc. All rights reserved.</div>
        <TWElements/>
    </div>;
}

const Social = () => {
    return <div className="flex gap-x-2">
        <ExternalLink to="https://twitter.com/UserveInc"><StaticImage src="../../images/usx_social_tw.svg" alt="Userve on Twitter" width={18} className="mr-1" /></ExternalLink>
        <ExternalLink to="https://www.facebook.com/Userve-100597588758651/"><StaticImage src="../../images/usx_social_fb.svg" alt="Userve on Facebook" width={18} className="mr-1" /></ExternalLink>
        <ExternalLink to="https://www.linkedin.com/company/userve-inc/"><StaticImage src="../../images/usx_social_li.svg" alt="Userve on Linkedin" width={18} /></ExternalLink>
    </div>
}

export default Footer;
