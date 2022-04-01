import { getStoryblokStories as _getStoryblokStories } from 'moncel-one-sdk/cms';

export const getStoryblokStories = async () => {
    const siteName = process.env.ICX_NEXT_STORYBLOK_SITE_NAME || process.env.STORYBLOK_SITE_NAME || "";
    const token = process.env.ICX_NEXT_STORYBLOK_TOKEN || process.env.STORYBLOK_TOKEN || "";
    return await _getStoryblokStories(siteName, token);
};