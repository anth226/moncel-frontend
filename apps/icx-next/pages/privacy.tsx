import jsonata from 'jsonata';
import type { InferGetStaticPropsType } from 'next';

import { Header, Footer } from 'components/layout';
import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cdn/types';
import styles from 'styles/icx_secondary.module.scss';

const Privacy = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    return <div className={styles.page}>
    <Header header={header} />
        <div className={`${styles['three-col-section']} ${styles.hero}`}>
            <div className={styles.center}>
                <h1>FAQs</h1>
            </div>
        </div>
    </div>
}

export default Privacy;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const faqs: StoryblokStory = jsonata('stories[full_slug="ICX/faqs"]').evaluate(stories);
    return { props: { stories, faqs, layout } };
}
