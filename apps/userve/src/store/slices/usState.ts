import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface stateType {
    selected: string | undefined;
}

const initialState: stateType = {
    selected: undefined,
}

const stateSlice = createSlice({
    name: 'usState',
    initialState,
    reducers: {
        selectState: (state, action: PayloadAction<string>) => {
          state.selected = action.payload;
          if(window?.localStorage) {
            localStorage.setItem('selected_state', action.payload);
          }
        },
      }
});

export default stateSlice;
