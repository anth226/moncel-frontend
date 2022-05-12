import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import usStateSlice from './slices/usState';
import navbarSlice from './slices/navbar';
import modalSlice from './slices/modal';

export const store = configureStore({
    reducer: {
      selectedState: usStateSlice.reducer,
      navbar: navbarSlice.reducer,
      activeModal: modalSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const AppActions = {
  ...usStateSlice.actions,
  ...navbarSlice.actions,
  ...modalSlice.actions,
};
