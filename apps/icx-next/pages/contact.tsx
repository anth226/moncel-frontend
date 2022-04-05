import type { InferGetStaticPropsType } from 'next';
import jsonata from 'jsonata';
import { getStoryblokStories } from 'lib';
import { StoryblokStory, StoryBlokHeader, StoryBlokFooter } from 'moncel-one-sdk/cms/types';
import OneCol from 'components/layout/one-col';
import SidebarCTA from 'components/sidebar-cta';
import styles from 'styles/icx_secondary.module.scss';

const Contact = (props: InferGetStaticPropsType<typeof getStaticProps>) => {
    const layout = jsonata('content[component="template_layout"]').evaluate(props.layout);
    const header: StoryBlokHeader = layout.header?.[0];
    const footer: StoryBlokFooter = layout.footer?.[0];

    return <div className={styles.page}>
        <OneCol header={header} footer={footer}>
            <div className="bg-primary">
                <div className="container">
                    <div className="row">
                        <div className="col-12 col-md-7 col-lg-8">
                            <h1>Contact Us</h1>
                        </div>
                        <div className="col-12 col-md-5 col-lg-4 d-none d-md-block">
                            <SidebarCTA />
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
                            <h2>General Enquiry</h2>
                        </div>
                        <form id="form-enquiry" name="form-general-icc" action="https://formspree.io/f/xoqyzdzy" method="POST" className="clearfix form-validation"> 
                            <p>If you have a general enquiry, please fill out the form below.</p>
                            <div className="row">
                                <div className="form-group col-6 mb-3"> <label htmlFor="firstname">First Name *</label> <input required name="firstname" type="text" className="form-control" id="form-enquiry-firstname" aria-describedby="" placeholder="John" /> <div className="feedback invalid-feedback">Please provide your first name</div> </div> <div className="form-group col-6"> <label htmlFor="lastname">Last Name *</label> <input required name="lastname" type="text" className="form-control" id="form-enquiry-lastname" aria-describedby="" placeholder="Smith" /> <div className="feedback invalid-feedback">Please provide your last name</div></div>
                            </div>

                            <div className="row">
                                <div className="form-group col-6 mb-3"> <label htmlFor="email">Email Address *</label> <input required name="email" type="email" className="form-control" id="form-enquiry-email" aria-describedby="" placeholder="e.g. john@email.com" /> <div className="feedback invalid-feedback">Please provide a valid email address</div> </div> <div className="form-group col-6"> <label htmlFor="phone">Phone Number *</label> <input type="text" name="phone" className="form-control" id="form-enquiry-phone" aria-describedby="" placeholder="e.g. 1 400-000-0000" /> <div className="feedback invalid-feedback">Please provide your phone number</div> </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 mb-3"> <label htmlFor="subject">Subject *</label> <input required name="subject" type="text" className="form-control" id="form-enquiry-subject" aria-describedby="" placeholder="In just a few words, describe your enquiry" /> <div className="feedback invalid-feedback">Please provide a subject line</div> </div>
                            </div>

                            <div className="row">
                                <div className="form-group col-12 mb-3"> <label htmlFor="message">Message *</label> <textarea required name="message" className="form-control" id="form-enquiry-message" aria-describedby="" rows={10} cols={50} placeholder="Provide a detailed description of your enquiry"></textarea> <div className="feedback invalid-feedback">Please provide a detailed description of your enquiry</div> </div>
                            </div>

                            <button id="form-enquiry-submit" type="submit" className="mt-4 btn btn-primary">Submit Enquiry</button>
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
    const stories = { stories: await getStoryblokStories() };
    const layout = jsonata("stories[slug='layout']").evaluate(stories);
    const whyInstacert: StoryblokStory = jsonata('stories[full_slug="ICX/why-instacert"]').evaluate(stories);
    return { props: { stories, whyInstacert, layout } };
}
