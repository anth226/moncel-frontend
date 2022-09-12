import React from 'react';

import { Header2 } from 'src/components/core/typography';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { CoursePageInfoSectionStoryblok } from 'src/storyblok-component-types';
import { Slug } from 'src/lib';

import "./faqs.scss";
import RichText from '../core/RichText';

interface StoryProps {
    story: Slug;
}

export default (props: CoursePageInfoSectionStoryblok & StoryProps) => {
    const faqCards = props.faq || [];
    return <SectionFullWidth className={props.className || ""}>
        <Section>
            <div className="col-span-12"> 
                <Header2>{props.title}</Header2>
                <RichText className="mb-10 hidden md:block" document={props.desc || ""}/>
            </div>
            <div className="grid grid-cols-12">
                <ul className="hidden md:flex col-span-4 nav nav-tabs flex-col flex-wrap list-none border-b-0 pl-0 mr-20" id="tabs-tabFaq" role="tablist">
                    {faqCards.map((faq, i) => {
                        return <li className="nav-item mb-4" role="presentation" key={i}>
                        <h2 className={i == 0 ? "active" : ""} aria-controls={`#tabs-${i}-faq`} aria-selected={i == 0 ? true : false} id={`#tabs-${i}-tabfaq`} data-bs-toggle="pill" data-bs-target={`#tabs-${i}-faq`} role="tab"><a href={`#tabs-${i}-faq`} className={`text-lg text-navy font-semibold mb-2 hover:no-underline border-b-1 border-transparent hover:border-navy pb-2 w-full block cursor-pointer leading-6 ${i == 0 ? "active" : ""}`}>{faq.title}</a></h2></li>
                    })}
                </ul>
                <div className="col-span-12 md:col-span-8 tab-content" id="tabs-tabContentFaq">
                    {faqCards.map((faqGroup, i) => {
                        const random = Math.floor(Math.random() * 100000) + 1;
                        return <div className={`tab-pane fade ${i == 0 ? "show active" : ""}`} id={`tabs-${i}-faq`} role="tabpanel" aria-labelledby={`tabs-${i}-tabfaq`} key={i}>
                        
                            <h2 className="md:hidden text-lg text-navy font-semibold mb-4">{faqGroup.title}</h2>
                            
                            <div className="accordion w-full relative mb-6 md:mb-0" id={`accordion_${random}`}>

                                {faqGroup.faq?.map((y,i) => {
                                    return  <div className="faq p-6 pl-14 !shadow-none collapsed md:!bg-lilac rounded-xl mb-6 w-full"  key={`info-${i}`}>
                                        <h3 className="font-semibold !text-navy text-lg cursor-pointer md:mb-2 !bg-transparent" data-bs-toggle="collapse" data-bs-target={`#collapse_${random}_${i}`} aria-controls={`collapse_${random}_${i}`} id={`heading_${random}_${i}`} aria-expanded="false">{y.title || ""}</h3>

                                        <div className="intro !bg-transparent" data-bs-toggle="collapse" data-bs-target={`#collapse_${random}_${i}`} id={`heading_${random}_${i}`} aria-expanded="false">
                                            <RichText className="text-lynch" document={y.intro || ""}/>
                                        </div>
                                        
                                        <div id={`collapse_${random}_${i}`} className="accordion-collapse collapse" aria-labelledby={`heading_${random}_${i}`} data-bs-parent={`#accordion_${random}`}>
                                            <div className="accordion-body">
                                                <RichText className="text-lynch" document={y.intro || ""}/>
                                                {y.desc && <RichText className="text-lynch" document={y.desc || ""}/>}
                                            </div>
                                        </div>

                                        <p className="hidden md:block read-more text-navy mt-2 cursor-pointer !bg-transparent" data-bs-toggle="collapse" data-bs-target={`#collapse_${random}_${i}`} aria-controls={`collapse_${random}_${i}`} id={`heading_${random}_${i}`} aria-expanded="false">Read More</p>
                                    </div>
                                })}
                            </div>

                        </div>
                    })}
                </div>
            </div>
            <RichText className="md:hidden text-center" document={props.desc || ""}/>
        </Section>
    </SectionFullWidth>;
}
