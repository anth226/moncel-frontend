import React from 'react';

import { Section } from 'src/components/core/Section';
import { HeroStoryblok } from 'src/storyblok-component-types';
import { genHighlightMarkup } from 'src/components/shared/typography';

const HIGHLIGHT_WORDS = ['you'];
export default (props: HeroStoryblok) => {
    const title = props.title || "";
    return <Section className="grid grid-cols-2 grid-rows-2 items-center justify-start">
        <div className="col-start-1 row-span-2 flex flex-col">
            <h1 className="text-5xl font-bold text-slate-700 my-6" dangerouslySetInnerHTML={genHighlightMarkup(title, HIGHLIGHT_WORDS)} />
            <p className="text-lg text-slate-400">{props.description || ""}</p>
        </div>
        <div className="col-start-2 row-span-3">
            <img src={props.graphic?.filename || ""} alt="hero graphic" />
        </div>
    </Section>;
};
