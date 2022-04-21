import { GatsbyNode } from "gatsby";
import path from 'path';
import fs from 'fs';
import { CourseData } from 'src/components/coursePages/types';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
    const { createPage } = actions;
    const rawData = fs.readFileSync('./courses.json', 'utf8');
    const courseData: CourseData[] = JSON.parse(rawData);
    courseData.forEach(course => {
        createPage({
            path: `${course.url}`,
            context: {
                state: course.state,
                image: course.image,
                url: course.url,
                type: course.type,
            },
            component: path.resolve(`src/components/coursePages/pages/template.tsx`),
        });
    });
};
