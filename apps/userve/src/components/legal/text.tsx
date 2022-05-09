import React from "react";
import ReactMarkdown from 'react-markdown';

import { LegalPageStoryblok } from 'src/storyblok-component-types';
import { Header1 } from 'src/components/core/typography';
import Section from "../core/Section";

const TextSection = (props: LegalPageStoryblok) => {
    return <Section>
        <div className="legal grid grid-cols-12">
            <div className="col-span-12 md:col-span-4 md:pr-10 lg:pr-0 lg:col-span-3 mb-6 md:mb-0">
                <Header1>{props.title || ""}</Header1>
                <ReactMarkdown>{props.text_left || ""}</ReactMarkdown>
            </div>
            <div className="hidden lg:flex lg:col-span-1"/>
            <div className="col-span-12 md:col-span-8 lg:col-span-8">
                <ReactMarkdown>{props.text_right || ""}</ReactMarkdown>
            </div>
        </div>
    </Section>
}

export default TextSection;