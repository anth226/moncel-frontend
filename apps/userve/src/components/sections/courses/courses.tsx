import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Section } from 'src/components/core/Section';
import Card from 'src/components/coursePages/card'
import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { Header2 } from 'src/components/shared/typography';
import { useAppSelector } from 'src/store';
import { CourseData, CourseTypeData } from 'src/components/coursePages/types';

interface DummyCourse extends CourseCardStoryblok {
    isAvailable: boolean;
}

interface CourseEdge {
    node: CourseData;
}

const retrieveCourseData = (state: string | null, edges: CourseEdge[], storyblokCourses: CourseCardStoryblok[]) => {
    if(state === null) return [];
    const result = edges.reduce((matches: CourseData[], edge) => {
        if(edge.node.state === state) matches.push(edge.node);
        return matches;
    }, []);
    return result;
};

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

export default (StoryblokCourseData: CourseCardStoryblok[]) => {
    const selectedState = useAppSelector(state => state.selectedState.selected) || null;
    const courseEdges = useStaticQuery(courseDataQuery)?.allCoursesJson?.edges; // data from courses.json
    const [ courses, setCourses ] = useState<CourseData[]>([]);
    const cardsData = dummyCourseData(selectedState || "");

    useEffect(() => {
        setCourses(retrieveCourseData(selectedState, courseEdges, StoryblokCourseData));
    }, [selectedState]);
    if(!selectedState) return null;
    return <Section>
        <Header2 className="mb-8">{`Courses available in ${selectedState}`}</Header2>
        <div className="grid grid-cols-3 grid-flow-row gap-8">
            { courses.map(cardData => <Card className="col-span-1 shadow-lg bg-inherit" {...cardData}></Card>) }
            </div>
    </Section>
};

const courseDataQuery = graphql`
    query {
        allCoursesJson {
            edges {
                node {
                    id
                    tag
                    title
                    state
                    type
                    url
                    desc
                }
            }
        }
    }
`;
