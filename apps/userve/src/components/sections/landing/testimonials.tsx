import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { TestimonialsStoryblok, QuoteStoryblok } from 'src/storyblok-component-types';

import { Header2 } from 'src/components/core/typography';

const Quote = (quote: QuoteStoryblok) => {
    return <div className={`flex flex-col items-center w-full ${quote.num == 1 ? "hidden md:flex" : ""}`}>
        <div className="px-4 pb-6 text-xl text-center text-bluewood">{quote.quote}</div>
        <div className="text-lynch font-bold">{quote.author}</div>
    </div>
};

const TestimonialsSection = (props: TestimonialsStoryblok) => {

    return <div className="bg-cover bg-[url('../images/usx-home-testimonials.jpg')]">
        <Section>
            <Header2 className="text-center">{props.title}</Header2>
            <div className="flex justify-center">
                { (props.quotes || []).map((quote, i) => {
                    return <Quote num={i} {...quote} key={`testimonials-${i}`}/>;
                })}
            </div>
        </Section>
    </div>
};

export default TestimonialsSection;
