import React from "react";
import { Title, Meta } from "react-head";
import Seo from 'src/components/core/Seo';
import { SeoStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';
import "src/styles/global.scss";
import { useLocation } from '@reach/router';

interface LocationData {
  href: string;
}

const Head = ({ seo, coursePageContext, location }: { seo: SeoStoryblok, coursePageContext: CourseData, location:LocationData}) => {
  location = useLocation();
  return <>
    <Seo {...seo} coursePageContext={coursePageContext} location={location.href}/>
    <link rel="canonical" href={seo.canonical || location.href} />
  </>
};

export default Head;