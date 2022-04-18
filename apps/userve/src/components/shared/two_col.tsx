import React from 'react';
import { GatsbyImage, getImage } from "gatsby-plugin-image";
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { TwoColStoryblok, ListStoryblok } from 'src/storyblok-component-types';

const List = (list: ListStoryblok) => {
    {console.log(list) }
    return <div className="flex flex-col">
        <h3>{list.title}</h3>
        <ul><li>{list.description}</li></ul>
    </div>
};

const TwoColSection = (props: TwoColStoryblok) => {
    {console.log(props) }

    return <SectionFullWidth className="bg-slate-100">
        <Section className="grid grid-cols-2">
            <div className={ props.layout == 'img-right' ? 'col-start-1' : 'col-start-2' }>
                <h2 className="text-xl">{props.title}</h2>
                <p>{props.content}</p>
                
                
                <div className={ props.listLayout == 'list-four' ? 'grid grid-cols-2 grid-rows-2 gap-10' : 'List 3' }>
                    { (props.list || []).map((list, i) => {
                        return <List {...list} key={`list-${i}`}/>;
                    })}
                </div>
            </div>
            <div className={ props.layout == 'img-right' ? 'col-start-2' : 'col-start-1' }>
                IMAGE
            </div>
        </Section>
    </SectionFullWidth>
}

export default TwoColSection;