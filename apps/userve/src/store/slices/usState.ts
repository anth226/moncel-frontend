import { UIEvent } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';

interface stateType {
    selected: string | null;
}

const initialState: stateType = {
    selected: null,
}
const stateSlice = createSlice({
    name: 'usState',
    initialState,
    reducers: {
        selectState: (state, action: PayloadAction<string>) => {
          state.selected = action.payload;
        },
      }
});

export default stateSlice;