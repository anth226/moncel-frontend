import { useEffect } from 'react';

import { Section } from 'components/core/Section';
import { Header2 } from 'components/core/typography';

import { readRSS } from 'lib/rss';

const blogUrl = "https://blog.foodsafety.com.au/blog/rss.xml";
const newsUrl = "https://blog.foodsafety.com.au/news/rss.xml";

const BlogSection = () => {
    const getData = async () => {
        const blogData = await readRSS(blogUrl)
        const newsData = await readRSS(newsUrl)
    };
    useEffect(() => {
        getData();
    });

    return <Section className="bg-white section-vertical-padding flex flex-col items-center px-4 text-center md:text-left">
        <Header2 className="text-teal">Stay up-to-date with the latest in food safety</Header2>
    </Section>;
};

/**
 * MEMBERS-only GUIDES WILL BE STATIC UNTIL IMPLEMENTED DYNAMICALLY
 */
export default BlogSection;
