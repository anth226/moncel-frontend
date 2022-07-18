import Image from 'next/image';

import { ComponentIccAdditionalRecommendationSection } from "generated/strapi-types";

const Recommendation = ({ data }: { data: ComponentIccAdditionalRecommendationSection}) => {

    return <div className="row text-center text-md-start">
        
        <div className="col-12">
            <div className="line"/>
            <h2 className="mb-5">{data.Title}</h2>
        </div>
        <div className="row display-flex">
            {(data.Recommendations || []).map((quote, i) => {
                if(!quote) return null;
                return <div className="col-12 col-md-6 mb-4 mb-md-0" key={`recommendation-card-${i}`}>
                    <Image src={quote?.image?.data?.attributes?.url || ""} width={150} height={27} layout="fixed" alt={`recommendation-card-${i}-icon`} />
                    <blockquote className="mt-3">{quote.title}</blockquote>
                    <cite className="pt-2 small">- {quote.description}</cite>
                </div>
            })}
        </div>

    </div>;
};

export default Recommendation;
