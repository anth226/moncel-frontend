import Link from 'next/link';

import { StoryBlokHomePricingContent } from 'moncel-one-sdk/cdn/types';
import styles from './styles.module.scss'

const PricingSection = ({ pricing }: { pricing: StoryBlokHomePricingContent }) => {
    return <div className={styles.container}>
        <div className={`${styles.column} ${styles.left}`}>
            <h1>{ pricing.top_price_text }</h1>
            <h1 className={styles.highlight}>{ pricing.price }</h1>
            <h5>{ pricing.bottom_price_text }</h5>
            <div className={styles['button-cta']} id="pricing-cta"><Link href={pricing.button_link}>Learn More</Link></div>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
            <ul>
                { pricing.benefits.map((benefit, i) => {
                    return <li key={`pricing-benefits-${i}`}>{benefit.text}</li>
                })}
            </ul>
        </div>
    </div>
}

export default PricingSection;
