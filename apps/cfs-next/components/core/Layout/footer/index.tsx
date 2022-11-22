import ContactFooter from './contact';
import CopyrightFooter from './copyright';

type Link = {
    text: string,
    href: string,
    target?: string;
}

const NAVIGATION_LINKS: Array<Link> = [
    { text: "Food Handler Certification", href: "/courses/food-handler-certification-course" },
    { text: "HACCP Programs", href: "/haccp-programs" },
    { text: "For Business", href: "/business" },
    { text: "Membership", href: "/membership" },
    { text: "Resource Library", href: "https://resources.foodsafety.ca/" },
]

const ABOUT_LINKS: Array<Link> = [
    { text: "Our Mission", href: "/about/our-mission" },
    { text: "FAQs", href: "/faqs" },
    { text: "Media", href: "/media" },
    { text: "Employment", href: "/about/employment" },
    { text: "Student Login", href: "https://my.foodsafety.ca/customer/account/login/" },
    { text: "Business Login", href: "https://my.foodsafety.ca/customer/account/login/" },
    { text: "Member Login", href: "https://resources.foodsafety.ca/user/login" },
    { text: "Contact", href: "/contact" },
];
const LEGAL_POLICY_LINKS: Array<Link> = [
    { text: "Terms of Use", href: "/legal/terms-of-use" },
    { text: "Privacy Policy", href: "/legal/privacy-policy" },
    { text: "Security Policy", href: "/legal/security-policy" },
    { text: "Membership Policy", href: "/legal/membership-policy" },
    { text: "Enrolment Policy", href: "/legal/enrolment-policy" },
    { text: "Payment Policy", href: "/legal/payment-policy" },
];

const GOVERNMENT_PUBLIC_HEALTH_LINKS: Array<Link> = [  
    { text: "NSW Food Authority", href: "http://www.foodauthority.nsw.gov.au/" },
    { text: "NSW Department of Health", href: "https://www.health.nsw.gov.au/" },
    { text: "VIC Department of Health", href: "https://www2.health.vic.gov.au/" },
    { text: "QLD Department of Health", href: "https://www.health.qld.gov.au/" },
    { text: "ACT Department of Health", href: "http://www.health.act.gov.au/" },
    { text: "SA Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "WA Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "TAS Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "NT Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "Food Standards Australia & New Zealand", href: "http://www.foodstandards.gov.au/" },
];

const FooterLink = ({ href, children, ...rest }: { children: JSX.Element | JSX.Element[] | string, href: string, [ key:string ]: unknown }) => {
    return <a className="text-md font-semibold text-white whitespace-nowrap	 leading-4 mb-2 max-w-[175px] h-auto no-underline hover:underline" href={href} {...rest}>{ children }</a>;
};

const MobileFooter = () => {
    return <div className="md:hidden block">
        <CopyrightFooter />
    </div>;
};

const TabletPlusFooter = () => {
    return <div className="hidden md:block bg-clay">
        <div className="padded-section grid grid-cols-3">
            <FooterNavigation />
        </div>
        {/* <ContactFooter />
        <CopyrightFooter /> */}
    </div>;
};

// tablet plus only
const FooterNavigation = () => {
    let linkElements = NAVIGATION_LINKS.reduce((linkElements, link) => {
        linkElements.push(<FooterLink href={link.href} key={`footer-navigation-link-${link.text}`}>{link.text}</FooterLink>);
        linkElements.push(<p className="select-none pb-1">/</p>)
        return linkElements;
    }, [] as Array<JSX.Element>);
    linkElements.pop();
    return <div className="hidden md:block pt-8 pb-7 w-full col-span-2" id="section-footer-navigation">
            {/* navigation */}
            <div className="flex flex-wrap text-white no-underline items-center gap-2 pb-7">
                { linkElements }
            </div>

            <div className="w-full border-silver border-t-[1px]" />

            <div className="grid grid-cols-4 py-7">
                {/* titles */}
                <div className="row-span-1 col-span-4 grid grid-cols-4">
                    <h4 className="text-white col-span-1">About Us</h4>
                    <h4 className="text-white col-span-1">{`Legal & Policies`}</h4>
                    <h4 className="text-white col-span-2">{`Government & Public Health Information`}</h4>
                </div>

                {/* columns */}
                <div className="col-span-1">

                </div>
            </div>
        </div>
    
};

const Footer = () => {
    return <>
        <TabletPlusFooter />
        <MobileFooter />
    </>;
};

export default Footer;
