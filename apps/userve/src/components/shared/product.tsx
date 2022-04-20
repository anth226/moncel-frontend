import React from "react";
import ReactMarkdown from 'react-markdown';
import HubspotContactForm from 'src/components/shared/Form';

import { Section } from 'src/components/core/Section';
import { ProductFormStoryblok } from 'src/storyblok-component-types';


const ProductFormSection = (props: ProductFormStoryblok) => {
    { console.log(props) }
    return <div id="buslmform" className="bg-cover bg-[url('https://www.userve.com/hubfs/web-assets/usx_business_bg.jpg')]">
        <Section className="grid grid-cols-12">
            <div className="order-first col-span-6">
                <h2 className="text-3xl font-bold text-white mb-6">{props.title}</h2>
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

