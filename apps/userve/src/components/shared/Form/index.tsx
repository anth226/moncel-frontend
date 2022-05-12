import React, { useEffect } from "react";

interface FormInfo {
    portalId: string;
    formId: string;
    className: string;
}

const HubspotContactForm = (props: FormInfo) => {
    const { portalId, formId } = props;
    let formNum: number = Math.floor(Math.random() * 100000) + 1;

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
                    target: '#hub' + formNum
                })
            }
        });
    }, []);

    return (
        <div id="hubspotForm">
            <div id={`hub${formNum}`} className={`p-8 rounded-md bg-white drop-shadow-lg ${props.className || ""}`}></div>
        </div>
    );

}

export default HubspotContactForm;