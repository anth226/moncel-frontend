import React, { useEffect } from "react";
import { Header3 } from "../typography";
import styles from './styles.module.scss';

interface FormInfo {
    portalId: string;
    formId: string;
    className?: string;
    hubId: string;
    title: string;
}

const HubspotContactForm = (props: FormInfo) => {
    const { portalId, formId, hubId } = props;

    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://js.hsforms.net/forms/v2.js';
        document.body.appendChild(script);
        script.addEventListener('load', () => {
            // eslint-disable-next-line @typescript-eslint/ban-ts-comment
            // @ts-ignore
            if (window.hbspt) {
                // eslint-disable-next-line @typescript-eslint/ban-ts-comment
                // @ts-ignore
                window.hbspt.forms.create({
                    region: "na1",
                    portalId: portalId,
                    formId: formId,
                    target: '#hub-' + hubId
                });
            }
        });
    });

    return (
        <div id="hubspotForm" className={`${styles["hubspot"]}`}>
            <Header3 className="px-6 py-5 bg-teal text-white w-full !m-0">{props.title}</Header3>
            <div id={`hub-${hubId}`} className={`p-6 bg-alabaster ${props.className || ""}`}></div>
        </div>
    );
}

export default HubspotContactForm;
