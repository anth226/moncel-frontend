import jsonata from 'jsonata';
import type { GetStaticPaths } from 'next';
import { useRouter } from 'next/router';
import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';
import { markdownToHtml } from 'moncel-one-sdk';

import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';

const Privacy = (props: (Awaited<ReturnType<typeof getStaticProps>>)['props']) => {
    const router = useRouter();
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);

    const header: StoryBlokHeader = layout?.header?.[0] || null;
    const footer: StoryBlokFooter = layout?.footer?.[0] || null;

    if(router.isFallback) {
        return null;
    }

    return <>
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                        <h1>Privacy Policy</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 d-none d-md-block">
                            {<SidebarCTA />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">       
                <div className="col-12 col-md-7 col-lg-8" dangerouslySetInnerHTML={{ __html: props.title }} />         
                    <div className="col-12 col-md-7 col-lg-8" dangerouslySetInnerHTML={{ __html: props.body }} />
                </div>      
            </div>
            <div className="bg-dark d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {<SidebarCTA />}
                        </div>
                    </div>
                </div>
            </div>
        </OneCol>
    </>
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
