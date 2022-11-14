import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface stateType {
    isMobileMenuOpen: boolean;
}

const initialState: stateType = {
    isMobileMenuOpen: false,
};

const mobileMenuSlice = createSlice({
    name: 'mobileMenu',
    initialState,
    reducers: {
        toggleMobileMenu: (state, action: PayloadAction<boolean | undefined>) => {
          state.isMobileMenuOpen = action.payload == undefined ? !state.isMobileMenuOpen : action.payload;
        },
      }
});

export default mobileMenuSlice;
