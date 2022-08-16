import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MODALS as coursePurchaseFlowModals } from 'src/components/coursePages/lib/purchaseFlow';
import { default as courseNotifyModal } from 'src/components/coursePages/lib/notify';

export const AllModals = {
    ...coursePurchaseFlowModals,
    ...{ courseNotifyModal: courseNotifyModal },
};

export type AllModalNames = keyof typeof AllModals | null;

interface ActiveModalSlice {
    activeModal: AllModalNames | null;
    modalProps?: ModalProps;
}

interface ModalProps {
    [key: string]: unknown;
}

type ToggleModalAction = {
    modalName: AllModalNames;
    modalProps?: ModalProps;
} | null;

const initialState: ActiveModalSlice = {
    activeModal: null,
    // additional data can be "passed" to modal here
}

const navbarSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ToggleModalAction>, modalProps?: ModalProps ) => {
            if (action.payload == null) {
                state.activeModal = null;
                state.modalProps = undefined;
                return
            }
          state.activeModal = action.payload.modalName;
          state.modalProps = action.payload.modalProps;
        },
    },
});

export default navbarSlice;
