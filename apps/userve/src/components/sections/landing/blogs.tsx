import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { FeaturedBlogStoryblok, BlogPostCardStoryblok } from 'src/storyblok-component-types';

const BlogCard = (blog: BlogPostCardStoryblok) => {
    return <div className="flex flex-col">
        <img src={blog.image?.filename || ""} />
        <p>{blog.title}</p>
        <h2>{blog.summary}</h2>
    </div>
};

const FeaturedBlogsSection = (props: FeaturedBlogStoryblok) => {
    return <SectionFullWidth className="bg-slate-300">
        <Section>
            <h1>{props.title}</h1>
            <p>{props.description}</p>
            <div className="grid grid-cols-2 grid-flow-row">
                { (props.blogs || []).map((blog, i) => {
                    return <BlogCard {...blog} key={`testimonials-${i}`}/>;
                })}
            </div>
        </Section>
    </SectionFullWidth>
};

export default FeaturedBlogsSection;
