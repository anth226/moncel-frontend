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

const Head = ({ seo, context, location }: { seo: SeoStoryblok, context: CourseData, location:LocationData}) => {
  location = useLocation();
  return <>
    <Seo {...seo} context={context} location={location.href}/>
    <link rel="canonical" href={seo.canonical || location.href} />
  </>
};

export default Head;