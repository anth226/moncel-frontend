import type { GetStaticPaths } from 'next';
import { gql } from "@apollo/client";
import { useRouter } from 'next/router';
import ReactMarkdown from 'react-markdown';

import { client } from 'lib/strapi/graphql';
import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';

import { IccCertificatePage, IccLegal, IccLandingPage } from "generated/strapi-types";
import React from 'react';

const Legal = (props: (Awaited<ReturnType<typeof getStaticProps>>)['props']) => {
    const router = useRouter();
    if(!props.strapiData) return null;
    const strapiData: IccLegal = props.strapiData.iccLegal.data.attributes;
    const layoutData: Pick<IccLandingPage, "header" | "footer" | "HeroSection"> = props.strapiData.iccLandingPage.data.attributes;
    const sidebarData: Pick<IccCertificatePage, "HeroSection"> = props.strapiData.iccCertificatePage.data.attributes;

    if(router.isFallback) {
        return null;
    }

    return <>
        <OneCol header={layoutData.header} footer={layoutData.footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                        <h1 className="text-center text-md-start">{props.title}</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end">
                            {<SidebarCTA data={sidebarData.HeroSection} />}
                        </div>
                    </div>
                </div>
            </div>
            <div className="container legal">
                <div className="row">       
                    <div className="col-12 col-md-7 col-lg-8">
                        <ReactMarkdown>{strapiData[props.pathname]}</ReactMarkdown>
                    </div>         
                    <div className="col-12 col-md-7 col-lg-8 content"></div>
                </div>      
            </div>
            <div className="bg-dark d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            {<SidebarCTA data={sidebarData.HeroSection} />}
                        </div>
                    </div>
                </div>
            </div>
        </OneCol>
        <div className="d-md-none mobile-space"></div>
    </>
}

export default Legal;

const LEGAL_PATHS = ["privacy", "refund", "security", "terms"];
// this is fine bc icc isn't localized
enum TITLES {
    privacy= "Privacy Policy",
    terms= "Terms of Use",
    security= "Security Policy",
    refund= "Refund Policy"
}

interface LegalRouteParams {
    params: { legal: keyof typeof TITLES }
}

export const getStaticPaths: GetStaticPaths = async () => {
    return {
        paths: LEGAL_PATHS.map((pathname) => ({ params: { legal: pathname } })),
        fallback: true,
    }
}

export const getStaticProps = async ({ params }: LegalRouteParams) => {
    const { legal: pathname } = params;
    const title = TITLES[pathname];
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
                
                iccLegal {
                    data {
                    attributes {
                        privacy
                        terms
                        security
                        refund
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
                      }
                    }
                }
            
            }
        `
    });
    return { props: { strapiData: data, title, pathname } };
}
