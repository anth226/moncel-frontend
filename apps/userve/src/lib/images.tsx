import React from 'react';
import { GatsbyImage, getImage } from 'gatsby-plugin-image';
import { Slug } from 'src/lib/storyblokSourceTypes';

// find a filename by existence of an extension
export const getFilename = (s: string): string => {
    const match = s.match(/\/?(\w+\.\w+$)/);
    if(!match || !match[1]) console.error(`unable to find file name in ${s}`)
    return match ? (match[1] || "") : "";
};


// Given a filename and a storyblok node, find a file node that matches filename (if it exists)
// Note that gatsby-transformer-sharp does not support svg, and svg does not need it
export const findMatchingLocalFileNode = (filename: string, node: Slug) => {
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
    // TODO: switch on file type; gatsby image does not handle svgs
    const image = getImage(fileNode);
    if(!image) throw Error(`Unable to retrieve image data for image:\n${fileNode}`);
    return <GatsbyImage image={image} alt={alt} {...rest}></GatsbyImage>
};
