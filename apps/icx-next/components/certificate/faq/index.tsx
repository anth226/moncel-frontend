import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { StoryBlokFaqsSection } from 'moncel-one-sdk/cms/types';
import ReactMarkdown from 'react-markdown';

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

    return <div className="row">
        <div className="col-12">
            <div className="line" />
            <h2 className="mb-5">{faqs.title}</h2>
            <div className="accordion col-12">
            {faqs.faqs_cards.map((card, i) => {
            return <div className="card mb-3 rounded-0" key={`faq-${i}`}>
                <button className="btn btn-link text-start p-3" onClick={() => handleClick(i)}><span className="w-75 d-inline-block">{card.question}</span></button>
                <Collapse className="px-3 pt-3" in={i === expanded}><div><ReactMarkdown>{card.answer}</ReactMarkdown></div></Collapse>
            </div>
        })}
        </div>
        </div>

       
    </div>

};

export default Faq;
