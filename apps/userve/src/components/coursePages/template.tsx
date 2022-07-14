import React from 'react';
import { graphql, PageProps } from "gatsby";

import Head from 'src/components/head';
import Layout from 'src/components/layout';
import { CourseTemplateProps } from 'src/lib/storyblokSourceTypes';
import { CourseData } from 'src/components/coursePages/types';
import { CoursePageStoryblok, CoursePageInfoSectionStoryblok, BenefitsStoryblok, AboutUsStoryblok, TestimonialsStoryblok, SeoStoryblok } from "src/storyblok-component-types";
import HeroSection from './hero';
import CourseInfoSection from './courseInfo';
import FaqsSection from './faqs';
import TabsSection from './tabs';
import BenefitsSection from './benefits';
import { AboutUsSection, TestimonialsSection } from 'src/components/sections/landing';

const pageStyles = {
    fontFamily: "Inter,sans-serif",
}

export default ({ data, pageContext }: PageProps<CourseTemplateProps, CourseData>) => {
    // Retrieve storyblok data by section
    const heroStories = data.hero?.nodes || [];
    const courseInfoStories = data.courseInfo?.nodes || [];
    const benefitsStories = data.benefits?.nodes || [];
    const accountsStories = data.accounts?.nodes || [];
    const featuresStories = data.features?.nodes || [];
    const testimonialsStories = data.testimonials?.nodes || [];
    const faqsStories = data.faqs?.nodes || [];
    const seoStories = data.seo?.nodes || [];

    // Filter storyblok data by the course type for this page
    const heroStory = heroStories.filter(slug => slug.slug === pageContext.type)[0];
    const courseInfoStory = courseInfoStories.filter(slug => slug.slug === pageContext.type)[0];
    const benefitsStory = benefitsStories.filter(slug => slug.slug === pageContext.type)[0];
    const accountsStory = accountsStories.filter(slug => slug.slug === pageContext.type)[0];
    const featuresStory = featuresStories.filter(slug => slug.slug === pageContext.type)[0];
    const testimonialsStory = testimonialsStories.filter(slug => slug.slug === pageContext.type)[0];
    const faqsStory = faqsStories.filter(slug => slug.slug === pageContext.type)[0];
    const seoStory = seoStories.filter(slug => slug.slug === pageContext.type)[0];

    // Parse content strings to json
    // Parsing empty strings will error; this is intentional as it indicates an error fetching data
    // TODO: try/catch is there to handle errors while course pages are still under construction in storyblok but should be removed once that data is populated
    let heroContent: CoursePageStoryblok, courseInfoContent: CoursePageInfoSectionStoryblok, benefitsContent: BenefitsStoryblok, accountsContent: AboutUsStoryblok, featuresContent: BenefitsStoryblok, testimonialsContent: TestimonialsStoryblok, faqsContent: CoursePageInfoSectionStoryblok, seoContent: SeoStoryblok;
    try {
      heroContent = JSON.parse(heroStory?.content || "");
      courseInfoContent = JSON.parse(courseInfoStory?.content || "")
      benefitsContent = JSON.parse(benefitsStory?.content || "")
      accountsContent = JSON.parse(accountsStory?.content || "")
      featuresContent = JSON.parse(featuresStory?.content || "")
      testimonialsContent = JSON.parse(testimonialsStory?.content || "")
      faqsContent = JSON.parse(faqsStory?.content || "")
      seoContent = JSON.parse(seoStory?.content || "")
      if(!heroContent || !courseInfoContent || !benefitsContent || !accountsContent || !featuresContent || !testimonialsContent || !faqsContent || !seoContent) return null;
    }
    catch (e){
      console.error(`Error fetching data for page ${pageContext.url}`)
      return null; // error or 404
    }

    let faqVersion;
    if (pageContext.type == "rbs") {
      faqVersion = "rbs"
    } else {
      faqVersion = "default"
    };
    
    return <div>
        <Head seo={seoContent} coursePageContext={pageContext} />
        <Layout>
            <main style={pageStyles}>
                <HeroSection content={heroContent} context={pageContext} heroStory={heroStory} />
                <CourseInfoSection {...courseInfoContent} className="bg-gradient-to-b from-hawkes to-white" story={courseInfoStory} />
                <BenefitsSection {...benefitsContent} story={benefitsStory}/>
                <TestimonialsSection {...testimonialsContent} />

                { faqVersion == "default" && <span><CourseInfoSection {...faqsContent} story={faqsStory}/><AboutUsSection {...accountsContent} story={accountsStory}/><BenefitsSection {...featuresContent} story={featuresStory} /></span> }

                { faqVersion == "rbs" && <span><TabsSection {...accountsContent} story={accountsStory}/><FaqsSection {...faqsContent} story={faqsStory}/></span> }
            </main>
        </Layout>
    </div>
}

{/* const query = ``; // query default copy, then query copy for this url */}
export const pageQuery = graphql`
  query {
    hero:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/hero/[^/]*$/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    courseInfo:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/course-info.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    benefits:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/benefits.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            fluid(toFormat: WEBP) {
              base64
              srcWebp
              srcSetWebp
              originalImg
              originalName
            }
          }
        }
      }
    }
    accounts:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/accounts.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    features:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/features.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    testimonials:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/testimonials.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    faqs:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/faqs.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
    seo:allStoryblokEntry(filter: {full_slug: {regex: "/^courses/course-pages/seo.*/"}}) {
      nodes {
        content
        slug
        full_slug
        imageFileSrc {
          publicURL
          childImageSharp {
            gatsbyImageData
          }
        }
      }
    }
}`;
