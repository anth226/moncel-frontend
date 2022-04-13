import React from 'react';
import { SectionFullWidth } from 'src/components/core/Section';
import { TestimonialsStoryblok, QuoteStoryblok } from 'src/storyblok-component-types';

const Quote = (quote: QuoteStoryblok) => {
    return <div className="flex flex-col">
        <p>{quote.quote}</p>
        <h2>{quote.author}</h2>
    </div>
};

const TestimonialsSection = (props: TestimonialsStoryblok) => {

    return <SectionFullWidth className="bg-slate-300">
        <h1>{props.title}</h1>
        <div className="grid grid-cols-2 grid-flow-row">
            { (props.quotes || []).map((quote, i) => {
                return <Quote {...quote} key={`testimonials-${i}`}/>;
            })}
        </div>
    </SectionFullWidth>
};

export default TestimonialsSection;
