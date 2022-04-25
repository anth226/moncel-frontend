import React from 'react';

import { Header1, Header2, Text } from 'src/components/shared/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';


export default (props: CoursePageInfoSectionStoryblok) => {

    const infoCards = props.info || [];
    return <SectionFullWidth className="bg-lilac">
        <Section className="flex flex-col items-end">
            <Header1>{props.title || ""}</Header1>
            <Text>{props.desc || ""}</Text>
            <>
            { infoCards.map((card, i) => {
                return <div className="border-solid border-2 border-slate-300 bg-white rounded-xl">
                    <Header2>{card.Title || ""}</Header2>
                    <Text>{card.title || ""}</Text>
                    
                </div>
            }) }
            </>
        </Section>
    </SectionFullWidth>;
}
