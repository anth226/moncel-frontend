import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';

const imageQuery = graphql`
    query {
        phone:allFile(filter: { name: { eq: "usx-phone" }}) {
            nodes {
                name
                publicURL
                childImageSharp {
                    gatsbyImageData
                  }
            }
        }
    }
`;

const Phone = ({...props}) => {
    const imageData = useStaticQuery(imageQuery);
    return <a href="tel:1-855-546-1500" className={`flex items-center gap-x-2 text-navy ${props.className}`}><img src={imageData.phone.nodes[0].publicURL} alt="phone icon" width={16} height={16} loading="lazy"/>1 855-546-1500</a>
};

export default Phone;
