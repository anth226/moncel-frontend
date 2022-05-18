import { GatsbyNode } from "gatsby";
import { createRemoteFileNode } from 'gatsby-source-filesystem'
import path from 'path';
import fs from 'fs';
import { CourseData, CourseTypeData } from './src/components/coursePages/types';
import { Slug, DataProps } from './src/lib/storyblokSourceTypes';
import { LegalPageStoryblok } from './src/storyblok-component-types';

export const createPages: GatsbyNode['createPages'] = async ({ graphql, actions }) => {
    const { createPage } = actions;

    // course pages
    const rawCourseData = fs.readFileSync('./src/data/courses/courses.json', 'utf8');
    const rawCourseTypeData = fs.readFileSync('./src/data/courseTypes/courseTypes.json', 'utf8');

    const courseData: CourseData[] = JSON.parse(rawCourseData);
    const courseTypeEnrolls: Record<string, string> = JSON.parse(rawCourseTypeData).reduce((enrollByType, courseType) => { // TYPE IS WRONG
        enrollByType[courseType.type] = courseType.enroll;
        return enrollByType;
    }, {});
    courseData.forEach(course => {
        if(course.url === "#notify") return;
        const enroll = courseTypeEnrolls[course.type];
        createPage({
            path: `${course.url}`,
            context: {
                state: course.state,
                image: course.image,
                title: course.title,
                url: course.url,
                type: course.type,
                enroll,
            },
            component: path.resolve(`src/components/coursePages/template.tsx`),
        });
    });

    // legal pages
    const legalQueryData: { data?: DataProps } = await graphql(`
        query {
            allStoryblokEntry(filter: {full_slug: {regex: "/^legal*/"}}) {
                nodes {
                content
                slug
                full_slug
                }
            }
        }`);
    const legalPageSlugs: Slug[] = legalQueryData.data?.allStoryblokEntry.nodes || [];
    // will fail build if retrieving storyblok data for any page fails
    legalPageSlugs.forEach(legalPageSlug => {
        const content: LegalPageStoryblok = JSON.parse(legalPageSlug?.content || "");
        const { type } = content;
        const url = `/us/${type}`;
        createPage({
            path: url,
            context: {
                content,
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
