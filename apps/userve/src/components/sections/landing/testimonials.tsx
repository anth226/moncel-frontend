import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { TestimonialsStoryblok, QuoteStoryblok } from 'src/storyblok-component-types';

const Quote = (quote: QuoteStoryblok) => {
    return <div className="flex flex-col items-center w-full">
        <div className="py-4 px-8 text-xl text-center">{quote.quote}</div>
        <div className="text-slate-500 font-bold">{quote.author}</div>
    </div>
};

const TestimonialsSection = (props: TestimonialsStoryblok) => {

    return <div className="bg-cover bg-[url('../images/usx-home-testimonials.jpg')]">
        <Section>
            <h2 className="text-4xl font-bold text-slate-700 mb-8 text-center">{props.title}</h2>
            <div className="flex justify-center">
                { (props.quotes || []).map((quote, i) => {
                    return <Quote {...quote} key={`testimonials-${i}`}/>;
                })}
            </div>
        </Section>
    </div>
};

export default TestimonialsSection;
