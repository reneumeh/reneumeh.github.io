import { openai } from "@/app/openai";

export const runtime = "nodejs";

type ParamsProps =  {
    params: {
      threadId: string,
    }
}

// Send a new message to a thread
export async function POST(request : Request, { params: { threadId } } : ParamsProps ) {
  const { content } = await request.json();
try {
  await openai.beta.threads.messages.create(threadId, {
    role: "user",
    content: content,
  });

  const stream = openai.beta.threads.runs.stream(threadId, {
    assistant_id: process.env.OPENAI_ASSISTANT_ID as string,
  });

  return new Response(stream.toReadableStream());
} catch (error) {
  // console.log(error) 
  }
}
