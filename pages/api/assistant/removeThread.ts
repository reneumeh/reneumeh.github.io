import { deleteThread } from './openai';
import { NextApiRequest, NextApiResponse } from 'next';

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  res.setHeader('Access-Control-Allow-Origin', 'https://reneumeh.github.io'); 
  res.setHeader('Access-Control-Allow-Origin', 'https://reneumeh.vercel.app'); // Allow only specific origins
  res.setHeader('Access-Control-Allow-Methods', 'GET, POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type, Authorization');

  // Handle preflight OPTIONS request
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }
  const { threadId } = req.body;
  
  if (typeof threadId === 'undefined') {
    return res.status(200).json({ message: "Thread already deleted" });
  }

  console.log("delete thread", threadId, (new Date()).toLocaleTimeString());

  let result = null;

  try {
    result = await deleteThread({ threadId });
  } catch (error: any) {
    res.status(500).send('Error processing response');
    console.log("assistant-error", error.name, error.message);
    return;
  }

  return res.status(200).send({ result });
}
