import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import { Link, ExternalLink } from "src/components/core";
import TWElements from 'src/components/shared/TWElements';

import { Header5 } from 'src/components/core/typography';

import Phone from "src/components/icons/phone";

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
        twitter:allFile(filter: { name: { eq: "usx_social_tw" }}) {
            nodes {
                name
                publicURL
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        facebook:allFile(filter: { name: { eq: "usx_social_fb" }}) {
            nodes {
                name
                publicURL
                childImageSharp {
                    gatsbyImageData
                }
            }
        }
        linkedin:allFile(filter: { name: { eq: "usx_social_li" }}) {
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

const MobileFooter = () => {
    const imageData = useStaticQuery(imageQuery);
    return <div className="md:hidden w-full m-auto flex flex-col px-4 pt-12">
        <div className="flex justify-between">
            <Link to="/us">
                <img src={imageData.logo.nodes[0].publicURL} alt="Userve" width={100} height={33} className="mb-6" />
            </Link>
            <Social />
        </div>
        
        <Phone className="mb-6" />
        <Header5>Solutions</Header5>

        <div className="grid grid-cols-2 grid-flow-row gap-2 w-full text-md text-lynch">
            <Link to="/us/courses">Courses</Link>
            <Link to="/us/business/accounts">Business</Link>
            <ExternalLink to="https://blog.userve.com/us">Blog</ExternalLink>
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

const DesktopFooter = () => {
    const imageData = useStaticQuery(imageQuery);
    return <div className="hidden md:block footer bg-athens py-12 lg:py-16 px-4">
        <div className="lg:max-w-6xl lg:mx-auto grid grid-cols-3 grid-flow-row border-b-1 border-mischka pb-8 mb-8">
            <div className="col-span-1 flex-col items-start text-navy font-normal">
                <Link to="/us">
                    <img src={imageData.logo.nodes[0].publicURL} alt="Userve" width={100} height={33} className="mb-6" loading="lazy"/>
                </Link>
                <Phone className="mb-6" />
                <Social />
            </div>
            <div className="col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2 text-md text-lynch">
                    <div className="col-span-4">
                        <h5 className="text-bluewood font-semibold text-[14.4px] tracking-[1px]">SOLUTIONS</h5>
                    </div>
                    <Link to="/us/courses">Courses</Link>
                    <Link to="/us/business/accounts">Business</Link>
                    <ExternalLink to="https://blog.userve.com/us">Blog</ExternalLink>
                    <Link to="/us/about/about-us">About Us</Link>
                    <ExternalLink to="https://help.userve.com/knowledge">Help Center</ExternalLink>
                    <Link to="/us/about/contact-us">Contact</Link>
                    
                </div>
            </div>
            <div className="col-start-2 col-span-2">
                <div className="grid grid-cols-4 grid-flow-row gap-2 text-md text-lynch">
                    <div className="col-span-4">
                        <h5 className="text-bluewood font-semibold text-[14.4px] tracking-[1px]">LEGAL</h5>
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
    const imageData = useStaticQuery(imageQuery);
    return <div className="flex flex-row gap-x-2">
        <a href="https://twitter.com/UserveInc" target="_blank"><img src={imageData.twitter.nodes[0].publicURL} alt="Userve on Twitter" width={18} height={18} className="mr-1" loading="lazy"/></a>
        <a href="https://www.facebook.com/Userve-100597588758651/" target="_blank"><img src={imageData.facebook.nodes[0].publicURL} alt="Userve on Facebook" width={18} height={18} className="mr-1" loading="lazy"/></a>
        <a href="https://www.linkedin.com/company/userve-inc/" target="_blank"><img src={imageData.linkedin.nodes[0].publicURL} alt="Userve on Linkedin" width={18} height={18} loading="lazy"/></a>
    </div>
}

export default () => {
    return <>
        <DesktopFooter />
        <MobileFooter />
    </>
};
