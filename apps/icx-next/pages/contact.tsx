import type { InferGetStaticPropsType } from 'next';
import { gql } from "@apollo/client";
import { IccContact, IccLandingPage, IccCertificatePage } from "generated/strapi-types";
import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';
import { client } from 'lib/strapi/graphql';

import styles from 'styles/icx_secondary.module.scss';

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const strapiData: IccContact = props.strapiData.iccCertificatePage.data.attributes;
    const layoutData: Pick<IccLandingPage, "header" | "footer"> = props.strapiData.iccLandingPage.data.attributes;
    const sidebarData: Pick<IccCertificatePage, "HeroSection"> = props.strapiData.iccCertificatePage.data.attributes;

    return <div className={styles.page}>
        <OneCol header={layoutData.header} footer={layoutData.footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <h1 className="text-center text-md-start">Contact Us</h1>
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
                        <div className="col-12 col-md-7 col-lg-8 text-start">
                        <div className={styles.title}>
                            <div className={styles.line} />
                            <h2>{strapiData.title}</h2>
                        </div>
                        <form id="form-enquiry" name="form-general-icc" action="https://formspree.io/f/xoqyzdzy" method="POST" className="clearfix form-validation"> 
                            <p>{strapiData.description}</p>
                            <div className="row">
                                <div className="form-group col-6 mb-3">
                                    <label htmlFor="firstname">{strapiData.FirstNameLabel}*</label>
                                    <input required name="firstname" type="text" className="form-control" id="form-enquiry-firstname" aria-describedby="" placeholder={strapiData.FirstNamePlaceholder || ""} />
                                    <div className="feedback invalid-feedback">{strapiData.InvalidFirstName}</div>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="lastname">{strapiData.LastNameLabel}*</label>
                                    <input required name="lastname" type="text" className="form-control" id="form-enquiry-lastname" aria-describedby="" placeholder={strapiData.LastNamePlaceholder || ""} />
                                    <div className="feedback invalid-feedback">{strapiData.InvalidLastName}</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-6 mb-3">
                                    <label htmlFor="email">{strapiData.EmailLabel}*</label>
                                    <input required name="email" type="email" className="form-control" id="form-enquiry-email" aria-describedby="" placeholder={strapiData.EmailPlaceholder || ""} />
                                    <div className="feedback invalid-feedback">{strapiData.InvalidEmail}</div>
                                </div>
                                <div className="form-group col-6">
                                    <label htmlFor="phone">{strapiData.PhoneLabel}*</label>
                                    <input type="text" name="phone" className="form-control" id="form-enquiry-phone" aria-describedby="" placeholder={strapiData.PhonePlaceholder || ""} />
                                    <div className="feedback invalid-feedback">{strapiData.InvalidPhone}</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 mb-3">
                                    <label htmlFor="subject">{strapiData.SubjectLabel}*</label>
                                    <input required name="subject" type="text" className="form-control" id="form-enquiry-subject" aria-describedby="" placeholder={strapiData.SubjectPlaceholder || ""} />
                                    <div className="feedback invalid-feedback">{strapiData.SubjectLabel}</div>
                                </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 mb-3">
                                    <label htmlFor="message">{strapiData.MessageLabel}*</label>
                                    <textarea required name="message" className="form-control" id="form-enquiry-message" aria-describedby="" rows={10} cols={50} placeholder={strapiData.MessagePlaceholder || ""}></textarea>
                                    <div className="feedback invalid-feedback">{strapiData.InvalidMessage}</div>
                                </div>
                            </div>

                            <button id="form-enquiry-submit" type="submit" className="mt-4 btn btn-primary">{strapiData.ButtonLabel}</button>
                        </form>
                    </div>
                    </div>
                </div>

            </div>
        </OneCol>
    </div>
};

export default Contact;

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
            iccContact {
                data {
                    attributes {
                        title
                        description
                        FirstNameLabel
                        FirstNamePlaceholder
                        LastNameLabel
                        LastNamePlaceholder
                        EmailLabel
                        EmailPlaceholder
                        PhoneLabel
                        PhonePlaceholder
                        SubjectLabel
                        SubjectPlaceholder
                        MessageLabel
                        MessagePlaceholder
                        ButtonLabel
                        InvalidFirstName
                        InvalidLastName
                        InvalidEmail
                        InvalidPhone
                        InvalidSubject
                        InvalidMessage
                        MobileButtonLabel
                        LeadNote
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
        }`
    });
    return { props: { strapiData: data } };
};
