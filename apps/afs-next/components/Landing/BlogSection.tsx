import { useEffect, useState } from 'react';
import NextImage, { StaticImageData } from 'next/image';

import { Link } from 'components/core';
import { Header2 } from 'components/core/typography';

import { readRSS } from 'lib/rss';
import Guides06 from 'public/guides06.jpg';
import Guides01 from 'public/guides01.jpg';
import Guides02 from 'public/guides02.jpg';
import Guides03 from 'public/guides03.jpg';
import Guides07 from 'public/guides07.jpg';

const blogUrl = "https://blog.foodsafety.com.au/blog/rss.xml";
const newsUrl = "https://blog.foodsafety.com.au/news/rss.xml";
// guides won't have a feed for the foreseeable future
const FAKE_GUIDE_RSS_DATA = [
    {
        title: "AIFS Guide to Pandemic Response for Food Businesses",
        link: "https://resources.foodsafety.com.au/guides/pandemic-response-food-business",
        imgSrc: Guides06,
        pubDate: "",
    },
    {
        title: "AIFS Guide to Building a Food Safety Program",
        link: "https://resources.foodsafety.com.au/guides/building-a-food-safety-program",
        imgSrc: Guides01,
        pubDate: "",
    },
    {
        title: "AIFS Guide to Building a Positive Food Safety Culture",
        link: "https://resources.foodsafety.com.au/guides/building-food-safety-culture",
        imgSrc: Guides02,
        pubDate: "",
    },
    {
        title: "AIFS Guide to Allergen Management for Food Businesses",
        link: "https://resources.foodsafety.com.au/guides/food-allergen-management",
        imgSrc: Guides03,
        pubDate: "",
    },
    {
        title: "AIFS Guide to Food Service to Vulnerable Persons",
        link: "https://resources.foodsafety.com.au/guides/food-service-vulnerable-persons",
        imgSrc: Guides07,
        pubDate: "",
    },
]

const formatDate = (date: Date) => {
    return new Intl.DateTimeFormat('en-US', { month: 'long', year: 'numeric', day: 'numeric' }).format(date);
}

interface BlogCard {
    title: string;
    link: string;
    imgSrc: string | StaticImageData;
    pubDate?: string;
}
const BlogCard = ({ element }: { element: Element | BlogCard }) => {
    let data;
    if(element instanceof Element) {
        const parser = new DOMParser();
            const encodedDescription = parser.parseFromString(element.querySelector('description')?.textContent || "", 'text/html');
            data = {
                title: element.querySelector('title')?.textContent || "",
                link: element.querySelector('link')?.innerHTML || "",
                pubDate: element.querySelector('pubDate')?.innerHTML || "",
                imgSrc: encodedDescription.querySelector('img')?.src || "",
        }
    } else {
        data = element;
    }
    return <div className="grid-cols-3 grid border-t-[1px] border-alto pt-4 gap-4">
        <div className="col-span-1 pr-4 pt-1"><NextImage src={data.imgSrc} blurDataURL={typeof data.imgSrc == "string" ? data.imgSrc : undefined} placeholder="blur" width={78} height={44} layout="responsive" /></div>
        <div className="col-span-2 flex flex-col justify-start items-start">
            <Link href={data.link} className="no-underline text-left">{data.title}</Link>
            { data.pubDate ? <p className="text-silver">{formatDate(new Date(data.pubDate))}</p> : null }
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
                {[0,1,2,3,4].map((row: number) => {
                    return <>
                        <BlogCard element={newsItems[row]} />
                        <BlogCard element={blogItems[row]} />
                        <BlogCard element={FAKE_GUIDE_RSS_DATA[row]} />
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
