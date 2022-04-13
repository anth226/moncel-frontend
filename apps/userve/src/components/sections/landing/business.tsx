import React from 'react';
import { SectionFullWidth } from 'src/components/core/Section';

import { BusinessStoryblok, HighlightCardStoryblok } from 'src/storyblok-component-types';

const StatsCard = (props: HighlightCardStoryblok) => {
    return <div className="flex flex-col">
        <h1 className="text-indigo-800">{props.title}</h1>
        <p>{props.subtext}</p>
    </div>;
}

const BusinessSection = (props: BusinessStoryblok) => {
    return <SectionFullWidth className="bg-slate-100">
        <div className="grid grid-cols-2 grid-rows-3 grid-flow-column gap-10">
            <div className="col-start-1 col-span-1">
                <h1>{props.title}</h1>
                <p>{props.description}</p>
                <div>{props.link}</div>
            </div>
            <div className="col-start-2 grid grid-cols-2 grid-rows-2 gap-10">
                { props.stats?.map((stat, i) => {
                    return <StatsCard key={`business-stats-${i}`} {...stat} />
                })}
            </div>
        </div>
    </SectionFullWidth>
}

export default BusinessSection;