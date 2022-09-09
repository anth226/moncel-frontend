import React from 'react';

interface FormInfo {
    className?: string;
    state?: string | null;
    title?: string | null;
    campaign_sfid? : string;
    campaign_code? : string;
}

const FormspreeSupportForm = (props: FormInfo) => {
    const { className, campaign_sfid, campaign_code } = props;
    return (
        <div id="formspreeForm" className={`p-8 rounded-md bg-white ${className || ""}`}>
            <h4>Student Support</h4>
            <p>If you have already enrolled into a course and are experiencing issues, please complete the form below.</p>
            <form
                id="form-support"
                name="form-support"
                action="https://formspree.io/f/xbjwkovd"
                method="POST"
                className="clearfix form-validation"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label htmlFor="firstname"
                        >First Name<span className="required">*</span></label
                        >
                        <input
                            required
                            name="firstname"
                            type="text"
                            className="form-control"
                            id="form-enquiry-firstname"
                            placeholder="e.g. John"
                            maxLength={40}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="lastname"
                        >Last Name<span className="required">*</span></label
                        >
                        <input
                            required
                            name="lastname"
                            type="text"
                            className="form-control"
                            id="form-enquiry-lastname"
                            placeholder="e.g. Smith"
                            maxLength={40}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label htmlFor="email"
                        >Email Address<span className="required">*</span></label
                        >
                        <input
                            required
                            name="email"
                            type="email"
                            className="form-control"
                            id="form-enquiry-email"
                            placeholder="e.g. john@email.com"
                            maxLength={80}
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="phone"
                        >Phone Number<span className="required">*</span></label
                        >
                        <input
                            required
                            type="text"
                            name="phone"
                            className="form-control"
                            id="form-enquiry-phone"
                            placeholder="e.g. 400-123-4567"
                            minLength={10}
                            maxLength={40}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="mb-4">
                        <label htmlFor="subject">Subject<span className="required">*</span></label>
                        <input
                            required
                            name="subject"
                            type="text"
                            className="form-control"
                            id="form-enquiry-subject"
                            placeholder="In just a few words, describe your enquiry."
                            maxLength={255}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="mb-4">
                        <label htmlFor="message">Description<span className="required">*</span></label>
                        <textarea
                            required
                            name="message"
                            className="form-control"
                            id="form-enquiry-message"
                            rows={10}
                            cols={50}
                            placeholder="Provide any more details regarding your issue."
                            maxLength={32000}
                        ></textarea>
                    </div>
                </div>

                <input type="hidden" name="geo_city" />
                <input type="hidden" name="geo_region" />
                <input type="hidden" name="geo_country" />

                <input
                    type="hidden"
                    name="campaign_code"
                    value={ campaign_code || "" }
                />
                <input
                    type="hidden"
                    name="campaign_sfid"
                    value={ campaign_sfid || "" }
                />
                <input type="hidden" name="brand_code" value="usu" />
                <input type="hidden" name="brand_sfid" value="a027F00002QFFT1QAP" />

                <button
                    id="form-lm-submit"
                    type="submit"
                    className="btn btn-primary button w-full mt-1"
                >
                    <span>Submit</span>
                </button>
                <div className="clear"></div>

                <input
                    type="hidden"
                    name="lead_notes"
                    value="Form submitted from USU contact page - student support button."
                />
            </form>
        </div>
    );

}

export default FormspreeSupportForm;
