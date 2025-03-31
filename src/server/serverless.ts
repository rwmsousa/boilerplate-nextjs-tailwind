/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import serverless from 'serverless-http';
import { INestApplication } from '@nestjs/common';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';
import { ExpressAdapter } from '@nestjs/platform-express';
import express from 'express';

let cachedApp: INestApplication;
let expressInstance: express.Express;

export async function bootstrap() {
  if (!cachedApp) {
    const expressApp = express();
    const app = await NestFactory.create(AppModule, new ExpressAdapter(expressApp));
    app.enableCors();
    await app.init();
    cachedApp = app;
    expressInstance = expressApp;
  }
  return expressInstance;
}

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const app = await bootstrap();
  const serverlessHandler = serverless(app);
  const result = (await serverlessHandler(event, context)) as any;

  return {
    statusCode: result.statusCode || 200,
    body: typeof result.body === 'string' ? result.body : JSON.stringify(result.body || {}),
    headers: {
      'Content-Type': 'application/json',
      ...(result.headers || {}),
    },
  };
};
