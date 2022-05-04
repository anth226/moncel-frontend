import { configureStore } from '@reduxjs/toolkit';
import { useDispatch, useSelector, TypedUseSelectorHook } from 'react-redux';
import usStateSlice from './slices/usState';
import navbarSlice from './slices/navbar';

export const store = configureStore({
    reducer: {
      selectedState: usStateSlice.reducer,
      navbar: navbarSlice.reducer,
    },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
export const useAppDispatch = () => useDispatch<AppDispatch>();
export const AppActions = {
  ...usStateSlice.actions,
  ...navbarSlice.actions,
};
