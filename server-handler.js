"use strict";

const { NestFactory } = require("@nestjs/core");
const { AppModule } = require("./src/server/app.module");
const serverless = require("serverless-http");

let cachedServer;

async function bootstrap() {
  if (!cachedServer) {
    const app = await NestFactory.create(AppModule);
    app.enableCors();
    await app.init();

    const expressApp = app.getHttpAdapter().getInstance();
    cachedServer = serverless(expressApp);
  }

  return cachedServer;
}

module.exports = async (req, res) => {
  const server = await bootstrap();
  return server(req, res);
};
