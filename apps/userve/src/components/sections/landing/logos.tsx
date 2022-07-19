import React from 'react';
import { Section } from 'src/components/core/Section';
import { LogosStoryblok } from 'src/storyblok-component-types';
import { Header4 } from 'src/components/core/typography';
import { StoryblokStoryProps, getFilename, findMatchingLocalFileNode, DynamicImage } from 'src/lib/images';

const LogosSection = (props: LogosStoryblok) => {
    const logos = [props.logo1, props.logo2, props.logo3, props.logo4, props.logo5, props.logo6 ] // does storyblok even support primitive lists?
    return <Section>
            <Header4 className="m-x-auto text-center">{props.title || ""}</Header4>
            <div className="grid grid-cols-12 grid-flow-row gap-3">
                { logos.filter((logo, i) => logo != undefined).map((logo, i) => {
                    const localImageFileNode = findMatchingLocalFileNode(getFilename(logo!.filename), props.story)
                    return <div className="col-span-6 md:col-span-4 row-span-1 h-28 items-center justify-center border-2 border-solid border-indigo-200 rounded-lg p-4 flex" key={`logos-${i}`}><DynamicImage fileNode={localImageFileNode} className="block m-auto max-w-100 md:max-w-[50%] max-h-[4rem]" alt={`${logo?.alt || "Userve"}`}/></div>
                })}
            </div>
        </Section>

};

export default LogosSection;
