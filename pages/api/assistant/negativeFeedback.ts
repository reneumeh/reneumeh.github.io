import { deleteThread } from './openai';
import { NextApiRequest, NextApiResponse } from 'next';
import corsMiddleware, { runMiddleware } from './cors'; 

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  await runMiddleware(req, res, corsMiddleware);

  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  const { threadId } = req.body;

  if (typeof threadId === 'undefined') {
    return res.status(200).json({ message: "Thread already deleted" });
  }

  // console.log("delete thread", threadId, new Date().toLocaleTimeString());

  try {
    const result = await deleteThread({ threadId });
    return res.status(200).send({ result });
  } catch (error: any) {
    // console.error("assistant-error", error.name, error.message);
    res.status(500).send({ message: 'Error processing response', error: error.message });
    return;
  }
}
