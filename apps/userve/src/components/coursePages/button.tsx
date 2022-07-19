import React from 'react';

import { ButtonTransparent } from 'src/components/shared';

interface ReactProps {
    lang: string;
    buttonText?: string;
    notify?: string | null;
    tag: string | null;
    url: string;
    courseUrl?: HTMLElement | string;
}

const CardButton = (props: ReactProps) => {
    
    let buttonText;
    let lang = props.lang;
    let notify = props.tag;
    let courseUrl = props.url;

    if (lang == "lang-en") {
        if (notify == "coming-soon") {
            buttonText = "Get Notified"
        } else if (notify != "") {
            buttonText = notify;
        } else {
            buttonText = "Get Started"
        }
    } else {
        if (notify == "coming-soon") {
            buttonText = "Ser Notificado"
        } else if (notify != "") {
            buttonText = notify;
        } else {
            buttonText = "Empieza Aquí"
        }
    }
console.log(props)
    return (<span>
        { notify == "coming-soon" ? <a data-bs-toggle="modal" data-bs-target={courseUrl}><ButtonTransparent className="text-dark-blue border-dark-blue hover:bg-lynch hover:bg-opacity-10">{buttonText}</ButtonTransparent></a> : <a href={courseUrl}><ButtonTransparent className="text-white bg-dark-blue border-dark-blue hover:bg-navy">{buttonText}</ButtonTransparent></a>}
    </span>)

};

export default CardButton;
