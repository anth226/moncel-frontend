import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface stateType {
    isMobileMenuOpen: boolean;
}

const initialState: stateType = {
    isMobileMenuOpen: false,
}

const navbarSlice = createSlice({
    name: 'navbar',
    initialState,
    reducers: {
        toggleNavbarOpen: (state, action: PayloadAction<boolean | undefined>) => {
          state.isMobileMenuOpen = action.payload == undefined ? !state.isMobileMenuOpen : action.payload;
        },
      }
});

export default navbarSlice;
