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
            buttonText = "Learn More"
        }
    } else {
        if (notify == "coming-soon") {
            buttonText = "Ser Notificado"
        } else {
            buttonText = "Aprende Más"
        }
    }

    return (<span>
        { notify == "coming-soon" ? <a data-bs-toggle="modal" data-bs-target={courseUrl}><ButtonTransparent color="slate-400" className='font-semibold !border-3 !border-slate-600 !text-slate-400'>{buttonText}</ButtonTransparent></a> : <a href={courseUrl}><ButtonTransparent color="navy" className="font-semibold !border-3 !border-navy">{buttonText}</ButtonTransparent></a>}
    </span>)

};

export default CardButton;
