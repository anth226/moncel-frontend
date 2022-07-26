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
  
    const handleChange = () => {
        let input = document.querySelector('input[name="state_notification"]')
        if (!input) return;
        input.value = state;
        input.dispatchEvent(new Event('input', { bubbles: true }));
    };
    
    return (
        <div id="hubspotForm" onBlur={handleChange}>
            <div id={`hub-${hubId}`} className={`p-8 rounded-md bg-white ${props.className || ""}`}></div>
        </div>
    );

}






// console.log('state:', state)
// console.log('input:', input)

export default HubspotContactForm;