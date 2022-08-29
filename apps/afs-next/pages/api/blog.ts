import type { NextApiRequest, NextApiResponse } from 'next';
import { } from 'moncel-one-sdk';


const ACCESS_TOKEN = process.env.HUBSPOT_ACCESS_TOKEN;
const client = new hubspot.Client({ accessToken: ACCESS_TOKEN });
const PAGE_SIZE = 10;

const handler = async (req: NextApiRequest, res: NextApiResponse) => {

  const hbstData = await client.cms.blogs.blogPosts.blogPostsApi.getPage(undefined, undefined, undefined, undefined, undefined, undefined, undefined, undefined, PAGE_SIZE);
  res.status(200).json(hbstData);
};

export default handler;
