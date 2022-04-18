import React from 'react';

import { Section, SectionFullWidth } from 'src/components/core/Section';
import Card from 'src/components/courses/card'
import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { Header2 } from 'src/components/shared/typography';

interface DummyCourse extends CourseCardStoryblok {
    isAvailable: boolean;
}
    
const dummyCourseData: (course: string) => DummyCourse[] = (course) => [
    {
        title:`${course} Food Handler Training`,
        description: "This training program teaches food handlers essential knowledge in food safety to help prevent foodborne illness.",
        image: { 
            filename: 'https://www.userve.com/hubfs/course-assets/usx_fh_ge_hero.jpg',
            id: 0,
            name: 'foo',
        },
        isAvailable: true,
        _uid: "",
        component: "course_card",
    },
    {
        title: `${course} Alcohol Server / Seller Training`,
        description: "This course teaches you how to responsibly serve and sell alcohol to help prevent alcohol-related incidents and lawsuits.",
        image: {
            filename: 'https://www.userve.com/hubfs/course-assets/usx_al_ge_hero.jpg',
            id: 0,
            name: 'foo',
        },
        isAvailable: false,
        _uid: "",
        component: "course_card",
    },
    {
        title: `${course} Food Manager Training`,
        description: "This program is ideal for food service managers and is designed to meet the training requirements across various states and counties.",
        image: {
            filename: 'https://www.userve.com/hubfs/course-assets/usx_al_ge_hero.jpg',
            id: 0,
            name: 'foo',
        },
        isAvailable: false,
        _uid: "",
        component: "course_card",
    }
];

const STATE = "California";

export default () => {
    const cardsData = dummyCourseData(STATE);

    return <Section>
        <Header2 className="mb-8">{`Courses available in ${STATE}`}</Header2>
        <div className="grid grid-cols-3 grid-flow-row gap-8">
            { cardsData.map(cardData => <Card className="col-span-1 shadow-lg bg-inherit" {...cardData}></Card>) }
            </div>
    </Section>
};
