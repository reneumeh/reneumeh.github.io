import {
  getAssistant,
  getThread,
  createThread,
  addMessage,
  getMessages,
  startRun,
  getRun,
} from './openai';
import { wait } from '@/app/Chatbot/util/utils';
import { NextApiRequest, NextApiResponse } from 'next';
import corsMiddleware, { runMiddleware } from './cors';

interface InquiryBody {
  inquiry: string;
  threadId?: string;
  messageId: string;
}

export default async function handler(req: NextApiRequest, res: NextApiResponse): Promise<void> {
  // Run CORS middleware
  await runMiddleware(req, res, corsMiddleware);

  // Handle preflight OPTIONS requests
  if (req.method === 'OPTIONS') {
    res.status(200).end();
    return;
  }

  try {
    const { inquiry, threadId, messageId }: InquiryBody = req.body;

    if (!inquiry || !messageId) {
      return res.status(400).json({ message: 'Bad request: Missing inquiry or messageId' });
    }

    let thread_id = threadId || '';
    const assistant = await getAssistant();
    const assistant_instructions = assistant.instructions;

    if (thread_id) {
      const existing_thread = await getThread({ threadId: thread_id });
      if (existing_thread.error) thread_id = '';
    }

    if (!thread_id) {
      const new_thread = await createThread();
      thread_id = new_thread.id;
    }

    await addMessage({ threadId: thread_id, message: inquiry, messageId });

    const last_message_time = new Date().getTime() / 1000;
    const run = await startRun({
      threadId: thread_id,
      instructions: `${assistant_instructions}\nToday is ${new Date()}.`,
    });

    const run_id = run.id;
    const messages_items = await fetchRunData(thread_id, run_id, last_message_time);

    res.status(200).send({ threadId: thread_id, messages: messages_items });
  } catch (error: any) {
    // console.error('Server Error:', error);
    res.status(500).json({ message: 'Internal Server Error', error: error.message });
  }
}

// Helper function to poll run data (extracted for modularity)
async function fetchRunData(thread_id: string, run_id: string, last_message_time: number) {
  let messages_items = [];
  let isFinished = false;
  const MAX_COUNT = 1200; // 120s
  const TIME_DELAY = 100; // 100ms
  let count = 0;

  do {
    const run_data = await getRun({ threadId: thread_id, runId: run_id });
    const status = run_data.status;

    if (status === 'completed') {
      const messages = await getMessages({ threadId: thread_id });
      messages_items = messages.filter(
        (message: any) => message.created_at > last_message_time
      );
      isFinished = true;
    } else if (['expired', 'cancelled', 'failed'].includes(status)) {
      isFinished = true;
    } else {
      count++;
      if (count >= MAX_COUNT) isFinished = true;
      else await wait(TIME_DELAY);
    }
  } while (!isFinished);

  return messages_items;
}
