import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { FeatureBoxStoryblok, ListStoryblok } from 'src/storyblok-component-types';

import { Header2, Header5 } from 'src/components/core/typography';

const List = (list: ListStoryblok) => {
    return <div className="flex flex-col col-span-12 md:col-span-6 mb-6 last:mb-0">
        <img src={list.image?.filename} className="block max-w-none h-16 mb-4" height="64" width="64" alt={list.title} />
        {list.title == '' ? '' : <Header5>{list.title}</Header5>}
        <div className="checklist">
            <ReactMarkdown>{list.description}</ReactMarkdown>
        </div>
    </div>
};

const FeatureBoxSection = (props: FeatureBoxStoryblok) => {
    return <div className="bg-gradient-to-b from-titan to-white">
        <Section className="grid grid-cols-12">
            <Header2 className="col-span-12 md:col-span-9">{props.title}</Header2>

            <div className="col-span-12 grid grid-cols-12 md:grid-rows-2 gap-0 md:gap-7">
                {(props.list || []).map((list, i) => {
                    return <List {...list} key={`list-${i}`} />;
                })}
            </div>
        </Section>
    </div>
}

export default FeatureBoxSection;

