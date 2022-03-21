import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryBlokCertificateHeroContent, StoryBlokCertificateBenefitContent, StoryBlokCertificateRecommendationContent, StoryBlokCertificateStatisticsContent, StoryBlokCertificateStory } from 'moncel-one-sdk/cdn/types';

import CertificateHero from 'components/certificate/hero';
import Benefits from 'components/certificate/benefits';
import Recommendations from 'components/certificate/recommendation';
import Statistics from 'components/certificate/statistics';
import icxstyles from '../styles/icx_secondary.module.scss'

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const heroSecondary: StoryBlokCertificateHeroContent = jsonata('body[component="section_hero_secondary"]').evaluate(props.certificate?.content);
    const benefits: StoryBlokCertificateBenefitContent = jsonata('body[component="section_benefits"]').evaluate(props.certificate?.content);
    const recommendations: StoryBlokCertificateRecommendationContent = jsonata('body[component="section_recommendation"]').evaluate(props.certificate?.content);
    const statistics: StoryBlokCertificateStatisticsContent = jsonata('body[component="section_statistics"]').evaluate(props.certificate?.content);

    return <div className={icxstyles.page}>
        <div>header</div> {/* placeholder */}
        <CertificateHero hero={heroSecondary} />
        <Benefits benefits={benefits} />
        <Recommendations recommendations={recommendations} />
        <Statistics statistics={statistics} />
    </div>;
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const certificate: StoryBlokCertificateStory = jsonata('stories[name="Certificate"]').evaluate(stories);
    return { props: { certificate } };
}
