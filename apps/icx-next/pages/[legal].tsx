import jsonata from 'jsonata';
import type { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';

import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';
import { markdownToHtml } from 'moncel-one-sdk';
import OneCol from 'components/layout/one-col';
import styles from 'styles/icx_secondary.module.scss';

const Privacy = (props: (Awaited<ReturnType<typeof getStaticProps>>)['props']) => {
    const router = useRouter();
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);

    const header: StoryBlokHeader = layout?.header?.[0] || null;
    const footer: StoryBlokFooter = layout?.footer?.[0] || null;

    if(router.isFallback) {
        return null;
    }

    return <div className={styles.page}>
        <OneCol header={header} footer={footer}>
            <div className={`${styles['three-col-section']} ${styles.hero}`}>
                <div className={styles.center}>
                    <h1>Privacy Policy</h1>
                </div>
            </div>
            <div className={`${styles.body} ${styles['three-col-section']}`}>
                <div className={styles.center} dangerouslySetInnerHTML={{ __html: props.body }} />
            </div>
        </OneCol>
    </div>
}

export default Privacy;

const LEGAL_SLUGS = ["privacy", "refund", "security", "terms"];

interface LegalRouteParams {
    params: { legal: string }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: LEGAL_SLUGS.map((legal) => ({ params: { legal } })),
        fallback: true,
    }
}

export const getStaticProps = async ({ params }: LegalRouteParams) => {
    const { legal: slug } = params;
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    
    const _story: StoryblokStory = jsonata(`stories[full_slug="ICX/${slug}"]`).evaluate(stories)
    // const privacy: StoryblokStory = jsonata('stories[full_slug="ICX/privacy"]').evaluate(stories);
    const { body: privacyBody } = jsonata('content.body[component="section_markdown"]').evaluate(_story);
    const markdownBody = await (markdownToHtml(privacyBody));

    return { props: { stories, slug, [slug]: _story, layout, body: markdownBody } };
}
