import React from 'react';
import { SectionFullWidth } from 'src/components/core/Section';
import { LogosStoryblok } from 'src/storyblok-component-types';

const LogosSection = (props: LogosStoryblok) => {
    const logos = [props.logo1, props.logo2, props.logo3, props.logo4, props.logo5, props.logo6 ] // does storyblok even support primitive lists?
    console.log(logos)
    debugger;
    return <SectionFullWidth className="bg-slate-100">
        <h1>{props.title}</h1>
        <div className="grid grid-cols-3 grid-flow-row">
            { logos.filter(logo => logo != undefined).map((logo, i) => {
                <img src={logo!.filename || ""} />
            })}
        </div>
    </SectionFullWidth>
};

export default LogosSection;
