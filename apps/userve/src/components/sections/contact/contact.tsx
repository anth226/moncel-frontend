import { useLocation } from '@reach/router';
import React, { useState } from 'react';
import ReactMarkdown from 'react-markdown';
import { graphql, useStaticQuery } from 'gatsby';

import { ContactStoryblok } from 'src/storyblok-component-types';
import { Header1, Header5, Text } from 'src/components/core/typography';
import { HubspotContactForm, FormspreeSupportForm } from 'src/components/shared/Form';


import { DynamicImage} from 'src/lib/images';

interface ReactProps {
    target?: string;
    id?: string;
    title?: string;
    className?: string;
}

enum ContactFormTabIds {
    INDIVIDUAL="#tabs-individual",
    BUSINESS="#tabs-business",
    SUPPORT="#tabs-support",
    GENERAL="#tabs-general",
}

const ContactSection = (props: ContactStoryblok) => {
    const imageData = useStaticQuery(imageQuery);
    const location = useLocation();
    const isClient = typeof window !== "undefined";
    const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

    const MobileMenuItem = (props:ReactProps) => {
        return <li className={`nav-item ${props.className}`} role="presentation">
            <a href={`#${props.target}`} className="nav-link bg-white hover:bg-white py-2 px-4 block whitespace-no-wrap hover:no-underline" id={`tabs-${props.id}-tabFill`} data-bs-toggle="pill" data-bs-target={`#${props.target}`}role="tab" aria-controls={props.target} aria-selected="false" onClick={() => setMobileMenuOpen(false)}>{props.title}</a>
        </li>;
    };
    return <>
        <div className="col-span-12 md:col-span-4 md:mr-10 lg:mr-20">
            <div>
                <div className="flex flex-col">
                    <Header1 className="!text-4xl">{props.title || ""}</Header1>
                    <Text>{props.desc || ""}</Text>
                    <div className="flex-row gap-4 items-start mb-4 hidden md:flex">
                        <DynamicImage fileNode={imageData.phone.nodes[0]} alt="Phone" width={20} height={20} loading="lazy"/>
                        <div>
                            <ReactMarkdown>{props.phone || ""}</ReactMarkdown>
                        </div>
                    </div>
                    <div className="flex-row gap-4 items-start mb-4 hidden md:flex">
                        <DynamicImage fileNode={imageData.hours.nodes[0]} alt="Hours" width={20} height={20} loading="lazy"/>
                        <div>
                            <ReactMarkdown>{props.hours || ""}</ReactMarkdown>
                        </div>
                    </div>
                    <div className="flex-row gap-4 items-start mb-6 hidden md:flex">
                        <DynamicImage fileNode={imageData.address.nodes[0]} alt="Address" width={18} height={18} loading="lazy"/>
                        <div>
                            <ReactMarkdown>{props.address || ""}</ReactMarkdown>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-8 col-end-13">
            { !isClient ? null : <ul className="hidden md:grid nav nav-tabs mb-8 gap-7 grid-cols-12" id="tabs-tabFill"
                role="tablist">
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href={ContactFormTabIds.INDIVIDUAL} className={`nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start ${!location.hash || location.hash === ContactFormTabIds.INDIVIDUAL ? "active" : ""}`} id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target={ContactFormTabIds.INDIVIDUAL} role="tab"
                        aria-controls="tabs-individual" aria-selected={!location.hash || location.hash === ContactFormTabIds.INDIVIDUAL}>Individual Enrollment
                         <DynamicImage fileNode={imageData.profile.nodes[0]} alt="Individual Enrollment" width={50} height={50} loading="lazy" className="mt-4 w-[50px] h-[50px] mx-auto"/>
                    </a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href={ContactFormTabIds.BUSINESS} className={`nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start ${location.hash === ContactFormTabIds.BUSINESS ? "active" : ""}`} id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target={ContactFormTabIds.BUSINESS} role="tab"
                        aria-controls="tabs-business" aria-selected={location.hash === ContactFormTabIds.BUSINESS}>Business Accounts
                         <DynamicImage fileNode={imageData.store.nodes[0]} alt="Business Accounts" width={50} height={50} loading="lazy" className="mt-4 w-[50px] h-[50px] mx-auto"/>
                    </a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href={ContactFormTabIds.SUPPORT} className={`nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start ${location.hash === ContactFormTabIds.SUPPORT ? "active" : ""}`} id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target={ContactFormTabIds.SUPPORT} role="tab"
                        aria-controls="tabs-support" aria-selected={location.hash === ContactFormTabIds.SUPPORT}>Student Support
                         <DynamicImage fileNode={imageData.support.nodes[0]} alt="Student Support" width={50} height={50} loading="lazy" className="mt-4 w-[50px] h-[50px] mx-auto"/>
                    </a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href={ContactFormTabIds.GENERAL} className={`nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start ${location.hash === ContactFormTabIds.GENERAL ? "active" : ""}`} id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target={ContactFormTabIds.GENERAL} role="tab"
                        aria-controls="tabs-general" aria-selected={location.hash === ContactFormTabIds.GENERAL}><div>General</div>
                         <DynamicImage fileNode={imageData.chat.nodes[0]} alt="General" width={50} height={50} loading="lazy" className="mt-4 w-[50px] h-[50px] mx-auto"/>
                    </a>
                </li>
            </ul> }

            <div className="block md:hidden">
                <Header5>How Can We Help You?</Header5>
                <div className="group block relative mb-6">
                    <button className="w-full bg-white border-1 border-bluewood text-bluewood font-semibold py-2 px-4 rounded flex justify-between items-center" onClick={() => setMobileMenuOpen(true)}>
                    <span className="mr-1">Select A Form</span>
                    <svg className="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
                        <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />
                    </svg>
                    </button>
                    {isMobileMenuOpen && (
                        <ul className="nav nav-tabs absolute hidden text-bluewood pt-1 group-hover:block z-40 border-1 w-full" id="tabs-tabFill" role="tablist">
                            <MobileMenuItem target="tabs-individual" id="mobile-menu-link-individual" title="Individual Enrollment" className="border-b"/>
                            <MobileMenuItem target="tabs-business" id="mobile-menu-link-accounts" title="Business Accounts" className="border-b"/>
                            <MobileMenuItem target="tabs-support" id="mobile-menu-link-support" title="Student Support" className="border-b"/>
                            <MobileMenuItem target="tabs-general" id="mobile-menu-link-general" title="General"/>
                        </ul>
                    )}  
                </div>
            </div>
            { !isClient ? null : <div className="tab-content" id="tabs-tabContentFill">
                <div className={`tab-pane fade ${!location.hash || location.hash === ContactFormTabIds.INDIVIDUAL ? "show active" : ""}`} id="tabs-individual" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                    <HubspotContactForm portalId="21498581" formId="ce0ce7ff-c3fe-4ba5-b756-a851de2e5cb7" hubId="ind" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
                <div className={`tab-pane fade ${location.hash === ContactFormTabIds.BUSINESS ? "show active" : ""}`} id="tabs-business" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <HubspotContactForm portalId="21498581" formId="d9990f75-9696-45f7-a914-53127b508254" hubId="bus" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
                <div className={`tab-pane fade ${location.hash === ContactFormTabIds.SUPPORT ? "show active" : ""}`} id="tabs-support" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <FormspreeSupportForm className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg"/>
                </div>
                <div className={`tab-pane fade ${location.hash === ContactFormTabIds.GENERAL ? "show active" : ""}`} id="tabs-general" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <HubspotContactForm portalId="21498581" formId="38cfb103-d6e5-4248-90f1-df9a1a90210d" hubId="gen" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
            </div> }
        </div>
        <div className="col-span-12 block md:hidden mt-10">
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 items-start mb-6">
                    <DynamicImage fileNode={imageData.phone.nodes[0]} alt="Phone" width={20} height={20} loading="lazy"/>
                    <div>
                        <ReactMarkdown>{props.phone || ""}</ReactMarkdown>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-start mb-6">
                    <DynamicImage fileNode={imageData.hours.nodes[0]} alt="Hours" width={20} height={20} loading="lazy"/>
                    <div>
                        <ReactMarkdown>{props.hours || ""}</ReactMarkdown>
                    </div>
                </div>
                <div className="flex flex-row gap-4 items-start">
                    <DynamicImage fileNode={imageData.address.nodes[0]} alt="Address" width={18} height={18} loading="lazy"/>
                    <div>
                        <ReactMarkdown>{props.address || ""}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
    </>
}

export default ContactSection;

// optimized images
const imageQuery = graphql`
query {
    phone:allFile(filter: { name: { eq: "usx-phone" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    hours:allFile(filter: { name: { eq: "usx_time" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    address:allFile(filter: { name: { eq: "usx_location" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    profile:allFile(filter: { name: { eq: "usx_lg_profile" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    store:allFile(filter: { name: { eq: "usx_lg_store" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    support:allFile(filter: { name: { eq: "usx_lg_support-male" }}) {
        nodes {
            name
            publicURL
            childImageSharp {
                gatsbyImageData
            }
        }
    }
    chat:allFile(filter: { name: { eq: "usx_lg_chat" }}) {
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