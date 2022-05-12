import React from 'react';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import { AllModals } from 'src/store/slices/modal';

const GlobalModal = () => {
    const activeModal = useAppSelector(state => state.activeModal.activeModal);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    // display overlay iff an active modal is set; only one modal can be active at once. 
    if(activeModal == null) return null;

    const Component = AllModals[activeModal];
    return <div 
        className="fixed flex items-center justify-center inset-0 w-screen h-screen bg-black/[.8] z-10"
        onClick={() => {
            dispatch(toggleModal(null));
        }}>
        <Component />
    </div>
};

export default GlobalModal;
