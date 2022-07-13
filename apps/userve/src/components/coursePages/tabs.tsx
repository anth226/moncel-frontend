import React from "react";

import { Section } from 'src/components/core/Section';
import { AboutUsStoryblok } from 'src/storyblok-component-types';
import { Header2, Text } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import ReactMarkdown from 'react-markdown';

const TabsSection = (props: AboutUsStoryblok & StoryblokStoryProps) => {
    const localImageFileNode = findMatchingLocalFileNode(getFilename(props.image?.filename || ""), props.story);

    const tabsContent = props.tabs || [];
    console.log(tabsContent)
    const firstTab = tabsContent[0];
    console.log(firstTab)
    return <Section>
        {/* Mobile Only CTA  */}
        <div className={`md:hidden bg-${ props.bg_version } bg-contain bg-bottom cta rounded-2xl grid grid-cols-12 grid-flow-row shadow-lg mb-20`}>
            <div className="first col-span-12 md:col-span-6 text-mischka flex flex-col justify-center p-10 md:py-14 md:pl-14 md:pr-0">
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
                        <a href={`#tabs-${i}-cta`} className={`p-6 text-lg font-semibold w-full block cursor-pointer hover:no-underline hover:bg-lilac hover:text-bluewood ${i == 0 ? "active" : ""}`} id={`#tabs-${i}-tabcta`} data-bs-toggle="pill" data-bs-target={`#tabs-${i}-cta`} role="tab" aria-controls={`#tabs-${i}-cta`} aria-selected={i == 0 ? true : false}>{tab.title}</a></li>
                })}
            </ul>

            {/* Desktop Body - Tabs */}
            <div className="hidden md:block col-span-12 md:col-span-8 tab-content md:bg-lilac" id="tabs-tabcontentcta">
                {tabsContent.map((tab: AboutUsStoryblok, i:number) => {
                    return <div className={`tab-pane fade p-8 h-auto md:h-100 ${i == 0 ? "show active first bg-lynch" : "bg-lilac"}`} id={`tabs-${i}-cta`} role="tabpanel" aria-labelledby={`tabs-${i}-tabcta`} key={i}>
                        <ReactMarkdown className={i == 0 ? "text-mischka" : ""}>{tab.body || ""}</ReactMarkdown>
                    </div>
                })}  
            </div>

            {/* Mobile Body - Accordion */} 
            <div className="accordion col-span-12" id="accordion-cta-mobile">
                {tabsContent.map((tab: AboutUsStoryblok, i:number) => {
                    return <div className={`faq p-6 pl-14 !shadow-none rounded-xl mb-6 last:mb-0 w-full ${i == 0 ? "hidden" : ""}`}>
                        <h2 className="accordion-header mb-0 font-semibold !text-navy text-lg" id={`heading-${i}-cta`}>
                            <button className="relative" type="button" data-bs-toggle="collapse" data-bs-target={`#collapse-${i}-cta`} aria-expanded={i == 0 ? "true" : "false"} aria-controls={`collapse-${i}-cta`}>
                                {tab.title}
                            </button>
                        </h2>
                        <div id={`collapse-${i}-cta`} className={`accordion-collapse collapse ${i == 0 ? "show" : ""}`} aria-labelledby={`heading-${i}-cta`} data-bs-parent="#accordion-cta-mobile">
                            <div className="accordion-body">
                                {tab.body}
                            </div>
                        </div>
                    </div>
                })}
            </div>

            {/* <div className="accordion" id="accordionExample">
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingOne">
                    <button className=" relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                        Accordion Item #1
                    </button>
                    </h2>
                    <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        Text
                    </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingTwo">
                    <button className=" collapsed relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                        Accordion Item #2
                    </button>
                    </h2>
                    <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        Text
                    </div>
                    </div>
                </div>
                <div className="accordion-item bg-white border border-gray-200">
                    <h2 className="accordion-header mb-0" id="headingThree">
                    <button className=" collapsed relative" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false"
                        aria-controls="collapseThree">
                        Accordion Item #3
                    </button>
                    </h2>
                    <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree"
                    data-bs-parent="#accordionExample">
                    <div className="accordion-body py-4 px-5">
                        Text
                    </div>
                    </div>
                </div>
            </div> */}
        </div>



        {/* <div className="justify-center relative flex self-end">
            <DynamicImage fileNode={localImageFileNode} alt="About Userve" className="block absolute max-w-[400px] bottom-0" />
        </div> */}
    </Section>;
};

export default TabsSection;
