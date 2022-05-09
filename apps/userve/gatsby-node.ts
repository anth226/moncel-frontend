import { GatsbyNode } from "gatsby";
import { createRemoteFileNode } from 'gatsby-source-filesystem'
import path from 'path';
import fs from 'fs';
import { CourseData, CourseTypeData } from './src/components/coursePages/types';
import { LegalData } from './src/components/legal/types';

export const createPages: GatsbyNode['createPages'] = async ({ actions }) => {
    const { createPage } = actions;
    const rawCourseData = fs.readFileSync('./src/data/courses/courses.json', 'utf8');
    const rawCourseTypeData = fs.readFileSync('./src/data/courseTypes/courseTypes.json', 'utf8');

    const courseData: CourseData[] = JSON.parse(rawCourseData);
    const courseTypeData: CourseTypeData = JSON.parse(rawCourseTypeData).reduce((enrollByType, courseType) => {
        enrollByType[courseType.type] = courseType.enroll;
        return enrollByType;
    }, {});
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

    const rawLegalData = fs.readFileSync('./src/data/legal/legal.json', 'utf8');
    const legalData: LegalData[] = JSON.parse(rawLegalData);
    legalData.forEach(legal => {
        createPage({
            path: `${legal.url}`,
            context: {
                title: legal.title,
                url: legal.url,
                type: legal.type,
            },
            component: path.resolve(`src/components/legal/template.tsx`),
        });
    });

};

exports.createSchemaCustomization = ({ actions }) => {
    const { createTypes } = actions
    createTypes(`
      type StoryblokEntry implements Node {
        imageFileSrc: [File] @link(from: "fields.imageFileSrc")
      }
    `)
  }

export const onCreateNode: GatsbyNode['onCreateNode'] = async ({ node, actions, createNodeId, getCache }) => {
    // Parse storyblok entries and do Bejamas' work for them
    if (node.internal.type === "StoryblokEntry") {
        const { createNode, createNodeField } = actions;
        // Extract image filenames
        const content = JSON.parse(node.content as string || "");

        const extractFilenames: (o: Object | Array<unknown> | unknown) => string[] = (o) => {
            let filenames: string[] = [];
            for( let k of Object.keys(o) ) {
                let v = o[k];
                if( v instanceof Array) {
                    for ( let w of v ) {
                        filenames = [ ...filenames, ...extractFilenames(v) ];
                    }
                } else if( typeof o[k] === "object" && o[k] != null) {
                    if ("filename" in o[k] && !!o[k].filename ) filenames.push(o[k].filename);
                    else {
                        filenames = [ ...filenames, ...extractFilenames(o[k])];
                    }
                }
            }
            return filenames;
        }

        const filenames = extractFilenames(content);
        const fileNodes = [];
        for ( let f of filenames ) {
            // https://github.com/gatsbyjs/gatsby/issues/35363
            const fileNode = await createRemoteFileNode({
                url: f,
                parentNodeId: node.id,
                createNode,
                createNodeId,
                getCache,
            });

            if(fileNode) {
                // createNodeField({ node, name: "imageFileSrc", value: fileNode.id});
                fileNodes.push(fileNode.id);
            }
        }
        if(fileNodes.length) {
            createNodeField({ node, name: "imageFileSrc", value: fileNodes });
        }

    }
};
