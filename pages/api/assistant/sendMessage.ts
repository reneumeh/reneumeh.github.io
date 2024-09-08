import {
  getAssistant,
  getThread,
  createThread,
  addMessage,
  getMessages,
  startRun,
  getRun,
  submitOutputs,
  getRunStep,
  cancelRun,
} from './openai';
import { wait } from '@/app/Chatbot/util/utils';
import { NextApiRequest, NextApiResponse } from 'next';

interface InquiryBody {
  inquiry: string;
  threadId?: string;
  messageId: string;
}

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
  
  try {
    const { inquiry, threadId, messageId }: InquiryBody = req.body;

    if (!inquiry || !messageId) {
      return res.status(400).json({ message: 'Bad request: Missing inquiry or messageId' });
    }

    let thread_id = threadId || '';
    let assistant_instructions = '';
    let messages_items = [];
    let output_items = [];

    const assistant = await getAssistant();
    assistant_instructions = assistant.instructions;

    if (thread_id) {
      const exist_thread = await getThread({ threadId: thread_id });

      if (exist_thread.error) {
        thread_id = '';
      }
    }

    if (!thread_id) {
      const new_thread = await createThread();
      thread_id = new_thread.id;
    }

    await addMessage({ threadId: thread_id, message: inquiry, messageId: messageId });

    const last_message_time = new Date().getTime() / 1000;

    const run = await startRun({
      threadId: thread_id,
      instructions: `${assistant_instructions}\nToday is ${new Date()}.`,
    });

    const run_id = run.id;
    let flagFinish = false;
    let last_called_function = '';
    const MAX_COUNT = 2 * 600; // 120s
    const TIME_DELAY = 5; // 100ms
    let count = 0;

    do {
      const run_data = await getRun({ threadId: thread_id, runId: run_id });
      const run_step = await getRunStep({ threadId: thread_id, runId: run_id });
      const step = run_step.data[0];
      const status = run_data.status;

      if (status === 'completed') {
        const messages = await getMessages({ threadId: thread_id });
        console.log(messages)
        messages_items = messages.filter((message: any) => message.created_at > last_message_time);
        flagFinish = true;
      } else if (status === 'requires_action') {
        const required_action = run_data.required_action;
        const required_tools = required_action.submit_tool_outputs.tool_calls;

        console.log(required_action, required_tools);

        // let tool_output_items = [];

        // for (let rtool of required_tools) {
        //   const function_name = rtool.function.name;
        //   const function_args = JSON.parse(rtool.function.arguments);

        //   let tool_output = await callMockAPI({ function_name, function_args });

        //   console.log(tool_output);

        //   tool_output_items.push({
        //     tool_call_id: rtool.id,
        //     output: JSON.stringify(tool_output),
        //   });

        //   output_items.push({
        //     tool_call_id: rtool.id,
        //     tool_name: function_name,
        //     tool_args: function_args,
        //     output: tool_output[Object.keys(tool_output)[0]],
        //   });

        //   last_called_function = function_name;
        // }

        // await submitOutputs({
        //   threadId: thread_id,
        //   runId: run_id,
        //   tool_outputs: tool_output_items,
        // });
      } else if (['expired', 'cancelled', 'failed'].includes(status)) {
        flagFinish = true;
      }

      if (!flagFinish) {
        count++;

        if (count >= MAX_COUNT) {
          flagFinish = true;
        } else {
          await wait(TIME_DELAY);
        }
      }
    } while (!flagFinish);

    return res.status(200).send({
      threadId: thread_id,
      messages: messages_items,
    });
  } catch (error: any) {
    console.error('Server Error:', error);
    res.status(500).json({ message: 'Error processing response', error: error.message });
  }
}

