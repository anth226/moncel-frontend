import type { InferGetStaticPropsType } from 'next'
import jsonata from 'jsonata';
import { gql } from "@apollo/client";

import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';

import Hero from 'components/why-instacert/hero';
import Recommendations from 'components/certificate/recommendation';
import SidebarCTA from 'components/sidebar-cta';
import OneCol from 'components/layout/one-col';
import { client } from 'lib/strapi/graphql';

import { IccWhyInstacertPage, IccLandingPage } from "generated/strapi-types";

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {

    const strapiData: IccWhyInstacertPage = props.strapiData.iccWhyInstacertPage.data.attributes;
    const layoutData: Pick<IccLandingPage, "header" | "footer"> = props.strapiData.iccLandingPage.data.attributes;

    return <div>
        <OneCol header={layoutData.header} footer={layoutData.footer}>
            <div className="bg-primary">
                <Hero data={strapiData} />
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
    const { data } = await client.query({
        query: gql`
        query {
            iccLandingPage {
                data {
                  attributes {
                    header {
                      logo {
                        data {
                          attributes {
                            url
                          }
                        }
                      }
                      links { 
                          href
                        text
                      }
                    }
                    footer {
                      logo {
                        data {
                          attributes {
                            url
                          }
                                    }
                      }
                      NavLinks {
                        text
                        href
                      }
                      LegalLinks {
                        text
                        href
                      }
                      Copyright
                    }
                  }
                }
            }
            iccWhyInstacertPage {
                data {
                  attributes {
                    title
                    HeroSection {
                      title
                      closing
                      HeroList {
                          text
                      }
                      ProductName
                      ProductList {
                          text
                      }
                      ProductPrice
                      Button {
                          text
                          href
                      }
                    }
                    RecommendationSection {
                      Title
                      Recommendations {
                          image {
                            data {
                              attributes {
                                url
                              }
                            }
                          }
                          title
                          description
                      }
                    }
                  }
                }
            }
        }
        `
    });
    return { props: { strapiData: data } };
}
