import React from 'react';
import ReactMarkdown from 'react-markdown';

import { Section } from 'src/components/core/Section';
import { FeatureBoxStoryblok, ListStoryblok } from 'src/storyblok-component-types';

const List = (list: ListStoryblok) => {
    { console.log(list) }
    return <div className="flex flex-col">
        <img src={list.image?.filename} className="block max-w-none h-16 mb-4" height="64" width="64" alt={list.title} />
        {list.title == '' ? '' : <h5 className="text-lg font-bold mb-4">{list.title}</h5>}
        <div className="checklist">
            <ReactMarkdown>{list.description}</ReactMarkdown>
        </div>
    </div>
};

const FeatureBoxSection = (props: FeatureBoxStoryblok) => {
    // { console.log(props) }
    return <div>
        <Section className="grid grid-cols-12">
            <h2 className="col-span-8 text-4xl font-bold mb-6">{props.title}</h2>

            <div className="col-span-12 grid grid-cols-2 grid-rows-2 gap-10">
                {(props.list || []).map((list, i) => {
                    return <List {...list} key={`list-${i}`} />;
                })}
            </div>
        </Section>
    </div>
}

export default FeatureBoxSection;

