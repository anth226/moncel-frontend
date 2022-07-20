import Link from 'next/link';

import { ComponentLandingBenefitsAndPrice } from 'generated/strapi-types';

const PricingSection = ({ data }: { data: ComponentLandingBenefitsAndPrice }) => {
    return <div className="row align-items-center">
        <div className="col-12 col-md-6 col-lg-4 offset-lg-2 text-center p-5 order-2 order-md-1 bg-dark">
            <h2 className="text-white">{ data.TopPriceText }</h2>
            <div className="text-white price">{ data.Price }</div>
            <p className="text-white">{ data.BottomPriceText }</p>
            <Link href={data.Button?.href || ""} passHref><div className="btn btn-primary text-white mt-6" id="pricing-cta">{data.Button?.text || ""}</div></Link>
        </div>
        <div className="col-12 col-md-6 col-lg-4 order-1 order-md-2 pb-4 pb-md-0">
            <ul className="list-container ms-4">
                { (data.benefits || []).map((benefit, i) => {
                    if(!benefit) return null;
                    return <li key={`pricing-benefits-${i}`} className="mb-3">{benefit.text}</li>
                })}
            </ul>
        </div>
    </div>
}

export default PricingSection;
