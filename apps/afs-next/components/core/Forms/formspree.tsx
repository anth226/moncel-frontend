import React, { useState } from 'react';
import { Header3 } from "../typography";
import styles from './styles.module.scss';

interface FormInfo {
    className?: string;
    state?: string | null;
    title?: string | null;
    campaign_sfid?: string;
    campaign_code?: string;
}

const FormspreeSupportForm = (props: FormInfo) => {
    const { className, campaign_sfid, campaign_code } = props;
    const [student, setStudent] = useState("");
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const studentStatus = e.target.value;
        setStudent(studentStatus);
    };
    return ( <div id="formspreeForm" className={`${styles["hubspot"]}`}>
        
        <Header3 className="px-6 py-5 bg-teal text-white w-full !m-0">{props.title}</Header3>
        <div className={`p-6 bg-alabaster ${className}`}>
            <p className="mb-4">If you have already enrolled into a course and are experiencing issues, please complete the form below.</p>
            <form
                id="form-support"
                name="form-support"
                action="https://formspree.io/f/xvodnyzq"
                method="POST"
                className="clearfix form-validation"
            >
                <div className="grid grid-cols-1 md:grid-cols-2 md:gap-2">
                    <div className="mb-4">
                        <label htmlFor="firstname"
                        >First Name<span className="hs-form-required">*</span></label
                        >
                        <legend>Please enter your first name</legend>
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
                        >Last Name<span className="hs-form-required">*</span></label
                        >
                        <legend>Please enter your last name</legend>
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
                        >Email Address<span className="hs-form-required">*</span></label
                        >
                        <legend>Please enter your work email address</legend>
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
                        >Phone Number<span className="hs-form-required">*</span></label
                        >
                        <legend>Please enter your mobile phone number</legend>
                        <input
                            required
                            type="text"
                            name="phone"
                            className="form-control"
                            id="form-enquiry-phone"
                            placeholder="e.g. 01-2345-6789"
                            minLength={10}
                            maxLength={40}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1 mb-4">
                    <label>Do you have a User ID?<span className="hs-form-required">*</span></label>
                    <legend>Your User ID is the 10 character identifier that you use to login to the website. It is provided to you in your welcome email.</legend>
                    <div className="grid grid-cols-1">
                        <div className="flex">
                            <input type="radio" id="yes" name="user-account" value="yes" className="mr-2 h-6" checked={student === 'yes'} onChange={handleChange} required/>
                            <label htmlFor="yes">Yes, I have a User ID</label>
                        </div>
                        <div className="flex">
                            <input type="radio" id="no" name="user-account" value="no" className="mr-2 h-6" checked={student === 'no'} onChange={handleChange} />
                            <label htmlFor="no">No, I {`don't`} have a User ID</label>
                        </div>
                    </div>
                </div>

                {(student == "yes") && (<div> <div className="grid grid-cols-1 mb-4" id="user-student">
                    <label htmlFor="username">User ID<span className="hs-form-required">*</span></label>
                    <input name="username" type="text" className="form-control" id="form-enquiry-username" placeholder="e.g. abc1234567" required />
                </div></div>)}
                
                <div className="grid grid-cols-1 mb-4">
                    <label htmlFor="type-of-problem">Type of Problem<span className="hs-form-required">*</span></label>
                    <legend>Please select a reason for this support enquiry</legend>
                    <select required className="form-control" name="type-of-problem" id="form-enquiry-type-of-problem" defaultValue="">
                        <option disabled value="" > -- Choose Option -- </option>
                        <option value="CASCRS">Course / Assessment / Quiz Issue</option>
                        <option value="CASENR">Student Enrolment / Billing Issue</option>
                        <option value="CASTEC">Computer / Technical Issue</option>
                        <option value="CASOTH">Other</option>
                    </select>
                </div>

                <div className="grid grid-cols-1">
                    <div className="mb-4">
                        <label htmlFor="subject">Subject<span className="hs-form-required">*</span></label>
                        <legend>In just a few words, describe your enquiry</legend>
                        <input
                            required
                            name="subject"
                            type="text"
                            className="form-control"
                            id="form-enquiry-subject"
                            placeholder="e.g. I can't log into my account"
                            maxLength={255}
                        />
                    </div>
                </div>

                <div className="grid grid-cols-1">
                    <div className="mb-4">
                        <label htmlFor="message">Description<span className="hs-form-required">*</span></label>
                        <legend>Provide any additional comments regarding your enquiry.</legend>
                        <textarea
                            required
                            name="message"
                            className="form-control"
                            id="form-enquiry-message"
                            rows={10}
                            cols={50}
                            placeholder="e.g. These are the steps I've taken..."
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
                    value={campaign_code || ""}
                />
                <input
                    type="hidden"
                    name="campaign_sfid"
                    value={campaign_sfid || ""}
                />
                <input type="hidden" name="brand_code" value="afs" />
                <input type="hidden" name="brand_sfid" value="a027F0000018hEMQAY" />

                <button
                    id="form-lm-submit"
                    type="submit"
                    className="btn btn-primary button w-full mt-1"
                >
                    <span>Submit Enquiry</span>
                </button>
                <div className="clear"></div>

                <input
                    type="hidden"
                    name="lead_notes"
                    value="Enquiry was submitted from the AFS website contact page using the 'Student Support' option."
                />
            </form>

        </div>
    </div>);
}

export default FormspreeSupportForm;