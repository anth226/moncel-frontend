import { getStoryblokStories as _getStoryblokStories } from 'moncel-one-sdk/cms';

export const getStoryblokStories = async () => {
    const siteName = process.env.ICX_NEXT_STORYBLOK_SITE_NAME || process.env.STORYBLOK_SITE_NAME || "";
    const token = process.env.ICX_NEXT_STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN || "";
    if(!siteName && token) throw Error('Required environment variables are missing');
    return await _getStoryblokStories(siteName, token);
};