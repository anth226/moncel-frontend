import Image from 'next/image';

import { imageLoader } from 'lib';

import { ComponentIccAdditionalBenefitsSection, ComponentCoreGraphicText } from "generated/strapi-types";

const Benefits = ({ data }: { data: ComponentIccAdditionalBenefitsSection}) => {
    return <div className="row ps-6 pe-4 text-center text-md-start">
        {(data.Benefits || []).map((benefit: ComponentCoreGraphicText | null, i) => {
            if(!benefit) return null;
            return <div className="col-12 col-md-6 mb-5" key={`benefits-${i}`}>
                <Image src={benefit.image?.data?.attributes?.url || ""} loader={imageLoader} width={55} height={50} layout="fixed" alt={`benefits-${i}-icon`}/>
                <h5 className="mt-3">{benefit.title}</h5>
                <p className="mb-0">{benefit.description}</p>
            </div>;
        })}
    </div>;
};

export default Benefits;
