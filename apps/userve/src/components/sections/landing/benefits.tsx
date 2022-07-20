import React from "react";
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { BenefitsStoryblok, IconCardStoryblok } from 'src/storyblok-component-types';
import { genHighlightMarkup } from "src/components/core/typography";

import { Header5, Text } from 'src/components/core/typography';

const BenefitsCard = ({ card }: { card: IconCardStoryblok }) => {
    return <div className="flex flex-col">
        <img src={card.Icon?.filename || ""} alt={`${card.Title}`} width={60} height={60} className="block max-w-none h-16 mb-4" loading="lazy"/>
        <Header5>{card.Title}</Header5>
        <Text className="mb-0">{card.Description}</Text>
    </div>    
};

const BenefitsSection = (props: BenefitsStoryblok) => {
    const cards = props.benefits_cards || [];
    const title = props.title || "";
    const highlightWords = (props.highlight_words || "").split(',');
    return <SectionFullWidth className={`bg-white ${props.className || ""}`}>
        <Section>
            <div className="max-w-full md:max-w-[60%]" dangerouslySetInnerHTML={genHighlightMarkup(title, highlightWords)} />
                <div className="flex flex-col md:grid md:grid-cols-3 grid-flow-row gap-7">
                    { cards.map((card, i) => <div key={`benefits-card-${i}`}><BenefitsCard card={card}/></div> )}
                </div>
        </Section>
    </SectionFullWidth>
}

export default BenefitsSection;
