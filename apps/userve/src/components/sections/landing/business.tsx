import React from 'react';
import { Section } from 'src/components/core/Section';

import { BusinessStoryblok, HighlightCardStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/shared/typography';

const StatsCard = (props: HighlightCardStoryblok) => {
    return <div className="flex flex-col">
        <div className="text-sky-blue text-5xl font-extrabold mb-2">{props.title}</div>
        <Text className="mb-0">{props.subtext}</Text>
    </div>;
}

const BusinessSection = (props: BusinessStoryblok) => {
    return <div className="bg-slate-100">
        <Section className="grid grid-cols-12 grid-flow-column gap-10">
            <div className="col-start-1 col-span-5">
                <Header2>{props.title}</Header2>
                <p className="text-slate-500 text-base">{props.description}</p>
                <a className="btn btn-invert">{props.link}</a>
            </div>
            <div className="col-start-7 col-span-6 grid grid-cols-2 grid-rows-2 gap-10">
                { props.stats?.map((stat, i) => {
                    return <StatsCard key={`business-stats-${i}`} {...stat} />
                })}
            </div>
        </Section>
    </div>
}

export default BusinessSection;