import React from 'react';
import { render, StoryblokRichtext } from 'storyblok-rich-text-react-renderer-ts';

interface RichTextProps {
    document: StoryblokRichtext;
    className?: string;
    state?: string;
}

function RichText({ document, className, state }:RichTextProps) {
    // document is the rich text object you receive from Storyblok,
    // in the form { type: "doc", content: [ ... ] }
    // return <div className={className}>{render(document)}</div>;
    
    let newState : string;
    if (state) {
        newState = state;
    } else {
        newState = "";
    }

    return <div className={className}>{render(document, {
        // replace $STATE placeholder in RichText component with a defined state
        defaultStringResolver: (str) => (<p>{(str).replaceAll("$STATE", newState)}</p>),
        markResolvers: {
            code: (children) => <span>{children.toString().replaceAll("$STATE", newState) || ""}</span>
        }
    })}</div>;
    
}

export default RichText;