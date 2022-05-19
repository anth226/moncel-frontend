import React from "react";
import ReactMarkdown from 'react-markdown';

import { ContactStoryblok } from 'src/storyblok-component-types';
import { Header1, Text } from 'src/components/core/typography';
import HubspotContactForm from 'src/components/shared/Form';

const ContactSection = (props: ContactStoryblok) => {
    return <>
        <div className="col-span-12 md:col-span-4 lg:col-span-3">
            <div>
                <div className="flex flex-col">
                    <Header1 className="!text-4xl">{props.title}</Header1>
                    <Text>{props.desc}</Text>
                    <div className="flex-row gap-4 items-start mb-4 hidden md:flex">
                        <img src="https://a.storyblok.com/f/153125/x/88f0e6aae4/usx-phone.svg" width={20} height={20} alt="Phone" />
                        <ReactMarkdown>{props.phone}</ReactMarkdown>
                    </div>
                    <div className="flex-row gap-4 items-start mb-4 hidden md:flex">
                        <img src="https://a.storyblok.com/f/153125/x/2f9f4a631b/usx_time.svg" width={20} height={20} alt="Hours" />
                        <ReactMarkdown>{props.hours}</ReactMarkdown>
                    </div>
                    <div className="flex-row gap-4 items-start hidden md:flex">
                        <img src="https://a.storyblok.com/f/153125/x/4b4d8faad8/usx_location.svg" width={20} height={20} alt="Address" />
                        <ReactMarkdown>{props.address}</ReactMarkdown>
                    </div>
                </div>
            </div>
        </div>
        <div className="col-span-12 md:col-span-8 lg:col-span-9 col-end-13">
            <ul className="nav nav-tabs mb-8 gap-8 grid grid-cols-12" id="tabs-tabFill"
                role="tablist">
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href="#tabs-individual" className="nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start active" id="tabs-home-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-individual" role="tab"
                        aria-controls="tabs-individual" aria-selected="true">Individual Enrollment
                        <img src="https://a.storyblok.com/f/153125/x/a5f3d43234/usx_lg_profile.svg" className="mt-4 w-[50px] mx-auto" alt="Individual Enrollment"></img>
                    </a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href="#tabs-business" className="nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start" id="tabs-profile-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-business" role="tab"
                        aria-controls="tabs-business" aria-selected="false">Business Enrollment
                        <img src="https://a.storyblok.com/f/153125/x/448802eb43/usx_lg_store.svg" className="mt-4 w-[50px] mx-auto" alt="Business Enrollment"></img></a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href="#tabs-support" className="nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start" id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-support" role="tab"
                        aria-controls="tabs-support" aria-selected="false">Student Support
                        <img src="https://a.storyblok.com/f/153125/x/06f817bd4c/usx_lg_support-male.svg" className="mt-4 w-[50px] mx-auto" alt="Student Support"></img></a>
                </li>
                <li className="nav-item col-span-6 lg:col-span-3 text-center h-full" role="presentation">
                    <a href="#tabs-general" className="nav-link w-full font-bold text-bluewood bg-white p-6 rounded-lg normal-case h-full hover:no-underline hover:bg-navy hover:bg-opacity-10 !shadow-md flex flex-col justify-start" id="tabs-messages-tabFill" data-bs-toggle="pill" data-bs-target="#tabs-general" role="tab"
                        aria-controls="tabs-general" aria-selected="false"><div>General</div>
                        <img src="https://a.storyblok.com/f/153125/x/d00700cb55/usx_lg_chat.svg" className="mt-4 w-[50px] mx-auto" alt="General"></img></a>
                </li>
            </ul>
            <div className="tab-content" id="tabs-tabContentFill">
                <div className="tab-pane fade show active" id="tabs-individual" role="tabpanel" aria-labelledby="tabs-home-tabFill">
                    <HubspotContactForm portalId="21498581" formId="ce0ce7ff-c3fe-4ba5-b756-a851de2e5cb7" hubId="ind" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
                <div className="tab-pane fade" id="tabs-business" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <HubspotContactForm portalId="21498581" formId="d9990f75-9696-45f7-a914-53127b508254" hubId="bus" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
                <div className="tab-pane fade" id="tabs-support" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <HubspotContactForm portalId="21498581" formId="2821dfb1-e4b4-4267-81dd-a6691ab71671" hubId="sup" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
                <div className="tab-pane fade" id="tabs-general" role="tabpanel" aria-labelledby="tabs-profile-tabFill">
                    <HubspotContactForm portalId="21498581" formId="38cfb103-d6e5-4248-90f1-df9a1a90210d" hubId="gen" className="p-0 md:p-8 bg-transparent !shadow-none md:bg-white md:!shadow-lg" />
                </div>
            </div>
        </div>
        <div className="col-span-12 block md:hidden mt-10">
            <div className="flex flex-col">
                <div className="flex flex-row gap-4 items-start mb-6">
                    <img src="https://a.storyblok.com/f/153125/x/88f0e6aae4/usx-phone.svg" width={20} height={20} alt={props.phone} />
                    <ReactMarkdown>{props.phone}</ReactMarkdown>
                </div>
                <div className="flex flex-row gap-4 items-start mb-6">
                    <img src="https://a.storyblok.com/f/153125/x/2f9f4a631b/usx_time.svg" width={20} height={20} alt={props.hours} />
                    <ReactMarkdown>{props.hours}</ReactMarkdown>
                </div>
                <div className="flex flex-row gap-4 items-start">
                    <img src="https://a.storyblok.com/f/153125/x/4b4d8faad8/usx_location.svg" width={20} height={20} alt={props.address} />
                    <ReactMarkdown>{props.address}</ReactMarkdown>
                </div>
            </div>
        </div>
    </>
}

export default ContactSection;