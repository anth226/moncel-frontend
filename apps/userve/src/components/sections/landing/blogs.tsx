import React from 'react';
import { Link } from 'gatsby';
import { Section } from 'src/components/core/Section';
import { FeaturedBlogStoryblok, BlogPostCardStoryblok } from 'src/storyblok-component-types';
import { Header2, Header5, Text } from 'src/components/core/typography';

const BlogTag = ({ tag }: { tag: string }) => {
    return <div className="text-xs bg-cornflower text-white mb-4 px-2 py-1 rounded">
        {tag}
    </div>
};

const BlogCard = (blog: BlogPostCardStoryblok) => {
    const tags = (blog.tags || "").split(',');
    return <div className="card flex flex-col rounded-2xl overflow-hidden bg-white drop-shadow-xl">
        <div>
            <div className="card-image">
                <Link to={blog.link || ""}>
                    <img src={blog.imageSrc || blog.image?.filename || ""} alt={blog.title} />
                </Link>
            </div>
            <div className="card-body">
                <div className="flex">
                    {tags.map((tag, i) => {
                        return <BlogTag tag={tag} />
                    })}
                </div>
                <Link to={blog.link || ""}><Header5>{blog.title}</Header5></Link>
                <p className="text-lynch mt-4">{blog.summary}</p>
            </div>
        </div>
        <div className="card-button">
            <Link to={blog.link || ""}><button className="btn btn-primary w-full">Learn More</button></Link>
        </div>
    </div>
};

const FeaturedBlogsSection = (props: FeaturedBlogStoryblok) => {
    return <Section>
            <Header2>{props.title}</Header2>
            <Text>{props.description}</Text>
            <div className="flex flex-col md:grid md:grid-cols-3 grid-flow-md:row gap-10">
                {(props.blogs || []).map((blog, i) => {
                    return <BlogCard {...blog} key={`blog-${i}`} />;
                })}
            </div>
        </Section>
};

export default FeaturedBlogsSection;
