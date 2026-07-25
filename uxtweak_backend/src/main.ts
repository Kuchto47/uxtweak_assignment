import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { ConsoleLogger } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    logger: new ConsoleLogger({
      colors: true,
      prefix: 'UXTweakBE',
    }),
  });

  app.enableCors({
    origin: 'http://localhost:9000',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS',
    credentials: true,
  });

  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
