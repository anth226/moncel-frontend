import type { InferGetStaticPropsType } from 'next'
import { gql } from "@apollo/client";

import CertificateHero from 'components/certificate/hero';
import Benefits from 'components/certificate/benefits';
import Recommendations from 'components/certificate/recommendation';
import Statistics from 'components/certificate/statistics';
import Faqs from 'components/certificate/faq';
import SidebarCTA from 'components/sidebar-cta';
import OneCol from 'components/layout/one-col';
import { client } from 'lib/strapi/graphql';
import { IccCertificatePage, IccLandingPage } from "generated/strapi-types";

const Certificate = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const strapiData: IccCertificatePage = props.strapiData.iccCertificatePage.data.attributes;
    const layoutData: Pick<IccLandingPage, "header" | "footer"> = props.strapiData.iccLandingPage.data.attributes;
    return <div>
        <OneCol header={layoutData.header} footer={layoutData.footer}>
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
    return { props: { strapiData: data } };
}
