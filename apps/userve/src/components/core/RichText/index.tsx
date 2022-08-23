import React from 'react';
import { render } from 'storyblok-rich-text-react-renderer-ts';

interface RichTextProps {
    document: any;
    className?: string;
}

function RichText({ document, className }:RichTextProps) {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    return <div className={className}>{render(document)}</div>;
}

export default RichText;