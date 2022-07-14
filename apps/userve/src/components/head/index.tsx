import React from "react";
import Seo from 'src/components/core/Seo';
import Analytics from "../core/Analytics";
import { SeoStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';
import "src/styles/global.scss";

const Head = ({ seo, coursePageContext }: { seo: SeoStoryblok, coursePageContext: CourseData, storyblokData:SeoStoryblok }) => {
  return <>
    <Analytics />
    <Seo coursePageContext={coursePageContext} storyblokData={seo} />
  </>
};

export default Head;
