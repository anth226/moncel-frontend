import { SeoStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';

export interface LocalFileSource {
  publicURL: string;
  childImageSharp: {
    gatsbyImageData: any; // todo but no good imports from gatsby :(
  }
  [key: string]: unknown;
}

export interface Slug {
    slug: string;
    full_slug: string;
    content: string;
    imageFileSrc?: LocalFileSource[];
};

export interface DataProps {
    allStoryblokEntry: {
      nodes: Slug[];
    }
    landing?: {
      nodes: Slug[];
    }
    hero?: {
      nodes: Slug[];
    }
    benefits?: {
      nodes: Slug[];
    }
    seo: {
      nodes: SeoStoryblok[];
    }
};

export interface CourseTemplateProps {
  hero?: {
    nodes: Slug[];
  }
  courseInfo?: {
    nodes: Slug[];
  }
  benefits?: {
    nodes: Slug[];
  }
  accounts?: {
    nodes: Slug[];
  }
  features?: {
    nodes: Slug[];
  }
  testimonials?: {
    nodes: Slug[];
  }
  faqs?: {
    nodes: Slug[];
  }
  seo: {
    nodes: SeoStoryblok[];
  }
}