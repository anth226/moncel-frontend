import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';

import { TwoColStoryblok, ListStoryblok } from 'src/storyblok-component-types';
import { Header2, Header5, Text } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';

const List = (list: ListStoryblok) => {
    return <div className="col-span-12 md:col-span-6 checktitle mb-4 last:mb-0 md:mb-0">
        {list.title == '' ? '' : <Header5 className="mb-1">{list.title}</Header5>}
        <ul className="mb-0 pb-0"><li className="mb-0 pb-0">{list.description}</li></ul>
    </div>
};

const TwoColSection = (props: TwoColStoryblok & StoryblokStoryProps) => {
    let fileNode;
    if(props.story) {
        fileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);
    }
    const imgComp = props.story ? <DynamicImage fileNode={fileNode} alt={`${props.title} image`} className="rounded-lg" imgStyle={{borderRadius:'1rem'}}/> : <img src={props.image?.filename} className="rounded-lg" alt={`${props.title} image`} />;
    console.log(props)
    return <div>
        <Section className="grid grid-cols-12">
            <div className={props.layout == 'img-right' ? 'order-last md:order-first col-span-12 md:col-span-7' : 'order-last col-span-12 md:col-span-7 col-end-13'}>

                {props.title == '' ? '' : <Header2>{props.title || ""}</Header2>}
                {props.content == '' ? '' : <Text>{props.content || ""}</Text>}
            
                <div className={props.listLayout == 'list-four' ? 'grid grid-cols-12 md:gap-6' : 'List 3'}>
                    {(props.list || []).map((list, i) => {
                        return <List {...list} key={`list-${i}`} />;
                    })}
                </div>

                {props.buttonLink && <a className="btn btn-invert mt-4" href={props.buttonLink || ""}>{ props.buttonText }</a>}           
            </div>
            <div className="col-span-1" />
            <div className={props.layout == 'img-right' ? 'order-first md:order-last col-span-12 md:col-span-4 mb-6 md:mb-0' : 'order-first col-span-12 md:col-span-4 mb-6 md:mb-0'}>
                { imgComp }
            </div>
        </Section>
    </div>
}

export default TwoColSection;

