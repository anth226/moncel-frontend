import { useEffect, useState } from 'react';
import NextImage from 'next/image';

import { Link } from 'components/core';
import { Header2 } from 'components/core/typography';

import { readRSS } from 'lib/rss';

const blogUrl = "https://blog.foodsafety.com.au/blog/rss.xml";
const newsUrl = "https://blog.foodsafety.com.au/news/rss.xml";


const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', day: 'numeric' }).format(date);
}

const BlogCard = ({ element }: { element: Element }) => {
    const parser = new DOMParser();
        const encodedDescription = parser.parseFromString(element.querySelector('description')?.textContent || "", 'text/html');
        const data = {
            title: element.querySelector('title')?.textContent || "",
            link: element.querySelector('link')?.innerHTML || "",
            tags: element.querySelector('category')?.innerHTML || "",
            pubDate: element.querySelector('pubDate')?.innerHTML || "",
            imgSrc: encodedDescription.querySelector('img')?.src || "",
        }
        
    return <div className="grid-cols-3 grid border-t-[1px] border-alto pt-4 gap-4">
        <div className="col-span-1 pr-4 pt-1"><NextImage src={data.imgSrc} width={78} height={44} layout="responsive" /></div>
        <div className="col-span-2 flex flex-col justify-start items-start">
            <Link href={data.link} className="no-underline text-left">{data.title}</Link>
            <p className="text-silver">{formatDate(new Date(data.pubDate))}</p>
        </div>
    </div>;
};

const BlogSection = () => {
    const [ blogItems, setBlogItems ] = useState<NodeListOf<Element> | null>(null);
    const [ newsItems, setNewsItems ] = useState<NodeListOf<Element> | null>(null);
    const getRSSData = async () => {
        const blogData = await readRSS(blogUrl);
        const newsData = await readRSS(newsUrl);

        setBlogItems(blogData.querySelectorAll('rss > channel > item'));
        setNewsItems(newsData.querySelectorAll('rss > channel > item'));    
        
    };
    useEffect(() => {
        if(!blogItems || !newsItems) getRSSData();
    }, []);

    return <div className="padded-section bg-white section-vertical-padding flex flex-col items-center px-4 text-center md:text-left">
        <Header2 className="text-teal mb-4">Stay up-to-date with the latest in food safety</Header2>

        {/* Desktop */}
        { (!newsItems || !blogItems) ? null : <div className="w-full lg:grid grid-cols-3 gap-4 hidden">
            {/* <div className="col-span-1 gap-4"> */}
                {[0,1,2,3,4].map((row: number) => {
                    return <>
                        <BlogCard element={newsItems[row]} />
                        <BlogCard element={blogItems[row]} />
                        <BlogCard element={newsItems[row]} />
                    </>
                })
            }
          </div>
        }

        {/* Mobile */}
        { (!newsItems || !blogItems) ? null : <div className="w-full flex flex-col gap-4 lg:hidden">
            {Array.from(newsItems).slice(0,5).map((element: Element) => <BlogCard element={element} />)}
        </div>

        }
    </div>;
};

const Divider = () => <div className="w-full border-b-[1px] border-alto my-4" />;

/**
 * MEMBERS-only GUIDES WILL BE STATIC UNTIL IMPLEMENTED DYNAMICALLY
 */
export default BlogSection;
