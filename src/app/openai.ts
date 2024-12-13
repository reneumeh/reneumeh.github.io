import OpenAI from 'openai';

export const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
    maxRetries: 3,
    timeout: 60 * 1000,
});
