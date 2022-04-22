import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { BusinessStoryblok, HighlightCardStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/shared/typography';

const StatsCard = (props: HighlightCardStoryblok) => {
    console.log(props);
    return <div className="flex flex-col">
        <div className="text-sky-blue text-5xl font-extrabold mb-2">{props.title}</div>
        <Text className="mb-0"> <ReactMarkdown>{props.subtext}</ReactMarkdown></Text>
    </div>;
}

const BusinessSection = (props: BusinessStoryblok) => {
    return <div className={props.className || ""}>
        <Section className="statistic grid grid-cols-12 grid-flow-column gap-6 justify-items-center">
            <div className={props.layout == 'left-layout' ? 'col-start-1 col-span-5' : 'col-start-1 col-span-12 text-center'}>
                <Header2>{props.title}</Header2>
                <Text>{props.description}</Text>
                {props.link == '' ? '' : <a className="btn btn-invert">{props.link}</a>}
            </div>
            <div className={props.layout == 'left-layout' ? 'col-start-8 col-span-6 grid grid-cols-2 grid-rows-2 gap-10' : 'col-start-3 col-span-8 text-center grid grid-cols-3 gap-10'}>    
                { props.stats?.map((stat, i) => {
                    return <StatsCard key={`business-stats-${i}`} {...stat} />
                })}
            </div>
        </Section>
    </div>
}

export default BusinessSection;