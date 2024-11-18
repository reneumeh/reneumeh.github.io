import cors from 'cors';
import { NextApiRequest, NextApiResponse } from 'next';

// Initialize the CORS middleware
const corsMiddleware = cors({
  methods: ['GET', 'POST', 'OPTIONS'], // Allowed HTTP methods
  origin: ['https://reneumeh.github.io', 'https://reneumeh.vercel.app'], // Allowed origins
});

// Helper function to run middleware
export function runMiddleware(req: NextApiRequest, res: NextApiResponse, fn: Function) {
  return new Promise((resolve, reject) => {
    fn(req, res, (result: any) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve(result);
    });
  });
}

export default corsMiddleware;
