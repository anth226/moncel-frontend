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
    { text: "Security Policy", href: "/legal/security" },
    { text: "Complaints Policy", href: "/legal/complaints" },
    { text: "Membership Policy", href: "/legal/membership" },
    { text: "Refund Policy", href: "/legal/refunds" },
    { text: "Privacy Policy", href: "/legal/privacy" },
    { text: "Terms of Use", href: "/legal/terms" },
];

const GOVERNMENT_PUBLIC_HEALTH_LINKS_1: Array<Link> = [  
    { text: "Health Canada", href: "https://www.canada.ca/en/health-canada.html" },
    { text: "Canadian Food Inspection Agency", href: "https://inspection.canada.ca/eng/1297964599443/1297965645317" },
    { text: "Alberta", href: "https://www.albertahealthservices.ca/" },
    { text: "British Columbia", href: "http://www.bccdc.ca/" },
    { text: "Manitoba", href: "https://www.gov.mb.ca/health/publichealth/index.html" },
    { text: "New Brunswick", href: "https://www2.gnb.ca/content/gnb/en/departments/ocmoh.html" },
    { text: "Newfoundland and Labrador", href: "https://www.gov.nl.ca/hcs/publicenvenvironmental/" },
];

const GOVERNMENT_PUBLIC_HEALTH_LINKS_2: Array<Link> = [  
    { text: "Northwest Territories", href: "https://www.hss.gov.nt.ca/en" },
    { text: "Nova Scota", href: "https://novascotia.ca/dhw/publichealth/" },
    { text: "Nunavut", href: "https://gov.nu.ca/health" },
    { text: "Ontario", href: "https://www.publichealthontario.ca/en/Pages/default.aspx" },
    { text: "Prince Edward Island", href: "https://www.princeedwardisland.ca/en/government" },
    { text: "Québec", href: "https://www.mapaq.gouv.qc.ca/fr/Pages/Accueil.aspx" },
    { text: "Saskatchewan", href: "https://www.saskhealthauthority.ca/Pages/Home.aspx" },
    { text: "Yukon Territory", href: "http://www.hss.gov.yk.ca/" },
    
];

const FooterLink = ({ href, children, className, ...rest }: { children: JSX.Element | JSX.Element[] | string, href: string, className?: string, [ key:string ]: unknown }) => {
    return <a className={`${className} text-md text-white leading-4 max-w-[175px] h-auto no-underline hover:underline`} href={href} {...rest}>{ children }</a>;
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
            <ContactFooter />
        </div>
        {/* <CopyrightFooter /> */}
    </div>;
};

// tablet plus only
const FooterNavigation = () => {
    let linkElements = NAVIGATION_LINKS.reduce((linkElements, link) => {
        linkElements.push(<FooterLink href={link.href} key={`footer-navigation-link-${link.text}`} className="font-semibold whitespace-nowrap mb-1.5">{link.text}</FooterLink>);
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
                    <h4 className="text-white col-span-1 font-semibold">About Us</h4>
                    <h4 className="text-white col-span-1 font-semibold">{`Legal & Policies`}</h4>
                    <h4 className="text-white col-span-2 font-semibold">{`Government & Public Health Information`}</h4>
                </div>

                {/* columns */}

                {/* About us */}
                <div className="col-span-1 flex flex-col gap-2 py-2">
                    { ABOUT_LINKS.map(link => {
                        return <FooterLink href={link.href} className="font-light" key={`about us link ${link.text}`}>{link.text}</FooterLink>
                    })}
                </div>

                {/* Legal */}
                <div className="col-span-1 flex flex-col gap-2 py-2">
                    { LEGAL_POLICY_LINKS.map(link => {
                        return <FooterLink href={link.href} className="font-light" key={`legal link ${link.text}`}>{link.text}</FooterLink>
                    })}
                </div>

                {/* External gov't column 1 */}
                <div className="col-span-1 flex flex-col gap-2 py-2">
                    { GOVERNMENT_PUBLIC_HEALTH_LINKS_1.map(link => {
                        return <FooterLink href={link.href} className="font-light" key={`external government link ${link.text}`}>{link.text}</FooterLink>
                    })}
                </div>

                {/* External gov't column 1 */}
                <div className="col-span-1 flex flex-col gap-2 py-2">
                    { GOVERNMENT_PUBLIC_HEALTH_LINKS_2.map(link => {
                        return <FooterLink href={link.href} className="font-light" key={`external government link ${link.text}`}>{link.text}</FooterLink>
                    })}
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
