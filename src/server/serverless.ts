/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import serverless from 'serverless-http';
import { INestApplication } from '@nestjs/common';
import { APIGatewayProxyEvent, APIGatewayProxyResult, Context } from 'aws-lambda';

let cachedApp: INestApplication;

async function bootstrap() {
  if (!cachedApp) {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.init();
    cachedApp = app;
  }
  return cachedApp;
}

export const handler = async (event: APIGatewayProxyEvent, context: Context): Promise<APIGatewayProxyResult> => {
  const app = await bootstrap();
  const serverlessHandler = serverless(app.getHttpAdapter().getInstance());
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
