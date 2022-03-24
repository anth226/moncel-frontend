import Image from 'next/image';

import { StoryBlokCertificateRecommendationContent } from 'moncel-one-sdk/cdn/types';
import styles from './styles.module.scss';

const Recommendation = ({ recommendations }: { recommendations: StoryBlokCertificateRecommendationContent}) => {
    return <div className={styles.section}>
        <div className={styles.line} />
        <div className={styles.title}>
            <h1>{recommendations.title}</h1>
        </div>
        <div className={styles.recommendations}>
            {recommendations.cards.map((card, i) => {
                return <div className={styles.card} key={`recommendation-card-${i}`}>
                    <Image src={card.image.image} width={150} height={27} layout="fixed" alt={`recommendation-card-${i}-icon`} />
                    <blockquote>{card.quote}</blockquote>
                    <cite>{card.author}</cite>
                </div>
            })}
        </div>

    </div>;
};

export default Recommendation;
