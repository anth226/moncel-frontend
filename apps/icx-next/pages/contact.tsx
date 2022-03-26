import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { getStoryblokStories } from 'moncel-one-sdk/cms';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';

import { Header, Footer } from 'components/layout';
import contactStyles from 'styles/contact.module.scss';
import styles from 'styles/icx_secondary.module.scss';

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
        <div className={`${styles.body} ${styles['three-col-section']}`}>
            <div className={styles.center}>
                <div className={styles.title}>
                    <div className={styles.line} />
                    <h2>General Enquiry</h2>
                </div>
                <form id="form-enquiry" name="form-general-icc" action="https://formspree.io/f/xoqyzdzy" method="POST" className="clearfix form-validation"> 
                    <p>If you have a general enquiry, please fill out the form below.</p>
                    <div className="row">
                        <div className="form-group col-6"> <label htmlFor="firstname">First Name *</label> <input required name="firstname" type="text" className="form-control" id="form-enquiry-firstname" aria-describedby="" placeholder="John" /> <div className="feedback invalid-feedback">Please provide your first name</div> </div> <div className="form-group col-6"> <label htmlFor="lastname">Last Name *</label> <input required name="lastname" type="text" className="form-control" id="form-enquiry-lastname" aria-describedby="" placeholder="Smith" /> <div className="feedback invalid-feedback">Please provide your last name</div></div>
                    </div>

                    <div className="row">
                        <div className="form-group col-6"> <label htmlFor="email">Email Address *</label> <input required name="email" type="email" className="form-control" id="form-enquiry-email" aria-describedby="" placeholder="e.g. john@email.com" /> <div className="feedback invalid-feedback">Please provide a valid email address</div> </div> <div className="form-group col-6"> <label htmlFor="phone">Phone Number *</label> <input type="text" name="phone" className="form-control" id="form-enquiry-phone" aria-describedby="" placeholder="e.g. 1 400-000-0000" /> <div className="feedback invalid-feedback">Please provide your phone number</div> </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12"> <label htmlFor="subject">Subject *</label> <input required name="subject" type="text" className="form-control" id="form-enquiry-subject" aria-describedby="" placeholder="In just a few words, describe your enquiry" /> <div className="feedback invalid-feedback">Please provide a subject line</div> </div>
                    </div>

                    <div className="row">
                        <div className="form-group col-12"> <label htmlFor="message">Message *</label> <textarea required name="message" className="form-control" id="form-enquiry-message" aria-describedby="" rows={10} cols={50} placeholder="Provide a detailed description of your enquiry"></textarea> <div className="feedback">Please provide a detailed description of your enquiry</div> </div>
                    </div>

                    <button id="form-enquiry-submit" type="submit" className="mt-4 btn btn-lg btn-cta float-left"> <span className="d-none d-sm-block">Submit Enquiry</span> <span className="d-sm-none">Submit</span> </button>
                </form>
            </div>
        </div>
        <Footer footer={footer} />
    </div>
};

export default Contact;

export const getStaticProps = async () => {
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
