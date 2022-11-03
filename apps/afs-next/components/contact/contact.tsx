import { useState } from 'react';

import IconChat from 'public/icons/icon_chat.svg';
import IconHeadphones from 'public/icons/icon_headphones.svg';
import IconMyself from 'public/icons/icon_myself.svg';
import IconPeople from 'public/icons/icon_people.svg';

import Tabs from 'components/core/ContactTabs';
import { Section } from 'components/core/Section';
import { FormspreeSupportForm, HubspotContactForm }from 'components/core/Forms';

const tabnames = [
    { title: "Enrolling Yourself", icon: IconMyself }, 
    { title: "Enrolling Staff", icon: IconPeople }, 
    { title: "Student Support", icon: IconHeadphones }, 
    { title: "General Enquiry", icon: IconChat }
];

const ContactSection = () => {
    const [activeTab, setActiveTab] = useState(0);
    return <>
        <Section>
            <Tabs tabNames={tabnames} activeTab={activeTab} handleTabClick={setActiveTab} />
        </Section>
        <Section>
            <div className="w-full">
                {/* Dynamic section displays selected tab */}
                <div className={`flex flex-col`}>
                    {(activeTab === 0) ? <HubspotContactForm portalId="21498581" formId="1e766965-8443-4c11-93e3-d91c17543aa8" hubId="ind" className="p-0 md:p-6 border border-teal" title="Enrolling Yourself" /> : null}

                    {(activeTab === 1) ? <HubspotContactForm portalId="21498581" formId="c19c64ca-a0d3-4915-859a-a5a210294127" hubId="bus" className="p-0 md:p-6 border border-teal" title="Enrolling Staff" /> : null}

                    {(activeTab === 2) ? <FormspreeSupportForm className="p-0 md:p-6 border border-teal" title="Student Support"/> : null}

                    {(activeTab === 3) ? <HubspotContactForm portalId="21498581" formId="f70fdab1-12ff-4386-8297-770649b09f6f" hubId="gen" className="p-0 md:p-6 border border-teal" title="General Enquiry" /> : null}
                </div>
            </div>
        </Section>
    </>;
};

export default ContactSection;
