import React from 'react';

import { CoursePageStoryblok } from "src/storyblok-component-types";
import { Text, Header1 } from 'src/components/shared/typography';

const Tag = (props: { children: string | JSX.Element | JSX.Element[], className?: string }) => <div className={`bg-indigo-500 rounded${props.className}`}>
    { props.children }
</div>;

export default (props: CoursePageStoryblok) => {
    const imagesPath = "../../../images/";
    let defaultGraphic;
    switch(props.type){
        case "fh":
            defaultGraphic = `${imagesPath}usx_fh_ge_hero.jpg`;
        case "ah":
            defaultGraphic = `${imagesPath}usx_al_ge_hero.jpg`;
        case "fm":
            defaultGraphic = ``;
        case "rbs":
            defaultGraphic = `${imagesPath}usx_ca-hero.jpg`;
        case "basset":
            defaultGraphic = `${imagesPath}usx_al_il_hero.jpg`;
    }

    return <div className="grid grid-cols-3 grid-flow-row">
        <div className="col-start-1 col-span-1 flex flex-col gap-8">
            { props.tag ? <Tag>{props.tag}</Tag>: null}
            <Header1>{props.title || ""}</Header1>
            <Text>{props.desc || "" }</Text>
        </div>
        <div className="col-start-2 col-span-2">
            <img src={props.image?.filename || defaultGraphic} />
        </div>
    </div>;
};
