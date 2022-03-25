import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryBlokCertificateHeroContent, StoryBlokCertificateBenefitContent, StoryBlokCertificateRecommendationContent, StoryBlokCertificateStatisticsContent, StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cdn/types';

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
    const heroSecondary: StoryBlokCertificateHeroContent = jsonata('body[component="section_hero_secondary"]').evaluate(props.certificate?.content);
    const benefits: StoryBlokCertificateBenefitContent = jsonata('body[component="section_benefits"]').evaluate(props.certificate?.content);
    const recommendations: StoryBlokCertificateRecommendationContent = jsonata('body[component="section_recommendation"]').evaluate(props.certificate?.content);
    const statistics: StoryBlokCertificateStatisticsContent = jsonata('body[component="section_statistics"]').evaluate(props.certificate?.content);
    const faqs: StoryBlokFaqsSection = jsonata('body[component="section_faqs_secondary"]').evaluate(props.certificate?.content);

    return <div>
        <Header header={header} />
        <div className={icxstyles.page}>
            <CertificateHero hero={heroSecondary} />
            <Benefits benefits={benefits} />
            <Recommendations recommendations={recommendations} />
            <Statistics statistics={statistics} />
            <Faqs faqs={faqs} />
            <Footer footer={footer} />
        </div>;
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const certificate: StoryblokStory = jsonata('stories[name="Certificate"]').evaluate(stories);
    return { props: { certificate, layout } };
}
