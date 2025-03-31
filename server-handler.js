'use strict';

const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const serverless = require('serverless-http');

let server;

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.enableCors();
  await app.init();
  return app;
}

exports.handler = async (event, context) => {
  if (!server) {
    const app = await bootstrap();
    server = serverless(app.getHttpAdapter().getInstance());
  }
  return server(event, context);
};