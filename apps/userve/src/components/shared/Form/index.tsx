import React, { useEffect } from "react";

interface FormInfo {
    portalId: string;
    formId: string;
    className?: string;
    hubId: string;
    state?: string | null;
}

const HubspotContactForm = (props: FormInfo) => {
    const { portalId, formId, hubId, state } = props;
      
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);

        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: portalId,
                    formId: formId,
                    target: '#hub-' + hubId
                })
            }
        });
    }, []);
  
    // Add state selected by the user to hidden field in form, if applicable
    const updateState = () => {
        let input = document.querySelector('input[name="state_notification"]')
        if (!input) return;
        input.value = state;
        input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    
    return (
        <div id="hubspotForm" onSubmit={updateState}>
            <div id={`hub-${hubId}`} className={`p-8 rounded-md bg-white ${props.className || ""}`}></div>
        </div>
    );

}

export default HubspotContactForm;