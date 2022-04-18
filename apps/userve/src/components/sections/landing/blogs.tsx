import React from 'react';
import { Link } from 'gatsby';
import { Section } from 'src/components/core/Section';
import { FeaturedBlogStoryblok, BlogPostCardStoryblok } from 'src/storyblok-component-types';

const BlogTag = ({ tag }: { tag: string }) => {
    return <div className="bg-indigo-500 text-white mb-4 p-2 rounded">
        { tag }
    </div>
};

const BlogCard = (blog: BlogPostCardStoryblok) => {
    const tags = (blog.tags || "").split(',');
    return <div className="flex flex-col shadow-lg rounded-xl overflow-hidden">
        <Link to={blog.link || ""}>
            <img src={blog.imageSrc || blog.image?.filename || ""} />
        </Link>
        <div className="flex flex-col py-4 px-8">
            <div className="flex">
                { tags.map((tag, i) => {
                    return <BlogTag tag={tag} />
                })}
            </div>
            <Link to={blog.link || ""}>
                <p className="inline-block text-lg text-slate-700">{blog.title}</p>
            </Link>
            <h2 className="text-base text-slate-500">{blog.summary}</h2>
        </div>
    </div>
};

const FeaturedBlogsSection = (props: FeaturedBlogStoryblok) => {
    return <Section>
        <h1 className="text-5xl font-extrabold text-slate-700">{props.title}</h1>
        <p className="text-lg text-slate-500 mb-8">{props.description}</p>
        <div className="grid grid-cols-3 grid-flow-row gap-10">
            { (props.blogs || []).map((blog, i) => {
                return <BlogCard {...blog} key={`testimonials-${i}`}/>;
            })}
        </div>
    </Section>
};

export default FeaturedBlogsSection;
