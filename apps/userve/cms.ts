import { getStoryblokStories as _getStoryblokStories } from 'moncel-one-sdk/cms';

export const getStoryblokStories = async () => {
    const siteName = process.env.STORYBLOK_SITE_NAME || "";
    const token = process.env.STORYBLOK_TOKEN || "";
    return await _getStoryblokStories(siteName, token);
};
