import React, { useEffect, useState } from 'react';
import { graphql, useStaticQuery } from 'gatsby';

import { Section } from 'src/components/core/Section';
import Card from 'src/components/coursePages/card'
import { CourseCardStoryblok } from 'src/storyblok-component-types';
import { Header2 } from 'src/components/shared/typography';
import { useAppSelector } from 'src/store';
import { CourseData, CourseTypeData, CourseType } from 'src/components/coursePages/types';
import { CoursePageStoryblok } from "src/storyblok-component-types";

interface CourseEdge {
    node: CourseData;
}

type EnrollLinksByCourseType = Record<CourseType, string>
type StoryblokDataByCourseType = Record<string, CoursePageStoryblok>

const retrieveCourseData = (state: string | null, edges: CourseEdge[], storyblokCourses?: CourseCardStoryblok[]) => {
    if(state === null) return [];
    const result = edges.reduce((matches: CourseData[], edge) => {
        if(edge.node.state === state) matches.push(edge.node);
        return matches;
    }, []);
    return result;
};

export default ({ coursePageContent }: { coursePageContent: CoursePageStoryblok[] }) => {
    const selectedState = useAppSelector(state => state.selectedState.selected) || null;
    const queryData = useStaticQuery(courseDataQuery);
    const courseEdges = queryData?.allCoursesJson?.edges || [];
    const enrollData: CourseEdge[] = queryData?.allCourseTypesJson?.edges || [];
    const enrollByCourseType: EnrollLinksByCourseType = enrollData.reduce((_enrollByCourseType, _enrollDatum) => {

    if(_enrollDatum.node.type != undefined) {
        _enrollByCourseType[_enrollDatum.node.type] = _enrollDatum.node.enroll || "";
    }
        return _enrollByCourseType;
    }, {} as EnrollLinksByCourseType);
    const storyblokDataByCourseType: StoryblokDataByCourseType = coursePageContent.reduce((_storyblokDataByCourseType, coursePageStory) => {
        if(coursePageStory.type) {
            _storyblokDataByCourseType[coursePageStory.type] = coursePageStory;
        }
        return _storyblokDataByCourseType;
    }, {} as StoryblokDataByCourseType);
    const [ courses, setCourses ] = useState<CourseData[]>([]);

    useEffect(() => {
        setCourses(retrieveCourseData(selectedState, courseEdges));
    }, [selectedState]);
    if(!selectedState) return null;
    return <Section>
        <Header2 className="mb-8">{`Courses available in ${selectedState}`}</Header2>
        <div className="grid grid-cols-3 grid-flow-row gap-8">
            { courses.map(courseData => {
                return <Card className="col-span-1 shadow-lg bg-inherit" {...courseData}></Card>
            }) }
        </div>
    </Section>
};

const courseDataQuery = graphql`
    query {
        allCoursesJson {
            edges {
                node {
                    tag
                    title
                    state
                    type
                    image
                    url
                    desc
                }
            }
        }
        allCourseTypesJson {
            edges {
              node {
                type
                enroll
              }
            }
          }
    }
`;
