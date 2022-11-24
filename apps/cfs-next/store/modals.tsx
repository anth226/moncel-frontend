import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { FC } from 'react';
import { Courses } from 'data/courses';
// import { FoodSafetySupervisorModal, FoodHandlerModal, FoodManagerModal, NSWRecertificationModal, IntroToFoodSafetyModal, HACCPModal } from 'components/courses/checkoutModal';
import LoginModal from 'components/core/Modal/login';

export type AllModalNames = keyof typeof Courses | "Login" | null;

export const AllModals: Record<Exclude<AllModalNames, null>, FC> = {
    // [ Courses.FoodSafetySupervisor ]: FoodSafetySupervisorModal,
    [ Courses.FoodHandler ]: () => null,
    // [ Courses.FoodManager ]: FoodManagerModal,
    // [ Courses.NSWRecertification ]: NSWRecertificationModal,
    // [ Courses.IntroToFoodSafety ]: IntroToFoodSafetyModal,
    // [ Courses.HACCP ]: HACCPModal,
    // [ Courses.Membership ]: () => null,
    Login: LoginModal,
};

interface ActiveModalSlice {
    activeModal: AllModalNames | null;
    modalProps?: ModalProps;
}

interface ModalProps {
    [key: string]: unknown;
}

type ToggleModalAction = AllModalNames;

const initialState: ActiveModalSlice = {
    activeModal: null,
    modalProps: {}
}

const modalSlice = createSlice({
    name: 'modal',
    initialState,
    reducers: {
        toggleModal: (state, action: PayloadAction<ToggleModalAction>) => {
            if (action.payload == null) {
                state.activeModal = null;
                state.modalProps = {};
                return
            }
          state.activeModal = action.payload;

        },
    },
});

export default modalSlice;
