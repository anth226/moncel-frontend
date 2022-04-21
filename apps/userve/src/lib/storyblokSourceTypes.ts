import { SeoStoryblok } from 'src/storyblok-component-types';
import { CourseData } from 'src/components/coursePages/types';

export interface Slug {
    slug: string;
    full_slug: string;
    content: string
};

export interface DataProps {
    allStoryblokEntry: {
      nodes: Slug[];
    }
    landing?: {
      nodes: Slug[];
    }
    seo: {
      nodes: SeoStoryblok[],
    }
};
