'use strict';

const { NestFactory } = require('@nestjs/core');
const { AppModule } = require('./dist/app.module');
const serverless = require('serverless-http');
const { bootstrap } = require('./dist/server/serverless');

let server;

async function setup() {
  if (!server) {
    server = await bootstrap();
  }
  return server;
}

exports.handler = async (event, context) => {
  const app = await setup();
  const handler = serverless(app);
  return handler(event, context);
};