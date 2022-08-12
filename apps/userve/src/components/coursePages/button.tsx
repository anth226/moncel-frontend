import React from 'react';

import { ButtonTransparent } from 'src/components/shared';
import { useAppDispatch, AppActions } from 'src/store';

interface ReactProps {
    lang: string;
    buttonText?: string;
    notify?: string | null;
    tag: string | null;
    url: string;
    courseUrl?: HTMLElement | string;
    state?:string;
    title?:string;
}

const CardButton = (props: ReactProps) => {
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    const showNotifyModal = () => {
        dispatch(toggleModal({ modalName: "courseNotifyModal", modalProps: { state: props.state, title: props.title } }));
    }

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
    return (<span>
        { notify == "coming-soon" ? <a onClick={showNotifyModal}><ButtonTransparent className="text-dark-blue border-dark-blue hover:bg-lynch hover:bg-opacity-10">{buttonText}</ButtonTransparent></a> : <a href={courseUrl}><ButtonTransparent className="text-white bg-dark-blue border-dark-blue hover:bg-navy">{buttonText}</ButtonTransparent></a>}
    </span>)

};

export default CardButton;
