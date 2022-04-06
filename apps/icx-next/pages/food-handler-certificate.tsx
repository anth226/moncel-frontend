import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';

import { getStoryblokStories } from 'lib';
import { StoryBlokCertificateHeroContent, StoryBlokCertificateBenefitContent, StoryBlokCertificateRecommendationContent, StoryBlokCertificateStatisticsContent, StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cms/types';

import CertificateHero from 'components/certificate/hero';
import Benefits from 'components/certificate/benefits';
import Recommendations from 'components/certificate/recommendation';
import Statistics from 'components/certificate/statistics';
import Faqs from 'components/certificate/faq';
import SidebarCTA from 'components/sidebar-cta';
import OneCol from 'components/layout/one-col';

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
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <CertificateHero hero={heroSecondary} />
            </div>
            
            <div className="container pb-0">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-8">
                        <Benefits benefits={benefits} />  
                    </div>
                </div>
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
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Statistics statistics={statistics} /> 
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <Faqs faqs={faqs} />
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
        <div className="d-md-none mobile-space"></div>
    </div>
}

export default Certificate;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const certificate: StoryblokStory = jsonata('stories[name="Certificate"]').evaluate(stories);
    return { props: { certificate, layout } };
}
