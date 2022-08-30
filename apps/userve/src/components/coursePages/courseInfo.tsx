import React from 'react';
import { GatsbyImage } from 'gatsby-plugin-image';
import ReactMarkdown from 'react-markdown';

import { Header2, Header5 } from 'src/components/core/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';
import { ExternalLink } from '../core';
import { getFilename, findMatchingLocalFileNode, DynamicImage, Slug } from 'src/lib';

import "./courseInfo.scss";
import RichText from '../core/RichText';

interface StoryProps {
    story: Slug;
}

export default (props: CoursePageInfoSectionStoryblok & StoryProps) => {
    const infoCards = props.info || [];
    const random = Math.floor(Math.random() * 100000) + 1;
    const heroImageLocalFileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);



    return <SectionFullWidth className={props.className || ""}>
        <Section className="grid grid-cols-12 md:gap-10">
            <div className="col-span-12 md:col-span-4 lg:mr-16">
                {props.layout == "title-left" ? <><Header2>{props.title}</Header2><ReactMarkdown>{props.desc}</ReactMarkdown></> : ''}
                {!heroImageLocalFileNode ? '' : <DynamicImage fileNode={heroImageLocalFileNode} alt={props.title} className="mb-6 md:mb-0"/> }
            </div>
            <div className="col-span-12 md:col-span-8 col-end-13">
                <div className="p">
                    {props.layout == "title-right" ? <div className="mb-6"><Header2>{props.title}</Header2><RichText document={props.desc} className="text-lynch"/></div> : ""}
                </div>
                <div className="accordion w-full" id={`accordion_${random}`}>
                    {infoCards.map((card, i) => {
                        return <div className={`border-solid border-1 rounded-xl mb-6 overflow-hidden last:mb-0 w-full ${props.layout == "title-right" ? "" : "faq-alt"}`} key={`info-${i}`}>
                            <div className={`!text-navy !shadow-none p-6 rounded-xl ${props.layout == "title-right" ? "course-outline" : "faq-item"}`}>
                                <div className={`!bg-transparent cursor-pointer ${i == 0 ? "" : "collapsed"}`} data-bs-toggle="collapse" data-bs-target={`#collapse_${random}_${i}`} aria-expanded={i == 0 ? "true" : "false"} aria-controls={`collapse_${random}_${i}`} id={`heading_${random}_${i}`}>
                                    <Header5 className="mb-0 !text-navy">{card.Title || ""}</Header5>
                                </div>
                                
                                <div id={`collapse_${random}_${i}`} className={i == 0 ? "accordion-collapse collapse show" : "accordion-collapse collapse"} aria-labelledby={`heading_${random}_${i}`} data-bs-parent={`#accordion_${random}`}>
                                    <div className="accordion-body">
                                        <ReactMarkdown>{card.Description || ""}</ReactMarkdown>
                                    </div>
                                </div>
                            </div>               
                        </div>
                    })}
                </div>
                <div className="mt-6">
                    {props.disclaimer == '' ? '' : <RichText className="text-center text-lynch" document={props.disclaimer}/>}
                </div>
            </div>
        </Section>
    </SectionFullWidth>;
}
