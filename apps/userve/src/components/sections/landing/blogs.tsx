import React from 'react';
import { SectionFullWidth } from 'src/components/core/Section';
import { FeaturedBlogStoryblok, BlogPostCardStoryblok } from 'src/storyblok-component-types';

const Quote = (blog: BlogPostCardStoryblok) => {
    return <div className="flex flex-col">
        <img src={blog.image?.filename || ""} />
        <p>{blog.title}</p>
        <h2>{blog.summary}</h2>
    </div>
};

const TestimonialsSection = (props: FeaturedBlogStoryblok) => {
    return <SectionFullWidth className="bg-slate-300">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <div className="grid grid-cols-2 grid-flow-row">
            { (props.blogs || []).map((blog, i) => {
                return <Quote {...blog} key={`testimonials-${i}`}/>;
            })}
        </div>
    </SectionFullWidth>
};

export default TestimonialsSection;
