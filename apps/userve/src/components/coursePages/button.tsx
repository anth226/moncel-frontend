import React from 'react';

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
        { notify == "coming-soon" ? <a data-bs-toggle="modal" data-bs-target={courseUrl}><button className="btn btn-invert w-full cursor-pointer">{buttonText}</button></a> : <a href={courseUrl}><button className="btn btn-primary w-full cursor-pointer">{buttonText}</button></a>}
    </span>)

};

export default CardButton;
