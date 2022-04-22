import React from 'react';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import StateList from './stateList';

const { selectState } = AppActions;
const STATE_SELECT_PLACEHOLDER = "Select Your State";

const StatePicker = () => {
    const dispatch = useAppDispatch();
    const selectedState = useAppSelector(state => state.selectedState.selected) || null;

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newState = (e.target.value === STATE_SELECT_PLACEHOLDER) ? "" : e.target.value;
        dispatch(selectState(newState));
    }

    return <div className="flex justify-between rounded p-4 shadow-lg bg-white">
        <div className="flex flex-col w-2/3 text-navy mr-4">
            <select onChange={handleSelect}>
                {StateList.map(state => {
                    return <option value={state} key={`option-${state}`} selected={state == selectedState} disabled={!state}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            <h1 className="text-3xl text-navy opacity-50 font-bold">{selectedState || "\u00A0"}</h1>
        </div>
        <button className="btn btn-primary px-4 py-2">Find Your Course</button>
    </div>;
};

export default StatePicker;
