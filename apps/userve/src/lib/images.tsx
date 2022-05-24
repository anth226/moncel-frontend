import React from 'react';
import { GatsbyImage, getImage, IGatsbyImageData } from 'gatsby-plugin-image';

import { Slug, LocalFileSource } from 'src/lib/storyblokSourceTypes';

// Stories contain imageFileSrc nodes and sometimes need to be passed to components
export interface StoryblokStoryProps {
    story: Slug;
};

// find a filename by existence of an extension
export const getFilename = (s: string): string => {
    const match = s.match(/\/?([^\/]+\.\w+$)/);
    if(!match || !match[1]) console.log(`unable to find file name in file ${s}`);
    return match ? (match[1] || "") : "";
};

// Given a filename and a storyblok node, find a file node that matches filename (if it exists)
// Note that gatsby-transformer-sharp does not support svg, and svg does not need it
export const findMatchingLocalFileNode = (filename: string, node: Slug): LocalFileSource | null => {
    let match = null;
    (node.imageFileSrc || []).forEach(localFileSrc => {
        if(getFilename(localFileSrc.publicURL) === filename) match=localFileSrc;
    });
    return match;
};

interface DynamicImageProps {
    fileNode: any;
    alt: string;
    [key: string]: unknown;
}
export const DynamicImage = ({ fileNode, alt, ...rest }: DynamicImageProps) => {
    let image: IGatsbyImageData | string | undefined;
    if(fileNode == null) return null;
    if(!fileNode.childImageSharp) {
        image = fileNode.publicURL as string;
        // publicURL exists with no childImageSharp data means svg
        return <img src={image} alt={alt} {...rest} />
    }
    else if(fileNode?.childImageSharp){
        image = getImage(fileNode);
        return <GatsbyImage image={image!} alt={alt} {...rest}></GatsbyImage>
    }
    else {
        throw Error(`Unable to retrieve image data for image:\n${fileNode}`);
    }
};
