import ContactFooter from './contact';
import CopyrightFooter from './copyright';

type Link = {
    text: string,
    href: string,
    target?: string;
}
const FOOD_SAFETY_COURSE_LINKS: Array<Link> = [
    { text: "Food Safety Supervisor", href: "/courses/food-safety-supervisor" },
    { text: "Food Handler Course", href: "/courses/food-handler-course" },
    { text: "NSW Recertification", href: "/courses/nsw-recertification" },
    { text: "Food Safety Manager", href: "/courses/food-safety-manager" },
    { text: "Introduction to Food Safety", href: "/courses/introduction-to-food-safety-course" },
];

const PRODUCT_LINKS: Array<Link> = [
    { text: "HACCP Food Safety Plan", href: "/haccp-food-safety-plan-kit" },
    { text: "Membership Plan", href: "/membership/membership-program" },
    { text: "Resource Library", href: "https://resources.foodsafety.com.au/" },
    { text: "Food Safety Decal", href: "/membership/food-safety-decal" },
];

const ABOUT_US_LINKS: Array<Link> = [
    { text: "Our Mission", href: "/about/our-mission" },
    { text: "Media Centre", href: "https://blog.foodsafety.com.au/media" },
    { text: "AIFS in the Community", href: "/about/community" },
    { text: "Employment", href: "/about/employment" },
    { text: "Contact Us", href: "/contact" },
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
    return <a className="text-sm text-mine leading-4 mb-2 last:mb-0 max-w-[175px] h-auto no-underline hover:underline" href={href} {...rest}>{ children }</a>;
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
    return <div className="hidden lg:block w-full bg-teal" id="section-footer-navigation">
        <div className="padded-section pt-8 pb-7 bg-teal flex flex-row justify-between gap-2 text-[1rem] lg:text-md w-full">
            {/* Food safety courses */}
            <div className="flex flex-col text-mine no-underline">
                <p className="font-semibold pb-2">Food Safety Courses</p>
                {FOOD_SAFETY_COURSE_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Food Safety Courses-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Products */}
            <div className="flex flex-col text-mine no-underline">
                <p className="font-semibold pb-2">Products</p>
                {PRODUCT_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Products-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* About Us */}
            <div className="flex flex-col text-mine no-underline">
                <p className="font-semibold pb-2">About Us</p>
                {ABOUT_US_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`About Us-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Legal and policy */}
            <div className="flex flex-col text-mine no-underline">
                <p className="font-semibold pb-2">Legal {"&"} Policy</p>
                {LEGAL_POLICY_LINKS.map(link => {
                    return <FooterLink href={link.href} key={`Legal & Policy-${link.text}`}>{link.text}</FooterLink>;
                })}
            </div>

            {/* Government & public health */}
            <div className="flex flex-col">
            <p className="font-semibold text-mine pb-2">Government {"&"} Public Health Information</p>
                <div className="grid grid-cols-2 grid-flow-row gap-x-6  text-mine no-underline items-start">
                    { GOVERNMENT_PUBLIC_HEALTH_LINKS.map(link => {
                        return <FooterLink href={link.href} key={`Government & Public Health-${link.text}`} target="_blank">{link.text}</FooterLink>;
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
