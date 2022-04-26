import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Header2, Text } from 'src/components/shared/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';
import { ExternalLink } from '../core';
import 'tw-elements';

export default (props: CoursePageInfoSectionStoryblok) => {

    const infoCards = props.info || [];
    const random = Math.floor(Math.random() * 100000) + 1;

    return <SectionFullWidth className={props.className || ""}>
        <Section className="grid grid-cols-12">
            <div className="col-span-3">
                {props.layout == "title-left" ? <><Header2>{props.title}</Header2><ReactMarkdown>{props.desc}</ReactMarkdown></> : <img src={props.image?.filename} alt={props.title} />}
            </div>


            <div className="col-span-8 col-end-13">
                <div>
                    {props.layout == "title-right" ? <div className="mb-6"><Header2>{props.title}</Header2><ReactMarkdown>{props.desc}</ReactMarkdown></div> : ""}
                </div>
                <div className="accordion" id={`accordion_${random}`}>
                    {infoCards.map((card, i) => {
                        return <div className="accordion-item border-solid border-1 p-6 border-slate-300 bg-white rounded-xl mb-6 last:mb-0">
                            <div className="accordion-header" id={`heading_${random}_${i}`}>
                                <button className={i == "0" ? "accordion-button" : "accordion-button collapsed"} type="button" data-bs-toggle="collapse" data-bs-target={`#collapse_${random}_${i}`} aria-expanded={i == "0" ? "true" : "false"} aria-controls={`collapse_${random}_${i}`}>
                                    {card.Title || ""}
                                </button>
                            </div>   
                            <div id={`collapse_${random}_${i}`} className={i == "0" ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`heading_${random}_${i}`} data-bs-parent={`#accordion_${random}`}>
                                <div className="accordion-body">
                                    <ReactMarkdown>{card.Description || ""}</ReactMarkdown>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
                <div className="mt-6">
                    {props.disclaimer == '' ? '' : <ReactMarkdown className="text-center">{props.disclaimer}</ReactMarkdown>}
                </div>
            </div>

        </Section>
    </SectionFullWidth>;
}
