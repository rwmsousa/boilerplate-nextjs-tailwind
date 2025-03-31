import { NestFactory } from '@nestjs/core';
import { FastifyAdapter, NestFastifyApplication } from '@nestjs/platform-fastify';
import { AppModule } from './app.module';
import Next from 'next';

async function bootstrap() {
  // Initialize Next.js
  const dev = process.env.NODE_ENV !== 'production';
  const nextApp = Next({ dev });
  await nextApp.prepare();

  // Create NestJS app with Fastify
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter()
  );

  // Enable CORS
  app.enableCors();

  // Start the server
  await app.listen(3000, '0.0.0.0');
  console.log(`Application is running on: ${await app.getUrl()}`);
}

// Start the application
bootstrap();