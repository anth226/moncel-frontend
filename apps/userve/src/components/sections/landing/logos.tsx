import React from 'react';
import { Section, SectionFullWidth } from 'src/components/core/Section';
import { LogosStoryblok } from 'src/storyblok-component-types';

const LogosSection = (props: LogosStoryblok) => {
    const logos = [props.logo1, props.logo2, props.logo3, props.logo4, props.logo5, props.logo6 ] // does storyblok even support primitive lists?
    console.log(logos)
    debugger;
    return <SectionFullWidth className="bg-slate-100">
        <Section>
            <h1 className="text-2xl text-slate-700 font-bold m-x-auto text-center mb-7">{props.title}</h1>
            <div className="grid grid-cols-3 grid-flow-row gap-3">
                { logos.filter(logo => logo != undefined).map((logo, i) => {
                    return <div className="col-span-1 row-span-1 h-28 items-center justify-center border-2 border-solid border-indigo-200 rounded-lg p-4"><img src={logo!.filename || ""} className="h-full block m-auto" /></div>
                })}
            </div>
        </Section>
    </SectionFullWidth>
};

export default LogosSection;
