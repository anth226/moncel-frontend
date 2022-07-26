import React from "react";
import ReactMarkdown from 'react-markdown';
import HubspotContactForm from 'src/components/shared/Form';

import { Section, SectionFullWidth } from 'src/components/core/Section';
import { ProductFormStoryblok } from 'src/storyblok-component-types';

import { Header3 } from 'src/components/core/typography';

const ProductFormSection = (props: ProductFormStoryblok) => {
    return <SectionFullWidth>
                <div id="buslmform" className="bg-cover bg-[url('src/images/usx_business_bg.jpg')]">
                    <Section className="grid grid-cols-12">
                        <div className="order-first col-span-12 md:col-span-6 mb-10 md:mb-0">
                            <Header3><span className="text-white">{props.title}</span></Header3>
                            <div className="text-white checklist form mb-2 md:mb-0"><ReactMarkdown>{props.description}</ReactMarkdown></div>
                            <a href={props.url} target={props.target} className="btn btn-invert-white mt-6">{props.button}</a>
                        </div>
                        <div className="col-span-1"/>
                        <div className="order-last col-span-12 md:col-span-5">
                            <HubspotContactForm portalId="21498581" formId="3d517e57-c03c-499c-9763-52e1bba23c52" hubId="enq" />
                        </div>
                    </Section>
                </div>
            </SectionFullWidth>
}

export default ProductFormSection;

