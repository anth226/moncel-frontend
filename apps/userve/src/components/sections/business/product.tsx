import React from "react";
import ReactMarkdown from 'react-markdown';
import HubspotContactForm from 'src/components/shared/Form';

import { Section } from 'src/components/core/Section';
import { ProductFormStoryblok } from 'src/storyblok-component-types';

import { Header2 } from 'src/components/core/typography';

const ProductFormSection = (props: ProductFormStoryblok) => {
    return <div id="buslmform" className="bg-cover bg-[url('https://www.userve.com/hubfs/web-assets/usx_business_bg.jpg')]">
        <Section className="grid grid-cols-12">
            <div className="order-first col-span-12 md:col-span-6 mb-10 md:mb-0">
                <Header2><span className="text-white">{props.title}</span></Header2>
                <div className="text-white checklist form"><ReactMarkdown>{props.description}</ReactMarkdown></div>
                <a href={props.url} target={props.target} className="btn btn-invert-white mt-6">{props.button}</a>
            </div>
            <div className="col-span-1"/>
            <div className="order-last col-span-12 md:col-span-5">
                <HubspotContactForm portalId="21498581" formId="769b522c-30a7-42dc-9da5-11ea2d6b0a06" hubId="enq"/>
            </div>
        </Section>
    </div>
}

export default ProductFormSection;

