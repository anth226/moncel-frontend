import React from "react";
import { Title, Meta } from "react-head";
import Seo from 'src/components/core/Seo';
import { SeoStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';
import "src/styles/global.scss";

const Head = ({ seo, context }: { seo: SeoStoryblok, context: CourseData}) => {
  return <>
    <Seo {...seo} context={context}/>
    <link rel="canonical" href={seo.canonical || window.location.href}></link>
  </>
};
export default Head;
