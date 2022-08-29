import type { NextApiRequest, NextApiResponse } from 'next';
import { hubspot } from 'moncel-one-sdk';

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  const hbstData = await hubspot.getBlogPosts();
  res.status(200).json(hbstData);
};

export default handler;
