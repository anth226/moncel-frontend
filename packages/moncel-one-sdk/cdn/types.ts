
export type StoryblokStory = {
    name: string;
    full_slug: string;
    [key: string]: unknown;
}

export type StoryblokLayoutHeaderLink = {
    label: string;
    url: string;
}

export type StoryblokStoryQueryResponse = {
    stories: Array<StoryblokStory>;
}

export const isErrnoException = (candidate: any): candidate is NodeJS.ErrnoException => {
    return candidate instanceof Error && candidate.hasOwnProperty('code');
}
