import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { MODALS as coursePurchaseFlowModals } from 'src/components/coursePages/lib/purchaseFlow';

export const AllModals = {
    ...coursePurchaseFlowModals,
};
export type AllModalNames = keyof typeof AllModals | null;

interface ActiveModalSlice {
    activeModal: AllModalNames | null;
}

const initialState: ActiveModalSlice = {
    activeModal: null,
    // additional data can be "passed" to modal here
}

const navbarSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<AllModalNames>) => {
          state.activeModal = action.payload;
        },
      }
});

export default navbarSlice;
