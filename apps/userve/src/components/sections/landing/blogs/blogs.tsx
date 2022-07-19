import React, { useEffect, useState } from 'react';

import { Section } from 'src/components/core/Section';
import { FeaturedBlogStoryblok, BlogPostCardStoryblok } from 'src/storyblok-component-types';
import { Header2, Header5, Text } from 'src/components/core/typography';
import Link from 'src/components/core/Link';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';
import { LocalFileSource, readRSS } from 'src/lib';

const RSS_BLOG_SOURCE = "https://blog.userve.com/us/rss.xml";

const BlogTag = ({ tag }: { tag: string }) => {
    return <div className="text-xs bg-cornflower text-white mb-4 px-2 py-1 rounded">
        {tag}
    </div>
};

const BlogCard = ({ blog, fileNode }: { blog: Pick<BlogPostCardStoryblok, "tags" | "title" | "link" | "summary">, fileNode: LocalFileSource | null }) => {
    const tags = (blog.tags || "").split(',');
    return <div className="card flex flex-col rounded-xl overflow-hidden bg-white shadow-xl">
        <div>
            <div className="card-image">
                <Link to={blog.link || ""}>
                    <DynamicImage fileNode={fileNode} alt={`preview image for blog post "${blog.title}"`} imgStyle={{borderTopRightRadius:'.5rem',borderTopLeftRadius:'.5rem'}}/>
                </Link>
            </div>
            <div className="card-body">
                <div className="flex">
                    {tags.map((tag, i) => {
                        return <BlogTag tag={tag} key={`blog-tag-${i}`} />
                    })}
                </div>
                <Link to={blog.link || ""}><Header5 className="hover:underline">{blog.title}</Header5></Link>
                <Text className="!mb-0">{blog.summary}</Text>       
            </div>
        </div>
        <div className="card-button">
            <a className="btn btn-invert w-full" href={blog.link || ""}>Read More</a>
        </div>
    </div>
};

const FeaturedBlogsSection = (props: FeaturedBlogStoryblok & StoryblokStoryProps) => {
    const [ rssBlogItems, setRSSBlogItems ] = useState<NodeListOf<Element> | null>(null);
    // fetch blogs
    useEffect(() => {
        if( window ) {
            readRSS(RSS_BLOG_SOURCE).then(doc => {
                const blogItems = doc.querySelectorAll('rss > channel > item');
                if(blogItems.length > 0) setRSSBlogItems(blogItems);
                else {
                    console.error('Unable to fetch hubspot blog items');
                }
            });
        }
    }, []);

    const defaultBlogComponent = (props.blogs || []).map((blog, i) => {
        const localImageFileNode = findMatchingLocalFileNode(getFilename(blog.image.filename), props.story)
        return <BlogCard blog={blog} fileNode={localImageFileNode} key={`blog-${i}`} />;
    });
    const rssBlogComponent = (Array.from((rssBlogItems || []) as Iterable<Element>)).map((element, i) => {
        const parser = new DOMParser();
        const encodedDescription = parser.parseFromString(element.querySelector('description')?.textContent || "", 'text/html');
        const fakeBlogPost = {
            title: element.querySelector('title')?.textContent || "",
            link: element.querySelector('link')?.innerHTML || "",
            tags: element.querySelector('category')?.innerHTML || "",
            summary: encodedDescription.querySelector('h2')?.textContent || "",
        }

        const encodedContent = parser.parseFromString(element.querySelector('encoded')!.textContent || "", 'text/html');
        const fakeFilenode = {
            publicURL: (encodedContent.querySelector('img.hs-featured-image') as HTMLImageElement).src,
        }

        return <BlogCard blog={fakeBlogPost} fileNode={fakeFilenode as LocalFileSource} />;
    });
    return <Section>
            <Header2 className="w-full md:w-1/2">{props.title}</Header2>
            <Text className="w-full md:w-1/2 mb-10">{props.description}</Text>
            <div className="flex flex-col md:grid md:grid-cols-3 grid-flow-md:row gap-10">
                { rssBlogItems ? rssBlogComponent : defaultBlogComponent }
            </div>
        </Section>
};

export default FeaturedBlogsSection;
