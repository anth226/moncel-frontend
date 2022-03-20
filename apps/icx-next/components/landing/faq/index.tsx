import jsonata from 'jsonata';

import { SectionFAQsData } from './types';

import styles from './styles.module.css'

const FAQSection = ({ faqs }: { faqs: SectionFAQsData}) => {
    const cards = faqs.faqs_cards; // TODO set fallbacks

    return <div className={styles.container}>
        <div className={`${styles.column} ${styles.left}`}>
            <h1>FAQs</h1>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
        {
            cards.map(((card, i) => {
                const id = `faq-collapse-${i}`;
                return <>
                    <button className="btn" type="button" data-toggle="collapse" data-target={`#${id}`}>{card.question}</button>
                    <div className="collapse" id={id}>{card.answer}</div>
                </>
            }))
        }
        </div>
    </div>
}

export default FAQSection;
