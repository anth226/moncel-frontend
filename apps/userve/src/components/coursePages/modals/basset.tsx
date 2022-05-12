import { graphql, useStaticQuery, navigate } from 'gatsby';
import ReactMarkdown from 'react-markdown';
import React, { useState } from 'react';

import { Text, Header1, Header5 } from 'src/components/core/typography';
import { Slug } from 'src/lib/storyblokSourceTypes';
import { CheckboxCardStoryblok, BassetPurchaseModalStoryblok } from "src/storyblok-component-types";

const StoryblokQuery = graphql`
    query {
        allStoryblokEntry(filter: { full_slug: { eq: "courses/course-pages/hero/modals/basset-purchase-modal" }}) {
            nodes {
                full_slug
                content
            }
        }
    }
`;

const BassetModal = () => {
    const data = useStaticQuery(StoryblokQuery);
    const content: BassetPurchaseModalStoryblok = JSON.parse((data.allStoryblokEntry.nodes[0] as Slug).content);
    const [ productId, setProductId ] = useState<string | null>(null);

    const submit = () => {
        const PURCHASE_REDIRECT = `https://my.userve.com/urlcheckout/add?product=${productId}&qty=1`;
        navigate(PURCHASE_REDIRECT);
    }

    return <div className="flex flex-col items-center p-8 m-5 max-w-[800px] max-h-[700px] lg:max-h-auto rounded-2xl bg-white gap-4 md:gap-10 overflow-auto" onClick={(e) => e.stopPropagation()}>
        <Header1>{content.title || ""}</Header1>
        { (content.course_options || []).map((checkbox, i) => {
            return <div key={`course-option-${i}`} className="flex flex-col md:flex-row gap-2 bg-lilac p-6 rounded-xl" onClick={() => setProductId(checkbox.product_id)}>
                <div className="flex flex-col mb-4 lg:mb-8">
                    <Header5 className="!text-navy !mb-2">
                        { checkbox.title || ""}
                    </Header5>
                    <Text className="!mb-0">
                        <ReactMarkdown>
                            { checkbox.description || ""}
                        </ReactMarkdown>
                    </Text>
                </div>
                <div className="flex items-center gap-2">
                    <Text className="whitespace-nowrap !mb-0">{checkbox.checkbox_label || ""}</Text>
                    <input type="radio" value={checkbox.product_id} checked={ productId === checkbox.product_id } />
                </div>
            </div>
        })}
        <button className="w-full py-4 bg-navy text-white rounded-xl disabled:opacity-75" disabled={productId === null} onClick={submit}>Next Step</button>
    </div>;
};

export default BassetModal;

// https://my.userve.com/urlcheckout/add?product=3&qty=1
// https://my.userve.com/urlcheckout/add?product=12&qty=1