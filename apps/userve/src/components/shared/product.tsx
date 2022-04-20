import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { ProductFormStoryblok } from 'src/storyblok-component-types';

const ProductFormSection = (props: ProductFormStoryblok) => {
    { console.log(props) }
    return <div className="bg-cover bg-[url('https://www.userve.com/hubfs/web-assets/usx_business_bg.jpg')]">
        <Section className="grid grid-cols-12">
            <div className="order-first col-span-6">
                <h2 className="text-3xl font-bold text-white mb-6">{props.title}</h2>
                <p className="text-white">{props.description}</p>
                <a className="btn btn-invert">{props.button}</a>
            </div>

            <div className="order-last col-span-5 col-end-13">
                <div dangerouslySetInnerHTML={{ __html: "<iframe src='https://share.hsforms.com/1my2o3daMS2uO9YIN3mBO3Acsset' scrolling='no' style='width:100%;height:1000px;overflow: hidden;'/>" }} />
            </div>
        </Section>
    </div>
}

export default ProductFormSection;

