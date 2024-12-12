import { openai } from "@/app/openai";
import { NextResponse } from "next/server";

export const runtime = "nodejs";

type ParamsProps =  {
  params: {
    threadId: string,
  }
}
// Delete a thread
export async function DELETE(request: Request,{ params: { threadId } } : ParamsProps) {
    // console.log('threadIs route', threadId)
  if (typeof threadId === 'undefined') {
    return NextResponse.json(
        {
            status: 200,
            message: 'Thread already deleted'
        });
  }
    try {
        await openai.beta.threads.del(threadId);
    }catch (error) {
        // console.log(error)
    }
  
  
  return NextResponse.json(
    {
        status: 200,
        message: 'Thread deleted'
    }
  )
}
