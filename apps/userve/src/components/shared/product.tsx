import React from "react";
import ReactMarkdown from 'react-markdown';
import HubspotContactForm from 'src/components/shared/Form';

import { Section } from 'src/components/core/Section';
import { ProductFormStoryblok } from 'src/storyblok-component-types';

import { Header2 } from 'src/components/shared/typography';

const ProductFormSection = (props: ProductFormStoryblok) => {
    { console.log(props) }
    return <div id="buslmform" className="bg-cover bg-[url('https://www.userve.com/hubfs/web-assets/usx_business_bg.jpg')]">
        <Section className="grid grid-cols-12">
            <div className="order-first col-span-6">
                <Header2><span className="text-white">{props.title}</span></Header2>
                <div className="text-white checklist form"><ReactMarkdown>{props.description}</ReactMarkdown></div>
                <a className="btn btn-invert btn-light mt-6">{props.button}</a>
            </div>

            <div className="order-last col-span-5 col-end-13">
                <HubspotContactForm/>
            </div>
        </Section>
    </div>
}

export default ProductFormSection;

