/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { AppModule } from '../app.module';
import serverless from 'serverless-http';
import { INestApplication } from '@nestjs/common';

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

export const handler = async (event, context) => {
  const app = await bootstrap();
  const serverlessHandler = serverless(app.getHttpAdapter().getInstance());
  return serverlessHandler(event, context);
};
