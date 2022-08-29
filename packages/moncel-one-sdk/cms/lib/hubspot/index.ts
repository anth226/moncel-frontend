import hubspot, { Client } from '@hubspot/api-client';

const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const client = new hubspot.Client({ accessToken: ACCESS_TOKEN });
const PAGE_SIZE = 10;

const getBlogPosts = async (...params: Parameters<Client["cms"]["blogs"]["blogPosts"]["blogPostsApi"]["getPage"]>) => {
  if(params.length) {
    return await client.cms.blogs.blogPosts.blogPostsApi.getPage(...params);
  }
  return await client.cms.blogs.blogPosts.blogPostsApi.getPage(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, PAGE_SIZE);
};

export default { getBlogPosts };
