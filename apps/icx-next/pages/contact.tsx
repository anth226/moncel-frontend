import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { getStoryblokStories } from 'moncel-one-sdk/cdn';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cdn/types';

import { Header, Footer } from 'components/layout';
import contactStyles from 'styles/contact.module.scss';
import styles from 'styles/icx_secondary.module.scss'

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];
    return <div className={styles.page}>
        <Header header={header} />
        <div className={`${styles['three-col-section']} ${styles.hero}`}>
            <div className={styles.center}>
                <h1>Contact Us</h1>
            </div>
        </div>
        <div className={contactStyles['contact-form']}>
            <div className={styles.line} />
            <h2>General Enquiry</h2>
            <form id="form-enquiry" name="form-general-icc" action="https://formspree.io/f/xoqyzdzy" method="POST" className="clearfix form-validation"> 

            </form>
        </div>
    </div>
};

export default Contact;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
