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
        e.target.value = "Select Your State";
    }

    useEffect(() => {
        getState().then((state) => {
            dispatch(selectState(state));
        });
    }, []);

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

    return <div className="flex flex-col md:flex-row justify-between rounded-md p-4 shadow-xl bg-white">
        <div className="flex flex-col w-full md:w-1/2 lg:w-2/3 text-navy md:mr-4 mb-4 md:mb-0 before:content-[url('../images/usx_down_arrow.svg')] before:absolute before:top-0 before:right-0 relative ">
            <label htmlFor="stateSelect" className="hidden">Select Your State:</label>
            <select id="stateSelect" onChange={handleSelect} className="bg-transparent outline-0 pb-9 z-10 appearance-none text-base" data-test="statepicker">
                {StateList.map(state => {
                    return <option key={`option-${state}`} selected={!state} disabled={!state}>{state || STATE_SELECT_PLACEHOLDER}</option>
                })}
            </select>
            <div className={`text-3xl text-navy opacity-50 font-bold absolute pt-7 leading-7`} data-test="statepicker-value">{selectedState || "\u00A0"}</div>
        </div>
        <Link to={ButtonHref}><button className="btn btn-primary px-4 py-4 w-full md:w-auto" data-test="statepicker-btn">Find Your Course</button></Link>
    </div>;
};

export default StatePicker;
