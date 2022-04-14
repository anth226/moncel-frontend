import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { TestimonialsStoryblok, QuoteStoryblok } from 'src/storyblok-component-types';

const Quote = (quote: QuoteStoryblok) => {
    return <div className="flex flex-col items-center w-full">
        <p className="py-4 px-8 text-xl">{quote.quote}</p>
        <h2 className="text-slate-500 font-bold">{quote.author}</h2>
    </div>
};

const TestimonialsSection = (props: TestimonialsStoryblok) => {

    return <SectionFullWidth className="bg-[url('../images/usx-home-testimonials.jpg')]">
        <Section>
            <h1 className="text-5xl font-extrabold text-slate-700 mb-8">{props.title}</h1>
            <div className="flex justify-center">
                { (props.quotes || []).map((quote, i) => {
                    return <Quote {...quote} key={`testimonials-${i}`}/>;
                })}
            </div>
        </Section>
    </SectionFullWidth>
};

export default TestimonialsSection;
