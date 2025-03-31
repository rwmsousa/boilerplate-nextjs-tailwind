/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from '@nestjs/core';
import { FastifyAdapter } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import { APIGatewayProxyHandler } from 'aws-lambda';

const cachedServer = null; // Or remove if not needed

// Prefix unused parameters with underscore
export const handler: APIGatewayProxyHandler = async (event, _context) => {
  console.log('Event received:', JSON.stringify(event, null, 2));

  // Responder a qualquer rota com uma mensagem simples
  return {
    statusCode: 200,
    body: JSON.stringify({
      message: 'Hello from Serverless!',
      path: event.path,
      method: event.httpMethod,
      time: new Date().toISOString(),
    }),
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Credentials': true,
    },
  };
};
