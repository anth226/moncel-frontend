import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import { SectionFAQsData } from './types';

import styles from './styles.module.scss';

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
            <div className={`${styles.line}`} />
            <h1>FAQs</h1>
        </div>
        <div className={`${styles.column} ${styles.right}`}>
        {
            cards.map(((card, i) => {

                return <div className={styles.question} key={`faq-${i}`}>
                    <button className={styles.cell} onClick={() => handleClick(i)}>{card.question}</button>
                    <Collapse className={styles.cell} in={i === expanded}><div>{card.answer}</div></Collapse>
                </div>
            }))
        }
        </div>
    </div>
}

export default FAQSection;
