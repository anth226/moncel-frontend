import React from 'react';
import { useStaticQuery, navigate } from 'gatsby';

import { CourseTypeData } from 'src/components/coursePages/types';
import { useAppDispatch, AppActions } from 'src/store';
import { AllModalNames } from 'src/store/slices/modal';
import { BassetModal } from 'src/components/coursePages/modals';

enum PurchaseActions {
    MODAL,
    REDIRECT,
};

type ModalAction = {
    action: PurchaseActions.MODAL,
    payload: AllModalNames,
}

type RedirectAction = {
    action: PurchaseActions.REDIRECT,
    payload: string,
}

type PurchaseActionResponse = ModalAction | RedirectAction;

export const MODALS: Record<string, React.FC> = {
    basset: BassetModal,
};

export const purchaseFlow = (courseType: CourseTypeData): PurchaseActionResponse => {
    if(courseType.type in MODALS) {
        return {
            action: PurchaseActions.MODAL,
            payload: courseType.type,
        }
    }
    else if(!!courseType.enroll) {
        return {
            action: PurchaseActions.REDIRECT,
            payload: courseType.enroll,
        }
    }

    throw Error(`Purchase action not configured for course type ${courseType.type}`);
};

interface PurchaseButtonProps {
    courseType: CourseTypeData;
    children: JSX.Element | React.FC;
};

const PurchaseButton = ({ children, courseType }: PurchaseButtonProps) => {
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;
    const handleClick = () => {
        const { action, payload } = purchaseFlow(courseType);
        if(action == PurchaseActions.REDIRECT) {
            navigate(payload);
        }
        else if(action == PurchaseActions.MODAL) {
            dispatch(toggleModal(payload));
        }
    }

    return <div onClick={handleClick}>
        { children }
    </div>;
};

export default PurchaseButton;

