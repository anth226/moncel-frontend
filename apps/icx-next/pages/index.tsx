import type { InferGetStaticPropsType } from 'next';
import { gql } from "@apollo/client";

import Head from 'components/Head';
import { Header, Footer } from 'components/layout';
import HeroSection from 'components/landing/hero';
import StepsSection from 'components/landing/steps';
import PricingSection from 'components/landing/pricing';
import FAQSection from 'components/landing/faq';
import CTASection from 'components/landing/cta';
import { client } from "lib/strapi/graphql";
import { findAndDownloadStrapiFiles } from 'moncel-one-sdk';
import { IccLandingPage } from "generated/strapi-types";

import icxstyles from '../styles/icx.module.scss';

const Home = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
  const strapiData:IccLandingPage = props.strapiData.iccLandingPage.data.attributes;

  return (
    <div>
      <Head />
      <Header data={strapiData.header} />
      <main className={icxstyles.page}>
        <div className="bg-dark hero-bg">
          <HeroSection data={strapiData.HeroSection} />
        </div>
        <div className="container">
          <StepsSection data={strapiData.EasySteps} />
        </div>
        <div className="bg-light">
          <div className="container">
            <PricingSection data={strapiData.BenefitsAndPrice} />
          </div>
        </div>
        <div className="container">
          <FAQSection data={strapiData.FAQs} />
        </div>
        <div className="bg-dark">
          <CTASection data={strapiData.FinalCTA} />
        </div>
        <Footer data={strapiData.footer} />
      </main>
    </div>
  )
}

export default Home;

export const getStaticProps = async () => {

  const { data } = await client.query({
    query: gql`
      query {
        iccLandingPage {
          data {
            id
            attributes {
              HeroSection {
                title
                Button {
                  text
                  href
                }
                HeroImage {
                  data {
                    attributes {
                      __typename
                      url
                      previewUrl
                    }
                  }
                }
              }
              EasySteps {
                title
                steps {
                  image {
                    data {
                      attributes {
                        __typename
                        url
                      }
                    }
                  }
                  title
                  description
                }
              }
              BenefitsAndPrice {
                Price
                TopPriceText
                BottomPriceText
                Button {
                  href
                  text
                }
                benefits {
                  text
                }
              }
              FAQs {
                title
                Faqs {
                  Answer
                  Question
                }
              }
              FinalCTA {
                title
                button {
                  href
                  text
                }
              }
              header {
                logo {
                  data {
                    attributes {
                      __typename
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
                      __typename
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
      }
    `
  });
  await findAndDownloadStrapiFiles(data);

  return { props: {
    strapiData: data
  } };
};
