/* eslint-disable @typescript-eslint/no-unused-vars */
import { NestFactory } from "@nestjs/core";
import { AppModule } from "../app.module";
import serverless from "serverless-http";
import { ExpressAdapter } from "@nestjs/platform-express";
import express from "express";

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

    // Importante: NÃO use setGlobalPrefix aqui, pois a Vercel já roteia para /api
    // app.setGlobalPrefix("api");

    // Inicializa o aplicativo
    await app.init();

    // Armazena a instância em cache
    cachedApp = app;
  }

  return cachedApp;
}

// Handler para AWS Lambda/Vercel
export const handler = async (event: any, context: any) => {
  await bootstrap();

  // Cria um handler serverless a partir do aplicativo Express
  const serverlessHandler = serverless(expressApp);

  // Processa a requisição
  return serverlessHandler(event, context);
};

// Exporta o handler para uso com Vercel
export default async (req: any, res: any) => {
  await bootstrap();

  // Adapta a requisição/resposta para o formato esperado pelo Express
  return expressApp(req, res);
};
