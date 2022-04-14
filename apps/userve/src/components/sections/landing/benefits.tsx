import React from "react";
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { BenefitsStoryblok, IconCardStoryblok } from 'src/storyblok-component-types';

const replaceHighlightText = (s: string, highlights: string[]) => {
    const highlightClass = "text-inherit text-indigo-500"; // todo make opt

    const result = highlights.reduce((result, highlight) => {
        const pattern = new RegExp(highlight, 'ig');
        return result.replace(pattern, (match) => `<span class="${highlightClass}">${match}</span>`);
    }, s);

    return { __html: `<h1 class="text-inherit">${result}</h1>` };
};

const BenefitsCard = ({ card }: { card: IconCardStoryblok }) => {

    return <div className="flex flex-col">
        <img src={card.Icon?.filename || ""} alt={`benefits-${card.Title} icon`} width={60} height={60} />
        <h1>{card.Title}</h1>
        <p>{card.Description}</p>
    </div>    
};

const BenefitsSection = (props: BenefitsStoryblok) => {
    const cards = props.benefits_cards || [];
    const title = props.title || "";
    const highlightWords = (props.highlight_words || "").split(',');
    return <SectionFullWidth className="bg-slate-100">
        <Section>
            <div className="max-h-96 text-4xl max-w-5xl font-extrabold text-slate-800 my-8" dangerouslySetInnerHTML={replaceHighlightText(title, highlightWords)} />
                <div className="grid grid-cols-3 grid-rows-2 grid-flow-row gap-10">
                    { cards.map((card, i) => <div key={`benefits-card-${i}`}><BenefitsCard card={card}/></div> )}
                </div>
        </Section>
    </SectionFullWidth>
}

export default BenefitsSection;
