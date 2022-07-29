import React from "react";
import HubspotContactForm from 'src/components/shared/Form';

import { Header3, Text } from 'src/components/core/typography';

const NotifyFormSection = () => {
    return <div>
        <div className="modal fade fixed top-0 left-0 hidden w-full h-full outline-none overflow-x-hidden overflow-y-auto bg-black/50" id="notify" aria-labelledby="notify" aria-modal="true" role="dialog">
            <div className="modal-dialog modal-dialog-centered relative w-auto pointer-events-none">
                <div className="modal-content border-none shadow-lg relative flex flex-col w-full pointer-events-auto bg-white bg-clip-padding rounded-md outline-none text-current">
                    <div className="modal-body relative p-8">
                        <button type="button"
                            className="absolute right-8 btn-close box-content w-4 h-4 p-0 text-black border-none rounded-none opacity-50 focus:shadow-none focus:outline-none focus:opacity-100 hover:text-black hover:opacity-75 hover:no-underline"
                            data-bs-dismiss="modal" aria-label="Close"></button>
                        <Header3 className="!mb-2">Get Notified</Header3>
                        <Text className="!text-bluewood">To learn more about our upcoming training program, complete the form below and our team will get back to you with more details.</Text>

                        <HubspotContactForm portalId="21498581" formId="769b522c-30a7-42dc-9da5-11ea2d6b0a06" hubId="not" className="text-inherit !drop-shadow-none !p-0" />
                    </div>
                </div>
            </div>
        </div>

    </div>
}

export default NotifyFormSection;

