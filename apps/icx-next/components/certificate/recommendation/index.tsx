import Image from 'next/image';

import { StoryBlokCertificateRecommendationContent } from 'moncel-one-sdk/cms/types';

const Recommendation = ({ recommendations }: { recommendations: StoryBlokCertificateRecommendationContent}) => {

    return <div className="row">
        
        <div className="col-12">
            <div className="line"/>
            <h2 className="mb-5">{recommendations.title}</h2>
        </div>
        <div className="row display-flex">
            {recommendations.cards.map((card, i) => {
                return <div className="col-12 col-md-6" key={`recommendation-card-${i}`}>
                    <Image src={card.image.image} width={150} height={27} layout="fixed" alt={`recommendation-card-${i}-icon`} />
                    <blockquote className="mt-3">{card.quote}</blockquote>
                    <cite className="pt-2 small">- {card.author}</cite>
                </div>
            })}
        </div>

    </div>;
};

export default Recommendation;
