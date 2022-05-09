import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { BusinessStoryblok, HighlightCardStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/core/typography';

const StatsCard = (props: HighlightCardStoryblok, ) => {

    return <div className={`flex flex-col col-span-12 mb-6 md:mb-0 last:mb-0 ${props.layout == "center-layout" ? "md:col-span-4" : "md:col-span-6"}`}>
        <div className="text-sky-blue text-5xl font-extrabold mb-2">{props.title}</div>
        <Text className="!mb-0">{props.subtext || ""}</Text>
    </div>;
}

const BusinessSection = (props: BusinessStoryblok) => {
    return <div className={props.className || ""}>
        <Section className="statistic grid grid-cols-12 grid-flow-column gap-0 md:gap-6">
            <div className={props.layout == 'left-layout' ? 'col-start-1 col-span-12 md:col-span-6 lg:col-span-5' : 'col-start-1 col-span-12 text-center'}>
                <Header2>{props.title || ""}</Header2>
                <Text>{props.description || ""}</Text>
                {props.link == '' ? '' : <a className="btn btn-invert hidden md:block">{props.link}</a>}
            </div>
            <div className={props.layout == 'left-layout' ? 'col-start-1 md:col-start-7 col-span-12 md:col-span-6 grid grid-cols-12' : 'col-start-1 col-span-12 text-center grid grid-cols-12 md:gap-10'}>    
                { props.stats?.map((stat, i) => {
                    return <StatsCard key={`business-stats-${i}`} {...stat} layout={props.layout}/>
                })}
            </div>
            <div className="block md:hidden col-span-12 mt-6 md:mt-0">
                {props.link == '' ? '' : <a className="btn btn-invert">{props.link}</a>}
            </div>

        </Section>
    </div>
}
export default BusinessSection;