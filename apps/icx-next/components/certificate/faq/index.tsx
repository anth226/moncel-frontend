import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { StoryBlokFaqsSection } from 'moncel-one-sdk/cdn/types';

import styles from './styles.module.scss';

const Faq = ({ faqs }: { faqs: StoryBlokFaqsSection }) => {
    const [ expanded, setExpanded ] = useState(-1);
    const handleClick = (i: number) => {
        if(i === expanded) {
            setExpanded(-1);
        }
        else {
            setExpanded(i);
        }
    };

    return <div className={styles.container}>
        <div className={styles.line} />
        <h1 className={styles.title}>{faqs.title}</h1>
        {faqs.faqs_cards.map((card, i) => {
            return <div className={styles.question} key={`faq-${i}`}>
                <button className={styles.cell} onClick={() => handleClick(i)}>
                    { card.question }
                </button>
                <Collapse className={styles.cell}  in={i === expanded}><div>{card.answer}</div></Collapse>
            </div>
        })}
    </div>

};

export default Faq;
