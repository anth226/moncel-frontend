import React, { useEffect } from "react";

interface FormInfo {
    portalId: string;
    formId: string;
    className?: string;
    hubId: string;
    state?: string | null;
    title?: string | null;
}

const HubspotContactForm = (props: FormInfo) => {
    const { portalId, formId, hubId, state, title } = props;
    const course = state + ' ' + title;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            if ('hbspt' in window) {
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: portalId,
                    formId: formId,
                    target: '#hub-' + hubId
                });
            }
        });
    }, []);

    // Add state selected by the user to hidden field in form, if applicable
    const updateState = () => {
        let input = document.querySelector('input[name="state_notification"]')
        if (!input) return;
        input.value = course;
        input.dispatchEvent(new Event('input', { bubbles: true }));
    };

    return (
        <div id="hubspotForm" onSubmit={updateState}>
            <div id={`hub-${hubId}`} className={`p-8 rounded-md bg-white ${props.className || ""}`}></div>
        </div>
    );

}

export default HubspotContactForm;
