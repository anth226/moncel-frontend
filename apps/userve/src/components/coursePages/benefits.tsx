import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { BenefitsStoryblok, IconCardStoryblok } from 'src/storyblok-component-types';
import { Header5, Header2, Text } from 'src/components/shared/typography';

const BenefitsCard = ({ card }: { card: IconCardStoryblok }) => {
    return <div className="flex flex-col">
        <img src={card.Icon?.filename || ""} alt={`${card.Title}`} width={60} height={60} className="block max-w-none h-16 mb-4"/>
        <Header5>{card.Title || ""}</Header5>
        <Text className="mb-0">{card.Description || ""}</Text>
    </div>    
};

export default (props: BenefitsStoryblok) => {
    const cards = props.benefits_cards || [];
    const title = props.title || "";

    return <SectionFullWidth className={`bg-white ${props.className || ""}`}>
        <Section>
            <Header2 className="max-w-3xl">{title}</Header2>
                <div className="grid grid-cols-3 grid-flow-row gap-10">
                    { cards.map((card, i) => <div key={`benefits-card-${i}`}><BenefitsCard card={card}/></div> )}
                </div>
        </Section>
    </SectionFullWidth>
    
};
