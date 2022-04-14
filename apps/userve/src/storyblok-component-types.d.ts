export interface BenefitsStoryblok {
  title: string;
  benefits_cards?: IconCardStoryblok[];
  highlight_words?: string;
  _uid: string;
  component: "Benefits";
  [k: string]: any;
}

export interface BlogPostCardStoryblok {
  title?: string;
  summary?: string;
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  tags?: string;
  link?: string;
  imageSrc?: string;
  _uid: string;
  component: "blog_post_card";
  [k: string]: any;
}

export interface BusinessStoryblok {
  title?: string;
  description?: string;
  stats?: HighlightCardStoryblok[];
  link?: string;
  _uid: string;
  component: "Business";
  [k: string]: any;
}

export interface CourseCardStoryblok {
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  title?: string;
  description?: string;
  link?: string;
  _uid: string;
  component: "course_card";
  [k: string]: any;
}

export interface FeatureStoryblok {
  name?: string;
  _uid: string;
  component: "feature";
  [k: string]: any;
}

export interface FeaturedBlogStoryblok {
  title?: string;
  description?: string;
  blogs?: BlogPostCardStoryblok[];
  _uid: string;
  component: "FeaturedBlog";
  [k: string]: any;
}

export interface FeaturedCoursesStoryblok {
  name: string;
  description?: any;
  course_cards: CourseCardStoryblok[];
  _uid: string;
  component: "FeaturedCourses";
  [k: string]: any;
}

export interface GridStoryblok {
  columns?: any[];
  _uid: string;
  component: "grid";
  [k: string]: any;
}

export interface HighlightCardStoryblok {
  title?: string;
  subtext?: string;
  _uid: string;
  component: "highlight_card";
  [k: string]: any;
}

export interface IconCardStoryblok {
  Title?: string;
  Description?: string;
  Icon?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: "icon_card";
  [k: string]: any;
}

export interface LandingStoryblok {
  title?: string;
  meta_description?: string;
  meta_keywords?: string;
  og_image?: string;
  Headline?: string;
  Description?: string;
  Image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  description?: string;
  Header?: string;
  Subheader?: string;
  Courses?: CourseCardStoryblok[];
  _uid: string;
  component: "Landing";
  [k: string]: any;
}

export interface ListStoryblok {
  title?: string;
  description?: string;
  _uid: string;
  component: "list";
  [k: string]: any;
}

export interface LogosStoryblok {
  title?: string;
  logo1?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  logo2?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  logo3?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  logo4?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  logo5?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  logo6?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: "logos";
  [k: string]: any;
}

export interface PageStoryblok {
  body?: any[];
  _uid: string;
  component: "page";
  uuid?: string;
  [k: string]: any;
}

export interface QuoteStoryblok {
  quote?: string;
  author?: string;
  _uid: string;
  component: "quote";
  [k: string]: any;
}

export interface SectionStoryblok {
  Header?: string;
  Subheader?: string;
  Image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  Background?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  _uid: string;
  component: "Section";
  [k: string]: any;
}

export interface SeoStoryblok {
  og_site_name?: string;
  og_url?: string;
  seo_title?: string;
  seo_description?: string;
  lang?: string;
  og_image?: string;
  title?: string;
  url?: string;
  og_type?: string;
  twitter_type?: string;
  twitter_title?: string;
  twitter_site?: string;
  twitter_card?: string;
  twitter_description?: string;
  og_description?: string;
  _uid: string;
  component: "Seo";
  [k: string]: any;
}

export interface TeaserStoryblok {
  headline?: string;
  _uid: string;
  component: "teaser";
  [k: string]: any;
}

export interface TestimonialsStoryblok {
  title?: string;
  quotes?: QuoteStoryblok[];
  _uid: string;
  component: "testimonials";
  [k: string]: any;
}

export interface TwoColStoryblok {
  title?: string;
  content?: string;
  image?: {
    alt?: string;
    copyright?: string;
    id: number;
    filename: string;
    name: string;
    title?: string;
  };
  layout: "" | "img-right" | "img-left";
  list?: ListStoryblok[];
  listLayout: "" | "list-three" | "list-four";
  _uid: string;
  component: "two_col";
  [k: string]: any;
}
