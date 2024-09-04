import { getMessages } from './openai';
import { NextApiRequest, NextApiResponse } from 'next';

interface Message {
  // Define the structure of a message based on your actual data
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  const { threadId, messageId, feedback } = req.body;

  if (typeof threadId === 'undefined' || messageId === "") {
    return res.status(400).json({ message: "Bad request" });
  }

  let result: any = null;

//   try {
//     const messages: Message[] = await getMessages({ threadId });
    
//     const response = await fetch(
//       "http://platformapi-sandbox.spacemap42.com" + API_GPT_LOG, {
//       method: 'POST',
//       headers: {
//         Accept: 'application/json',
//         'Content-Type': 'application/json',
//       },
//       body: JSON.stringify({
//         messages: messages,
//         messageId: messageId,
//         feedback: feedback,
//       }),
//     });

//     if (!response.ok) {
//       throw new Error(`HTTP error! status: ${response.status}`);
//     }

//     result = await response.json();

//   } catch (error: any) {
//     console.log("assistant-error", error.name, error.message);
//     return res.status(500).json({ message: 'Error processing response' });
//   }

  return res.status(200).json({ result });
}
