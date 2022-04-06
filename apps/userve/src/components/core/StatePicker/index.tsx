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

    return <div className="flex rounded p2 shadow-lg bg-white">
        <div className="flex flex-col">
            <select onChange={handleSelect}>
                {StateList.map(state => {
                    return <option value={state}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            <h1>{selectedState || STATE_SELECT_PLACEHOLDER}</h1>
        </div>

        <button className='button px-2'>Find your course</button>
    </div>;
};

export default StatePicker;
