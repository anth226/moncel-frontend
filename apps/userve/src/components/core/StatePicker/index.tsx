import React from 'react';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import StateList from './stateList';

const { selectState } = AppActions;
const STATE_SELECT_PLACEHOLDER = "Select Your State";

// react devs are dumb sometimes
const backup = console.warn;
console.warn = function filterWarnings(msg) {
    const supressedWarnings = ['Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.'];
  
    if (!supressedWarnings.some(entry => msg.includes(entry))) {
      backup.apply(console);
    }
};

const StatePicker = () => {
    const dispatch = useAppDispatch();
    const selectedState = useAppSelector(state => state.selectedState.selected) || undefined;

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newState = (e.target.value === STATE_SELECT_PLACEHOLDER) ? "" : e.target.value;
        dispatch(selectState(newState));
    }

    // react devs are really annoying sometimes
    // https://github.com/facebook/create-react-app/issues/2070
    // suppresses react complaining about controlled/uncontrolled forms in dev console
    // you cannot start with disabled options selected in forms managed by react
        const ignored = 'Use the `defaultValue` or `value` props on <select> instead of setting `selected` on <option>.';
        const temp = console.error;
        console.error = (msg: string | null | undefined, ...args) => {
            if (!!msg && !msg.match(ignored)) {
                temp.apply(console, args);
              }
        }

    return <div className="flex justify-between rounded p-4 shadow-lg bg-white">
        <div className="flex flex-col w-2/3 text-navy mr-4">
            <select onChange={handleSelect}>
                {StateList.map(state => {
                    return <option key={`option-${state}`} selected={state == selectedState} disabled={!state}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            <h1 className="text-3xl text-navy opacity-50 font-bold">{selectedState || "\u00A0"}</h1>
        </div>
        <button className="btn btn-primary px-4 py-2">Find Your Course</button>
    </div>;
};

export default StatePicker;
