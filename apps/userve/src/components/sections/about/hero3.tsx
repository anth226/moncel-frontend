import React from 'react';

import { Section } from 'src/components/core/Section';
import { CardsStoryblok, HeroStoryblok } from 'src/storyblok-component-types';
import { SubText } from 'src/components/core/typography';


export default ({ hero, benefits }: { hero: HeroStoryblok, benefits: CardsStoryblok}) => {
    const cards = benefits.cards || [];
    return <Section className="grid grid-cols-2 grid-rows-3 gap-10 items-center justify-start">
        <div className="col-start-2 row-span-3 flex flex-col gap-5">
            <h1 className="text-5xl font-bold text-slate-700 my-6">{hero.title}</h1>
            <p className="text-lg text-slate-400">{hero.description || ""}</p>

            {/* benefits cards */}
            <div className="grid grid-cols-2 grid-rows-2 gap-10">
                {cards.map(card => {
                    return <div className="flex">
                        
                        <div><img src="https://www.userve.com/hubfs/icons/usx-check.svg" className="mt-2 mr-4"/></div>
                        <div className="flex flex-col">
                            <SubText>{card.title || ""}</SubText>
                        </div>
                    </div>
                })}

            </div>
        </div>
        <div className="col-start-1 row-start-1 row-span-3">
            <img src={hero.graphic?.filename || ""} alt="hero graphic" />
        </div>
    </Section>;
};
