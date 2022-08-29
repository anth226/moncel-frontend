import { ApolloClient, InMemoryCache } from "@apollo/client";
import axios from 'axios';
import fs from 'fs';
import { ImageLoaderProps } from 'next/image';

const FILENAME_PATTERN = /\/([^\/]+)$/;

export const nextImageLoader = (resolverProps: ImageLoaderProps) => {
    return `/${parseFilename(resolverProps.src)}`;
};

export const graphqlClient = new ApolloClient({
    uri: `${process.env.STRAPI_URL}/graphql`,
    cache: new InMemoryCache(),
});

export const parseFilename = (s: string) => {
    const match = s.match(FILENAME_PATTERN);
    if(match == null) {
        throw Error(`Build unable to parse file name from ${s}`);
    }
    return match[1];
};

const downloadFile = async (url: string) => {
    const baseUrl = process.env.STRAPI_URL;
    const DOWNLOAD_DIR = `${process.cwd()}/public`;

    const filename = parseFilename(url);

    const response = await axios.get(`${baseUrl}${url}`, { responseType: 'arraybuffer' });
    fs.writeFileSync(`${DOWNLOAD_DIR}/${filename}`, response.data, 'binary');
    return true;
}
/**
 * For use in NextJS builds; input is a query result from Strapi, will 
 * recursively search for graphql objects where __typename is "UploadFile"
 * (or whatever typename an asset is) and download them from the provided url
 * into the public folder
 * 
 */
interface IOverrides {

};
type GQLNode = { __typename?: string, [key: string]: GQLNode | unknown } | Array<GQLNode> | string | null | undefined;
export const findAndDownloadStrapiFiles = async (strapiGqlNode: GQLNode, overrides?: IOverrides) => {
    const LOCAL_ASSET_TYPENAME = "UploadFile";
    const KEYS_TO_MATCH = ["url"]; // names of properties that are URLs to download
    
    if(typeof strapiGqlNode === 'string' || strapiGqlNode == null) {} // do nothing
    else if(strapiGqlNode instanceof Array) {
        for(let node of strapiGqlNode) findAndDownloadStrapiFiles(node);
    }
    else if(typeof strapiGqlNode === 'object' && "__typename" in strapiGqlNode && strapiGqlNode.__typename == LOCAL_ASSET_TYPENAME) {
        for(let key of KEYS_TO_MATCH) {
            if(key in strapiGqlNode) {
                // precondition: keys in KEYS_TO_MATCH must be urls when typenames match
                await downloadFile(strapiGqlNode[key] as string)
            }
        }
    }
    else if (typeof strapiGqlNode === 'object') {
        for (let key of Object.keys(strapiGqlNode)) {
            findAndDownloadStrapiFiles(strapiGqlNode[key] as GQLNode);
        }
    }
};
