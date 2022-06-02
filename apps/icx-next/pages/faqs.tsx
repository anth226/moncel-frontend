import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import ReactMarkdown from 'react-markdown';
import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cms/types';

import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';
import styles from 'styles/icx_secondary.module.scss';

const Faqs = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const [ expanded, setExpanded ] = useState(-1);
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    const faqs: StoryBlokFaqsSection = jsonata('content.body[component="section_faqs_secondary"]').evaluate(props.faqs);

    const handleClick = (i: number) => {
        if(i === expanded) {
            setExpanded(-1);
        }
        else {
            setExpanded(i);
        }
    };

    return <div className={styles.page}>
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <h1 className="text-center text-md-start">FAQs</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 d-none d-md-flex justify-content-end">
                            <SidebarCTA />
                        </div>
                    </div>
                </div>
            </div>
            <div className="bg-light">
                <div className="container">
                    <div className="row">
                        <div className="accordion col-12 col-md-7 col-lg-8">
                            {
                                faqs.faqs_cards.map((card, i) => {
                                    return <div className="card mb-3 rounded-0" key={`faq-${i}`}>
                                        <button className="btn btn-link text-start p-3" onClick={() => handleClick(i)}>{card.question}</button>
                                        <Collapse className="px-3 pt-3" in={i === expanded}><div><ReactMarkdown>{card.answer}</ReactMarkdown></div></Collapse>
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
                            <SidebarCTA />
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
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const faqs: StoryblokStory = jsonata('stories[full_slug="ICX/faqs"]').evaluate(stories);
    return { props: { stories, faqs, layout } };
}
