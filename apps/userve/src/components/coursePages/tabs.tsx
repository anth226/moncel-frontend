import React from "react";

import { Section } from 'src/components/core/Section';
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2 } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import ReactMarkdown from 'react-markdown';

import "./tabs.scss";

const TabsSection = (props: AboutUsStoryblok & StoryblokStoryProps) => {
    const localImageFileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);
    const tabsContent = props.tabs || [];
    const firstTab = tabsContent[0];

    return <Section>
        {/* Mobile Only CTA  */}
        <div className={`tab-cta md:hidden bg-${ props.bg_version } bg-contain bg-bottom cta rounded-2xl grid grid-cols-12 grid-flow-row shadow-lg mb-20 overflow-hidden`}>
            <div className="tab-pane first col-span-12 md:col-span-6 mischka flex flex-col justify-center p-10 md:py-14 md:pl-14 md:pr-0">
                <Header2 className="!text-white">{firstTab.title || ""}</Header2>
                <ReactMarkdown>{firstTab.body || ""}</ReactMarkdown>
            </div>
        </div>

        {/* Component Header */}
        <div className="col-span-12">
            <Header2>{props.header || ""}</Header2>
        </div>
        {/* Tabs */}
        <div className="tab-cta grid grid-cols-12 rounded-xl overflow-hidden md:border-2 md:border-lilac">
            <ul className="hidden md:flex col-span-4 nav nav-tabs flex-col flex-wrap list-none border-b-0 pl-0" id="tabs-tabcta" role="tablist">
                {tabsContent.map((tab: AboutUsStoryblok, i:number) => {
                    return <li className={`nav-item ${i == 0 ? "first" : ""}`} role="presentation" key={i}>
                        <a href={`#tabs-${i}-cta`} className={`px-6 py-8 text-lg font-semibold w-full block cursor-pointer hover:no-underline hover:bg-lilac hover:text-bluewood ${i == 0 ? "active" : ""}`} id={`#tabs-${i}-tabcta`} data-bs-toggle="pill" data-bs-target={`#tabs-${i}-cta`} role="tab" aria-controls={`#tabs-${i}-cta`} aria-selected={i == 0 ? true : false}>{tab.title}</a></li>
                })}
            </ul>

            {/* Desktop Body - Tabs */}
            <div className="hidden md:block col-span-12 md:col-span-8 tab-content md:bg-lilac" id="tabs-tabcontentcta">
                {tabsContent.map((tab: AboutUsStoryblok, i:number) => {
                    return <div className={`tab-pane fade p-8 h-auto md:h-100 relative ${i == 0 ? "show active first bg-lynch" : "bg-lilac"}`} id={`tabs-${i}-cta`} role="tabpanel" aria-labelledby={`tabs-${i}-tabcta`} key={i}>
                        <ReactMarkdown className={i == 0 ? "mischka" : ""}>{tab.body || ""}</ReactMarkdown>
                        {i == 0 && <div className="hidden lg:block absolute bottom-0 right-8">
                            <DynamicImage fileNode={localImageFileNode} alt="About Userve" className="block max-w-[350px] " />
                        </div> }
                    </div>
                })}  
            </div>

            {/* Mobile Body - Accordion */} 
            <div className="md:hidden accordion col-span-12" id="accordion-cta-mobile">
                {tabsContent.map((tab: AboutUsStoryblok, i:number) => {
                    return <div className={`faq relative p-6 pl-14 !shadow-none rounded-xl mb-6 last:mb-0 w-full ${i == 0 ? "hidden" : ""}`} data-bs-toggle="collapse" data-bs-target={`#collapse-${i}-cta`} aria-expanded={i == 0 ? "true" : "false"} aria-controls={`collapse-${i}-cta`}>
                        <h2 className="font-semibold !text-navy text-lg cursor-pointer md:mb-2" id={`heading-${i}-cta`}>{tab.title}</h2>

                        <div id={`collapse-${i}-cta`} className={`accordion-collapse collapse ${i == 0 ? "show" : ""}`} aria-labelledby={`heading-${i}-cta`} data-bs-parent="#accordion-cta-mobile">
                            <div className="accordion-body">
                                <ReactMarkdown>{tab.body}</ReactMarkdown>
                            </div>
                        </div>
                    </div>
                })}
            </div>   
        </div>
    </Section>;
};

export default TabsSection;
