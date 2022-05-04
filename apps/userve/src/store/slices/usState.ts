import { UIEvent } from 'react'
import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { RootState } from '..';
import { getState } from 'src/lib/geolocation';

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
        },
      }
});

export default stateSlice;
