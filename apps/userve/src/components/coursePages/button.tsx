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
        } else {
            buttonText = "Get Started"
        }
    } else {
        if (notify == "coming-soon") {
            buttonText = "Ser Notificado"
        } else {
            buttonText = "Empezar"
        }
    }

    return (<span>
        { notify == "coming-soon" ? <a data-bs-toggle="modal" data-bs-target={courseUrl}><ButtonTransparent color="lynch" className="text-lynch border-lynch hover:bg-lynch">{buttonText}</ButtonTransparent></a> : <a href={courseUrl}><ButtonTransparent color="dark-blue" className="text-dark-blue border-dark-blue hover:bg-dark-blue">{buttonText}</ButtonTransparent></a>}
    </span>)

};

export default CardButton;
