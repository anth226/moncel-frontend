import NextLink from 'next/link';
import NextImage from 'next/image';

import { Header1, Text, Link } from 'components/core/typography';
import { coursePageOverviewData } from 'components/courses';
import { ContactBackground } from 'components/contact';
import Layout from 'components/core/layout';
import NoSidebarTemplate from 'components/templates/NoSidebarTemplate';
import { NoSidebarTemplateProps } from 'components/templates/types';

import SydneyMap from 'public/contact/map_sydney_original.png';
import MelbourneMap from 'public/contact/map_melbourne_original.png';
import BrisbaneMap from 'public/contact/map_brisbane_original.png';
import { ContactSection } from 'components/contact';

const TemplateData: Omit<NoSidebarTemplateProps, "children"> = {
    ...coursePageOverviewData,
    pathname: "contact",
    displayPathname: "CONTACT US",
    header: <div>
        <Header1 className="text-teal mb-2">Contact Us</Header1>
    </div>,
    subheader: "If you'd like to get in contact with someone at AIFS simply give us a call or send us an email.",
  };

const SidebarSection = () => <div className="flex flex-col gap-8">
    <div className="border border-silver p-3.5">
        <h3 className="text-[14px] !leading-4 pb-4 font-semibold">General Enquiries</h3>
        <Text className="text-[14px] !leading-4">Phone<br/><Link href="tel:1300%20797%20020">1300 797 020</Link></Text>
        <Text className="text-[14px] !leading-4">Email<br/><Link href="mailto:support@foodsafety.com.au">support@foodsafety.com.au</Link></Text>
        <Text className="text-[14px] !leading-4">8.30am - 5.30pm AEST / Mon-Fri</Text>
    </div>
    <div className="border border-silver p-3.5">
        <h3 className="pb-4 font-semibold">New South Wales {`&`} ACT</h3>
        <Text className="text-[14px] !leading-4">Level 26, 44 Market Street<br/>Sydney NSW<br/>AU 2000</Text>
        <Text className="text-[14px] !leading-4">Phone<br/><Link href="tel:02%208315%207059">02 8315 7059</Link></Text>
        <Text className="text-[14px] !leading-4">Email<br/><Link href="mailto:nsw@foodsafety.com.au">nsw@foodsafety.com.au</Link></Text>
        <NextImage src={SydneyMap} layout="responsive"/>
    </div>
    <div className="border border-silver p-3.5">
        <h3 className="pb-4 font-semibold">Victoria</h3>
        <Text className="text-[14px] !leading-4">Level 27, 101 Collins Street<br/>Melbourne VIC<br/>AU 3000</Text>
        <Text className="text-[14px] !leading-4">Phone<br/><Link href="tel:03%208373%207761">03 8373 7761</Link></Text>
        <Text className="text-[14px] !leading-4">Email<br/><Link href="mailto:vic@foodsafety.com.au">vic@foodsafety.com.au</Link></Text>
        <NextImage src={MelbourneMap} layout="responsive"/>
    </div>
    <div className="border border-silver p-3.5">
        <h3 className="pb-4 font-semibold">Queensland</h3>
        <Text className="text-[14px] !leading-4">Level 4, 46 Edward St<br/>Brisbane QLD<br/>AU 4000</Text>
        <Text className="text-[14px] !leading-4">Phone<br/><Link href="tel:07%203073%203954">07 3073 3954</Link></Text>
        <Text className="text-[14px] !leading-4">Email<br/><Link href="mailto:qld@foodsafety.com.au">qld@foodsafety.com.au</Link></Text>
        <NextImage src={BrisbaneMap} layout="responsive"/>
    </div>
    <div className="border border-silver p-3.5 mb-8 lg:mb-0">
        <h3 className="pb-4 font-semibold">Postal Address</h3>
        <Text className="text-[14px] !leading-4">Australian Institute of Food Safety<br/>GPO BOX 436<br/>Brisbane QLD<br/>AU 4001</Text>
    </div>
</div>;

const MainSection = () => <div className="">
    <Text>Select the topic {`you'd`} like help with.</Text>
    <ContactSection/>
    <hr className="border-6 border-sand mt-8 mb-4"/>
    <Text>You can also find answers in our <NextLink href="/faq">Frequently Asked Questions</NextLink> section.</Text>
</div>

const ContactPage = () => {
return <Layout pageTitle='Contact Us | AIFS' metaDescription="If you'd like to get in contact with someone at AIFS simply give us a call or send us an email.">
    <ContactBackground>
        <NoSidebarTemplate {...TemplateData}>
            <div className="col-span-12 md:col-span-3">
                <SidebarSection />
            </div>
            <div className="col-span-12 md:col-span-9">
                <MainSection />
            </div>
        </NoSidebarTemplate>
    </ContactBackground>
</Layout>
}

export default ContactPage;
