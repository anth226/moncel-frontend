import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import { gql } from "@apollo/client";
import ReactMarkdown from 'react-markdown';
import type { InferGetStaticPropsType } from 'next';

import { client } from 'lib/strapi/graphql';

import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';
import styles from 'styles/icx_secondary.module.scss';

import { IccCertificatePage, IccFaq, IccLandingPage } from "generated/strapi-types";

const Faqs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [ expanded, setExpanded ] = useState(-1);

    const strapiData: IccFaq = props.strapiData.iccFaq.data.attributes;
    const layoutData: Pick<IccLandingPage, "header" | "footer" | "HeroSection"> = props.strapiData.iccLandingPage.data.attributes;
    const sidebarData: Pick<IccCertificatePage, "HeroSection"> = props.strapiData.iccCertificatePage.data.attributes;

    const handleClick = (i: number) => {
        if(i === expanded) {
            setExpanded(-1);
        }
        else {
            setExpanded(i);
        }
    };

    return <div className={styles.page}>
        <OneCol header={layoutData.header} footer={layoutData.footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <h1 className="text-center text-md-start">FAQs</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end">
                            <SidebarCTA data={sidebarData.HeroSection} />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="accordion col-12 col-md-7 col-lg-8">
                            {
                                (strapiData.FAQs?.FAQs || []).map((card, i) => {
                                    if(!card) return null;
                                    return <div className="card mb-3 rounded-0" key={`faq-${i}`}>
                                        <button className="btn btn-link text-start p-3" onClick={() => handleClick(i)}>{card.Question}</button>
                                        <Collapse className="px-3 pt-3" in={i === expanded}><div><ReactMarkdown>{card.Answer || ""}</ReactMarkdown></div></Collapse>
                                    </div>
                                })
                            }
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-dark d-md-none">
                <div className="container">
                    <div className="row">
                        <div className="col-12">
                            <SidebarCTA data={sidebarData.HeroSection} />
                        </div>
                    </div>
                </div>
            </div>
        </OneCol>
        <div className="d-md-none mobile-space"></div>
    </div>
}

export default Faqs;

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
                
                iccFaq {
                    data {
                        attributes {
                            FAQs {
                                title
                                FAQs {
                                Question
                                Answer
                                }
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
                      }
                    }
                }
            
            }
        `
    });
    return { props: { strapiData: data } };
}
