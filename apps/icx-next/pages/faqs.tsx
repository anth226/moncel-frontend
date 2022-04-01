import { useState } from 'react';
import { Collapse } from 'react-bootstrap';
import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter, StoryBlokFaqsSection } from 'moncel-one-sdk/cms/types';

import OneCol from 'components/layout/one-col';
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
            <div className={`${styles['three-col-section']} ${styles.hero}`}>
                <div className={styles.center}>
                    <h1>FAQs</h1>
                </div>
            </div>
            <div className={`${styles.body} ${styles['three-col-section']}`}>
                <div className={styles.center}>
                    {
                        faqs.faqs_cards.map((card, i) => {
                            return <div key={`faq-${i}`} className={styles.question}>
                                <button className={styles.cell} onClick={() => handleClick(i)}>{card.question}</button>
                                <Collapse className={styles.cell} in={i === expanded}><div>{card.answer}</div></Collapse>
                            </div>
                        })
                    }
                </div>
            </div>
        </OneCol>
    </div>
}

export default Faqs;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const faqs: StoryblokStory = jsonata('stories[full_slug="ICX/faqs"]').evaluate(stories);
    return { props: { stories, faqs, layout } };
}
