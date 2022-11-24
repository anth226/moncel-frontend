import { useAppDispatch, useAppSelector, AppActions } from 'store';
import { AllModals } from 'store/modals';

const MODAL_BG_ID = "modal-darkened-background";
const GlobalModal = () => {
    const { activeModal, modalProps } = useAppSelector(state => state.modal);
    const dispatch = useAppDispatch();
    const { toggleModal } = AppActions;

    // display overlay iff an active modal is set; only one modal can be active at once. 
    if(activeModal == null || modalProps == null) return null;

    const Component = AllModals[activeModal];
    if(!Component) return null;
    return <div
        id={MODAL_BG_ID}
        className="fixed flex items-center justify-center inset-0 w-screen h-screen bg-black/[.4] z-100"
        onClick={(e) => {
            if('id' in e.target && (e.target as HTMLDivElement).id == MODAL_BG_ID) dispatch(toggleModal(null));
            e.stopPropagation();
        }}>
        <Component {...modalProps} />
    </div>
};

export default GlobalModal;
