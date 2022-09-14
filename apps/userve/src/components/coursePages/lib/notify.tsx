import React, { MouseEvent } from "react";
import { HubspotContactForm } from 'src/components/shared/Form';

import { Header3, Text } from 'src/components/core/typography';
import { useAppDispatch, AppActions } from 'src/store';

interface NotifyProps {
    state?: string;
    title?: string;
}

const NotifyForm = (props:NotifyProps) => {
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const dismissModal = () => dispatch(toggleModal(null));

    return <div className="border-none shadow-lg w-full md:w-[500px] max-h-[800px] overflow-auto flex flex-col pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
        <div className="relative p-8">
            <button type="button"
                className="absolute right-8 btn-close box-content w-4 h-4 p-0 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                onClick={dismissModal}></button>
            <Header3 className="!mb-2">Get Notified</Header3>
            <Text className="!text-bluewood">{`To learn more about our upcoming training programs in ${props.state}, complete the form below and our team will get back to you with more details.`}</Text>

            <HubspotContactForm portalId="21498581" formId="769b522c-30a7-42dc-9da5-11ea2d6b0a06" hubId="not" className="text-inherit !drop-shadow-none !p-0" state={props.state} title={props.title}/>
        </div>
    </div>;
}

export default NotifyForm;
