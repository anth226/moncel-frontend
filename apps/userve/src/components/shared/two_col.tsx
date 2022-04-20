import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { TwoColStoryblok, ListStoryblok } from 'src/storyblok-component-types';

const List = (list: ListStoryblok) => {
    // { console.log(list) }
    return <div className="flex flex-col checktitle">
        {list.title == '' ? '' : <h5 className="text-lg font-bold mb-2">{list.title}</h5>}
        <ul><li>{list.description}</li></ul>
    </div>
};

const TwoColSection = (props: TwoColStoryblok) => {
    // { console.log(props) }
    return <div>
        <Section className="grid grid-cols-12">
            <div className={props.layout == 'img-right' ? 'order-first col-span-7' : 'order-last col-span-7 col-end-13'}>

                {props.title == '' ? '' : <h2 className="text-4xl font-bold mb-6">{props.title}</h2>}
                {props.content == '' ? '' : <p className="mb-6">{props.content}</p>}
            
                <div className={props.listLayout == 'list-four' ? 'grid grid-cols-2 grid-rows-2 gap-6' : 'List 3'}>
                    {(props.list || []).map((list, i) => {
                        return <List {...list} key={`list-${i}`} />;
                    })}
                </div>
            </div>

            <div className={props.layout == 'img-right' ? 'order-last col-span-4 col-end-13' : 'order-first col-span-4'}>
                <img src={props.image.filename} className="rounded-lg"/>
            </div>
        </Section>
    </div>
}

export default TwoColSection;

