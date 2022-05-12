import React, { useEffect } from "react";

interface FormInfo {
    portalId: string;
    formId: string;
    className?: string;
    hubId: string;
}

const HubspotContactForm = (props: FormInfo) => {
    const { portalId, formId, hubId } = props;

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

    return (
        <div id="hubspotForm">
            <div id={`hub-${hubId}`} className={`p-8 rounded-md bg-white drop-shadow-lg ${props.className || ""}`}></div>
        </div>
    );

}

export default HubspotContactForm;