import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cdn/types';

import { Header, Footer } from 'components/layout';
import Hero from 'components/why-instacert/hero';
import icxstyles from '../styles/icx_secondary.module.scss'

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    const heroSecondary = jsonata('content.body[component="section_hero_secondary"]').evaluate(props.whyInstacert);

    return <div>
        <Header header={header} />
        <div className={icxstyles.page}>
            <Hero hero={heroSecondary} />
            <Footer footer={footer} />
        </div>;
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
