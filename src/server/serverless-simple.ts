/* eslint-disable @typescript-eslint/no-unused-vars */
import { Context, Handler } from 'aws-lambda';

export const handler: Handler = async (event: any, _context: Context) => {
  console.log('Event received:', JSON.stringify(event, null, 2));

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from TypeScript Serverless!',
      time: new Date().toISOString(),
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
    },
  };
};
