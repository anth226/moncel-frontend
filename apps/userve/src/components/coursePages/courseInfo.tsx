import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Header2, Text } from 'src/components/shared/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';

export default (props: CoursePageInfoSectionStoryblok) => {

    const infoCards = props.info || [];
    return <SectionFullWidth>
        <Section className="grid grid-cols-12">
            <div className="col-span-3">
                {props.layout == "title-left" ? <><Header2>{props.title}</Header2><ReactMarkdown>{props.desc}</ReactMarkdown></> : <img src={props.image?.filename} alt={props.title}/>}                
            </div>
            <div className="col-span-8 col-end-13">
                <div className="mb-6">
                    {props.layout == "title-right" ? <div><Header2>{props.title}</Header2><ReactMarkdown>{props.desc}</ReactMarkdown></div> : ""}
                </div>
                <div className="accordion">
                    {infoCards.map((card, i) => {
                        return <div className="accordion-item border-solid border-1 p-6 border-slate-300 bg-white rounded-xl">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                {card.Title || ""}
                            </button>
                            <div id="collapseOne" class="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                                <div class="accordion-body py-4 px-5">
                                    <Text className="!mb-0">{card.Description || ""}</Text>
                                </div>
                            </div>
                        </div>
                    })}
                </div>
            </div>

        </Section>
    </SectionFullWidth>;
}
