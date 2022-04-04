import Image from 'next/image';

import { StoryBlokCertificateBenefitContent, StoryBlokCertificateBenefitCard } from 'moncel-one-sdk/cms/types';
import styles from './styles.module.scss';

const Benefits = ({ benefits }: { benefits: StoryBlokCertificateBenefitContent}) => {
    const { benefits: cards } = benefits;

    return <div className="row ps-6 pe-4 text-center text-md-start">
        {cards.map((card: StoryBlokCertificateBenefitCard, i) => {
            return <div className="col-12 col-md-6 mb-5" key={`benefits-${i}`}>
                <Image src={card.icon.image} width={55} height={50} layout="fixed" alt={`benefits-${i}-icon`}/>
                <h5 className="mt-3">{card.title}</h5>
                <p className="mb-0">{card.description}</p>
            </div>;
        })}
    </div>;
};

export default Benefits;