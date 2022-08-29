import { Store } from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import { createWrapper } from 'next-redux-wrapper';
import mobileMenuSlice from './slices/mobilemenu';

export const store = configureStore({
    reducer: {
      mobileMenu: mobileMenuSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const AppActions = {
  ...mobileMenuSlice.actions,
};

export const wrapper = createWrapper<Store<RootState>>(() => store);
