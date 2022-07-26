import React, { useEffect } from "react";
import { useForm } from 'react-hook-form';

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

    // const { register, setValue } = useForm();
    // setValue('state_notification', 'Ottawa');
    // setValue('state_notification3', 'Ottawa');
    // register("state_notification3", { value: "data" })
    
    const handleChange = () => {
        // select element
        let element = document.querySelector('input[name=state_notification]')
        document.getElementById("state_notification-3d517e57-c03c-499c-9763-52e1bba23c52").setAttribute('value',state);
        document.getElementById("state_notification-3d517e57-c03c-499c-9763-52e1bba23c52",state);
        console.log('value',element.value);
    };
    
    return (
        <div id="hubspotForm" onBlur={handleChange}>
                 {/* <input {...register("state_notification2")} /><br/>
                 <input name="state_notification3" /> */}

            <div id={`hub-${hubId}`} className={`p-8 rounded-md bg-white ${props.className || ""}`}></div>
        </div>
    );

}






// console.log('state:', state)
// console.log('input:', input)

export default HubspotContactForm;