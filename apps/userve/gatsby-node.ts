import { GatsbyNode } from "gatsby";
const path = require('path');
const fs = require('fs');

interface CourseData {
    image: string;
    state: string;
    title: string;
    desc: string;
    url: string;
    type: "al" | "fh" | "fm";
    button: string;
    tag?: string;
}
// export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
//     const { createPage } = actions;
//     const rawData = fs.readFileSync('./courses.json', 'utf8');
//     const courseData: CourseData[] = JSON.parse(rawData);
//     courseData.forEach(course => {
//         const pageContext = { state: course.state };
//         createPage({
//             path: `${course.url}`,
//             context: {
//                 state: course.state,
//             },
//             component: "", //path to component
//         });
//     });
// };
