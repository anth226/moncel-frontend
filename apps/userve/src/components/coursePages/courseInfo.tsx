import React from 'react';

import { Header5, Header2, Text } from 'src/components/shared/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';


export default (props: CoursePageInfoSectionStoryblok) => {

    const infoCards = props.info || [];
    { console.log(props) }
    return <SectionFullWidth className="bg-lilac">
        <Section className="grid grid-cols-12">
            <div className="col-span-3">

            </div>
            <div className="col-span-8 col-end-13">
                <Header2>{props.title || ""}</Header2>
                <Text>{props.desc || ""}</Text>
                <div className="accordion">
                    {infoCards.map((card, i) => {
                        { console.log(card) }
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
