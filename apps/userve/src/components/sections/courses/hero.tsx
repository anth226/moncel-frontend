import React from 'react';
import { StaticImage } from "gatsby-plugin-image";

import { Section } from 'src/components/core/Section';
import StatePicker from 'src/components/core/StatePicker';

const HeroSection = () => {
    return <Section className="grid grid-cols-2 grid-rows-3 items-center">
        <h1 className="col-start-1 col-span-1 row-start-1 text-5xl font-bold text-slate-700">Get your certificate in hours not days.</h1>
        <p className="col-start-1 col-span-1 row-start-2 text-lg text-slate-400">Flexible courses for alcohol servers and food handlers, with no prior experience required.</p>
        <div className="col-start-1 col-span-1 row-start-3">
          <StatePicker />
        </div>
        <div className="col-start-2 row-span-3">
          <StaticImage src="../../../images/usx_hero_home.png" alt="usx logo" />
        </div>
    </Section>
};

export default HeroSection;
