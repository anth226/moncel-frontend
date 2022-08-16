import React from 'react';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import { AllModals } from 'src/store/slices/modal';

const MODAL_BG_ID = "modal-darkened-background";
const GlobalModal = () => {
    const activeModal = useAppSelector(state => state.activeModal.activeModal);
    const modalProps = useAppSelector(state => state.activeModal.modalProps);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    // display overlay iff an active modal is set; only one modal can be active at once. 
    if(activeModal == null) return null;

    const Component = AllModals[activeModal];
    return <div
        id={MODAL_BG_ID}
        className="fixed flex items-center justify-center inset-0 w-screen h-screen bg-black/[.8] z-10"
        onClick={(e) => {
            if('id' in e.target && (e.target as HTMLDivElement).id == MODAL_BG_ID) dispatch(toggleModal(null));
        }}>
        <Component {...modalProps} />
    </div>
};

export default GlobalModal;
