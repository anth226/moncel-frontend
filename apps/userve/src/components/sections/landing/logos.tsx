import React from 'react';
import { Section } from 'src/components/core/Section';
import { LogosStoryblok } from 'src/storyblok-component-types';

const LogosSection = (props: LogosStoryblok) => {
    const logos = [props.logo1, props.logo2, props.logo3, props.logo4, props.logo5, props.logo6 ] // does storyblok even support primitive lists?

    return <Section>
            <h4 className="text-2xl font-bold m-x-auto text-center mb-7">{props.title}</h4>
            <div className="grid grid-cols-3 grid-flow-row gap-3">
                { logos.filter((logo, i) => logo != undefined).map((logo, i) => {
                    return <div className="col-span-1 row-span-1 h-28 items-center justify-center border-1 border-solid border-indigo-200 rounded-lg p-4 flex" key={`logos-${i}`}><img src={logo!.filename || ""} className="block m-auto max-w-[50%] max-h-[4rem]" /></div>
                })}
            </div>
        </Section>

};

export default LogosSection;
