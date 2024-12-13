import { openai } from "@/app/openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

// Create a new thread
export async function POST() {
  try{
    const thread = await openai.beta.threads.create();
    return Response.json({ threadId: thread.id });
  }catch (error) {
    // console.log(error)
  }
}

type ParamsProps =  {
  params: {
    threadId: string,
  }
}
// Delete a thread
export async function DELETE(request: Request) {
  const { threadId } = await request.json()
  if (typeof threadId === 'undefined') {
    return NextResponse.json(
        {
            status: 200,
            message: 'Thread already deleted'
        });
  }
    try {
        await openai.beta.threads.del(threadId);
        return NextResponse.json(
            {
                status: 200,
                message: 'Thread deleted'
            })
    }catch (error) {
        // console.log(error)
    }
}
