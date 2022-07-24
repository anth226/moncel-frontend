import axios from 'axios';
import fs from 'fs';


const downloadFile = async (url: string) => {
    const filenamePattern = /\/([^\/]+)$/;
    const baseUrl = process.env.STRAPI_URL;
    const DOWNLOAD_DIR = `${process.cwd()}/public`;

    const filenameMatch = url.match(filenamePattern);
    if(filenameMatch == null) {
        throw Error(`Build unable to parse file name from ${url}`);
    }
    const filename = filenameMatch[1];

    const response = await axios.get(`${baseUrl}${url}`);
    fs.writeFileSync(`${DOWNLOAD_DIR}/${filename}`, response.data);
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
type GQLNode = { __typename?: string, [key: string]: GQLNode } | Array<GQLNode> | string | null | undefined;
export const findStrapiFilesToDownload = async (strapiGqlNode: GQLNode, overrides?: IOverrides) => {
    const LOCAL_ASSET_TYPENAME = "UploadFile";
    const KEYS_TO_MATCH = ["url"]; // names of properties that are URLs to download
    
    if(typeof strapiGqlNode === 'string' || strapiGqlNode == null) {} // do nothing
    else if(strapiGqlNode instanceof Array) {
        for(let node of strapiGqlNode) findStrapiFilesToDownload(node);
    }
    else if(typeof strapiGqlNode == 'object' && "__typename" in strapiGqlNode && strapiGqlNode.__typename == LOCAL_ASSET_TYPENAME) {
        for(let key of KEYS_TO_MATCH) {
            if(key in strapiGqlNode) {
                // precondition: keys in KEYS_TO_MATCH must be urls when typenames match
                await downloadFile(strapiGqlNode[key] as string)
            }
        }
    }
    else {
        for (let key of Object.keys(strapiGqlNode)) {
            findStrapiFilesToDownload(strapiGqlNode[key]);
        }
    }
};
