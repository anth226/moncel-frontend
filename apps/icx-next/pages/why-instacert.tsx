import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryBlokCertificateHeroContent, StoryBlokCertificateBenefitContent, StoryBlokCertificateRecommendationContent, StoryBlokCertificateStatisticsContent, StoryBlokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokCertificateFaqsContent } from 'moncel-one-sdk/cdn/types';

import { Header, Footer } from 'components/layout';
import CertificateHero from 'components/certificate/hero';
import Benefits from 'components/certificate/benefits';
import Recommendations from 'components/certificate/recommendation';
import Statistics from 'components/certificate/statistics';
import Faqs from 'components/certificate/faq';
import icxstyles from '../styles/icx_secondary.module.scss'

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    const heroSecondary = jsonata('[component="section_hero_secondary"]').evaluate(props.whyInstacert.content.body);
    debugger;
    return <div>
        <Header header={header} />
        <div className={icxstyles.page}>
            
            <Footer footer={footer} />
        </div>;
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryBlokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
