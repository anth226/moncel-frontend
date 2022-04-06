import Link from 'next/link';

import { StoryBlokHomePricingContent } from 'moncel-one-sdk/cms/types';

const PricingSection = ({ pricing }: { pricing: StoryBlokHomePricingContent }) => {
    return <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-4 offset-lg-2 text-center p-5 order-2 order-md-1 bg-dark">
            <h2 className="text-white">{ pricing.top_price_text }</h2>
            <div className="text-white price">{ pricing.price }</div>
            <p className="text-white">{ pricing.bottom_price_text }</p>
            <Link href={pricing.button_link} passHref><div className="btn btn-primary text-white mt-6" id="pricing-cta">Learn More</div></Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2 pb-4 pb-md-0">
            <ul className="list-container ms-4">
                { pricing.benefits.map((benefit, i) => {
                    return <li key={`pricing-benefits-${i}`} className="mb-3">{benefit.text}</li>
                })}
            </ul>
        </div>
    </div>
}

export default PricingSection;
