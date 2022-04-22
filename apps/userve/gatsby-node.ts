import { GatsbyNode } from "gatsby";
import path from 'path';
import fs from 'fs';
import { CourseData, CourseTypeData } from 'src/components/coursePages/types';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
    const { createPage } = actions;
    const rawCourseData = fs.readFileSync('./src/data/courses.json', 'utf8');
    const rawCourseTypeData = fs.readFileSync('./src/data/courseTypes.json', 'utf8');

    const courseData: CourseData[] = JSON.parse(rawCourseData);
    const courseTypeData: CourseTypeData = JSON.parse(rawCourseTypeData);
    courseData.forEach(course => {
        if(course.url === "#notify") return;
        const courseType = courseTypeData[course.type];
        createPage({
            path: `${course.url}`,
            context: {
                state: course.state,
                image: course.image,
                title: course.title,
                url: course.url,
                type: course.type,
                enroll: courseType.enroll,
            },
            component: path.resolve(`src/components/coursePages/template.tsx`),
        });
    });
};
