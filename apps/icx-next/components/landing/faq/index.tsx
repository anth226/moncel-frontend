import { useState } from 'react';
import { Collapse } from 'react-bootstrap';

import { SectionFAQsData } from './types';

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

    return <div className="row py-6 text-center text-md-start">
        <div className="col-12 col-md-3 mb-3 mb-md-0">
            <h2 className="line">FAQs</h2>
        </div>
        <div className="accordion col-12 col-md-9">
        {
            cards.map(((card, i) => {

                return <div className="card mb-3 rounded-0" key={`faq-${i}`}>
                    <button className="btn btn-link text-start p-3" onClick={() => handleClick(i)}>{card.question}</button>
                    <Collapse className="p-3" in={i === expanded}><div>{card.answer}</div></Collapse>
                </div>
            }))
        }
        </div>
    </div>
}

export default FAQSection;
