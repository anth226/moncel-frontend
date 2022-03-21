import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import { SectionFAQsData } from './types';

import styles from './styles.module.css';

const FAQSection = ({ faqs }: { faqs: SectionFAQsData}) => {
    const [ expanded, setExpanded ] = useState(-1);
    const cards = faqs.faqs_cards; // TODO set fallbacks

    const handleClick = (i: number) => {
        if(i === expanded) {
            setExpanded(-1);
        }
        else {
            setExpanded(i);
        }
    };

    return <div className={styles.container}>
        <div className={`${styles.column} ${styles.left}`}>
            <h1>FAQs</h1>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
        {
            cards.map(((card, i) => {
                const id = `faq-collapse-${i}`;
                return <div key={`faq-${i}`}>
                    <button onClick={() => handleClick(i)}>{card.question}</button>
                    <Collapse className="collapse" in={i === expanded}><p>{card.answer}</p></Collapse>
                </div>
            }))
        }
        </div>
    </div>
}

export default FAQSection;
