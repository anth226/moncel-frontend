import fs from 'fs';
import path from 'path';

import { StoryblokStory, StoryblokStoryQueryResponse, isErrnoException } from './types';

const STORYBLOK_API_URL = "https://api.storyblok.com/v1/cdn";


const queryStoryblok = async () => {
    const siteName = process.env.STORYBLOK_SITE_NAME;
    const token = process.env.STORYBLOK_TOKEN;

    if(!(siteName && token)) throw Error('Required environment variables are missing.');

    const filterExpression = `starts_with=${siteName}/`;
    const tokenExpression = `token=${token}`
    const queryUrl = `${STORYBLOK_API_URL}/stories/?${filterExpression}&${tokenExpression}`;

    const data: StoryblokStoryQueryResponse = await (await fetch(queryUrl)).json();
    if(data.stories.length < 1) throw Error(`Storyblok story request did not match any stories:\n${queryUrl}`); // Error out to stop build
    return data.stories;
};

/**
 * Ping the storyblok api once and reuse the data for each page that depends on it
 */
export const getStoryblokStories = async () => {
    const CACHE_PATH = path.join(__dirname, '.stories');

    try {
        return JSON.parse(fs.readFileSync(CACHE_PATH, 'utf8')) as StoryblokStory[];
    } catch(e) {
        if(isErrnoException(e) && e.code === 'ENOENT') {
            //cache miss
            const stories = await queryStoryblok();
            await fs.writeFileSync(CACHE_PATH, JSON.stringify(stories), 'utf8');
            return stories;
        }
        else {
            //something else went wrong
            throw(e);
        }
    }
};

export * from './lib';