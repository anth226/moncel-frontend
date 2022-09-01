import ContactFooter from './contact';
import CopyrightFooter from './copyright';

type Link = {
    text: string,
    href: string,
}
const FOOD_SAFETY_COURSE_LINKS: Array<Link> = [
    { text: "Food Safety Supervisor", href: "" },
    { text: "Food Handler Course", href: "" },
    { text: "NSW Recertification", href: "" },
    { text: "Food Safety Manager", href: "" },
    { text: "Introduction to Food Safety", href: "" },
];

const PRODUCT_LINKS: Array<Link> = [
    { text: "HACCP Food Safety Plan", href: "" },
    { text: "Membership Plan", href: "" },
    { text: "Resource Library", href: "" },
    { text: "Food Safety Decal", href: "" },
];

const ABOUT_US_LINKS: Array<Link> = [
    { text: "Our Mission", href: "" },
    { text: "Media Centre", href: "" },
    { text: "AIFS in the Community", href: "" },
    { text: "Employment", href: "" },
    { text: "Contact Us", href: "" },
];

const LEGAL_POLICY_LINKS: Array<Link> = [
    { text: "Terms of Use", href: "" },
    { text: "Privacy Policy", href: "" },
    { text: "Security Policy", href: "" },
    { text: "Employment Policy", href: "" },
    { text: "Enrolment Policy", href: "" },
    { text: "Payment Policy", href: "" },
];

const GOVERNMENT_PUBLIC_HEALTH_LINKS: Array<Link> = [
    { text: "Food Standards Australia & New Zealand", href: "http://www.foodstandards.gov.au/" },
    { text: "NSW Food Authority", href: "http://www.foodauthority.nsw.gov.au/" },
    { text: "NSW Department of Health", href: "https://www.health.nsw.gov.au/" },
    { text: "VIC Department of Health", href: "https://www2.health.vic.gov.au/" },
    { text: "QLD Department of Health", href: "https://www.health.qld.gov.au/" },
    { text: "ACT Department of Health", href: "http://www.health.act.gov.au/" },
    { text: "SA Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "WA Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "TAS Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
    { text: "NT Department of Health", href: "https://www.sahealth.sa.gov.au/wps/wcm/connect/Public+Content/SA+Health+Internet/" },
];

const FooterLink = ({ href, children, ...rest }: { children: JSX.Element | JSX.Element[] | string, href: string }) => {
    return <a className="text-xs max-w-[175px] h-auto" href={href} {...rest}>{ children }</a>;
};

const MobileFooter = () => {
    return <div className="md:hidden block">
        <CopyrightFooter />
    </div>;
};

const TabletPlusFooter = () => {
    return <div className="hidden md:block">
        <FooterNavigation />
        <ContactFooter />
        <CopyrightFooter />
    </div>;
};

const FooterNavigation = () => {
    return <div className="hidden lg:block w-screen bg-afs-green" id="section-footer-navigation">
        <div className="padded-section py-8 bg-afs-green flex flex-row justify-center gap-20 text-[1em] lg:text-xs">
            {/* Food safety courses */}
            <div className="flex flex-col text-white no-underline gap-y-2">
                <p className="font-bold pb-1">Food Safety Courses</p>
                {FOOD_SAFETY_COURSE_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Food Safety Courses-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Products */}
            <div className="flex flex-col text-white no-underline gap-y-2">
                <p className="font-bold pb-1">Products</p>
                {PRODUCT_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Products-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* About Us */}
            <div className="flex flex-col text-white no-underline gap-y-2">
                <p className="font-bold pb-1">About Us</p>
                {ABOUT_US_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`About Us-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Legal and policy */}
            <div className="flex flex-col text-white no-underline gap-y-2">
                <p className="font-bold pb-1">Legal {"&"} Policy</p>
                {LEGAL_POLICY_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Legal & Policy-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Government & public health */}
            <div className="flex flex-col">
                <p className="font-bold text-white pb-1">Government {"&"} Public Health Information</p>
                <div className="grid grid-cols-2 grid-flow-row gap-x-10 gap-y-2 text-white no-underline items-start">
                    { GOVERNMENT_PUBLIC_HEALTH_LINKS.map(link => {
                        return <FooterLink href={link.href} key={`Government & Public Health-${link.text}`}>{link.text}</FooterLink>;
                    })}
                </div>
            </div>
        </div>
    </div>;
};

const Footer = () => {
    return <>
        <TabletPlusFooter />
        <MobileFooter />
    </>;
};

export default Footer;
