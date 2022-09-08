import React from 'react';
import { render, StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';

interface RichTextProps {
    document: StoryblokRichtext;
    className?: string;
    state?: string;
}

interface ReplacePlaceholderProps {
    str?: React.ReactNode | string;
}

function RichText({ document, className, state }:RichTextProps) {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    // return <div className={className}>{render(document)}</div>;
    
    const newState = state || "";

    function ReplacePlaceholder({str}:ReplacePlaceholderProps) {
        return <span>{str.toString().replaceAll("$STATE", newState) || ""}</span>;
    }
    
    return <div className={className}>{render(document, {
        // replace $STATE placeholder in RichText component with a defined state
        defaultStringResolver: (str) => <p><ReplacePlaceholder str={str}/></p>,
        markResolvers: {
            code: (children) => <ReplacePlaceholder str={children}/>
        }
    })}</div>;
    
}

export default RichText;