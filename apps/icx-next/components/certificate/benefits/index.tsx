import Image from 'next/image';

import { StoryBlokCertificateBenefitContent, StoryBlokCertificateBenefitCard } from 'moncel-one-sdk/cdn/types';
import styles from './styles.module.scss';

const Benefits = ({ benefits }: { benefits: StoryBlokCertificateBenefitContent}) => {
    const { benefits: cards } = benefits;

    return <div className={styles.section}>
        {cards.map((card: StoryBlokCertificateBenefitCard, i) => {
            return <div className={styles.card} key={`benefits-${i}`}>
                <Image src={card.icon.image} width={55} height={50} layout="fixed" alt={`benefits-${i}-icon`}/>
                <h1>{card.title}</h1>
                <p>{card.description}</p>
            </div>;
        })}
    </div>;
};

export default Benefits;