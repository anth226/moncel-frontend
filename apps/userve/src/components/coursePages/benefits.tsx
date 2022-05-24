import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { BenefitsStoryblok, IconCardStoryblok } from 'src/storyblok-component-types';
import { Header5, Header2, Text } from 'src/components/core/typography';
import { findMatchingLocalFileNode, getFilename, Slug, LocalFileSource, DynamicImage } from 'src/lib';

const BenefitsCard = ({ card, fileNode }: { card: IconCardStoryblok, fileNode: LocalFileSource | null }) => {
    const imgComp = !!fileNode ? <DynamicImage fileNode={fileNode} alt={`${card.Title} card icon`} className="h-16" width={60} height={60}/> : <img src={card.Icon?.filename || ""} alt={`${card.Title}`} width={60} height={60} className="block max-w-none h-16 mb-4"/>
    return <div className="flex flex-col">
        <div className="flex mb-6">
            { imgComp }
        </div>
        <Header5>{card.Title || ""}</Header5>
        <Text className="mb-0">{card.Description || ""}</Text>
    </div>    
};

interface StoryProps {
    story: Slug;
}
export default (props: BenefitsStoryblok & StoryProps) => {
    const cards = props.benefits_cards || [];
    const title = props.title || "";
    return <SectionFullWidth className={`bg-white ${props.className || ""}`}>
        <Section>
            <Header2 className="max-w-3xl">{title}</Header2>
                <div className="grid grid-cols-1 md:grid-cols-3 grid-flow-row gap-10">
                    { cards.map((card, i) => {
                        const localImageFileNode = findMatchingLocalFileNode(getFilename(card.Icon?.filename || ""), props.story);
                        return <div key={`benefits-card-${i}`}><BenefitsCard card={card} fileNode={localImageFileNode} /></div>
                    })}
                </div>
        </Section>
    </SectionFullWidth>  
};
