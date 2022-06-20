import Image from 'next/image'
import { ComponentLandingEasySteps } from 'generated/strapi-types';

const strapiURL = process.env.STRAPI_URL || "";

const StepsSection = ({ data }: { data: ComponentLandingEasySteps  }) => {
    return <div className="row text-center text-md-start">
        <div className="col-12 col-md-3 mb-3 mb-md-0">
            <div className="line"/>
            <h2>{data.title}</h2>
        </div>

        {
            data.steps.map((step, i) => {
                if(!step) return null;
                const imagesrc = step.image?.data?.attributes?.url ? `${strapiURL}${step.image.data.attributes.url}` : "";
                return <div className="col-12 col-md-3 mb-3 mb-md-0" key={`easy-step-${i}`}>
                    <Image alt={`${step.title}-icon`} src={imagesrc} width={90} height={90} layout="fixed" />
                    <h5 className="mt-2">{step.title}</h5>
                    <p className="mb-0">{step.description}</p>
                </div> 
            })
        
        }

    </div>
}

export default StepsSection;