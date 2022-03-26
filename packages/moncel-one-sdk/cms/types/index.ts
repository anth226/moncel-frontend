export * from './storyblok';

export const isErrnoException = (candidate: any): candidate is NodeJS.ErrnoException => {
    return candidate instanceof Error && candidate.hasOwnProperty('code');
}
