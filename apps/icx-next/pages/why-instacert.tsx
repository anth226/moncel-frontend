import { useMediaQuery } from 'react-responsive'
import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cms';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';

import { Header, Footer } from 'components/layout';
import Hero from 'components/why-instacert/hero';
import Recommendation from 'components/why-instacert/recommendation';
import SidebarCTA from 'components/sidebar-cta';
import icxstyles from '../styles/icx_secondary.module.scss'

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
        <Header header={header} />
        <div className={icxstyles.page}>
            <Hero hero={heroSecondary} />
            <Recommendation recommendations={recommendations} />
            <Footer footer={footer} />
        </div>;
        { isDesktop ? <SidebarCTA /> : null }
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
