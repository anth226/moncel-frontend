import React, { useEffect } from 'react';
import { Link } from 'gatsby';

import { useAppDispatch, useAppSelector, AppActions } from 'src/store';
import StateList from './stateList';
import { getState } from 'src/lib/geolocation';

const ButtonHref = "/us/courses";
const { selectState } = AppActions;
const STATE_SELECT_PLACEHOLDER = "Select Your State";

const StatePicker = () => {
    const dispatch = useAppDispatch();
    const selectedState = useAppSelector(state => state.selectedState.selected) || undefined;

    const handleSelect = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const newState = (e.target.value === STATE_SELECT_PLACEHOLDER) ? "" : e.target.value;
        dispatch(selectState(newState));
    }

    useEffect(() => {
        getState().then((state) => {
            dispatch(selectState(state));
        });
    });

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

    return <div className="flex flex-col md:flex-row justify-between rounded p-4 shadow-lg bg-white">
        <div className="flex flex-col w-2/3 text-navy mr-4">
            <select onChange={handleSelect} className={`bg-white ${selectedState ? "" : "mb-4"}`}>
                {StateList.map(state => {
                    return <option key={`option-${state}`} selected={state == selectedState} disabled={!state}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            { selectedState ? <h1 className={`text-3xl text-navy opacity-50 font-bold`}>{selectedState || "\u00A0"}</h1> : null }
        </div>
        <Link to={ButtonHref}><button className="btn btn-primary px-4 py-2 w-full lg:w-auto">Find Your Course</button></Link>
    </div>;
};

export default StatePicker;
