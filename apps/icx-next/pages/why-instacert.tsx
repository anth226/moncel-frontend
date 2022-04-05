import { useMediaQuery } from 'react-responsive'
import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';

import Hero from 'components/why-instacert/hero';
import Recommendations from 'components/certificate/recommendation';
import SidebarCTA from 'components/sidebar-cta';
import OneCol from 'components/layout/one-col';

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

    const isDesktop = useMediaQuery({
        query: '(min-width: 768px)'
    });

    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    const heroSecondary = jsonata('content.body[component="section_hero_secondary"]').evaluate(props.whyInstacert);
    const recommendations = jsonata('content.body[component="section_recommendation"]').evaluate(props.whyInstacert);

    return <div>
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <Hero hero={heroSecondary} />
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <Recommendations recommendations={recommendations} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SidebarCTA />
                        </div>
                    </div>
                </div>
            </div>
        </OneCol>
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
