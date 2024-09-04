import OpenAI from 'openai';

const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    maxRetries: 3,
    timeout: 60 * 1000,
    dangerouslyAllowBrowser: true,
});

export async function getAssistant(): Promise<any> {
    try {
        return await openai.beta.assistants.retrieve(process.env.OPENAI_ASSISTANT_ID as string);
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

export async function createThread(): Promise<any> {
    try {
        return await openai.beta.threads.create();
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

interface GetThreadParams {
    threadId: string;
}

export async function getThread({ threadId }: GetThreadParams): Promise<any> {
    try {
        return await openai.beta.threads.retrieve(threadId);
    } catch (error: any) {
        console.log(error.name, error.message);
        return {
            error: true,
            message: error.message,
        };
    }
}

export async function deleteThread({ threadId }: GetThreadParams): Promise<any> {
    try {
        return await openai.beta.threads.del(threadId);
    } catch (error: any) {
        console.log(error.name, error.message);
        return {
            error: true,
            message: error.message,
        };
    }
}

interface AddMessageParams {
    threadId: string;
    message: string;
    messageId: string;
}

export async function addMessage({ threadId, message, messageId }: AddMessageParams): Promise<any> {
    try {
        const metadata = { id: messageId };
        return await openai.beta.threads.messages.create(threadId, {
            role: 'user',
            content: message,
            metadata,
        });
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

interface GetMessagesParams {
    threadId: string;
}

export async function getMessages({ threadId }: GetMessagesParams): Promise<any> {
    try {
        const messages = await openai.beta.threads.messages.list(threadId);
        return messages.data;
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

interface StartRunParams {
    threadId: string;
    instructions?: string;
}

export async function startRun({ threadId, instructions }: StartRunParams): Promise<any> {
    try {
        const options: { assistant_id: string; additional_instructions?: string } = {
            assistant_id: process.env.OPENAI_ASSISTANT_ID as string,
        };

        if (instructions) {
            options.additional_instructions = instructions;
        }

        return await openai.beta.threads.runs.create(threadId, options);
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

interface GetRunParams {
    threadId: string;
    runId: string;
}

export async function getRun({ threadId, runId }: GetRunParams): Promise<any> {
    try {
        return await openai.beta.threads.runs.retrieve(threadId, runId);
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

export async function cancelRun({ threadId, runId }: GetRunParams): Promise<any> {
    try {
        return await openai.beta.threads.runs.cancel(threadId, runId);
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

export async function getRunStep({ threadId, runId }: GetRunParams): Promise<any> {
    const query = { limit: 1 };
    try {
        return await openai.beta.threads.runs.steps.list(threadId, runId, query);
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}

interface SubmitOutputsParams {
    threadId: string;
    runId: string;
    tool_outputs: any;
}

export async function submitOutputs({ threadId, runId, tool_outputs }: SubmitOutputsParams): Promise<any> {
    try {
        return await openai.beta.threads.runs.submitToolOutputs(threadId, runId, {
            tool_outputs: tool_outputs,
        });
    } catch (error: any) {
        console.log(error.name, error.message);
        throw error;
    }
}
