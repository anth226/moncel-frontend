import React, {useEffect} from "react";

const HubspotContactForm = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src='https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            // @TS-ignore
            if (window.hbspt) {
                // @TS-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: "21498581",
                    formId: "9b2da8dd-d68c-4b6b-8ef5-820dde604edc",
                    target: '#hubspotForm'
                })
            }
        });
    }, []);

    return (
        <div>
            <div id="hubspotForm" className="p-8 rounded bg-white drop-shadow-md"></div>
        </div>
    );

}

export default HubspotContactForm;