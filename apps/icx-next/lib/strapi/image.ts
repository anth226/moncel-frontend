import { ImageLoaderProps } from 'next/image';
import { parseFilename } from 'moncel-one-sdk';

export const imageLoader = (resolverProps: ImageLoaderProps) => {
    return `/${parseFilename(resolverProps.src)}`;
};
