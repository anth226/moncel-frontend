import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';
import { gql } from "@apollo/client";

import { getStoryblokStories } from 'lib';
import { StoryBlokCertificateHeroContent, StoryBlokCertificateBenefitContent, StoryBlokCertificateRecommendationContent, StoryBlokCertificateStatisticsContent, StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cms/types';

import CertificateHero from 'components/certificate/hero';
import Benefits from 'components/certificate/benefits';
import Recommendations from 'components/certificate/recommendation';
import Statistics from 'components/certificate/statistics';
import Faqs from 'components/certificate/faq';
import SidebarCTA from 'components/sidebar-cta';
import OneCol from 'components/layout/one-col';
import { client } from 'lib/strapi/graphql';
import { IccCertificatePage } from "generated/strapi-types";

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];

    const strapiData: IccCertificatePage = props.strapiData.iccCertificatePage.data.attributes;

    return <div>
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <CertificateHero data={strapiData.HeroSection} />
            </div>
            
            <div className="container pb-0">
                <div className="row">
                    <div className="col-12 col-md-7 col-lg-8">
                        <Benefits data={strapiData.BenefitsSection} />  
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <Recommendations data={strapiData.RecommendationSection} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="container">
                <div className="row">
                    <div className="col-12 col-md-6">
                        <Statistics data={strapiData.StatsSection} /> 
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <Faqs data={strapiData.FaqsSection} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SidebarCTA data={strapiData.HeroSection} />
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

    const { data } = await client.query({
        query: gql`
        query {
            iccCertificatePage {
              data {
                attributes {
                  HeroSection {
                    title
                    HeroList {
                      text
                    }
                    ProductName
                    ProductPrice
                    ProductList {
                      text
                    }
                    Button {
                      text
                      href
                    }
                  }
                  BenefitsSection {
                    Benefits {
                      title
                      description
                      image {
                        data {
                          attributes{
                            previewUrl
                            url
                          }
                        }
                      }
                    }
                  }
                  RecommendationSection {
                    Title
                    Recommendations {
                      title
                      description
                      image {
                        data {
                          attributes {
                            previewUrl
                            url
                          }
                        }
                      }
                    }
                  }
                  StatsSection {
                    Stats {
                      title
                      description
                      image {
                        data{
                          attributes{
                            url
                            previewUrl
                          }
                        }
                      }
                    }
                  }
                  FaqsSection {
                    title
                    FAQs {
                      Question
                      Answer
                    }
                  }
                  
                }
              }
            }
          }`
    });
    return { props: { strapiData: data, layout } };
}
