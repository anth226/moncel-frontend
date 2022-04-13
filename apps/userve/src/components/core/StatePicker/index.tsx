import React from 'react';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import StateList from './stateList';

const { selectState } = AppActions;
const STATE_SELECT_PLACEHOLDER = "Select your state";

const StatePicker = () => {
    const dispatch = useAppDispatch();
    const selectedState = useAppSelector(state => state.selectedState.selected) || null;

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        dispatch(selectState(e.target.value))
    }

    return <div className="flex rounded p-4 shadow-lg bg-white">
        <div className="flex flex-col text-ink-blue text-3xl">
            <select onChange={handleSelect}>
                {StateList.map(state => {
                    return <option value={state} key={`option-${state}`}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            <h1 className="text-5xl opacity-60 font-bold">{selectedState || "\u00A0"}</h1>
        </div>

        <button className='ml-16 bg-blue-800 hover:bg-blue-900 text-white p-4 w-44 text-center rounded'>Find your course</button>
    </div>;
};

export default StatePicker;
