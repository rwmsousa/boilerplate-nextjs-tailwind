import { NestFactory } from "@nestjs/core";
import { AppModule } from "../src/app.module";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";
import type { VercelRequest, VercelResponse } from "@vercel/node";

// Cria uma instância do Express
const expressApp = express();

// Variável para armazenar a instância do aplicativo NestJS
let cachedApp: any;

// Função para inicializar o aplicativo NestJS
async function bootstrap() {
  if (!cachedApp) {
    // Cria uma nova instância do aplicativo NestJS usando o adaptador Express
    const app = await NestFactory.create(
      AppModule,
      new ExpressAdapter(expressApp),
    );

    // Configuração de CORS se necessário
    app.enableCors();

    // Inicializa o aplicativo
    await app.init();

    // Armazena a instância em cache
    cachedApp = app;
  }

  return cachedApp;
}

export default async function handler(req: VercelRequest, res: VercelResponse) {
  await bootstrap();
  return expressApp(req, res);
}
