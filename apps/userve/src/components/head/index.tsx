import React from "react";
import { Title, Meta } from "react-head";
import Seo from 'src/components/core/Seo';
import { SeoStoryblok } from 'src/storyblok-component-types';
import "src/styles/global.scss";

const Head = ({ seo }: { seo: SeoStoryblok}) => (
  <>
    <Title>{"Alcohol Server & Food Safety Training Online"}</Title>
    <Seo {...seo} />
  </>
);

export default Head;
